import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { improvementLoop, processSteps } from '@/data/content';

export default function Process() {
  return (
    <section id="how-we-work" className="scroll-mt-16 bg-night py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="How we work"
          title="From understanding to continuous improvement."
          intro="Every agent is tested before launch and measured after it. Going live is the start, not the end."
        />

        <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 0.06}>
              <div className="relative h-full rounded-card border border-white/10 bg-night-800 p-6">
                <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-lg bg-blue/15 px-2 font-display text-sm font-bold text-blue-soft">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-4">
          <div className="rounded-card border border-blue/25 bg-blue/[0.06] p-6 sm:p-8">
            <p className="eyebrow text-blue-soft">After launch: the improvement loop</p>
            <ol className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {improvementLoop.map((step, i) => (
                <li key={step.title} className="relative">
                  <p className="font-display text-lg font-bold">
                    {step.title}
                    {i < improvementLoop.length - 1 && (
                      <span className="ml-2 hidden text-blue-soft lg:inline" aria-hidden>
                        →
                      </span>
                    )}
                    {i === improvementLoop.length - 1 && (
                      <span className="ml-2 hidden text-blue-soft lg:inline" aria-hidden>
                        ↺
                      </span>
                    )}
                  </p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/60">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
