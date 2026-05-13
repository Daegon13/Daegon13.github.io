# Search Console prep audit — Marin.dev

Audit date: 2026-05-13  
Production URL to register: `https://marin-dev.vercel.app/`  
Build command audited: `npm run build`  
Output mode: Astro static output (`dist/`)

## Executive status

**Not ready to register the Vercel URL as the canonical Google Search Console property yet.**

The site builds successfully and all inspected public pages have titles, descriptions, canonical tags, Open Graph URLs, and no accidental `noindex` tags. However, the generated SEO-critical URLs currently point to the legacy GitHub Pages domain (`https://daegon13.github.io/`) instead of the production Vercel domain (`https://marin-dev.vercel.app/`).

This affects:

- canonical tags;
- Open Graph URLs;
- JSON-LD site/service URLs;
- sitemap index and sitemap URLs;
- `robots.txt` sitemap reference;
- default `SITE_URL` fallback used by layout metadata.

No code or metadata fix was applied in this patch because the current repo intentionally documents GitHub Pages as a legacy/fallback deploy, and changing the canonical domain is not a typo-level fix. It should be handled as a small dedicated Search Console/domain patch.

## Commands run

```bash
rg -n --hidden -g '!node_modules' -g '!dist' \
  -e 'daegon13\.github\.io|marin-dev\.vercel\.app|localhost|http://|canonical|sitemap|robots|noindex|og:url|twitter:url' .

npm run build

node <metadata extraction script over selected dist HTML files>

rg -n \
  -e 'daegon13\.github\.io|marin-dev\.vercel\.app|localhost|http://|canonical|sitemap|robots|noindex|og:url|twitter:url' \
  dist/index.html dist/proyectos/index.html dist/servicios/index.html dist/contacto/index.html \
  dist/sobre-mi/index.html dist/proyectos/vetcare/index.html dist/robots.txt \
  dist/sitemap-index.xml dist/sitemap-0.xml src/pages src/layouts src/lib src/data public \
  astro.config.mjs package.json
```

## Build status

`npm run build` **passes**.

Build summary observed:

- static output directory: `dist/`;
- 14 pages generated;
- `@astrojs/sitemap` generated `dist/sitemap-index.xml` and `dist/sitemap-0.xml`;
- inspected key generated files exist:
  - `dist/sitemap-index.xml`;
  - `dist/sitemap-0.xml`;
  - `dist/robots.txt`;
  - `dist/index.html`;
  - `dist/proyectos/index.html`;
  - `dist/servicios/index.html`;
  - `dist/contacto/index.html`;
  - `dist/sobre-mi/index.html`;
  - `dist/proyectos/vetcare/index.html`.

Non-blocking build warnings:

- npm warns about unknown env config `http-proxy`;
- `baseline-browser-mapping` data is over two months old;
- Browserslist / `caniuse-lite` data is outdated.

These warnings do not block static generation or indexing, but can be cleaned up separately.

## Current canonical source

Canonical generation is centralized in `src/layouts/BaseLayout.astro`.

The layout derives the site base from Astro config first and falls back to `SITE_URL` from `src/lib/contact.ts`:

- `astro.config.mjs` sets `site` from `process.env.PUBLIC_SITE_URL ?? 'https://daegon13.github.io'`.
- `src/lib/contact.ts` exports `SITE_URL = "https://daegon13.github.io"`.
- `BaseLayout.astro` normalizes page paths and generates:
  - `<link rel="canonical">`;
  - `og:url`;
  - absolute `og:image` / `twitter:image`;
  - JSON-LD `url`, `image`, `logo`, provider URLs.

### Risk

If Vercel production does **not** set `PUBLIC_SITE_URL=https://marin-dev.vercel.app`, the production build will self-canonicalize to GitHub Pages. That tells Google the GitHub Pages URLs are the preferred indexed URLs, not the Vercel URLs.

Even if `PUBLIC_SITE_URL` is set in Vercel, `public/robots.txt` is static and currently references the GitHub Pages sitemap, so the robots sitemap pointer would still be wrong unless updated or generated dynamically in a later patch.

## Sitemap status

Generated `dist/sitemap-index.xml` currently points to the legacy domain:

```xml
<loc>https://daegon13.github.io/sitemap-0.xml</loc>
```

Generated `dist/sitemap-0.xml` currently lists the legacy domain for all generated indexable routes, for example:

