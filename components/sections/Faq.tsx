import SectionHeading from '@/components/ui/SectionHeading';

// Expandable questions list, used on the homepage and the Ferry page.
export default function Faq({
  items,
  eyebrowClass,
  title = 'Questions people ask.',
}: {
  items: { q: string; a: string }[];
  eyebrowClass?: string;
  title?: string;
}) {
  return (
    <section className="bg-white py-20 text-ink sm:py-24">
      <div className="container-content grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        <SectionHeading tone="light" eyebrow="Questions" eyebrowClass={eyebrowClass} title={title} />
        <div className="divide-y divide-line rounded-card border border-line bg-white">
          {items.map((item) => (
            <details key={item.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                <h3>{item.q}</h3>
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
  );
}
