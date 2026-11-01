# Stack

- Hono as the main (and only) framework
- SQLite as the database, with Drizzle as the ORM

# Files

- Entrypoint: `src/index.ts`
- Platform-specific runners (you don't touch those, only read if required): `src/platforms/*.ts`

## Database

SQLite file lives at `backend/backend.db`, it's ignored by Git so it can be used for local testing.

Drizzle migration files live in `backend/drizzle/`.

# Commands

Run from the repository root.

- Running: `npm run -w backend start`
- Seeding dev data: `npm run -w backend seed`
- After modifying Drizzle schemas: `npm run -w backend drizzle:generate`, then `npm run -w backend drizzle:migrate`

# API design

@doc/api-design.md
