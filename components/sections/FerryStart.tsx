import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import GetFerryButton from '@/components/GetFerryButton';
import SolutionAnimation from '@/components/animations/SolutionAnimation';
import { ferrySetup } from '@/data/ferry';
import { getSolution } from '@/data/solutions';

// Homepage "start here" section: Ferry as the easy first step into AI.
export default function FerryStart() {
  const ferry = getSolution('ferry')!;

  return (
    <section className="bg-mist py-20 text-ink sm:py-28">
      <div className="container-content">
        <SectionHeading
          tone="light"
          eyebrow="Start here · Ferry"
          eyebrowClass="text-gold-dark"
          title="Your website, answering customers 24/7."
          intro={ferry.definition}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          <Reveal>
            <div className="rounded-card border border-line bg-white p-4 shadow-card sm:p-7">
              <SolutionAnimation name="ferry" steps={ferry.steps.map((s) => s.title)} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-card bg-night p-7 text-white sm:p-8">
              <p className="eyebrow text-gold">Set it up yourself in 5 minutes</p>
              <ol className="mt-6 space-y-5">
                {ferrySetup.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-display text-sm font-bold text-night">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display font-bold">{step.title}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-white/60">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-white/70">
                  From <span className="font-display text-2xl font-bold text-white">₹2,000</span> a month.
                  Early adopters <span className="font-semibold text-gold">₹1,000</span>, limited spots.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <GetFerryButton>
                    Get Ferry
                    <Icon name="arrow" className="h-4 w-4" />
                  </GetFerryButton>
                  <Button href="/ferry" variant="ghost">
                    How Ferry works
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
