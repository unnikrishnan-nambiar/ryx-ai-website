import Link from 'next/link';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Logo from '@/components/Logo';
import { site } from '@/data/site';
import { solutions } from '@/data/solutions';

const shortNames: Record<string, string> = {
  'ai-ads': 'Creatives & Ads',
  'customer-nudges': 'Customer Nudges',
  'workflow-automation': 'Workflows',
  'ai-training': 'Team Training',
  'lead-generation': 'Lead Generation',
  ferry: 'Ferry',
};

// The six solutions orbiting the ryx ai "planet", redrawn from the deck's
// cover slide. Each node links to its solution page.
function SolutionOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg className="absolute inset-0 h-full w-full animate-orbit" viewBox="0 0 520 520" fill="none" aria-hidden>
        <circle cx="260" cy="260" r="218" stroke="rgba(255,255,255,0.10)" strokeDasharray="2 8" />
        <circle cx="478" cy="260" r="4" fill="#3D5AFE" />
      </svg>
      <svg className="absolute inset-0 h-full w-full animate-orbit-reverse" viewBox="0 0 520 520" fill="none" aria-hidden>
        <ellipse cx="260" cy="260" rx="250" ry="120" stroke="rgba(255,255,255,0.07)" transform="rotate(-20 260 260)" />
      </svg>

      <div className="absolute left-1/2 top-1/2 flex aspect-square w-[44%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#33406A_0%,#1B2030_55%,#14171F_80%)] shadow-[inset_20px_14px_60px_-20px_rgba(140,158,255,0.45),0_30px_80px_-30px_rgba(61,90,254,0.6)]">
        <Logo className="h-auto w-[52%]" />
      </div>

      {solutions.map((s, i) => {
        const angle = (-90 + i * 60) * (Math.PI / 180);
        const left = 50 + 42 * Math.cos(angle);
        const top = 50 + 42 * Math.sin(angle);
        return (
          <Link
            key={s.slug}
            href={s.href}
            className={`absolute flex animate-float items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[12px] font-semibold sm:px-3.5 sm:py-2 shadow-lift backdrop-blur transition-colors duration-300 sm:text-sm ${
              s.flagship
                ? 'border-gold/50 bg-gold text-night hover:bg-gold/90'
                : 'border-white/15 bg-night-700/90 text-white hover:border-white/40'
            }`}
            style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${i * -0.8}s` }}
          >
            <Icon name={s.icon} className="h-4 w-4" />
            {shortNames[s.slug]}
          </Link>
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />

      <div className="container-content relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Link
            href="/how-to-adopt-ai"
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            New to AI? The easiest way to start
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Link>
          <h1
            className="mt-6 animate-fade-up text-balance font-display text-[46px] font-bold leading-[1.02] tracking-[-0.03em] sm:text-[66px] lg:text-[72px]"
            style={{ animationDelay: '90ms' }}
          >
            AI that works for <span className="text-blue-soft">your business.</span>
          </h1>
          <p
            className="mt-6 max-w-[540px] animate-fade-up text-lg leading-relaxed text-white/70 sm:text-xl"
            style={{ animationDelay: '180ms' }}
          >
            We help you win more customers and save hours every week with AI, from ads and lead
            generation to automated workflows and a team that knows how to use it.
          </p>
          <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row" style={{ animationDelay: '270ms' }}>
            <Button href={site.bookingUrl} variant="primary">
              <Icon name="calendar" className="h-[18px] w-[18px]" />
              Book a 30-minute call
            </Button>
            <Button href="/#solutions" variant="ghost">
              See what we do
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="animate-fade-up px-12 sm:px-16 lg:px-4" style={{ animationDelay: '200ms' }}>
          <SolutionOrbit />
        </div>
      </div>
    </section>
  );
}
