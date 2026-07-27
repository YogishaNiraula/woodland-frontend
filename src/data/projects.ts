import { images, type ImageRef } from "./images";

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

/**
 * Sample data only. Images are placeholders, not verified Woodland projects.
 * This shape is intentionally close to the future database table.
 */
export const projects: Project[] = [
  {
    slug: "oak-bedroom-wardrobe-wall",
    title: "Bedroom wardrobe wall with bed surround",
    category: "Storage and Built-ins",
    description:
      "A floor-to-ceiling wardrobe run with an integrated bed surround, alcove shelving and a bedside drawer unit, measured to fit the room wall to wall.",
    cover: { ...images.heroBedroom, alt: "Fitted timber wardrobe wall and panelled bed surround in a cream bedroom" },
    gallery: [
      { ...images.wardrobe, alt: "Interior of a fitted wardrobe with shelving and hanging rails" },
      { ...images.shelving, alt: "Built-in timber shelving with lower cupboard doors" },
    ],
    materials: ["Solid hardwood frames", "Veneered engineered board panels", "Soft-close hardware"],
    featured: true,
  },
  {
    slug: "walnut-dining-table",
    title: "Dining table and chairs for a family home",
    category: "Custom Furniture",
    description:
      "A dining table sized to the room and the household, with a pedestal base for comfortable seating and matching chairs.",
    cover: { ...images.diningTable, alt: "Custom hardwood dining table with matching chairs in a bright dining room" },
    gallery: [{ ...images.workshop, alt: "Workbench with hand planes and freshly planed boards" }],
    materials: ["Solid hardwood top", "Hand-finished oil"],
    featured: true,
  },
  {
    slug: "green-kitchen-cabinetry",
    title: "Kitchen cabinetry with open timber shelving",
    category: "Kitchens",
    description:
      "Full-height storage, drawer banks and open shelves planned around appliances, worktop heights and daily use.",
    cover: { ...images.kitchen, alt: "Deep green custom kitchen cabinetry with timber open shelving" },
    gallery: [{ ...images.materials, alt: "Timber and engineered board samples laid out on a cream surface" }],
    materials: ["Painted engineered board carcasses", "Solid timber shelves", "Brass handles"],
    featured: true,
  },
  {
    slug: "timber-stair-and-bannister",
    title: "Staircase treads and bannister",
    category: "Architectural Woodwork",
    description:
      "Hardwood treads, newel posts and a slim bannister profile, fabricated to survey dimensions and installed on site.",
    cover: { ...images.stairs, alt: "Custom hardwood staircase with timber bannister in a bright stairwell" },
    gallery: [{ ...images.door, alt: "Solid timber panelled door with brass lever handle" }],
    materials: ["Solid hardwood treads and handrail"],
    featured: true,
  },
  {
    slug: "walk-in-closet",
    title: "Walk-in closet fit-out",
    category: "Whole-home Woodwork",
    description:
      "A closet room organised around hanging lengths, folded storage and drawers, using engineered boards for stable long spans.",
    cover: { ...images.wardrobe, alt: "Walk-in closet with fitted timber shelving, rails and drawer units" },
    gallery: [{ ...images.shelving, alt: "Fitted shelving with adjustable shelf spacing" }],
    materials: ["Veneered engineered board", "Metal hanging rails"],
    featured: true,
  },
  {
    slug: "cafe-tables-and-counter",
    title: "Cafe tables, benches and counter joinery",
    category: "Business Furniture",
    description:
      "Hard-wearing tables, bench seating and counter panelling built for daily commercial use and easy cleaning.",
    cover: { ...images.cafe, alt: "Cafe interior with custom timber tables, benches and counter panelling" },
    gallery: [{ ...images.workshop, alt: "Workshop bench with tools and prepared timber" }],
    materials: ["Solid timber tops", "Steel bases"],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function relatedProjects(project: Project, limit = 3) {
  const sameCategory = projects.filter((p) => p.slug !== project.slug && p.category === project.category);
  const others = projects.filter((p) => p.slug !== project.slug && p.category !== project.category);
  return [...sameCategory, ...others].slice(0, limit);
}