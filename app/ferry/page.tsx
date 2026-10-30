import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import LeadButton from '@/components/LeadButton';
import PageHero from '@/components/sections/PageHero';
import ChatPreview from '@/components/sections/ChatPreview';
import Pricing from '@/components/sections/Pricing';
import CtaBand from '@/components/sections/CtaBand';
import EasiestWay from '@/components/sections/EasiestWay';
import JsonLd, { breadcrumbLd, faqLd, siteUrl } from '@/components/JsonLd';
import SolutionAnimation from '@/components/animations/SolutionAnimation';
import { ferryAnalytics, ferryFaq, ferryFeatures, plans } from '@/data/ferry';
import { getSolution } from '@/data/solutions';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/ferry',
  'Ferry: the easiest way to adopt AI in your business | RYX AI',
  'Ferry is the easiest way to adopt AI: an AI agent built from your own website that turns visitors into purchases and demo bookings. No tech team, live in a day, from ₹2,000 a month.'
);

const ferryLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ferry',
  url: `${siteUrl}/ferry`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Ferry by RYX AI is the easiest way for a business to adopt AI: an AI sales agent built from your own website that answers visitors, qualifies leads and books meetings or guides purchases, live in about a day.',
  publisher: { '@id': `${siteUrl}/#organization` },
  offers: plans
    .filter((p) => p.price)
    .map((p) => ({
      '@type': 'Offer',
      name: `Ferry ${p.name}`,
      price: p.price!.replace(/[^0-9]/g, ''),
      priceCurrency: 'INR',
      description: p.summary,
    })),
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function FerryPage() {
  const ferry = getSolution('ferry')!;
  const { videoSrc, videoPoster } = site.ferry;

  return (
    <>
      <JsonLd
        data={[
          ferryLd,
          faqLd(ferryFaq),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Ferry', path: '/ferry' },
          ]),
        ]}
      />
      <Nav />
      <main>
        <PageHero
          accent="gold"
          crumbs={[{ label: 'Ferry', href: '/ferry' }]}
          eyebrow="Ferry · Our flagship product"
          title={
            <>
              The easiest way to adopt AI <span className="text-gold">in your business.</span>
            </>
          }
          intro="Ferry puts an AI agent on your website in a day. No tech team and nothing new to learn: it learns from your own website, answers every visitor, and turns them into purchases and demo bookings."
          aside={<ChatPreview />}
        >
          <LeadButton
            variant="gold"
            title="Try Ferry on your website"
            intro="Share your website and we’ll set up a Ferry agent trained on your content."
            source="Ferry demo request"
            submitLabel="Request a demo"
          >
            Try Ferry
            <Icon name="arrow" className="h-4 w-4" />
          </LeadButton>
          <Button href="#pricing" variant="ghost">
            See pricing
          </Button>
        </PageHero>

        <EasiestWay />

        {/* How it works */}
        <section className="bg-mist py-20 text-ink sm:py-28">
          <div className="container-content">
            <SectionHeading
              tone="light"
              eyebrow="How Ferry works"
              eyebrowClass="text-gold-dark"
              title="From quiet visitor to booked demo."
              intro={ferry.definition}
            />
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start">
              <Reveal>
                <div className="rounded-card border border-line bg-white p-4 shadow-card sm:p-7">
                  <SolutionAnimation name="ferry" steps={ferry.steps.map((s) => s.title)} />
                </div>
              </Reveal>
              <ol className="space-y-3">
                {ferry.steps.map((step, i) => (
                  <Reveal key={step.title} as="li" delay={i * 0.08}>
                    <div className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold font-display text-sm font-bold text-night">
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

        {/* Video + features */}
        <section className="relative overflow-hidden bg-night-900 py-20 sm:py-28">
          <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden />
          <div className="container-content relative">
            <SectionHeading
              eyebrow="See it in action"
              eyebrowClass="text-gold"
              title="Watch Ferry in 30 seconds."
            />

            {videoSrc && (
              <Reveal className="mt-10">
                <div className="relative">
                  <div className="absolute -inset-6 rounded-[36px] bg-gold/10 blur-3xl" aria-hidden />
                  <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-night-800 p-2 shadow-lift sm:p-3">
                    <div className="aspect-video overflow-hidden rounded-[16px] bg-white">
                      {/^https?:\/\//.test(videoSrc) ? (
                        <iframe
                          src={videoSrc}
                          title="Ferry explainer video"
                          className="h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          className="h-full w-full object-cover"
                          src={`${basePath}${videoSrc}`}
                          poster={videoPoster ? `${basePath}${videoPoster}` : undefined}
                          controls
                          playsInline
                          preload="metadata"
                        >
                          Your browser can&apos;t play this video.
                        </video>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {ferryFeatures.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 0.08}>
                  <div className={`h-full rounded-card p-7 ${i === 0 ? 'bg-gold text-night' : 'border border-white/10 bg-night-800'}`}>
                    <p className={`font-display text-sm font-bold ${i === 0 ? 'text-night/60' : 'text-gold'}`}>0{i + 1}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold">{feature.title}</h3>
                    <p className={`mt-3 leading-relaxed ${i === 0 ? 'text-night/80' : 'text-white/65'}`}>{feature.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <h3 className="max-w-[640px] font-display text-2xl font-bold tracking-tight sm:text-3xl">
                One dashboard for your agent and your website.
              </h3>
            </Reveal>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {ferryAnalytics.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className={`border-t-2 pt-5 ${i === 0 ? 'border-white/70' : 'border-gold'}`}>
                    <p className="eyebrow text-white/45">{item.question}</p>
                    <h4 className="mt-2 font-display text-xl font-bold">{item.title}</h4>
                    <p className="mt-2 leading-relaxed text-white/60">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Pricing />

        {/* FAQ */}
        <section className="bg-mist py-20 text-ink sm:py-24">
          <div className="container-content grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            <SectionHeading tone="light" eyebrow="Questions" eyebrowClass="text-gold-dark" title="Good to know." />
            <div className="divide-y divide-line rounded-card border border-line bg-white">
              {ferryFaq.map((item) => (
                <details key={item.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                    {item.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-ink-secondary transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-ink-secondary">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="See Ferry on your own website."
          intro="Share your website and we’ll show you what Ferry would say to your visitors."
        />
      </main>
      <Footer />
    </>
  );
}
