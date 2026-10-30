import type { ReactNode } from 'react';
import Link from 'next/link';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Breadcrumb trail above the eyebrow, e.g. [{ label: 'Solutions', href: '/solutions' }]. */
  crumbs?: { label: string; href: string }[];
  children?: ReactNode;
  /** Optional right-hand visual. */
  aside?: ReactNode;
  accent?: 'blue' | 'gold';
};

// Dark header used at the top of every inner page.
export default function PageHero({ eyebrow, title, intro, crumbs, children, aside, accent = 'blue' }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-[25%] -top-[30%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#2B3550_0%,#171B26_45%,#111317_70%)] opacity-70" />
        <svg className="absolute -right-[30%] -top-[20%] h-[900px] w-[1200px] animate-orbit" viewBox="0 0 1200 900" fill="none">
          <ellipse cx="600" cy="450" rx="560" ry="240" stroke="rgba(255,255,255,0.08)" transform="rotate(-18 600 450)" />
          <circle cx="1100" cy="290" r="5" fill={accent === 'gold' ? '#D6A84E' : '#3D5AFE'} />
        </svg>
      </div>

      <div className={`container-content relative ${aside ? 'grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]' : ''}`}>
        <div className="max-w-[760px]">
          {crumbs && (
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/45">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              {crumbs.map((c) => (
                <span key={c.href} className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                </span>
              ))}
            </nav>
          )}
          <p className={`eyebrow animate-fade-up ${accent === 'gold' ? 'text-gold' : 'text-blue-soft'}`}>{eyebrow}</p>
          <h1
            className="mt-5 animate-fade-up text-balance font-display text-[40px] font-bold leading-[1.04] tracking-[-0.03em] sm:text-[60px]"
            style={{ animationDelay: '80ms' }}
          >
            {title}
          </h1>
          {intro && (
            <p
              className="mt-6 max-w-[620px] animate-fade-up text-lg leading-relaxed text-white/70 sm:text-xl"
              style={{ animationDelay: '160ms' }}
            >
              {intro}
            </p>
          )}
          {children && (
            <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row" style={{ animationDelay: '240ms' }}>
              {children}
            </div>
          )}
        </div>
        {aside && (
          <div className="animate-fade-up" style={{ animationDelay: '240ms' }}>
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
