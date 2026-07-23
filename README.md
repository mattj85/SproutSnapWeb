# SproutSnap — promotional site

A single-page marketing site for the **SproutSnap** iOS app (the plant-propagation
photo-timeline app in `../SproutSnap`). Built with **Vite + React + reactstrap**
(Bootstrap 5), with a custom design system layered on top.

## Run it

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

> This machine's `node`/`npm` live under Homebrew. If the shell can't find them,
> use the absolute paths: `/opt/homebrew/bin/npm run dev`.

## Design

- **Thesis:** the hero *is* the app's core interaction — a draggable **Day 1 → today
  growth comparison slider** wiping between two hand-drawn SVG "cutting-in-a-jar"
  scenes (`src/components/PlantScenes.jsx`, `CompareSlider.jsx`).
- **Signature motif:** the camera-capture **corner brackets** from the real app icon,
  reused via the `.frame` class around the hero and download art.
- **Palette:** greenhouse light `#F4F7EF`, forest ink `#14231A`, brand sprout `#3D8F59`
  / deep `#216642`, new-growth chartreuse `#B7E36A`, water aqua `#7FD8D0`.
- **Type:** *Fraunces* (display) + *Figtree* (body), loaded from Google Fonts.
- All design tokens and component styles live in `src/index.css`.

## Before you ship

- **App Store links are placeholders.** Every download button points at `#download`.
  Search for `AppStoreBadge` (in `src/App.jsx`) and `href="#download"` and swap in the
  real App Store URL once the listing is live.
- The app icon is copied from the iOS project into `src/assets/app-icon.png` and
  `public/app-icon.png` (favicon). Re-copy if the icon changes.
- Pro pricing is shown as "One-time purchase · no subscription" (no hard number),
  matching the in-app paywall, which reads the live StoreKit price.
