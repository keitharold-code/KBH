/**
 * Commercial relationships. Rules:
 *  - A logo renders only if logoApproved === true AND `logo` is set; otherwise the name is set in serif type.
 *    To enable a logo: save the file under /public/logos/, then set logoApproved: true.
 *  - The word "partner" is used only where relationshipType === "Partner".
 *  - Where known, describe the relationship precisely and name the portfolio company that holds it (`via`).
 */
export type RelationshipType =
  | "Franchise"
  | "Partner"
  | "Customer"
  | "Supplier"
  | "Carrier"
  | "Service provider"
  | "Relationship";

export interface Relationship {
  name: string;
  relationshipType: RelationshipType;
  /** Short lower-case phrase, e.g. "fuel retail franchise". Omit if not yet specified. */
  description?: string;
  /** Portfolio company that holds the relationship. Omit if not yet specified. */
  via?: string;
  /** e.g. "/logos/vivo-energy.svg" */
  logo?: string;
  logoApproved: boolean;
}

export const relationships: Relationship[] = [
  {
    name: "Vivo Energy Uganda",
    relationshipType: "Franchise",
    description: "fuel retail franchise",
    via: "Kali Kwik Solutions",
    logo: "/logos/vivo-energy.svg",
    logoApproved: false,
  },
  { name: "Air Arabia", relationshipType: "Relationship", logo: "/logos/air-arabia.svg", logoApproved: false },
  { name: "Uganda Airlines", relationshipType: "Relationship", logo: "/logos/uganda-airlines.svg", logoApproved: false },
  { name: "MTN", relationshipType: "Relationship", logo: "/logos/mtn.svg", logoApproved: false },
  { name: "Kenfields Company Limited", relationshipType: "Relationship", logo: "/logos/kenfields.svg", logoApproved: false },
];

/** "Vivo Energy Uganda — fuel retail franchise, via Kali Kwik Solutions" (or a plain fallback). */
export function describeRelationship(r: Relationship): string {
  if (r.description && r.via) return `${r.name} — ${r.description}, via ${r.via}`;
  if (r.description) return `${r.name} — ${r.description}`;
  return `${r.name} — commercial relationship`;
}
