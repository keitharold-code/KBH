export const SECTORS = [
  "Logistics",
  "Technology",
  "Financial Services",
  "Energy",
  "Construction & Infrastructure",
  "Agriculture",
  "Automotive",
  "Hospitality & Experiences",
] as const;

export type Sector = (typeof SECTORS)[number];

export const sectorSummaries: Record<Sector, string> = {
  Logistics: "Domestic delivery, international freight and cross-border sourcing.",
  Technology: "Business automation, conversational commerce and engineering talent.",
  "Financial Services": "Digital banking infrastructure for small and medium enterprises.",
  Energy: "Retail fuel distribution under established international brands.",
  "Construction & Infrastructure": "Engineering, construction and the built environment.",
  Agriculture: "Aggregation, input financing, compliance and premium produce.",
  Automotive: "Digital services and education for the motor trade.",
  "Hospitality & Experiences": "Premium, experience-led events.",
};