```xml
<loc>https://daegon13.github.io/</loc>
<loc>https://daegon13.github.io/proyectos/</loc>
<loc>https://daegon13.github.io/servicios/</loc>
<loc>https://daegon13.github.io/sobre-mi/</loc>
```

### Risk

Submitting `https://marin-dev.vercel.app/sitemap-index.xml` to Google Search Console while the sitemap contains `https://daegon13.github.io/...` URLs can cause property mismatch/confusion and will not clearly request indexing of the Vercel URLs.

## Robots status

`public/robots.txt` is copied to `dist/robots.txt` as:

```txt
User-agent: *
Allow: /
Sitemap: https://daegon13.github.io/sitemap-index.xml
```

### Risk

The crawl permission is fine (`Allow: /`), but the sitemap reference points to the legacy GitHub Pages sitemap instead of the active Vercel production URL.

## Metadata inspection

All inspected generated pages have a title and description. Public pages did **not** include accidental `noindex` metadata.

| Page | Title | Canonical | OG URL | Robots |
| --- | --- | --- | --- | --- |
| `/` | `Marin.dev \| Webs, demos y sistemas simples` | `https://daegon13.github.io/` | `https://daegon13.github.io/` | none |
| `/proyectos/` | `Casos, demos y herramientas \| Marin.dev` | `https://daegon13.github.io/proyectos/` | `https://daegon13.github.io/proyectos/` | none |
| `/servicios/` | `Servicios productizados – Marin.dev` | `https://daegon13.github.io/servicios/` | `https://daegon13.github.io/servicios/` | none |
| `/contacto/` | `Contacto – Marin.dev` | `https://daegon13.github.io/contacto/` | `https://daegon13.github.io/contacto/` | none |
| `/sobre-mi/` | `Sobre mí \| Marin.dev` | `https://daegon13.github.io/sobre-mi/` | `https://daegon13.github.io/sobre-mi/` | none |
| `/proyectos/vetcare/` | `VetCare – Demo veterinaria con agenda y urgencias \| Caso Marin.dev` | `https://daegon13.github.io/proyectos/vetcare/` | `https://daegon13.github.io/proyectos/vetcare/` | none |
| `/politica-de-privacidad/` | `Política de Privacidad – Marin.dev` | `https://daegon13.github.io/politica-de-privacidad/` | `https://daegon13.github.io/politica-de-privacidad/` | none |
| `/gracias/` | `Gracias – Marin.dev` | `https://daegon13.github.io/gracias/` | `https://daegon13.github.io/gracias/` | none |

### Findings

- Titles are unique across inspected pages.
- Descriptions are unique across inspected pages.
- Canonical and `og:url` match each other on inspected pages.
- Canonical and `og:url` do **not** match the active production Vercel domain.
- No inspected public page has `noindex`.
- No `twitter:url` tag is emitted. This is not a blocker; Twitter/X commonly relies on canonical/OG URL. If desired, it can be added later for completeness.

## Old-domain references found

### SEO-critical / domain-source references

These should be addressed before Search Console submission for `https://marin-dev.vercel.app/`:

- `astro.config.mjs`
  - fallback `site` is `https://daegon13.github.io`;
  - used by `@astrojs/sitemap` and `Astro.site` metadata.
- `src/lib/contact.ts`
  - `SITE_URL` is `https://daegon13.github.io`;
  - used as layout fallback and potentially site identity source.
- `public/robots.txt`
  - `Sitemap:` points to `https://daegon13.github.io/sitemap-index.xml`.
- page frontmatter URL constants:
  - `src/pages/contacto.astro`;
  - `src/pages/gracias.astro`;
  - `src/pages/servicios.astro`;
  - `src/pages/politica-de-privacidad.astro`.

Note: `BaseLayout.astro` currently strips absolute page URL props down to their pathname before rebuilding the canonical against `Astro.site`, so those page constants are less risky than `astro.config.mjs` and `robots.txt`. Still, replacing them with relative paths later would reduce old-domain drift.

### Intentional or potentially legacy references

These should be reviewed, not blindly replaced:

- `src/content/proyectos/servicio-de-tarot.mdx`
  - `demoUrl` points to a GitHub Pages demo.
- `src/content/proyectos/brasa-23.mdx`
  - `demoUrl` points to a GitHub Pages demo.
