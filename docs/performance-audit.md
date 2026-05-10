# Performance audit — Marin.dev

Fecha del audit: 2026-05-10  
Objetivo del patch: diagnosticar oportunidades de performance y aplicar solo mejoras pequeñas de bajo riesgo, sin rediseñar ni quitar contenido.

## Estado actual del build

Comando ejecutado:

```bash
npm run build
```

Resultado: **pasa correctamente**.

Resumen observado:

- Astro genera salida **estática** (`output: "static"`).
- Directorio de salida: `dist/`.
- Páginas generadas: **14**.
- Tamaño total aproximado de `dist/`: **964 KB**.
- No se generan bundles JavaScript grandes; solo hay scripts inline pequeños para navegación móvil y formulario de contacto.

Warnings no bloqueantes durante build:

- `npm warn Unknown env config "http-proxy"`.
- `baseline-browser-mapping` desactualizado.
- `Browserslist/caniuse-lite` desactualizado.

Estos warnings no rompen el build, pero conviene atenderlos en un patch de mantenimiento de tooling.

## Archivos más grandes en `dist/`

|   Tamaño aprox. | Archivo                                        |
| --------------: | ---------------------------------------------- |
|        167.4 KB | `dist/index.html`                              |
|         99.3 KB | `dist/servicios/index.html`                    |
|         75.1 KB | `dist/logo.png`                                |
|         54.8 KB | `dist/proyectos/index.html`                    |
|         52.4 KB | `dist/_astro/contacto.BMWSB7qg.css`            |
|         46.4 KB | `dist/sobre-mi/index.html`                     |
|         31.9 KB | `dist/contacto/index.html`                     |
|         30.0 KB | `dist/proyectos/smart-stock/index.html`        |
|         28.8 KB | `dist/proyectos/agencia_ariel/index.html`      |
|         28.8 KB | `dist/proyectos/vetcare/index.html`            |
|         28.7 KB | `dist/proyectos/noir-barber-studio/index.html` |
|         28.5 KB | `dist/proyectos/brasa-23/index.html`           |
|         28.4 KB | `dist/proyectos/cristal-sagrado/index.html`    |
|         28.1 KB | `dist/proyectos/servicio-de-tarot/index.html`  |
|         16.8 KB | `dist/og-default.png`                          |
| 4.4 KB cada uno | `dist/galeria/*.svg`                           |

Estimación gzip relevante:

- `dist/index.html`: ~19.4 KB gzip.
- `dist/_astro/contacto.BMWSB7qg.css`: ~9.7 KB gzip.
- `dist/logo.png`: ~50.1 KB gzip.
- `dist/og-default.png`: ~13.7 KB gzip.

## Assets revisados

### `public/`

| Archivo                 |      Tamaño | Observación                                                                                                                               |
| ----------------------- | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `public/logo.png`       |     75.1 KB | Es un JPEG de 800×800 guardado con extensión `.png`; se renderiza como logo de 28×28 px. Es el asset servido más grande del sitio actual. |
| `public/og-default.png` |     16.8 KB | PNG 1200×630 razonable para Open Graph.                                                                                                   |
| `public/galeria/*.svg`  | ~4.4 KB c/u | Miniaturas SVG livianas para portfolio. Buen candidato para mantenerse en `public/` si se quiere cachear y enlazar por ruta estable.      |
| `public/favicon.svg`    |       224 B | Correcto.                                                                                                                                 |

### `src/assets/`

No se encontraron archivos en `src/assets/`.

### `src/content/proyectos/images/`

