import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    title: 'Understand',
    body: 'A short call to learn how your business runs and where you lose time or customers. We pick the one thing worth fixing first.',
  },
  {
    title: 'Build and test',
    body: 'We build the AI solution around the tools you already use, and test it properly across real scenarios and languages before it goes live.',
  },
  {
    title: 'Launch and improve',
    body: 'It goes live, we measure what it earns or saves you, and keep improving it with a person checking the results.',
  },
];

const tools = ['WhatsApp', 'Instagram', 'Website', 'Email', 'Zoho', 'HubSpot', 'Salesforce', 'Odoo', 'Google Sheets'];

export default function HowWeWork() {
  return (
    <section className="bg-night py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="How we work"
          title="Simple for you. Done properly by us."
          intro="You don’t need a tech team or any AI knowledge. Bring the problem; we handle the rest."
        />

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
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

        <Reveal className="mt-10 flex flex-col gap-4 rounded-card border border-white/10 px-6 py-5 sm:flex-row sm:items-center">
          <p className="shrink-0 text-sm font-semibold text-white/80">Works with the tools you already use</p>
          <ul className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li key={tool} className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-white/60">
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
