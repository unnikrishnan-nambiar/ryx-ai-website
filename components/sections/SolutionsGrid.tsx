import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import SolutionAnimation from '@/components/animations/SolutionAnimation';
import { goals, solutions } from '@/data/solutions';

// Solutions grouped by business goal, each card with its live animation.
// On the homepage Ferry is left out (it has its own "start here" section).
export default function SolutionsGrid({
  heading = true,
  includeFerry = false,
}: {
  heading?: boolean;
  includeFerry?: boolean;
}) {
  const list = solutions.filter((s) => includeFerry || !s.flagship);

  return (
    <section id="solutions" className="scroll-mt-16 bg-white py-20 text-ink sm:py-28">
      <div className="container-content">
        {heading && (
          <SectionHeading
            tone="light"
            eyebrow="When you’re ready for more"
            title="Our team builds AI around your business."
            intro="Done-for-you AI projects, grouped by what you want to achieve. Each one is priced to your business after a free call."
          />
        )}

        <div className={`space-y-14 ${heading ? 'mt-14' : ''}`}>
          {goals.map(({ goal, blurb }) => {
            const items = list.filter((s) => s.goal === goal);
            if (!items.length) return null;
            return (
              <div key={goal}>
                <div className="flex flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-baseline sm:gap-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{goal}</h3>
                  <p className="text-ink-secondary">{blurb}</p>
                </div>
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((s, i) => (
                    <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                      <article
                        className={`group relative flex h-full flex-col overflow-hidden rounded-card border bg-white shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift ${
                          s.flagship ? 'border-gold/60' : 'border-line'
                        }`}
                      >
                        <div className="relative z-10 border-b border-line bg-mist/70 p-4 sm:p-5">
                          <SolutionAnimation name={s.animation} steps={s.steps.map((step) => step.title)} compact />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          {(s.flagship || s.pilot) && (
                            <span
                              className={`mb-2 self-start rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                s.flagship ? 'bg-gold-light text-gold-dark' : 'bg-blue-light text-blue-dark'
                              }`}
                            >
                              {s.flagship ? 'Self-serve · from ₹2,000/month' : 'Pilot · taking first clients'}
                            </span>
                          )}
                          <h4 className="font-display text-xl font-bold tracking-tight">{s.title}</h4>
                          <p className="mt-2 flex-1 leading-relaxed text-ink-secondary">{s.short}</p>
                          <Link
                            href={s.href}
                            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue after:absolute after:inset-0 after:content-['']"
                          >
                            See how it works
                            <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
