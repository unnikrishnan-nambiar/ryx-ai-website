// The owner's 8 AM WhatsApp brief, drawn as a message. Figures are an
// example, labelled as such.
const lines = [
  ['Enquiries answered overnight', '3'],
  ['Missed calls returned', '1'],
  ['Bookings today', '14'],
  ['No-shows yesterday', '1'],
  ['New Google reviews', '2, both 5 star'],
  ['Payments pending', '₹18,500'],
];

export default function MorningBrief() {
  return (
    <figure className="w-full max-w-[400px]">
      <div className="rounded-[22px] rounded-tl-md bg-card p-5 shadow-[0_24px_60px_-24px_rgba(12,16,36,0.45)] sm:p-6">
        <p className="flex items-baseline justify-between gap-4">
          <span className="font-display text-lg font-bold text-ink">Good morning</span>
          <time className="tnum text-sm text-ink-3">8:00 AM</time>
        </p>
        <p className="mt-1 text-ink-2">Here is where the clinic stands today.</p>
        <dl className="mt-4 divide-y divide-rule border-y border-rule">
          {lines.map(([label, value]) => (
            <div key={label} className="flex items-baseline justify-between gap-4 py-2.5">
              <dt className="text-ink-2">{label}</dt>
              <dd className="tnum text-right font-semibold text-ink">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-ink-2">Two leads are waiting for a call from you. Want their details?</p>
      </div>
      <figcaption className="mt-3 text-sm text-ink-2">Example of the owner’s daily brief on WhatsApp</figcaption>
    </figure>
  );
}
