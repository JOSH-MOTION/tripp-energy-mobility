import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { projects } from "@/lib/data/projects";
import { newsPosts } from "@/lib/data/news";

const staticRoutes = [
  "",
  "/about",
  "/the-problem",
  "/our-solution",
  "/projects",
  "/programme-family",
  "/impact",
  "/research",
  "/partners",
  "/news",
  "/careers",
  "/contact",
  "/press",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  for (const project of projects) {
    entries.push({ url: `${base}/projects/${project.slug}`, lastModified: new Date() });
  }
  for (const post of newsPosts) {
    entries.push({ url: `${base}/news/${post.slug}`, lastModified: new Date() });
  }

  return entries;
}
