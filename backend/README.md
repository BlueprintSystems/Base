# Soporte de plataformas

Actualmente, se soportan las siguientes plataformas:

- Node.js + SQLite (via `node:sqlite`)

El proyecto tiene cierta preparación para poder migrarse entre plataformas.

Se deben renombrar los imports a `platforms/node.ts` y `db/sqlite-schema.ts`, y luego modificar la configuración de Drizzle (`drizzle.config.ts`) para que coincida con la de la base de datos esperada. Es buena idea hacer bastante _testing_ (sin datos, con _seeders_ si hace falta) antes de entregar el producto para verificar su funcionamiento.

Migrar la base de datos a otro servicio **si ya tiene datos** es un quilombo: Hay que exportarla, transformar datos si hace falta (ej: _schemas_ que no coinciden) y cargar todo en la nueva. **Si NO tiene datos** es sencillo: Borrar la carpeta `drizzle/`, hacer la migración del resto y generar la migración de Drizzle para la nueva DB.