- `src/content/proyectos/Agencia_ariel.mdx`
  - `cover` points to a GitHub Pages asset.
- `src/content/proyectos/servicio-de-tarot.mdx`
  - `cover` points to a GitHub Pages asset.
- `docs/deploy-vercel.md`
  - intentionally documents GitHub Pages as a fallback/legacy deploy.
- `README.md`, `AGENTS.md`, previous audit docs
  - contain historical/project guidance references to GitHub Pages.
- `src/pages/politica-de-privacidad.astro`
  - visible privacy-policy copy says the site is available at `daegon13.github.io` and mentions GitHub Pages hosting. Updating this is a legal/content change and should be handled deliberately, not in this audit-only patch.

### Vercel-domain references

No source reference to `marin-dev.vercel.app` was found outside this new audit document at the time of audit.

### Localhost / insecure HTTP

- No source `localhost` references were found by the audited search.
- `http://` matches appear only in SVG XML namespace attributes such as `http://www.w3.org/2000/svg`, which are normal and not mixed-content risks.

## Pages that should be indexed

Recommended indexable pages for the Vercel Search Console property after canonical/sitemap/robots are corrected:

- `/`
- `/servicios/`
- `/proyectos/`
- `/proyectos/agencia_ariel/`
- `/proyectos/brasa-23/`
- `/proyectos/cristal-sagrado/`
- `/proyectos/noir-barber-studio/`
- `/proyectos/servicio-de-tarot/`
- `/proyectos/smart-stock/`
- `/proyectos/vetcare/`
- `/sobre-mi/`
- `/contacto/`
- `/politica-de-privacidad/`

## Pages that should not be indexed

Recommended to noindex and/or exclude from sitemap in a later patch:

- `/gracias/`

Reason: it is a thin confirmation page intended for post-submit flows, not a search landing page. It currently has no `noindex` and is included in the generated sitemap.

No accidental `noindex` was detected on the important public pages.

## Search Console readiness checklist

Before registering/submitting the Vercel property, complete a follow-up SEO hardening patch:

1. Decide the canonical production domain for the current phase:
   - likely `https://marin-dev.vercel.app/` now;
   - future custom domain later if applicable.
2. Set the canonical site source consistently:
   - either configure Vercel `PUBLIC_SITE_URL=https://marin-dev.vercel.app` and document it;
   - or change repo fallback defaults to `https://marin-dev.vercel.app` if Vercel is now primary.
3. Update `public/robots.txt` sitemap reference to the active production sitemap.
4. Rebuild and verify:
   - `dist/sitemap-index.xml` uses `https://marin-dev.vercel.app/`;
   - `dist/sitemap-0.xml` lists Vercel URLs;
   - key pages emit Vercel canonical and `og:url`;
   - JSON-LD site/provider URLs use Vercel.
5. Decide whether `/gracias/` should be `noindex` and excluded from sitemap.
6. Update privacy-policy hosting/domain text only if the legal/content owner approves the new production-domain wording.
7. Submit the corrected sitemap in Google Search Console:
   - `https://marin-dev.vercel.app/sitemap-index.xml`.
8. Use URL Inspection for priority pages:
   - `/`;
   - `/servicios/`;
   - `/proyectos/`;
   - `/contacto/`;
   - strongest project detail pages such as `/proyectos/vetcare/` and `/proyectos/smart-stock/`.

## Recommended next patches

### Patch A — Canonical domain switch for Search Console

Small, non-visual patch to make Vercel the active canonical domain:

- update the canonical site source/fallback;
- update `public/robots.txt`;
- optionally change hardcoded page `url` props to relative paths;
- rebuild and verify dist.

### Patch B — Sitemap hygiene

- mark `/gracias/` as `noindex`;
- exclude `/gracias/` from sitemap if supported by the selected Astro sitemap strategy;
- keep privacy policy indexable unless there is a legal/business reason to hide it.

### Patch C — Legacy-domain content review

- keep GitHub Pages demo links where they are actual live demos;
- move remote covers to local `public/galeria` assets where possible;
- update privacy-policy hosting/domain text after confirming Vercel is the primary host.

### Patch D — Post-deploy Search Console validation

After deploying the canonical-domain patch:

- fetch Vercel production HTML directly;
- inspect response status codes and canonical tags;
- validate `robots.txt` and sitemap URLs from the live URL;
- submit sitemap and request indexing for priority URLs.
