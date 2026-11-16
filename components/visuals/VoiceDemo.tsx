'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '@/data/site';

// A sample booking call with the RYX AI voice assistant, played turn by
// turn while on screen. Next to it, the real number for the assistant, so
// visitors can call and hear it.
const turns = [
  { who: 'caller', text: 'Do you have a slot on Saturday?' },
  { who: 'ai', text: 'Yes, 11 AM and 3 PM are free. Shall I book 11 AM for you?' },
  { who: 'caller', text: '11 is perfect.' },
  { who: 'ai', text: 'Done. You will get a confirmation on WhatsApp in a minute.' },
] as const;

const bars = Array.from({ length: 28 }, (_, i) => 0.35 + 0.65 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.45)));

export default function VoiceDemo() {
  const [shown, setShown] = useState<number>(turns.length);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let t: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(([e]) => {
      clearInterval(t);
      if (!e.isIntersecting) return;
      setShown(1);
      t = setInterval(() => setShown((n) => (n >= turns.length + 2 ? 1 : n + 1)), 1600);
    });
    io.observe(ref.current!);
    return () => {
      io.disconnect();
      clearInterval(t);
    };
  }, []);

  return (
    <div ref={ref} className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <h2 className="headline text-[40px] sm:text-[64px]">Call our AI right now</h2>
        <p className="lede mt-6 max-w-[520px] text-white/75">
          Ring the RYX AI voice assistant and ask it anything. This is the same AI
          your customers would talk to.
        </p>
        <a
          href={`tel:${site.aiAssistantPhone}`}
          className="group mt-9 inline-flex min-h-[64px] items-center gap-4 rounded-full bg-white py-2 pl-2 pr-7 text-ink transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
        >
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white">
            <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/60" />
            <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
            </svg>
          </span>
          <span>
            <span className="block text-sm text-ink-2">Call the RYX AI assistant</span>
            <span className="tnum block font-display text-2xl font-bold tracking-tight">{site.aiAssistantPhoneDisplay}</span>
          </span>
        </a>
      </div>

      <div className="glass rounded-[28px] p-5 sm:p-7">
        <div className="flex h-14 items-center gap-1" aria-hidden>
          {bars.map((h, n) => (
            <span
              key={n}
              className="w-full origin-center animate-[wave_1.1s_ease-in-out_infinite] rounded-full bg-gradient-to-t from-signal to-[#9b5cff]"
              style={{ height: `${h * 100}%`, animationDelay: `${n * 45}ms` }}
            />
          ))}
        </div>

        <div className="mt-6 min-h-[260px] space-y-3 text-lg leading-relaxed">
          {turns.slice(0, Math.min(shown, turns.length)).map((t) => (
            <p
              key={t.text}
              className={`animate-arrive w-fit max-w-[90%] rounded-2xl px-4 py-3 ${
                t.who === 'ai' ? 'ms-auto rounded-br-md bg-signal' : 'rounded-bl-md bg-white/10'
              }`}
            >
              {t.text}
            </p>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/60">A sample booking call with our voice AI. Illustration.</p>
      </div>
    </div>
  );
}
