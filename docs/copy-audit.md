# MarinDev copy audit

Audit-only patch. No public copy, links, prices, routes, contact data, project URLs, layout, or visual components were changed.

> Note: the requested `src/pages/proyectos.astro` route is implemented in this repo as `src/pages/proyectos/index.astro`.

## Scope inspected

Primary page/component copy sources inspected:

- `src/pages/index.astro`
- `src/pages/proyectos/index.astro`
- `src/pages/servicios.astro`
- `src/pages/contacto.astro`
- `src/pages/sobre-mi.astro`
- `src/components/ContactCTA.astro`
- `src/components/ProductizedServices.astro`
- `src/components/FeaturedCases.astro`
- `src/components/VerticalDemos.astro`
- `src/components/ProcessSteps.astro`
- `src/components/ConversionFlow.astro`
- `src/components/FAQs.astro`
- `src/components/OutcomeGrid.astro` because it carries the home “Qué resuelvo” copy.
- `src/components/HeroV2.astro` because it carries the current homepage hero copy.
- `src/components/ProjectCard.astro` because it determines the “Clave” and “Resultado / beneficio” card pattern.
- `src/data/site.ts`
- `src/data/services.ts`
- `src/data/verticals.ts`
- `src/data/conversionFlow.ts`
- `src/data/process.ts`
- `src/data/outcomes.ts`
- `src/data/faqs.ts`
- `src/content/proyectos/*.mdx`

## Executive summary

The current site is visually strong, but the copy leans on the same conversion vocabulary in too many places. The biggest pattern is not a single bad phrase; it is the stacking of similar abstractions across hero, outcome section, cases, services, process, and project MDX.

Most repeated terms should not be banned. They should be reduced, localized, and tied to a concrete object:

- “Menos fricción” should become “menos pasos para pedir turno”, “mensaje de WhatsApp ya armado”, or “carta y reserva en un mismo link”.
- “Claro/clara/claridad” should be kept only when the sentence names what is clear: precios, servicios, datos para cotizar, turnos, módulos, alcance, entregables.
- “Consultas, reservas o ventas” should not appear as a universal ending in every section. Pick the relevant outcome by context.
- Project cards need sharper separation between `highlight`/“Clave” and `resultLabel`/`impacto`/“Resultado”. Some cards repeat the same promise in different words.
- Service copy is solid structurally, but too abstract in limits, workflow, and “what is included / not included”.

## Repeated phrase inventory

