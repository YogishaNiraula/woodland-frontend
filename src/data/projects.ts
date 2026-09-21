import type { ImageRef } from "./images";

export const categories = [
  "Custom Furniture",
  "Storage and Built-ins",
  "Kitchens",
  "Architectural Woodwork",
  "Whole-home Woodwork",
  "Business Furniture",
] as const;

export type Category = (typeof categories)[number];

export type ProjectImage = ImageRef & { alt: string };

export type Project = {
  slug: string;
  title: string;
  category: Category;
  description: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
  materials?: string[];
  featured: boolean;
};

export const projects: Project[] = [];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function relatedProjects(project: Project, limit = 3) {
  const sameCategory = projects.filter(
    (p) => p.slug !== project.slug && p.category === project.category,
  );
  const others = projects.filter(
    (p) => p.slug !== project.slug && p.category !== project.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
