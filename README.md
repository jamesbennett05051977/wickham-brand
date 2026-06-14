# wickham-brand

Single source of truth for the **Wickham Services** brand — the Beacon "WS" logo and every
production asset (web, email, social). Built from SVG masters; served to all projects over the
free **jsDelivr** CDN.

## Use the assets in any project (jsDelivr CDN)

Base URL:
```
https://cdn.jsdelivr.net/gh/jamesbennett05051977/wickham-brand@main/<path>
```

Common files:
| Asset | URL |
|---|---|
| Favicon (.ico) | `…@main/web/favicon.ico` |
| Favicon (.svg) | `…@main/web/favicon.svg` |
| Apple touch icon | `…@main/web/apple-touch-icon.png` |
| Header logo (light bg) | `…@main/web/lockup-light.png` (`@2x` available) |
| Header logo (dark bg) | `…@main/web/lockup-dark.png` (`@2x` available) |
| Email signature card | `…@main/email/signature-card.png` |
| Social avatar | `…@main/social/avatar-512.png` |
| Social share image | `…@main/social/og-image-1200x630.png` |

Example `<head>`:
```html
<link rel="icon" href="https://cdn.jsdelivr.net/gh/jamesbennett05051977/wickham-brand@main/web/favicon.ico" sizes="any">
<link rel="icon" href="https://cdn.jsdelivr.net/gh/jamesbennett05051977/wickham-brand@main/web/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="https://cdn.jsdelivr.net/gh/jamesbennett05051977/wickham-brand@main/web/apple-touch-icon.png">
<meta name="theme-color" content="#0A0F1C">
<meta property="og:image" content="https://cdn.jsdelivr.net/gh/jamesbennett05051977/wickham-brand@main/social/og-image-1200x630.png">
```
See [`web/head-snippet.html`](web/head-snippet.html) for the full block.

> **Pin a version for production.** `@main` reflects the latest commit but jsDelivr caches it
> for ~7 days. For stable, never-changing URLs, tag a release and use it instead:
> `git tag v1.0.0 && git push --tags` → then reference `…/wickham-brand@v1.0.0/…` (cached
> permanently). Bump the tag when the logo changes.

## Editing the logo
1. Edit the masters in [`svg/`](svg/).
2. Regenerate every raster: `npm install` then `npm run render` (or `node scripts/render-brand.mjs`).
3. Commit + push. Tag a new version if it's a real brand change.

## What's inside
See [`BRAND-README.md`](BRAND-README.md) for the colour palette, the full file list, and
per-channel usage notes (web / email / social).
