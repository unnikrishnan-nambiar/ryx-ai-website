import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import JsonLd, { breadcrumbLd, faqLd, siteUrl } from '@/components/JsonLd';
import PageHero from '@/components/sections/PageHero';
import EasiestWay from '@/components/sections/EasiestWay';
import CtaBand from '@/components/sections/CtaBand';
import { adoptionSteps, checklist, guide, guideFaq, stalls, startByGoal } from '@/data/adoptAi';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = {
  ...pageMetadata(guide.path, guide.metaTitle, guide.description),
  keywords: [
    'how to adopt AI in business',
    'how to adopt AI for small business',
    'easiest way to adopt AI',
    'AI adoption for business',
    'how to start using AI in my company',
    'AI for small business India',
    'AI website agent',
    'Ferry AI',
  ],
};

const toc = [
  { id: 'short-answer', label: 'The short answer' },
  { id: 'why-it-stalls', label: 'Why AI adoption stalls' },
  { id: 'steps', label: '6 steps to adopt AI' },
  { id: 'where-to-start', label: 'Where to start, by goal' },
  { id: 'easiest-first-step', label: 'The easiest first step' },
  { id: 'checklist', label: 'Checklist' },
  { id: 'faq', label: 'Questions' },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-balance font-display text-[28px] font-bold leading-tight tracking-[-0.02em] text-ink sm:text-[34px]">
      {children}
    </h2>
  );
}