| Phrase | Count in inspected sources | Current distribution | Recommendation | Rationale |
|---|---:|---|---|---|
| `sin fricción` | 2 | `src/data/site.ts:16`; `src/content/proyectos/noir-barber-studio.mdx:38` | Replace | Sounds generic. Use “menos pasos”, “reserva en un toque”, or “mensaje prearmado” depending on context. |
| `reducir fricción` | 3 | `src/pages/proyectos/index.astro:31`; `src/pages/sobre-mi.astro:87`; `src/components/FeaturedCases.astro:15` | Replace | Repeated in high-visibility sections and paired with other generic phrases. |
| `baja fricción` | 1 | `src/components/ConversionFlow.astro:12` | Replace | Prefer naming the exact block benefit: “responde precio, disponibilidad y canal antes del chat”. |
| `ordenar` | 12 | See detailed locations below. | Reduce / make more specific | Useful brand idea, but overused. Replace with the thing being organized: servicios, turnos, datos, carta, leads, stock. |
| `claridad` | 4 | `src/pages/sobre-mi.astro:15`, `:73`, `:84`; `src/data/conversionFlow.ts:14` | Reduce | Strong principle for about page, but should not carry hero-level benefits alone. |
| `claro` | 19 | See detailed locations below. | Reduce / make more specific | Keep when attached to concrete nouns like “alcance”, “cronograma”, “servicios”. Replace vague uses. |
| `clara` | 21 | See detailed locations below. | Reduce / make more specific | Highest redundancy cluster with “experiencia clara”, “web clara”, “propuesta clara”. |
| `vender mejor` | 3 | `src/pages/index.astro:30`; `src/pages/proyectos/index.astro:30`; `src/components/FeaturedCases.astro:14` | Replace / reduce | Too broad for title-level copy. Use rubro-specific outcomes or concrete deliverables. |
| `consultas, reservas o ventas` | 7 | `src/pages/index.astro:31`, `:47`; `src/pages/proyectos/index.astro:24`; `src/pages/servicios.astro:9`; `src/pages/sobre-mi.astro:87`; `src/components/ProcessSteps.astro:10`; `src/data/services.ts:18` | Reduce | Works as master positioning once, but repeated everywhere makes sections blur together. |
| `propuesta clara` | 1 | `src/components/ContactCTA.astro:24` | Make more specific | Badge copy should say what the prospect receives: “alcance recomendado”, “primer módulo”, “mensaje de WhatsApp”. |
| `demo concreta` | 1 | `src/components/VerticalDemos.astro:12` | Keep / sharpen | Good contrast with abstraction. Could become “demo por rubro” or “pantalla navegable”. |
| `lista para compartir` | 6 | `src/pages/sobre-mi.astro:56`, `:134`; `src/components/ProcessSteps.astro:9`; `src/components/ConversionFlow.astro:15`; `src/data/site.ts:35`; `src/data/services.ts:11` | Reduce | Keep for delivery proof once or twice. Else specify “link publicado”, “URL para bio”, “deploy activo”. |
| `objetivo comercial` | 3 | `src/pages/index.astro:46`; `src/pages/servicios.astro:15`; `src/pages/sobre-mi.astro:10` | Make more specific | Replace with “turnos”, “cotizaciones”, “pedidos”, “validar una demo”, or “panel interno” by section. |
| `acción concreta` | 4 | `src/pages/proyectos/index.astro:31`; `src/components/FeaturedCases.astro:15`; `src/components/ConversionFlow.astro:12`; `src/content/proyectos/brasa-23.mdx:46` | Replace / reduce | Too abstract. Say “abrir WhatsApp”, “ver carta”, “reservar”, “pedir cotización”. |
| `próximo paso` | 3 | `src/pages/sobre-mi.astro:164`; `src/components/ContactCTA.astro:14`; `src/data/conversionFlow.ts:6` | Keep sparingly | Good UX concept, but CTA sections should name the next step. |
| `sin humo` | 0 | No inspected source occurrences. | No action | Do not introduce unless it matches the tone. |
| `experiencia clara` | 5 | `src/pages/index.astro:47`; `src/pages/sobre-mi.astro:134`; `src/content/proyectos/Agencia_ariel.mdx:26`, `:43`; `src/content/proyectos/noir-barber-studio.mdx:34` | Replace / make specific | Empty unless it names the interface: mobile services list, booking flow, WhatsApp path, service pages. |

## Detailed phrase locations

### `sin fricción`

- `src/data/site.ts:16` — social proof strip description: “Turnos y pedidos sin fricción.”
- `src/content/proyectos/noir-barber-studio.mdx:38` — impact copy: “reservas sin fricción.”

Recommended rewrite direction: replace with “turnos en menos pasos”, “reserva desde el celular”, or “servicio + precio + WhatsApp en el mismo flujo”.

### `reducir fricción` / `baja fricción`

- `src/pages/proyectos/index.astro:31` — portfolio intro.
- `src/pages/sobre-mi.astro:87` — about hero body.
- `src/components/FeaturedCases.astro:15` — home featured cases intro.
- `src/components/ConversionFlow.astro:12` — CRO flow intro.

Recommended rewrite direction: do not use “fricción” in the next rewrite. Name the obstacle: missing price context, scattered service info, no WhatsApp message, no reservation path, too many DMs asking the same thing.

### `ordenar`

