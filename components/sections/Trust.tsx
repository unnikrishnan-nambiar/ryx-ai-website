import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { trustPoints } from '@/data/home';

// Why a business can trust RYX AI. Built on things a visitor can check for
// themselves, since client names are kept private.
export default function Trust() {
  return (
    <section className="bg-mist py-20 text-ink sm:py-28">
      <div className="container-content">
        <SectionHeading
          tone="light"
          eyebrow="Why RYX AI"
          title="AI you can check for yourself."
          intro="We keep our clients’ names private, so we let you try our AI instead of just reading about it."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full gap-4 rounded-card border border-line bg-white p-6 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-light text-blue">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-secondary">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
