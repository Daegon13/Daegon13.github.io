# WhatsApp intents

Los CTA principales abren WhatsApp con mensajes precompletados desde `src/lib/contact.ts`. La intención es que Diego reciba contexto mínimo sin obligar al lead a completar un briefing largo.

| CTA source                                             | Message pattern                                                                                        | Expected lead context                                                                    |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Hero, navegación, footer, CTA final y contacto directo | `Hola Diego, quiero saber qué conviene construir primero. Mi rubro es: ___ y mi Instagram/web es: ___` | Rubro del negocio y link actual para orientar si conviene demo, landing, agenda o panel. |
| NeedSelector cards                                     | `Hola Diego, quiero consultar por [service]. Mi negocio es: ___ y hoy necesito resolver: ___`          | Servicio recomendado por situación y problema inicial que quiere resolver.               |
| VerticalDemos cards                                    | `Hola Diego, quiero una demo para [vertical]. Mi Instagram/web es: ___`                                | Rubro específico de la demo y referencia actual del negocio.                             |
| Service cards / pricing plans                          | `Hola Diego, quiero consultar por [service]. Mi negocio es: ___ y hoy necesito resolver: ___`          | Paquete de interés, tipo de negocio y necesidad operativa/comercial.                     |
| Project cards and case-study CTA                       | `Hola Diego, vi el caso [project] y quiero algo parecido para mi negocio. Mi rubro es: ___`            | Caso visto como referencia y rubro donde quiere aplicar una solución similar.            |
| Contact form                                           | Mensaje armado con rubro, Instagram/web, objetivo, interés y datos opcionales.                         | Datos estructurados del formulario sin convertir el WhatsApp en un briefing largo.       |
