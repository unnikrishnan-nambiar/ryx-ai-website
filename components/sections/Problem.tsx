import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { problems } from '@/data/content';

export default function Problem() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="The problem"
          title="Where businesses lose time and money."
          intro="Most leads aren't lost to a better competitor. They're lost to a slow reply, a missed call or a message nobody logged."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {problems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex h-full gap-5 rounded-card border border-white/10 bg-night-800 p-6 transition-colors duration-300 hover:border-white/20 sm:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue/15 text-blue-soft">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-white/60">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
