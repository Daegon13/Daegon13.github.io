# Marin.dev — Portfolio Astro + Tailwind

Landing/portfolio estático de Marin.dev para presentar demos web, landings de conversión y sistemas simples orientados a consultas, reservas o ventas.

## Stack

- **Astro 5** como generador estático.
- **Tailwind CSS 3** para estilos.
- **Astro Content Collections + MDX** para proyectos en `src/content/proyectos`.
- **GitHub Pages** para deploy mediante GitHub Actions.

## Scripts

```bash
npm run dev      # servidor local de desarrollo
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build local
npm run format   # formatear el proyecto con Prettier
npm run lint     # ejecutar ESLint si la configuración está disponible
```

## Estructura principal

```txt
src/components/          Componentes Astro reutilizables
src/content/proyectos/   Casos y demos en MDX
src/data/                Datos para secciones comerciales
src/layouts/             Layout base con SEO global
src/lib/contact.ts       Contacto, redes y helpers de WhatsApp
src/pages/               Rutas estáticas del sitio
public/                  Assets públicos, robots y OG image
.github/workflows/       Deploy a GitHub Pages
```

## Cómo agregar un proyecto

1. Crear un archivo `.mdx` dentro de `src/content/proyectos`.
2. Completar el frontmatter según el esquema de `src/content/config.ts`.
3. Priorizar campos comerciales antes que técnicos: `tipo`, `sector`, `resumen`, `problema`, `solucion`, `features`, `impacto`, `status`, `featured` y `priority`.
4. Si el proyecto tiene demo pública, agregar `demoUrl`. Si tiene repositorio público, agregar `repoUrl`.
5. Ejecutar `npm run build` para validar el schema y las rutas.

No inventar métricas: si no hay resultado medible, usar un impacto cualitativo.

## SEO y sharing

- El SEO base vive en `src/layouts/BaseLayout.astro`.
- Cada página debe pasar `title`, `description`, `url` e `image` cuando necesite valores específicos.
- La imagen Open Graph por defecto es `public/og-default.png`.
- `astro.config.mjs` define `site: 'https://daegon13.github.io'` para canonical y sitemap.
- `public/robots.txt` apunta al sitemap generado por `@astrojs/sitemap`.

## Deploy

El deploy de producción se realiza con un único workflow:

```txt
.github/workflows/deploy.yml
```

El workflow corre en pushes a `main`, instala dependencias con `npm ci`, ejecuta `npm run build`, sube `dist/` como artifact y publica en GitHub Pages.

## Mantenimiento

- No versionar carpetas generadas como `.astro/`, `dist/` o `node_modules/`.
- Mantener datos de contacto centralizados en `src/lib/contact.ts`.
- Antes de abrir un PR, ejecutar al menos `npm run build`.
