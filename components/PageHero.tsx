// Night-sky header for inner pages.
export default function PageHero({
  title,
  intro,
  children,
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="sky -mt-[68px] pt-[68px] text-white">
      <div className="container-content flex flex-col pb-16 pt-14 sm:pb-24 sm:pt-20">
        <h1 className="headline max-w-[900px] text-[44px] sm:text-[68px] lg:text-[84px]">{title}</h1>
        {intro && <p className="lede mt-7 max-w-[640px] text-white/80">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
