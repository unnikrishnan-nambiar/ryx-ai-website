import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import LeadForm from '@/components/LeadForm';
import PageHero from '@/components/sections/PageHero';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/community',
  'RYX AI Community (coming soon) - register your interest',
  'We’re building a community for business owners and teams putting AI to work. Register your interest to be among the first invited.'
);

// The community is still being built: this page only collects interest and
// says plainly what it's meant to become. Don't promise events or perks
// here until they exist.
const plans = [
  'Practical ways other businesses are using AI',
  'Simple guides and prompts you can use the same day',
  'A place to ask questions and compare notes with other owners',
  'First look at new RYX AI tools',
];

const audience = ['Business owners and founders', 'Sales and marketing teams', 'Operations and HR leads', 'Anyone starting with AI at work'];

export default function CommunityPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          crumbs={[{ label: 'Community', href: '/community' }]}
          eyebrow="Coming soon · RYX AI Community"
          title={
            <>
              A community for business owners <span className="text-blue-soft">putting AI to work.</span>
            </>
          }
          intro="We’re building it now. Register your interest and you’ll be among the first invited when it opens. It’s free, and we won’t spam you."
        >
          <Button href="#join" variant="primary">
            Register my interest
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
          {site.communityUrl && (
            <Button href={site.communityUrl} variant="ghost" target="_blank" rel="noopener noreferrer">
              <Icon name="chat" className="h-[18px] w-[18px]" />
              Join on WhatsApp
            </Button>
          )}
        </PageHero>

        <section id="join" className="scroll-mt-16 bg-mist py-20 text-ink sm:py-28">
          <div className="container-content grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <Reveal>
              <p className="eyebrow text-blue">What we’re planning</p>
              <h2 className="mt-4 text-balance font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[42px]">
                Practical AI, learned together.
              </h2>
              <ul className="mt-8 space-y-3">
                {plans.map((p) => (
                  <li key={p} className="flex gap-3 text-lg leading-snug">
                    <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-blue" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="eyebrow mt-10 text-blue">Who it’s for</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {audience.map((a) => (
                  <li key={a} className="rounded-full border border-line bg-white px-3.5 py-2 text-[15px] text-ink-secondary">
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-card bg-white p-6 shadow-lift sm:p-8">
                <h3 className="font-display text-2xl font-bold tracking-tight">Register your interest</h3>
                <p className="mt-2 text-ink-secondary">Just your name and email. We’ll invite you when it opens.</p>
                <div className="mt-6">
                  <LeadForm
                    source="Community interest"
                    submitLabel="Register my interest"
                    successMessage="Thanks! You’re on the list. We’ll invite you when the community opens."
                  />
                </div>
                <p className="mt-5 text-sm text-ink-muted">
                  Want to use AI in your business now?{' '}
                  <Link href="/ferry" className="font-semibold text-blue hover:text-blue-dark">
                    Set up Ferry in 5 minutes
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
