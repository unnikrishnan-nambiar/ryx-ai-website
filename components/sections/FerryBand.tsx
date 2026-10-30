import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';

// One compact Ferry spotlight on the homepage; the full story lives on /ferry.
export default function FerryBand() {
  return (
    <section className="bg-night pb-4">
      <div className="container-content">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-gold/30 bg-gradient-to-br from-gold/20 via-night-800 to-night-800 p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-gold/20" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <p className="eyebrow text-gold">New to AI? Start here</p>
                <h2 className="mt-4 text-balance font-display text-[30px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
                  Ferry: the easiest way to adopt AI in your business.
                </h2>
                <p className="mt-4 max-w-[560px] text-lg leading-relaxed text-white/65">
                  No tech team, no data project, no big budget. Ferry learns from your website and
                  turns visitors into purchases and demo bookings, live in a day, from ₹2,000 a month.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button href="/ferry" variant="gold">
                  Explore Ferry
                  <Icon name="arrow" className="h-4 w-4" />
                </Button>
                <Button href="/how-to-adopt-ai" variant="ghost">
                  How to adopt AI
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
