# InkWork — Daily Drawing Challenges

A web app to help users improve their **fineliner/pen drawing on paper**. It presents daily drawing challenges with reference images, tips, and technique guidance. Not a digital drawing tool.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Fonts:** Geist Sans (UI) + Playfair Display (headings/serif accents)
- **No database** — all content is static data inside `app/page.tsx`

## Deployment

- Repo: https://github.com/maiksol/drawing-coach
- Deployed via **Vercel** (auto-deploys on push to `main`)
- Run locally: `npm run dev` → http://localhost:3000

## Project structure

```
app/
  layout.tsx     # Root layout — fonts (Geist + Playfair Display), metadata
  globals.css    # CSS variables: --ink, --paper, --ink-muted, --accent, etc.
  page.tsx       # Entire app: challenge data, UI, icons, helper components
```

All challenges and UI live in a single `app/page.tsx`. There are no separate component files or data files.

## Content

All challenges are in the `challenges` array in `app/page.tsx`. Each entry has:

```ts
{
  prompt: string;           // Challenge title
  description: string;      // 1–2 sentence brief
  technique: string;        // Focus technique (e.g. "Cross-hatching")
  difficulty: 1 | 2 | 3;   // 1 = Beginner, 2 = Intermediate, 3 = Advanced
  difficultyLabel: string;  // Human-readable label
  time: string;             // Estimated time (e.g. "30–45 min")
  tips: string[];           // 5 technique tips specific to the challenge
  imageUrl: string;         // Unsplash reference image URL
}
```

The daily challenge rotates based on day of year (`getDailyIndex()`). A shuffle button lets users get a random different challenge.

## Design tokens (globals.css)

| Variable | Value | Use |
|---|---|---|
| `--background` / `--paper` | `#f7f4ef` | Warm off-white background |
| `--ink` | `#111111` | Primary text and borders |
| `--ink-muted` | `#666` | Secondary text |
| `--ink-faint` | `#11111118` | Subtle dividers |
| `--accent` | `#c0451c` | Unused currently — available for highlights |

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Lint
```
