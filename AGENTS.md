# AGENTS.md — Marin.dev V2

> Instrucciones maestras para Codex / agentes de desarrollo trabajando sobre `Daegon13.github.io`.
>
> Objetivo: convertir la web actual de Marin.dev en una landing/portfolio premium de alto impacto, orientada a conversión, demostración comercial y cierre de clientes locales/remotos.

---

## 0. Lectura obligatoria antes de tocar código

Este repo ya funciona. No lo trates como un proyecto roto ni como una migración desde cero.

### Stack real del repo

- Framework: **Astro 5**.
- Estilos: **Tailwind CSS 3**.
- Contenido de portfolio: **Astro Content Collections + MDX** en `src/content/proyectos`.
- Deploy: **GitHub Pages** mediante GitHub Actions.
- Contacto centralizado: `src/lib/contact.ts`.
- Componentes actuales:
  - `src/components/Nav.astro`
  - `src/components/Footer.astro`
  - `src/components/Badge.astro`
  - `src/components/ProjectCard.astro`
  - `src/components/PricingPlans.astro`
  - `src/components/FAQs.astro`
- Páginas actuales:
  - `src/pages/index.astro`
  - `src/pages/proyectos/index.astro`
  - `src/pages/proyectos/[slug].astro`
  - `src/pages/servicios.astro`
  - `src/pages/sobre-mi.astro`
  - `src/pages/contacto.astro`
  - `src/pages/gracias.astro`
  - `src/pages/politica-de-privacidad.astro`

### Estado técnico actual

El sitio compila correctamente con:

```bash
npm ci
npm run build
```

No introducir cambios que rompan esto.

### Problemas detectados en el repo actual

1. La web funciona, pero se percibe demasiado simple para el nivel de proyectos/demos que Marin.dev quiere vender.
2. El hero actual comunica “webs freelance” en vez de “demos comerciales y sistemas simples que ayudan a vender”.
3. Los proyectos se presentan demasiado como tarjetas técnicas, no como casos de negocio.
4. El portfolio no muestra todavía con suficiente fuerza el diferencial real: demos rápidas por rubro, WhatsApp, agenda, paneles, sistemas operativos simples y criterio CRO.
5. Hay dos workflows iguales en `.github/workflows`: `deploy.yml` y `main.yml`. Esto puede duplicar deploys. Debe resolverse en un patch de hardening, no al principio si no es urgente.
6. Existe un archivo raro duplicado: `src/content/proyectos/[slug].astro`. Ese archivo no debería vivir dentro de la carpeta de contenido MDX. Revisar si es residuo y eliminarlo si no se usa.
7. `.astro/` aparece dentro del ZIP/repo exportado. Debe ignorarse en `.gitignore` si no está versionado de forma intencional.
8. El sitio no debe perder su naturaleza estática, rápida y barata de mantener.

---

## 1. Norte estratégico de la V2

La V2 no debe ser “una web más linda”. Debe cambiar la percepción de Marin.dev.

### Posicionamiento actual percibido

> “Soy desarrollador web freelance y hago páginas.”

### Posicionamiento objetivo

> “Creo demos web, landings y sistemas simples para que negocios reales conviertan mejor sus visitas en consultas, reservas o ventas.”

### Promesa comercial central

Marin.dev ayuda a negocios, emprendimientos y profesionales a transformar una idea, Instagram o negocio local en una experiencia web clara, confiable y orientada a conversión.

### Frase base recomendada

> Demos web y sistemas simples para negocios que quieren convertir visitas en consultas, reservas o ventas.

### Subpromesa

> Diseño y desarrollo landing pages, demos comerciales, agendas, paneles básicos e integraciones con WhatsApp para mostrar valor rápido y vender con menos fricción.

### Qué NO debe comunicar

- “Hago sitios modernos y responsivos” como frase principal.
- “Soy freelance frontend” como propuesta principal.
- “Uso Astro, React y Tailwind” como argumento central.
- “Mirá mi stack” antes de explicar qué problema resuelve.

### Qué SÍ debe comunicar

- “Entiendo negocios y conversión.”
- “Puedo convertir tu Instagram/idea en una demo concreta.”
- “Puedo construir rápido sin que parezca barato.”
- “Puedo ordenar tus consultas, reservas o ventas.”
- “Puedo crear herramientas reales, no solo páginas decorativas.”

---

## 2. Visión estética detallada

La V2 debe sentirse como un **studio digital boutique**, no como plantilla genérica.

### Palabras clave de diseño

- Premium.
- Oscuro.
- Técnico.
- Comercial.
- Cinemático.
- Preciso.
- Limpio.
- Moderno.
- De alto contraste.
- Con sensación de “producto digital real”.

### Referencia conceptual

La estética debe vivir entre:

1. **Landing SaaS premium**: cards, dashboards, badges, métricas, CTAs fuertes.
2. **Studio creativo tech**: fondos oscuros, glows, composición visual, sensación de impacto.
3. **Portfolio comercial**: casos claros, antes/después, problemas resueltos.
4. **Web de producto**: visuales tipo panel, mockups, módulos, sistemas.

### Paleta recomendada

No hace falta usar exactamente estos valores, pero sí respetar la intención:

```txt
Fondo principal:     #050816 / #070A12 / #080B14
Fondo elevado:       #0D1222 / #10172A
Card glass:          rgba(15, 23, 42, 0.72)
Borde oscuro:        rgba(148, 163, 184, 0.14)
Texto principal:     #F8FAFC
Texto secundario:    #CBD5E1
Texto muted:         #94A3B8
Acento cian:         #22D3EE
Acento azul:         #3B82F6
Acento violeta:      #8B5CF6
Acento verde suave:  #34D399 para estados de éxito/conversión
Advertencia suave:   #FBBF24 solo para badges puntuales
```

### Fondo general

Usar fondo oscuro con capas sutiles:

- Gradiente radial cian/azul detrás del hero.
- Gradiente violeta muy leve en una esquina.
- Grid o ruido muy sutil si se puede implementar sin imágenes pesadas.
- Nada de fondos planos blancos en la home principal.

Ejemplo visual buscado:

```txt
body oscuro
  + halo radial superior izquierdo
  + halo radial derecho medio
  + cards con bordes finos
  + sombras suaves
  + mockups tipo dashboard/navegador
```

### Tipografía y jerarquía

- Mantener fuente sans moderna. Inter está bien si ya está declarada.
- Títulos grandes y contundentes.
- Bajadas con ancho máximo controlado.
- Mucha respiración vertical.
- No saturar con párrafos enormes en la home.

Jerarquías aproximadas:

```txt
Hero h1 desktop: 56px–72px si la composición lo permite.
Hero h1 mobile: 40px–48px.
Section h2: 32px–44px.
Card title: 18px–22px.
Text body: 16px–18px.
Text muted: 14px–16px.
Badges: 12px–13px.
```

### Bordes y cards

Usar cards con:

- `rounded-2xl` o `rounded-3xl`.
- Borde fino semitransparente.
- Fondo glass/dark elevado.
- Hover sutil: levantar sombra, aclarar borde o mover `translate-y-[-2px]`.
- Nada de sombras negras agresivas.
- Nada de cards blancas sin intención.

