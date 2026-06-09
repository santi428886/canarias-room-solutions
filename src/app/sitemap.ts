import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/quienes-somos", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/inmobiliarias", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/aviso-legal", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
