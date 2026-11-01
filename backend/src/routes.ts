import { Hono } from 'hono';

// Las rutas se declaran así para que las pruebas tengan bien los tipos.
// No se debe separar `new Hono()` de las mismas rutas
export const app = new Hono()
  .get('/health', c => c.text('up'))
  .get('/hello', c => c.json({ message: 'Hello world!' }));
