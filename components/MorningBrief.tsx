import PhoneFrame from './visuals/PhoneFrame';

// The owner's 8 AM WhatsApp brief, shown on a phone. Figures are an
// example, labelled as such.
const lines = [
  ['Enquiries answered overnight', '3'],
  ['Missed calls returned', '1'],
  ['Bookings today', '14'],
  ['No-shows yesterday', '1'],
  ['New Google reviews', '2, both 5★'],
  ['Payments pending', '₹18,500'],
];

export default function MorningBrief() {
  return (
    <figure className="flex flex-col items-center">
      <PhoneFrame title="RYX AI daily brief">
        <p className="mx-auto mb-3 w-fit rounded-md bg-[#d9f2ff] px-2 py-0.5 text-[11px] text-[#4b5a63]">TODAY</p>
        <div className="max-w-[92%] rounded-xl rounded-tl-sm bg-white p-3 text-[13px] leading-snug text-[#111b21] shadow-sm">
          <p className="font-semibold">Good morning ☀️ Here is the clinic today:</p>
          <dl className="mt-2 space-y-1">
            {lines.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-3">
                <dt className="text-[#3b4a54]">{label}</dt>
                <dd className="tnum font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2">Two leads are waiting for your call. Want their details?</p>
          <p className="mt-1 text-right text-[10px] text-[#667781]">8:00 AM</p>
        </div>
        <div className="ml-auto mt-2 w-fit max-w-[80%] rounded-xl rounded-tr-sm bg-[#d9fdd3] px-3 py-2 text-[13px] text-[#111b21] shadow-sm">
          Yes, send them
          <span className="ml-2 text-[10px] text-[#667781]">8:02 AM ✓✓</span>
        </div>
      </PhoneFrame>
      <figcaption className="mt-4 text-sm text-ink-2">Example of the owner’s daily brief on WhatsApp</figcaption>
    </figure>
  );
}
