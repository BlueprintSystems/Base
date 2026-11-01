# Stack

- Hono as the main (and only) framework
- SQLite as the database, with Drizzle as the ORM

# Files

- Entrypoint: `src/index.ts`
- Platform-specific runners (you don't touch those, only read if required): `src/platforms/*.ts`

# Commands

- Running: `npm run -w backend start`
- Seeding dev data: `npm run -w backend seed`
- On modifying Drizzle schemas: `npm run -w backend drizzle:generate`, then `npm run -w backend drizzle:migrate`

# API design

@doc/api-design.md
