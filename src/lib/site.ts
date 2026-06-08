const FALLBACK_SITE_URL = "https://canariasroomsolutions.com";

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;
  return url.endsWith("/") ? url.slice(0, -1) : url;
}
