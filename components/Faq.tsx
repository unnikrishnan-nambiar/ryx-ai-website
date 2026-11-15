// Accordion FAQ built on <details>, so it works without JS.
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-rule border-y border-rule">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-2xl font-bold tracking-tight">{item.q}</span>
            <svg
              aria-hidden
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="shrink-0 text-signal-deep transition-transform duration-200 group-open:rotate-45"
            >
              <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="max-w-[640px] pb-7 text-lg leading-relaxed text-ink-2">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
