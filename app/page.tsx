import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CtaBand from '@/components/CtaBand';
import FerryDemo from '@/components/FerryDemo';
import LostRevenueCalculator from '@/components/LostRevenueCalculator';
import MorningBrief from '@/components/MorningBrief';
import NightLog from '@/components/NightLog';
import Button from '@/components/ui/Button';
import { categories, useCases } from '@/data/useCases';

const problems = [
  { title: 'Slow replies', body: 'Leads go cold when nobody answers within minutes.' },
  { title: 'Leads lost', body: 'Enquiries stay in personal WhatsApp and never reach the CRM.' },
  { title: 'Repetitive work', body: 'Teams answer the same questions and retype the same data all day.' },
  { title: 'After hours', body: 'Nights and weekends go unanswered, and the customer goes to a competitor.' },
];

const pillars = [
  {
    title: 'AI for sales',
    promise: 'Win more of the leads you already pay for.',
    items: ['Answer and qualify every lead', 'Instant call-backs', 'Follow-ups that never stop', 'Leads straight into your CRM'],
  },
  {
    title: 'AI for marketing',
    promise: 'Get found, and turn visits into enquiries.',
    items: ['SEO and AEO automation', 'Campaign automation', 'Lead generation', 'Website and conversion'],
  },
  {
    title: 'AI for automation',
    promise: 'Give your team their hours back.',
    items: ['Support agents, day and night', 'Document data extraction', 'Bookings and reminders', 'Daily reports on WhatsApp'],
  },
];

const process = [
  { title: 'Understand', body: 'Your customers, your team’s day, and the work worth handing to an agent.' },
  { title: 'Build', body: 'The agent, connected to the tools you already use.' },
  { title: 'Test', body: 'AI-run testing across scenarios, languages and channels before any customer sees it.' },
  { title: 'Certify', body: 'Checked for quality, safety, compliance and reliability.' },
  { title: 'Deploy', body: 'Live on your website, WhatsApp or phone line.' },
  { title: 'Improve', body: 'Real conversations are reviewed by a person and fed back into the agent.' },
];

