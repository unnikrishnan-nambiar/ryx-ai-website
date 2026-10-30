import { site } from '@/data/site';

// Structured data (schema.org JSON-LD) so search engines and AI answer
// engines understand who RYX AI is, what Ferry is and what each page answers.

export const siteUrl = `https://${site.domain}`;

export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; escape "<" so a string can never
      // close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'RYX AI',
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  email: site.email,
  telephone: '+91-9605799089',
  description:
    'RYX AI is the easiest way to put AI to work in a business. Its self-serve product Ferry is an AI assistant for websites, set up in about 5 minutes. RYX AI also builds AI lead generation, WhatsApp follow-ups, paperwork automation, AI ads and team training.',
  sameAs: [site.instagramUrl, site.linkedinUrl, site.youtubeUrl],
  knowsAbout: [
    'AI adoption for business',
    'AI sales agents',
    'Sales automation',
    'Marketing automation',
    'Workflow automation',
    'AI training for teams',
  ],
};

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${siteUrl}${t.path}`,
    })),
  };
}
