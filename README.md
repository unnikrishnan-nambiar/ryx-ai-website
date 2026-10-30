# RYX AI website

Marketing site for RYX AI: AI solutions for sales, marketing and automation,
the Ferry website sales agent, and the RYX AI Community. Built with Next.js
(App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — homepage: hero, the six solutions, how we work, Ferry, community, call to action
- `/solutions` and `/solutions/<slug>` — one page per solution
- `/ferry` — the flagship product: how it works, video, features, pricing, FAQ
- `/community` — RYX AI Community and sign-up
- `/contact` — booking, phone, WhatsApp, email and message form

## Editing content

You rarely need to touch components to change words, prices or links:

- `data/solutions.ts` — the six solutions: title, one-liner, plain-language
  definition, who it's for, the four steps, outcomes and example scenario.
  Each solution's page is generated from this file.
- `data/ferry.ts` — Ferry features, dashboard, **pricing plans** and FAQ.
- `data/site.ts` — contact details, the "Book a call" link (`bookingUrl`,
  swap in a Cal.com/Calendly link when ready), the community WhatsApp link
  (`communityUrl`), social links, the Ferry video and the form endpoint.
- `components/animations/` — one SVG animation per solution. Each shows
  four steps that match the `steps` in `data/solutions.ts`.
- `public/brand/` — the ryx ai wordmark (white and black SVG).
- `public/ferry-explainer.mp4` — the Ferry explainer video.

## Forms

The contact form, "Try Ferry", pricing and community buttons all post to a
Google Apps Script Web App that appends a row to the "RYX AI Community
Signups" Google Sheet (`site.signupFormUrl`; script and deploy steps in
`scripts/signup-apps-script.gs`). The first column of extra detail records
where the lead came from, e.g. `Ferry Premium | phone: … | website: …`.

## Hosting on GitHub Pages

`.github/workflows/deploy-pages.yml` builds a static export and deploys it on
every push to `main`. The site publishes to
`https://<owner>.github.io/ryx-ai-website/`. To serve it on `ryxai.in`
instead, add the custom domain under the repo's Settings → Pages and remove
the `basePath`/`assetPrefix` block in `next.config.js`.

## Working together

Make changes on a branch, open a pull request, and merge to `main` to
publish. Run `npm run lint` and `npm run build` before pushing.

## Stack

- Next.js 16 (App Router), static export
- Tailwind CSS
- No backend: forms post to Google Apps Script
