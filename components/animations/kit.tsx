'use client';

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';

// Shared pieces for the solution animations. Every animation is an SVG on a
// 480×300 canvas that renders a given `step` (0–3); the player below advances
// the step on a timer while the animation is on screen. CSS transitions do
// the actual motion, so each animation only has to describe what is visible
// at each step.

export const C = {
  ink: '#101217',
  text: '#4A5160',
  muted: '#8A919E',
  line: '#E4E7EC',
  card: '#FFFFFF',
  soft: '#F1F3F7',
  blue: '#3D5AFE',
  blueLight: '#E8ECFF',
  green: '#1B8A55',
  greenLight: '#E3F5EB',
  amber: '#C98A12',
  amberLight: '#FDF1D8',
  rose: '#C2414B',
  roseLight: '#FCE8EA',
  gold: '#D6A84E',
  night: '#111317',
};

const EASE = 'cubic-bezier(0.22,1,0.36,1)';

/** Fades and lifts its children in when `on` is true. */
export function Show({
  on,
  delay = 0,
  dy = 10,
  dx = 0,
  children,
}: {
  on: boolean;
  delay?: number;
  dy?: number;
  dx?: number;
  children: ReactNode;
}) {
  return (
    <g
      style={{
        opacity: on ? 1 : 0,
        transform: on ? 'translate(0px, 0px)' : `translate(${dx}px, ${dy}px)`,
        transition: `opacity 500ms ${EASE} ${on ? delay : 0}s, transform 600ms ${EASE} ${on ? delay : 0}s`,
      }}
    >
      {children}
    </g>
  );
}

/** Rounded card with a soft shadow. */
export function Card({
  x,
  y,
  w,
  h,
  r = 10,
  fill = C.card,
  stroke = C.line,
  strokeWidth = 1,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  r?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}) {
  return (
    <>
      <rect x={x} y={y + 2} width={w} height={h} rx={r} fill="rgba(16,18,23,0.06)" />
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={r}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        style={{ transition: `stroke 400ms ${EASE}, fill 400ms ${EASE}` }}
      />
    </>
  );
}

/** Placeholder text line. */
export function Line({ x, y, w, fill = C.line, h = 6 }: { x: number; y: number; w: number; fill?: string; h?: number }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} />;
}

export function Txt({
  x,
  y,
  children,
  size = 11,
  weight = 500,
  fill = C.ink,
  anchor = 'start',
}: {
  x: number;
  y: number;
  children: ReactNode;
  size?: number;
  weight?: number;
  fill?: string;
  anchor?: 'start' | 'middle' | 'end';
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight={weight}
      fill={fill}
      textAnchor={anchor}
      style={{ fontFamily: 'var(--font-sans), sans-serif', transition: `fill 400ms ${EASE}` }}
    >
      {children}
    </text>
  );
}

/** Small rounded label. Width is passed in since SVG can't measure text. */
export function Pill({
  x,
  y,
  w,
  label,
  fill = C.blueLight,
  color = C.blue,
  h = 18,
  size = 9.5,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  fill?: string;
  color?: string;
  h?: number;
  size?: number;
}) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} />
      <Txt x={x + w / 2} y={y + h / 2 + size / 2.8} size={size} weight={600} fill={color} anchor="middle">
        {label}
      </Txt>
    </>
  );
}

export function Check({ x, y, color = C.green, size = 14 }: { x: number; y: number; color?: string; size?: number }) {
  const s = size / 14;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx="7" cy="7" r="7" fill={color} />
      <path d="M3.8 7.2 6.1 9.4 10.3 4.8" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

/** Dashed connector that draws itself when `on`. */
export function Flow({ d, on, delay = 0, color = C.blue }: { d: string; on: boolean; delay?: number; color?: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeDasharray="4 4"
      strokeLinecap="round"
      pathLength={100}
      style={{
        opacity: on ? 0.7 : 0,
        transition: `opacity 500ms ${EASE} ${on ? delay : 0}s`,
      }}
    />
  );
}

/**
 * Advances 0 → steps-1 on a timer while the element is on screen, holds on
 * the last step a little longer, then loops. Under prefers-reduced-motion it
 * shows the final step and stays there.
 */
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

export function useStoryStep(steps: number, interval = 2400) {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(false);
  const [tick, setTick] = useState(0);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.35,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || reduced) return;
    const hold = step === steps - 1 ? interval * 1.6 : interval;
    const timer = window.setTimeout(() => setStep((s) => (s + 1) % steps), hold);
    return () => window.clearTimeout(timer);
  }, [visible, reduced, step, steps, interval, tick]);

  /** Jump to a step (from the step captions) and restart the timer. */
  function goTo(next: number) {
    setStep(next);
    setTick((t) => t + 1);
  }

  // Reduced motion: show the finished picture unless the visitor picks a step.
  return { ref, step: reduced && tick === 0 ? steps - 1 : step, goTo };
}
