import { defineConfig } from 'drizzle-kit';

import { DATABASE_FILE } from './src/platforms/node.ts';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/sqlite-schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: DATABASE_FILE,
  },
});
