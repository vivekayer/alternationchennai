# AlterNation Chennai — Claude Notes

## Tech Stack
- Next.js 16 / React 19 / TypeScript / Tailwind CSS
- Hosted on Vercel

## Running Locally
```
npm run dev
```
Then open http://localhost:3000

## Solution Structure

```
/app
  page.tsx                          Homepage
  layout.tsx                        Root layout (Header + Footer)
  globals.css                       Global styles (forced black background)
  sitemap.ts                        SEO sitemap
  components/
    Header.tsx                      Nav with desktop dropdown + mobile hamburger menu
    Footer.tsx                      Social links (Instagram, YouTube, Facebook, Linktree)
    Logo.tsx                        Centred logo image
  data/
    shows.ts                        All show data (knownShows record, Show type)
    bands.ts                        Band data + slugify() utility
  shows/
    page.tsx                        Shows listing (hardcoded array linking to slugs)
    [slug]/page.tsx                 Dynamic show detail page (SSG via generateStaticParams)
  jazz-bands/
    page.tsx                        Jazz bands listing
    [slug]/page.tsx                 Dynamic band detail page
  about/page.tsx
  jazz-jams/page.tsx
  jazz-festival/page.tsx
  weekly-jazz-workshops/page.tsx
  many-things-academy/page.tsx
  tuesday-jazzers-collective/page.tsx

/public
  logo.jpg                          Main logo
  bands/                            Show/band images (jpg + webp)
  an_jazz_festival.jpg              Jazz Festival poster
  an_jazz_day_2026_web.jpg          Jazz Day 2026 poster (web-optimised, 1200px)
```

## Key Conventions
- Dark theme only — black background (`#000000`), white/gray-300 text, blue-400 links
- Show data lives in `app/data/shows.ts` — add new shows there, then add slug to `app/shows/page.tsx`
- Images: use Next.js `<Image>` component; store in `/public` or `/public/bands/`
- Prefer `.webp` for new images; resize to max 1200px wide for web use
- Band member lists and schedule items use `{ type: 'band', title, members[] }` show description blocks

## TODO

### SEO
- [ ] Add dynamic `/shows/[slug]` pages to `sitemap.ts`

### Accessibility
- [ ] Make desktop nav dropdown keyboard accessible (currently CSS `:group-hover` only)

### UX
- [ ] Add a custom `not-found.tsx` (404) page

### Performance
- [ ] Convert remaining band images from `.jpg` to `.webp` (05–07 already done)
