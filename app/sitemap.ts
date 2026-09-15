import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

const baseUrl = "https://TODO-tu-dominio.com"; // TODO: reemplazar con el dominio real del portafolio

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects
    .filter((project) => project.caseStudy)
    .map((project) => ({
      url: `${baseUrl}/proyectos/${project.slug}`,
      lastModified: new Date(),
    }));

  return [{ url: baseUrl, lastModified: new Date() }, ...projectRoutes];
}
