'use client';

import { useEffect, useRef, useState } from 'react';

// Product shot: Ferry live on a sample real-estate website. The chat plays
// through on a loop while on screen. A sample business, labelled as such.
const script = [
  { from: 'agent', text: 'Hi, looking for a 2 or 3 BHK? I can share what’s available this week.' },
  { from: 'visitor', text: '2 BHK near Kakkanad, under ₹70 lakh?' },
  { from: 'agent', text: 'Three match. Skyline Residency 2 BHK, ₹64 L, ready to move. Want photos and a site visit?' },
  { from: 'visitor', text: 'Yes, Saturday morning' },
  { from: 'agent', text: 'Booked: Saturday 10:30 AM. I’ve sent the details to your WhatsApp.' },
] as const;

export default function BrowserFerry({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<number>(script.length);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current!;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let n = 0;
    const step = () => {
      n = n >= script.length ? 1 : n + 1;
      setShown(n);
      timer = setTimeout(step, n >= script.length ? 4200 : 1500);
    };
    const io = new IntersectionObserver(([e]) => {
      clearTimeout(timer);
      if (e.isIntersecting) {
        n = 0;
        step();
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <figure ref={ref} className={`w-full ${className}`}>
      <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#0f1430] shadow-[0_40px_120px_-30px_rgba(61,90,254,0.55)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3">
          <span className="flex gap-1.5" aria-hidden>
            <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="flex-1 truncate rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/60">harbourhomes.in</span>
        </div>

        <div className="relative grid min-h-[380px] bg-[#f6f3ee] sm:min-h-[420px]">
          {/* The sample website */}
          <div className="p-5 sm:p-7" aria-hidden>
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold text-[#1d2a24]">Harbour Homes</span>
              <span className="hidden gap-4 text-xs text-[#4b5a52] sm:flex">
                <span>Buy</span>
                <span>Rent</span>
                <span>Projects</span>
              </span>
            </div>
            <p className="mt-6 max-w-[260px] font-display text-[26px] font-bold leading-[1.05] tracking-tight text-[#1d2a24] sm:text-[30px]">
              Homes in Kochi, ready to move in.
            </p>
            <div className="mt-6 grid max-w-[300px] grid-cols-2 gap-3">
              {[
                ['from-[#c9b79c] to-[#8a7357]', '2 BHK · ₹64 L'],
                ['from-[#9fb3a8] to-[#5b7266]', '3 BHK · ₹92 L'],
              ].map(([g, t]) => (
                <div key={t} className="overflow-hidden rounded-xl bg-white shadow-sm">
                  <div className={`relative h-20 bg-gradient-to-br ${g}`}>
                    <span className="absolute bottom-2 left-2 h-7 w-12 rounded-sm bg-white/30" />
                    <span className="absolute bottom-2 left-16 h-11 w-9 rounded-sm bg-white/25" />
                  </div>
                  <p className="px-2.5 py-2 text-[11px] font-semibold text-[#1d2a24]">{t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ferry widget */}
          <div className="absolute bottom-4 right-4 w-[min(300px,calc(100%-2rem))] overflow-hidden rounded-2xl bg-white text-ink shadow-[0_20px_60px_-15px_rgba(12,16,36,0.5)]">
            <div className="flex items-center gap-2.5 bg-night px-4 py-3 text-white">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-whatsapp" />
              </span>
              <span className="text-sm font-semibold">Harbour Homes assistant</span>
            </div>
            <div className="flex h-[236px] flex-col justify-end gap-2 overflow-hidden p-3 text-[13px] leading-snug" aria-live="off">
              {script.slice(0, shown).map((m, i) => (
                <p
                  key={i}
                  className={`max-w-[85%] animate-arrive rounded-2xl px-3 py-2 ${
                    m.from === 'visitor' ? 'ml-auto rounded-br-md bg-signal text-white' : 'rounded-bl-md bg-paper'
                  }`}
                >
                  {m.text}
                </p>
              ))}
            </div>
            <p className="border-t border-rule px-4 py-2 text-[11px] text-ink-3">Powered by Ferry</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-white/60">Ferry on a sample website. Illustration.</figcaption>
    </figure>
  );
}
