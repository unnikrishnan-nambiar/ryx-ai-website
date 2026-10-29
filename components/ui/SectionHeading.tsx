import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Light text for dark sections, dark text for light sections. */
  tone?: 'dark' | 'light';
  /** Eyebrow color override, e.g. gold for the Ferry sections. */
  eyebrowClass?: string;
  align?: 'left' | 'center';
};

// Eyebrow + headline + intro block, mirroring the deck's slide headers.
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = 'dark',
  eyebrowClass,
  align = 'left',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  const centered = align === 'center';

  return (
    <Reveal className={centered ? 'mx-auto max-w-[760px] text-center' : 'max-w-[760px]'}>
      <p className={`eyebrow ${eyebrowClass ?? (isDark ? 'text-blue-soft' : 'text-blue')}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-balance font-display text-[34px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[48px] ${
          isDark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            isDark ? 'text-white/65' : 'text-ink-secondary'
          } ${centered ? 'mx-auto max-w-[620px]' : 'max-w-[620px]'}`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
