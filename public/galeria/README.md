# Galería de miniaturas de proyectos

Esta carpeta almacena las miniaturas locales usadas por las tarjetas y previews del portfolio.

Convención:

- Guardar cada miniatura como `/public/galeria/<slug-del-proyecto>.svg` o `.png`.
- Conectar cada documento MDX con su miniatura mediante el campo `thumbnail` del frontmatter.
- Mantener `cover` para imágenes externas, Open Graph heredado o previews alternativas; la UI prioriza `thumbnail` cuando existe.

Ejemplo:

```yaml
cover: "/og-default.png"
thumbnail: "/galeria/vetcare.svg"
```
