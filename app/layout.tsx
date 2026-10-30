import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/data/site';
import JsonLd, { organizationLd } from '@/components/JsonLd';

// Inter (body) and Manrope (headings) load from Google Fonts at runtime via
// a stylesheet link rather than next/font/google: next/font downloads the
// font files during the build, and that download intermittently failed in
// the GitHub Pages build ("next/font/google queries have exactly one
// entry"), breaking deploys. The CSS variables are set in globals.css.
const fontsHref =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@500;600;700;800&display=swap';

const defaultTitle = 'RYX AI - AI that works for your business';
const defaultDescription =
  'RYX AI helps businesses adopt AI the easy way: AI ads, customer nudges, lead generation, workflow automation and team training. Start with Ferry, the AI website agent that goes live in a day.';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: defaultTitle,
  description: defaultDescription,
  keywords: [
    'how to adopt AI in business',
    'easiest way to adopt AI',
    'AI adoption for small business',
    'AI solutions',
    'AI sales agent',
    'sales automation',
    'marketing automation',
    'WhatsApp AI agent',
    'AI chatbot CRM',
    'AI consulting',
    'Ferry AI',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: defaultTitle,
    description: defaultDescription,
    url: `https://${site.domain}`,
    siteName: site.name,
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/opengraph-image.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#111317',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={fontsHref} />
      </head>
      <body className="bg-night font-sans text-white">
        <JsonLd data={organizationLd} />
        {children}
      </body>
    </html>
  );
}
