# Design notes

Working notes on the visual direction, for whoever (human or Claude) touches
this next.

## What the site is

RYX AI sells **AI agents to businesses** (sales, marketing, automation) and
has one product, **Ferry**, an AI sales agent for websites. The older
community/news site is gone; git history has it.

Content sources: the RYX sales deck (problems, three pillars, 12 use cases,
process, integrations), the Ferry deck and Ferry Starter proposal, and the
master deck (approach, founders).

## The idea: night to morning

The brief was "don't make it generic". The site is built on one idea taken
from the product itself: **the agents work the hours the business is
closed**. So every page opens at night and continues in daylight.

- **Hero** (`.sky`, deep indigo): the headline "You close at 7. Your
  customers don't." beside `NightLog`, one illustrative night at a clinic,
  entry by entry. This is the single orchestrated animation on the site
  (entries arrive in order, once). It is labelled as an illustration.
- **Daybreak** (`.daybreak`): a gradient band from night through dawn amber
  to paper.
- **Morning**: `MorningBrief`, the owner's 8 AM WhatsApp summary, on paper.
  Everything after this is daylight.
- The closing CTA and footer return to night.

## Tokens

- `night` #0B1030, `dusk` #1A2158: the hours the agents work.
- `signal` #3D5AFE (the deck's blue): actions, links, the Ferry band.
- `dawn` #FFB36B: times of day, focus rings, the calculator result. Keep it
  rare; it is the one warm note.
- `paper` #F4F6FB, `card` #FFFFFF, `ink` #0C1024, `ink-2`, `ink-3`.
- Type: **Bricolage Grotesque** for display (heavy, tight, soft curves that
  echo the rounded ryx wordmark), **Hanken Grotesk** for body.

## Rules we chose on purpose

- No uppercase eyebrow labels, no italic accent words, no arrows on
  buttons, no per-section fade-in. Section headings say the thing.
- Numbers mark only real sequences (the six-step process, Ferry's three
  steps). Lists that aren't sequences use rules, not numbers or cards.
- Rounded cards are reserved for things that are objects: the chat demo,
  the morning brief, the calculator, pricing, the contact form.
- Buttons say what happens: "Book a 30-minute call", "Get early access".
- Every interactive target is at least 40px tall; focus is a dawn outline.

## Interactive pieces

- `FerryDemo`: a scripted Ferry conversation driven by suggested replies,
  for three sample businesses (`data/demo.ts`). Invented businesses, real
  flow. Ends by showing what the owner sees in the dashboard.
- `LostRevenueCalculator`: enquiries × share missed × conversion × customer
  value, all the visitor's own numbers. No industry averages.
- `UseCaseExplorer`: industry filter over the 12 use cases, each linking to
  its own page at `/solutions/<slug>`.

## Pricing and claims

- Ferry pricing is set by the founders: **Starter from ₹2,000/month**,
  **Premium ₹5,000/month, coming soon**. Older documents show ₹1,000 pilot,
  999 Pro and $199 plans; those are superseded. Edit `data/ferry.ts`.
- No fabricated stats, testimonials or customer logos. Investor-deck
  numbers (customer count, churn, funding) are deliberately left out.
  Illustrations and examples are labelled as such.

## Static hosting constraints

GitHub Pages static export with a `basePath` and `trailingSlash: true`
(`/solutions` is both a page and a folder). Internal links go through
`next/link`. No API routes: the contact form hands off to mailto/WhatsApp.
