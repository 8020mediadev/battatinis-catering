/**
 * Generates sitemap.xml and robots.txt into client/public so they ship with the
 * build and can be submitted to Search Console.
 *
 * Routes are read from client/src/lib/siteConfig.ts so the sitemap cannot drift
 * out of sync with the app's actual routes.
 */

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC_DIR = join(ROOT, "client", "public");

/** Relative priority and change frequency per route. */
const ROUTE_HINTS = {
  "/": { priority: "1.0", changefreq: "weekly" },
  "/menu": { priority: "0.9", changefreq: "monthly" },
  "/order-catering": { priority: "0.9", changefreq: "monthly" },
  "/thursday-tray-day": { priority: "0.7", changefreq: "weekly" },
  "/about": { priority: "0.6", changefreq: "yearly" },
  "/privacy-policy": { priority: "0.2", changefreq: "yearly" },
  "/accessibility": { priority: "0.2", changefreq: "yearly" },
};
const SERVICE_HINT = { priority: "0.8", changefreq: "monthly" };

async function main() {
  const configSource = await readFile(
    join(ROOT, "client", "src", "lib", "siteConfig.ts"),
    "utf8",
  );

  const siteUrlMatch = configSource.match(/export const SITE_URL = "([^"]+)"/);
  if (!siteUrlMatch) throw new Error("could not read SITE_URL from siteConfig.ts");
  const siteUrl = siteUrlMatch[1].replace(/\/$/, "");

  const routes = [...configSource.matchAll(/^\s{2}"(\/[^"]*)":\s*\{/gm)].map((m) => m[1]);
  if (routes.length === 0) throw new Error("could not parse routes from siteConfig.ts");

  const today = new Date().toISOString().slice(0, 10);

  const urls = routes
    .map((route) => {
      const hint = ROUTE_HINTS[route] ?? SERVICE_HINT;
      const loc = `${siteUrl}${route === "/" ? "/" : route}`;
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${hint.changefreq}</changefreq>`,
        `    <priority>${hint.priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
${urls}
</urlset>
`.replace(
    "http://www.sitemap.org/schemas/sitemap/0.9",
    "http://www.sitemaps.org/schemas/sitemap/0.9",
  );

  await writeFile(join(PUBLIC_DIR, "sitemap.xml"), sitemap, "utf8");

  const robots = `# robots.txt for ${siteUrl}
User-agent: *
Allow: /

# AI answer engines are explicitly welcome; this site's menu and pricing
# are public information we want surfaced in AI results.
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  await writeFile(join(PUBLIC_DIR, "robots.txt"), robots, "utf8");

  console.log(`seo-files: sitemap.xml with ${routes.length} URLs, robots.txt written`);
}

main().catch((err) => {
  console.error("generate-seo-files failed:", err);
  process.exit(1);
});
