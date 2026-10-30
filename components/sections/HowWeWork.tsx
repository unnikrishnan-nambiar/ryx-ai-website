import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { serviceProcess } from '@/data/home';
import { site } from '@/data/site';

// What happens after a business contacts RYX AI about a custom project.
export default function HowWeWork() {
  return (
    <section className="bg-night py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Working with our team"
          title="What happens after you get in touch."
          intro="No tech team or AI knowledge needed on your side. Bring the problem; we handle the rest."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceProcess.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 0.08}>
              <div className="h-full rounded-card border border-white/10 bg-night-800 p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue font-display text-sm font-bold">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-white/60">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10">
          <Button href={site.bookingUrl} variant="primary">
            <Icon name="calendar" className="h-[18px] w-[18px]" />
            Book a free 30-minute call
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
