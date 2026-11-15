import type { MetadataRoute } from "next";
import { portfolio } from "@/content/portfolio";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/founder", "/team", "/portfolio", "/relationships", "/contact", "/legal/privacy", "/legal/terms"];
  const now = new Date();
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, lastModified: now, priority: p === "" ? 1 : 0.7 })),
    ...portfolio.map((c) => ({ url: `${site.url}/portfolio/${c.slug}`, lastModified: now, priority: 0.5 })),
  ];
}
