# RYX AI

Website for RYX AI: AI solutions for sales, marketing and automation, and
Ferry, our AI website sales agent. Built with Next.js (App Router) and
Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route        | What it is                                                        |
| ------------ | ----------------------------------------------------------------- |
| `/`          | Home: a night of the agent at work, Ferry demo, calculator        |
| `/services`  | The three pillars: training, building, ready solutions            |
| `/solutions` | All 12 use cases, filterable by industry                          |
| `/solutions/<slug>` | One page per use case                                      |
| `/ferry`     | Ferry product page with pricing and FAQ                           |
| `/about`     | Who we are and how we work                                        |
| `/contact`   | Contact channels and the Ferry early-access / enquiry form        |

## Editing content

- `data/site.ts` — contact details (email, phone, WhatsApp), social links, nav.
- `data/useCases.ts` — the 12 use cases (from the sales deck).
- `data/ferry.ts` — Ferry features, steps, analytics, **pricing plans** and FAQ.
- `data/demo.ts` — the scripted conversations in the interactive Ferry demo.
- `components/NightLog.tsx`, `components/MorningBrief.tsx` — the hero story.
- `public/brand/` — wordmarks from the official logo pack. `app/icon.png` /
  `app/apple-icon.png` are the "ryx" app icons from the same pack.

## Contact form

The site is a static export, so there's no backend. The early-access form
on `/contact` composes the enquiry and opens the visitor's email app (to
hello@ryxai.in) or WhatsApp with it prefilled. Pricing cards link to
`/contact?interest=ferry#early-access` to preselect the plan.

## Hosting on GitHub Pages

`.github/workflows/deploy-pages.yml` builds and deploys a static export on
every push to `main`. One-time setup: in the repo's Settings → Pages, set
**Source** to **GitHub Actions**.

## Stack

- Next.js 16 (App Router), static export
- Tailwind CSS
- No backend or database
