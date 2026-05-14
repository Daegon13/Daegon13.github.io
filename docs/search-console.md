# Google Search Console setup

## Canonical production URL

The canonical production URL for Marin.dev is currently:

```env
PUBLIC_SITE_URL=https://marin-dev.vercel.app
```

Set this environment variable in Vercel so Astro can generate consistent canonical URLs, Open Graph URLs, JSON-LD URLs, robots metadata, and sitemap URLs.

## Verification methods

For the current Vercel subdomain, create a **URL-prefix property** in Google Search Console for:

```txt
https://marin-dev.vercel.app/
```

Then choose one of these verification options.

### Option A — URL-prefix + HTML file

1. Download the HTML verification file from Search Console.
2. Put the downloaded `googleXXXX.html` file in `public/`.
3. Deploy the site.
4. Visit the deployed file URL, replacing `googleXXXX.html` with the exact filename Google provided:

   ```txt
   https://marin-dev.vercel.app/googleXXXX.html
   ```

5. Click **Verify** in Search Console.

### Option B — URL-prefix + meta tag

1. Copy only the `content` token from the Search Console meta tag.
2. Set this environment variable in Vercel:

   ```env
   PUBLIC_GOOGLE_SITE_VERIFICATION=...
   ```

3. Redeploy the site so Astro includes the optional verification meta tag in the static HTML.
4. Click **Verify** in Search Console.

Do not hardcode the verification token in the repository. The site builds without this environment variable, and when it is missing no Google verification meta tag is rendered.

### Option C — future custom domain

When Marin.dev moves to a custom domain, prefer a **Domain property** in Search Console.

1. Create the Domain property for the final domain.
2. Add the TXT record at the DNS provider.
3. If Vercel manages DNS, add the TXT record in **Vercel Domains**.
4. If an external registrar or DNS provider manages DNS, add the TXT record there.
5. Wait for DNS propagation, then click **Verify** in Search Console.

## Ownership reminder

Do not remove the verification file or meta tag after verification unless you know ownership is maintained by another verification method. Google may periodically re-check ownership.

## Search Console submission

After deployment and verification, submit the sitemap from the canonical property:

```txt
https://marin-dev.vercel.app/sitemap-index.xml
```

## Future custom domain canonical URL

If a custom domain is added later, change the Vercel environment variable to the final HTTPS domain:

```env
PUBLIC_SITE_URL=https://your-domain.com
```

After changing environment variables in Vercel, redeploy the project so the static output is regenerated with the new canonical domain.

## Legacy GitHub Pages references

`https://daegon13.github.io` can remain only where it is intentionally used as a legacy external/demo URL or historical public reference. It must not be used for canonical URLs, Open Graph URLs, JSON-LD site URLs, `robots.txt`, or generated sitemap URLs.
