import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Button from '@/components/ui/Button';
import Reveal from '@/components/motion/Reveal';
import { method, pillars, services } from '@/data/services';
import SolutionScene from '@/components/animations/SolutionScene';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
    '/services',
    'Services - RYX AI consultancy',
    'AI opportunity audits, 30-day AI pilots, build-and-run AI and team training for Indian businesses. Start with a free discovery call.'
);

export default function ServicesPage() {
    return (
        <>
            <Nav />
            <main id="main">
                <PageHero
                    title="We train, we build, we deliver AI"
                    intro="Three ways RYX AI works with Indian businesses. Most start with a free discovery call, then training, an audit or a pilot, and only take the next step once the last one has paid off."
                >
                    <div className="mt-9 flex flex-wrap gap-3">
                        <Button href="/contact?interest=discovery#early-access" variant="light">
                            Book a discovery call
                        </Button>
                    </div>
                </PageHero>

                {/* The three pillars */}
                {pillars.map((pillar, pi) => (
                    <section key={pillar.id} id={pillar.id} className={`scroll-mt-20 ${pi % 2 ? 'bg-card' : 'bg-paper'}`}>
                        <div className="container-content py-20 sm:py-28">
                            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
                                <Reveal>
                                    <h2 className="headline text-[40px] sm:text-[60px]">{pillar.title}</h2>
                                    <p className="lede mt-5 max-w-[520px] text-ink-2">{pillar.promise}</p>
                                </Reveal>
                                <Reveal delay={120}>
                                    <div className="rounded-[24px] bg-card p-4 shadow-[0_24px_60px_-40px_rgba(12,16,36,0.45)] ring-1 ring-rule sm:p-5">
                                        <SolutionScene name={pillar.scene} steps={pillar.steps} compact />
                                    </div>
                                </Reveal>
                            </div>

                            <div className="mt-12 grid gap-6 lg:grid-cols-2">
                                {services
                                    .filter((s) => s.pillar === pillar.id)
                                    .map((s) => (
                                        <Reveal key={s.slug}>
                                            <article
                                                id={s.slug}
                                                className="flex h-full scroll-mt-24 flex-col rounded-[28px] bg-card p-7 ring-1 ring-rule sm:p-9"
                                            >
                                                <h3 className="font-display text-[30px] font-bold leading-tight tracking-tight">{s.name}</h3>
                                                <p className="mt-3 text-lg text-ink">{s.promise}</p>
                                                <p className="mt-2 text-ink-2">{s.forWho}</p>
                                                <ul className="mb-7 mt-6 space-y-2.5">
                                                    {s.youGet.map((g) => (
                                                        <li key={g} className="flex gap-3 text-ink-2">
                                                            <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-signal" fill="none" aria-hidden>
                                                                <path
                                                                    d="M4 10.5 8 14.5 16 6"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2.2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                            <span>{g}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-rule pt-5">
                                                    <div>
                                                        <dt className="text-sm text-ink-3">How long</dt>
                                                        <dd className="mt-1 font-semibold">{s.length}</dd>
                                                    </div>
                                                    <div>
                                                        <dt className="text-sm text-ink-3">Price</dt>
                                                        <dd className="mt-1 font-semibold">{s.price}</dd>
                                                    </div>
                                                </dl>
                                                <Button href={s.cta.href} variant="outline" className="mt-6 self-start">
                                                    {s.cta.label}
                                                </Button>
                                            </article>
                                        </Reveal>
                                    ))}

                                {pillar.id === 'solutions' && (
                                    <>
                                        <Reveal>
                                            <article className="relative h-full overflow-hidden rounded-[28px] bg-[#070A1F] p-7 text-white sm:p-9">
                                                <div
                                                    aria-hidden
                                                    className="absolute inset-0 bg-[radial-gradient(60%_80%_at_90%_10%,rgba(214,168,78,0.3),transparent_70%)]"
                                                />
                                                <div className="relative">
                                                    <h3 className="font-display text-[30px] font-bold leading-tight tracking-tight">
                                                        Ferry, our AI salesperson for websites
                                                    </h3>
                                                    <p className="mt-3 text-lg text-white/80">
                                                        Learns from your website, answers every visitor, qualifies leads and books meetings. Live in a day.
                                                    </p>
                                                    <p className="mt-6 text-white/80">
                                                        Starter from <span className="tnum font-display text-3xl font-bold text-gold">₹2,000</span> a month.
                                                        Premium ₹5,000, coming soon.
                                                    </p>
                                                    <div className="mt-7 flex flex-wrap gap-3">
                                                        <Button href="/ferry" variant="light">
                                                            See Ferry
                                                        </Button>
                                                        <Button href="/contact?interest=ferry#early-access" variant="outline-night">
                                                            Get early access
                                                        </Button>
                                                    </div>
                                                </div>
                                            </article>
                                        </Reveal>
                                        <Reveal>
                                            <article className="flex h-full flex-col rounded-[28px] bg-card p-7 ring-1 ring-rule sm:p-9">
                                                <h3 className="font-display text-[30px] font-bold leading-tight tracking-tight">Twelve ready AI jobs</h3>
                                                <p className="mt-3 text-lg text-ink">
                                                    Lead callbacks, WhatsApp assistants, booking reminders, review requests, document extraction and more, set
                                                    up for your business.
                                                </p>
                                                <Button href="/solutions" variant="outline" className="mt-auto self-start">
                                                    Browse the use cases
                                                </Button>
                                            </article>
                                        </Reveal>
                                    </>
                                )}
                            </div>
                        </div>
                    </section>
                ))}

                {/* Method */}
                <section className="bg-[#070A1F] text-white">
                    <div className="container-content py-24 sm:py-28">
                        <h2 className="headline max-w-[760px] text-[40px] sm:text-[60px]">How every engagement runs</h2>
                        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                            {method.map((m, i) => (
                                <Reveal as="li" key={m.title} delay={i * 100} className="relative border-t border-white/15 pt-6">
                                    <span aria-hidden className="absolute -top-px left-0 h-0.5 w-12 bg-gradient-to-r from-signal-glow to-[#9b5cff]" />
                                    <p className="tnum font-display text-4xl font-bold text-signal-glow">{i + 1}</p>
                                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{m.title}</h3>
                                    <p className="mt-2 leading-relaxed text-white/70">{m.body}</p>
                                </Reveal>
                            ))}
                        </ol>
                        <p className="mt-14 text-lg text-white/70">
                            See the{' '}
                            <Link href="/solutions" className="font-semibold text-white underline underline-offset-4">
                                12 jobs our AI already does
                            </Link>{' '}
                            for what a pilot can look like.
                        </p>
                    </div>
                </section>

                <CtaBand />
            </main>
            <Footer />
        </>
    );
}
