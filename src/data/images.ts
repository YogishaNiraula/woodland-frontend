/**
 * Centralized image references.
 * Illustrative images used outside the unpublished project portfolio.
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
import heroBedroomSmall from "@/assets/responsive/hero-bedroom-joinery-720.webp";
import diningTableSmall from "@/assets/responsive/project-dining-table-720.webp";
import shelvingSmall from "@/assets/responsive/project-shelving-720.webp";
import kitchenSmall from "@/assets/responsive/project-kitchen-720.webp";
import stairsSmall from "@/assets/responsive/project-stairs-720.webp";
import wardrobeSmall from "@/assets/responsive/project-wardrobe-720.webp";
import cafeSmall from "@/assets/responsive/project-cafe-720.webp";
import workshopSmall from "@/assets/responsive/workshop-bench-720.webp";
import materialsSmall from "@/assets/responsive/materials-samples-720.webp";
import doorSmall from "@/assets/responsive/project-door-720.webp";

export type ImageRef = {
  src: string;
  srcSmall: string;
  width: number;
  height: number;
};

export const images = {
  heroBedroom: {
    src: heroBedroom,
    srcSmall: heroBedroomSmall,
    width: 1920,
    height: 1200,
  },
  diningTable: {
    src: diningTable,
    srcSmall: diningTableSmall,
    width: 1400,
    height: 1050,
  },
  shelving: {
    src: shelving,
    srcSmall: shelvingSmall,
    width: 1100,
    height: 1400,
  },
  kitchen: { src: kitchen, srcSmall: kitchenSmall, width: 1400, height: 1050 },
  stairs: { src: stairs, srcSmall: stairsSmall, width: 1100, height: 1400 },
  wardrobe: {
    src: wardrobe,
    srcSmall: wardrobeSmall,
    width: 1400,
    height: 1050,
  },
  cafe: { src: cafe, srcSmall: cafeSmall, width: 1400, height: 1050 },
  workshop: {
    src: workshop,
    srcSmall: workshopSmall,
    width: 1400,
    height: 1050,
  },
  materials: {
    src: materials,
    srcSmall: materialsSmall,
    width: 1400,
    height: 900,
  },
  door: { src: door, srcSmall: doorSmall, width: 1100, height: 1400 },
} satisfies Record<string, ImageRef>;
