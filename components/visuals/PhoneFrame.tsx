import type { ReactNode } from 'react';

// A phone, drawn in CSS, for product shots of WhatsApp messages.
export default function PhoneFrame({ children, title, className = '' }: { children: ReactNode; title: string; className?: string }) {
  return (
    <div className={`relative w-[300px] rounded-[46px] bg-[#0d0f1a] p-3 shadow-[0_50px_100px_-30px_rgba(12,16,36,0.65),inset_0_0_0_2px_rgba(255,255,255,0.08)] ${className}`}>
      <div className="relative overflow-hidden rounded-[36px] bg-[#ECE5DD]">
        <div className="flex items-center gap-3 bg-[#075E54] px-4 pb-3 pt-9 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 font-display text-sm font-bold text-night">R</span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-[11px] text-white/75">online</p>
          </div>
        </div>
        <span aria-hidden className="absolute left-1/2 top-2.5 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0d0f1a]" />
        <div className="min-h-[420px] p-3">{children}</div>
      </div>
    </div>
  );
}
