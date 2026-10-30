import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import LeadButton from '@/components/LeadButton';
import { plans } from '@/data/ferry';

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-night py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          align="center"
          eyebrow="Ferry pricing"
          eyebrowClass="text-gold"
          title="Simple monthly plans. Live in a day."
          intro="One website agent per plan, billed monthly. Need WhatsApp, voice or a custom build? Talk to us."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-card p-7 sm:p-8 ${
                  plan.highlighted
                    ? 'bg-gold text-night shadow-glow-gold'
                    : plan.earlyAdopter
                      ? 'border border-dashed border-white/25 bg-night-800'
                      : 'border border-white/10 bg-night-800'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute right-6 top-6 rounded-full bg-night px-3 py-1 text-xs font-semibold text-gold">
                    Most popular
                  </span>
                )}
                <p className={`eyebrow ${plan.highlighted ? 'text-night/70' : 'text-white/55'}`}>{plan.name}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  {plan.price ? (
                    <>
                      <span className="font-display text-5xl font-bold tracking-tight">{plan.price}</span>
                      <span className={plan.highlighted ? 'text-night/65' : 'text-white/50'}>{plan.period}</span>
                    </>
                  ) : (
                    <span className="font-display text-5xl font-bold tracking-tight">Let&apos;s talk</span>
                  )}
                </div>
                <p className={`mt-3 leading-relaxed ${plan.highlighted ? 'text-night/80' : 'text-white/65'}`}>
                  {plan.summary}
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[15px]">
                      <Icon
                        name="check"
                        className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${plan.highlighted ? 'text-night' : 'text-gold'}`}
                      />
                      <span className={plan.highlighted ? 'text-night/90' : 'text-white/80'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <LeadButton
                  variant={plan.highlighted ? 'light' : plan.earlyAdopter ? 'gold' : 'ghost'}
                  className={`mt-8 w-full ${plan.highlighted ? '!bg-night !text-white hover:!bg-night-700' : ''}`}
                  title={plan.earlyAdopter ? 'Become an early adopter' : `Get Ferry ${plan.name}`}
                  intro={
                    plan.earlyAdopter
                      ? "Tell us about your business and we'll get back to you about pilot terms."
                      : `Tell us about your website and we'll get your ${plan.name} agent live.`
                  }
                  source={`Ferry ${plan.name}`}
                  submitLabel={plan.earlyAdopter ? 'Contact us' : 'Get started'}
                >
                  {plan.cta}
                </LeadButton>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/45">
          Prices in INR, billed monthly in advance, exclusive of applicable taxes. Voice agents coming soon.
        </p>
      </div>
    </section>
  );
}