- `src/pages/proyectos/index.astro:31` — “ordenar el mensaje”.
- `src/pages/servicios.astro:28` — “ordenar reservas”.
- `src/pages/servicios.astro:49` — “ordenar la conversación”.
- `src/pages/sobre-mi.astro:30` — “ordenar contenido, leads o procesos”.
- `src/pages/sobre-mi.astro:87` — “ordenar el mensaje”.
- `src/components/FeaturedCases.astro:15` — “ordenar el mensaje”.
- `src/data/services.ts:43` — “ordenar contenido, stock, leads, reservas o datos internos”.
- `src/data/faqs.ts:4` — “ordenar la oferta”.
- `src/content/proyectos/Agencia_ariel.mdx:5` — “ordenar consultas comerciales”.
- `src/content/proyectos/servicio-de-tarot.mdx:33` — “ordenar su propuesta”.
- `src/content/proyectos/smart-stock.mdx:53` — “ordenar operaciones internas”.
- `src/content/proyectos/vetcare.mdx:5` — “ordenar consultas, urgencias y turnos”.

Recommended rewrite direction: keep it for internal-operations and project-specific use. Replace generic “ordenar el mensaje” with concrete deliverables: service menu, pricing block, FAQ, booking CTA, stock table, lead form.

### `claridad`, `claro`, `clara`

High-density locations:

- Homepage/contact CTA: `src/pages/index.astro:31`, `src/pages/index.astro:47`.
- About page: `src/pages/sobre-mi.astro:15`, `:27`, `:50`, `:73`, `:84`, `:134`, `:183`.
- Services: `src/pages/servicios.astro:14`, `src/components/ProductizedServices.astro:22`, `src/data/services.ts:18`, `src/data/services.ts:29`.
- FAQs and process support copy: `src/components/FAQs.astro:15`, `src/data/faqs.ts:4`, `src/data/faqs.ts:16`, `src/data/process.ts:23`, `src/data/outcomes.ts:5`, `src/data/conversionFlow.ts:14`.
- Vertical demos: `src/data/verticals.ts:54`, `src/data/verticals.ts:63`.
- Project MDX: `src/content/proyectos/Agencia_ariel.mdx:26`, `:35`, `:37`, `:39`, `:43`; `src/content/proyectos/brasa-23.mdx:38`; `src/content/proyectos/cristal-sagrado.mdx:32`; `src/content/proyectos/noir-barber-studio.mdx:32`, `:34`, `:38`; `src/content/proyectos/servicio-de-tarot.mdx:30`, `:31`, `:43`; `src/content/proyectos/smart-stock.mdx:53`; `src/content/proyectos/vetcare.mdx:5`, `:14`, `:33`, `:35`, `:39`.

Recommended rewrite direction: keep “claro/clara” only when tied to a concrete noun and evidence. Examples:

- Instead of “web clara”: “home con servicios, precios orientativos y WhatsApp visible”.
- Instead of “experiencia clara”: “flujo mobile con servicios, horarios y reserva en tres bloques”.
- Instead of “propuesta clara”: “alcance recomendado con páginas, CTAs y entregables”.

### `vender mejor`

- `src/pages/index.astro:30` — SEO title.
- `src/pages/proyectos/index.astro:30` — portfolio title.
- `src/components/FeaturedCases.astro:14` — home featured cases title.

Recommended rewrite direction: reserve the idea for one high-level positioning line, then replace section titles with what the visitor sees or gets: “Demos que muestran agenda, WhatsApp y paneles”, “Casos por rubro con CTA real”, “Herramientas para captar turnos, pedidos y cotizaciones”.

### `consultas, reservas o ventas`

- `src/pages/index.astro:31`
- `src/pages/index.astro:47`
- `src/pages/proyectos/index.astro:24`
- `src/pages/servicios.astro:9`
- `src/pages/sobre-mi.astro:87`
- `src/components/ProcessSteps.astro:10`
- `src/data/services.ts:18`

