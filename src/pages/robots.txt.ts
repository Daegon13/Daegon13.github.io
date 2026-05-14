const siteUrl = (
  import.meta.env.PUBLIC_SITE_URL ?? "https://marin-dev.vercel.app"
).replace(/\/$/, "");

export function GET() {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap-index.xml\n`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
