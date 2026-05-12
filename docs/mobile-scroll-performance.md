# Mobile scroll performance notes

## Suspected causes

- No se encontró `content-visibility: auto` ni un patrón de render diferido por JavaScript en las secciones principales.
- No hay frameworks hidratados grandes; el síntoma apunta a coste de pintura/composición durante scroll.
- Las superficies V2 usan muchas cards con `backdrop-blur`, sombras grandes, glows con `blur-2xl` / `blur-3xl`, pseudo-elementos con gradientes y transiciones de `transform`/`box-shadow`.
- El shell global tenía capas decorativas `position: fixed` con grid y gradientes; en móviles esto puede repintarse durante scroll según navegador/GPU.
- Las cards del portfolio sin imagen real generaban múltiples glows grandes y blurs dentro de cada card, multiplicando el coste cuando muchas cards entran al viewport.
- `ProjectLinkPreview` aplica una política estricta **no-auto-iframe**: las demos externas nunca se cargan embebidas durante el render ni durante el scroll mobile; se muestran como previews estáticos con dominio visible y CTA `Abrir demo`.

## Changes made

- En mobile, las capas decorativas globales del shell dejan de ser `fixed` y pasan a ser decoraciones acotadas arriba del documento, reduciendo repintados al hacer scroll.
- En mobile, `premium-interactive` deja de forzar `translateZ(0)`/`will-change: transform` y evita transiciones de sombra/transform que pueden crear demasiadas capas compositoras.
- En mobile, se desactiva el sweep decorativo de `premium-button` y la animación `float-soft`.
- En mobile, se reduce el coste de `backdrop-blur`, `blur-2xl`/`blur-3xl`, `shadow-premium` y `shadow-glow` manteniendo el look oscuro/premium.
- Se ocultaron glows decorativos internos en cards reutilizables y cards de proyecto en mobile, manteniéndolos en desktop.
- Se simplificaron glows del hero/mockup y el glow del `SectionHeader` en pantallas pequeñas.
- Se eliminó el renderizado de iframes externos en `ProjectLinkPreview`; las demos se abren en una pestaña nueva para evitar descargar sitios completos de Vercel, GitHub Pages u otros dominios mientras el usuario navega el portfolio.

## Remaining risks

- Páginas con muchas cards todavía tienen bastante HTML y muchas superficies con bordes/sombras; el coste debería bajar, pero conviene probar en dispositivos Android/iOS reales de gama media.
- Algunas imágenes de proyecto siguen con `loading="lazy"`; esto es correcto para evitar carga inicial pesada, pero en redes lentas pueden aparecer placeholders o imágenes tarde. El objetivo de este patch fue pintura/scroll, no eager loading.
- La navegación móvil sigue usando elementos `fixed` solo cuando el menú está disponible/abierto; no debería impactar el scroll normal, pero conviene verificar el overlay en dispositivos reales.

## Manual mobile test checklist

1. Abrir la home en un móvil real o en Chrome DevTools con throttling de CPU 4x.
2. Hacer scroll continuo desde el hero hasta los casos destacados y comprobar que las cards ya están visibles al entrar al viewport.
3. Revisar que no haya saltos visuales ni aparición tardía de frames/cards en `Qué resuelvo`, `Casos`, `Demos por rubro`, `Proceso` y `Planes`.
4. Abrir `/proyectos` y repetir scroll sobre la grilla completa de cards.
5. Abrir un detalle de proyecto con demo externa y comprobar que solo aparece el preview estático, el dominio visible y el botón `Abrir demo` en nueva pestaña; no debe existir iframe en el HTML generado.
6. Probar menú móvil: abrir/cerrar overlay y verificar que el bloqueo de scroll se restaura correctamente.
7. Comparar desktop rápidamente para asegurar que los glows/hover premium se mantienen en pantallas `md` o mayores.
