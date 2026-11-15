import type { Metadata } from 'next';
import { site } from '@/data/site';

// Shared helper so every page gets a canonical URL + matching OpenGraph/
// Twitter card data. Next.js does NOT deep-merge object-valued metadata
// fields (openGraph/twitter) between a page and the root layout — a page
// that sets its own `openGraph` fully replaces the layout's, so the
// image/siteName/type have to be repeated here or subpages would lose
// their OG image entirely.
export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      title,
      description,
      url: path,
      siteName: site.name,
      images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/opengraph-image.png'],
    },
  };
}