Recommended rewrite direction: use the triad once in the global positioning. Everywhere else, choose the section-specific outcome: turnos for VetCare/barbers, pedidos/reservas for restaurants, cotizaciones for services, stock visibility for Smart Stock.

### `propuesta clara`

- `src/components/ContactCTA.astro:24` — badge label.

Recommended rewrite direction: change to a tangible output in a later rewrite: “alcance sugerido”, “primer módulo”, “brief de WhatsApp”, or “demo por rubro”.

### `demo concreta`

- `src/components/VerticalDemos.astro:12` — vertical demos title.

Recommended rewrite direction: keep the idea, but make it more ownable: “Una demo por rubro muestra más que una explicación.” or “Pantallas navegables por rubro, no promesas abstractas.”

### `lista para compartir`

- `src/pages/sobre-mi.astro:56`
- `src/pages/sobre-mi.astro:134`
- `src/components/ProcessSteps.astro:9`
- `src/components/ConversionFlow.astro:15`
- `src/data/site.ts:35`
- `src/data/services.ts:11`

Recommended rewrite direction: replace some occurrences with “link para la bio”, “deploy publicado”, “URL para enviar por WhatsApp”, “versión mobile revisada”, or “preview navegable”.

### `objetivo comercial`

- `src/pages/index.astro:46`
- `src/pages/servicios.astro:15`
- `src/pages/sobre-mi.astro:10`

Recommended rewrite direction: make it situational. For example: “si querés más turnos”, “si necesitás validar una oferta”, “si querés que el cliente mande todos los datos para cotizar”.

### `acción concreta`

- `src/pages/proyectos/index.astro:31`
- `src/components/FeaturedCases.astro:15`
- `src/components/ConversionFlow.astro:12`
- `src/content/proyectos/brasa-23.mdx:46`

Recommended rewrite direction: keep Brasa 23 only if followed by named actions, which it already does. Replace the generic page/component uses with named actions.

### `próximo paso`

- `src/pages/sobre-mi.astro:164`
- `src/components/ContactCTA.astro:14`
- `src/data/conversionFlow.ts:6`

Recommended rewrite direction: keep on the about page as a working principle. In CTA and CRO sections, use direct verbs: “Abrir WhatsApp”, “Pedir demo”, “Reservar”, “Cotizar”.

### `sin humo`

- No matches in inspected sources.

Recommended rewrite direction: no action; do not add it as a forced anti-AI phrase.

### `experiencia clara`

- `src/pages/index.astro:47`
- `src/pages/sobre-mi.astro:134`
- `src/content/proyectos/Agencia_ariel.mdx:26`
- `src/content/proyectos/Agencia_ariel.mdx:43`
- `src/content/proyectos/noir-barber-studio.mdx:34`

Recommended rewrite direction: replace with the concrete interface being described: “página mobile con servicios y contacto”, “flujo de reserva”, “sección de servicios logísticos”, “agenda/urgencias en la primera pantalla”.

## Sections with the highest copy redundancy

### 1. Homepage hero + “Qué resuelvo”

Files:

- `src/components/HeroV2.astro`
- `src/components/OutcomeGrid.astro`
- `src/pages/index.astro`
- `src/data/outcomes.ts`

Issue:

The hero already says landings/demos/sistemas with WhatsApp and agenda. The “Qué resuelvo” section repeats the same promise with “vendo mejor”, “ordeno el mensaje”, “reduzco la fricción”, “caminos claros”. This creates a polished but generic conversion-consultant tone.

Rewrite direction:

- Hero should name the most concrete deliverables: demo por rubro, landing, WhatsApp prearmado, agenda/reserva, panel simple.
- “Qué resuelvo” should be framed as business situations: “te preguntan precios por DM todo el día”, “la carta no está en la bio”, “los turnos llegan sin datos”, “el stock se maneja en planillas”.

### 2. Portfolio overview and FeaturedCases

Files:

