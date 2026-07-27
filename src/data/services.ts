import { images, type ImageRef } from "./images";

export type Service = {
  title: string;
  summary: string;
  examples: string[];
  image: ImageRef & { alt: string };
};

export const services: Service[] = [
  {
    title: "Custom Furniture",
    summary:
      "Individual pieces made to your dimensions — sized for the room, the household and the way the piece will be used.",
    examples: ["Beds and headboards", "Dining and coffee tables", "Desks and study units", "Shelves and racks"],
    image: { ...images.diningTable, alt: "Custom hardwood dining table and chairs in a family dining room" },
  },
  {
    title: "Storage and Built-ins",
    summary:
      "Storage planned around the space you actually have: alcoves, sloping ceilings, awkward corners and full walls.",
    examples: ["Wardrobes and closets", "Cupboards and cabinets", "Alcove shelving", "TV and media units"],
    image: { ...images.wardrobe, alt: "Fitted walk-in closet with timber shelving and drawers" },
  },
  {
    title: "Kitchens",
    summary:
      "Cabinetry laid out around appliances, worktop heights and daily routine, built with materials suited to a working kitchen.",
    examples: ["Base and wall cabinetry", "Tall storage", "Islands and counters", "Open shelving"],
    image: { ...images.kitchen, alt: "Custom green kitchen cabinetry with timber open shelving" },
  },
  {
    title: "Architectural Woodwork",
    summary: "Fixed timber elements that belong to the building itself, fabricated to survey dimensions.",
    examples: ["Doors and frames", "Window joinery", "Staircases and treads", "Bannisters and railings"],
    image: { ...images.stairs, alt: "Custom hardwood staircase with timber bannister" },
  },
  {
    title: "Whole-home Woodwork",
    summary:
      "A coordinated programme of woodwork across several rooms, sequenced so materials, finishes and details stay consistent.",
    examples: ["Multi-room fit-outs", "Matched finishes across rooms", "Phased installation"],
    image: { ...images.shelving, alt: "Built-in timber shelving and cabinetry along a living room wall" },
  },
  {
    title: "Business Furniture",
    summary: "Tables, seating and counter joinery for cafes, offices and shops, built for continuous daily use.",
    examples: ["Cafe tables and benches", "Counters and service joinery", "Office desks and storage"],
    image: { ...images.cafe, alt: "Cafe interior with custom timber tables and bench seating" },
  },
];

export const estimateFactors = [
  { label: "Dimensions", body: "Size and quantity drive material use and workshop time." },
  { label: "Materials", body: "Solid wood, veneered board and laminates differ in cost and behaviour." },
  { label: "Hardware", body: "Hinges, runners, rails and handles vary widely in quality and price." },
  { label: "Finish", body: "Oil, lacquer, paint and edge treatments each take different preparation." },
  { label: "Complexity", body: "Curves, integrated lighting, fine detailing and tight fits take longer." },
  { label: "Delivery", body: "Access, floor level and distance within the valley affect handling." },
  { label: "Installation", body: "Scribing to uneven walls and floors is part of a proper fit." },
];