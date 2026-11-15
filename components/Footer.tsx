import Link from 'next/link';
import Logo from './Logo';
import { site } from '@/data/site';

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Use cases', href: '/solutions' },
      { label: 'Ferry', href: '/ferry' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Talk to us',
    links: [
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phoneDisplay, href: `tel:${site.phone}` },
      { label: 'WhatsApp', href: site.whatsappUrl },
      { label: `Call our AI assistant: ${site.aiAssistantPhoneDisplay}`, href: `tel:${site.aiAssistantPhone}` },
    ],
  },
  {
    heading: 'Follow',
    links: [
      { label: 'LinkedIn', href: site.linkedinUrl },
      { label: 'Instagram', href: site.instagramUrl },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="container-content py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.3fr_0.8fr]">
          <div>
            <Logo className="h-8 w-auto" />
            <p className="mt-5 max-w-[300px] leading-relaxed text-white/70">
              The AI consultancy for Indian businesses. We find where AI pays off, pilot it, then build and run it. Makers of Ferry.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h2 className="font-display text-lg font-bold">{column.heading}</h2>
              <ul className="mt-4 space-y-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href} className="inline-block py-1.5 text-white/75 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="inline-block py-1.5 text-white/75 transition-colors hover:text-white"
                        {...(link.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-rule-night pt-6 text-sm text-white/65 sm:flex-row sm:justify-between">
          <p>© 2026 {site.legalName}</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
