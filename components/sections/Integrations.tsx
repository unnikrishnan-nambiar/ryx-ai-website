import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { integrations } from '@/data/content';

const icons = ['chat', 'cycle', 'bot'];

export default function Integrations() {
  return (
    <section className="bg-mist py-20 text-ink sm:py-28">
      <div className="container-content">
        <SectionHeading
          tone="light"
          eyebrow="Built on proven technology"
          title="Works with the tools you already use."
          intro="No new software for your team to learn. Our agents plug into your channels and your CRM, in the languages your customers speak."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {integrations.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="h-full rounded-card border border-line bg-white p-7 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-blue-light px-2.5 py-1 font-display text-sm font-bold text-blue">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon name={icons[i]} className="h-6 w-6 text-blue" />
                </div>
                <h3 className="eyebrow mt-6 text-ink">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full bg-mist px-3.5 py-2 text-[15px] text-ink-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
