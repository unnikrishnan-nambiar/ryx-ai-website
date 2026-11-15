import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/about',
  'About - RYX AI',
  'RYX AI builds reliable AI agents for businesses, tested before launch and improved after it, in the languages customers actually speak.'
);

const principles = [
  {
    title: 'Reliable, not just impressive',
    body: "Deploying an AI agent is easy. Operating it reliably is the hard part. Every agent we ship goes through AI-powered QA across scenarios, personalities and edge cases before customers ever see it.",
  },
  {
    title: "Built for India's languages",
    body: "Most of India doesn't primarily speak English. We build and test agents natively in regional languages, with cultural context, not just translated after the fact.",
  },
  {
    title: 'One knowledge layer, every channel',
    body: 'Website, WhatsApp and voice share the same knowledge and memory. Build once and add channels without rebuilding the stack.',
  },
  {
    title: 'Gets better every week',
    body: 'Real conversations become recommendations, validated by a human before they ship. Your agent improves instead of silently drifting.',
  },
];

const team = [
  {
    name: 'Unnikrishnan Nambiar',
    role: 'Product, sales and consulting',
    points: ['Bridges AI capability and business reality', 'Owns product vision and go-to-market'],
  },
  {
    name: 'Shamil Muhammed',
    role: 'AI and engineering',
    points: ['Built the entire technical stack', 'LLMs, RAG, voice AI, eval frameworks'],
  },
  {
    name: 'Salmanul Faris',
    role: 'Sales, marketing and growth',
    points: ['Owns sales and marketing systems', 'Industry relationships and expansion'],
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          title="AI is ready. Putting it to work is the hard part."
          intro="We build AI agents for sales, marketing and operations, and we stay with them after launch. Tested before customers see them, measured while they run, and improved from every real conversation."
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
            <ul className="mt-14 grid gap-10 lg:grid-cols-3">
              {team.map((m) => (
                <li key={m.name} className="border-t-2 border-ink pt-5">
                  <h3 className="font-display text-3xl font-bold tracking-tight">{m.name}</h3>
                  <p className="mt-1 font-semibold text-signal-deep">{m.role}</p>
                  <ul className="mt-5 space-y-2 text-lg text-ink-2">
                    {m.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
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