- `src/pages/proyectos/index.astro`
- `src/components/FeaturedCases.astro`
- `src/components/ProjectCard.astro`
- `src/content/proyectos/*.mdx`

Issue:

The portfolio index and featured cases use almost identical descriptions: “ordenar el mensaje”, “reducir fricción”, “acción concreta”. The cards then often repeat a similar idea in “Clave” and “Resultado / beneficio”.

Rewrite direction:

- Portfolio intro: explain the system used to judge cases: rubro, problema, entregable, canal, prueba.
- Cards: make “Clave” about what was built; make “Resultado / beneficio” about what that proves or enables.

### 3. Services and packages

Files:

- `src/pages/servicios.astro`
- `src/components/ProductizedServices.astro`
- `src/components/PricingPlans.astro`
- `src/data/services.ts`

Issue:

The service architecture is good, but several descriptions still speak in broad outcomes: “avanzar rápido”, “prioridad comercial”, “próximos pasos”, “landing clara”, “operar mejor”.

Rewrite direction:

Add specificity without adding length:

- What exactly is included.
- What is intentionally not included.
- What input the client must provide.
- When this package is the wrong fit.
- What the first deliverable looks like.

### 4. Project MDX frontmatter

Files:

- `src/content/proyectos/vetcare.mdx`
- `src/content/proyectos/noir-barber-studio.mdx`
- `src/content/proyectos/servicio-de-tarot.mdx`
- `src/content/proyectos/Agencia_ariel.mdx`
- `src/content/proyectos/brasa-23.mdx`
- `src/content/proyectos/cristal-sagrado.mdx`
- `src/content/proyectos/smart-stock.mdx`

Issue:

The MDX fields have good raw material, but several fields use the same semantic role: `highlight`, `resultLabel`, `resultado`, and `impacto` all try to explain why the case matters. This creates visible repetition in cards.

Rewrite direction:

- `highlight`: the key build decision or module.
- `resultLabel`: what the card should promise as the visible benefit.
- `impacto`: what capability the case proves for similar clients.
- `resultado`: only use when the result is real, measured, or stated honestly.

## Project cards where “Clave” and “Resultado / beneficio” overlap

The overlap comes from `ProjectCard.astro`: if `highlight` exists, it prints as “Clave”; the green benefit block then uses `resultLabel || highlight || impacto || resultado`. If a project has no `resultLabel`, `impacto`, or `resultado`, `highlight` can be reused as the benefit by fallback. Even when not exactly reused, several fields say the same thing in different words.

### VetCare

Files:

- `src/content/proyectos/vetcare.mdx`

Overlap:

- `highlight`: “Ordena turnos, urgencias y consultas en una experiencia mobile clara.”
- `resultLabel`: “Demo lista para vender una experiencia más completa que una web institucional.”
- `impacto`: “Demo lista para mostrar una experiencia más completa...”

Verdict: reduce. “Clave” should be the modules: agenda, urgencias, ficha/portal de mascota, WhatsApp. “Resultado” should say what it lets a vet evaluate or sell.

### Servicio de Tarot

Files:

- `src/content/proyectos/servicio-de-tarot.mdx`

Overlap:

- `highlight`: “llevar visitantes hacia conversación por WhatsApp.”
- `resumen`: “foco en reservas por WhatsApp”.
- `resultado`: “Más consultas y reservas por WhatsApp directo”.
- `impacto`: “llevar al visitante hacia una conversación concreta por WhatsApp.”

Verdict: replace/restructure. Too many fields point to WhatsApp conversation. Make one field about trust-building content, one about contact path, and one about what a service professional can reuse.

### Agencia Ariel

Files:

- `src/content/proyectos/Agencia_ariel.mdx`

Overlap:

- `idealPara`: transmitir confianza and ordenar consultas.
- `highlight`: ordenar propuesta in a reliable web.
- `problema`: presencia digital más clara.
- `impacto`: web clara, confiable and lista para recibir consultas.

