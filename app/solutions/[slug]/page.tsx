import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Button from '@/components/ui/Button';
import { findUseCase, useCases } from '@/data/useCases';
import { pageMetadata } from '@/lib/metadata';
import SolutionScene from '@/components/animations/SolutionScene';
import { sceneFor } from '@/data/scenes';

type Props = { params: Promise<{ slug: string }> };

// Static export: every use case is prerendered, nothing else resolves.
export const dynamicParams = false;

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const u = findUseCase(slug);
  if (!u) return {};
  return pageMetadata(`/solutions/${u.slug}`, `${u.title} - RYX AI`, `${u.tagline} ${u.solution}`);
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const u = findUseCase(slug);
  if (!u) notFound();

  const related = useCases.filter((x) => x.category === u.category && x.slug !== u.slug).slice(0, 3);
  const more = related.length ? related : useCases.filter((x) => x.slug !== u.slug).slice(0, 3);
  const isFerry = u.slug === 'website-lead-agent';
  const scene = sceneFor(u.slug);

  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          title={u.title}
          intro={u.tagline}
          aside={
            <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-3 shadow-[0_40px_100px_-40px_rgba(61,90,254,0.7)] backdrop-blur">
              <div className="rounded-[20px] bg-card p-4 sm:p-5">
                <SolutionScene name={scene.name} steps={scene.steps} />
              </div>
            </div>
          }
        >
          <nav aria-label="Breadcrumb" className="order-first mb-8 text-white/75">
            <Link href="/solutions" className="underline underline-offset-4 hover:text-white">
              Solutions
            </Link>
            <span aria-hidden className="px-2">
              /
            </span>
            <span aria-current="page">{u.title}</span>
          </nav>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact" variant="light">
              Book a 30-minute call
            </Button>
            {isFerry && (
              <Button href="/ferry" variant="outline-night">
                See Ferry
              </Button>
            )}
          </div>
        </PageHero>

        <section className="container-content grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight">The problem</h2>
              <p className="lede mt-3 max-w-[640px] text-ink-2">{u.problem}</p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight">What the AI does</h2>
              <p className="lede mt-3 max-w-[640px] text-ink-2">{u.solution}</p>
            </div>
            <div className="border-l-4 border-signal pl-6">
              <h2 className="font-display text-3xl font-bold tracking-tight">What changes</h2>
              <p className="mt-3 max-w-[640px] font-display text-2xl font-bold leading-snug tracking-tight text-signal-deep sm:text-3xl">
                {u.benefit}
              </p>
            </div>
            <div className="rounded-[24px] bg-card p-6 sm:p-8">
              <h2 className="font-semibold text-ink-3">An example</h2>
              <p className="mt-2 max-w-[640px] text-lg leading-relaxed text-ink">{u.example}</p>
            </div>
          </div>

          <aside className="self-start lg:sticky lg:top-24">
            <dl className="divide-y divide-rule border-y border-rule">
              <div className="py-5">
                <dt className="font-semibold">Where it runs</dt>
                <dd className="mt-1 text-ink-2">{u.channels.join(', ')}</dd>
              </div>
              <div className="py-5">
                <dt className="font-semibold">Who it suits</dt>
                <dd className="mt-1 text-ink-2">{u.industries}</dd>
              </div>
              <div className="py-5">
                <dt className="font-semibold">What we measure</dt>
                <dd className="mt-1 text-ink-2">
                  <ul className="list-disc space-y-1 pl-5">
                    {u.measure.split(', ').map((m) => (
                      <li key={m} className="first-letter:uppercase">
                        {m}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="border-t border-rule">
          <div className="container-content py-16 sm:py-20">
            <h2 className="font-display text-3xl font-bold tracking-tight">Agents that work well alongside it</h2>
            <ul className="mt-6 grid gap-x-10 border-t border-rule md:grid-cols-3">
              {more.map((r) => (
                <li key={r.slug} className="border-b border-rule">
                  <Link href={`/solutions/${r.slug}`} className="group block py-6">
                    <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-signal-deep">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-ink-2">{r.tagline}</p>
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
