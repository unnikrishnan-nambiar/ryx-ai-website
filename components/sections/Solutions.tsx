import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { solutions } from '@/data/content';

export default function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-16 bg-mist py-20 text-ink sm:py-28">
      <div className="container-content">
        <SectionHeading
          tone="light"
          eyebrow="What we build"
          title="AI for sales, marketing and automation."
          intro="Pick one problem to start with. We build the agent, connect it to the tools you already use and keep improving it once it's live."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {solutions.map((item, i) => (
            <Reveal key={item.id} delay={(i % 2) * 0.08}>
              <article className="group flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-light text-blue">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <span className="eyebrow text-blue">{item.kicker}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-secondary">{item.body}</p>
                <ul className="mt-6 grid gap-2.5 border-t border-line pt-6 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[15px] text-ink">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-light text-blue">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
