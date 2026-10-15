# Thirukkumaran R — Personal Portfolio

A single-page editorial portfolio built with Next.js (App Router), TypeScript and Tailwind CSS.
Content is driven entirely by two data files, so the site can be updated without touching components.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm start   # production build
npm run typecheck            # tsc --noEmit
npm run lint                 # next lint
```

## Where to edit things

| What | File |
| --- | --- |
| Email, phone, GitHub/LinkedIn URLs, availability dot, profile photo, domain | `data/site.config.ts` |
| All page copy: intro, experience, education, certifications, projects, explorations, interests, principles, stack | `data/content.ts` |
| Placeholder images | `public/images/` |
| Section order | `app/page.tsx` |
| Colours, fonts, column width | `tailwind.config.ts` |

Any URL left as an empty string `""` is hidden across the site instead of rendering a broken link.

## Still to replace

1. **Images** in `public/images/` — keep the same filenames, or update the paths in `data/content.ts`:
   - `profile.svg` → your photo, square crop
   - `project-doormile.svg`, `project-miler.svg`, `project-scrolla.svg`, `project-trip-planner.svg`, `project-ponkali.svg` → real screenshots, ~16:10
   - `beyond-1/2/3.svg` → personal photos, ~4:5
   - after swapping in a real screenshot, set `imageIsPlaceholder: false` on that project so the "Placeholder" badge disappears
2. **`site.url`** in `data/site.config.ts` — set it once you have a domain (used for metadata only).
3. **`site.phone`** — empty by design. Set it only if you want your number on a public page.
4. Once real raster images are in, you can set `images.unoptimized` to `false` in `next.config.mjs` if you deploy somewhere that runs Next.js image optimisation.

## Decisions worth knowing

- **Sutherland and Webilicious are not shown.** Neither appears on your resume, and Sutherland (May 2024 – Feb 2025) overlaps Fuzionest (Jan 2024 – Mar 2025). Both are kept as commented-out entries at the bottom of the `experience` array in `data/content.ts` — uncomment to restore.
- **Education shows CGPA 7.7** (from the resume), not the 78% figure from earlier notes.
- Project status lines are deliberately factual (`In production · Nearle Technologies`, `Building independently · founder`, `Client work · Fuzionest`) — no revenue, user-count or launch claims anywhere.
- `project-diary.svg` is unused: the Diary App now sits in the compact "Also built" list. Promote it back into `projects` in `data/content.ts` if you want a full preview for it.
