# Wickham Services — Brand Assets

Production-ready logo set built from the **Beacon "WS" monogram** (dark navy roundel,
gradient chevron-W + upright white S, three cyan beacon dots).

## Colours
| Token | Hex | Use |
|---|---|---|
| Primary deep blue | `#0E4F8B` | wordmark on light, primary brand colour |
| Azure | `#16A6E8` / `#3B82F6` | W gradient start, accents |
| Cyan | `#06B6D4` / `#22D3EE` | beacon dots, links, taglines |
| Card navy (bg) | `#0A0F1C` | dark backgrounds, theme-color |
| Disc navy | `#111827` | badge disc |
| Wordmark light | `#F8FAFC` | wordmark on dark |

Tagline: **Responsive · Visible · Dependable**

## Folder layout
```
brand/
  svg/                         vector masters (edit these, then re-render)
    wickham-mark.svg           the badge alone (any background)
    wickham-lockup-dark.svg    badge + wordmark, white text (dark bg)
    wickham-lockup-light.svg   badge + wordmark, blue text (light bg)
    wickham-og.svg             1200x630 social share card
    wickham-signature-card.svg email signature card
  web/                         favicons, app icons, site logos, manifest, head snippet
  email/                       signature card + small inline mark
  social/                      square avatars + OG share image
```

## Web — what to deploy & how
Copy the contents of `web/` to your site root and paste `web/head-snippet.html` into `<head>`.

| File | Purpose |
|---|---|
| `favicon.ico` | classic favicon (16/32/48 multi-res) |
| `favicon.svg` | crisp vector favicon (modern browsers) |
| `favicon-16/32/48.png` | individual PNG fallbacks |
| `apple-touch-icon.png` (180) | iOS home-screen icon |
| `android-chrome-192/512.png` | Android / PWA icons (referenced by manifest) |
| `site.webmanifest` | PWA manifest (theme `#0A0F1C`) |
| `lockup-light.png` / `@2x` | site header logo on white |
| `lockup-dark.png` / `@2x` | site header logo on dark |
| `mark-96/192.png` | square mark for tight spaces |

## Email
- `email/signature-card.png` — the full signature card. **Currently hosted at**
  `https://wickhamservices.co.uk/wp-content/uploads/2026/06/email-signature-card.png`
  and wired into James's Outlook signature. Re-upload with the same filename to update.
- `email/mark-120.png` (+`@2x`) — small badge for inline email use.

## Social media
| File | Use |
|---|---|
| `social/avatar-512.png` | profile picture (LinkedIn, Facebook, X, etc.) |
| `social/avatar-400.png` | smaller profile picture |
| `social/og-image-1200x630.png` | link-share preview (Open Graph / Twitter card) |

Profile pics: most platforms crop to a circle — the badge is already circular, so it
sits perfectly. Upload `avatar-512.png`.

## Regenerating
All rasters are produced from the SVG masters. After editing anything in `svg/`:
```
node scripts/render-brand.mjs
```
Requires `@resvg/resvg-js` and `png-to-ico` (already installed under `scripts/`).
