import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import LeadForm from '@/components/LeadForm';
import PageHero from '@/components/sections/PageHero';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/community',
  'RYX AI Community - practical AI for business owners',
  'A free community for business owners and teams who want practical AI, not hype. Use cases, playbooks and early access to what RYX AI builds.'
);

const perks = [
  {
    icon: 'spark',
    title: 'Real use cases',
    body: 'What is actually working for businesses like yours, explained simply, with the results behind it.',
  },
  {
    icon: 'repeat',
    title: 'Playbooks you can copy',
    body: 'Step-by-step guides and prompts for sales, marketing and operations that you can use the same day.',
  },
  {
    icon: 'users',
    title: 'People doing the work',
    body: 'Founders, sales leads and operators comparing notes on putting AI to work in their own business.',
  },
  {
    icon: 'calendar',
    title: 'Early access',
    body: 'First look at new RYX AI tools and features, including Ferry voice agents, before anyone else.',
  },
];

const audience = ['Business owners and founders', 'Sales and marketing teams', 'Operations and HR leads', 'Anyone starting with AI at work'];

export default function CommunityPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          crumbs={[{ label: 'Community', href: '/community' }]}
          eyebrow="RYX AI Community"
          title={
            <>
              Practical AI for business, <span className="text-blue-soft">learned together.</span>
            </>
          }
          intro="A free community for business owners and teams who want AI that actually helps their work. No hype, no jargon, no spam."
        >
          <Button href="#join" variant="primary">
            Join for free
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
          {site.communityUrl && (
            <Button href={site.communityUrl} variant="ghost" target="_blank" rel="noopener noreferrer">
              <Icon name="chat" className="h-[18px] w-[18px]" />
              Join on WhatsApp
            </Button>
          )}
        </PageHero>

        <section className="bg-mist py-20 text-ink sm:py-28">
          <div className="container-content">
            <SectionHeading tone="light" eyebrow="What you get" title="Everything you need to start using AI." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {perks.map((perk, i) => (
                <Reveal key={perk.title} delay={(i % 2) * 0.08}>
                  <div className="flex h-full gap-5 rounded-card border border-line bg-white p-7 shadow-card">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-light text-blue">
                      <Icon name={perk.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold">{perk.title}</h3>
                      <p className="mt-2 leading-relaxed text-ink-secondary">{perk.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="scroll-mt-16 bg-night py-20 sm:py-28">
          <div className="container-content grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal>
              <p className="eyebrow text-blue-soft">Who it’s for</p>
              <h2 className="mt-4 text-balance font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
                If you run a business or a team, you belong here.
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {audience.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-white/80">
                    <Icon name="check" className="h-5 w-5 shrink-0 text-blue-soft" />
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-white/55">
                Prefer to follow along first?{' '}
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-blue-soft">
                  Follow us on Instagram
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-card bg-white p-6 text-ink shadow-lift sm:p-8">
                <h3 className="font-display text-2xl font-bold tracking-tight">Join the community</h3>
                <p className="mt-2 text-ink-secondary">Free. Just your name and email.</p>
                <div className="mt-6">
                  <LeadForm
                    source="Community signup"
                    submitLabel="Join for free"
                    successMessage="You’re in. Welcome to the RYX AI Community."
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
