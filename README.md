```markdown
# OA Studios — Design & Development Reference

## Overview
OA Studios is a Lagos-based architectural firm. This document
describes the visual language, section-by-section layout, and
design decisions for the website revamp.

---

## Color Palette

All colors are defined in OKLCH for perceptual consistency.
Hex references are provided for designer handoff only.

| Token            | OKLCH                      | Hex       | Role                          |
|------------------|----------------------------|-----------|-------------------------------|
| `--green`        | oklch(22% 0.052 112)       | `#2e2e14` | Page background, primary base |
| `--green-deep`   | oklch(13% 0.035 112)       | `#1a1a0a` | Alt section bg, darkest layer |
| `--green-mid`    | oklch(32% 0.065 112)       | `#4a4a22` | Surface bg, cards             |
| `--green-light`  | oklch(44% 0.072 112)       | `#6b6b38` | Subtle fills, borders         |
| `--cream`        | oklch(82% 0.038 62)        | `#decbbc` | Body text, secondary headings |
| `--cream-dark`   | oklch(72% 0.052 68)        | `#c4a882` | Accent, hover states, CTAs    |
| `--cream-muted`  | oklch(56% 0.034 62)        | `#8c7b6b` | Labels, captions, eyebrows    |
| `--white`        | oklch(91% 0.014 62)        | `#e9e4df` | Primary heading text          |

---

## Typography

Three typefaces. Each has a strict role — do not mix them.

| Token              | Typeface                                  | Role                          |
|--------------------|-------------------------------------------|-------------------------------|
| `--font-display`   | PP Editorial Old → Cormorant Garamond     | Hero headlines, pull quotes   |
| `--font-condensed` | PP Neue World → Barlow Condensed          | Section labels, nav, numbers  |
| `--font-body`      | Neue Montreal → Barlow                    | Body copy, UI text            |

**PP Editorial Old** is the soul of the brand at display size —
light weight, italic, with sharp bracketed serifs. Use at
`--text-hero` scale for hero and projects sections.

**PP Neue World Condensed** creates industrial tension against the
serif. All caps, wide tracking (`--tracking-widest`), used for
every section label (`— WHO WE ARE`, `— OUR WORK`).

**Neue Montreal** stays invisible — neutral and readable for all
running body copy.

### Type Scale

```css
--text-xs:    0.6rem     /* Timestamps, fine print */
--text-sm:    0.75rem    /* Captions, nav links    */
--text-base:  1rem       /* Body copy              */
--text-md:    1.125rem   /* Subheadings            */
--text-lg:    1.5rem     /* Section intros         */
--text-xl:    2.5rem     /* Section headings       */
--text-2xl:   4rem       /* Large display moments  */
--text-3xl:   7rem       /* Stat numbers           */
--text-hero:  clamp(4.5rem, 10vw, 9rem)  /* Hero headline */
```

---

## Sections

### 01 — Navigation

Fixed to top. Transparent with a `backdrop-filter: blur` over
page content as the user scrolls. Full width, borderless except
for a single `1px` line in `--border` at the bottom.

**Left** — Wordmark: `OA Studios` in `--font-display`, light
weight, wide tracking, colored `--cream`.

**Center** — Links: `About · Services · Projects · Process ·
Journal · Contact` in `--font-condensed`, `0.68rem`, all caps,
`--tracking-widest`, colored `--text-ghost`. On hover, animate
to `--cream` with a `300ms` ease transition.

**Right** — CTA button: `Get in Touch` in `--font-condensed`.
Solid fill: `--btn-primary-bg` (`--cream`) with text in
`--btn-primary-text` (`--green`). No border radius — sharp
rectangular edges. On hover, background shifts to `--cream-dark`.

---

### 02 — Hero

Full viewport height. Background is `--green`. A low-opacity
image overlay (`opacity: 0.22`) sits behind all text — this is
the layer that swaps on hover.

**Top-left eyebrow** — `OA STUDIOS — EST. 2018` in
`--font-condensed`, `--text-xs`, `--tracking-widest`, colored
`--cream-muted`. Preceded by a `2rem` horizontal rule in the same
color.

**Headline** — Three lines, large serif display type at
`--text-hero`, `font-weight: 300`, `line-height: --leading-none`.
Colored `--white`. The three lines read:

```
Where / Ideas
Become
Places.
```

Each **word** is an interactive anchor. On hover:
- Word color transitions to `--cream`, shifts to italic
- A `1px` underline in `--cream-dark` slides in from left
- The background image overlay crossfades to the image mapped
  to that word (see image map below)
- A small descriptor appears bottom-right: a muted label in
  `--font-condensed` above an italic serif name in `--cream-dark`

**Image map:**

| Word      | Background image concept          | Descriptor label     |
|-----------|-----------------------------------|----------------------|
| `Ideas`   | Concept sketches, mood board      | Where Ideas Begin    |
| `Become`  | Structure rising mid-construction | Construction in Motion |
| `Places`  | Finished interior, warm light     | Spaces That Breathe  |

