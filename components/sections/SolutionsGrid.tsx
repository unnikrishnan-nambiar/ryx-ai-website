import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import SolutionAnimation from '@/components/animations/SolutionAnimation';
import { solutions } from '@/data/solutions';

// The six solutions, each with its live animation. Used on the homepage and
// the /solutions index.
export default function SolutionsGrid({
  heading = true,
  exclude,
}: {
  heading?: boolean;
  /** Slug to leave out, e.g. the current solution on its own page. */
  exclude?: string;
}) {
  const list = solutions.filter((s) => s.slug !== exclude);

  return (
    <section id="solutions" className="scroll-mt-16 bg-mist py-20 text-ink sm:py-28">
      <div className="container-content">
        {heading && (
          <SectionHeading
            tone="light"
            eyebrow="What we do"
            title="Six ways AI can grow your business."
            intro="Each one solves a specific problem. Watch how it works, then pick the one that matters most to you right now."
          />
        )}

        <div className={`grid gap-5 md:grid-cols-2 lg:grid-cols-3 ${heading ? 'mt-12' : ''}`}>
          {list.map((s, i) => (
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
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-bold text-blue">{s.number}</span>
                    {s.flagship && (
                      <span className="rounded-full bg-gold-light px-2.5 py-0.5 text-xs font-semibold text-gold-dark">
                        Flagship product
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ink-secondary">{s.short}</p>
                  <Link
                    href={s.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue after:absolute after:inset-0 after:content-['']"
                  >
                    {s.flagship ? 'Explore Ferry' : 'Learn more'}
                    <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
