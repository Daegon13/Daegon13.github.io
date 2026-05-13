# Copy final QA — Patch 09

Fecha: 2026-05-13

## Alcance revisado

Se revisó el corpus público solicitado:

- `src/pages/index.astro`
- `src/pages/proyectos/index.astro`
- `src/pages/servicios.astro`
- `src/pages/contacto.astro`
- `src/pages/sobre-mi.astro`
- `src/components/*.astro`
- `src/data/*.ts`
- `src/content/proyectos/*.mdx`

La búsqueda se volvió a ejecutar con coincidencia literal y sensible a subcadenas para detectar variantes como plurales simples.

## Inventario antes/después

| Phrase | Original count from `docs/copy-audit.md` | New count | Remaining locations | Decision |
|---|---:|---:|---|---|
| `sin fricción` | 2 | 0 | — | Replace completed. |
| `reducir fricción` | 3 | 0 | — | Replace completed. |
| `baja fricción` | 1 | 0 | — | Replace completed. |
| `fricción` | 6 inferred from `sin fricción`, `reducir fricción` and `baja fricción` inventory | 0 | — | Replace completed; no generic friction language remains. |
| `ordenar el mensaje` | 3 from detailed locations | 0 | — | Replace completed; current copy names deliverables or data instead. |
| `vender mejor` | 3 | 0 | — | Replace completed. |
| `experiencia clara` | 5 | 0 | — | Replace completed. |
| `propuesta clara` | 1 | 0 | — | Replace completed. |
| `objetivo comercial` | 3 | 0 | — | Replace completed. |
| `acción concreta` | 4 | 0 | — | Replace completed. |
| `lista para compartir` | 6 | 0 | — | Replace completed; replaced by link, deploy, preview or URL language. |
| `camino claro` | Not available as a dedicated row | 0 | — | Acceptable; no remaining use. |
| `solución integral` | Not available as a dedicated row | 0 | — | Acceptable; no remaining use. |
| `presencia digital` | Mentioned in project notes, no dedicated count | 0 | — | Acceptable; no remaining use. |
| `potenciar` | Not available as a dedicated row | 0 | — | Acceptable; no remaining use. |
| `consultas, reservas o ventas` | 7 | 1 | `src/pages/index.astro:31` | Keep. Single global positioning use in homepage metadata, within target. |
| `claro` | 19 | 0 | — | Replace completed in reviewed corpus. |
| `clara` | 21 | 0 | — | Replace completed in reviewed corpus. |
| `claridad` | 4 | 0 | — | Replace completed in reviewed corpus. |

## Small correction made

- Replaced `Textos claros` with `Textos breves` in `src/content/proyectos/servicio-de-tarot.mdx` to remove a remaining generic `claro` substring while keeping the feature concise and concrete.

## Editorial QA findings

### Homepage

- Hero names concrete deliverables: landings, demos navegables, paneles livianos, WhatsApp preparado, SEO base and deploy publicado.
- The “Qué resuelvo” and conversion flow areas use business situations: repeated DMs, incomplete messages, scattered bookings and hard-to-show offers.
- ConversionFlow names context and actions: traffic source, service/price/hours review, WhatsApp/agenda/pedido selection and prefilled WhatsApp context.
- CTAs remain specific and mobile-safe: “Quiero una demo para mi negocio”, “Ver proyectos”, “Ver demos por rubro”.

### Portfolio

- Projects now sound distinct by rubro and deliverable: veterinary agenda, barber booking, restaurant menu/reservation, inventory dashboard, editable wellbeing landing, logistics corporate web and personal-service contact page.
- `highlight` and `resultLabel` are not identical across the current MDX frontmatter; cards can show “Construido” and benefit without repeating the same sentence.
- Generic labels like “Clave” are not used in `ProjectCard`; the visible copy uses “Construido”, “Qué permite”, “Impacto”, “Beneficio” or “Resultado” depending on available data.
- No fake metrics were found in the reviewed project content. Cristal Sagrado uses qualitative wording; no `+38%` claim remains.

### Services

- Each package includes concrete deliverables through `includes`, `clientInput`, `finalDeliverable` and `notIncluded` fields.
- Scope boundaries are visible in both service presentations: `ProductizedServices` summarizes “Necesito” and “No incluye”, while `PricingPlans` expands “No incluye por defecto” and “Cuándo no conviene”.
- `ProductizedServices` and `PricingPlans` read from the same service data, so the offers do not conflict on prices, names or scope.

### Verticals and process

- Vertical cards use rubro-specific modules: agenda/ficha for veterinarias, servicios/precios/reserva for barberías, carta/ubicación/reserva for restaurantes, catálogo/stock/categorías for tiendas.
- Process steps state what the client sends and what Marin.dev returns: Instagram/web/rubro/services first, then recommended scope, navigable version, deploy and next improvements.

### Contact

- WhatsApp messages ask for useful inputs: rubro, current link, desired result and likely service type.
- The contact page explains what the user should send and what happens after: context, recommendation/direction, then follow-up by WhatsApp with deliverables, timing and first milestone.
- Form-generated WhatsApp copy is specific and preserves the existing number/contact data.

### Mobile safety

- CTA labels and badges are short enough for mobile wrapping.
- Hero body remains a compact paragraph rather than a long rewrite.
- Badges use short nouns or two-word deliverables such as “SEO base”, “Panel editable”, “Deploy publicado” and “Agenda / reservas”.

## Final decision

Acceptance targets are met. The only remaining target phrase is `consultas, reservas o ventas`, kept once in homepage metadata as global positioning. All abstract friction/clarity/proposal phrases have been removed from the reviewed public-copy corpus.
