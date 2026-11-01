import { default as process } from 'node:process';

import { serve } from '@hono/node-server';
import { drizzle } from 'drizzle-orm/node-sqlite';
import type { Env, Hono, Schema } from 'hono';

//// Hono server

export function runServer<E extends Env, S extends Schema, P extends string>({
  app,
  port,
}: {
  app: Hono<E, S, P>;
  port: number;
}): void {
  const server = serve(
    {
      fetch: app.fetch,
      port,
    },
    info => {
      console.log(`Server is running on http://localhost:${info.port}`);
    },
  );

  // Graceful shutdown

  process.on('SIGINT', () => {
    server.close();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    server.close(err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      process.exit(0);
    });
  });
}

//// Database

export const DATABASE_FILE = 'backend.db';

// oxlint-disable-next-line typescript/explicit-function-return-type typescript/explicit-module-boundary-types
export function database() {
  return drizzle({
    connection: {
      allowUnknownNamedParameters: false,
      defensive: true,
      enableForeignKeyConstraints: true,
      path: DATABASE_FILE,
    },
  });
}
