import Link from 'next/link';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import GetFerryButton from '@/components/GetFerryButton';
import { site } from '@/data/site';
import ChatPreview from './ChatPreview';

// Ferry-first hero: the easiest way in is the main action; talking to the
// team is the second. The AI assistant phone line is a live voice demo.
export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-[30%] top-[5%] h-[860px] w-[860px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#2B3550_0%,#171B26_45%,#111317_70%)] opacity-80 sm:-right-[15%]" />
        <svg className="absolute -right-[40%] top-0 h-[1100px] w-[1500px] animate-orbit sm:-right-[22%]" viewBox="0 0 1500 1100" fill="none">
          <ellipse cx="750" cy="550" rx="700" ry="300" stroke="rgba(255,255,255,0.10)" transform="rotate(-18 750 550)" />
          <circle cx="1310" cy="330" r="6" fill="#D6A84E" />
          <circle cx="140" cy="640" r="5" fill="rgba(255,255,255,0.35)" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-night" />
      </div>

      <div className="container-content relative grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="eyebrow animate-fade-up text-blue-soft">AI for businesses in {site.markets}</p>
          <h1
            className="mt-6 animate-fade-up text-balance font-display text-[44px] font-bold leading-[1.03] tracking-[-0.03em] sm:text-[62px] lg:text-[68px]"
            style={{ animationDelay: '90ms' }}
          >
            The easiest way to put <span className="text-gold">AI to work</span> in your business.
          </h1>
          <p
            className="mt-6 max-w-[560px] animate-fade-up text-lg leading-relaxed text-white/70 sm:text-xl"
            style={{ animationDelay: '180ms' }}
          >
            Start with <strong className="font-semibold text-white">Ferry</strong>, an AI assistant on your
            website that answers every visitor and books meetings, day and night. Set it up yourself in
            5 minutes. When you want more, our team builds AI for your sales, follow-ups and paperwork.
          </p>
          <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row" style={{ animationDelay: '270ms' }}>
            <GetFerryButton>
              Get Ferry: live in 5 minutes
              <Icon name="arrow" className="h-4 w-4" />
            </GetFerryButton>
            <Button href={site.bookingUrl} variant="ghost">
              <Icon name="calendar" className="h-[18px] w-[18px]" />
              Book a free call
            </Button>
          </div>
          <p className="mt-6 animate-fade-up text-sm text-white/55" style={{ animationDelay: '340ms' }}>
            <Icon name="phone" className="mr-1.5 inline h-4 w-4 align-[-3px] text-gold" />
            Hear our voice AI live: call{' '}
            <a href={site.aiAssistantPhoneHref} className="font-semibold text-white underline-offset-4 hover:underline">
              {site.aiAssistantPhone}
            </a>
            {' · '}
            <Link href="/how-to-adopt-ai" className="font-semibold text-white underline-offset-4 hover:underline">
              New to AI? Start here
            </Link>
          </p>
        </div>

        <div className="animate-fade-up pb-6" style={{ animationDelay: '300ms' }}>
          <ChatPreview />
        </div>
      </div>
    </section>
  );
}
