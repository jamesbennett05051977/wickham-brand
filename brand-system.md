# Wickham Services Ltd — Brand Design System

**Direction:** Beacon — modern, premium, signal-clear digital field service.
**Palette:** Deep blue + azure/cyan on dark navy.
**Status:** v2.0 — supersedes v1.0 ("Kiosk", cobalt + signal orange).
**Last updated:** 14 June 2026.

> **v2.0 supersedes v1.0.** The brand has moved from the v1.0 "Kiosk" system (cobalt `#1438A8`
> + signal orange `#FF5722`, Archivo Black `WICKHAM SERVICES.` wordmark, Bauhaus hard edges, *no
> gradients/glows*) to the **"Beacon"** identity: the **WS monogram roundel**, a deeper blue +
> cyan palette on dark navy, and a premium digital finish that *embraces* gradient, glow and depth.
> Where v2.0 and v1.0 disagree, **v2.0 wins**. The orange accent is retired.

This document is the single source of truth for all Wickham Services Ltd brand, web, and design
decisions. Asset files + this document live in the **`wickham-brand`** repo and are served to every
project over the **jsDelivr CDN** (see §13).

---

## 1. Brand Positioning

**One-liner:** A national field service operation, run like a software product.

**What the brand stands for**
- **Responsive.** We answer, we turn up, we move.
- **Visible.** Every job scheduled, dispatched, audited — you can always see where it is.
- **Dependable.** We do the work, then we say what we did. Confidence without bluster.
- **British and proud of it.** Hampshire-based, nationwide reach.

**Tagline:** *Responsive · Visible · Dependable.*

**Audience**
- *Primary:* enterprise prospects — procurement leads, facilities/ops directors at Royal Mail,
  Evri, retail estates and similar national networks.
- *Secondary:* engineers and the internal team — anything we publish should make them proud to be
  on the badge.

**Tone of voice** *(carried over from v1.0 — still true)*
- Sounds like us: *Show up. Sort it. Move on.* Plain English. Understatement over hyperbole.
  Numbers when they earn it.
- Doesn't sound like us: buzzwords, stacked adjectives, exclamation marks, brochure-speak.

---

## 2. Logo System

The logo is the **Beacon "WS" monogram** — a circular badge that reads as a signal/beacon.

**Anatomy**
- A dark-navy **roundel** (self-contained, so it works on any background).
- A **chevron "W"** in a blue→cyan gradient beside an **upright white "S"** — the WS monogram.
- Three concentric **rings**, and three **cyan beacon dots** sitting on those rings, fading
  outward (a "signal pulse"). The beacon dots are the brand's **signature gesture** — they replace
  the old orange dot.

**Variants (in order of preference)**

| Variant | Use case | Background |
|---|---|---|
| **Mark** (`wickham-mark.svg`) | App icon, favicon, avatar, embroidery, tight spaces | Any |
| **Lockup — dark** (`wickham-lockup-dark.svg`) | Site header, email sig, decks on dark | Navy / dark / photo |
| **Lockup — light** (`wickham-lockup-light.svg`) | Letterhead, light site header, print on white | Cream / white |
| **Signature card** (`wickham-signature-card.svg`) | Email signature, business-card front | Navy |

**Clear space** — keep clear space equal to the **radius of the badge's inner disc** on all sides.
Nothing intrudes inside that.

**Minimum sizes**
- Mark: **24px** digital, **12mm** print.
- Lockup: **120px** wide digital, **40mm** print.

**Don'ts**
- Don't recolour the W gradient or the white S.
- Don't remove or rearrange the beacon dots, or add more.
- Don't stretch, skew, or rotate the badge.
- Don't add a second accent colour — cyan is the only accent.
- Don't recreate the wordmark in a different typeface.
- Don't place the badge's glow over a busy photo — use a solid navy panel.

---

## 3. Colour System

The brand is **dark-first**: deep navy is the hero surface, cyan is the single accent ("the signal").

| Name | Hex | Role |
|---|---|---|
| **Deep Blue** | `#0E4F8B` | Primary brand colour; wordmark on light |
| **Azure** | `#16A6E8` / `#3B82F6` | W-gradient, highlights, hover |
| **Cyan** | `#06B6D4` / bright `#22D3EE` | Beacon dots, links, the single accent |
| **Navy** | `#0A0F1C` | Primary dark surface / card field |
| **Disc Navy** | `#111827` | Badge disc, raised dark surfaces |
| **Slate** | `#2D3A4F` | Borders / dividers on dark |
| **Cloud** | `#F8FAFC` | Text & wordmark on dark; light surface |
| **Muted** | `#94A3B8` | Secondary text |
| **Ink** | `#0F1729` | Body text on light surfaces |

