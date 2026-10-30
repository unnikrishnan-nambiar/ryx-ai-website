import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { problems } from '@/data/home';

export default function Problem() {
  return (
    <section className="bg-night py-20 sm:py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="The problem"
          title="You’re losing customers you already paid for."
          intro="Most businesses don’t lose customers to a better competitor. They lose them to a slow reply, a missed message or a visitor nobody spoke to."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-card border border-white/10 bg-night-800 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose/15 text-[#F08A8F]">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
