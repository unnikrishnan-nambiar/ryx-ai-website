import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';

// Short pointer to the community page.
export default function CommunityTeaser() {
  return (
    <section className="bg-night pt-16 sm:pt-20">
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-[28px] border border-white/10 bg-night-800 p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-5">
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue/15 text-blue-soft sm:flex">
                <Icon name="users" className="h-6 w-6" />
              </span>
              <div>
                <p className="eyebrow text-blue-soft">RYX AI Community</p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Learn practical AI with other business owners.
                </h2>
                <p className="mt-2 max-w-[560px] leading-relaxed text-white/60">
                  Free to join. Real use cases, playbooks and early access to what we build.
                </p>
              </div>
            </div>
            <Button href="/community" variant="light" className="shrink-0">
              Visit the community
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
