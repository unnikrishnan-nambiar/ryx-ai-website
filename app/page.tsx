import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CtaBand from '@/components/CtaBand';
import LostRevenueCalculator from '@/components/LostRevenueCalculator';
import MorningBrief from '@/components/MorningBrief';
import NightLog from '@/components/NightLog';
import Button from '@/components/ui/Button';
import HeroScene from '@/components/three/HeroScene';
import Reveal from '@/components/motion/Reveal';
import LogoMarquee from '@/components/motion/LogoMarquee';
import SolutionScene from '@/components/animations/SolutionScene';
import BrowserFerry from '@/components/visuals/BrowserFerry';
import LeadsDashboard from '@/components/visuals/LeadsDashboard';
import { categories, useCases } from '@/data/useCases';
import { method, pillars } from '@/data/services';
import { asset } from '@/data/assets';
import VoiceDemo from '@/components/visuals/VoiceDemo';

const pillarItems: Record<string, string[]> = {
    train: ['Hands-on AI training for every team', 'AI opportunity audit and roadmap', 'Prompt libraries and team assistants', 'An AI-use policy your people follow'],
    build: ['A 30-day pilot on one real problem', 'AI for sales, marketing and operations', 'Connected to your CRM, WhatsApp and phone', 'Run and improved by us, every week'],
    solutions: ['Ferry, the AI salesperson for websites', 'Instant lead callbacks and follow-ups', 'WhatsApp assistants and booking reminders', 'Document reading and daily reports'],
    grow: ['Social media posts, every week', 'Branding and a brand guide your AI follows', 'Ad campaigns on Meta and Google', 'Every lead followed up on WhatsApp']
};

const facts = [
    ['4 services', 'Training, building, solutions and marketing'],
    ['3 channels', 'Website, WhatsApp and phone'],
    ['30 days', 'From discovery call to a live pilot']
];

