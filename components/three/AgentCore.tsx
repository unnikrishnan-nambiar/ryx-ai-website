'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// The hero's 3D scene: the RYX agent as a glowing core. Enquiries arrive
// from three channels (WhatsApp green, website blue, phone gold) along
// curved paths, get answered in the core, and leave as qualified leads to
// the CRM ring. Pure three.js, no React renderer. It pauses offscreen and
// under prefers-reduced-motion renders a single still frame.

const CHANNELS = [
  { color: 0x25d366, from: new THREE.Vector3(-5.2, 2.6, -1.5) }, // WhatsApp
  { color: 0x8c9cff, from: new THREE.Vector3(5.4, 2.2, -2) }, // Website
  { color: 0xd6a84e, from: new THREE.Vector3(-4.6, -2.8, 1) }, // Phone
];

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export default function AgentCore({ className = '' }: { className?: string }) {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    } catch {
      return; // No WebGL: the CSS glow behind the canvas still shows.
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    renderer.domElement.setAttribute('aria-hidden', 'true');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 12);

    const world = new THREE.Group();
    scene.add(world);
    const glow = glowTexture();
    const disposables: { dispose(): void }[] = [glow];
    const track = <T extends { dispose(): void }>(x: T) => (disposables.push(x), x);

    // Core: a wireframe icosahedron around a bright inner sphere.
    const shell = new THREE.LineSegments(
      track(new THREE.WireframeGeometry(track(new THREE.IcosahedronGeometry(2.1, 2)))),
      track(new THREE.LineBasicMaterial({ color: 0x8c9cff, transparent: true, opacity: 0.45 })),
    );
    world.add(shell);
    // Inner core: a fresnel shader so it reads as a lit sphere, bright at
    // the rim and deep blue-violet in the middle, like the RYX mark.
    const inner = new THREE.Mesh(
      track(new THREE.IcosahedronGeometry(1.25, 5)),
      track(
        new THREE.ShaderMaterial({
          transparent: true,
          uniforms: { uTime: { value: 0 } },
          vertexShader: `
            varying vec3 vN; varying vec3 vV; varying vec3 vP;
            void main() {
              vec4 mv = modelViewMatrix * vec4(position, 1.0);
              vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vP = position;
              gl_Position = projectionMatrix * mv;
            }`,
          fragmentShader: `
            uniform float uTime; varying vec3 vN; varying vec3 vV; varying vec3 vP;
            void main() {
              float f = pow(1.0 - max(dot(vN, vV), 0.0), 2.2);
              float band = 0.5 + 0.5 * sin(vP.y * 6.0 + uTime * 1.6);
              vec3 deep = mix(vec3(0.10, 0.12, 0.45), vec3(0.36, 0.20, 0.75), band * 0.6);
              vec3 rim = vec3(0.62, 0.68, 1.0);
              gl_FragColor = vec4(mix(deep, rim, f) + f * 0.35, 0.96);
            }`,
        }),
      ),
    );
    world.add(inner);
    const halo = new THREE.Sprite(
      track(new THREE.SpriteMaterial({ map: glow, color: 0x5d76ff, transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending })),
    );
    halo.scale.set(9, 9, 1);
    world.add(halo);

    // Vertices of the shell as glowing nodes (sprites, so they stay round).
    const nodes = new THREE.Group();
    const nodeMat = track(new THREE.SpriteMaterial({ map: glow, color: 0xc9d1ff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    const seen = new Set<string>();
    const vp = track(new THREE.IcosahedronGeometry(2.1, 2)).getAttribute('position');
    for (let i = 0; i < vp.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(vp, i);
      const key = v.toArray().map((n) => n.toFixed(3)).join(',');
      if (seen.has(key) || Math.random() > 0.45) continue;
      seen.add(key);
      const sp = new THREE.Sprite(nodeMat);
      sp.position.copy(v);
      sp.scale.setScalar(0.28);
      nodes.add(sp);
    }
    world.add(nodes);

    // Orbit rings: the CRM ring (gold) and a faint outer ring.
    const ringMat = track(new THREE.MeshBasicMaterial({ color: 0xd6a84e, transparent: true, opacity: 0.55 }));
    const crmRing = new THREE.Mesh(track(new THREE.TorusGeometry(3.6, 0.012, 8, 220)), ringMat);
    crmRing.rotation.set(Math.PI / 2.3, 0.3, 0);
    world.add(crmRing);
    const outer = new THREE.Mesh(
      track(new THREE.TorusGeometry(5.2, 0.008, 8, 260)),
      track(new THREE.MeshBasicMaterial({ color: 0x8c9cff, transparent: true, opacity: 0.22 })),
    );
    outer.rotation.set(Math.PI / 1.8, -0.4, 0.2);
    world.add(outer);

    // Starfield.
    const starCount = 900;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 9 + Math.random() * 16;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      starPos.set([r * Math.sin(ph) * Math.cos(th), r * Math.sin(ph) * Math.sin(th), r * Math.cos(ph) - 6], i * 3);
    }
    const starGeo = track(new THREE.BufferGeometry());
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(
      starGeo,
      track(new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.7, depthWrite: false })),
    );
    scene.add(stars);

    // Message packets travelling into the core, and leads leaving to the ring.
    type Packet = { sprite: THREE.Sprite; curve: THREE.QuadraticBezierCurve3; t: number; speed: number; trail: THREE.Line };
    const packets: Packet[] = [];
    const spriteMats = CHANNELS.map((c) =>
      track(new THREE.SpriteMaterial({ map: glow, color: c.color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })),
    );
    const leadMat = track(new THREE.SpriteMaterial({ map: glow, color: 0xffd58a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));

    // Channel beacons where messages come from.
    CHANNELS.forEach((c, i) => {
      const b = new THREE.Sprite(spriteMats[i]);
      b.position.copy(c.from);
      b.scale.setScalar(0.9);
      world.add(b);
    });

    function spawn(i: number, outgoing = false) {
      const start = outgoing ? new THREE.Vector3(0, 0, 0) : CHANNELS[i].from.clone();
      let end: THREE.Vector3;
      if (outgoing) {
        const a = Math.random() * Math.PI * 2;
        end = new THREE.Vector3(Math.cos(a) * 3.6, Math.sin(a) * 3.6, 0).applyEuler(crmRing.rotation);
      } else {
        end = new THREE.Vector3((Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6, 0);
      }
      const mid = start.clone().lerp(end, 0.5).add(new THREE.Vector3((Math.random() - 0.5) * 2.5, 1.5 + Math.random(), 1.5));
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const sprite = new THREE.Sprite(outgoing ? leadMat : spriteMats[i]);
      sprite.scale.setScalar(outgoing ? 0.45 : 0.55);
      const trailGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
      const trail = new THREE.Line(
        trailGeo,
        new THREE.LineBasicMaterial({ color: outgoing ? 0xffd58a : CHANNELS[i].color, transparent: true, opacity: 0.0 }),
      );
      world.add(sprite, trail);
      packets.push({ sprite, curve, t: 0, speed: 0.22 + Math.random() * 0.12, trail });
    }

    // Seed some packets mid-flight so the first frame already has life.
    for (let k = 0; k < 6; k++) {
      spawn(k % 3);
      packets[packets.length - 1].t = Math.random() * 0.8;
    }

    function resize() {
      const w = el!.clientWidth;
      const h = el!.clientHeight;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      camera.aspect = w / Math.max(h, 1);
      // Pull the camera back on narrow screens so the rings fit.
      camera.position.z = camera.aspect < 1 ? 15 : 12;
      // On wide screens the headline sits left, so the core moves right.
      world.position.x = camera.aspect > 1.25 ? 3.4 : 0;
      world.position.y = camera.aspect < 1 ? -2.2 : 0;
      camera.updateProjectionMatrix();
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const pointer = { x: 0, y: 0 };
    function onMove(e: PointerEvent) {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener('pointermove', onMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduced) loop();
    });
    io.observe(el);

    const clock = new THREE.Clock();
    let spawnClock = 0;
    let raf = 0;

    function frame(dt: number, time: number) {
      world.rotation.y += dt * 0.12;
      shell.rotation.x = time * 0.08;
      nodes.rotation.copy(shell.rotation);
      const pulse = 1 + Math.sin(time * 2.2) * 0.04;
      inner.scale.setScalar(pulse);
      (inner.material as THREE.ShaderMaterial).uniforms.uTime.value = time;
      halo.material.opacity = 0.55 + Math.sin(time * 2.2) * 0.1;
      crmRing.rotation.z += dt * 0.25;
      stars.rotation.y = time * 0.01;

      // Ease the camera toward the pointer for a little parallax.
      camera.position.x += (pointer.x * 1.4 - camera.position.x) * 0.04;
      camera.position.y += (-pointer.y * 0.9 - camera.position.y) * 0.04;
      camera.lookAt(camera.position.x * 0.2, camera.position.y * 0.2, 0);

      spawnClock += dt;
      if (spawnClock > 0.55) {
        spawnClock = 0;
        spawn(Math.floor(Math.random() * 3));
      }

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += dt * p.speed;
        const mat = p.trail.material as THREE.LineBasicMaterial;
        if (p.t >= 1) {
          const wasIncoming = p.sprite.material !== leadMat;
          world.remove(p.sprite, p.trail);
          p.trail.geometry.dispose();
          mat.dispose();
          packets.splice(i, 1);
          // Roughly one in two answered enquiries becomes a qualified lead.
          if (wasIncoming && Math.random() < 0.55) spawn(0, true);
          continue;
        }
        p.sprite.position.copy(p.curve.getPoint(p.t));
        mat.opacity = Math.sin(p.t * Math.PI) * 0.28;
      }
      renderer.render(scene, camera);
    }

    function loop() {
      cancelAnimationFrame(raf);
      const tick = () => {
        if (!visible) return;
        const dt = Math.min(clock.getDelta(), 0.05);
        frame(dt, clock.elapsedTime);
        raf = requestAnimationFrame(tick);
      };
      clock.getDelta();
      raf = requestAnimationFrame(tick);
    }

    if (reduced) {
      world.rotation.y = 0.5;
      frame(0, 0);
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
      packets.forEach((p) => {
        p.trail.geometry.dispose();
        (p.trail.material as THREE.Material).dispose();
      });
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mount} className={className} />;
}
