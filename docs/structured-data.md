# Structured data

Este sitio usa JSON-LD mínimo y verificable para ayudar a Google Search Console y otros validadores a entender la identidad del sitio y la estructura de los casos de portfolio.

## Schema global

`src/layouts/BaseLayout.astro` emite en todas las páginas:

- `WebSite`
  - `name`: `MarinDev`
  - `url`: valor de `PUBLIC_SITE_URL` a través de `SITE_URL`
  - `description`: descripción general del sitio
  - `inLanguage`: `es-UY`
  - `publisher`: `Organization` básica de MarinDev
- `Organization`
  - `name`: `MarinDev`
  - `alternateName`: `Marin.dev`
  - `url`: valor de `PUBLIC_SITE_URL` a través de `SITE_URL`
  - `logo`: imagen pública del sitio
  - `description`: descripción general del sitio
  - `founder`: `Person` con el nombre visible `Diego Marin`
  - `sameAs`: GitHub, LinkedIn e Instagram existentes en `src/lib/contact.ts`

Se eligió `Organization` porque el sitio se presenta como marca/estudio (`MarinDev` / `Marin.dev`) aunque incluya la persona fundadora.

## Schema en páginas de proyecto

`src/pages/proyectos/[slug].astro` agrega datos estructurados específicos para cada caso:

- `BreadcrumbList`
  - Inicio
  - Proyectos
  - Nombre del proyecto
- `CreativeWork`
  - `name`: título del proyecto desde la colección MDX
  - `description`: resumen/impacto/capacidad/solución disponible en el contenido
  - `url`: URL canónica del caso usando `PUBLIC_SITE_URL`
  - `image`: imagen/thumbnail/cover disponible
  - `inLanguage`: `es-UY`
  - `creator`: `Organization` MarinDev

## Datos que se omitieron intencionalmente

No se agregaron datos que no estén confirmados o visibles en el sitio:

- Reviews, ratings o testimonios.
- Precios, ofertas comerciales con importes, disponibilidad o inventario.
- Dirección física, teléfono de negocio, horarios de atención o datos de local comercial.
- Métricas de rendimiento no comprobadas.
- Schema de `LocalBusiness` con atributos incompletos.

## Cómo validar

Después de un build o deploy:

1. Ejecutar `npm run build` y revisar el HTML generado en `dist/`.
2. Copiar la URL pública o el HTML generado en:
   - [Rich Results Test](https://search.google.com/test/rich-results)
   - [Schema Markup Validator](https://validator.schema.org/)
3. Confirmar que cada bloque JSON-LD parsea sin errores y que no aparecen campos `undefined`.

Si se agregan nuevos schemas, mantener la misma regla: solo publicar datos reales, verificables y coherentes con el contenido visible.
