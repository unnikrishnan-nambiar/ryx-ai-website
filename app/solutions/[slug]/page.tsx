import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import PageHero from '@/components/sections/PageHero';
import CtaBand from '@/components/sections/CtaBand';
import SolutionAnimation from '@/components/animations/SolutionAnimation';
import { getSolution, solutions } from '@/data/solutions';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';

// Ferry has its own page at /ferry, so it isn't generated here.
const pageSolutions = solutions.filter((s) => s.href.startsWith('/solutions/'));

export function generateStaticParams() {
  return pageSolutions.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return pageMetadata(`/solutions/${s.slug}`, `${s.title} - RYX AI`, s.short);
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s || !s.href.startsWith('/solutions/')) notFound();

  const others = solutions.filter((o) => o.slug !== s.slug);

  return (
    <>
      <Nav />
      <main>
        <PageHero
          crumbs={[{ label: 'Solutions', href: '/solutions' }]}
          eyebrow={`Solution ${s.number}`}
          title={s.title}
          intro={s.short}
        >
          <Button href={site.bookingUrl} variant="primary">
            <Icon name="calendar" className="h-[18px] w-[18px]" />
            Book a 30-minute call
          </Button>
          <Button href="#how-it-works" variant="ghost">
            See how it works
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </PageHero>

        {/* What it is */}
        <section className="bg-mist py-20 text-ink sm:py-24">
          <div className="container-content grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <p className="eyebrow text-blue">In plain words</p>
              <p className="mt-5 text-balance font-display text-[24px] font-semibold leading-[1.4] tracking-[-0.01em] text-ink sm:text-[30px]">
                {s.definition}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-card border border-line bg-white p-7 shadow-card">
                <p className="eyebrow text-blue">Who it’s for</p>
                <ul className="mt-5 space-y-3">
                  {s.whoFor.map((who) => (
                    <li key={who} className="flex items-center gap-3 text-[15px]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-light text-blue">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {who}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-16 bg-white py-20 text-ink sm:py-28">
          <div className="container-content">
            <SectionHeading tone="light" eyebrow="How it works" title="Four steps, start to finish." />
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start">
              <Reveal>
                <div className="rounded-card border border-line bg-mist p-4 shadow-card sm:p-7">
                  <SolutionAnimation name={s.animation} steps={s.steps.map((step) => step.title)} />
                </div>
              </Reveal>
              <ol className="space-y-3">
                {s.steps.map((step, i) => (
                  <Reveal key={step.title} as="li" delay={i * 0.08}>
                    <div className="flex gap-4 rounded-2xl border border-line p-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue font-display text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold">{step.title}</h3>
                        <p className="mt-1 leading-relaxed text-ink-secondary">{step.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-mist py-20 text-ink sm:py-24">
          <div className="container-content grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-card bg-night p-8 text-white sm:p-10">
                <p className="eyebrow text-blue-soft">What you get</p>
                <ul className="mt-6 space-y-4">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-lg leading-snug">
                      <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-blue-soft" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-card border border-line bg-white p-8 shadow-card sm:p-10">
                <p className="eyebrow text-blue">Example scenario</p>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{s.example.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-ink-secondary">{s.example.body}</p>
                <div className="mt-8">
                  <Button href={site.bookingUrl} variant="primary">
                    Talk to us about this
                    <Icon name="arrow" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Other solutions */}
        <section className="bg-night py-20">
          <div className="container-content">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Explore other solutions</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={o.href}
                    className={`group flex h-full flex-col rounded-2xl border p-5 transition-colors duration-300 ${
                      o.flagship ? 'border-gold/40 hover:border-gold' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <Icon name={o.icon} className={`h-5 w-5 ${o.flagship ? 'text-gold' : 'text-blue-soft'}`} />
                    <span className="mt-4 font-display font-bold">{o.title}</span>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm text-white/55 group-hover:text-white">
                      Learn more <Icon name="arrow" className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
