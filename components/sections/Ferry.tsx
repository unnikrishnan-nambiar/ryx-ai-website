import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import LeadButton from '@/components/LeadButton';
import { ferryAnalytics, ferryFeatures } from '@/data/content';
import { site } from '@/data/site';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

function FerryVideo() {
  const { videoSrc, videoPoster } = site.ferry;
  if (!videoSrc) return null;

  const isEmbed = /^https?:\/\//.test(videoSrc);

  return (
    <Reveal className="mt-14">
      <div className="relative">
        <div className="absolute -inset-6 rounded-[36px] bg-gold/10 blur-3xl" aria-hidden />
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-night-800 p-2 shadow-lift sm:p-3">
          <div className="aspect-video overflow-hidden rounded-[16px] bg-white">
            {isEmbed ? (
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
  );
}

export default function Ferry() {
  return (
    <section id="ferry" className="relative scroll-mt-16 overflow-hidden bg-night-900 py-20 sm:py-28">
      <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden />
      <div className="container-content relative">
        <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
          <SectionHeading
            eyebrow="Our flagship product · Ferry"
            eyebrowClass="text-gold"
            title={
              <>
                A sales agent that builds itself{' '}
                <span className="text-gold">from your website.</span>
              </>
            }
            intro="Ferry answers visitors, qualifies leads and books meetings around the clock, using only your own content. Most visitors leave without saying a word; Ferry starts the conversation."
          />
          <Reveal className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <LeadButton
              variant="gold"
              title="Try Ferry on your website"
              intro="Share your website and we'll set up a Ferry agent trained on your content."
              source="Ferry demo request"
              submitLabel="Request a demo"
            >
              Try Ferry
              <Icon name="arrow" className="h-4 w-4" />
            </LeadButton>
            <Button href="/#pricing" variant="ghost">
              See pricing
            </Button>
          </Reveal>
        </div>

        <FerryVideo />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {ferryFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <div
                className={`h-full rounded-card p-7 ${
                  i === 0 ? 'bg-gold text-night' : 'border border-white/10 bg-night-800'
                }`}
              >
                <p className={`font-display text-sm font-bold ${i === 0 ? 'text-night/60' : 'text-gold'}`}>
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold">{feature.title}</h3>
                <p className={`mt-3 leading-relaxed ${i === 0 ? 'text-night/80' : 'text-white/65'}`}>
                  {feature.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="max-w-[640px] font-display text-2xl font-bold tracking-tight sm:text-3xl">
            See how your agent and your website are doing, in one place.
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
  );
}