### Botones

CTA principal:

- Fondo con gradiente cian/azul o cian/violeta.
- Texto oscuro o blanco según contraste.
- Muy visible.
- Debe decir algo orientado a acción, no genérico.

Ejemplos:

- “Quiero una demo para mi negocio”
- “Revisar mi Instagram/web”
- “Cotizar una web que venda más”

CTA secundario:

- Borde sutil.
- Fondo translúcido.
- Texto claro.
- Acción: “Ver casos”, “Ver servicios”, “Ver demos”.

### Mockups visuales

Evitar depender de screenshots al principio. Crear mockups con HTML/Tailwind:

- Browser fake con barra superior.
- Dashboard fake con cards.
- Panel de agenda.
- Card de WhatsApp.
- Mini gráfico de consultas.
- Lista de leads.
- Badge “Demo lista”.
- Badge “Deploy activo”.

Esto da impacto sin requerir assets perfectos.

### Animaciones

Sin sobreingeniería.

Permitido:

- Transiciones CSS.
- Hover states.
- `animate-pulse` muy leve en glows o indicadores.
- `transform`, `opacity`, `translate` suaves.

Evitar al principio:

- Framer Motion.
- React solo por animación.
- WebGL.
- Three.js.
- Dependencias pesadas.

Si se agrega 3D en el futuro, debe ser un patch separado y opcional.

---

## 3. Visión de presentación del portfolio

El portfolio debe dejar de ser “lista de proyectos” y convertirse en **prueba comercial**.

### Principio

Cada proyecto debe responder, en menos de 10 segundos:

1. ¿Para qué negocio sirve?
2. ¿Qué problema resuelve?
3. ¿Qué función concreta tiene?
4. ¿Por qué Marin.dev puede ayudarme a mí?

### No priorizar el stack arriba

El stack importa, pero abajo. Para el cliente, primero importa:

- Rubro.
- Problema.
- Solución.
- Resultado o beneficio.
- Demo.

### Estructura recomendada de card de proyecto

Cada card debería mostrar:

```txt
[Tipo: Demo comercial / Sistema / Landing / Web corporativa]
Título del proyecto
Resumen comercial breve

Problema: ...
Solución: ...

Chips: WhatsApp, Agenda, Panel, SEO, Dashboard
CTA: Ver caso
```

### Casos destacados en la home

No mostrar necesariamente “los 3 más recientes”. Mejor mostrar los más fuertes comercialmente.

Criterio de destacados:

1. Visualmente más impactantes.
2. Más cercanos al tipo de cliente que se quiere conseguir.
3. Más demostrables.
4. Con link funcional.
5. Con problema/solución fácil de entender.

### Casos que deberían tener prioridad

Agregar o preparar estos casos si existen sus URLs reales:

1. **VetCare**
   - Tipo: Demo comercial / sistema simple.
   - Rubro: Veterinarias.
   - Promesa: agenda, urgencias, portal de mascota.
   - Valor: ordena consultas y muestra una solución más completa que una web institucional.

2. **Smart Stock**
   - Tipo: Sistema / dashboard.
   - Rubro: Inventario, stock, gestión interna.
   - Promesa: control de stock y visualización operativa.
   - Valor: prueba capacidad para hacer herramientas, no solo landings.

3. **Noir Barber / Barber demo**
   - Tipo: Demo comercial.
   - Rubro: barbería / estética masculina.
   - Promesa: estética fuerte + reservas/contacto.
   - Valor: muy vendible para leads locales.

4. **Gimnasio Tres Cruces demo**
   - Tipo: Demo comercial.
   - Rubro: gimnasio.
   - Promesa: mostrar servicios, planes, CTA y estética del negocio.
   - Valor: ejemplo claro de demo adaptada a Instagram/negocio real.

5. **Brasa 23**
   - Tipo: Demo restaurante.
   - Rubro: gastronomía.
   - Promesa: carta, reserva, pedido/contacto.
   - Valor: vertical muy entendible.

6. **Cristal Sagrado**
   - Tipo: Landing con panel admin.
   - Rubro: servicios/bienestar/esotérico.
   - Promesa: landing editable y foco en consultas.
   - Valor: caso real con marca y estética definida.

7. **Agencia Ariel**
   - Tipo: Web corporativa.
   - Rubro: logística.
   - Promesa: confianza institucional + consulta.
   - Valor: prueba de web para empresa tradicional.

### Página de detalle de proyecto

Debe parecer un mini caso de estudio, no un post MDX suelto.

Estructura sugerida:

```txt
Hero del caso:
  - Tipo de proyecto
  - Título
  - Resumen
  - Rubro / rol / fecha
  - CTA demo / repo
  - Mockup o cover

Bloque 1: Contexto
Bloque 2: Problema
Bloque 3: Solución
Bloque 4: Funcionalidades clave
Bloque 5: Impacto / Resultado / Aprendizaje
Bloque 6: Stack técnico
Bloque 7: CTA: “Quiero algo parecido”
```

### Campos de contenido recomendados para MDX

Extender `src/content/config.ts` con campos opcionales:

```ts
tipo: z.string().optional(),
idealPara: z.string().optional(),
features: z.array(z.string()).optional(),
impacto: z.string().optional(),
status: z.enum(['real', 'demo', 'concepto']).optional(),
featured: z.boolean().optional(),
priority: z.number().optional(),
ctaLabel: z.string().optional(),
```

Regla: no inventar métricas. Si no hay resultado real, usar beneficios cualitativos.

Correcto:

```txt
Impacto: Demo lista para mostrar una experiencia de agenda y urgencias sin depender de backend real.
```

Incorrecto:

```txt
Impacto: +87% de reservas comprobadas.
```

---

## 4. Arquitectura de componentes objetivo

No sobreingenierizar, pero sí ordenar.

### Componentes nuevos sugeridos

```txt
src/components/Container.astro
src/components/SectionHeader.astro
src/components/GlowCard.astro
src/components/HeroV2.astro
src/components/BrowserMockup.astro
src/components/MetricPill.astro
src/components/FeaturedCases.astro
src/components/ProjectCardV2.astro
src/components/VerticalDemos.astro
src/components/ProcessSteps.astro
src/components/ProductizedServices.astro
src/components/ContactCTA.astro
src/components/SocialProofStrip.astro
```

No es obligatorio crear todos si un patch queda más simple, pero esta es la dirección.

### Datos extra opcionales

Si el contenido empieza a crecer, crear:

```txt
src/data/site.ts
src/data/services.ts
src/data/verticals.ts
src/data/process.ts
```

Esto evita llenar `index.astro` con arrays enormes.

### Regla de oro

Cada patch debe mejorar una capa:

- Diseño base.
- Hero.
- Portfolio.
- Servicios.
- Contacto.
- SEO/performance.

No mezclar todo en un solo mega-commit.

---

## 5. Flujo comercial recomendado para la home

Orden ideal de secciones:

1. **Hero V2**
   - Promesa fuerte.
   - Mockup visual.
   - CTAs.
   - Prueba rápida de confianza.

2. **SocialProofStrip / Capability strip**
   - “Demos por rubro”.
   - “WhatsApp guiado”.
   - “Agenda y reservas”.
   - “Panel simple”.
   - “Deploy + repo”.

