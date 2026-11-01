# Proyecto base

Acá iría la descripción del sistema

# Setup

Luego de clonar el repositorio, ejecute:

```sh
npm ci
npx skills experimental_install
```

# Base de datos

Cada vez que se cambie el esquema de la base de datos, ejecute:

```
# Genera archivos de migración
npm run -w backend drizzle:generate
# Migra la base de datos en uso (!!)
npx run -w backend drizzle:migrate
```

Recuerde agregar la carpeta `backend/drizzle/` al commit.

# Skills

Se utilizan:

- `saadeghi/daisyui` para armar la interfaz gráfica
- `Bowuigi/Skills@bow-feature-plan` para armar planes para implementar funcionalidades
- `mattpocock/skills@grill-me` y `mattpocock/skills@grilling` como fase de interrogatorio para armar planes
- `mattpocock/skills@writing-for-agents` y `aminblg/simpleenglish` para armar skills, planes y documentación para agentes nueva
