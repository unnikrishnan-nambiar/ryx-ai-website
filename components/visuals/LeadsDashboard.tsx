'use client';

import { useEffect, useRef, useState } from 'react';

// Product shot: the Ferry dashboard an owner opens in the morning. The chart
// draws itself and the totals count up when it comes into view. Example data.
const week = [18, 26, 22, 34, 31, 42, 48];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const leads = [
  { name: 'Anjali M.', want: '2 BHK, Kakkanad', source: 'Website', tag: 'Hot', tone: 'bg-[#E3F5EB] text-[#1B6E45]' },
  { name: 'Rahul P.', want: 'Site visit, Sat', source: 'WhatsApp', tag: 'Booked', tone: 'bg-signal-soft text-signal-deep' },
  { name: 'Fathima S.', want: '3 BHK, under ₹1 Cr', source: 'Website', tag: 'Warm', tone: 'bg-gold-soft text-gold-deep' },
  { name: 'Vivek R.', want: 'Rental, Edappally', source: 'Phone', tag: 'Later', tone: 'bg-paper text-ink-3' },
];

function useCountUp(target: number, run: boolean) {
  const [v, setV] = useState(target);
  useEffect(() => {
    if (!run || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1400, 1);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);
  return v;
}

export default function LeadsDashboard({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setInView(true), io.disconnect()), { threshold: 0.3 });
    io.observe(ref.current!);
    return () => io.disconnect();
  }, []);

  const chats = useCountUp(221, inView);
  const qualified = useCountUp(64, inView);
  const meetings = useCountUp(19, inView);

  const max = Math.max(...week);
  const pts = week.map((v, i) => [20 + i * 70, 130 - (v / max) * 100] as const);
  const line = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');
  const area = `${line} L${pts[pts.length - 1][0]} 140 L20 140 Z`;

  return (
    <figure ref={ref} className={`w-full ${className}`}>
      <div className="overflow-hidden rounded-[18px] bg-card text-ink shadow-[0_40px_100px_-40px_rgba(12,16,36,0.55)] ring-1 ring-rule">
        <div className="flex items-center justify-between border-b border-rule px-5 py-3.5">
          <span className="font-display font-bold">Ferry dashboard</span>
          <span className="rounded-full bg-paper px-3 py-1 text-xs text-ink-2">This week</span>
        </div>
        <dl className="grid grid-cols-3 divide-x divide-rule border-b border-rule">
          {[
            ['Conversations', chats],
            ['Qualified leads', qualified],
            ['Meetings booked', meetings],
          ].map(([k, v]) => (
            <div key={k as string} className="px-4 py-4 sm:px-5">
              <dt className="text-xs text-ink-3 sm:text-sm">{k}</dt>
              <dd className="tnum mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="px-5 pt-4">
          <p className="text-sm text-ink-2">Leads per day</p>
          <svg viewBox="0 0 460 160" className="mt-2 w-full" role="img" aria-label="Leads per day, rising through the week">
            <defs>
              <linearGradient id="lead-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3D5AFE" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#3D5AFE" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[40, 75, 110].map((y) => (
              <line key={y} x1="20" x2="440" y1={y} y2={y} stroke="rgba(12,16,36,0.08)" />
            ))}
            <path d={area} fill="url(#lead-area)" style={{ opacity: inView ? 1 : 0, transition: 'opacity 900ms ease 500ms' }} />
            <path
              d={line}
              fill="none"
              stroke="#3D5AFE"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              style={{ strokeDasharray: 1, strokeDashoffset: inView ? 0 : 1, transition: 'stroke-dashoffset 1400ms cubic-bezier(0.22,1,0.36,1)' }}
            />
            {pts.map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="4" fill="#fff" stroke="#3D5AFE" strokeWidth="2" style={{ opacity: inView ? 1 : 0, transition: `opacity 300ms ease ${300 + i * 150}ms` }} />
                <text x={x} y="156" textAnchor="middle" fontSize="11" fill="#676D8A">
                  {days[i]}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <ul className="divide-y divide-rule border-t border-rule">
          {leads.map((l, i) => (
            <li
              key={l.name}
              className="grid grid-cols-[1fr_auto] items-center gap-3 px-5 py-3 sm:grid-cols-[1.1fr_1.3fr_auto_auto]"
              style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(6px)', transition: `all 500ms ease ${700 + i * 120}ms` }}
            >
              <span className="font-semibold">{l.name}</span>
              <span className="hidden text-sm text-ink-2 sm:block">{l.want}</span>
              <span className="hidden text-sm text-ink-3 sm:block">{l.source}</span>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${l.tone}`}>{l.tag}</span>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-sm text-ink-2">The Ferry dashboard with example data.</figcaption>
    </figure>
  );
}
