import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";

const PRERENDERED_DIR = path.resolve(import.meta.dirname, "prerendered");
const OUT_DIR = path.resolve(import.meta.dirname, "dist/public");

/**
 * Copies the committed prerendered HTML into the build output.
 *
 * `npm run prerender` generates static HTML for every route into `prerendered/`
 * using headless Chromium. Vercel's build image has no browser, so that step
 * cannot run during deployment; instead the generated HTML is committed and this
 * plugin places it in the output after Vite writes the bundle.
 *
 * Each prerendered file references hashed asset filenames, so they are rewritten
 * to whatever the current build produced. Without that, a prerendered page would
 * point at a stale bundle and fail to hydrate.
 */
function copyPrerendered(): Plugin {
  return {
    name: "copy-prerendered",
    apply: "build",
    closeBundle() {
      if (!fs.existsSync(PRERENDERED_DIR)) {
        this.warn(
          "prerendered/ not found — routes will serve the empty SPA shell. " +
            "Run `npm run prerender` and commit the result.",
        );
        return;
      }

      const freshIndex = path.join(OUT_DIR, "index.html");
      if (!fs.existsSync(freshIndex)) return;

      const shell = fs.readFileSync(freshIndex, "utf8");
      const currentJs = shell.match(/\/assets\/index-[\w-]+\.js/)?.[0];
      const currentCss = shell.match(/\/assets\/index-[\w-]+\.css/)?.[0];

      let copied = 0;
      let rewritten = 0;

      const walk = (dir: string) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const src = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            walk(src);
            continue;
          }
          if (!entry.name.endsWith(".html")) continue;

          const rel = path.relative(PRERENDERED_DIR, src);
          const dest = path.join(OUT_DIR, rel);

          let html = fs.readFileSync(src, "utf8");

          // Point prerendered pages at this build's hashed assets.
          if (currentJs) {
            const before = html;
            html = html.replace(/\/assets\/index-[\w-]+\.js/g, currentJs);
            if (html !== before) rewritten += 1;
          }
          if (currentCss) {
            html = html.replace(/\/assets\/index-[\w-]+\.css/g, currentCss);
          }

          fs.mkdirSync(path.dirname(dest), { recursive: true });
          fs.writeFileSync(dest, html, "utf8");
          copied += 1;
        }
      };

      walk(PRERENDERED_DIR);

      console.log(
        `copy-prerendered: ${copied} HTML file(s) copied` +
          (rewritten ? `, ${rewritten} asset reference(s) rewritten` : ""),
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), copyPrerendered()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: OUT_DIR,
    emptyOutDir: true,
  },
  server: {
    host: true,
  },
});