Verdict: reduce. The card should emphasize logistics-specific proof: services, company credibility, contact/form path, editable content.

### Noir Barber Studio

Files:

- `src/content/proyectos/noir-barber-studio.mdx`

Overlap:

- `highlight`: redes into premium experience oriented to reservations.
- `resumen`: services and reserve/contact from mobile.
- `problema`: no clear experience for services/style/reservation.
- `impacto`: services clear and reservations without friction.

Verdict: reduce. Make “Clave” about visual identity + services menu + booking CTA. Make “Resultado” about barber lead use: send one link from Instagram and show services/prices before DM.

### Brasa 23

Files:

- `src/content/proyectos/brasa-23.mdx`

Overlap:

- `highlight`: centralizes menu, atmosphere, and contact.
- `resumen`: menu, reservation, order/contact.
- `impacto`: restaurant can share menu, story, and reservation path.
- Body: repeats “ver carta, reservar o iniciar una consulta”.

Verdict: make more specific. The strongest concrete angle is “carta digital + reserva/pedido + link for Instagram/Google Business”.

### Smart Stock

Files:

- `src/content/proyectos/smart-stock.mdx`

Overlap is lower than other cards, but the copy repeats “operativo”, “navegable”, “panel”, “ordenar operaciones internas”.

Verdict: keep mostly. Sharpen with limits: showcase only-read, modules visible, not a finished SaaS.

### Cristal Sagrado

Files:

- `src/content/proyectos/cristal-sagrado.mdx`

Overlap is acceptable because it has a real result field. Main issue is one unsupported-looking metric unless it is verified internally: `resultado: "+38% consultas en 21 días"`.

Verdict: keep if true and defensible. If not documented, replace with qualitative impact.

## Services where copy is too abstract

### Demo Comercial Express

File: `src/data/services.ts`

Current abstract points:

- “propuesta web lista para mostrar”
- “Mensaje principal y estructura comercial”
- “Secciones clave”
- “Vista responsive lista para compartir”

Rewrite direction:

- Specify likely output: 1 landing/demo page, hero, service cards, WhatsApp CTA, mobile preview, deploy link.
- Name inputs: Instagram, logo/colors if any, services, references.
- Add boundary: not a full system or custom admin panel.

### Landing de Conversión

File: `src/data/services.ts`

Current abstract points:

- “landing clara”
- “consultas, reservas o ventas”
- “Hero orientado a resultado”
- “CTA principal y secundarios bien ubicados”

Rewrite direction:

- Use a concrete business situation: campaign traffic, Google Business, Instagram bio, single offer.
- Name deliverables: hero, offer section, benefits/proof, FAQ, WhatsApp/form, SEO/share metadata.
- Choose one outcome per use case instead of the triad.

### Web con WhatsApp / Agenda

File: `src/data/services.ts`

Current abstract points:

- “guiar al visitante”
- “Flujo simple de reserva o consulta”
- “Páginas clave para generar confianza”

Rewrite direction:

- Specify examples: service selection, date/preference field, WhatsApp message template, Calendly/agenda embed if available, confirmation copy.
- Name common rubros: barbería, clínica, gimnasio, restaurante, servicio técnico.

### Sistema simple / Panel Admin

File: `src/data/services.ts`

Current abstract points:

- “herramienta liviana”
- “Datos y estados organizados”
- “Acciones simples para el equipo”

Rewrite direction:

- Specify module types: CRUD básico, estados, filtros, tabla, panel privado, export/import, dashboard.
- Add limits: not an ERP, not a SaaS multi-tenant unless scoped separately, auth/roles only if included.

### PricingPlans component

File: `src/components/PricingPlans.astro`

Observation:

The older pricing-plan copy is more concrete than `src/data/services.ts` in places because it mentions deliverable counts, estimated times, and scope. The rewrite should decide whether `PricingPlans` or `ProductizedServices` is the canonical service presentation to avoid two service vocabularies competing.

