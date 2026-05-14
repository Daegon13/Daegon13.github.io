# Deploy en Vercel manteniendo GitHub Pages

Esta guía prepara Marin.dev para publicarse también en Vercel sin apagar el deploy actual de GitHub Pages.

## Estrategia

- **Vercel** puede importar este repo y compilarlo como un sitio Astro estático.
- **GitHub Pages puede seguir activo** como fallback legacy porque proyectos, demos o enlaces anteriores todavía pueden apuntar a `https://daegon13.github.io/`. La URL canónica de producción para indexación es Vercel.
- No hace falta migrar framework, agregar SSR ni instalar un adapter de Vercel mientras el sitio siga siendo estático.
- No se deben romper ni reescribir links antiguos durante esta etapa: Vercel se suma como canal de deploy, no reemplaza GitHub Pages todavía.

## Cómo importar el repo en Vercel

1. Entrar a Vercel y elegir **Add New Project**.
2. Importar el repositorio `Daegon13.github.io` desde GitHub.
3. Confirmar que Vercel detecte el framework **Astro**.
4. Usar la rama principal del repo para producción, normalmente `main`.
5. Revisar la configuración de build antes de crear el proyecto.

## Configuración de build

El archivo `vercel.json` deja explícita la configuración mínima esperada por Vercel:

```txt
Build Command: npm run build
Output Directory: dist
```

El preset de framework puede quedar en **Astro** por autodetección de Vercel.

Vercel instalará las dependencias desde `package-lock.json` y ejecutará el build estático de Astro. El resultado queda en `dist/`, igual que en GitHub Pages.

## Variables de entorno

Para producción en Vercel, configurar la URL canónica activa:

```txt
PUBLIC_SITE_URL=https://marin-dev.vercel.app
```

Si `PUBLIC_SITE_URL` no existe, Astro usa como fallback `https://marin-dev.vercel.app`. Esta variable controla canonical, Open Graph, JSON-LD, robots.txt y sitemap. Después de cambiarla en Vercel, ejecutar un nuevo deploy para regenerar la salida estática.

## Compatibilidad con GitHub Pages

El workflow de GitHub Pages debe permanecer activo durante la transición. Esto evita romper:

- links ya compartidos con `https://daegon13.github.io/`;
- demos o proyectos antiguos enlazados desde GitHub Pages;
- referencias externas que todavía apunten al dominio legacy.

Cuando Vercel esté probado y el tráfico ya use el nuevo dominio, se puede planificar una etapa separada para decidir si GitHub Pages queda como espejo, fallback permanente o redirección controlada.

## Si se agrega un dominio personalizado

1. Agregar el dominio en Vercel desde **Project Settings → Domains**.
2. Actualizar DNS siguiendo las instrucciones de Vercel.
3. Configurar `PUBLIC_SITE_URL` con la URL canónica final, por ejemplo:

   ```txt
   PUBLIC_SITE_URL=https://marin.dev
   ```

4. Ejecutar un nuevo deploy en Vercel para regenerar canonical, metadata social y sitemap con el dominio final.
5. Mantener GitHub Pages activo hasta verificar que no quedan enlaces críticos usando `daegon13.github.io`.

## Validación local

Antes de importar o redeployar, validar el build con:

```bash
npm run build
```

Si el comando pasa, el sitio está listo para deploy estático en Vercel y sigue generando la misma carpeta `dist/` usada por GitHub Pages.
