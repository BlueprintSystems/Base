## Code structure

- `backend/`: Hono API on Node.js with SQLite and Drizzle ORM.
- `frontend/`: Preact app with Vite, Tailwind CSS, and daisyUI.

## Commands

Run from the repository root.

- Install dependencies: `npm ci`
- Install skills: `npx skills experimental_install`
- Start backend: `npm run -w backend start`
- Seed database: `npm run -w backend seed`
- Generate Drizzle migration: `npm run -w backend drizzle:generate`
- Apply Drizzle migration: `npm run -w backend drizzle:migrate`
- Build frontend: `npm run -w frontend build`
- Start frontend dev server: `npm run -w frontend dev`
- Verification checklist: `npm run fmt:check`/`npm run fmt`, `npm run lint`, `npm run test`

## Database

SQLite file lives at `backend/backend.db`, it's ignored by Git so it can be used for local testing.

Drizzle migration files live in `backend/drizzle/`.
