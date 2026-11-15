// Night header for inner pages: the same sky as the home hero, with an
// optional visual on the right.
export default function PageHero({
  title,
  intro,
  children,
  aside,
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative -mt-[68px] overflow-hidden bg-[#070A1F] pt-[68px] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(55%_70%_at_80%_30%,rgba(61,90,254,0.38),transparent_70%),radial-gradient(35%_45%_at_95%_90%,rgba(155,92,255,0.25),transparent_70%)]" />
        <div className="grid-night absolute inset-0 [mask-image:radial-gradient(70%_70%_at_60%_30%,#000,transparent)]" />
        <svg className="absolute -right-[30%] -top-[20%] h-[900px] w-[1300px] animate-orbit opacity-70" viewBox="0 0 1300 900" fill="none">
          <ellipse cx="650" cy="450" rx="600" ry="250" stroke="rgba(140,156,255,0.18)" transform="rotate(-18 650 450)" />
          <circle cx="1140" cy="260" r="5" fill="#D6A84E" />
          <circle cx="120" cy="560" r="4" fill="#25D366" />
        </svg>
      </div>
      <div className={`container-content relative grid items-center gap-12 pb-16 pt-14 sm:pb-24 sm:pt-20 ${aside ? 'lg:grid-cols-[1.2fr_1fr]' : ''}`}>
        <div className="flex flex-col">
          <h1 className="hero-in headline max-w-[900px] text-[44px] sm:text-[68px] lg:text-[80px]">{title}</h1>
          {intro && (
            <p className="hero-in lede mt-7 max-w-[640px] text-white/80" style={{ animationDelay: '140ms' }}>
              {intro}
            </p>
          )}
          {children}
        </div>
        {aside && (
          <div className="hero-in" style={{ animationDelay: '220ms' }}>
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