const tools = [
  { group: 'Where your customers are', items: 'WhatsApp Business, your website, Instagram, phone and email' },
  { group: 'Where your data lives', items: 'Zoho, HubSpot, Salesforce, Dynamics 365, Odoo, Google Sheets and Cal.com' },
  { group: 'What they speak', items: 'English, Hindi, Malayalam, Arabic and Urdu, in chat and in voice' },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Night */}
        <section className="sky -mt-[68px] pt-[68px] text-white">
          <div className="container-content grid gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pb-28">
            <div>
              <h1 className="headline text-[46px] sm:text-[72px] lg:text-[76px] xl:text-[80px]">
                <span className="block">You close at&nbsp;7.</span>
                <span className="block text-signal-glow">
                  <span className="whitespace-nowrap">Your customers</span> don’t.
                </span>
              </h1>
              <p className="lede mt-8 max-w-[540px] text-white/80">
                RYX AI builds agents that answer every enquiry, call back every lead and take the repetitive work off
                your team. On your website, on WhatsApp and on the phone, in the language your customer speaks.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/contact" variant="light">
                  Book a 30-minute call
                </Button>
                <Button href="/ferry" variant="outline-night">
                  See Ferry, our website agent
                </Button>
              </div>
            </div>
            <div className="flex lg:justify-end lg:pt-4">
              <NightLog />
            </div>
          </div>
        </section>

        {/* Daybreak */}
        <div aria-hidden className="daybreak h-44 sm:h-64" />

        {/* Morning */}
        <section className="container-content grid items-center gap-12 pb-24 sm:pb-32 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="headline max-w-[620px] text-[40px] sm:text-[60px]">
              By 8 AM, the night is one message on your phone.
            </h2>
            <p className="lede mt-6 max-w-[520px] text-ink-2">
              Nothing waits for office hours. Enquiries are answered, calls are returned, bookings are made, and every
              lead is already in your CRM when you open your eyes.
            </p>
            <Link
              href="/solutions/owner-daily-brief"
              className="mt-6 inline-block py-2 font-semibold text-signal-deep underline decoration-2 underline-offset-4 hover:text-ink"
            >
              How the daily brief works
            </Link>
          </div>
          <div className="flex lg:-mt-40 lg:justify-end">
            <MorningBrief />
          </div>
        </section>

        {/* Problem */}
        <section className="border-t border-rule">
          <div className="container-content grid gap-10 py-24 sm:py-28 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <h2 className="headline text-[40px] sm:text-[56px]">Where businesses lose time and money</h2>
            <dl className="divide-y divide-rule border-y border-rule">
              {problems.map((p) => (
                <div key={p.title} className="grid gap-1 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
                  <dt className="font-display text-2xl font-bold tracking-tight">{p.title}</dt>
                  <dd className="text-lg leading-relaxed text-ink-2">{p.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* What we build */}
        <section className="bg-card">
          <div className="container-content py-24 sm:py-28">
            <h2 className="headline max-w-[760px] text-[40px] sm:text-[56px]">
              Three kinds of work we hand to AI
            </h2>
            <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-rule">
              {pillars.map((p) => (
                <div key={p.title} className="lg:px-10 lg:first:pl-0 lg:last:pr-0">
                  <h3 className="font-display text-3xl font-bold tracking-tight text-signal-deep">{p.title}</h3>
                  <p className="mt-2 text-lg text-ink lg:min-h-[3.5rem]">{p.promise}</p>
                  <ul className="mt-6 space-y-2.5 text-ink-2">
                    {p.items.map((item) => (
                      <li key={item} className="border-t border-rule pt-2.5">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ferry */}
        <section className="bg-signal text-white">
          <div className="container-content grid items-center gap-14 py-24 sm:py-28 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-lg font-semibold">Our product, launching soon</p>
              <h2 className="headline mt-3 text-[88px] sm:text-[140px]">Ferry</h2>
              <p className="mt-5 max-w-[520px] text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                An AI sales agent for your website, built from your own website.
              </p>
              <p className="lede mt-5 max-w-[520px]">
                Give it your URL. It reads your pages and PDFs, answers visitors from them, qualifies the serious ones
                and books the meeting. Live in a day with one script tag.
              </p>
              <p className="mt-8 text-lg">
                Starter from <span className="tnum font-display text-4xl font-bold">₹2,000</span> a month. Premium at
                ₹5,000 a month is coming soon.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact?interest=ferry#early-access" variant="light">
                  Get early access
                </Button>
                <Button href="/ferry" variant="outline-night">
                  How Ferry works
                </Button>
              </div>
            </div>
            <div className="flex lg:justify-end">
              <FerryDemo />
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="container-content py-24 sm:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="headline max-w-[720px] text-[40px] sm:text-[56px]">
              Twelve jobs our agents already do
            </h2>
            <Button href="/solutions" variant="outline">
              Browse by industry
            </Button>
          </div>
          <div className="mt-12 space-y-10">
            {categories.map((category) => (
              <div key={category} className="grid gap-4 lg:grid-cols-[220px_1fr]">
                <h3 className="font-display text-xl font-bold text-ink-3">{category}</h3>
                <ul className="divide-y divide-rule border-y border-rule">
                  {useCases
                    .filter((u) => u.category === category)
                    .map((u) => (
                      <li key={u.slug}>
                        <Link
                          href={`/solutions/${u.slug}`}
                          className="group grid gap-1 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:items-baseline sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_170px]"
                        >
                          <span className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-signal-deep">
                            {u.title}
                          </span>
                          <span className="text-ink-2">{u.tagline}</span>
                          <span className="text-sm text-ink-3 sm:hidden lg:block lg:text-right">{u.channels.join(', ')}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Calculator */}
        <section className="border-t border-rule">
          <div className="container-content py-24 sm:py-28">
            <h2 className="headline max-w-[760px] text-[40px] sm:text-[56px]">What do slow replies cost you?</h2>
            <p className="lede mt-5 max-w-[560px] text-ink-2">
              Move the sliders to match your business. The answer is your own numbers multiplied together.
            </p>
            <div className="mt-12">
              <LostRevenueCalculator />
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="bg-card">
          <div className="container-content py-24 sm:py-28">
            <h2 className="headline max-w-[760px] text-[40px] sm:text-[56px]">
              Tested before your customers meet it. Improved after.
            </h2>
            <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((step, i) => (
                <li key={step.title} className="border-t-2 border-ink pt-5">
                  <p className="tnum font-display text-5xl font-bold tracking-tight text-signal">{i + 1}</p>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-ink-2">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Tools */}
        <section className="container-content grid gap-10 py-24 sm:py-28 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <h2 className="headline text-[40px] sm:text-[56px]">It works with what you already use</h2>
          <dl className="divide-y divide-rule border-y border-rule">
            {tools.map((t) => (
              <div key={t.group} className="py-6">
                <dt className="font-semibold text-ink">{t.group}</dt>
                <dd className="mt-1 text-lg leading-relaxed text-ink-2">{t.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
