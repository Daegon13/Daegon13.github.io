# CTA audit — WhatsApp-first

Audit and implementation notes for the WhatsApp-first conversion pass based on `docs/copy-audit.md`.

| Location | Current label before this patch | Current destination / message intent before this patch | New label | Reason |
|---|---|---|---|---|
| `src/components/HeroV2.astro` | “Quiero una demo para mi negocio” | WhatsApp with generic demo/web brief fields. | “Quiero una demo para mi negocio” | Strong enough as hero CTA; message was shortened toward business + needed output. |
| `src/components/Nav.astro` | “Pedir demo” / “Pedir demo por WhatsApp” | WhatsApp default message. | Unchanged label | Short and mobile-safe; default message now asks business type and desired output. |
| `src/pages/index.astro` final CTA | “Quiero una demo para mi negocio” | WhatsApp demo message. | “Quiero una demo para mi negocio” | Primary home CTA stays specific and compact. |
| `src/pages/index.astro` secondary CTA | “Ver casos primero” | Scroll to cases. | “Ver demos por rubro” | More specific than “primero” and aligned with the section being linked. |
| `src/components/FeaturedCases.astro` CTA | “Pedir una demo” | WhatsApp demo message. | “Pedir demo parecida” | Ties the CTA to the visible portfolio examples without adding mobile length. |
| `src/pages/proyectos/index.astro` bottom CTA | “Pedir una demo” | WhatsApp demo message. | “Pedir demo parecida” | Uses the portfolio context instead of a generic demo request. |
| `src/components/ProjectCard.astro` primary CTA fallback | “Abrir caso” | Internal case detail route. | “Ver caso” | Avoids “abrir” and matches the case-study action. |
| `src/content/proyectos/*.mdx` card CTA labels | Specific labels such as “Ver demo barbería”, “Ver web editable”, “Abrir showcase funcional”. | Internal project detail route, while external demo has a separate “Ver demo” CTA. | “Ver caso” | Prevents duplicate “Ver demo” actions and clarifies that the primary card opens the case. |
| `src/pages/proyectos/[slug].astro` final CTA | “Quiero algo parecido” | WhatsApp message with old generic fields. | “Pedir demo parecida” | Makes the action explicit and uses a project-specific message helper. |
| `src/data/services.ts` service CTAs | Service-specific labels already present. | WhatsApp service message. | Unchanged labels | Labels already match the requested strategy: demo by rubro, landing, turnos, panel. |
| `src/components/ProductizedServices.astro` service CTAs | Labels from `src/data/services.ts`. | WhatsApp service message per service. | Unchanged labels | Component inherits the improved centralized service message. |
| `src/components/PricingPlans.astro` service CTAs | Labels from `src/data/services.ts`. | WhatsApp service message per service. | Unchanged labels | Service labels were already contextual and mobile-safe. |
| `src/components/VerticalDemos.astro` CTA | “Pedir demo” | Inline WhatsApp message with rubro + objective placeholders. | “Pedir demo para este rubro” | More contextual and now uses a centralized vertical message helper. |
| `src/pages/servicios.astro` final ContactCTA | “Consultar mi caso por WhatsApp” | WhatsApp service-selection message. | “Mandar datos del proyecto” | Names the actual action at the uncertainty stage. |
| `src/pages/contacto.astro` form submit | “Abrir conversación por WhatsApp” | Generated WhatsApp message with form fields. | “Enviar brief por WhatsApp” | The form behaves like a short brief; label is clearer and compact. |
| `src/pages/contacto.astro` direct WhatsApp link | “WhatsApp sin mensaje” | Raw `wa.me` without prefilled text. | “Abrir WhatsApp directo” | Keeps the no-message path but names it naturally. |
| `src/components/ContactCTA.astro` default primary CTA | “Enviar mensaje por WhatsApp” | WhatsApp audit/contact message. | “Enviar brief por WhatsApp” | More accurate for a guided contact block. |
| `src/components/ContactCTA.astro` badge | “Alcance sugerido” before this patch in current source; audit flagged older “Propuesta clara”. | Trust/output badge. | “Alcance sugerido” | Keeps the tangible output and avoids “propuesta clara”. |
