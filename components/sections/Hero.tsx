import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { site } from '@/data/site';
import ChatPreview from './ChatPreview';

const channels = ['WhatsApp', 'Website', 'Voice', 'Instagram', 'CRM'];

// Planet-and-orbit backdrop, redrawn from the deck's cover slide.
function Orbit() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -right-[30%] top-[8%] h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#2B3550_0%,#171B26_45%,#111317_70%)] opacity-80 sm:-right-[18%]" />
      <div className="absolute -right-[30%] top-[8%] h-[900px] w-[900px] rounded-full shadow-[inset_30px_20px_80px_-20px_rgba(140,158,255,0.35)] sm:-right-[18%]" />
      <svg
        className="absolute -right-[40%] top-0 h-[1100px] w-[1500px] animate-orbit sm:-right-[25%]"
        viewBox="0 0 1500 1100"
        fill="none"
      >
        <ellipse cx="750" cy="550" rx="700" ry="300" stroke="rgba(255,255,255,0.10)" transform="rotate(-18 750 550)" />
        <circle cx="140" cy="640" r="5" fill="rgba(255,255,255,0.35)" />
        <circle cx="1310" cy="330" r="6" fill="#3D5AFE" />
      </svg>
      <svg
        className="absolute -right-[35%] top-[5%] h-[1000px] w-[1300px] animate-orbit-reverse sm:-right-[20%]"
        viewBox="0 0 1300 1000"
        fill="none"
      >
        <ellipse cx="650" cy="500" rx="600" ry="360" stroke="rgba(255,255,255,0.07)" transform="rotate(24 650 500)" />
        <circle cx="1180" cy="700" r="4" fill="rgba(255,255,255,0.3)" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-night" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40">
      <Orbit />

      <div className="container-content relative grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80"
            style={{ animationDelay: '0ms' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            New: Ferry, the AI sales agent for your website
          </p>

          <h1
            className="mt-7 animate-fade-up font-display text-[46px] font-bold leading-[1.02] tracking-[-0.03em] sm:text-[68px] lg:text-[76px]"
            style={{ animationDelay: '90ms' }}
          >
            AI that works for <span className="text-blue-soft">your business.</span>
          </h1>

          <p
            className="mt-6 max-w-[540px] animate-fade-up text-lg leading-relaxed text-white/70 sm:text-xl"
            style={{ animationDelay: '180ms' }}
          >
            We build AI for sales, marketing and automation. Agents that answer every lead in
            seconds, follow up without being told, and keep your CRM up to date, around the clock.
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '270ms' }}
          >
            <Button href={site.bookingUrl} variant="primary">
              <Icon name="calendar" className="h-[18px] w-[18px]" />
              Book a 30-minute call
            </Button>
            <Button href="/#ferry" variant="ghost">
              Meet Ferry
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12 animate-fade-up" style={{ animationDelay: '360ms' }}>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/40">Works across</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {channels.map((channel) => (
                <li key={channel} className="rounded-full border border-white/10 px-3.5 py-1.5 text-sm text-white/65">
                  {channel}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="animate-fade-up pb-6" style={{ animationDelay: '300ms' }}>
          <ChatPreview />
        </div>
      </div>
    </section>
  );
}
