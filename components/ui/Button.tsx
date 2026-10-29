import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

type Variant = 'primary' | 'ghost' | 'gold' | 'light' | 'outline';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-100 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  // The deck's "Book a 30-minute call" button.
  primary: 'bg-blue text-white shadow-glow hover:bg-blue-dark',
  // Secondary action on dark surfaces.
  ghost: 'border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10',
  // Ferry's accent.
  gold: 'bg-gold text-night shadow-glow-gold hover:brightness-105',
  light: 'bg-white text-night hover:bg-white/90',
  // Secondary action on light surfaces.
  outline: 'border border-ink/15 bg-white text-ink hover:border-ink/40',
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
  const { variant = 'primary', className = '', ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as LinkProps;

    // Internal path (starts with "/", e.g. "/#pricing") — use next/link so
    // GitHub Pages' basePath gets applied automatically. A plain <a> would
    // ship the literal path with no prefix and 404 under a repo subpath.
    // External URLs, mailto:, tel: and same-page "#hash" links stay <a>.
    if (href.startsWith('/')) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {props.children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...anchorRest}>
        {props.children}
      </a>
    );
  }

  const buttonRest = rest as ButtonProps;
  return (
    <button className={classes} {...buttonRest}>
      {props.children}
    </button>
  );
}
