# Design notes

Working notes on the visual direction, for whoever (human or Claude) touches
this next. RYX went through several passes: personal one-pager → AI
media/community rebuild → a centered "visual design system" pass → a
restrained neutral-plus-one-accent refinement → **this one, a full
maximalist rebuild**, done on direct request ("change everything... make the
boldest website possible, support maximalism... create a $10K website").
Where a choice below cites "the request," it's not a casual judgment call —
treat it as intentional, not something to quietly walk back toward the old
minimal look.

## Content pivot — "signal, not sales"

A full copy rewrite landed after the maximalist visual rebuild above —
visual system unchanged, every section's words replaced with a sharper
"cutting through AI noise, business-workflow tilt" story, delivered as a
complete section-by-section rewrite and applied close to verbatim. Key
points if you touch copy again:

- Hero split into three tiers instead of one headline: `h1` states the
  problem ("Everyone's posting about AI. Most of it is noise."), a bold
  gradient line states the response ("RYX AI cuts through it."), then the
  muted paragraph gives specifics. Don't collapse these back into one
  block — the three-beat structure is what the rewrite asked for.
- Category renames are intentional and business-first:
  `PracticalAi` went Work/Create/Build/Learn → **Operate/Create/Build/Decide**
  (with new item lists per category); `Experiments`' four questions
  became three ("Did it save time? / Did it hold up under real use? /
  Would we actually recommend it?"), so its grid is `sm:grid-cols-3`, not
  4. `AiTools`' pick badge reads "Actually worth it", not "RYX AI Pick".
- Hero's tag line and the footer tagline are **deliberately different
  sentences** now (previously both read `site.tags.join(' · ')`): Hero
  still uses `site.tags` (now `['AI', 'Business', 'Workflows', 'Signal,
  not sales.']`), but `Footer.tsx` has its own hardcoded sentence
  ("Cutting through AI noise, for people actually doing the work.") —
  don't re-couple them without checking both copies still make sense.
- `data/news.ts`'s seed headline is now "Why we're done with AI hype"
  (was "Welcome to RYX AI") — same honest, self-referential entry, just
  retitled to match the new voice.
- **Resolved in a later pass**: the rewrite's own notes asked for real
  names on the People section's three cards instead of the "PM / SD /
  ST" + "Example" placeholders. Rather than supplying real names, a
  follow-up request replaced the whole section's premise — see "People
  section rebuilt as audience grid" below. `data/builds.ts` (the old
  initials/"Example" placeholder profiles) no longer exists.
- **Resolved in a later pass**: the rewrite flagged the newsletter's
  disabled-on-GitHub-Pages signup ("DM us on Instagram" fallback, backed
  by a placeholder `/api/join` route that only wrote to a gitignored
  local JSON file) as needing a real backend. It now has one — see
  "Join popup — real embedded signup" below. `app/api/join` and the
  `NEXT_PUBLIC_STATIC_SITE` env var are gone; the deploy workflow no
  longer needs to strip `app/api` before the static build since there
  isn't one anymore.
- A first real blog post ("draft the actual first blog post under this
  new angle") was offered but not written — ask before drafting one, it's
  new content, not a copy fix to the existing placeholder.

## The big pivot — what changed and why

Every earlier pass in this file's history was deliberately restrained:
~85–90% neutral palette, one accent color used sparingly, no gradients, no
pill buttons, `py-9`–`py-14` section padding. That system is gone. The
current brief was explicit on four points (asked and confirmed, not
assumed):

1. **Full rebuild, structure included** — not just a reskin of the old
   minimalist site. Sections were free to restructure (bento-style grids,
   full-bleed color bands) as long as the content/information architecture
   (same 11 homepage sections, same order, same routes) stayed intact.
2. **Full multi-color maximalism** — multiple saturated "standard" hues
   used together, gradients explicitly allowed. The old "no gradients"
   rule is retired.
3. **"$10K website" = premium agency-quality polish** — bold doesn't mean
   sloppy. Borders, shadows, spacing, and motion are all still deliberate
   and consistent; this isn't Gen-Z-chaos/meme maximalism, it's a
   colorful, confident, well-crafted maximalism.
4. **Content-integrity rules stay unchanged** — no fabricated stats,
   testimonials, member counts, or inflated claims, regardless of how bold
   the visuals get. See "Content integrity" below; nothing there changed.

The logo (`public/logo.png`, `components/Logo.tsx`) was explicitly kept
as-is — never redesign or recolor the actual wordmark asset. The one
exception is a CSS `brightness-0 invert` filter applied only in
`Footer.tsx`, where the section background is black — that's a per-usage
contrast fix, not a change to the logo itself or its component.

## Palette

Base neutrals for text/surfaces: `paper` #FFFFFF, `ink` #0A0A0A,
`ink-secondary` #525252, `ink-muted` #8A8A8A, `border` #E5E5E5, `card`
#F7F7F7. Four bold accents, each with `DEFAULT`/`dark`/`light` steps
(`tailwind.config.js`):

- `violet` #7C3AED — Discover/WhatIsRyx, primary gradient anchor
- `pink` #EC4899 — Experiments, gradient anchor
- `cyan` #06B6D4 — Tools, Newsletter band
- `amber` #F59E0B — Use Cases (PracticalAi), Founder label

No single accent dominates; each major homepage section owns one (see
"Section color map" below) so the scroll reads as a deliberate colorful
journey, not a randomly-tinted page. Gradients (`bg-gradient-to-r/br`
between two or three of these hues) are used for: primary/accent buttons,
the Community and FinalCta section backgrounds, and headline text via the
`.text-gradient-vp` / `.text-gradient-ca` / `.text-gradient-pa` utility
classes in `globals.css` (`bg-clip-text text-transparent`). Keep gradient
headline text to one statement per section — it's a highlight, not the
default heading treatment.

## Type

`Inter` (body, `--font-sans`) + `Space Grotesk` (display/headings,
`--font-display`), both via `next/font/google`. Space Grotesk replaced
Inter Tight for a bolder, more geometric display face suited to poster-
scale headlines. Hero goes up to 104px on desktop
(`text-[52px] sm:text-[80px] lg:text-[104px]`, `font-bold`,
`leading-[0.95]`); section headings are 38–60px
(`SectionIntro`'s `h2`, `font-bold`); nothing in headings is below
`font-bold` (700) — this system doesn't use the old 500/600-weight
restraint.

## Buttons

`components/ui/Button.tsx` has five variants now:

- `primary` — gradient (`violet → pink`) pill, `shadow-glow-violet`,
  lifts + swaps to `shadow-glow-pink` on hover. The single strongest CTA
  per view.
- `accent` — gradient (`cyan → violet`) pill, used for "Follow" style
  external/social CTAs (Nav, Hero, Founder).
- `secondary` — bold 2.5px black border pill/rounded-2xl, fills black on
  hover. Internal "Explore [section]" navigation buttons.
- `dark` — solid black. Used where a gradient button would clash with an
  already-colorful section background (e.g. AiNews, PracticalAi CTAs).
- `light` — white pill with a hard black offset shadow
  (`shadow-hard` = `6px 6px 0 0 #0A0A0A`), for CTAs that sit on top of a
  bold gradient/dark band (Community, FinalCta).

All pill-shaped (`rounded-full`) except `secondary` (`rounded-2xl`) — pill
buttons were explicitly off-limits in the old system ("no pill shapes");
that rule is retired along with the rest of the old restraint.

## SectionLabel & SectionIntro

`SectionLabel` takes a `color` prop (`ink | violet | pink | cyan | amber`,
default `ink`) and renders **one** `rounded-full` pill with **one**
border and the dot-grid texture inside it — this single-shape/single-
outline structure was a direct fix from user feedback earlier in the
project (an earlier two-shape nested-pill version read as a double
outline) and must not be reintroduced. Each section's label uses that
section's accent color (see map below); Experiments and People
deliberately render no label at all — a direct, separate "remove
05/Experiment, 06/Connect" request from earlier that still holds.

`SectionIntro` passes a `labelColor` prop through to `SectionLabel` and
sets the shared heading scale/weight for every section intro.

## Section color map

Each homepage section keeps its own full-bleed background/accent rather
than sharing one page-wide surface — this is the core of the "maximalist
scroll journey" and the main structural change from the old system, where
almost everything sat on plain white.

| Section | Background | Accent |
|---|---|---|
| Hero | white + blurred violet→pink→amber blob | gradient headline text |
| WhatIsRyx | white | violet label + gradient statement line |
| AiNews (`#discover`) | `bg-violet-light` band | violet label, pink numbered markers |
| PracticalAi (`#guides`, "Use Cases") | `bg-amber-light` band | amber label, per-card violet/pink/cyan/amber badges |
| AiTools (`#tools`) | white | cyan label, pink "Actually worth it" badge |
| Experiments (`#experiments`) | `bg-pink-light` band | no label on the top intro (removed per earlier request); pink label + accents on the "What we're testing right now" block — see below |
| People | white | no label (removed per earlier request); no icons/badges either — see "People section rebuilt as audience grid" |
| Community (`#community`) | `bg-gradient-to-br from-violet via-fuchsia-600 to-pink`, white text | `light`-variant CTA |
| Founder (`#about`) | white | amber label, pink→amber gradient statement line |
| Newsletter (`#join`) | `bg-cyan-light` band | violet focus ring |
| FinalCta | `bg-ink`, white/70 body text | violet→pink gradient headline |

If you add a new homepage section, give it its own background/accent
rather than defaulting to plain white — a page-length run of white
sections would undo the whole point of this pass.

## Layout & motion

Section vertical padding is `py-14 sm:py-20` (bumped up slightly from the
prior compressed `py-10 sm:py-16` pass — bold typography and full-bleed
color bands need a little more room to breathe than the old dense
neutral layout did; still nowhere near the original `py-18 sm:py-28`).
Cards use `border-2 border-ink` (hard, visible borders) instead of the
old thin `border-border` — consistent with the bolder overall register.
Hover states lean into it: cards lift (`-translate-y-1`), tool cards pick
up `shadow-glow-cyan`, buttons lift and swap shadow color.

## Motion pass — "add smooth animations, fix responsiveness"

A dedicated motion/responsiveness pass, on direct request. The
responsiveness half turned up no actual bugs: an automated audit (Playwright,
320/375/390/768/1024/1440px, every route) found zero horizontal overflow
anywhere, so nothing needed fixing there — if a specific device/browser is
still showing a problem, get a screenshot + viewport width, since the audit
didn't reproduce one blind. The animation half did turn up one real bug,
now fixed, plus several deliberate additions:

- **Bug fixed**: `Reveal.tsx` used to apply its fade+rise transition as a
  permanent Tailwind class (`transition-[opacity,transform]
  duration-[550ms]...`) on the wrapped element. Because cards wrapped in
  `Reveal` also carry their own hover transition (a snappier ~300ms lift),
  and both transitions targeted the same element, every hover after the
  initial reveal was inheriting the slow 550ms reveal timing instead of
  its own fast one. Fixed by moving the reveal's transition to an inline
  style applied only while it plays, cleared via `transitionend` (with a
  timeout fallback) once the reveal finishes — so the element's own
  Tailwind transition classes take over cleanly afterward. Reveal itself
  is now visually the same (fade + 12px rise, 600ms, same expo-out curve)
  but no longer leaks its timing into anything else.
- **Hero now animates in on load** (`animate-fade-up` in
  `tailwind.config.js`, ~700ms expo-out, `both` fill mode): badge → h1 →
  gradient line → body → tags → buttons, staggered ~80-100ms apart via
  inline `animationDelay`. This was previously deliberately *not*
  animated ("first paint, no scroll needed" — still true, but the
  explicit ask for more motion overrides that restraint now); don't
  revert it back to static without checking whether the request still
  stands.
- **Scroll-progress bar**: the nav's static 3px gradient line
  (`Nav.tsx`) is now a live progress indicator — a `bg-border` track
  with a `violet→pink→amber` gradient fill whose `scaleX` tracks
  `scrollY / (scrollHeight - innerHeight)`, updated via a rAF-throttled
  scroll listener writing directly to the DOM (no React state, no
  re-render per scroll frame). Verified 0 at top, 1 at bottom, resets on
  scroll-to-top.
- **Nav link hover** now has an animated underline (`scaleX(0)→1` on a
  child `span`, `group`/`group-hover`), not just a color swap. **Mobile
  menu** drops in with `animate-dropdown` (fade + 8px slide, 250ms)
  instead of appearing instantly.
- **Buttons** (`Button.tsx`): base transition bumped to 300ms ease-out
  (was 200ms with no explicit easing) and every variant now lifts on
  hover, not just `primary`/`accent`/`light`; added `active:scale-95`
  (100ms, snappier than the hover transition) for tactile press feedback.
- **Cards** (`PracticalAi`, `People`, `AiTools`'s `ToolCard`): hover lift
  bumped from `-translate-y-1` to `-translate-y-1.5` with an explicit
  `duration-300 ease-out` (was relying on Tailwind's unstated default),
  plus a shadow on lift.
- `prefers-reduced-motion` handling in `globals.css` now also zeroes
  `animation-delay`, not just duration/iteration-count — otherwise the
  Hero's staggered entrance would still visibly wait out its 0-380ms
  delays under reduced motion before snapping to its (now-instant)
  final state.
- The hero's blob decoration still uses the pre-existing CSS
  `animate-blob` keyframe (`tailwind.config.js`), covered by the same
  global `prefers-reduced-motion` override, so it freezes correctly
  without extra handling.

## Nav layout — explicit grid columns, not implicit placement

`Nav.tsx`'s header row is a 3-column grid (`grid-cols-[1fr_auto_1fr]`):
logo left, nav links centered in the auto-sized middle track, follow
button/hamburger right. This replaced an earlier `flex justify-between`
that only split leftover space between unevenly-sized children and never
actually centered the middle item (a user screenshot caught the nav links
sitting visibly off-center).

The grid version had its own bug: the three children (`Link`, `nav`,
button/hamburger `div`) relied on implicit source-order placement into
the three columns. Below `md`, the `<nav>` (middle child) is
`display:none` — and a `display:none` element generates no box and isn't
a grid item at all, so CSS Grid's auto-placement algorithm skipped it and
shifted the *next* item (the hamburger) into the now-vacant middle
column instead of the third one. Result: the hamburger rendered dead
center on mobile instead of at the right edge (also caught via a user
screenshot). Fixed by giving each child an explicit `col-start-1` /
`col-start-2` / `col-start-3` instead of relying on auto-placement — now
each item's column is fixed regardless of which siblings are present/
hidden at a given breakpoint. If you add a fourth child to this grid row,
give it an explicit `col-start-*` too rather than trusting source order.

## Content integrity — unchanged, read before adding "placeholder" content

Still explicit and still non-negotiable, maximalism or not: do not
fabricate member counts, subscriber numbers, events, partners,
testimonials, or statistics, and don't make RYX look bigger than it is.
Confirmed directly when this rebuild was scoped — bold visuals, same
honest content rules.

- `data/audiences.ts` — six real, general audience categories (Students,
  Business Owners, Product Managers, Software Developers, Sales &
  Marketing Teams, Creators & Professionals), not example member
  profiles, so no "Example" badge — see "People section rebuilt as
  audience grid" below. This replaced the old `data/builds.ts`
  (initials/"Example" placeholder profiles), which no longer exists.
- `data/experiments.ts` is now empty (`experiments: []`) — it's for full
  published "we ran it, here's what happened" write-ups (with a real
  verdict), and there isn't one yet. Don't fill it with an invented
  result just to have content; leave it empty until a real one exists.
  `data/currentTests.ts` — see "'What we're testing right now' block"
  below — covers what's actively in progress instead.
- `data/news.ts` — seeded with one honest, self-referential entry
  rather than an invented headline.
- `data/tools.ts` — the tools themselves are real, public products;
  `pick: true` is RYX's own opinion, not a claim about anyone else's
  rating.
- No stock AI imagery anywhere (no robots, brains, circuit boards). Where
  a real photo doesn't exist yet (founder photo, experiment screenshots),
  it's a plain bordered placeholder block — Founder's photo frame is now
  fully omitted (not rendered empty) while `site.founder.photoSrc` is
  unset, per an earlier "remove the space for my photo" request.

## Anchor scroll offset

Every section with an `id` (`#top`, `#discover`, `#guides`, `#tools`,
`#experiments`, `#community`, `#about`, `#join`) carries `scroll-mt-20` —
without it the sticky nav (`h-16`, now with a 3px gradient underline)
covers the section label/heading on every anchor jump. Still true after
the rebuild; if a new section gets an `id`, it needs `scroll-mt-20` too.

## Brand name & copy rules

The full, consistent brand name is **"RYX AI Community"** — always use
the full three-word name in copy, never bare "RYX" or bare "RYX AI".
This is a direct user correction ("don't mix 'RYX,' 'RYX AI,' and 'RYX
AI Community' randomly — the name people should learn is RYX AI
Community") and supersedes the earlier "always RYX AI" rule from before
this pass. `site.name` in `data/site.ts` is the single source of truth
("RYX AI Community") and feeds `openGraph.siteName` in `app/layout.tsx`
automatically — if you add a new place that needs the brand name,
reference `site.name` rather than hardcoding the string where practical.
The one deliberate exception is the **visual logo wordmark**
(`public/logo.png` / `components/Logo.tsx`), which stays "ryx ai" as
designed — never redesign or relabel the actual logo asset to match the
full name; only surrounding copy (page titles, buttons, headings, the
logo link's `sr-only` text) says "RYX AI Community".

No em dashes anywhere in user-facing copy (page titles use a plain
hyphen; prose uses a colon, comma, or period split instead). This is a
separate, still-standing user correction from earlier in the project.

## Founder story

`Founder.tsx`'s bio is close-to-verbatim user-supplied copy (four
paragraphs plus a "Name, Founder, RYX AI Community" byline) — if you
revise it, keep that voice (plain, first-person, "I don't have all the
answers") rather than reverting to the earlier, shorter "I work in AI
and product..." version or inventing new founder narrative.

## "What we're testing right now" block

`Experiments.tsx` replaced its single "coming soon" placeholder card
(`data/experiments.ts`'s one seed entry, now removed) with a richer,
still-honest block, per direct request: a pink `SectionLabel` reading
"AI Experiments", heading "What we're testing right now", a
description, then a `data/currentTests.ts`-driven 3-card grid (`01`/`02`/
`03` + title + description, pink index number, same
`border-2 border-ink` card style as the rest of the site), then a
"Test → Break → Measure → Share" process line, then two buttons: an
`accent`-variant "Sign Up to Test With Us →" and the pre-existing
`secondary`-variant "See Our Experiments" (was `dark` before — softened
since it's no longer the only/primary button in that row).

**Update — now a real embedded form, not a link-out.** The original
version of this linked straight to the Google Sheet (no backend
available at the time). Per a follow-up "I want a real embedded
approach" request, `components/sections/SignupForm.tsx` is now a real
form (name/email/optional "what do you want to test") that actually
writes a row into the Sheet:

- It POSTs a plain HTML form into a hidden `<iframe>` targeting
  `site.signupFormUrl` (`data/site.ts`) — a Google Apps Script Web App
  URL, not a fetch/XHR call. Apps Script Web Apps are unreliable to read
  cross-origin via fetch, so the classic hidden-iframe-target trick is
  used instead; the response can't be read, so "success" just means the
  browser finished the request, not a confirmed server response.
- `scripts/signup-apps-script.gs` is the actual backend — Apps Script
  code bound to the "RYX AI Community Signups" Sheet. It's **not**
  run by this repo's build in any way; it has to be pasted into the
  Sheet's Script Editor by hand (Claude has no Apps Script deploy
  capability) — full one-time deploy steps are in that file's header
  comment. Once deployed, its Web App URL goes into
  `site.signupFormUrl`.
- Until `site.signupFormUrl` is set, `SignupForm` renders an honest
  "Sign-ups open soon, DM us on Instagram" fallback instead of a form
  that would POST to nowhere — check that constant is actually filled
  in before assuming sign-ups are live.
- The old public link straight to the Sheet's edit URL is gone — that
  URL granted edit access to the whole sheet (all rows, not just "add
  one"), so publishing it was more exposed than intended. The new form
  never exposes the Sheet URL to visitors at all.

`data/experiments.ts` (the full "we ran it, here's what happened"
write-up format with a verdict) still exists for when a real experiment
actually wraps up — it's separate from `data/currentTests.ts` (lighter,
no-verdict, "actively in progress" entries) on purpose. Don't merge
these two data shapes; they represent different stages of an
experiment's life (in progress vs. published).

## Join popup — real embedded signup

`Newsletter.tsx` (the `#join` "Skip the noise. Get what's real." band)
used to POST to `/api/join`, a placeholder Next.js route handler that
only appended to a gitignored local JSON file — it never sent mail
anywhere, and it's dynamic (`fs` + `request.json()`), so it couldn't run
at all on the GitHub Pages static export; that build stripped `app/api`
before building and showed an `IS_STATIC_SITE` "Signups aren't live on
this preview, DM us on Instagram" fallback instead. Per direct request
("open a popup form and just ask name and email, fill the same google
sheet"), that's replaced with a real popup form writing into the same
"RYX AI Community Signups" Sheet the experiments sign-up uses:

- `components/ui/Modal.tsx` — a small reusable accessible popup:
  portals to `document.body`, locks body scroll while open, closes on
  Escape or a backdrop click, focuses the first field on open and
  returns focus to the trigger button on close. `animate-backdrop-in` /
  `animate-modal-in` (`tailwind.config.js`) are the fade+scale-in
  keyframes it uses — not shared with `animate-dropdown` (nav) since the
  modal needs a backdrop fade alongside the panel motion.
- `components/sections/JoinForm.tsx` — name + email only (no
  "interest" field; this is the general join ask, not the experiments
  one), same hidden-iframe-POST-to-Apps-Script mechanism as
  `SignupForm.tsx`, same `site.signupFormUrl`. A fixed hidden
  `interest="Newsletter signup"` field tags these rows so they're
  distinguishable from experiments sign-ups in the Sheet, without
  needing any change to the already-deployed Apps Script.
  `SignupForm.tsx` and `JoinForm.tsx` are intentionally two separate
  components rather than one parameterized form — they're each small,
  and `SignupForm` is already a verified-working production path that
  didn't need touching to add this.
- `Newsletter.tsx` now just renders the heading/copy, a "Join RYX AI
  Community" button that opens the `Modal`, and the `JoinForm` inside
  it. Success/fallback/error states live inside `JoinForm` itself, same
  pattern as `SignupForm`.
- `app/api/join` is deleted (dead code once nothing calls it), along
  with `NEXT_PUBLIC_STATIC_SITE` and the `data/signups.json` gitignore
  entry. `.github/workflows/deploy-pages.yml` no longer needs its
  "strip `app/api` before the static build" step since there's no
  `app/api` left at all — the static-export build is now identical to
  the normal one, just with `GITHUB_PAGES=true`.

## People section rebuilt as audience grid

`People.tsx` no longer shows three example community-member profiles
("Product manager" / "Software developer" / "Student" + "Example"
badge, `data/builds.ts`). Per direct request it's now "Who is RYX AI
Community for?" — six real audience categories (`data/audiences.ts`:
Students, Business Owners, Product Managers, Software Developers,
Sales & Marketing Teams, Creators & Professionals), each a plain
bold-title + description card with **no icon, no colored ring, no
badge** — deliberately simpler than every other card style on the site
(which mostly use an icon/badge in the card header) because six cards
read as noise with six different icons; bold title alone scales better.
Grid is `sm:grid-cols-2 lg:grid-cols-3` (1 col mobile, 2 col tablet, 3×2
desktop) — do not go back to a single-row 3-column grid, six items
won't fit one row. Closing line ("Different backgrounds. Different
goals. One community exploring AI together.") sits between the grid and
the "Share Your Build" button, both kept from the original section.

## Launch checklist audit (SEO / performance / a11y / conversion)

Ran through a standard pre-launch checklist end to end. What changed:

- **SEO**: every page already had its own `title`/`description`; added
  `lib/metadata.ts` (`pageMetadata(path, title, description)`) so each
  page also gets a canonical URL and matching per-page OpenGraph/Twitter
  card data — Next does NOT deep-merge `openGraph`/`twitter` objects
  between a page and the root layout, so a page that sets its own
  `openGraph` silently loses the layout's image/siteName unless the
  helper repeats them. Root layout (`app/layout.tsx`) also got
  `keywords`, `robots`, and a `viewport.themeColor`.
- **OG image**: `app/opengraph-image.png` (1200×630, on-brand gradient
  blobs + "Skip the noise. Get what's real." + AI/Business/Workflows
  tags) — built as an HTML mockup screenshotted at 2x then downscaled,
  not `next/og`'s `ImageResponse`, to avoid any static-export risk.
  Referenced from both the layout default and every page's `pageMetadata`.
- **Favicon**: already existed (`app/icon.png`, from an earlier pass) —
  nothing to do.
- **sitemap.xml / robots.txt**: `app/sitemap.ts` / `app/robots.ts`
  (Next's `MetadataRoute` file convention). Both need
  `export const dynamic = 'force-static'` or the `output: 'export'`
  build refuses to prerender them — easy to miss, the error only shows
  up under `GITHUB_PAGES=true`, not the normal build.
- **Alt text**: already fine — the only two `<Image>`s in the codebase
  (`Logo`, `Founder`'s photo) already had real alt text.
- **Image optimization**: `public/logo.png` was 896×380/53KB for a
  logo that only ever renders at ≤24px tall — downscaled to 472×200/35KB
  (still generous headroom for retina). `app/icon.png` was already small.
- **Color contrast (real WCAG AA failures, not just "could be
  darker")**: `ink-muted` (`#8A8A8A`, ~3.5:1 on white) darkened to
  `#6B6B6B` (~5.3:1) in `tailwind.config.js` — it's used for caption/meta
  text (Hero tagline, Founder byline, AiNews meta line, etc.) at sizes
  too small to qualify for the "large text" 3:1 exception. Same failure,
  same fix pattern, in three other places: `SectionLabel`'s and `Badge`'s
  `pink`/`cyan` fills (white text on the DEFAULT tone was ~3.5:1 / ~2.4:1)
  now use the `-dark` step instead (`pink-dark`/`cyan-dark`, ~6:1/~5.4:1)
  — `violet`/`amber` DEFAULT already cleared 4.5:1, untouched;
  `Experiments.tsx`'s small bold `text-pink` date/label lines swapped to
  `text-pink-dark` for the same reason (its `text-2xl` pink numbers are
  fine — bold ≥18.66px qualifies as "large text" at the 3:1 threshold);
  Footer's `white/40` (copyright line, "(soon)" tag — ~3.8:1 on the
  near-black footer) bumped to `white/50` (~5.4:1). `white/50` and
  `white/60` elsewhere in the footer were already fine.
- **404 page**: `app/not-found.tsx` — on-brand ("That page isn't
  signal. It's just noise."), one CTA back home. Next auto-generates
  `out/404.html` from this at build time; GitHub Pages serves it
  natively for any unmatched path, no extra config needed.
- **Broken links — a real, live bug, not hypothetical**: every
  Button/Nav/Footer internal link (`href="/tools"`, `/about`, etc.) was
  a plain `<a href>` string. `next/link` applies the GitHub Pages
  `basePath` (`/ryx-ai-website`) automatically; a raw `<a>` tag
  does not. Since the site's actual live URL IS the github.io subpath
  (confirmed with the user — `ryxai.in` isn't wired up as a custom
  domain yet, despite `data/site.ts`'s `domain` field and
  `metadataBase` already assuming it), every nav click, footer link, and
  internal `Button` was almost certainly 404ing on the real deployed
  site this whole time — built HTML had `/ryx-ai-website/_next/…`
  for assets but plain `/tools` (no prefix) for the nav link right next
  to it. Fixed by making `Button.tsx` render `next/link` instead of
  `<a>` whenever `href` starts with `/` (external URLs, `mailto:`, and
  same-page `#hash` links stay plain `<a>` — they don't need basePath),
  and converting `Nav.tsx`'s and `Footer.tsx`'s own raw internal anchors
  the same way. Verified by grepping the actual `GITHUB_PAGES=true`
  build output for `href="/ryx-ai-website/tools"` etc., not just by
  reading the diff. **If `ryxai.in` custom domain does get configured
  later** (repo Settings → Pages), `next.config.js`'s unconditional
  `basePath`/`assetPrefix` will need revisiting — a custom domain
  normally serves at root, and this basePath would then break asset
  loading there. Flagged, not fixed, since it isn't live yet.
- Removed `data/site.ts`'s unused `sideProject` field (dead code, and
  its `url` was a fake `ferry.example.com` placeholder nothing
  referenced).
- **Analytics**: skipped per explicit request — needs a real account
  (GA4 measurement ID / Plausible site-id) that only the user can create;
  wiring up a script gated on a nonexistent env var would just be dead
  weight. Ask again if/when there's a real ID to wire in.
- **One CTA per page**: reviewed, not changed. Every section keeps its
  own natural CTA (Tools → "Explore Tools", Experiments → sign-up +
  "See Our Experiments", the Join popup available globally via nav/
  footer, etc.) — this is the same maximalist, multi-section landing
  page structure established earlier in this project by direct request,
  not an oversight. Each page still has one dominant *primary* action;
  secondary section-level CTAs are intentional, not noise. Didn't
  unilaterally strip buttons a prior round of this same session added
  on purpose.
- **Mobile responsiveness / page load speed**: no changes — both were
  already addressed in earlier passes (motion/responsiveness audit,
  static export, `next/font` subsetting, `images.unoptimized` for the
  tiny local image set). Spot-checked with fresh screenshots as part of
  this pass; nothing regressed.

## If you touch this next

- `data/site.ts` → `nav` array drives the header; `tags` drives the
  small "AI · Business · Workflows · Signal, not sales." line in the
  hero only — the footer has its *own* separate tagline ("Cutting
  through AI noise, for people actually doing the work.") hardcoded in
  `Footer.tsx`, not shared with `site.tags`. Don't re-couple them
  without checking both copies still read correctly together.
- Keep new user-facing copy in RYX's plain, curious, no-corporate-jargon
  register — the maximalism request was about visuals, not tone.
- Don't let every button/badge default to the same accent color — the
  per-section color map above is what keeps this "bold" instead of
  "same color everywhere." Pick the color that matches the section
  you're extending.