export default function Home() {
    return (
        <>
            <Nav />
            <main id="main" className="bg-[#070A1F]">
                {/* Hero: the AI core, live in 3D */}
                <section className="relative -mt-[68px] overflow-hidden pt-[68px] text-white">
                    <div aria-hidden className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_45%,rgba(61,90,254,0.35),transparent_70%),radial-gradient(40%_40%_at_85%_80%,rgba(155,92,255,0.22),transparent_70%)]" />
                        <div className="grid-night absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)]" />
                        <HeroScene className="absolute inset-0 opacity-60 lg:opacity-100" />
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#070A1F]" />
                    </div>

                    <div className="container-content relative flex min-h-[calc(100svh-68px)] flex-col justify-center pb-16 pt-10 sm:pb-24">
                        <p
                            className="hero-in flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-white/85 backdrop-blur"
                            style={{ animationDelay: '80ms' }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-whatsapp" />
                            </span>
                            An AI consultancy from India. We train, we build, we deliver.
                        </p>
                        <h1 className="hero-in headline mt-7 max-w-[880px] text-[48px] sm:text-[80px] lg:text-[96px]" style={{ animationDelay: '180ms' }}>
                            <span className="block">The AI consultancy</span>{' '}
                            <span className="text-brand-gradient block pb-2">for Indian businesses.</span>
                        </h1>
                        <p className="hero-in lede mt-7 max-w-[580px] text-white/80" style={{ animationDelay: '320ms' }}>
                            We train your people on AI, build AI for your sales, marketing and operations, and offer ready AI solutions like Ferry.
                        </p>
                        <div className="hero-in mt-10 flex flex-wrap gap-3" style={{ animationDelay: '440ms' }}>
                            <Button href="/contact?interest=discovery#early-access" variant="light">
                                Book a discovery call
                            </Button>
                            <Button href="/services" variant="outline-night">
                                See how we work with you
                            </Button>
                        </div>
                        <dl className="hero-in mt-14 grid max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-3" style={{ animationDelay: '560ms' }}>
                            {facts.map(([k, v]) => (
                                <div key={k} className="glass rounded-2xl px-5 py-4">
                                    <dt className="font-display text-2xl font-bold tracking-tight">{k}</dt>
                                    <dd className="mt-1 text-sm text-white/70">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                {/* What we do: three animated scenes */}
                <section className="relative text-white">
                    <div className="container-content py-24 sm:py-32">
                        <Reveal>
                            <h2 className="headline max-w-[820px] text-[40px] sm:text-[64px]">Four ways we bring AI into your business</h2>
                            <p className="lede mt-6 max-w-[600px] text-white/70">
                                Start wherever you are. Most clients begin with training or a pilot, and grow from there once it has paid off.
                            </p>
                        </Reveal>
                        <div className="mt-16 grid gap-6 md:grid-cols-2">
                            {pillars.map((p, i) => (
                                <Reveal key={p.id} delay={i * 120}>
                                    <article className="group h-full rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 transition-transform duration-300 hover:-translate-y-0.5 sm:p-7">
                                        <div className="overflow-hidden rounded-[20px] bg-card p-4">
                                            <SolutionScene name={p.scene} steps={p.steps} compact />
                                        </div>
                                        <h3 className="mt-7 font-display text-3xl font-bold tracking-tight">{p.title}</h3>
                                        <p className="mt-2 text-lg text-white/80">{p.promise}</p>
                                        <ul className="mt-5 space-y-2 text-white/70">
                                            {pillarItems[p.id].map((item) => (
                                                <li key={item} className="border-t border-white/10 pt-2">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href={`/services#${p.id}`}
                                            className="mt-6 inline-block py-2 font-semibold text-white underline decoration-signal-glow decoration-2 underline-offset-4 hover:decoration-white"
                                        >
                                            How it works
                                        </Link>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ferry: the product shot */}
                <section className="relative overflow-hidden bg-signal text-white">
                    <div
                        aria-hidden
                        className="absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_65%)]"
                    />
                    <div className="container-content relative grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-[1fr_1.15fr]">
                        <Reveal>
                            <p className="text-lg font-semibold text-white/85">Our product, launching soon</p>
                            <h2 className="headline mt-3 text-[96px] sm:text-[150px]">Ferry</h2>
                            <p className="mt-4 max-w-[520px] text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                                An AI salesperson for your website, built from your own website.
                            </p>
                            <p className="lede mt-5 max-w-[520px] text-white/85">
                                Give it your URL. It reads your pages and PDFs, answers visitors, qualifies the serious ones and books the meeting. Live in a
                                day with one script tag.
                            </p>
                            <p className="mt-8 text-lg">
                                Starter from <span className="tnum font-display text-4xl font-bold">₹2,000</span> a month. Premium at ₹5,000 a month is coming
                                soon.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Button href="/contact?interest=ferry#early-access" variant="light">
                                    Get early access
                                </Button>
                                <Button href="/ferry" variant="outline-night">
                                    Try the Ferry demo
                                </Button>
                            </div>
                        </Reveal>
                        <Reveal delay={150}>
                            <BrowserFerry />
                        </Reveal>
                    </div>
                </section>

                {/* The night, then the morning brief */}
                <section className="relative overflow-hidden text-white">
                    <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,#070A1F_0%,#151a4a_45%,#5b3f86_75%,#c9835a_100%)]" />
                    <div className="container-content relative grid items-center gap-16 py-24 sm:py-32 lg:grid-cols-[1.1fr_1fr]">
                        <div>
                            <Reveal>
                                <h2 className="headline max-w-[640px] text-[40px] sm:text-[64px]">You close at 7. Your customers don’t.</h2>
                                <p className="lede mt-6 max-w-[540px] text-white/80">
                                    This is a night at a clinic running RYX AI. By 8 AM the owner has one message that says what happened.
                                </p>
                            </Reveal>
                            <div className="mt-12">
                                <NightLog />
                            </div>
                        </div>
                        <Reveal delay={200} className="flex justify-center lg:justify-end">
                            <div className="animate-float-slow [&_figcaption]:text-white/80">
                                <MorningBrief />
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Dashboard */}
                <section className="bg-paper text-ink">
                    <div className="container-content grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-[1fr_1.2fr]">
                        <Reveal>
                            <h2 className="headline text-[40px] sm:text-[60px]">Every conversation becomes a lead you can see</h2>
                            <p className="lede mt-6 max-w-[520px] text-ink-2">
                                Who asked, what they want, how serious they are and what happens next. On a dashboard, in your CRM and in your morning WhatsApp.
                            </p>
                            <Link
                                href="/solutions/website-lead-agent"
                                className="mt-6 inline-block py-2 font-semibold text-signal-deep underline decoration-2 underline-offset-4 hover:text-ink"
                            >
                                How the website lead agent works
                            </Link>
                        </Reveal>
                        <Reveal delay={150}>
                            <LeadsDashboard />
                        </Reveal>
                    </div>
                </section>

                {/* Use cases */}
                <section className="bg-paper text-ink">
                    <div className="container-content border-t border-rule py-24 sm:py-28">
                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <h2 className="headline max-w-[720px] text-[40px] sm:text-[56px]">Twelve jobs our AI already does</h2>
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
                                                        className="group grid gap-1 py-4 transition-[padding] duration-300 hover:pl-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:items-baseline sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_170px]"
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
                    </div>
                </section>

                {/* Calculator */}
                <section className="bg-card text-ink">
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
                <section className="text-white">
                    <div className="container-content py-24 sm:py-32">
                        <Reveal>
                            <h2 className="headline max-w-[820px] text-[40px] sm:text-[64px]">How every engagement runs</h2>
                        </Reveal>
                        <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
                            {method.map((step, i) => (
                                <Reveal as="li" key={step.title} delay={i * 100} className="relative border-t border-white/15 pt-6">
                                    <span aria-hidden className="absolute -top-px left-0 h-0.5 w-16 bg-gradient-to-r from-signal-glow to-[#9b5cff]" />
                                    <p className="tnum font-display text-5xl font-bold tracking-tight text-signal-glow">{i + 1}</p>
                                    <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{step.title}</h3>
                                    <p className="mt-2 text-lg leading-relaxed text-white/70">{step.body}</p>
                                </Reveal>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Tools */}
                <section className="overflow-hidden text-white">
                    <div className="container-content pb-10">
                        <h2 className="headline max-w-[820px] text-[40px] sm:text-[56px]">It works with what you already use</h2>
                        <p className="lede mt-5 max-w-[620px] text-white/70">
                            Your channels, your CRM and your calendar stay where they are. RYX AI plugs into them.
                        </p>
                    </div>
                    <div className="pb-24 sm:pb-32">
                        <LogoMarquee />
                    </div>
                </section>

                {/* Live voice demo */}
                <section className="relative overflow-hidden text-white">
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(50%_60%_at_80%_50%,rgba(155,92,255,0.25),transparent_70%)]" />
                    <div className="container-content relative py-24 sm:py-32">
                        <VoiceDemo />
                    </div>
                </section>

                {/* Ferry in 30 seconds */}
                <section className="bg-paper text-ink">
                    <div className="container-content grid items-center gap-12 py-24 sm:py-32 lg:grid-cols-[1fr_1.4fr]">
                        <Reveal>
                            <h2 className="headline text-[40px] sm:text-[60px]">Watch Ferry go live in 30 seconds</h2>
                            <p className="lede mt-6 max-w-[460px] text-ink-2">
                                From your website address to an AI salesperson answering your visitors. No developer, no long setup.
                            </p>
                            <Button href="/contact?interest=ferry#early-access" className="mt-8">
                                Get early access
                            </Button>
                        </Reveal>
                        <Reveal delay={150}>
                            <video
                                controls
                                preload="none"
                                playsInline
                                poster={asset('/ferry-explainer-poster.jpg')}
                                className="aspect-video w-full rounded-[24px] bg-night shadow-[0_40px_100px_-40px_rgba(12,16,36,0.55)]"
                                aria-label="Ferry explainer video"
                            >
                                <source src={asset('/ferry-explainer.mp4')} type="video/mp4" />
                            </video>
                        </Reveal>
                    </div>
                </section>

                <CtaBand />
            </main>
            <Footer />
        </>
    );
}
