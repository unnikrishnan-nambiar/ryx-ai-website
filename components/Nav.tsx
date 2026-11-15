'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Button from './ui/Button';
import { nav } from '@/data/site';

// Every page opens on a night hero, so the nav is always set on night.
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-40 text-white transition-colors duration-300 ${
        scrolled || open ? 'bg-night shadow-[0_1px_0_rgba(255,255,255,0.12)]' : 'bg-transparent'
      }`}
    >
      <div className="container-content flex h-[68px] items-center justify-between gap-4">
        <Link href="/" className="shrink-0 py-2" onClick={() => setOpen(false)}>
          <Logo className="h-7 w-auto" />
          <span className="sr-only">RYX AI home</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`border-b-2 py-1 text-[15px] font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? 'border-dawn text-white'
                  : 'border-transparent text-white/75 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button href="/contact" variant="light">
              Book a call
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/30 md:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M2 6h14M2 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="animate-dropdown border-t border-rule-night md:hidden">
          <div className="container-content flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className="py-3 font-display text-3xl font-bold tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" variant="light" className="mt-4 w-full" onClick={() => setOpen(false)}>
              Book a call
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