**Bottom-left sub-copy** — `Architecture and design that make
people feel something.` in `--font-body`, `font-weight: 300`,
`0.85rem`, `--text-ghost`.

**Right column** — Vertical scroll hint text (`Scroll to explore`)
in `--font-condensed`, `writing-mode: vertical-rl`, colored
`--cream-muted`, with a `4rem` vertical rule below it.

**Bottom bar** — Full-width strip separated by `--border`. Three
stat columns: `12+ Years of Practice`, `80+ Projects Delivered`,
`03 Disciplines, One Vision`. Numbers in `--font-display` at
`1.6rem`, labels in `--font-condensed` at `--text-xs`. Rightmost
item: `Lagos, Nigeria` in `--cream-muted`.

---

### 03 — About

Two-column layout on a `--green-deep` background.
Left column is text. Right column is a single large image —
architectural photography, portrait orientation, no border radius.

**Section label** — `— WHO WE ARE` in `--font-condensed`, all
caps, `--cream-muted`, `--tracking-widest`.

**Headline** — `We build the spaces between ambition and reality.`
in `--font-display`, italic, `--text-2xl`, `font-weight: 300`,
colored `--white`.

**Body** — Two short paragraphs in `--font-body`, `--text-base`,
`--leading-normal`, colored `--cream`. Max width `52ch`.

OA Studios is a Lagos-based architectural practice working at
the intersection of form, function, and feeling. We don't just
design buildings — we shape the way people move through the world.

From the first sketch to the final finish, every decision is
deliberate, every detail considered.

**Stat strip** below the body copy — three figures with animated
count-up on scroll entry: `12+`, `80+`, `03`. Each stat has a
`1px` top border in `--border` and label text in `--font-condensed`.

---

### 04 — Services

Dark section, `--green-deep` background. Full width. Minimal.

**Section label** — `— WHAT WE DO` top-left.

**Intro headline** — `Four ways we bring your vision to life.`
in `--font-display`, italic, `--text-xl`.

The service list is four large typographic lines — each the full
width of the container, separated by `1px` `--border` dividers.
Font is `--font-display`, `--text-2xl`, `font-weight: 300`,
colored `--white`.

On hover over each line:
- Line text shifts to `--cream-dark` and italicises
- A high-quality image popups appears — centered on screen or
  anchored to cursor, fading in over `300ms`
- A short descriptor fades in beneath the line in `--font-body`,
  `--text-sm`, `--cream-muted`

| Line text          | Popup image concept              | Descriptor                                  |
|--------------------|----------------------------------|---------------------------------------------|
| `Architecture`     | Bold structural exterior shot    | Structures designed to outlast trends.      |
| `Interior Design`  | Layered warm living space        | Spaces that feel personal before designed.  |
| `Exterior Design`  | Façade blending into landscape   | Form that converses with its environment.   |
| `Consultation`     | Architect over drawings, studio  | Clarity at every stage of the process.      |

A small italic index number (`01`, `02`, `03`, `04`) sits at the
far right of each line in `--cream-muted`, `--font-condensed`.

---

### 05 — Projects

Mirrors the Hero section visually — full viewport height,
`--green` background, large display type, word-level hover
triggering background image swaps.

**Section label** — `— OUR WORK` top-left.

**Intro line** — `Select a project. Step inside.` in
`--font-body`, `--text-sm`, `--text-ghost`, beneath the label.

**Project list** — Six project titles stacked vertically in
`--font-display`, `--text-2xl` to `--text-3xl`, `font-weight: 300`.
Each title is a hoverable anchor:

```
Jessamine King Cottage
The Halcyon Residence
Osei Commercial Tower
Linné Garden Pavilion
Verte Private Estate
The Meridian Lofts
```

On hover over each title:
- Title shifts to italic and `--cream-dark`
- Background image crossfades to that project's hero photo
- A right-aligned tag appears showing project type and year
  in `--font-condensed`, `--text-xs`, `--cream-muted`

**Bottom-right** — `All Projects →` link in `--font-condensed`,
`--tracking-wide`, `--cream`. Arrow animates `4px` right on hover.

---

### 06 — Process

Horizontal scroll section. On vertical scroll, the page
translates horizontally through five full-viewport-width panels.
Achieved via `position: sticky` container with a wide inner track
translated by scroll position using JS.

Background alternates between `--green` and `--green-deep` per
panel to give visual rhythm.

Each panel is full viewport height and width, with content
centered vertically.

**Before the panels begin** — a full-width intro in the normal
scroll flow:

`— HOW WE WORK` label, then headline: `A process built for trust.`
in `--font-display`, italic, `--text-2xl`.

**Panel structure — repeated across all five:**

- Large step number top-left: `01` through `05` in
  `--font-condensed`, `--text-3xl`, `font-weight: 700`,
  `--border` color (very muted, almost decorative)
- Step name centered: in `--font-display`, italic, `--text-2xl`,
  `--cream`
- Body copy below: `--font-body`, `--text-base`, `--leading-normal`,
  `--text-ghost`, max width `40ch`
