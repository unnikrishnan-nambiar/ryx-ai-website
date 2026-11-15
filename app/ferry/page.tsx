import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CtaBand from '@/components/CtaBand';
import Faq from '@/components/Faq';
import FerryDemo from '@/components/FerryDemo';
import FerryPricing from '@/components/FerryPricing';
import JsonLd from '@/components/JsonLd';
import Button from '@/components/ui/Button';
import { ferryAnalytics, ferryFaq, ferryFeatures, ferrySteps } from '@/data/ferry';
import { pageMetadata } from '@/lib/metadata';
import { ferryFaqLd, ferryLd } from '@/lib/structuredData';

export const metadata = pageMetadata(
  '/ferry',
  'Ferry - AI Website Sales Agent by RYX AI',
  'Ferry is an AI sales agent built from your own website. It answers visitors, qualifies leads and books meetings around the clock. Starter from ₹2,000 a month. Early access open.'
);

const problems = [
  { title: 'Unanswered questions', body: 'Visitors leave without what they came for.' },
  { title: 'Slow responses', body: 'Interest cools before anyone replies.' },
  { title: 'No engineering time', body: 'Building a custom AI agent is out of reach.' },
];

// Raw <video> src isn't rewritten by Next, so prefix the Pages basePath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function FerryPage() {
  return (
    <>
      <JsonLd data={ferryLd} />
      <JsonLd data={ferryFaqLd} />
      <Nav />
      <main id="main">
        {/* Hero: the product, working */}
        <section className="sky -mt-[68px] pt-[68px] text-white">
          <div className="container-content grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:pb-28">
            <div>
              <p className="text-lg font-semibold text-dawn">Launching soon. Early access is open.</p>
              <h1 className="headline mt-3 text-[96px] sm:text-[150px] lg:text-[180px]">Ferry</h1>
              <p className="mt-4 max-w-[560px] text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                The AI sales agent for your website, built from your own website.
              </p>
              <p className="lede mt-5 max-w-[540px] text-white/80">
                It answers visitors, qualifies leads and books meetings, around the clock. Try the conversation on the
                right.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/contact?interest=ferry#early-access" variant="light">
                  Get early access
                </Button>
                <Button href="#pricing" variant="outline-night">
                  See pricing
                </Button>
              </div>
              <p className="mt-5 text-white/80">Starter from ₹2,000 a month. Live in a day.</p>
            </div>
            <div className="flex lg:justify-end">
              <FerryDemo />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="container-content grid gap-10 py-24 sm:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="headline text-[40px] sm:text-[56px]">
              You already paid to bring those visitors in.
            </h2>
            <p className="lede mt-6 max-w-[480px] text-ink-2">
              Hiring a team to answer every visitor in real time isn’t economical for a small business. So most
              questions go unanswered, and the visitor leaves.
            </p>
          </div>
          <dl className="divide-y divide-rule self-end border-y border-rule">
            {problems.map((p) => (
              <div key={p.title} className="py-6">
                <dt className="font-display text-2xl font-bold tracking-tight">{p.title}</dt>
                <dd className="mt-1 text-lg text-ink-2">{p.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* How it works: a real sequence */}
        <section className="bg-card">
          <div className="container-content py-24 sm:py-28">
            <h2 className="headline max-w-[760px] text-[40px] sm:text-[56px]">
              A sales agent that builds itself from your website
            </h2>
            <ol className="mt-14 grid gap-10 lg:grid-cols-3">
              {ferrySteps.map((s, i) => (
                <li key={s.title} className="border-t-2 border-ink pt-5">
                  <p className="tnum font-display text-5xl font-bold tracking-tight text-signal">{i + 1}</p>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-ink-2">{s.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-lg text-ink-2">
              Go live with one script tag or the WordPress plugin. No developer needed.
            </p>
            <figure className="mt-14">
              <video
                controls
                preload="none"
                playsInline
                poster={`${basePath}/ferry-explainer-poster.jpg`}
                className="aspect-video w-full rounded-[24px] bg-night shadow-[0_30px_80px_-40px_rgba(5,8,30,0.6)]"
              >
                <source src={`${basePath}/ferry-explainer.mp4`} type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-ink-2">Ferry in 30 seconds: from your URL to a live agent.</figcaption>
            </figure>
          </div>
        </section>

        {/* Features */}
        <section className="container-content py-24 sm:py-28">
          <h2 className="headline max-w-[760px] text-[40px] sm:text-[56px]">Everything in the box</h2>
          <dl className="mt-12 grid gap-x-12 border-t border-rule md:grid-cols-2">
            {ferryFeatures.map((f) => (
              <div key={f.title} className="border-b border-rule py-7">
                <dt className="font-display text-2xl font-bold tracking-tight">{f.title}</dt>
                <dd className="mt-2 text-lg leading-relaxed text-ink-2">{f.body}</dd>
              </div>
            ))}
            <div className="border-b border-rule py-7">
              <dt className="font-display text-2xl font-bold tracking-tight text-signal-deep">Voice agents</dt>
              <dd className="mt-2 text-lg leading-relaxed text-ink-2">Coming soon to Ferry.</dd>
            </div>
          </dl>
        </section>

        {/* Analytics */}
        <section className="bg-signal text-white">
          <div className="container-content py-24 sm:py-28">
            <h2 className="headline max-w-[820px] text-[40px] sm:text-[56px]">
              See how your agent and your website are doing, in one place
            </h2>
            <dl className="mt-14 grid gap-10 lg:grid-cols-3">
              {ferryAnalytics.map((a) => (
                <div key={a.title} className="border-t-2 border-white pt-5">
                  <dt className="font-display text-3xl font-bold tracking-tight">{a.question}</dt>
                  <dd className="mt-3 text-lg leading-relaxed">{a.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20">
          <div className="container-content py-24 sm:py-28">
            <h2 className="headline max-w-[760px] text-[40px] sm:text-[56px]">Simple monthly pricing</h2>
            <p className="lede mt-5 max-w-[560px] text-ink-2">
              Ferry is launching soon. Ask for early access and we’ll set you up first.
            </p>
            <div className="mt-12">
              <FerryPricing />
              <p className="mt-5 text-ink-2">Prices exclude applicable taxes.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-rule">
          <div className="container-content grid gap-10 py-24 sm:py-28 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <h2 className="headline text-[40px] sm:text-[56px]">Before you ask</h2>
            <Faq items={ferryFaq} />
          </div>
        </section>

        <CtaBand
          title="Put Ferry on your website and be first in line."
          body="Early access is open. Tell us about your business and your website, and we’ll get your agent live."
        />
      </main>
      <Footer />
    </>
  );
}
