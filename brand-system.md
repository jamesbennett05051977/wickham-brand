# Wickham Services Ltd — Brand Design System

**Direction:** Beacon — modern, premium, signal-clear digital field service.
**Palette:** Blue + cyan on dark navy, with a full functional/semantic accent set.
**Status:** v2.1 — supersedes v1.0 ("Kiosk", cobalt + signal orange).
**Last updated:** 14 June 2026.

> **v2.1 supersedes v1.0.** The brand has moved from the v1.0 "Kiosk" system (cobalt `#1438A8`
> + signal orange `#FF5722`, Archivo Black `WICKHAM SERVICES.` wordmark, Bauhaus hard edges, *no
> gradients/glows*) to the **"Beacon"** identity: the **WS monogram roundel**, a blue + cyan
> palette on dark navy, and a premium digital finish that *embraces* gradient, glow and depth.
> Where v2.x and v1.0 disagree, **v2.x wins**.
>
> **v2.1 note (palette):** the colour system is now defined by the **live ops application** — the
> shared `web/brand.css` stylesheet is the single source of truth (§3). Blue `#3B82F6` is the
> primary action colour, cyan `#06B6D4` the highlight, and a **functional/semantic accent set**
> (success/warning/danger/etc.) is part of the brand. **Orange `#F59E0B` is reinstated — strictly
> as the *warning/pending* UI signal, not as a decorative brand colour.**

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

The brand is **dark-first**: navy is the hero surface, blue + cyan carry identity, and a small
set of **functional accents** signal UI state (success / warning / danger). The canonical
definition is the shared **`web/brand.css`** stylesheet — this section documents it; that file
ships it. Token names below match `brand.css` exactly.

**Surfaces** (darkest → lightest)

| Name | Hex | Token | Role |
|---|---|---|---|
| **Navy** | `#0A0F1C` | `--bg-primary` | Page background / hero surface |
| **Disc Navy** | `#111827` | `--bg-secondary` | Table heads, sunken areas |
| **Card** | `#1A2234` | `--bg-card` | Cards, panels, controls |
| **Card hover** | `#232D42` | `--bg-card-hover` | Hovered rows / cards |
| **Slate** | `#2D3A4F` | `--border-color` | Borders / dividers on dark |

**Brand & accents**

| Name | Hex | Token | Role |
|---|---|---|---|
| **Blue** | `#3B82F6` | `--accent-blue` | **Primary action** / links |
| **Deep Blue** | `#0E4F8B` | `--brand-primary` | Deep brand shade; wordmark on light |
| **Cyan** | `#06B6D4` | `--accent-cyan` | Highlight, focus, primary buttons |
| **Green** | `#10B981` | `--accent-green` | Success / positive |
| **Orange** | `#F59E0B` | `--accent-orange` | **Warning / pending** *(functional only)* |
| **Red** | `#EF4444` | `--accent-red` | Error / danger |
| **Purple** | `#8B5CF6` | `--accent-purple` | Reference codes / secondary |
| **Pink** | `#EC4899` | `--accent-pink` | Decorative (avatars) |
| **Teal** | `#14B8A6` | `--accent-teal` | Extra category accent |
| **Indigo** | `#6366F1` | `--accent-indigo` | Extra category accent |

**Text:** `--text-primary #F8FAFC` · `--text-secondary #94A3B8` · `--text-muted #64748B`.

**CSS custom properties** — these mirror `brand.css`; link that file rather than re-declaring:
```css
:root {
  /* Surfaces */
  --bg-primary:    #0a0f1c;  --bg-secondary: #111827;
  --bg-card:       #1a2234;  --bg-card-hover:#232d42;
  --border-color:  #2d3a4f;

  /* Brand */
  --brand-primary: #0e4f8b;  --brand-cyan:   #06b6d4;

  /* Accents (semantic) */
  --accent-blue:   #3b82f6;  --accent-cyan:  #06b6d4;
  --accent-green:  #10b981;  --accent-orange:#f59e0b;  /* warning only */
  --accent-red:    #ef4444;  --accent-purple:#8b5cf6;
  --accent-pink:   #ec4899;  --accent-teal:  #14b8a6;  --accent-indigo:#6366f1;

  /* Text */
  --text-primary:  #f8fafc;  --text-secondary:#94a3b8; --text-muted:#64748b;

  /* Signature gradient (page titles, W-mark) */
  --grad-beacon: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
}
```

**Usage**
- Lead with **navy surfaces**; **blue `#3B82F6` is the primary action** colour and **cyan** the
  confident highlight. Keep them dominant — the gradient `cyan → blue` is the signature title/W treatment.
- **Functional accents only where they mean something:** green = success, **orange = warning/pending**,
  red = error. Don't use orange decoratively — it earns its place as a state signal, never as brand flourish.
- Purple/pink/teal/indigo are *category* accents (tiles, codes, avatars), used sparingly.
- Light surfaces are the *inverse* of the dark default (Cloud background, Ink text, Deep Blue
  primary, Cyan accent).

**Accessibility** — pairings meet WCAG AA at 16px+:
- Cloud (`#F8FAFC`) on Navy: ✓ high contrast.
- Deep Blue on Cloud: ✓.
- Use bright cyan `#22D3EE` for small link text on dark; the `#06B6D4` accent is for fills/dots.

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
- Primary: blue `#3B82F6` (or cyan `#06B6D4`) fill, dark/cloud text, radius 8–100px. See
  `.btn-primary` in `brand.css`.
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
  brand-system.md          ← this document (canonical spec)
  svg/   wickham-mark.svg  wickham-lockup-dark.svg  wickham-lockup-light.svg
         wickham-og.svg    wickham-signature-card.svg
  web/   brand.css         ← canonical stylesheet (colour system + components, §3)
         favicon.ico/.svg  favicon-16/32/48.png  apple-touch-icon.png
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
1. Is the surface **navy-first**, led by **blue + cyan**, with functional accents (green/orange/red)
   used **only** to signal state — never orange as decoration?
2. Is the type **DM Sans** (display/body) + **Space Mono** (labels/numbers)?
3. Is the logo the **Beacon WS** badge or an approved lockup — unaltered?
4. Is there exactly **one** primary CTA per view?
5. Do blue/cyan stay dominant, with accents earning their place rather than scattered?
6. Does it sound like a Hampshire engineer wrote it, not a London marketer?

If any answer is "no," it's drifting from the brand.

---

## 17. Changelog

- **v2.1 — 14 June 2026 — "Beacon" (palette broadened).** Colour system realigned to the live ops
  application and codified in the shared **`web/brand.css`** stylesheet (now the single source of
  truth): blue `#3B82F6` is the primary action colour and a **functional/semantic accent set**
  (success/warning/danger + category accents) is part of the brand. **Orange `#F59E0B` reinstated as
  the warning/pending UI signal only** (not decorative). Logo, typography and the soft-glow aesthetic
  unchanged from v2.0.
- **v2.0 — 14 June 2026 — "Beacon".** New WS-monogram roundel logo; palette moved to deep blue +
  azure/cyan on dark navy; typography moved to DM Sans + Space Mono; aesthetic reversed from hard
  Bauhaus to premium soft-glow/gradient; assets centralised in the `wickham-brand` repo + jsDelivr CDN.
  **Supersedes v1.0.**
- **v1.0 — 26 April 2026 — "Kiosk".** Cobalt + signal orange, Archivo Black `WICKHAM SERVICES.`
  wordmark, Bauhaus hard edges. *Retired.*

*Wickham Services Ltd · Brand Design System · v2.1 · 14.06.26*
