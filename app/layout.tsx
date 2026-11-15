import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { site } from '@/data/site';
import JsonLd from '@/components/JsonLd';
import { organizationLd } from '@/lib/structuredData';

// Body face: plain and warm, stays out of the way.
const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Display face: heavy grotesque with soft, slightly odd curves that echo
// the rounded ryx wordmark.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
});

const defaultTitle = 'RYX AI - The AI company for growing Indian businesses';
const defaultDescription =
  'RYX AI is an AI company in India. We put AI to work in sales, marketing and operations for growing businesses, in English, Hindi, Malayalam, Arabic and Urdu, and we make Ferry, the AI sales agent for your website.';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: defaultTitle,
  description: defaultDescription,
  keywords: [
    'AI solutions',
    'AI agents',
    'AI chatbot',
    'WhatsApp AI',
    'voice AI',
    'website sales agent',
    'Ferry',
    'AI for business India',
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
  themeColor: '#070A1F',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${hanken.variable} ${bricolage.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks the page ready for scroll-reveal motion before first paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ready')",
          }}
        />
      </head>
      <body className="bg-paper font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <JsonLd data={organizationLd} />
        {children}
      </body>
    </html>
  );
}
