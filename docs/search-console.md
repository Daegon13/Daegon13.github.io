# Google Search Console setup

## Canonical production URL

The canonical production URL for Marin.dev is currently:

```env
PUBLIC_SITE_URL=https://marin-dev.vercel.app
```

Set this environment variable in Vercel so Astro can generate consistent canonical URLs, Open Graph URLs, JSON-LD URLs, robots metadata, and sitemap URLs.

## Future custom domain

If a custom domain is added later, change the Vercel environment variable to the final HTTPS domain:

```env
PUBLIC_SITE_URL=https://your-domain.com
```

After changing environment variables in Vercel, redeploy the project so the static output is regenerated with the new canonical domain.

## Search Console submission

After deployment, submit the sitemap from the canonical property:

```txt
https://marin-dev.vercel.app/sitemap-index.xml
```

## Legacy GitHub Pages references

`https://daegon13.github.io` can remain only where it is intentionally used as a legacy external/demo URL or historical public reference. It must not be used for canonical URLs, Open Graph URLs, JSON-LD site URLs, `robots.txt`, or generated sitemap URLs.
