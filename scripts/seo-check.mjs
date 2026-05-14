import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const distDir = "dist";
const productionUrl = (
  process.env.PUBLIC_SITE_URL ?? "https://marin-dev.vercel.app"
).replace(/\/$/, "");
const oldDomain = "daegon13.github.io";
const keyPages = [
  "index.html",
  "proyectos/index.html",
  "servicios/index.html",
  "contacto/index.html",
  "sobre-mi/index.html",
  "proyectos/vetcare/index.html",
];

const fail = (message) => {
  throw new Error(message);
};

const read = (path) => readFileSync(path, "utf8");
const files = [];

const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path);
    else files.push(path);
  }
};

if (!existsSync(distDir)) {
  fail("dist/ does not exist. Run npm run build first.");
}

walk(distDir);

const htmlFiles = files.filter((file) => file.endsWith(".html"));
const xmlFiles = files.filter((file) => file.endsWith(".xml"));
const robotsPath = join(distDir, "robots.txt");
const sitemapIndexPath = join(distDir, "sitemap-index.xml");
const sitemapPath = join(distDir, "sitemap-0.xml");

if (!existsSync(robotsPath)) fail("Missing dist/robots.txt");
if (!existsSync(sitemapIndexPath)) fail("Missing dist/sitemap-index.xml");
if (!existsSync(sitemapPath)) fail("Missing dist/sitemap-0.xml");

const robots = read(robotsPath);
if (!/User-agent:\s*\*/i.test(robots))
  fail("robots.txt is missing User-agent: *");
if (!/Allow:\s*\//i.test(robots))
  fail("robots.txt does not explicitly allow /");
if (!robots.includes(`Sitemap: ${productionUrl}/sitemap-index.xml`)) {
  fail(`robots.txt sitemap does not match ${productionUrl}/sitemap-index.xml`);
}

const sitemapIndex = read(sitemapIndexPath);
const sitemap = read(sitemapPath);
if (!sitemapIndex.includes(`${productionUrl}/sitemap-0.xml`)) {
  fail(
    "sitemap-index.xml does not reference the active production sitemap URL",
  );
}

const requiredUrls = [
  `${productionUrl}/`,
  `${productionUrl}/proyectos/`,
  `${productionUrl}/servicios/`,
  `${productionUrl}/contacto/`,
  `${productionUrl}/sobre-mi/`,
];
for (const url of requiredUrls) {
  if (!sitemap.includes(`<loc>${url}</loc>`)) fail(`Sitemap is missing ${url}`);
}

for (const keyPage of keyPages) {
  const path = join(distDir, keyPage);
  if (!existsSync(path)) fail(`Missing key page: dist/${keyPage}`);
  const html = read(path);
  const canonicalCount = (html.match(/rel="canonical"/g) ?? []).length;
  if (canonicalCount !== 1)
    fail(`dist/${keyPage} has ${canonicalCount} canonical tags`);
  if (!/<title>[^<]+<\/title>/.test(html))
    fail(`dist/${keyPage} is missing a title`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) {
    fail(`dist/${keyPage} is missing a meta description`);
  }
  if (
    !/property="og:title"/.test(html) ||
    !/property="og:description"/.test(html) ||
    !/property="og:url"/.test(html)
  ) {
    fail(`dist/${keyPage} is missing required Open Graph metadata`);
  }
  if (/noindex/i.test(html)) fail(`dist/${keyPage} contains noindex`);
}

for (const htmlFile of htmlFiles) {
  const html = read(htmlFile);
  const matches = html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  );
  for (const match of matches) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      fail(
        `${relative(distDir, htmlFile)} has invalid JSON-LD: ${error.message}`,
      );
    }
  }
}

const criticalFiles = [robotsPath, ...xmlFiles];
for (const file of criticalFiles) {
  const contents = read(file);
  const relativePath = relative(distDir, file);
  if (contents.includes(oldDomain)) {
    fail(`${relativePath} contains old GitHub Pages domain ${oldDomain}`);
  }
}

for (const htmlFile of htmlFiles) {
  const html = read(htmlFile);
  const head = html.match(/<head>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  if (head.includes(oldDomain)) {
    fail(
      `${relative(distDir, htmlFile)} contains old GitHub Pages domain ${oldDomain} in SEO head metadata`,
    );
  }
}

console.log(`SEO dist check passed for ${productionUrl}`);
console.log(
  `Checked ${keyPages.length} key pages, ${htmlFiles.length} HTML files, robots.txt and sitemap files.`,
);
