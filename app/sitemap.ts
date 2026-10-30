import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { solutions } from '@/data/solutions';

// Required for `output: 'export'` — without it the build refuses to treat
// this route as prerenderable static output.
export const dynamic = 'force-static';

// Static export (output: 'export') generates this once at build time as a
// real sitemap.xml file — same mechanism as app/icon.png and
// app/opengraph-image.png. Uses the canonical custom-domain root
// (https://ryxai.in/...), not any GitHub Pages basePath, since that's the
// URL search engines should index.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const routes = [
    '',
    '/solutions',
    ...solutions.filter((s) => s.href.startsWith('/solutions/')).map((s) => s.href),
    '/ferry',
    '/how-to-adopt-ai',
    '/community',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/ferry' || route === '/how-to-adopt-ai' ? 0.9 : 0.7,
  }));
}