**CSS custom properties** — drop straight into your stylesheet:
```css
:root {
  --color-blue:        #0E4F8B;   /* primary brand */
  --color-blue-deep:   #0B3C6B;
  --color-azure:       #16A6E8;
  --color-azure-2:     #3B82F6;   /* W-gradient start */
  --color-cyan:        #06B6D4;   /* accent / beacon */
  --color-cyan-bright: #22D3EE;   /* links on dark */
  --color-navy:        #0A0F1C;   /* hero surface */
  --color-disc:        #111827;
  --color-slate:       #2D3A4F;
  --color-cloud:       #F8FAFC;
  --color-muted:       #94A3B8;
  --color-ink:         #0F1729;

  /* Semantic aliases (dark-first) */
  --bg:        var(--color-navy);
  --surface:   var(--color-disc);
  --border:    var(--color-slate);
  --text:      var(--color-cloud);
  --text-muted:var(--color-muted);
  --primary:   var(--color-blue);
  --accent:    var(--color-cyan);
  --link:      var(--color-cyan-bright);

  /* Signature W gradient */
  --grad-beacon: linear-gradient(135deg, var(--color-azure-2), var(--color-cyan));
}
```

**Usage**
- Lead with **navy + deep blue**; let **cyan** appear as a single confident accent (links, the
  beacon dots, one CTA). Cyan is the punch — don't scatter it.
- **No orange.** It was the v1.0 accent and is fully retired.
- Light surfaces are the *inverse* of the dark default (Cloud background, Ink text, Deep Blue
  primary, Cyan accent).

**Accessibility** — pairings meet WCAG AA at 16px+:
- Cloud on Navy: ✓ high contrast.
- Deep Blue on Cloud: ✓.
- Cyan `#22D3EE` on Navy: ✓ (use the *bright* cyan for links on dark; the `#06B6D4` accent is for
  fills/dots, not small text on dark).

---

## 4. Typography

