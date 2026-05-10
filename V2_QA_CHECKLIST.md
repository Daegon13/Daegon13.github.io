# V2 QA checklist — Marin.dev

Fecha de revisión: 2026-05-10  
Patch: 14 — QA final, responsive y checklist de publicación

## Estado general

La V2 queda lista para presentarse comercialmente. El build de producción pasa, las rutas principales responden con `200`, los enlaces internos revisados existen, las imágenes referenciadas desde el HTML generado existen y las imágenes renderizadas tienen `alt`.

## Checks realizados

### Build y generación estática

- [x] `npm run build` ejecutado correctamente.
- [x] Astro generó 14 páginas estáticas en `dist/`.
- [x] Sitemap generado en `dist/sitemap-index.xml`.

### Rutas revisadas

- [x] `/` — responde `200`, con título y description comerciales.
- [x] `/proyectos` — responde `200`, con título y description específicos.
- [x] `/proyectos/brasa-23` — responde `200`, con metadata de caso.
- [x] `/proyectos/vetcare` — responde `200`, con metadata de caso.
- [x] `/servicios` — responde `200`, con metadata de servicios productizados.
- [x] `/sobre-mi` — responde `200`, con metadata personal/comercial.
- [x] `/contacto` — responde `200`, con formulario guiado y metadata específica.

### Responsive revisado en breakpoints mentales

- [x] Mobile pequeño: las secciones usan grids de una columna, CTAs full-width cuando corresponde y `overflow-x-hidden` en el shell global.
- [x] Mobile grande: cards y bloques mantienen padding legible y jerarquía clara.
- [x] Tablet: grids pasan a dos columnas solo en breakpoints `md`/`lg`, evitando compresión temprana.
- [x] Desktop: el hero, portfolios, servicios y CTA mantienen ancho máximo controlado mediante `main`/`Container`.

### Problemas comunes

- [x] Overflow horizontal: no se detectaron patrones críticos; el shell global bloquea overflow accidental.
- [x] Contraste: UI principal usa fondo oscuro con texto `slate-50`, `slate-100`, `muted-soft` y acentos visibles.
- [x] CTAs: los CTA principales usan gradiente/contraste y textos accionables.
- [x] Links internos: verificados en el HTML generado sin enlaces internos rotos.
- [x] Imágenes: verificación del HTML generado sin imágenes internas faltantes.
- [x] Cards: estructura responsive basada en grids y cards con padding consistente.
- [x] Contenido duplicado: no se detectaron rutas duplicadas visibles en el build.

### Accesibilidad básica

- [x] Skip link disponible para saltar al contenido principal.
- [x] Foco visible definido en estilos base y reforzado en controles principales.
- [x] Formulario de contacto con `label for` asociado a inputs/selects/textarea.
- [x] Imágenes renderizadas con atributo `alt`.
- [x] Elementos decorativos relevantes usan `aria-hidden` cuando corresponde.

### SEO y share

- [x] Titles y descriptions no genéricos en rutas principales.
- [x] `public/og-default.png` existe y pesa 17 KB aprox.
- [x] `og:image` absoluto generado desde `SITE_URL`/`Astro.site`.
- [x] Canonicals normalizados con trailing slash para rutas estáticas de directorio.
- [x] `robots.txt` apunta al sitemap público.

## Fixes aplicados en este patch

- Se normalizó la generación de canonical URLs en `BaseLayout.astro` para que las rutas estáticas de directorio usen trailing slash de forma consistente, incluso cuando una página pasa `url` sin slash final.
- Se creó este checklist de QA final para dejar evidencia de build, rutas revisadas, accesibilidad básica, SEO/share y pendientes.

## Pendientes no bloqueantes

- Agregar screenshots reales por breakpoint con Playwright/Lighthouse en un entorno que incluya navegador headless instalado.
- Ejecutar Lighthouse/Pagespeed tras deploy para medir performance real desde GitHub Pages.
- Crear OG images PNG específicas por caso; hoy varios casos usan SVG como preview social, lo cual puede no ser ideal en todas las plataformas.
- Corregir tooling de lint en un patch separado: `npm run lint` falla porque ESLint 9 requiere `eslint.config.js` y el repo no lo tiene configurado aún.
- Revisar manualmente la web deployada en dispositivos reales antes de usarla en campañas o prospección activa.

## Recomendación de publicación

Publicar la V2 si el deploy de GitHub Pages replica el build local. Después de publicar, revisar manualmente WhatsApp, Instagram, GitHub/LinkedIn y al menos dos demos desde un celular real.
