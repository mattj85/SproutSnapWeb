# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing site for **SproutSnap**, an iOS plant-propagation photo-timeline app. The companion iOS project lives at `../SproutSnap`. This repo is content + custom design only — there is no backend, no routing, no data layer.

## Commands

```bash
npm install
npm run dev      # Vite dev server on http://localhost:5180 (does not auto-open)
npm run build    # production build -> dist/
npm run preview  # serve the production build locally
```

There are no tests, linters, or formatters configured. If `node`/`npm` aren't on PATH, they're under Homebrew: `/opt/homebrew/bin/npm`.

## Architecture

- **`src/main.jsx`** — entry point. Imports Bootstrap CSS, then `index.css` (order matters: our tokens override Bootstrap). Mounts `<App>` into `#root`.
- **`src/App.jsx`** — the entire page. All page copy lives here as top-level `const` arrays (`PLANTS`, `FEATURES`, `STEPS`, `PRO`) that map into sections. Edit these arrays to change site content. Sections are anchor-linked (`#features`, `#how`, `#pro`, `#download`, `#top`).
- **`src/index.css`** (~1100 lines) — the design system. All design tokens are CSS custom properties in `:root` (colors, fonts, shadows, `--maxw`). Every component is styled by className here; components carry almost no inline styles. This is the primary file for any visual change.
- **`src/components/`**
  - `CompareSlider.jsx` — the hero centerpiece: a draggable/arrow-key Day 1 → today reveal slider. Tracks position as a `--pos` CSS var; wipes between two SVG scenes.
  - `PlantScenes.jsx` — hand-drawn inline-SVG "cutting-in-a-jar" scenes (`DayOneScene`, `DayLaterScene`) shown on either side of the slider.
  - `Icons.jsx` — all icons as inline-SVG functional components. Add new icons here as named exports; they take spread props (`(p) => <svg {...p}>`).
  - `SiteNav.jsx` — sticky header; toggles `.scrolled` on scroll and `.mobile-open` for the mobile menu.
- **`src/useReveal.js`** — a hook `App` calls once. Uses IntersectionObserver to add `.in` to every `.reveal` element as it enters the viewport (scroll-in animations). Add the `reveal` class to any element to opt it into the animation.

## Design system essentials

Read `README.md` for the full design thesis. Key facts when making changes:

- **Palette** (CSS vars): `--sprout` `#3d8f59`, `--deep` `#216642`, `--chartreuse` `#b7e36a`, `--aqua` `#7fd8d0`, `--ink` `#14231a`, `--light` `#f4f7ef`. Use these vars, not hex literals.
- **Type:** *Fraunces* (`--font-display`) + *Figtree* (`--font-body`), loaded from Google Fonts in `index.html`.
- **Signature motif:** camera-capture corner brackets via the `.frame` class + a `.frame-corners` span, wrapping the hero slider and the download icon.

## Before you ship (from README)

- **App Store links are placeholders.** Every download button (`AppStoreBadge` in `App.jsx`, and `href="#download"` links) points at the `#download` anchor. Swap in the real App Store URL once the listing is live.
- The app icon is duplicated: `src/assets/app-icon.png` (imported by components) and `public/app-icon.png` (favicon). Re-copy both if the icon changes.
- Pro pricing is intentionally shown as "One-time purchase · no subscription" with no hard number, matching the in-app StoreKit-driven paywall.