3. **Qué construyo / qué resuelvo**
   - Más consultas.
   - Menos fricción.
   - Más confianza.
   - Herramientas simples.

4. **Casos destacados**
   - 3 a 6 cards comerciales.
   - No solo stack.

5. **Demos por rubro**
   - Veterinarias.
   - Barberías.
   - Gimnasios.
   - Restaurantes.
   - Tiendas.
   - Servicios técnicos.
   - Estudios profesionales.
   - Clínicas estéticas.

6. **Proceso de trabajo**
   - Me pasás tu Instagram/web.
   - Analizo fricción y oportunidad.
   - Diseño demo/propuesta.
   - Construimos, deployamos y medimos.

7. **Servicios productizados**
   - Demo Comercial Express.
   - Landing de Conversión.
   - Web con WhatsApp/Agenda.
   - Sistema simple / panel admin.

8. **FAQs**
   - Mantener, pero adaptar copy.

9. **CTA final**
   - “Mandame tu Instagram/web y te digo qué mejoraría.”

---

## 6. Reglas de copywriting

### Tono

- Profesional, directo, concreto.
- Comercial sin sonar desesperado.
- Técnico solo cuando suma confianza.
- Nada de humo tipo “soluciones innovadoras 360”.

### Frases buenas

- “Convertí tu Instagram o negocio en una demo lista para vender.”
- “No alcanza con verse moderno: la web tiene que guiar a la consulta.”
- “Diseño páginas y sistemas simples con CTA, estructura y objetivo comercial.”
- “Una demo bien hecha te ayuda a vender la idea antes de invertir de más.”
- “Webs rápidas, claras y listas para compartir por WhatsApp.”

### Frases a evitar

- “Soluciones digitales a medida para potenciar tu presencia online.”
- “Diseño moderno y responsive.”
- “Transformamos tu visión en realidad.”
- “Innovación, creatividad y tecnología.”
- “Tu aliado digital.”

### CTA recomendado por contexto

Hero:

```txt
Quiero una demo para mi negocio
```

Proyectos:

```txt
Ver caso
Quiero algo parecido
```

Servicios:

```txt
Consultar este paquete
```

Contacto final:

```txt
Mandame mi web o Instagram
```

WhatsApp message base:

```txt
Hola Diego, quiero una demo/web para mi negocio.

Rubro: [rubro]
Objetivo: [más consultas / reservas / ventas]
Hoy tengo: [Instagram / web / nada]
Me interesa: [landing / demo / agenda / panel / no sé todavía]
Link de referencia: [Instagram o web]
```

---

## 7. Reglas técnicas para todos los patches

### Antes de modificar

1. Leer los archivos involucrados.
2. Entender cómo se importan los componentes.
3. Mantener rutas existentes.
4. No cambiar el stack salvo que el prompt lo pida expresamente.

### Validaciones obligatorias

Después de cada patch:

```bash
npm run build
```

Si hay cambios de formato relevantes:

```bash
npm run format
```

Si `npm run lint` falla por configuración previa del repo, reportar el error exacto y no inventar una configuración nueva salvo que el patch sea de tooling.

### No hacer

- No migrar a Next.js.
- No agregar React innecesariamente.
- No agregar dependencias de animación.
- No usar imágenes remotas pesadas sin fallback.
- No inventar métricas de proyectos.
- No romper GitHub Pages.
- No cambiar `site` en `astro.config.mjs` salvo que sea necesario.
- No eliminar páginas actuales sin redirección o reemplazo claro.

### Sí hacer

- Mantener componentes pequeños.
- Centralizar links de contacto.
- Mejorar SEO por página.
- Añadir `alt` en imágenes.
- Evitar overflow horizontal en mobile.
- Usar `loading="lazy"` en imágenes no críticas.
- Usar `decoding="async"`.
- Revisar contraste.

---

# 8. Plan de patches detallado

## Patch 00 — Incorporar AGENTS y preparar rama de rediseño

### Objetivo

Agregar estas instrucciones al repo y preparar el flujo de trabajo sin tocar todavía la UI.

### Cambios esperados

- Crear `AGENTS.md` en la raíz del repo.
- Crear rama sugerida `redesign-v2` o similar.
- Confirmar build inicial.
- Reportar hallazgos del repo sin modificar comportamiento.

### Prompt individual para Codex

```text
Actuá como agente de desarrollo cuidadoso. Estás trabajando en el repo Astro + Tailwind de Marin.dev.

Objetivo del patch 00:
Incorporar el archivo AGENTS.md como guía del rediseño V2 y preparar el repo para trabajar por patches sin cambiar todavía la UI ni el comportamiento del sitio.

Tareas:
1. Crear `AGENTS.md` en la raíz del repo con el contenido proporcionado por el usuario.
2. Revisar rápidamente la estructura del repo y confirmar:
   - framework usado,
   - scripts disponibles,
   - páginas principales,
   - componentes principales,
   - forma de deploy.
3. Ejecutar `npm run build`.
4. No modificar componentes visuales en este patch.
5. No resolver todavía workflows duplicados, diseño, contenido ni SEO. Solo reportar si detectás riesgos.

Restricciones:
- No agregar dependencias.
- No cambiar rutas.
- No tocar `src/pages/index.astro`.
- No tocar `tailwind.config.mjs`.

Criterio de aceptación:
- Existe `AGENTS.md` en raíz.
- `npm run build` pasa o se reporta el error exacto.
- El patch es de documentación y preparación únicamente.

Al finalizar, devolvé:
- Archivos creados/modificados.
- Resultado de `npm run build`.
- Observaciones técnicas relevantes para los próximos patches.
```

---

## Patch 01 — Design system oscuro premium y shell visual

### Objetivo

Cambiar la base visual del sitio para que todo respire “studio digital premium”, sin rediseñar todavía todas las secciones.

### Archivos probables

- `tailwind.config.mjs`
- `src/styles/tailwind.css`
- `src/layouts/BaseLayout.astro`
- `src/components/Badge.astro`
- Crear:
  - `src/components/Container.astro`
  - `src/components/SectionHeader.astro`
  - `src/components/GlowCard.astro`

### Resultado esperado

- Body oscuro.
- Gradientes de fondo sutiles.
- Cards compatibles con dark UI.
- Utilidades y componentes base para la V2.
- Sin romper páginas actuales.

### Prompt individual para Codex