export default function AdoptAiGuidePage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.published,
    dateModified: guide.published,
    mainEntityOfPage: `${siteUrl}${guide.path}`,
    image: `${siteUrl}/opengraph-image.png`,
    author: { '@type': 'Organization', name: 'RYX AI', url: siteUrl },
    publisher: { '@id': `${siteUrl}/#organization` },
    about: ['AI adoption', 'Small business', 'AI website agent'],
    mentions: { '@type': 'SoftwareApplication', name: 'Ferry', url: `${siteUrl}/ferry` },
  };

  return (
    <>
      <JsonLd
        data={[
          articleLd,
          faqLd(guideFaq),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: guide.title, path: guide.path },
          ]),
        ]}
      />
      <Nav />
      <main>
        <PageHero
          crumbs={[{ label: 'Adopt AI', href: guide.path }]}
          eyebrow="Guide · For business owners"
          title={guide.title}
          intro="A practical, step-by-step guide for owners and managers, not engineers. Where to start, what it costs, how to know it’s working, and the easiest first step."
        >
          <Button href="#short-answer" variant="primary">
            Read the short answer
          </Button>
          <Button href="/ferry" variant="ghost">
            Skip to the easiest way: Ferry
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </PageHero>

        <article className="bg-white py-16 text-ink sm:py-24">
          <div className="container-content grid gap-12 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr]">
            {/* Table of contents */}
            <nav aria-label="On this page" className="hidden lg:block">
              <div className="sticky top-24">
                <p className="eyebrow text-ink-muted">On this page</p>
                <ol className="mt-4 space-y-2.5 border-l border-line">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="-ml-px block border-l border-transparent pl-4 text-sm text-ink-secondary transition-colors hover:border-blue hover:text-ink"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <div className="min-w-0 max-w-[780px] space-y-16">
              {/* Short answer */}
              <section aria-labelledby="short-answer">
                <div className="rounded-card border border-blue/20 bg-blue-light/60 p-6 sm:p-8">
                  <p id="short-answer" className="eyebrow scroll-mt-24 text-blue">
                    The short answer
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-ink sm:text-xl">{guide.shortAnswer}</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button href="/ferry" variant="primary">
                      See how Ferry works
                    </Button>
                    <Button href={site.bookingUrl} variant="outline">
                      Talk to RYX AI
                    </Button>
                  </div>
                </div>
              </section>

              {/* Why it stalls */}
              <section>
                <H2 id="why-it-stalls">Why most AI adoption stalls</H2>
                <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
                  AI tools are easier to use than ever, yet many businesses try AI and give up. It’s
                  rarely the technology. It’s usually one of these four:
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {stalls.map((s) => (
                    <div key={s.title} className="rounded-2xl border border-line bg-mist p-5">
                      <h3 className="font-display text-lg font-bold">{s.title}</h3>
                      <p className="mt-1.5 leading-relaxed text-ink-secondary">{s.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Steps */}
              <section>
                <H2 id="steps">How to adopt AI in your business, in 6 steps</H2>
                <ol className="mt-8 space-y-4">
                  {adoptionSteps.map((step, i) => (
                    <Reveal key={step.title} as="li" delay={i * 0.04}>
                      <div className="flex gap-5 rounded-2xl border border-line p-5 sm:p-6">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue font-display font-bold text-white">
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="font-display text-xl font-bold">{step.title}</h3>
                          <p className="mt-1.5 leading-relaxed text-ink-secondary">{step.body}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </section>

              {/* Where to start */}
              <section>
                <H2 id="where-to-start">Where to start, by what you want</H2>
                <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
                  Pick the goal that matters most this quarter. Each links to how RYX AI does it.
                </p>
                <div className="mt-8 overflow-hidden rounded-card border border-line">
                  <table className="w-full text-left text-[15px]">
                    <thead className="bg-mist">
                      <tr>
                        <th scope="col" className="px-5 py-3.5 font-semibold text-ink-secondary">
                          If you want…
                        </th>
                        <th scope="col" className="px-5 py-3.5 font-semibold text-ink-secondary">
                          Start with
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {startByGoal.map((row) => (
                        <tr key={row.goal} className="border-t border-line">
                          <td className="px-5 py-4">{row.goal}</td>
                          <td className="px-5 py-4">
                            <Link href={row.href} className="font-semibold text-blue hover:text-blue-dark">
                              {row.start} →
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Easiest first step (summary; full section below) */}
              <section>
                <H2 id="easiest-first-step">The easiest first step: an AI agent on your website</H2>
                <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
                  If you’re not sure where to begin, begin with your website. It already explains
                  your business, it already gets visitors, and most of them leave without saying a
                  word. An AI agent that answers them turns AI from an idea into leads you can count,
                  usually within the first week.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
                  That’s exactly what <Link href="/ferry" className="font-semibold text-blue hover:text-blue-dark">Ferry</Link>{' '}
                  does. You enter your website address; Ferry learns from your pages and documents,
                  greets visitors at the right moment, answers their questions, and guides them to buy
                  or book a demo. It goes live in about a day, from ₹2,000 a month.
                </p>
              </section>
            </div>
          </div>
        </article>

        <EasiestWay showGuideLink={false} showFerryLink />

        <section className="bg-white py-16 text-ink sm:py-24">
          <div className="container-content grid gap-12 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr]">
            <div className="hidden lg:block" />
            <div className="min-w-0 max-w-[780px] space-y-16">
              {/* Checklist */}
              <section>
                <H2 id="checklist">Your AI adoption checklist</H2>
                <ul className="mt-8 space-y-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex gap-3 rounded-xl border border-line px-4 py-3.5">
                      <span className="mt-0.5 h-5 w-5 shrink-0 rounded-md border-2 border-ink/25" aria-hidden />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* FAQ */}
              <section>
                <H2 id="faq">Questions business owners ask</H2>
                <div className="mt-8 divide-y divide-line rounded-card border border-line">
                  {guideFaq.map((item) => (
                    <details key={item.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden" open={item === guideFaq[0]}>
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                        <h3>{item.q}</h3>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-ink-secondary transition-transform duration-300 group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 leading-relaxed text-ink-secondary">{item.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <CtaBand
          title="Ready to adopt AI? Start with one call."
          intro="Tell us how your business runs. We’ll show you the easiest first step, usually Ferry, and what comes after."
        />
      </main>
      <Footer />
    </>
  );
}
