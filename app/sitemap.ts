import { MetadataRoute } from "next";
const SITE = "https://kitsura.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/support", "/privacy", "/terms", "/delete-account"];
  return routes.flatMap((p) => {
    const jp = `${SITE}${p || "/"}`;
    const en = `${SITE}/en${p || ""}`.replace(/\/$/, ""); // avoid trailing slash dupes

    return [
      { url: jp, lastModified: new Date() },
      { url: en, lastModified: new Date() },
    ];
  });
}
