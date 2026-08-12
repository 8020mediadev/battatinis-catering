import fs from "node:fs";
import path from "node:path";

/**
 * Serves the SPA shell with a real HTTP 404 status.
 *
 * The site is a client-rendered SPA, so unmatched paths must still return
 * index.html for the router to render the NotFound view. Serving that through
 * a plain rewrite produces HTTP 200 (a "soft 404"), which search engines index
 * as real content. This function returns the same markup with status 404 so
 * crawlers correctly drop the URL while visitors still see the branded page.
 *
 * NOTE: package.json declares "type": "module", so this must be ESM.
 */

const FALLBACK_HTML =
  `<!doctype html><html lang="en"><head><meta charset="utf-8">` +
  `<meta name="viewport" content="width=device-width,initial-scale=1">` +
  `<meta name="robots" content="noindex">` +
  `<title>Page Not Found | Battatini's Family Style Catering</title></head>` +
  `<body style="margin:0;font-family:system-ui,-apple-system,sans-serif;` +
  `background:linear-gradient(160deg,#850100,#660000);color:#fff;` +
  `display:flex;min-height:100vh;align-items:center;justify-content:center;text-align:center">` +
  `<div style="padding:2rem;max-width:34rem">` +
  `<p style="font-size:3.5rem;margin:0 0 .5rem;opacity:.45;font-weight:700">404</p>` +
  `<h1 style="margin:0 0 1rem;font-size:1.75rem">We couldn't find that page</h1>` +
  `<p style="opacity:.85;margin:0 0 1.75rem;line-height:1.6">The page you're looking for may ` +
  `have moved or no longer exists. But the food is still here.</p>` +
  `<p style="margin:0"><a href="/" style="color:#fff;font-weight:700;text-decoration:underline">Back to Home</a>` +
  `<span style="opacity:.5"> &nbsp;|&nbsp; </span>` +
  `<a href="/menu" style="color:#fff;font-weight:700;text-decoration:underline">View Our Menu</a></p>` +
  `<p style="margin:1.5rem 0 0"><a href="tel:5855443663" style="color:#fff;font-weight:700;` +
  `text-decoration:none">Call 585-544-FOOD (3663)</a></p>` +
  `</div></body></html>`;

// Resolve index.html once at cold start rather than on every request.
const CANDIDATE_PATHS = [
  path.join(process.cwd(), "dist", "public", "index.html"),
  path.join(process.cwd(), "public", "index.html"),
  path.join(process.cwd(), "index.html"),
];

let cachedHtml = null;
for (const p of CANDIDATE_PATHS) {
  try {
    cachedHtml = fs.readFileSync(p, "utf8");
    break;
  } catch {
    // try the next candidate
  }
}

export default function handler(req, res) {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
  res.end(cachedHtml || FALLBACK_HTML);
}
