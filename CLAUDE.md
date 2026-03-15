# Drawing Coach

A web app to help users improve their drawing on paper — not a digital drawing tool. It provides prompts, guides, tips, and timed exercises.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **No database** — all content is static data in `lib/data.ts`

## Deployment

- Repo: https://github.com/maiksol/drawing-coach
- Deployed via **Vercel** (auto-deploys on push to `main`)
- Run locally: `npm run dev` → http://localhost:3000

## Project structure

```
app/
  layout.tsx       # Root layout, metadata
  page.tsx         # Main page with tab navigation
components/
  DailyChallenge.tsx   # One rotating prompt per day (based on day of year)
  Prompts.tsx          # All prompts with difficulty/category filters
  Guides.tsx           # Step-by-step guides, opens into a detail view
  Tips.tsx             # Technique tips grouped by category, accordion style
  TimedPractice.tsx    # Random prompt + countdown timer (30s–10min)
lib/
  data.ts          # All content: prompts, guides, tips + getDailyPrompt()
```

## Content

All content lives in `lib/data.ts`. To add more:

- **Prompts** — add to the `prompts` array. Fields: `text`, `category`, `difficulty`, `tips[]`
- **Guides** — add to the `guides` array. Fields: `title`, `difficulty`, `timeEstimate`, `intro`, `steps[]`
- **Tips** — add to the `tips` array. Fields: `title`, `category`, `body`, `keyPoints[]`

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Lint
```
