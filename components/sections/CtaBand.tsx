import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import GetFerryButton from '@/components/GetFerryButton';
import { site } from '@/data/site';

// Closing call-to-action at the bottom of every page: the two main actions,
// get Ferry (self-serve) or talk to the team.
export default function CtaBand({
  title = 'Start with Ferry today. Talk to us when you want more.',
  intro = 'Set up Ferry yourself in 5 minutes, or book a free 30-minute call and we’ll find the first thing worth automating in your business.',
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-night py-20 sm:py-24">
      <div className="container-content">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-blue px-6 py-14 text-center sm:px-12 sm:py-16">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1000 400"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden
            >
              <ellipse cx="900" cy="40" rx="320" ry="140" stroke="rgba(255,255,255,0.18)" />
              <ellipse cx="80" cy="380" rx="300" ry="120" stroke="rgba(255,255,255,0.14)" />
            </svg>
            <h2 className="relative mx-auto max-w-[760px] text-balance font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[46px]">
              {title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-[580px] text-lg leading-relaxed text-white/85">{intro}</p>
            <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <GetFerryButton variant="gold">
                Get Ferry
                <Icon name="arrow" className="h-4 w-4" />
              </GetFerryButton>
              <Button href={site.bookingUrl} variant="light">
                <Icon name="calendar" className="h-[18px] w-[18px]" />
                Book a free call
              </Button>
            </div>
            <p className="relative mt-6 text-sm text-white/75">
              Or call our AI assistant:{' '}
              <a href={site.aiAssistantPhoneHref} className="font-semibold text-white underline-offset-4 hover:underline">
                {site.aiAssistantPhone}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
