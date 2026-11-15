import { site } from '@/data/site';
import { ferryFaq, ferryPlans } from '@/data/ferry';

const base = `https://${site.domain}`;

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  legalName: site.legalName,
  url: base,
  logo: `${base}/brand/ryxai-black.svg`,
  email: site.email,
  telephone: site.phone,
  sameAs: [site.linkedinUrl, site.instagramUrl],
};

export const ferryLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ferry',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'An AI sales agent for your website, built from your own website. It answers visitors, qualifies leads and books meetings.',
  brand: { '@type': 'Brand', name: site.name },
  offers: ferryPlans
    .filter((p) => p.status === 'early-access')
    .map((p) => ({
      '@type': 'Offer',
      name: p.name,
      price: p.price.replace(/[^\d]/g, ''),
      priceCurrency: 'INR',
      url: `${base}/ferry`,
    })),
};

export const ferryFaqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ferryFaq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};