```text
Actuá como senior frontend engineer y diseñador UI especializado en landings premium. Estás trabajando en el repo Astro + Tailwind de Marin.dev.

Objetivo del patch 01:
Crear la base visual V2 del sitio: estética oscura, premium, técnica y comercial, sin rediseñar todavía el contenido completo de la home.

Contexto:
- Astro 5 + Tailwind 3.
- El sitio actual compila y tiene páginas existentes.
- La V2 debe parecer un studio digital de demos/webs/sistemas, no una plantilla freelance simple.

Tareas:
1. Actualizar `tailwind.config.mjs` agregando tokens de diseño:
   - colores `ink`, `surface`, `line`, `muted`, `cyan`, `violet`, `blue` o nombres equivalentes.
   - sombras premium suaves.
   - gradientes o background images si ayudan.
   - radios o max-width si conviene.
2. Actualizar `src/styles/tailwind.css`:
   - body con fondo oscuro y texto claro.
   - selección de texto con color de marca.
   - foco accesible visible.
   - estilos base para links, prose oscuro si corresponde.
   - evitar overflow horizontal.
3. Actualizar `BaseLayout.astro`:
   - mantener SEO, JSON-LD, canonical, Nav y Footer.
   - aplicar el nuevo fondo global.
   - si agregás decoraciones de fondo, que sean livianas y no tapen contenido.
4. Crear `src/components/Container.astro`:
   - wrapper reutilizable con max-width y padding horizontal consistente.
   - aceptar `class` opcional desde props.
5. Crear `src/components/SectionHeader.astro`:
   - props: `eyebrow`, `title`, `description`, `align` opcional.
   - diseño compatible con fondo oscuro.
6. Crear `src/components/GlowCard.astro`:
   - card premium con borde translúcido, fondo elevado, hover suave.
   - aceptar `class` opcional.
7. Actualizar `Badge.astro` para que funcione visualmente en el nuevo tema oscuro.

Restricciones:
- No agregar React.
- No agregar dependencias nuevas.
- No tocar el contenido de MDX.
- No reescribir toda la home en este patch.
- No romper modo mobile.
- No eliminar rutas.

Criterio de aceptación:
- `npm run build` pasa.
- Las páginas actuales siguen navegables.
- La base visual ya se siente oscura/premium aunque algunas secciones todavía estén pendientes de rediseño.
- No hay overflow horizontal evidente.

Al finalizar, devolvé:
- Lista de archivos modificados/creados.
- Tokens agregados.
- Resultado de build.
- Notas visuales a revisar en navegador.
```

---

## Patch 02 — Contacto, redes y mensajes comerciales centralizados

### Objetivo

Centralizar correctamente datos de contacto, WhatsApp, Instagram y mensajes base antes de rediseñar CTAs.

### Archivos probables

- `src/lib/contact.ts`
- `src/components/Footer.astro`
- `src/components/Nav.astro`
- `src/pages/contacto.astro`

### Datos a usar

- WhatsApp: `+598097316092`
- Número E.164 para wa.me: `59897316092`
- Instagram: `@marin_dev_`
- Instagram URL: `https://www.instagram.com/marin_dev_/`
- Web: `https://daegon13.github.io/`
- GitHub: `https://github.com/Daegon13`
- LinkedIn: mantener si ya existe.

### Prompt individual para Codex

```text
Actuá como senior frontend engineer cuidadoso con UX comercial. Trabajá sobre el repo Astro + Tailwind de Marin.dev.

Objetivo del patch 02:
Centralizar y mejorar los datos de contacto/redes sociales y los mensajes de WhatsApp para que los CTAs de la V2 sean consistentes y orientados a conversión.

Tareas:
1. Actualizar `src/lib/contact.ts` para incluir:
   - `SITE_URL = "https://daegon13.github.io"`
   - `EMAIL` actual si ya existe.
   - `WHATSAPP_NUMBER_E164 = "59897316092"`
   - `WHATSAPP_BASE_URL` generado desde el número.
   - `INSTAGRAM_HANDLE = "@marin_dev_"`
   - `INSTAGRAM_URL = "https://www.instagram.com/marin_dev_/"`
   - `GITHUB_URL` actual.
   - `LINKEDIN_URL` actual.
2. Crear mensajes predefinidos exportados:
   - `DEFAULT_WHATSAPP_MESSAGE`
   - `DEMO_WHATSAPP_MESSAGE`
   - `AUDIT_WHATSAPP_MESSAGE`
   - `SERVICE_WHATSAPP_MESSAGE(planName: string)` si querés hacerlo como función.
3. Mantener helper `waLink(text?: string)`.
4. Actualizar `Footer.astro` para mostrar Instagram además de WhatsApp, Email, GitHub y LinkedIn.
5. Actualizar CTA del `Nav.astro` si corresponde:
   - Que no diga solo “Cotizar” si puede decir algo más comercial tipo “Pedir demo”.
6. Revisar `src/pages/contacto.astro`:
   - Que use constantes de `contact.ts`, no números hardcodeados si se puede evitar.
   - Que el mensaje generado para WhatsApp sea claro y útil.

Restricciones:
- No cambiar todavía layout completo del contacto.
- No agregar formularios backend.
- No agregar dependencias.
- No romper el build.

Criterio de aceptación:
- Todos los links de redes/contacto salen desde `src/lib/contact.ts`.
- WhatsApp abre con mensaje legible y comercial.
- Instagram `@marin_dev_` aparece en footer o zona de contacto.
- `npm run build` pasa.

Al finalizar, devolvé:
- Archivos modificados.
- Mensajes WhatsApp agregados.
- Resultado de build.
```

---

## Patch 03 — Hero V2 de alto impacto

### Objetivo

Cambiar la primera pantalla. El visitante debe entender en 5 segundos que Marin.dev construye experiencias comerciales, no solo páginas.

### Archivos probables

- Crear `src/components/HeroV2.astro`
- Crear `src/components/BrowserMockup.astro` si conviene.
- Modificar `src/pages/index.astro`

### Elementos obligatorios

- Eyebrow.
- H1 fuerte.
- Bajada comercial.
- CTA principal a WhatsApp.
- CTA secundario a proyectos.
- Mockup visual hecho con HTML/Tailwind.
- Indicadores de valor.

### Prompt individual para Codex

```text
Actuá como frontend engineer senior, diseñador UI y especialista CRO. Trabajá en el repo Astro + Tailwind de Marin.dev.

Objetivo del patch 03:
Rediseñar el hero de la home para causar impacto visual y comercial. Debe posicionar a Marin.dev como creador de demos web, landings y sistemas simples orientados a conversión.

Mensaje central recomendado:
"Demos web y sistemas simples para negocios que quieren convertir visitas en consultas, reservas o ventas."

Tareas:
1. Crear `src/components/HeroV2.astro`.
2. Opcional: crear `src/components/BrowserMockup.astro` si mejora la limpieza.
3. Reemplazar el hero actual de `src/pages/index.astro` por `HeroV2`.
4. El hero debe incluir:
   - Eyebrow: "Marin.dev · demos, webs y sistemas comerciales" o variante mejor.
   - H1 fuerte orientado a resultado.
   - Bajada que mencione landings, demos, WhatsApp, agenda, paneles simples e integraciones.
   - CTA principal a WhatsApp usando `waLink(DEMO_WHATSAPP_MESSAGE)`.
   - CTA secundario hacia `/proyectos` o `#casos`.
   - Microprueba: "Repo + deploy", "Entrega por hitos", "WhatsApp guiado", "Astro / Next / Tailwind".
5. Crear un mockup visual del lado derecho en desktop y debajo en mobile:
   - Browser fake o dashboard fake.
   - Card de lead: "Nueva consulta por WhatsApp".
   - Card de agenda: "Reserva confirmada".
   - Card de panel: "Servicios editables".
   - Mini métrica: "Menos fricción → más consultas".
6. Usar fondo con glow/gradiente, sin imágenes externas.
7. Debe verse muy bien en mobile.

