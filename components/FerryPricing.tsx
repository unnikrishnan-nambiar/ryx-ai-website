import Button from './ui/Button';
import { ferryPlans } from '@/data/ferry';

export default function FerryPricing() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {ferryPlans.map((plan) => {
        const soon = plan.status === 'coming-soon';
        return (
          <div
            key={plan.name}
            className={`flex flex-col rounded-[28px] p-7 sm:p-10 ${
              soon ? 'border border-ink/20 text-ink' : 'bg-night text-white'
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-3xl font-bold tracking-tight">{plan.name}</h3>
              <p className={`font-semibold ${soon ? 'text-ink-3' : 'text-dawn'}`}>
                {soon ? 'Coming soon' : 'Early access open'}
              </p>
            </div>
            <p className={`mt-3 text-lg ${soon ? 'text-ink-2' : 'text-white/80'}`}>{plan.summary}</p>

            <p className="mt-8 flex flex-wrap items-baseline gap-x-2">
              {!soon && <span>from</span>}
              <span className="tnum font-display text-7xl font-bold tracking-[-0.04em]">{plan.price}</span>
              <span>a month</span>
            </p>

            <ul className={`mt-8 space-y-2.5 text-lg ${soon ? 'text-ink-2' : 'text-white/85'}`}>
              {plan.features.map((f) => (
                <li key={f} className={`border-t pt-2.5 ${soon ? 'border-rule' : 'border-rule-night'}`}>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <Button
                href={soon ? '/contact?interest=ferry-premium#early-access' : '/contact?interest=ferry#early-access'}
                variant={soon ? 'outline' : 'light'}
                className="w-full"
              >
                {soon ? 'Join the Premium waitlist' : 'Get early access'}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
