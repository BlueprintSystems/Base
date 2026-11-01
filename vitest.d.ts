import 'vitest';

declare module 'vitest' {
  interface Matchers<R, T> {
    // Acá se declaran todas las funciones expect(...).toBe* específicas del proyecto
    // Como es global, algunos tipos van a tener que exportarse desde el frontend y el backend (sólo los tipos)
    // R es el tipo que devuelven todas las pruebas
    // T se usa cuando se espera que un argumento tenga el mismo tipo que lo que está adentro del expect(...)
  }
}
