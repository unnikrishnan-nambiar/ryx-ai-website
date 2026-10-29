import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { site } from '@/data/site';

// UI/body face.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
});

// Display/headline face — rounded geometric grotesk that sits well next to
// the ryx ai wordmark.
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
});

const defaultTitle = 'RYX AI - AI that works for your business';
const defaultDescription =
  'RYX AI builds AI for sales, marketing and automation: website and WhatsApp agents, voice callbacks, CRM automation and AI consulting. Meet Ferry, our AI website sales agent.';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: defaultTitle,
  description: defaultDescription,
  keywords: [
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
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-night font-sans text-white">{children}</body>
    </html>
  );
}
