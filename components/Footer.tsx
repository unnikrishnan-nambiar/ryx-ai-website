import Link from 'next/link';
import Logo from './Logo';
import { site } from '@/data/site';
import { solutions } from '@/data/solutions';

const columns = [
  {
    heading: 'Solutions',
    links: solutions.map((sol) => ({ label: sol.title, href: sol.href })),
  },
  {
    heading: 'Ferry',
    links: [
      { label: 'How Ferry works', href: '/ferry' },
      { label: 'Pricing', href: '/ferry#pricing' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'All solutions', href: '/solutions' },
      { label: 'Community', href: '/community' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const social = [
  { label: 'LinkedIn', href: site.linkedinUrl },
  { label: 'Instagram', href: site.instagramUrl },
  { label: 'YouTube', href: site.youtubeUrl },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night-900">
      <div className="container-content py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-7 w-auto" />
            <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-white/55">
              AI for sales, marketing and automation, built to work for your business.
            </p>
            <ul className="mt-5 space-y-1.5 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="text-white/70 transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="text-white/70 transition-colors hover:text-white">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <p className="text-sm font-semibold text-white">{column.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {/* next/link so GitHub Pages' basePath is applied. */}
                    <Link href={link.href} className="text-sm text-white/55 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/45">© {new Date().getFullYear()} RYX AI · {site.domain}</p>
          <ul className="flex gap-5">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
