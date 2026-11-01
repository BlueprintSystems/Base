## Code structure

Each project has an `AGENTS.md` with extra information, including commands to run.

- `backend/`: Hono API on Node.js with SQLite and Drizzle ORM
- `frontend/`: Preact app with Vite, TailwindCSS, and DaisyUI

## Commands

Run from the repository root.

- Install dependencies: `npm ci`
- Install skills: `npx skills experimental_install`
- Verification checklist: `npm run fmt:check`/`npm run fmt`, `npm run lint`, `npm run test`

## Conventions

If data manipulation is required, the clearest way is usually using methods of the appropiate class (`Array`, `Iterator`, etc), as well as `for..of` (preferred over `forEach`). Avoid numeric for loops (`for (let i = ...; i < ...; i++) {...}`) as much as possible.
