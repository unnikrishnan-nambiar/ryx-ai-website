import { asset, integrations } from '@/data/assets';

// The tools RYX AI connects to, as their real logos, scrolling endlessly.
// The second copy exists only for the seamless loop and is hidden from
// screen readers. Pauses on hover.
export default function LogoMarquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-4 pr-4">
      {integrations.map((t) => (
        <li key={t.name} className="flex h-16 items-center gap-3 rounded-2xl bg-white px-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(`/icons/${t.icon}.svg`)} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
          <span className="whitespace-nowrap font-semibold text-ink">{t.name}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
