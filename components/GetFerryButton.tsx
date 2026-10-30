import type { ReactNode } from 'react';
import Button from '@/components/ui/Button';
import LeadButton from '@/components/LeadButton';
import { site } from '@/data/site';

type Variant = 'primary' | 'ghost' | 'gold' | 'light' | 'outline';

// The main "get Ferry" action. Goes straight to Ferry's self-serve signup
// (site.ferry.signupUrl); until that link is set, it opens a short form so
// the lead isn't lost.
export default function GetFerryButton({
  children = 'Get Ferry',
  plan,
  variant = 'gold',
  className,
}: {
  children?: ReactNode;
  /** Plan name, recorded with the lead (and appended to the signup link). */
  plan?: string;
  variant?: Variant;
  className?: string;
}) {
  const { signupUrl } = site.ferry;

  if (signupUrl) {
    const href = plan ? `${signupUrl}${signupUrl.includes('?') ? '&' : '?'}plan=${encodeURIComponent(plan)}` : signupUrl;
    return (
      <Button href={href} variant={variant} className={className}>
        {children}
      </Button>
    );
  }

  return (
    <LeadButton
      variant={variant}
      className={className}
      title={plan ? `Get Ferry ${plan}` : 'Get Ferry for your website'}
      intro="Leave your details and we’ll send your Ferry access link. Setup takes about 5 minutes."
      source={`Ferry signup${plan ? `: ${plan}` : ''}`}
      submitLabel="Send me the link"
      successMessage="Thanks! We’ll send your Ferry access link shortly."
    >
      {children}
    </LeadButton>
  );
}
