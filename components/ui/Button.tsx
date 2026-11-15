import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

type Variant = 'primary' | 'light' | 'outline' | 'outline-night';

const base =
  'inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-full px-6 py-2.5 text-[15px] font-semibold transition-colors duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50';

// `primary` works on both night and paper. `light` is for night and signal
// backgrounds. The two outlines are paired to their background.
const variants: Record<Variant, string> = {
  primary: 'bg-signal text-white hover:bg-signal-deep',
  light: 'bg-white text-ink hover:bg-signal-soft',
  outline: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white',
  'outline-night': 'border border-white/30 text-white hover:border-white hover:bg-white hover:text-ink',
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: undefined;
};

export default function Button(props: LinkProps | ButtonProps) {
  const { variant = 'primary', className = '', children, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = children;

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as LinkProps;

    // Internal path (starts with "/") — use next/link so GitHub Pages'
    // basePath gets applied automatically. Plain <a href="/ferry"> would
    // ship that literal string with no prefix and 404 once deployed under
    // a repo subpath. External URLs, mailto: and tel: stay plain <a> tags.
    if (href.startsWith('/')) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {content}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonProps)}>
      {content}
    </button>
  );
}
