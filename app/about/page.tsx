import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { pageMetadata } from '@/lib/metadata';
import HeroScene from '@/components/three/HeroScene';

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
                    aside={<HeroScene className="mx-auto aspect-square w-full max-w-[460px] [mask-image:radial-gradient(closest-side,#000_75%,transparent)]" />}
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

                <CtaBand />
            </main>
            <Footer />
        </>
    );
}
