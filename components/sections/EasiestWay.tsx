import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import GetFerryButton from '@/components/GetFerryButton';
import { comparison, whyFerryEasiest } from '@/data/adoptAi';

// "Ferry is the easiest way to adopt AI": five reasons plus a side-by-side
// with a typical custom AI project. Used on /ferry and the adoption guide.
export default function EasiestWay({
  id,
  showGuideLink = true,
  showFerryLink = false,
}: {
  id?: string;
  showGuideLink?: boolean;
  showFerryLink?: boolean;
}) {
  return (
    <section id={id} className="relative scroll-mt-16 overflow-hidden bg-night-900 py-20 sm:py-28">
      <div className="bg-grid-dark absolute inset-0 opacity-50" aria-hidden />
      <div className="container-content relative">
        <SectionHeading
          eyebrow="The easiest way to adopt AI"
          eyebrowClass="text-gold"
          title={
            <>
              Your first AI project, <span className="text-gold">live in 5 minutes.</span>
            </>
          }
          intro="Most companies never get past the planning stage with AI. Ferry skips it: no tech team, no data project, no big budget. Just your website address and 5 minutes."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyFerryEasiest.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-card border border-white/10 bg-night-800 p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon name="check" className="h-[18px] w-[18px]" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-card border border-white/10">
            <table className="w-full text-left text-[15px]">
              <caption className="sr-only">A typical custom AI project compared with Ferry</caption>
              <thead>
                <tr className="bg-night-800">
                  <th scope="col" className="px-5 py-4 font-medium text-white/50 sm:px-7" />
                  <th scope="col" className="px-5 py-4 font-semibold text-white/70 sm:px-7">
                    A custom AI project
                  </th>
                  <th scope="col" className="bg-gold/10 px-5 py-4 font-semibold text-gold sm:px-7">
                    Ferry
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-t border-white/10">
                    <th scope="row" className="px-5 py-4 font-medium text-white/60 sm:px-7">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-white/60 sm:px-7">{row.custom}</td>
                    <td className="bg-gold/[0.06] px-5 py-4 font-semibold text-white sm:px-7">{row.ferry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
          <GetFerryButton>
            Start with Ferry
            <Icon name="arrow" className="h-4 w-4" />
          </GetFerryButton>
          {showFerryLink && (
            <Button href="/ferry" variant="ghost">
              How Ferry works
            </Button>
          )}
          {showGuideLink && (
            <Button href="/how-to-adopt-ai" variant="ghost">
              Read: how to adopt AI in your business
            </Button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
