'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './ui/Button';
import { nav, site } from '@/data/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Solid background once the page scrolls past the hero's top edge;
  // transparent over the hero itself.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        open
          ? 'border-b border-white/10 bg-night'
          : solid
            ? 'border-b border-white/10 bg-night/85 backdrop-blur-xl'
            : 'border-b border-transparent'
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo className="h-6 w-auto" />
          <span className="sr-only">RYX AI home</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button href={site.bookingUrl} variant="primary" className="px-5 py-2.5 text-sm">
              Book a call
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-transform duration-200 active:scale-90 md:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              {open ? (
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="animate-dropdown border-t border-white/10 md:hidden">
          <div className="container-content flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={site.bookingUrl}
              variant="primary"
              className="mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              Book a 30-minute call
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
