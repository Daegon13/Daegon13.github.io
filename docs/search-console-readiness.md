# Search Console readiness QA

## Production URL

- Active production URL: `https://marin-dev.vercel.app`
- Sitemap URL to submit: `https://marin-dev.vercel.app/sitemap-index.xml`

## Verification method supported

The site supports Google Search Console verification through the `PUBLIC_GOOGLE_SITE_VERIFICATION` environment variable.

- When `PUBLIC_GOOGLE_SITE_VERIFICATION` is set at build time, the layout renders a `<meta name="google-site-verification">` tag.
- When the variable is not set, the verification meta tag is intentionally omitted.

## Pages expected to index

The generated sitemap includes these main public pages:

- `https://marin-dev.vercel.app/`
- `https://marin-dev.vercel.app/proyectos/`
- `https://marin-dev.vercel.app/servicios/`
- `https://marin-dev.vercel.app/contacto/`
- `https://marin-dev.vercel.app/sobre-mi/`
- `https://marin-dev.vercel.app/proyectos/agencia_ariel/`
- `https://marin-dev.vercel.app/proyectos/brasa-23/`
- `https://marin-dev.vercel.app/proyectos/cristal-sagrado/`
- `https://marin-dev.vercel.app/proyectos/noir-barber-studio/`
- `https://marin-dev.vercel.app/proyectos/servicio-de-tarot/`
- `https://marin-dev.vercel.app/proyectos/smart-stock/`
- `https://marin-dev.vercel.app/proyectos/vetcare/`
- `https://marin-dev.vercel.app/politica-de-privacidad/`
- `https://marin-dev.vercel.app/gracias/`

## Pages intentionally not indexed

No generated page currently includes a `noindex` directive.

Note: `/gracias/` is included in the generated sitemap because it is a static public page. If the site later needs to keep thank-you pages out of search results, handle that as a separate explicit SEO decision.

## QA results

- `robots.txt` allows crawling with `User-agent: *` and `Allow: /`.
- `robots.txt` references `https://marin-dev.vercel.app/sitemap-index.xml`.
- `sitemap-index.xml` and `sitemap-0.xml` are generated in `dist/`.
- The sitemap uses the active production URL: `https://marin-dev.vercel.app`.
- Key pages have exactly one canonical tag.
- Key pages have title and meta description tags.
- Key pages include Open Graph metadata.
- JSON-LD scripts in generated HTML parse as valid JSON.
- The generated default build does not render `google-site-verification` unless the verification env var exists.

## Old-domain references result

The generated SEO-critical files do not use the old GitHub Pages domain `daegon13.github.io` for canonical URLs, Open Graph URLs, robots sitemap references or sitemap URLs.

A non-critical legacy text link to `https://daegon13.github.io/` remains on the privacy policy page. It is not a canonical, sitemap URL, robots directive, Open Graph URL or JSON-LD identity URL.

## Manual post-deploy checklist

After deploying to production:

1. Open `https://marin-dev.vercel.app/robots.txt` and confirm it returns `200` with `Allow: /`.
2. Open `https://marin-dev.vercel.app/sitemap-index.xml` and confirm it returns `200`.
3. Open the homepage source and check the canonical is `https://marin-dev.vercel.app/`.
4. Open one project page source and check the canonical matches that project URL.
5. Submit `https://marin-dev.vercel.app/sitemap-index.xml` in Google Search Console.
6. Use URL Inspection for `https://marin-dev.vercel.app/`.
7. Request indexing for the homepage after deploy.
8. Check the Page indexing report after a few days.
