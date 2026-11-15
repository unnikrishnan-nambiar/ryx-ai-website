'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '@/data/site';

// One booking question, answered in each language RYX AI speaks. Cycles
// while on screen; visitors can pick a language. Next to it, the real
// number for the RYX AI voice assistant, so they can call and hear it.
const langs = [
  { id: 'en', label: 'English', dir: 'ltr', q: 'Do you have a slot on Saturday?', a: 'Yes, 11 AM and 3 PM are free. Shall I book 11 AM for you?' },
  { id: 'hi', label: 'हिन्दी', dir: 'ltr', q: 'क्या शनिवार को कोई स्लॉट खाली है?', a: 'हाँ, सुबह 11 बजे और दोपहर 3 बजे खाली हैं। क्या 11 बजे बुक कर दूँ?' },
  { id: 'ml', label: 'മലയാളം', dir: 'ltr', q: 'ശനിയാഴ്ച സ്ലോട്ട് ഉണ്ടോ?', a: 'ഉണ്ട്, രാവിലെ 11 മണിക്കും ഉച്ചയ്ക്ക് 3 മണിക്കും ഒഴിവുണ്ട്. 11 മണിക്ക് ബുക്ക് ചെയ്യട്ടെ?' },
  { id: 'ar', label: 'العربية', dir: 'rtl', q: 'هل يوجد موعد متاح يوم السبت؟', a: 'نعم، الساعة 11 صباحًا والساعة 3 مساءً متاحتان. هل أحجز لك الساعة 11؟' },
  { id: 'ur', label: 'اردو', dir: 'rtl', q: 'کیا ہفتے کو کوئی وقت خالی ہے؟', a: 'جی ہاں، صبح 11 بجے اور سہ پہر 3 بجے خالی ہیں۔ کیا 11 بجے بک کر دوں؟' },
] as const;

const bars = Array.from({ length: 28 }, (_, i) => 0.35 + 0.65 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.45)));

export default function VoiceDemo() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!auto || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let t: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(([e]) => {
      clearInterval(t);
      if (e.isIntersecting) t = setInterval(() => setI((n) => (n + 1) % langs.length), 3800);
    });
    io.observe(ref.current!);
    return () => {
      io.disconnect();
      clearInterval(t);
    };
  }, [auto]);

  const l = langs[i];
  return (
    <div ref={ref} className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <h2 className="headline text-[40px] sm:text-[64px]">Call our AI right now</h2>
        <p className="lede mt-6 max-w-[520px] text-white/75">
          Ring the RYX AI voice assistant and ask it anything, in the language you speak at home. This is the same AI
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
        <div role="group" aria-label="Choose a language" className="flex flex-wrap gap-2">
          {langs.map((x, n) => (
            <button
              key={x.id}
              type="button"
              aria-pressed={n === i}
              onClick={() => {
                setI(n);
                setAuto(false);
              }}
              className={`min-h-[40px] cursor-pointer rounded-full px-4 text-sm font-semibold transition-colors ${
                n === i ? 'bg-white text-ink' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {x.label}
            </button>
          ))}
        </div>

        <div className="mt-6 flex h-14 items-center gap-1" aria-hidden>
          {bars.map((h, n) => (
            <span
              key={n}
              className="w-full origin-center animate-[wave_1.1s_ease-in-out_infinite] rounded-full bg-gradient-to-t from-signal to-[#9b5cff]"
              style={{ height: `${h * 100}%`, animationDelay: `${n * 45}ms` }}
            />
          ))}
        </div>

        <div key={l.id} lang={l.id} dir={l.dir} className="mt-6 space-y-3 text-lg leading-relaxed" aria-live="polite">
          <p className="animate-arrive w-fit max-w-[90%] rounded-2xl bg-white/10 px-4 py-3 ltr:rounded-bl-md rtl:rounded-br-md">
            {l.q}
          </p>
          <p
            className="animate-arrive ms-auto w-fit max-w-[90%] rounded-2xl bg-signal px-4 py-3 ltr:rounded-br-md rtl:rounded-bl-md"
            style={{ animationDelay: '500ms' }}
          >
            {l.a}
          </p>
        </div>
        <p className="mt-6 text-sm text-white/60">A sample booking call, shown in each language our AI speaks.</p>
      </div>
    </div>
  );
}
