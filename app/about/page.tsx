import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { pageMetadata } from '@/lib/metadata';
import Reveal from '@/components/motion/Reveal';
import { asset, team } from '@/data/team';

export const metadata = pageMetadata(
    '/about',
    'About - RYX AI',
    'RYX AI is an AI company from India. We put AI to work in sales, marketing and operations for growing businesses, tested before launch and improved after it, in the languages customers speak.'
);

const principles = [
    {
        title: 'Reliable, not just impressive',
        body: 'Deploying an AI agent is easy. Operating it reliably is the hard part. Every agent we ship goes through AI-powered QA across scenarios, personalities and edge cases before customers ever see it.'
    },
    {
        title: "Built for India's languages",
        body: "Most of India doesn't primarily speak English. We build and test agents natively in regional languages, with cultural context, not just translated after the fact."
    },
    {
        title: 'One knowledge layer, every channel',
        body: 'Website, WhatsApp and voice share the same knowledge and memory. Build once and add channels without rebuilding the stack.'
    },
    {
        title: 'Gets better every week',
        body: 'Real conversations become recommendations, validated by a human before they ship. Your agent improves instead of silently drifting.'
    }
];

export default function AboutPage() {
    return (
        <>
            <Nav />
            <main id="main">
                <PageHero
                    title="An AI company from India, for the businesses that run it"
                    intro="AI is ready. Putting it to work in a real business is the hard part. That is our job: in sales, marketing and operations, tested before customers see it, and improved from every real conversation."
                    aside={
                        <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-[32px] shadow-[0_50px_120px_-40px_rgba(155,92,255,0.6)] ring-1 ring-white/10">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={asset('/brand/ryx-mark-night.jpg')}
                                alt="The RYX AI mark"
                                width={900}
                                height={896}
                                className="w-full animate-float-slow"
                            />
                        </div>
                    }
                />

                <section className="container-content py-20 sm:py-28">
                    <h2 className="headline max-w-[720px] text-[40px] sm:text-[56px]">What we hold ourselves to</h2>
                    <dl className="mt-12 grid gap-x-12 border-t border-rule md:grid-cols-2">
                        {principles.map((p) => (
                            <div key={p.title} className="border-b border-rule py-8">
                                <dt className="font-display text-3xl font-bold tracking-tight">{p.title}</dt>
                                <dd className="mt-3 max-w-[500px] text-lg leading-relaxed text-ink-2">{p.body}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                <section className="bg-card">
                    <div className="container-content py-20 sm:py-28">
                        <h2 className="headline max-w-[760px] text-[40px] sm:text-[56px]">Three founders, three jobs, no gaps</h2>
                        <ul className="mt-14 grid gap-8 lg:grid-cols-3">
                            {team.map((m, i) => (
                                <Reveal as="li" key={m.name} delay={i * 120}>
                                    <div className="h-full overflow-hidden rounded-[28px] bg-paper">
                                        <div className="p-6">
                                            <h3 className="font-display text-3xl font-bold tracking-tight">{m.name}</h3>
                                            <p className="mt-1 font-semibold text-signal-deep">{m.role}</p>
                                            <ul className="mt-5 space-y-2 text-lg text-ink-2">
                                                {m.points.map((p) => (
                                                    <li key={p}>{p}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Reveal>
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