Aligned with the live ops apps (replacing v1.0's Archivo / Cabinet Grotesk).

| Role | Family | Weights | Source | Usage |
|---|---|---|---|---|
| Display / Headings | **DM Sans** | 700, 800 | Google Fonts | Headlines, hero, wordmark |
| Body | **DM Sans** | 400, 500 | Google Fonts | Running text |
| Mono | **Space Mono** | 400, 700 | Google Fonts | Codes, labels, the tagline/kicker |

```css
:root {
  --font-display: 'DM Sans', system-ui, sans-serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
  --font-mono:    'Space Mono', ui-monospace, 'SF Mono', Consolas, monospace;
}
```

**Rules**
- Headlines in DM Sans 700/800, sentence or title case (the maximalist all-caps of v1.0 is relaxed).
- The **tagline / kickers** are always **Space Mono, uppercase, letter-spacing ~0.15em**, often in
  cyan — this is the connective tissue of the brand (e.g. `RESPONSIVE · VISIBLE · DEPENDABLE`).
- Body always sentence case. Avoid italics.

> Note: the current lockup wordmark is set in Arial as a system-safe placeholder. The intended
> wordmark face is **DM Sans 800**; redraw the wordmark in DM Sans when convenient and re-render.

---

## 5. Spacing & Layout *(carried over from v1.0)*

8px base scale (`--space-1: 4px` … `--space-12: 160px`), `.container { max-width: 1320px; padding: 0 48px }`
(24px on mobile), 12-column grid with 16px gutter, CSS Grid for layout.

---

## 6. Components

The v2.0 surface language is **soft depth and glow** (the *reverse* of v1.0's hard Bauhaus shadows).

**Surfaces**
- Cards are navy (`--surface`) with a 1px `--border` and a soft glow; radius **12–16px**.
```css
:root {
  --shadow-soft-sm: 0 4px 16px rgba(2,8,20,0.35);
  --shadow-soft-md: 0 10px 32px rgba(2,8,20,0.45);
  --glow-beacon:    0 0 40px rgba(59,130,246,0.18);   /* signature glow */
}
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow-soft-md);
}
```

**Beacon rings** — concentric rings + fading dots are the signature decorative motif (they replace
v1.0's tape strips and the orange disc). Use sparingly behind hero marks or as a section accent.

**Buttons**
- Primary: deep-blue fill, cloud text, radius 10–100px.
- Accent: cyan fill for the single key CTA per view.
- One primary CTA per view; include an arrow `→` on the primary CTA.

---

## 7. Iconography *(updated)*

Stroked **Lucide** icons, **2px** stroke, rounded caps, 24×24 canvas. Accent strokes may use cyan.
Never filled or three-tone. Sizes: 16px inline/buttons, 24px in cards, 32–48px hero.

---

## 8. Motion & Interaction *(updated)*

The brand now favours **smooth, premium motion** with subtle glow (v1.0's hard mechanical "snap"
is relaxed). Gradients and glow are *on-brand*.
- **Beacon pulse:** the dots/rings pulse gently outward (the signature animation). Subtle, then rests.
- Buttons lift 2px; links get a cyan underline; cards raise with a stronger soft shadow.
- Respect `prefers-reduced-motion` (disable transforms/animation).

---

## 9. Imagery & Photography *(updated grade)*

Documentary, not stock — engineers in vans, on ladders, at night. Real, flash-lit, contrasty.
**Cool blue/cyan colour grade** (lifted navy/cyan shadows). Hero photography may carry a
navy→cyan duotone or a soft glow overlay (now permitted). Avoid corporate-handshake clichés.

---

## 10. Voice & Copy *(carried over from v1.0)*

Short declaratives ("We do field service. Properly."), number-led ("1,400 sites. 120 engineers."),
three-beat lists ("Show up. Sort it. Move on."). UK spellings, 24h times, `26.04.26` or
`26 April 2026` dates, £ no decimals when whole, no Oxford comma, client names as they brand
themselves. Footer tagline: **Responsive · Visible · Dependable**.

---

## 11. Web Architecture *(updated surface)*

Dark-first. Header: navy background, cloud text, **lockup-dark** on the left, one cyan CTA on the
right. Sticky on scroll. Page heroes use a navy field with an optional beacon-ring motif. Pages,
footer structure, and the page-hero pattern otherwise follow v1.0.

---

## 12. Technical Specifications *(carried over)*

Next.js / Astro or vanilla CSS with these custom properties; Vercel hosting; n8n intake on
`automation.wickhamservices.co.uk`; Plausible analytics. Lighthouse 95+, LCP < 2.0s, CLS < 0.05.
Modern evergreen browsers, WCAG 2.1 AA, visible cyan focus rings
(`outline: 2px solid var(--color-cyan); outline-offset: 2px`).

---

## 13. Assets, File Naming & CDN

**Single source of truth: the `wickham-brand` repo** → served via jsDelivr.
Base URL: `https://cdn.jsdelivr.net/gh/jamesbennett05051977/wickham-brand@main/`
(pin a tag, e.g. `@v2.0.0`, for production stability).

```
wickham-brand/
  brand-system.md          ← this document (canonical)
  svg/   wickham-mark.svg  wickham-lockup-dark.svg  wickham-lockup-light.svg
         wickham-og.svg    wickham-signature-card.svg
  web/   favicon.ico/.svg  favicon-16/32/48.png  apple-touch-icon.png
         android-chrome-192/512.png  lockup-dark/light(.png/@2x)  site.webmanifest  head-snippet.html
  email/ signature-card.png  mark-120.png(@2x)
  social/avatar-512/400.png  og-image-1200x630.png
```
Regenerate all rasters from the SVG masters: `npm run render` (`@resvg/resvg-js` + `png-to-ico`).
For print/vehicle vinyl, export EPS + high-res PDF alongside the SVG.

---

## 14. Dark / Light Mode

Dark is the **default** (navy hero is the brand's natural state). The light theme is the inverse:
Cloud background, Ink text, Deep Blue primary, Cyan accent. Deep blue and cyan are stable across both.

---

## 15. Print & Physical Applications *(updated to v2.0)*

- **Vehicle livery:** navy base wrap, the WS badge large on side panels and rear doors, a single
  cyan signal stripe, phone/URL in Space Mono caps. Reflective strips for night visibility.
- **Apparel:** navy polos with the embroidered WS badge on the left chest; hi-vis with a navy +
  cyan heat-pressed badge on the back.
- **Business cards / letterhead:** navy face with the signature card; light reverse with the
  light lockup; contact details in Space Mono caps.
- **Email signature:** the navy **signature card** image (see `email/signature-card.png`).

---

## 16. Maintaining the Brand

Anyone making a brand decision should ask:
1. Is the surface **navy-first**, with **cyan as the single accent** (no orange)?
2. Is the type **DM Sans** (display/body) + **Space Mono** (labels)?
3. Is the logo the **Beacon WS** badge or an approved lockup — unaltered?
4. Is there exactly **one** primary CTA per view?
5. Does the cyan land as a single confident **signal**, not scattered?
6. Does it sound like a Hampshire engineer wrote it, not a London marketer?

If any answer is "no," it's drifting from the brand.

---

## 17. Changelog

- **v2.0 — 14 June 2026 — "Beacon".** New WS-monogram roundel logo; palette moved to deep blue +
  azure/cyan on dark navy (orange retired); typography moved to DM Sans + Space Mono; aesthetic
  reversed from hard Bauhaus to premium soft-glow/gradient; assets centralised in the `wickham-brand`
  repo + jsDelivr CDN. **Supersedes v1.0.**
- **v1.0 — 26 April 2026 — "Kiosk".** Cobalt + signal orange, Archivo Black `WICKHAM SERVICES.`
  wordmark, Bauhaus hard edges. *Retired.*

*Wickham Services Ltd · Brand Design System · v2.0 · 14.06.26*
