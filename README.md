# RYX AI

Single-page site for RYX AI — a personal AI content brand and community.
Built with Next.js (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

- `data/site.ts` — site-wide config: Instagram link, side-project link, founder photo.
- `data/posts.ts` — the "Latest" feed. Add new entries to the top of the array.
- `components/` — one file per section (`Nav`, `Hero`, `WhatRyxIs`, `Latest`, `About`, `Join`, `Footer`).
- `components/Logo.tsx` — renders `public/logo.png`, the real wordmark (background removed). `app/icon.png` is a cropped favicon built from the same source.

## Signup form

The "Join RYX" form posts to `app/api/join/route.ts`, which logs each
submission to the console and appends it to `data/signups.json` (gitignored
placeholder storage). Replace this with a real email/WhatsApp provider when
ready — the route is the only place that needs to change.

## Hosting on GitHub Pages

`.github/workflows/deploy-pages.yml` builds and deploys a static export on
every push to `main`. One-time setup: in the repo's Settings → Pages, set
**Source** to **GitHub Actions**. The site then publishes to
`https://<owner>.github.io/ryx-ai-website/`.

GitHub Pages can't run the `/api/join` route (it's static hosting only), so
that build strips `app/api` before compiling and the Join form falls back to
"DM us on Instagram" instead of trying to submit — controlled by the
`NEXT_PUBLIC_STATIC_SITE` env var the workflow sets. Locally and on any
server host (Vercel, etc.) the real form and API route work as normal.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS
- No backend/database — static site with one lightweight API route (server hosts only; see above for GitHub Pages)
