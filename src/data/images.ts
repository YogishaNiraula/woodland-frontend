/**
 * Centralized image references.
 * All images below are temporary placeholders — replace the imports with
 * approved Woodland project photography. Nothing here is a verified project.
 */
import heroBedroom from "@/assets/hero-bedroom-joinery.jpg";
import diningTable from "@/assets/project-dining-table.jpg";
import shelving from "@/assets/project-shelving.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import stairs from "@/assets/project-stairs.jpg";
import wardrobe from "@/assets/project-wardrobe.jpg";
import cafe from "@/assets/project-cafe.jpg";
import workshop from "@/assets/workshop-bench.jpg";
import materials from "@/assets/materials-samples.jpg";
import door from "@/assets/project-door.jpg";

export type ImageRef = {
  src: string;
  width: number;
  height: number;
};

export const images = {
  heroBedroom: { src: heroBedroom, width: 1920, height: 1200 },
  diningTable: { src: diningTable, width: 1400, height: 1050 },
  shelving: { src: shelving, width: 1100, height: 1400 },
  kitchen: { src: kitchen, width: 1400, height: 1050 },
  stairs: { src: stairs, width: 1100, height: 1400 },
  wardrobe: { src: wardrobe, width: 1400, height: 1050 },
  cafe: { src: cafe, width: 1400, height: 1050 },
  workshop: { src: workshop, width: 1400, height: 1050 },
  materials: { src: materials, width: 1400, height: 900 },
  door: { src: door, width: 1100, height: 1400 },
} satisfies Record<string, ImageRef>;