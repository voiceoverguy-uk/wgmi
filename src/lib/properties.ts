import propertiesData from "../../data/properties.json";

export interface Property {
  slug: string;
  displayTitle: string;
  status: "let" | "available";
  summary: string;
  highlights: string[];
  images: string[];
}

export function getAllProperties(): Property[] {
  return propertiesData as Property[];
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return (propertiesData as Property[]).find((p) => p.slug === slug);
}
