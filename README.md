# Posture Perfect

Astro 5 + React islands + Tailwind CSS v4 + Framer Motion.

## Start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Structure

```
src/
  components/
    Header.astro, Footer.astro     static, no JS
    react/                         React islands (Framer Motion lives here)
  data/site.ts                     all site text, nav, services, FAQs
  layouts/BaseLayout.astro         SEO head, header, footer
  lib/motion.ts                    shared animation presets
  pages/                           index, about, contact, 404
  styles/global.css                Tailwind + design tokens (@theme)
```

## Island rules

- Static first. Only use React when something needs state or animation.
- `client:visible` for below-the-fold islands, `client:load` for above-the-fold, `client:media` for mobile-only.

## Before launch

- Change `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`.
- Connect `ContactForm.tsx` to a real endpoint.

## Photos (do this once)

```bash
bash scripts/fetch-old-images.sh          # team, clinic and treatment photos from the old site
bash scripts/install-stock-photos.sh      # Shutterstock photos, see STOCK-PHOTOS.md
```

All photo paths live in `src/data/images.ts`. Text lives in `src/data/site.ts` and `src/data/content.ts`.