- A thin `1px` vertical rule on the right edge of each panel
  in `--border` acts as the visual separator

**Five panels:**

| # | Name | Body |
|---|------|-------|
| 01 | Discovery | We listen before we draw. Every project begins with understanding — your vision, your constraints, your life. |
| 02 | Concept | From mood boards to initial sketches, we translate conversation into spatial language. |
| 03 | Design Development | Technical drawings, material selections, and 3D renders refine the concept into a buildable reality. |
| 04 | Construction | Our team remains on-site throughout the build — overseeing every contractor, every finish. |
| 05 | Handover | We walk you through every detail. Then we step back, and let you live in it. |

A fixed progress indicator sits at the bottom center — five
short horizontal dashes in `--font-condensed`, the active panel's
dash extending and filling with `--cream`.

---

### 07 — Testimonials

Reference: thisisstudiox.com testimony section treatment.
Full-width, `--green-deep` background. Generous vertical padding.

**Section label** — `— WHAT THEY'VE SAID`.

**Headline** — `The work speaks. So do our clients.` in
`--font-display`, italic, `--text-xl`, `--white`.

Testimonials display as large pull quotes — not cards. Each
quote is set in `--font-display`, italic, `font-size: --text-lg`,
`--cream`, with the attribution below in `--font-condensed`,
`--text-xs`, `--tracking-widest`, `--cream-muted`.

Quotes are separated by thin `1px` horizontal rules in `--border`.
On scroll, each quote slides up and fades in with a staggered
delay.

---

### 08 — Journal

Three-column article grid on `--green` background.

**Section label** — `— THE JOURNAL`.

**Headline** — `Ideas worth sitting with.`

Each article card has:
- Full-bleed image top (no border radius)
- Article title in `--font-display`, `--text-md`, `--white`
- Date and category tag in `--font-condensed`, `--text-xs`,
  `--cream-muted`
- A `1px` bottom border in `--border` that fills to `--cream`
  on hover

On card hover, the image scales very slightly (`scale: 1.03`)
inside its fixed-height container (overflow hidden).

---

### 09 — Contact

Reference: thisisstudiox.com contact section treatment.
Split layout — left side is text and form, right side is a
large-format image or map embed in `--green-mid`.

**Section label** — `— LET'S TALK`.

**Headline** — `Your next space starts with a conversation.`
in `--font-display`, italic, `--text-2xl`, `--white`.

**Sub-copy** — `Whether you have a fully formed brief or just a
feeling — we'd love to hear from you.` in `--font-body`,
`--text-base`, `--cream-muted`.

**CTA button** — `Request a Free Consultation →`
Solid `--cream` fill, `--green` text, no border radius.

**Contact details** listed below the button in `--font-condensed`,
`--text-sm`, `--cream-muted`:
```
0812-090-5387
oastudios@gmail.com
Lagos, Nigeria
```

---

### 10 — Footer

Reference: thisisstudiox.com footer treatment.
`--green-deep` background. Generous padding.

**Top row** — Large display tagline spanning full width:
`Designing Spaces, Crafting Experience.` in `--font-display`,
italic, `font-weight: 300`, `--text-2xl` to `--text-3xl`,
`--cream`. This is a typographic gesture, not a functional element.

**Middle row** — Three columns:
- Left: `OA Studios © 2025. All rights reserved.` in
  `--font-body`, `--text-sm`, `--cream-muted`
- Center: Nav links — `About · Services · Projects · Process ·
  Journal · Contact` in `--font-condensed`, `--text-xs`,
  `--tracking-wider`, `--cream-muted`
- Right: Social links — `Instagram · LinkedIn · Behance` in
  same treatment as nav links

**Bottom bar** — Full-width `1px` `--border` rule, then below it:
`Site by OA Studios. Built with intention.` centered, in
`--font-condensed`, `--text-xs`, `--cream-muted`.

---

## Animation Principles

- **Entrance** — All sections animate in on scroll via
  `IntersectionObserver`. Elements translate `24px` upward and
  fade from `opacity: 0` to `1` over `--duration-slow` with
  `--ease-out`. Stagger child elements by `80ms`.
- **Hero words** — Background crossfade uses `--duration-slow`
  (`600ms`). Color and italic shift use `--duration-base` (`300ms`).
- **Hover states** — All interactive elements transition at
  `--duration-base` with `--ease`.
- **Horizontal scroll** — Driven by `requestAnimationFrame` tied
  to `window.scrollY`. Lerp the translation value for a smooth,
  slightly lagging feel: `current += (target - current) * 0.08`.
- **No motion** — Wrap all animations in
  `@media (prefers-reduced-motion: reduce)` and disable.

---

## Responsive Behaviour

| Breakpoint | Change |
|---|---|
| `< 1024px` | Nav collapses to hamburger. Hero type scales down. Services list remains full-width. |
| `< 768px`  | About switches to single column. Projects list reduces font size. Process panels stack vertically instead of horizontal scroll. |
| `< 640px`  | Footer columns stack. Journal grid becomes single column. Gutter reduces to `1.25rem`. |
```