| Archivo                                            | Tamaño | Observación                                                                                                                                                                                                                                |
| -------------------------------------------------- | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/content/proyectos/images/cristal_sagrado.png` | 1.9 MB | Imagen local grande, 1871×942. No aparece referenciada por el contenido ni por componentes actuales. Al estar dentro de `src/content`, no llega al `dist` actual, pero sí infla el repo y puede confundir futuras migraciones de imágenes. |

## Hallazgos principales

1. **El logo es el asset real más caro del sitio publicado.** `public/logo.png` pesa 75.1 KB, internamente parece JPEG y se muestra a 28×28 px en el nav. El coste es desproporcionado para el uso.
2. **La home tiene HTML grande.** `dist/index.html` pesa 167.4 KB sin comprimir. No es crítico con gzip, pero indica mucho HTML repetido por secciones, cards, iconos inline y componentes visuales estáticos.
3. **La página `/servicios` también genera HTML grande.** `dist/servicios/index.html` pesa 99.3 KB sin comprimir, probablemente por cards/planes/FAQs/componentes visuales extensos.
4. **Los detalles de proyecto pueden cargar iframes de demos externas above-the-fold.** `ProjectLinkPreview` usa `iframe` cuando existe `demoUrl`, y en la página de detalle se marca como `eager`. Esto puede cargar sitios completos de Vercel/GitHub Pages/otros dominios dentro del caso y afectar LCP/INP/red en mobile.
5. **Hay imágenes remotas en frontmatter de proyectos.** Algunos casos usan covers remotos (`daegon13.github.io`, `cristal-sagrado.com`). Eso evita optimización local y hace que la performance dependa de terceros.
6. **Falta pipeline de imágenes de Astro.** No hay uso actual de `astro:assets`, `<Image />` o `<Picture />`. Las miniaturas SVG están bien, pero imágenes raster como logo/covers podrían beneficiarse de tamaños optimizados.
7. **No hay bundles JS pesados ni frameworks hidratados.** No se encontraron directivas `client:*`; solo scripts inline pequeños en `Nav.astro` y `contacto.astro`.
8. **CSS global moderado.** El CSS construido pesa 52.4 KB sin comprimir y ~9.7 KB gzip; no es el mayor problema, aunque se puede auditar si crece.
9. **Hay warnings de datos de navegador desactualizados.** `baseline-browser-mapping` y Browserslist/caniuse-lite están viejos. No son una causa directa de lentitud en runtime, pero conviene actualizarlos en mantenimiento.
10. **El repo contiene un `.docx` de wireframe.** No afecta `dist`, pero suma peso al repo. Revisar si debe vivir fuera del código o en documentación externa.

## Imágenes candidatas a mover a `src/assets` y optimizar

Prioridad alta:

1. `public/logo.png`
   - Convertir a un formato correcto y liviano (`svg`, `webp` o PNG real optimizado).
   - Generar una variante pequeña para nav, idealmente 56×56 o 64×64 si se mantiene raster.
   - Si el logo es puramente gráfico/simple, recrearlo como SVG sería lo más eficiente.

2. Covers remotos de proyectos:
   - `src/content/proyectos/Agencia_ariel.mdx` usa `https://daegon13.github.io/Agencia_ariel/img/cover.png`.
   - `src/content/proyectos/servicio-de-tarot.mdx` usa `https://daegon13.github.io/Servicio-de-Tarot/images/cover.png`.
   - `src/content/proyectos/cristal-sagrado.mdx` usa `https://cristal-sagrado.com/favicon_io/cristal_sagrado.png`.
   - Sugerencia: descargar/capturar una imagen local controlada solo si realmente se usa como portada visible, moverla a `src/assets/project-covers/` y renderizar con Astro Image/Picture.

Prioridad media:

3. `src/content/proyectos/images/cristal_sagrado.png`
   - Si se decide usar, mover a `src/assets/` y generar variantes.
   - Si se confirma que es residuo, eliminar en un patch separado de limpieza de assets.

## Raster decorativo que podría ser SVG o CSS

- `public/logo.png`: principal candidato. Es demasiado grande para un ícono de nav; puede ser SVG, CSS/gradiente con iniciales o raster optimizado.
- Las miniaturas de `public/galeria/*.svg` ya son SVG y pesan poco; no necesitan convertirse a raster.
- El hero/mockups principales parecen estar construidos con HTML/Tailwind, lo cual es positivo para evitar screenshots pesados.

## Dependencias

`package.json` es liviano:

Dependencias runtime:

- `@astrojs/sitemap`
- `@astrojs/tailwind`

Dev dependencies principales:

- `astro`
- `@astrojs/mdx`
- `tailwindcss`
- `typescript`
- `eslint`
- `prettier`
- `postcss`
- `autoprefixer`

No se detectaron dependencias pesadas de frontend como React, animation libraries, carousels, WebGL o frameworks hidratados. No recomiendo quitar dependencias en este patch.

## JavaScript e hidratación

No se encontraron directivas `client:*` en componentes Astro.

Scripts existentes:

- `src/components/Nav.astro`: script inline para abrir/cerrar menú móvil y bloquear scroll.
- `src/pages/contacto.astro`: script inline para convertir el formulario en link de WhatsApp.

