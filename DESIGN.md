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

## Consultancy positioning (2026-11-15)

RYX AI presents itself as an AI consultancy. The founders' four
pillars, in their order: **we train people on AI**, **we build AI for you**,
**we offer AI solutions** (Ferry and the 12 use cases), and **we run your
marketing on autopilot** (social media, branding, campaigns). `data/services.ts`
holds the pillars, the engagements (audit, training, pilot, build and run, social media, branding,
campaigns)
and the five-step method (Assess, Pilot, Deploy, Measure, Scale). The main
call to action everywhere is "Book a discovery call". Prices for the audit,
training and projects are "quoted after the discovery call" until the
founders set them. Client stories and quotes are not on the site yet: add
them only from real, approved material.

## Direction (revised 2026-11-15)

Feedback on the first redesign: too bland, no animation or 3D, reads like
"agent builders", no visuals good enough to sell with. So:

- **Positioning:** RYX AI is an AI company from India. The h1 is "AI that
  grows Indian businesses." Agents and Ferry are the proof, not the headline.
- **Look:** dark-first (#070A1F) with the RYX mark's blue-to-violet gradient
  (`.text-brand-gradient`), Ferry's gold (#D6A84E) on the Ferry page, and
  daylight sections for the dashboard, use cases and calculator.
- **3D:** `components/three/AgentCore.tsx`, a three.js scene: the AI core,
  with enquiries flying in from WhatsApp (green), website (blue) and phone
  (gold), and qualified leads leaving to the gold CRM ring. It follows the
  pointer, pauses offscreen, and is a still frame under reduced motion.
- **Motion:** hero lines rise in once (`.hero-in`), sections reveal on scroll
  (`components/motion/Reveal.tsx`, hidden only after the inline script marks
  the page motion-ready), animated SVG scenes per service
  (`components/animations`, from the previous site), a logo marquee.
- **Visuals a customer can use:** Ferry on a sample website
  (`visuals/BrowserFerry`), the Ferry dashboard (`visuals/LeadsDashboard`),
  the WhatsApp morning brief on a phone, the live voice AI number with a
  sample booking call (`visuals/VoiceDemo`), the Ferry explainer video,
  and real tool logos (`public/icons`, CC0 from gilbarbara/logos and
  simple-icons). Exports for decks: `/mnt/project-files/website-redesign/sales-visuals`.
- **No founder section or photos, and no gradient "R" mark** (the user asked; the R mark is not their logo). Use only the ryx / ryx ai wordmarks in `public/brand`.
- Sample businesses and figures are labelled as samples or examples.

## Earlier idea: night to morning

The "You close at 7" night-to-morning story is kept as one section on the
home page (NightLog plus the morning brief).

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
