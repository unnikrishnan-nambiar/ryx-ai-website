// The hero's signature: one illustrative night at a clinic, hour by hour.
// Entries arrive in order once on load (CSS only), then stay put.

type Entry = {
  time: string;
  channel: string;
  event: string;
  outcome: string;
};

const entries: Entry[] = [
  {
    time: '9:02 PM',
    channel: 'WhatsApp',
    event: '“How much is teeth whitening?”',
    outcome: 'Answered in seconds with the price list. Offered Saturday slots.',
  },
  {
    time: '11:47 PM',
    channel: 'Missed call',
    event: 'A new number rings out after closing.',
    outcome: 'Called back at 11:49 PM. Booked for Saturday, 11 AM.',
  },
  {
    time: '2:14 AM',
    channel: 'Website',
    event: '“Do you take walk-ins on Sunday?”',
    outcome: 'Answered from your own site. Name and number saved to the CRM.',
  },
  {
    time: '7:30 AM',
    channel: 'Reminders',
    event: 'Today’s patients get a reminder.',
    outcome: 'One cancels. The slot goes to the waitlist and fills.',
  },
];

export default function NightLog() {
  return (
    <figure className="w-full max-w-[520px]">
      <figcaption className="mb-5 flex items-baseline justify-between gap-4 text-sm text-white/70">
        <span>One night at a dental clinic</span>
        <span>Illustration</span>
      </figcaption>
      <ol className="relative border-l border-white/25 pl-6 sm:pl-8">
        {entries.map((e, i) => (
          <li
            key={e.time}
            className="relative animate-arrive pb-7 last:pb-0"
            style={{ animationDelay: `${400 + i * 550}ms` }}
          >
            <span
              aria-hidden
              className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-dawn ring-4 ring-night sm:-left-[37px]"
            />
            <p className="tnum flex flex-wrap items-baseline gap-x-3 text-sm">
              <time className="font-display text-lg font-bold text-dawn">{e.time}</time>
              <span className="text-white/70">{e.channel}</span>
            </p>
            <p className="mt-1 text-[17px] leading-snug text-white">{e.event}</p>
            <p className="mt-1.5 leading-relaxed text-white/75">{e.outcome}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
