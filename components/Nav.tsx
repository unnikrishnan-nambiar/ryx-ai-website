'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './ui/Button';
import Icon from './ui/Icon';
import GetFerryButton from './GetFerryButton';
import { nav, site } from '@/data/site';
import { solutions } from '@/data/solutions';

function SolutionLink({ s, onClick }: { s: (typeof solutions)[number]; onClick: () => void }) {
  return (
    <Link
      href={s.href}
      onClick={onClick}
      className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          s.flagship ? 'bg-gold/15 text-gold' : 'bg-blue/15 text-blue-soft'
        }`}
      >
        <Icon name={s.icon} className="h-[18px] w-[18px]" />
      </span>
      <span>
        <span className="flex items-center gap-2 text-sm font-semibold text-white">
          {s.title}
          {s.flagship && (
            <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-semibold text-gold">Self-serve</span>
          )}
          {s.pilot && (
            <span className="rounded-full bg-blue/20 px-2 py-0.5 text-[10px] font-semibold text-blue-soft">Pilot</span>
          )}
        </span>
        <span className="mt-0.5 line-clamp-1 block text-[13px] text-white/50">{s.short}</span>
      </span>
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | null>(null);

  // Solid background once the page scrolls; transparent over the hero.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menu) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenu(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menu]);

  // Small delay before closing so the pointer can travel from the trigger
  // into the panel without it snapping shut.
  function openMenu() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMenu(true);
  }
  function closeMenuSoon() {
    closeTimer.current = window.setTimeout(() => setMenu(false), 150);
  }

  const close = () => {
    setOpen(false);
    setMenu(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        open || menu
          ? 'border-b border-white/10 bg-night'
          : scrolled
            ? 'border-b border-white/10 bg-night/85 backdrop-blur-xl'
            : 'border-b border-transparent'
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" onClick={close}>
          <Logo className="h-6 w-auto" />
          <span className="sr-only">RYX AI home</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) =>
            item.label === 'Solutions' ? (
              <div key={item.label} className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenuSoon}>
                <button
                  type="button"
                  onClick={() => setMenu((v) => !v)}
                  aria-expanded={menu}
                  aria-controls="solutions-menu"
                  className="flex items-center gap-1 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
                >
                  Solutions
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                    className={`transition-transform duration-200 ${menu ? 'rotate-180' : ''}`}
                  >
                    <path d="M3 4.5 6 7.5l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {menu && (
                  <div id="solutions-menu" className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-4">
                    <div className="animate-dropdown rounded-card border border-white/10 bg-night-800 p-3 shadow-lift">
                      <div className="grid grid-cols-2 gap-1">
                        {solutions.map((s) => (
                          <SolutionLink key={s.slug} s={s} onClick={close} />
                        ))}
                      </div>
                      <Link
                        href="/solutions"
                        onClick={close}
                        className="mt-2 flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        See all solutions
                        <Icon name="arrow" className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-5 md:flex">
            <a href={site.bookingUrl} className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Book a call
            </a>
            <GetFerryButton className="px-5 py-2.5 text-sm">Get Ferry</GetFerryButton>
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
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="max-h-[calc(100vh-4rem)] animate-dropdown overflow-y-auto border-t border-white/10 md:hidden"
        >
          <div className="container-content py-4">
            <p className="eyebrow px-3 pb-1 pt-2 text-white/40">Solutions</p>
            {solutions.map((s) => (
              <SolutionLink key={s.slug} s={s} onClick={close} />
            ))}
            <div className="my-3 border-t border-white/10" />
            {nav
              .filter((item) => item.label !== 'Solutions')
              .map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={close}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            <div className="mt-3 grid gap-2">
              <GetFerryButton className="w-full">Get Ferry: live in 5 minutes</GetFerryButton>
              <Button href={site.bookingUrl} variant="ghost" className="w-full" onClick={close}>
                Book a free call
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
