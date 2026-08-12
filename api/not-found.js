const fs = require("node:fs");
const path = require("node:path");

/**
 * Serves the SPA shell with a real HTTP 404 status.
 *
 * The site is a client-rendered SPA, so unmatched paths must still return
 * index.html for the router to render the NotFound view. Serving that through
 * a plain rewrite produces HTTP 200 (a "soft 404"), which search engines index
 * as real content. This function returns the identical HTML with status 404 so
 * crawlers correctly drop the URL while visitors still see the branded page.
 */
module.exports = (req, res) => {
  const candidates = [
    path.join(process.cwd(), "dist", "public", "index.html"),
    path.join(process.cwd(), "public", "index.html"),
    path.join(__dirname, "..", "dist", "public", "index.html"),
  ];

  let html = null;
  for (const p of candidates) {
    try {
      html = fs.readFileSync(p, "utf8");
      break;
    } catch {
      // try the next candidate
    }
  }

  res.statusCode = 404;
  res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");

  if (html) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(html);
    return;
  }

  // Fallback: never leave the visitor with a blank page.
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(
    `<!doctype html><html lang="en"><head><meta charset="utf-8">` +
      `<meta name="viewport" content="width=device-width,initial-scale=1">` +
      `<meta name="robots" content="noindex">` +
      `<title>Page Not Found | Battatini's Family Style Catering</title></head>` +
      `<body style="margin:0;font-family:system-ui,sans-serif;background:#7a0100;color:#fff;` +
      `display:flex;min-height:100vh;align-items:center;justify-content:center;text-align:center">` +
      `<div style="padding:2rem"><p style="font-size:3rem;margin:0 0 .5rem;opacity:.5">404</p>` +
      `<h1 style="margin:0 0 1rem">We couldn't find that page</h1>` +
      `<p style="opacity:.85;margin:0 0 1.5rem">The page may have moved or no longer exists.</p>` +
      `<p><a href="/" style="color:#fff;font-weight:700">Back to Home</a>` +
      ` &nbsp;|&nbsp; <a href="tel:5855443663" style="color:#fff;font-weight:700">585-544-FOOD</a></p>` +
      `</div></body></html>`
  );
};
