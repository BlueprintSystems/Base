// See https://hono.dev/docs/helpers/testing

import { testClient } from 'hono/testing';
import { describe, it, expect } from 'vitest';

import { app } from './routes.ts';

describe('Healthcheck', async () => {
  const client = testClient(app);
  const res = await client.health.$get();

  it('should succeed (200)', () => {
    expect(res.status).toBe(200);
  });

  it('should return "up"', async () => {
    expect(await res.text()).toBe('up');
  });
});

// Meant to be removed as soon as actual work is started
describe('Hello', async () => {
  const client = testClient(app);
  const res = await client.hello.$get();

  it('should succeed (200)', () => {
    expect(res.status).toBe(200);
  });

  it('should wave back', async () => {
    expect(await res.json()).toEqual({ message: 'Hello world!' });
  });
});
