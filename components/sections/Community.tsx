import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import LeadButton from '@/components/LeadButton';
import { site } from '@/data/site';

const perks = [
  {
    icon: 'spark',
    title: 'Real use cases',
    body: 'What is actually working for businesses like yours, with the numbers behind it.',
  },
  {
    icon: 'users',
    title: 'Owners and operators',
    body: 'Founders, sales leads and teams comparing notes on putting AI to work.',
  },
  {
    icon: 'calendar',
    title: 'Early access',
    body: 'First look at new RYX AI agents and features, including Ferry voice agents.',
  },
];

export default function Community() {
  return (
    <section id="community" className="scroll-mt-16 bg-night py-20 sm:py-28">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-blue/25 via-night-800 to-night-800 p-8 sm:p-12 lg:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" aria-hidden />
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" aria-hidden />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal>
              <p className="eyebrow text-blue-soft">RYX AI Community</p>
              <h2 className="mt-4 font-display text-[34px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[44px]">
                Learn what AI can do for your business, with people doing it.
              </h2>
              <p className="mt-5 max-w-[520px] text-lg leading-relaxed text-white/65">
                A free community for business owners and teams who want practical AI, not hype.
                Join for use cases, playbooks and early access to what we&apos;re building.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LeadButton
                  variant="light"
                  title="Join the RYX AI Community"
                  intro="Practical AI for your business: use cases, playbooks and early access. No spam."
                  source="Community signup"
                  detailed={false}
                  submitLabel="Join the community"
                  successMessage="You're in. Welcome to the RYX AI Community."
                >
                  Join the community
                </LeadButton>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold text-white/80 transition-colors hover:text-white"
                >
                  Follow us on Instagram
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <ul className="grid gap-3">
              {perks.map((perk, i) => (
                <Reveal key={perk.title} as="li" delay={i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-night/60 p-5 backdrop-blur">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Icon name={perk.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold">{perk.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-white/60">{perk.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
