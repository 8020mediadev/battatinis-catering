/**
 * Build-time prerendering.
 *
 * The site is a client-rendered SPA, so the raw HTML Vite emits contains only
 * an empty <div id="root">. Search crawlers can usually run JavaScript, but
 * most AI answer-engine crawlers and every social link-preview scraper cannot.
 * This script boots the built site in headless Chromium, waits for React to
 * render each route, and writes the resulting HTML to disk so every route ships
 * complete, readable markup.
 *
 * Chromium is not available in Vercel's build image, so this runs locally and
 * writes to `prerendered/`, which IS committed to Git. A Vite plugin copies
 * those files into the build output, so production serves real HTML regardless
 * of whether the build machine has a browser.
 *
 * Run `npm run prerender` after any content change, then commit the diff.
 */

import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist", "public");
/** Committed output directory; copied into the build by vite.config.ts. */
const OUT = join(ROOT, "prerendered");

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
].filter(Boolean);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};

/** Routes to prerender, kept in sync with client/src/lib/siteConfig.ts. */
async function loadRoutes() {
  const source = await readFile(
    join(ROOT, "client", "src", "lib", "siteConfig.ts"),
    "utf8",
  );
  const routes = [...source.matchAll(/^\s{2}"(\/[^"]*)":\s*\{/gm)].map((m) => m[1]);
  if (routes.length === 0) {
    throw new Error("prerender: could not parse routes from siteConfig.ts");
  }
  return routes;
}

function findChrome() {
  return CHROME_CANDIDATES.find((p) => existsSync(p));
}

/** Static file server over dist/public with SPA fallback to index.html. */
function startServer(port) {
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://127.0.0.1:${port}`);
      let filePath = join(DIST, decodeURIComponent(url.pathname));

      if (!extname(url.pathname) || !existsSync(filePath)) {
        filePath = join(DIST, "index.html");
      }

      const body = await readFile(filePath);
      res.writeHead(200, {
        "Content-Type": MIME[extname(filePath)] ?? "application/octet-stream",
      });
      res.end(body);
    } catch {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
    }
  });

  return new Promise((resolve) => {
    server.listen(port, "127.0.0.1", () => resolve(server));
  });
}

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    console.error("prerender: dist/public/index.html missing — run vite build first");
    process.exit(1);
  }

  const chromePath = findChrome();
  if (!chromePath) {
    console.warn(
      "prerender: no Chromium binary found — skipping. " +
        "Prerendered HTML committed to the repo will be served as-is.",
    );
    return;
  }

  const routes = await loadRoutes();
  const port = 4319;
  const server = await startServer(port);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
  });

  let written = 0;

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 900 });

      // Third-party widgets (Elfsight, YouTube, fonts) neither render into the
      // static HTML nor matter to crawlers, and they make networkidle unreliable.
      await page.setRequestInterception(true);
      page.on("request", (request) => {
        const url = request.url();
        const external =
          !url.startsWith(`http://127.0.0.1:${port}`) && !url.startsWith("data:");
        if (external) request.abort().catch(() => {});
        else request.continue().catch(() => {});
      });

      await page.goto(`http://127.0.0.1:${port}${route}`, {
        waitUntil: "networkidle0",
        timeout: 45000,
      });

      // Wait until React has actually painted content into the root element.
      await page.waitForFunction(
        () => {
          const root = document.getElementById("root");
          return root && root.textContent && root.textContent.trim().length > 200;
        },
        { timeout: 20000 },
      );

      const html = await page.evaluate(() => {
        // The cookie banner is visitor state, not content; drop it from the
        // static HTML so crawlers and previews do not capture it.
        document
          .querySelectorAll("[data-cookie-consent]")
          .forEach((n) => n.remove());
        return `<!doctype html>\n${document.documentElement.outerHTML}`;
      });

      const outPath =
        route === "/"
          ? join(OUT, "index.html")
          : join(OUT, route.replace(/^\//, ""), "index.html");

      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf8");

      const words = html
        .replace(/<script[\s\S]*?<\/script>/g, "")
        .replace(/<style[\s\S]*?<\/style>/g, "")
        .replace(/<[^>]+>/g, " ")
        .split(/\s+/)
        .filter(Boolean).length;

      console.log(`prerender: ${route.padEnd(28)} ${words} words`);
      written += 1;
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`prerender: wrote ${written} route(s)`);
}

main().catch((err) => {
  console.error("prerender failed:", err);
  process.exit(1);
});
