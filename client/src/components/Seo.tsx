import { useEffect } from "react";
import { useLocation } from "wouter";
import {
  PAGE_META,
  DEFAULT_META,
  SITE_URL,
  BUSINESS,
} from "@/lib/siteConfig";
import { schemaForRoute } from "@/lib/schema";

/**
 * Keeps document head tags in sync with the current route.
 *
 * The prerender step bakes these tags into each route's static HTML, so
 * crawlers that do not run JavaScript still see the correct title, description,
 * canonical, and social card. This component keeps them correct during
 * client-side navigation once React takes over.
 */

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

const SCHEMA_ID = "battatinis-structured-data";

/** Replace the managed JSON-LD block for the current route. */
function upsertSchema(graph: object[]): void {
  document.querySelectorAll(`script[data-seo="${SCHEMA_ID}"]`).forEach((n) => n.remove());
  if (!graph.length) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-seo", SCHEMA_ID);
  script.textContent = JSON.stringify(graph.length === 1 ? graph[0] : graph);
  document.head.appendChild(script);
}

function upsertLink(rel: string, href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo() {
  const [location] = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location] ?? DEFAULT_META;
    const canonical = `${SITE_URL}${meta.path === "/" ? "" : meta.path}`;
    const ogImage = `${SITE_URL}${meta.image ?? "/images/catering-in-rochester-ny.jpg"}`;

    document.title = meta.title;

    upsertMeta("name", "description", meta.description);
    upsertLink("canonical", canonical);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", BUSINESS.name);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:locale", "en_US");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", ogImage);

    upsertSchema(schemaForRoute(meta.path));
  }, [location]);

  return null;
}