Ambos son razonables y no justifican una refactorización ahora.

## Recursos externos y fuentes

- No se encontraron imports de Google Fonts, CDN de fuentes, `preconnect` a fuentes externas ni `@font-face` local.
- Los recursos externos relevantes son links de contacto/redes y demos embebidas o enlazadas.
- El riesgo principal de red externa está en los `iframe` de demos dentro de páginas de proyecto, no en fuentes.

## Mejoras pequeñas aplicadas en este patch

Se aplicaron solo cambios de bajo riesgo para estabilidad de layout:

- `src/components/Nav.astro`: se agregaron `width="28"` y `height="28"` al logo del nav.
- `src/components/ProjectCard.astro`: se agregaron `width="1200"` y `height="750"` a imágenes de cards de proyectos.
- `src/components/ProjectLinkPreview.astro`: se agregaron `width="1200"` y `height="900"` al fallback de imagen del preview.

No se cambió estructura visual, contenido, rutas ni dependencias.

## Top 5–10 oportunidades de optimización

1. **Optimizar o reemplazar el logo.** Crear `public/logo.svg` o un raster pequeño correctamente codificado. Impacto alto y riesgo bajo si se prueba visualmente.
2. **Reemplazar iframes eager en detalles de proyecto por previews estáticos con botón “Abrir demo”.** Cargar iframe solo bajo interacción o no cargarlo por defecto. Impacto alto en páginas de casos.
3. **Migrar covers raster reales a `src/assets` y renderizar con `astro:assets`.** Permite tamaños, formatos y dimensiones controladas.
4. **Eliminar o reubicar `src/content/proyectos/images/cristal_sagrado.png` si se confirma que no se usa.** Impacta repo/CI, no runtime.
5. **Reducir HTML repetido en home si Lighthouse muestra TTFB/HTML parse cost alto.** Mantener diseño, pero considerar menos cards above-the-fold o componentes más compactos.
6. **Auditar iconos inline repetidos.** Si el HTML sigue creciendo, evaluar sprite SVG o componentes más simples para iconos repetidos.
7. **Revisar `/servicios` por HTML excesivo.** Optimizar cards o markup repetido sin cambiar el diseño.
8. **Actualizar Browserslist/baseline data en tooling.** Patch de mantenimiento para limpiar warnings.
9. **Agregar política de cache headers en Vercel para assets estáticos si no existe.** Mantener compatibilidad con GitHub Pages; hacerlo en `vercel.json` con cuidado.
10. **Medir con Lighthouse/WebPageTest post-deploy.** El build local muestra pesos, pero LCP real dependerá del hosting, red y iframes externos.

## Safe quick wins recomendados para el próximo patch

1. Convertir `public/logo.png` a un asset optimizado y ajustar referencias.
2. Cambiar `ProjectLinkPreview` para que no cargue iframes externos automáticamente cuando `eager` sea true; usar imagen/SVG preview y botón.
3. Crear una carpeta `src/assets/project-covers/` para covers raster realmente necesarios.
4. Definir una convención de dimensiones para cards:
   - Cards: 1200×750 o 800×500.
   - Preview 4:3: 1200×900 o 800×600.
   - OG: 1200×630.
5. Añadir un chequeo manual/documentado de assets grandes antes de cada release.

## Cambios riesgosos a evitar por ahora

- Migrar de Astro o cambiar `output: static`.
- Agregar React solo para lazy loading o previews.
- Reemplazar todas las miniaturas SVG por screenshots raster pesadas.
- Eliminar contenido o proyectos para bajar HTML sin decisión comercial.
- Cambiar URLs/canonical/site sin validar Vercel y GitHub Pages.
- Aplicar optimización masiva de imágenes sin revisar apariencia de portfolio.

## Recomendación de siguiente patch

**Patch recomendado:** “Optimización de assets críticos y previews de proyecto”.

Alcance sugerido:

1. Reemplazar `public/logo.png` por SVG o raster liviano.
2. Mantener miniaturas SVG de galería.
3. Modificar `ProjectLinkPreview` para usar preview estático por defecto y cargar demo externa solo con click o nueva pestaña.
4. Dejar `astro:assets` preparado para covers raster locales, sin migrar todo el portfolio de golpe.
5. Ejecutar `npm run build` y revisar tamaños de `dist/` antes/después.