## CTAs that could be stronger

| Current CTA | Location | Issue | Suggested direction |
|---|---|---|---|
| “Quiero una demo para mi negocio” | Hero/about/home CTA | Good, keep as primary. | Could become more situational in secondary placements: “Armar demo para mi rubro”. |
| “Ver casos primero” | `src/pages/index.astro` final CTA | Good but passive. | “Ver demos por rubro” or “Ver casos con WhatsApp/agenda”. |
| “Pedir una demo” | `src/pages/proyectos/index.astro` | Fine but generic. | “Pedir una demo parecida”. |
| “Consultar este paquete” | `src/components/ProductizedServices.astro` | Generic for all services. | Include service name in message/label if design allows: “Consultar Demo Express”. |
| “Consultar mi caso por WhatsApp” | `src/pages/servicios.astro` | Good. | Keep. It matches uncertainty at service-selection stage. |
| “Mandame mi web o Instagram” | `src/pages/sobre-mi.astro` | Strong and specific. | Keep. |
| “Abrir conversación por WhatsApp” | `src/pages/contacto.astro` | Functional but less outcome-based. | “Enviar brief por WhatsApp” or “Mandar datos del proyecto”. |
| “Ver demo” | Project card secondary | Clear. | Keep. |
| Project `ctaLabel` values | MDX frontmatter | Most are specific and good. | Keep, but align labels with card promise. |

## Suggested replacement patterns

Use these as patterns for future rewrite patches, not as final copy.

### Replace abstract conversion phrases with deliverables

- Instead of: “reducir fricción”
  - Use: “WhatsApp abre con servicio, rubro y objetivo ya escritos.”
  - Use: “El usuario ve precios/servicios antes de mandar mensaje.”
  - Use: “La carta, reserva y ubicación viven en un solo link.”

- Instead of: “ordenar el mensaje”
  - Use: “Separar servicios, precios, preguntas frecuentes y CTA.”
  - Use: “Convertir historias destacadas en secciones navegables.”
  - Use: “Pasar de planillas dispersas a una tabla con estados.”

- Instead of: “experiencia clara”
  - Use: “Pantalla inicial con servicio, prueba social y botón de WhatsApp.”
  - Use: “Flujo mobile: elegir servicio, ver horario, pedir turno.”
  - Use: “Panel con productos, stock mínimo y movimientos.”

### Prefer business situation over generic value statement

- “Te preguntan precios por DM y respondés lo mismo todos los días.”
- “Tu carta está en imágenes, historias o PDFs difíciles de abrir.”
- “Los turnos llegan sin servicio, horario ni datos del cliente.”
- “Tu stock depende de planillas que nadie revisa a tiempo.”
- “Tenés una idea vendible, pero necesitás una demo navegable antes de invertir en un sistema grande.”

### Prefer “what the client gets” over “we improve”

- “Un link publicado para la bio.”
- “Un mensaje de WhatsApp prearmado por servicio.”
- “Una landing con hero, oferta, prueba, FAQ y CTA.”
- “Un panel con tabla, estados, filtros y acciones básicas.”
- “Una demo navegable por rubro para mostrar antes de vender el proyecto completo.”

### CTA patterns

- “Mandar Instagram y rubro”
- “Pedir demo para mi rubro”
- “Enviar brief por WhatsApp”
- “Ver demo con agenda”
- “Ver caso con panel”
- “Cotizar landing para campaña”
- “Armar link para mi bio”

## Copy principles for MarinDev

1. Prefer concrete deliverables over abstract benefits.
2. Prefer business situation over generic value statement.
3. Prefer “what the client gets” over “we improve”.
4. Avoid repeating the same conversion promise in every section.
5. Use “más claridad” only when it is tied to something specific, such as precios, servicios, alcance, turnos, datos para cotizar, or módulos.
6. Use “menos pasos” instead of “menos fricción” when talking about contact flows.
7. Avoid empty phrases like “experiencia clara” unless followed by what makes it clear.
8. Each project card must answer:
   1. what business/rubro it is for,
   2. what was built,
   3. what problem it solves,
   4. what proof of capability it shows,
   5. what someone can click next.

