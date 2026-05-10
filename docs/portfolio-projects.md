# Portfolio projects workflow

Los proyectos del portfolio viven como archivos MDX en `src/content/proyectos`. El esquema está en `src/content/config.ts` y todos los campos visuales nuevos son opcionales para que los casos viejos sigan funcionando.

## Cómo agregar un proyecto nuevo

1. Crear `src/content/proyectos/mi-proyecto.mdx`.
2. Completar los campos obligatorios actuales: `title`, `sector`, `rol`, `stack`, `fecha`, `resumen`, `problema` y `solucion`.
3. Agregar solo la metadata comercial que ayude a presentar mejor el caso.
4. Ejecutar `npm run build` para validar frontmatter, rutas y render.

## Metadata visual opcional

Estos campos mejoran la tarjeta sin obligar a crear una imagen personalizada:

```yaml
category: "Sistema / panel"
businessType: "Comercio con stock"
resultLabel: "Demo lista para validar el flujo operativo."
highlight: "Ordena productos, compras y señales de reposición."
visualTone: "cyan"
badges:
  - Dashboard
  - Stock
  - Compras
  - Datos POS
image: "/galeria/mi-proyecto.png"
demoUrl: "https://ejemplo.com"
caseUrl: "/proyectos/mi-proyecto"
featured: true
priority: 80
```

### Campos recomendados

- `category`: rubro visual del proyecto. Ejemplos: `Veterinaria`, `Barbería`, `Gastronomía`, `Sistema / panel`, `Bienestar`, `Corporativo` o `Landing comercial`.
- `businessType`: lectura comercial más concreta del cliente o vertical.
- `resultLabel`: beneficio corto que se muestra como resultado de la card.
- `highlight`: frase clave de negocio; reemplaza el bloque problema/solución dentro de la card cuando existe.
- `visualTone`: tono visual del fallback. Valores válidos: `cyan`, `violet`, `emerald`, `amber`, `rose`, `neutral`.
- `badges`: 2 a 4 chips comerciales visibles en la card y en el fallback.
- `image`: asset opcional para la tarjeta. Puede ser local (`/galeria/demo.png`) o remoto.
- `featured`: pone el proyecto arriba en los listados destacados.
- `priority`: ordena casos con más peso comercial; números mayores aparecen antes.

## Cómo funcionan los fallback visuals

`ProjectCard.astro` usa `src/lib/projectVisuals.ts` para generar una visual si falta `image`, `thumbnail` o `cover` útil. El fallback combina:

- ícono por categoría,
- iniciales del título,
- gradiente según `visualTone`,
- badges explícitos o inferidos,
- frame sutil tipo navegador.

Esto permite cargar demos nuevas con metadata mínima y mantener una estética premium consistente sin diseñar una portada manual para cada caso.

## Orden de prioridad de imágenes

La tarjeta intenta mostrar imagen en este orden:

1. `image`, si está definido y no es `/og-default.png`.
2. `thumbnail`, si está definido.
3. `cover`, si está definido y no es `/og-default.png`.
4. `/galeria/<slug>.svg`, si existe en `public/galeria`.
5. Fallback visual generado por metadata.

## Buenas prácticas

- No inventar métricas: usar `resultLabel` o `impacto` cualitativo si no hay datos medidos.
- Priorizar beneficios de negocio antes que stack técnico.
- Usar entre 2 y 4 badges para evitar ruido visual.
- Elegir `featured: true` solo para casos fuertes comercialmente o visualmente.
