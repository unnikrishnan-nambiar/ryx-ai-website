# Design notes

Working notes on the visual direction, for whoever (human or Claude) touches
this next.

## Direction

RYX AI moved from an AI content/community brand to an **AI solutions
company** (sales, marketing, automation, consulting) with **Ferry** as its
flagship product. The old maximalist, multi-color site was replaced on
request ("bad logo and a bad website"). The new site takes its look directly
from the RYX sales deck and the Ferry deck, so the website, decks and
proposals read as one brand:

- Dark, near-black navy surfaces (`night`, #111317) with the deck's
  planet-and-orbit motif in the hero and contact sections.
- Light content sections (`mist`, #F6F7F9) with white cards, as on the
  deck's content slides. The page alternates dark and light sections.
- One primary accent, the deck's call-to-action blue (`blue`, #3D5AFE;
  `blue-soft` #8C9EFF for text on dark).
- Ferry has its own accent, gold (`gold`, #D6A84E), from the Ferry deck.
  Gold is used only in the Ferry and Pricing sections.

## Structure (multipage)

The single long page was split on request ("too much Ferry, simplify, go
multipage"). The homepage only introduces the six solutions; each solution
has its own page built from one template (`app/solutions/[slug]`), and Ferry,
the flagship, gets the full product page with pricing at `/ferry`. Keep the
homepage short: anything detailed belongs on an inner page.

## Solution animations

Each solution has a four-step SVG animation (`components/animations/`) that
explains it to a non-technical business owner: what goes in, what AI does,
what comes out. They play only while on screen, loop, can be stepped through
by tapping the step labels, and show the final frame under reduced motion.
Keep the four steps identical to `steps` in `data/solutions.ts`.

## Type

`Manrope` (display/headings, `--font-display`) and `Inter` (body), via
`next/font/google`. Headings are bold, tight tracking, `text-balance`.
Section headers follow the deck: small uppercase eyebrow, then headline,
then a short intro (`components/ui/SectionHeading.tsx`).

## Logo

`public/brand/ryxai-white.svg` and `ryxai-black.svg` come from the supplied
logo package (vector traces of the wordmark). Don't redraw or recolor the
wordmark; use the white version on dark and the black one on light.

## Content integrity

No invented stats, client logos or testimonials. The use-case stories are
labeled "Example scenario", exactly as the deck labels them. The hero chat
is an illustrative mock of the Ferry widget, not a real customer
conversation. Prices come from the founder (Starter ₹2,000/month, Premium
₹5,000/month, early adopters "contact us"); plan features come from the
Ferry deck and proposal.

## Motion

Kept restrained: hero elements fade up on load, sections reveal on scroll
(`components/ui/Reveal.tsx`), orbit rings rotate slowly, the hero chat
messages appear in sequence. Everything respects `prefers-reduced-motion`
(see `globals.css`).

## GitHub Pages basePath

The site is served from a repo subpath on GitHub Pages. `next/link` and
`next/image` apply the basePath automatically; raw `<a href="/...">`,
`<video src>` and similar do not. Use `Button`/`Link` for internal links,
static image imports for images, and `process.env.NEXT_PUBLIC_BASE_PATH`
for anything else that points into `/public` (see `Ferry.tsx`).