## Prioritized rewrite plan

### Priority 1

#### Homepage hero and “Qué resuelvo”

Files:

- `src/components/HeroV2.astro`
- `src/components/OutcomeGrid.astro`
- `src/data/outcomes.ts`
- `src/pages/index.astro`

Plan:

- Keep the primary offer, but reduce abstract conversion language.
- Turn “Qué resuelvo” into concrete business pains and deliverables.
- Use the triad “consultas, reservas o ventas” only once, preferably in meta/positioning, not in every CTA block.

#### Portfolio cards

Files:

- `src/components/ProjectCard.astro`
- `src/components/FeaturedCases.astro`
- `src/pages/proyectos/index.astro`
- `src/content/proyectos/*.mdx`

Plan:

- Rewrite MDX frontmatter first so `highlight`, `resultLabel`, `impacto`, and `resultado` have distinct jobs.
- Then adjust card labels only if needed. Potential labels: “Construido”, “Resuelve”, “Demuestra”.
- Avoid using `highlight` as both “Clave” and fallback benefit.

#### Services/package copy

Files:

- `src/pages/servicios.astro`
- `src/data/services.ts`
- `src/components/ProductizedServices.astro`
- `src/components/PricingPlans.astro`

Plan:

- Add boundaries and deliverables without increasing section length.
- For each package, answer: ideal use case, included output, not included, first step.
- Align `PricingPlans` and `ProductizedServices` so the same service does not sound like two different offers.

### Priority 2

#### Demos by vertical

Files:

- `src/components/VerticalDemos.astro`
- `src/data/verticals.ts`

Plan:

- Keep the vertical structure.
- Replace “clear process” and generic solution labels with rubro-specific situations.
- Make each vertical name one practical module: carta, agenda, cotización, catálogo, tratamiento, stock.

#### Process

Files:

- `src/components/ProcessSteps.astro`
- `src/data/process.ts`

Plan:

- Replace “lista para compartir” with tangible milestone names: brief, wire/copy, preview, deploy, handoff.
- Include what the client sends and what MarinDev returns at each step.

#### FAQ

Files:

- `src/components/FAQs.astro`
- `src/data/faqs.ts`

Plan:

- Remove generic “primera versión clara”.
- Add more concrete expectations: what is needed to start, how revisions work, what happens after deploy, when a backend is needed.

### Priority 3

#### About page

Files:

- `src/pages/sobre-mi.astro`

Plan:

- Keep the philosophy, but reduce repetitions of “claridad”, “objetivo comercial”, and “lista para compartir”.
- Add a few concrete examples of decisions MarinDev makes: remove fields, prefill WhatsApp, split services, choose static vs panel.

#### Contact page

Files:

- `src/pages/contacto.astro`
- `src/components/ContactCTA.astro`

Plan:

- Keep the guided WhatsApp concept.
- Rename abstract badges such as “Propuesta clara” to tangible next outputs.
- CTA can become “Enviar brief por WhatsApp” if the page form/message acts like a brief.

#### Footer microcopy

Files:

- `src/components/Footer.astro`
- `src/data/site.ts`

Plan:

- Replace “sin fricción”/“lista para compartir” if they appear in low-context support copy.
- Keep footer compact; avoid adding another broad positioning sentence.

## Rewrite guardrails

- Do not make the site longer just to sound more human.
- Replace one generic sentence with one concrete sentence.
- Do not invent metrics or results.
- Do not use “sin humo” as a cosmetic fix.
- Do not remove commercial intent; make it more concrete.
- Every repeated phrase can appear once if it is the best phrase in that context.
- Prefer one proof point per section: deploy link, mockup, agenda module, WhatsApp message, panel, SEO/share setup, mobile flow.
