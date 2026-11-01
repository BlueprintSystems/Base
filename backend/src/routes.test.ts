// See https://hono.dev/docs/helpers/testing

import { testClient } from 'hono/testing';
import { describe, it, expect } from 'vitest';

import { app } from './routes.ts';

describe('healthcheck', async () => {
  const client = testClient(app);
  const res = await client.health.$get();

  it('should succeed (200)', () => {
    expect.assertions(1);
    expect(res.status).toBe(200);
  });

  it('should return "up"', async () => {
    expect.assertions(1);
    await expect(res.text()).resolves.toBe('up');
  });
});

// Meant to be removed as soon as actual work is started
describe('hello', async () => {
  const client = testClient(app);
  const res = await client.hello.$get();

  it('should succeed (200)', () => {
    expect.assertions(1);
    expect(res.status).toBe(200);
  });

  it('should wave back', async () => {
    expect.assertions(1);
    await expect(res.json()).resolves.toStrictEqual({ message: 'Hello world!' });
  });
});