Restricciones:
- No agregar dependencias.
- No usar React.
- No usar WebGL ni canvas.
- No depender de screenshots.
- No tocar proyectos ni pricing en este patch.

Criterio de aceptación:
- `npm run build` pasa.
- El hero no genera overflow horizontal.
- El CTA principal abre WhatsApp con mensaje de demo.
- La primera pantalla se percibe más premium y comercial.

Al finalizar, devolvé:
- Archivos creados/modificados.
- Decisiones visuales.
- Resultado del build.
- Qué revisar en navegador mobile/desktop.
```

---

## Patch 04 — Modelo de portfolio comercial y schema MDX

### Objetivo

Preparar el contenido para que los proyectos funcionen como casos comerciales.

### Archivos probables

- `src/content/config.ts`
- MDX existentes en `src/content/proyectos/*.mdx`
- Posible limpieza de `src/content/proyectos/[slug].astro`

### Campos nuevos sugeridos

```ts
tipo: z.string().optional(),
idealPara: z.string().optional(),
features: z.array(z.string()).optional(),
impacto: z.string().optional(),
status: z.enum(['real', 'demo', 'concepto']).optional(),
featured: z.boolean().optional(),
priority: z.number().optional(),
ctaLabel: z.string().optional(),
```

### Prompt individual para Codex

```text
Actuá como senior frontend engineer y content architect para portfolios comerciales en Astro.

Objetivo del patch 04:
Extender el modelo de datos de los proyectos para que puedan presentarse como casos comerciales, sin romper los MDX existentes.

Contexto:
- Los proyectos viven en `src/content/proyectos/*.mdx`.
- El schema está en `src/content/config.ts`.
- Actualmente existen campos como title, sector, rol, stack, fecha, resumen, problema, solucion, resultado, repoUrl, demoUrl y cover.

Tareas:
1. Actualizar `src/content/config.ts` agregando campos opcionales:
   - `tipo`
   - `idealPara`
   - `features`
   - `impacto`
   - `status` con valores `real`, `demo`, `concepto`
   - `featured`
   - `priority`
   - `ctaLabel`
2. Mantener compatibilidad con los MDX actuales.
3. Actualizar los MDX existentes agregando campos útiles cuando sea claro:
   - Cristal Sagrado.
   - Servicio de Tarot.
   - Agencia Ariel.
4. No inventar métricas nuevas. Si hay `resultado` existente, mantenerlo. Si no hay resultado medible, usar `impacto` cualitativo.
5. Revisar si existe `src/content/proyectos/[slug].astro`.
   - Si es un duplicado accidental de la página de detalle, eliminarlo.
   - Si al eliminarlo algo falla, revertir y reportar.
6. Ejecutar build.

Restricciones:
- No rediseñar todavía las cards.
- No agregar proyectos nuevos en este patch salvo que sea mínimo y seguro.
- No cambiar rutas.
- No agregar dependencias.

Criterio de aceptación:
- `npm run build` pasa.
- Los MDX actuales siguen renderizando.
- El schema queda listo para cards/casos más comerciales.
- Se elimina o reporta claramente el archivo duplicado extraño si corresponde.

Al finalizar, devolvé:
- Campos agregados.
- MDX modificados.
- Qué pasó con `src/content/proyectos/[slug].astro`.
- Resultado de build.
```

---

## Patch 05 — Cards y página de proyectos como casos comerciales

### Objetivo

Rediseñar `/proyectos` y las cards para vender capacidad, no solo mostrar stack.

### Archivos probables

- `src/components/ProjectCard.astro` o crear `ProjectCardV2.astro`
- `src/pages/proyectos/index.astro`
- `src/pages/index.astro` si usa cards destacadas

### Prompt individual para Codex

```text
Actuá como senior frontend engineer y estratega de presentación de portfolio. Trabajá en el repo Astro + Tailwind de Marin.dev.

Objetivo del patch 05:
Transformar las cards y la página `/proyectos` para que los proyectos parezcan casos comerciales de negocio, no simples tarjetas técnicas.

Tareas:
1. Rediseñar `ProjectCard.astro` o crear `ProjectCardV2.astro` si preferís evitar romper usos existentes.
2. La card debe mostrar:
   - `tipo` o fallback por sector.
   - `status` como badge si existe: Real / Demo / Concepto.
   - título.
   - resumen comercial.
   - problema o impacto resumido.
   - hasta 4 features si existen; si no, usar stack como fallback.
   - resultado o impacto si existe.
   - CTA visual: `Ver caso` o `ctaLabel`.
3. Actualizar `/proyectos/index.astro`:
   - Título: "Casos, demos y sistemas".
   - Bajada: explicar que son proyectos pensados para conversión, operación o validación comercial.
   - Ordenar por `featured`, luego `priority`, luego fecha descendente.
   - Usar grid premium.
4. Asegurar que la home pueda seguir renderizando proyectos destacados.
5. Diseñar el estado visual para proyectos sin cover usando un fallback elegante, no una imagen rota.
6. Mantener soporte para `cover` remoto o local.

Restricciones:
- No inventar contenido ni métricas.
- No agregar dependencias.
- No romper rutas de detalle.
- No saturar la card con demasiados badges.

Criterio de aceptación:
- `npm run build` pasa.
- `/proyectos` se siente como portfolio comercial premium.
- Cards funcionan aunque falten campos opcionales.
- Mobile se ve bien.

Al finalizar, devolvé:
- Archivos modificados.
- Cómo se ordenan los proyectos.
- Resultado de build.
- Riesgos visuales a revisar.
```

---

## Patch 06 — Página detalle de proyecto como caso de estudio

### Objetivo

Convertir `/proyectos/[slug]` en una estructura de caso de estudio clara, con CTAs y narrativa comercial.

### Archivos probables

- `src/pages/proyectos/[slug].astro`
- Posibles componentes:
  - `CaseHero.astro`
  - `CaseSection.astro`
  - `FeatureList.astro`

### Prompt individual para Codex

```text
Actuá como frontend engineer senior y UX writer orientado a casos de estudio comerciales.

Objetivo del patch 06:
Rediseñar la página de detalle `/proyectos/[slug].astro` para que cada proyecto se lea como un caso de negocio convincente.

Tareas:
1. Rediseñar el layout del detalle de proyecto con estética V2 oscura/premium.
2. Estructura sugerida:
   - Hero del caso con tipo/status, título, resumen, sector, rol, fecha.
   - Cover/mockup grande si existe.
   - CTAs: demo y repositorio si existen.
   - Bloques: Problema, Solución, Funcionalidades, Impacto/Resultado, Stack.
   - Render del contenido MDX adicional al final.
   - CTA final: "Quiero algo parecido" a WhatsApp usando mensaje con nombre del proyecto.
3. Si `features` existe, mostrarlo como lista visual.
4. Si `impacto` o `resultado` existe, destacarlo en una card.
5. Mantener fallback elegante para campos faltantes.
6. Asegurar `prose` compatible con tema oscuro.

Restricciones:
- No romper `getStaticPaths`.
- No agregar dependencias.
- No inventar datos faltantes.
- No eliminar renderizado MDX.

Criterio de aceptación:
- `npm run build` pasa.
- Los tres proyectos actuales renderizan bien.
- Cada caso tiene CTA final.
- La página se ve premium en mobile y desktop.

Al finalizar, devolvé:
- Archivos modificados/creados.
- Resultado de build.
- Campos con fallback implementados.
```

---

## Patch 07 — Agregar nuevos casos/demos estratégicos al portfolio

### Objetivo

Incorporar los proyectos más fuertes de Marin.dev para que el portfolio muestre el nivel real del trabajo.

### Casos a incorporar

Agregar solo si hay URL real o dejar sin URL con nota clara en el MDX. No inventar.

Sugerencias conocidas del proyecto:

- VetCare: `https://vetcare-uy.vercel.app/`
- Smart Stock: repo `https://github.com/Daegon13/smart-stock` si corresponde; demo solo si está confirmada.
- Barber demo: `https://barber-demo-puce.vercel.app/`
- Gimnasio Tres Cruces: `https://gimnasio-tres-cruces-demo.vercel.app/`
- Brasa 23: `https://daegon13.github.io/Brasa-23/`
- Clínica estética: confirmar URL antes de agregar demo si no está en repo.

### Prompt individual para Codex

```text
Actuá como content strategist y frontend engineer trabajando con Astro Content Collections.

Objetivo del patch 07:
Agregar al portfolio los casos/demos estratégicos de Marin.dev para que la web muestre mejor su capacidad comercial real.

Tareas:
1. Crear nuevos archivos MDX en `src/content/proyectos/` para estos casos si no existen:
   - VetCare.
   - Smart Stock.
   - Barber demo / Noir Barber Studio.
   - Gimnasio Tres Cruces.
   - Brasa 23.
2. Usar los campos del schema extendido:
   - title
   - sector
   - rol
   - stack
   - fecha
   - resumen
   - problema
   - solucion
   - resultado o impacto
   - tipo
   - idealPara
   - features
   - status
   - featured
   - priority
   - demoUrl
   - repoUrl si corresponde
   - cover si hay imagen real; si no, usar `/og-default.png`
3. No inventar métricas de resultados.
4. Diferenciar claramente proyectos reales, demos y sistemas.
5. Marcar como `featured: true` los casos más vendibles.
6. Ordenar prioridades para que aparezcan primero los más fuertes comercialmente.

URLs conocidas que podés usar si corresponde:
- VetCare: https://vetcare-uy.vercel.app/
- Barber demo: https://barber-demo-puce.vercel.app/
- Gimnasio Tres Cruces: https://gimnasio-tres-cruces-demo.vercel.app/
- Brasa 23: https://daegon13.github.io/Brasa-23/
- Smart Stock repo: https://github.com/Daegon13/smart-stock

Restricciones:
- Si no conocés una URL de demo, no la inventes.
- Si no hay cover, usar fallback.
- No tocar diseño en este patch salvo ajustes mínimos por contenido.
- No crear resultados numéricos falsos.

Criterio de aceptación:
- `npm run build` pasa.
- `/proyectos` muestra más variedad y nivel.
- Los casos nuevos tienen copy comercial claro.
- Los proyectos destacados muestran lo mejor primero.

Al finalizar, devolvé:
- MDX creados.
- URLs usadas.
- URLs pendientes/no incluidas por falta de confirmación.
- Resultado de build.
```

---

## Patch 08 — Home V2 completa: flujo comercial y secciones de impacto

### Objetivo

Reordenar la home para que tenga narrativa completa: promesa, capacidades, casos, rubros, proceso, servicios y CTA.

### Archivos probables

- `src/pages/index.astro`
- Crear:
  - `src/components/SocialProofStrip.astro`
  - `src/components/FeaturedCases.astro`
  - `src/components/VerticalDemos.astro`
  - `src/components/ProcessSteps.astro`
  - `src/components/ContactCTA.astro`

### Prompt individual para Codex

```text
Actuá como senior frontend engineer, diseñador UI y especialista CRO. Trabajá sobre el repo Astro + Tailwind de Marin.dev.

Objetivo del patch 08:
Rediseñar la home completa con flujo comercial premium. La home debe vender a Marin.dev como estudio de demos, webs y sistemas simples orientados a conversión.

Tareas:
1. Reorganizar `src/pages/index.astro` con este flujo:
   - HeroV2.
   - Strip de capacidades/confianza.
   - Qué resuelvo.
   - Casos destacados.
   - Demos por rubro.
   - Proceso de trabajo.
   - Servicios/productos.
   - FAQs.
   - CTA final.
2. Crear `SocialProofStrip.astro` o similar:
   - "Repo + deploy"
   - "WhatsApp guiado"
   - "Agenda / reservas"
   - "Panel simple"
   - "Entrega por hitos"
3. Crear `FeaturedCases.astro`:
   - Obtener proyectos desde content collection o recibirlos por props.
   - Mostrar proyectos destacados con cards comerciales.
4. Crear `VerticalDemos.astro`:
   - Cards por rubro: veterinarias, barberías, gimnasios, restaurantes, tiendas, servicios técnicos, clínicas estéticas, estudios profesionales.
   - Cada card debe decir qué tipo de demo puede construirse y qué problema resuelve.
5. Crear `ProcessSteps.astro`:
   - Paso 1: me pasás tu Instagram/web/idea.
   - Paso 2: detecto fricción y oportunidad.
   - Paso 3: diseño demo/propuesta.
   - Paso 4: construimos, deployamos y dejamos listo para vender.
6. Crear `ContactCTA.astro` reutilizable:
   - Título, descripción, CTA principal WhatsApp, CTA secundario opcional.
7. Mantener `PricingPlans` y `FAQs` por ahora, aunque se rediseñen en patches posteriores.
8. Cuidar mucho mobile: secciones respirables, sin grids apretados.

Restricciones:
- No agregar dependencias.
- No usar React.
- No inventar métricas.
- No eliminar contenido útil, pero sí reescribir copy genérico.
- No romper rutas.

Criterio de aceptación:
- `npm run build` pasa.
- La home tiene narrativa comercial completa.
- Visualmente se siente de mayor nivel que la versión anterior.
- Los CTAs son claros y apuntan a WhatsApp/proyectos.

Al finalizar, devolvé:
- Componentes creados.
- Flujo final de la home.
- Resultado de build.
- Revisión manual sugerida.
```

---

## Patch 09 — Servicios productizados y pricing comercial

### Objetivo

Reemplazar la lógica de “paquetes web genéricos” por productos comerciales claros.

### Servicios recomendados

1. **Demo Comercial Express**
   - Para visualizar una propuesta rápido.
   - Ideal para leads, validación, mostrar una idea.

2. **Landing de Conversión**
   - Para captar consultas, reservas o ventas.
   - Ideal para campañas, servicios y negocios locales.

3. **Web con WhatsApp / Agenda**
   - Para ordenar consultas o reservas.
   - Ideal para gimnasios, barberías, veterinarias, clínicas, restaurantes.

4. **Sistema simple / Panel Admin**
   - Para gestión de contenido, stock, leads, reservas o datos.
   - Ideal cuando ya se necesita operación interna.

### Prompt individual para Codex

```text
Actuá como product strategist, CRO copywriter y frontend engineer. Trabajá en el repo Astro + Tailwind de Marin.dev.

Objetivo del patch 09:
Rediseñar la sección de servicios/precios para que los paquetes se perciban como productos comerciales claros, no como servicios web genéricos.

Tareas:
1. Actualizar o reemplazar `PricingPlans.astro` por una versión V2.
2. Los planes deben ser:
   - Demo Comercial Express.
   - Landing de Conversión.
   - Web con WhatsApp / Agenda.
   - Sistema simple / Panel Admin.
3. Cada plan debe incluir:
   - Nombre.
   - Rango de precio si se mantiene.
   - Para quién es.
   - Qué problema resuelve.
   - Entregables concretos.
   - Tiempo estimado si corresponde.
   - CTA a WhatsApp con mensaje específico del plan.
4. Visualmente:
   - Cards premium oscuras.
   - Un plan destacado recomendado.
   - Badges claros.
   - Comparación rápida sin abrumar.
5. Actualizar `src/pages/servicios.astro` para que no sea solo pricing + FAQ:
   - Agregar hero breve de servicios.
   - Agregar explicación: "Elegí un punto de partida, no un molde cerrado".
   - Incluir CTA final.

Restricciones:
- No prometer funcionalidades complejas como backend robusto si no están incluidas.
- No bajar precios sin instrucción explícita.
- No inventar garantías absolutas.
- No agregar dependencias.

Criterio de aceptación:
- `npm run build` pasa.
- Servicios se entienden mejor que antes.
- Cada CTA abre WhatsApp con plan identificado.
- La página `/servicios` tiene más fuerza comercial.

Al finalizar, devolvé:
- Planes finales implementados.
- Archivos modificados.
- Resultado de build.
```

---

## Patch 10 — Página Sobre mí como manifiesto profesional

### Objetivo

Que “Sobre mí” deje de sonar a bio básica y se convierta en una pieza de confianza.

### Mensaje objetivo

Diego no es solo alguien que maquetea. Es alguien que piensa en producto, conversión, demos, sistemas y entrega real.

### Prompt individual para Codex

```text
Actuá como UX writer y frontend engineer. Trabajá en el repo Astro + Tailwind de Marin.dev.

Objetivo del patch 10:
Rediseñar `src/pages/sobre-mi.astro` para que funcione como manifiesto profesional y pieza de confianza comercial.

Tareas:
1. Reescribir el contenido de Sobre mí con este enfoque:
   - Diego Marin / Marin.dev.
   - Desarrollo webs, demos comerciales y sistemas simples.
   - Foco en conversión, claridad y entrega real.
   - Trabajo por hitos, repo, deploy y comunicación clara.
2. Agregar secciones:
   - Cómo pienso los proyectos.
   - Qué tipo de problemas me interesa resolver.
   - Stack técnico, pero como soporte, no como protagonista.
   - Forma de trabajo.
3. Visualmente usar estética V2:
   - Hero simple.
   - Cards de principios.
   - Timeline o steps de proceso.
   - CTA final a WhatsApp.
4. Mantener contenido honesto. No inflar experiencia con claims falsos.

Restricciones:
- No inventar clientes ni logros.
- No agregar dependencias.
- No crear una biografía larguísima.
- No romper rutas.

Criterio de aceptación:
- `npm run build` pasa.
- La página aumenta confianza.
- El stack técnico aparece, pero no domina el mensaje.
- Hay CTA final claro.

Al finalizar, devolvé:
- Archivos modificados.
- Resumen del nuevo posicionamiento de la página.
- Resultado de build.
```

---

## Patch 11 — Contacto V2 orientado a conversión

### Objetivo

Convertir contacto en una experiencia guiada para cerrar conversaciones, no en formulario frío.

### Prompt individual para Codex

```text
Actuá como CRO specialist y frontend engineer. Trabajá en el repo Astro + Tailwind de Marin.dev.

Objetivo del patch 11:
Rediseñar `src/pages/contacto.astro` para que sea una página de contacto orientada a conversión y WhatsApp, con mensaje guiado claro.

Tareas:
1. Rediseñar visualmente la página con estética V2.
2. Cambiar el enfoque del título:
   - De "Contacto" a algo más comercial como "Contame qué querés mejorar y te digo el mejor camino".
3. Mantener el formulario que arma mensaje de WhatsApp, pero mejorar campos:
   - Nombre.
   - Email opcional.
   - Rubro.
   - Link a Instagram/web actual.
   - Objetivo: más consultas / reservas / ventas / sistema interno / otro.
   - Interés: demo / landing / agenda / panel / no sé todavía.
   - Presupuesto estimado opcional.
   - Mensaje libre.
4. El submit debe abrir WhatsApp con mensaje bien formateado usando el número centralizado desde `contact.ts` cuando sea posible.
5. Agregar cards laterales o debajo:
   - WhatsApp directo.
   - Instagram `@marin_dev_`.
   - GitHub/LinkedIn si aporta.
6. Agregar microcopy que baje fricción:
   - "No necesitás tener todo definido. Con tu Instagram o idea alcanza para empezar."

Restricciones:
- Sin backend.
- Sin dependencias.
- No pedir datos sensibles.
- No hacer obligatorio presupuesto si puede frenar contacto.
- No romper accesibilidad básica.

Criterio de aceptación:
- `npm run build` pasa.
- El formulario abre WhatsApp con mensaje útil.
- Mobile se ve bien.
- Links de redes funcionan.

Al finalizar, devolvé:
- Campos implementados.
- Archivos modificados.
- Resultado de build.
```

---

## Patch 12 — SEO, Open Graph, deploy y limpieza técnica

### Objetivo

Dejar el sitio sólido para compartir, rankear básico y deployar sin duplicaciones.

### Archivos probables

- `.gitignore`
- `.github/workflows/*`
- `BaseLayout.astro`
- `astro.config.mjs`
- `public/og-default.png` si se cambia
- `readme` o `README.md`

### Prompt individual para Codex

```text
Actuá como senior frontend engineer orientado a producción. Trabajá en el repo Astro + Tailwind de Marin.dev.

Objetivo del patch 12:
Hacer hardening técnico: SEO, Open Graph, GitHub Pages, limpieza de archivos generados y documentación mínima.

Tareas:
1. Revisar `.gitignore`:
   - Asegurar que incluye `.astro/`, `dist/`, `node_modules/`, `.env`, logs y temporales.
2. Revisar `.github/workflows`:
   - Hay dos workflows aparentemente duplicados: `deploy.yml` y `main.yml`.
   - Dejar solo uno si son idénticos, preferentemente `deploy.yml`.
   - No romper GitHub Pages.
3. Revisar `BaseLayout.astro`:
   - Title/description por página.
   - canonical correcto.
   - OG title/description/image/url.
   - Twitter card si conviene.
   - JSON-LD actualizado a nuevo posicionamiento: Marin.dev como WebDesignService / ProfessionalService o Service.
4. Actualizar `readme` o renombrar a `README.md` si conviene:
   - scripts.
   - estructura.
   - cómo agregar proyectos.
   - deploy.
5. Revisar `robots.txt` y sitemap.
6. Ejecutar build.

Restricciones:
- No cambiar contenido visual en este patch salvo ajustes SEO mínimos.
- No tocar diseño de secciones.
- No agregar dependencias sin necesidad.
- No aplicar `npm audit fix` automáticamente si implica cambios mayores.

Criterio de aceptación:
- `npm run build` pasa.
- Hay un único workflow de deploy si los duplicados eran equivalentes.
- `.astro/` queda ignorado.
- SEO base queda alineado al nuevo posicionamiento.
- README queda útil.

Al finalizar, devolvé:
- Limpiezas realizadas.
- Workflow final.
- Resultado de build.
- Cualquier riesgo detectado.
```

---

## Patch 13 — Microinteracciones premium y polish visual

### Objetivo

Elevar percepción de calidad sin meter complejidad pesada.

### Permitido

- Hover refinado.
- Transiciones suaves.
- Glows dinámicos con CSS.
- Cards flotantes con transform leve.
- Animaciones CSS discretas.
- Scroll reveal solo si se implementa sin dependencias y sin romper accesibilidad.

### No permitido

- Three.js.
- React solo por animación.
- Framer Motion.
- Animaciones que mareen.
- Pérdida de performance mobile.

### Prompt individual para Codex

```text
Actuá como UI engineer obsesionado con detalles visuales, pero pragmático con performance. Trabajá en el repo Astro + Tailwind de Marin.dev.

Objetivo del patch 13:
Agregar microinteracciones y polish premium a la V2 sin introducir dependencias ni complejidad innecesaria.

Tareas:
1. Revisar hero, cards de proyectos, servicios, verticales y CTA final.
2. Agregar transiciones consistentes:
   - hover de cards.
   - hover de botones.
   - cambio de borde/glow.
   - movimiento leve `translate-y`.
3. Agregar decoraciones sutiles:
   - halos radiales.
   - líneas/grid muy suave.
   - indicadores tipo status dot.
4. Asegurar que `prefers-reduced-motion` respete usuarios con reducción de movimiento si se agregan animaciones.
5. No tocar contenido/copy salvo ajustes mínimos para composición.
6. Revisar mobile especialmente.

Restricciones:
- No dependencias nuevas.
- No React.
- No WebGL.
- No animaciones pesadas.
- No sacrificar legibilidad por estética.

Criterio de aceptación:
- `npm run build` pasa.
- La web se siente más premium.
- No hay overflow horizontal.
- La performance percibida sigue rápida.

Al finalizar, devolvé:
- Elementos pulidos.
- Archivos modificados.
- Resultado de build.
- Riesgos visuales a revisar.
```

---

## Patch 14 — QA final, responsive y checklist de publicación

### Objetivo

Cerrar la V2 con revisión integral antes de publicarla como carta de presentación.

### Prompt individual para Codex

```text
Actuá como QA frontend senior y reviewer de producción. Trabajá en el repo Astro + Tailwind de Marin.dev.

Objetivo del patch 14:
Hacer una revisión final de la V2 antes de publicarla/usar la web como carta de presentación comercial.

Tareas:
1. Ejecutar `npm run build`.
2. Revisar rutas principales:
   - `/`
   - `/proyectos`
   - `/proyectos/[slug]` para al menos 2 proyectos.
   - `/servicios`
   - `/sobre-mi`
   - `/contacto`
3. Revisar responsive en mental breakpoints:
   - mobile pequeño.
   - mobile grande.
   - tablet.
   - desktop.
4. Buscar problemas comunes:
   - overflow horizontal.
   - textos con bajo contraste.
   - CTAs poco visibles.
   - links rotos.
   - imágenes rotas.
   - cards con alturas raras.
   - contenido duplicado.
5. Revisar accesibilidad básica:
   - foco visible.
   - labels de formulario.
   - alt en imágenes.
   - aria cuando corresponda.
6. Revisar SEO/share:
   - title y description no genéricos.
   - OG image existe.
   - canonical correcto.
7. Crear o actualizar un archivo `V2_QA_CHECKLIST.md` con:
   - checks realizados.
   - pendientes.
   - recomendaciones para siguiente versión.

Restricciones:
- No hacer rediseños grandes en este patch.
- Solo fixes pequeños y seguros.
- Si detectás algo grande, reportarlo como pendiente.

Criterio de aceptación:
- `npm run build` pasa.
- Checklist creado/actualizado.
- No hay issues críticos obvios.
- La web está lista para presentarse.

Al finalizar, devolvé:
- Resultado de build.
- Fixes aplicados.
- Pendientes no bloqueantes.
- Link/nombre del checklist generado.
```

---

# 9. Prompts cortos de continuación por si Codex se queda a mitad

## Continuar un patch sin reinterpretar todo

```text
Continuá el patch actual siguiendo AGENTS.md. No cambies el alcance. Primero revisá lo ya modificado, completá tareas pendientes, ejecutá `npm run build` y reportá archivos modificados + resultado.
```

## Corregir build roto

```text
El build quedó roto. No agregues features nuevas. Leé el error exacto, identificá la causa mínima, corregí solo lo necesario y ejecutá `npm run build` de nuevo. Reportá causa, fix y archivos tocados.
```

## Evitar que Codex haga rediseño genérico

```text
No hagas una mejora visual genérica. Seguí la visión estética de AGENTS.md: dark premium, studio digital, mockups tipo dashboard, portfolio como casos comerciales, CTAs orientados a WhatsApp/demo. Cada cambio debe reforzar conversión y percepción de valor.
```

## Pedir revisión crítica post-patch

```text
Revisá críticamente el patch implementado contra AGENTS.md. Señalá qué quedó fuerte, qué quedó genérico, qué puede romper conversión, qué habría que mejorar en el siguiente patch y si el build pasa.
```

## Pedir que no toque más de la cuenta

```text
Reducí el alcance. Este patch debe resolver solo lo pedido. No cambies arquitectura, rutas ni contenido no relacionado. Hacé el mínimo cambio robusto y dejá recomendaciones separadas como pendientes.
```

---

# 10. Checklist mínimo de aceptación de la V2 completa

La V2 está lista cuando:

- [ ] La home ya no se siente como portfolio freelance genérico.
- [ ] El hero comunica demos/webs/sistemas orientados a conversión.
- [ ] Hay CTA claro a WhatsApp en hero, servicios, proyectos y contacto.
- [ ] El portfolio muestra casos comerciales con problema/solución/impacto.
- [ ] Hay demos por rubro o verticales claras.
- [ ] Los servicios están productizados.
- [ ] La página de contacto guía la conversación.
- [ ] El sitio compila con `npm run build`.
- [ ] No hay overflow horizontal en mobile.
- [ ] Los links principales funcionan.
- [ ] GitHub Pages deploya con un solo workflow.
- [ ] `.astro/` y `dist/` no quedan versionados.
- [ ] El README explica cómo mantener el sitio.

---

# 11. Principio final para el agente

Cada decisión debe responder esta pregunta:

> ¿Esto hace que un cliente potencial confíe más en Marin.dev y tenga menos fricción para escribir por WhatsApp?

Si la respuesta es no, probablemente es decoración innecesaria.

El objetivo no es mostrar que sabemos usar tecnología. El objetivo es demostrar que sabemos convertir tecnología en una pieza comercial que ayuda a vender.
