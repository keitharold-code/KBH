/**
 * Commercial relationships. Rules:
 *  - A logo renders only if logoApproved === true; otherwise the name is set in serif type.
 *  - The word "partner" is used only where relationshipType === "Partner".
 *  - Describe each relationship precisely and name the portfolio company that holds it (`via`).
 *  - Entries with confirmed !== true are hidden from production builds until KBH supplies details.
 */
export type RelationshipType =
  | "Franchise"
  | "Partner"
  | "Customer"
  | "Supplier"
  | "Carrier"
  | "Service provider"
  | "Unconfirmed";

export interface Relationship {
  name: string;
  relationshipType: RelationshipType;
  description: string;
  via: string;
  logo?: string;
  logoApproved: boolean;
  confirmed: boolean;
}

export const relationships: Relationship[] = [
  {
    name: "Vivo Energy Uganda",
    relationshipType: "Franchise", // [[CONFIRM]] exact structure (franchise / dealer / licence)
    description: "Fuel retail franchise",
    via: "Kali Kwik Solutions",
    logoApproved: false,
    confirmed: true,
  },
  {
    name: "Air Arabia",
    relationshipType: "Unconfirmed",
    description: "[[DETAILS]]",
    via: "[[DETAILS]]", // likely Urban Xpress
    logoApproved: false,
    confirmed: false,
  },
  {
    name: "Uganda Airlines",
    relationshipType: "Unconfirmed",
    description: "[[DETAILS]]",
    via: "[[DETAILS]]",
    logoApproved: false,
    confirmed: false,
  },
  {
    name: "MTN",
    relationshipType: "Unconfirmed",
    description: "[[DETAILS]]",
    via: "[[DETAILS]]",
    logoApproved: false,
    confirmed: false,
  },
  {
    name: "Kenfields Company Limited",
    relationshipType: "Unconfirmed",
    description: "[[DETAILS]]",
    via: "[[DETAILS]]",
    logoApproved: false,
    confirmed: false,
  },
];

/** Production shows confirmed entries only; development shows all so gaps stay visible. */
export const visibleRelationships = () =>
  relationships.filter((r) => r.confirmed || process.env.NODE_ENV !== "production");

/** "Vivo Energy Uganda — fuel retail franchise, via Kali Kwik Solutions" */
export function describeRelationship(r: Relationship): string {
  const d = r.description.charAt(0).toLowerCase() + r.description.slice(1);
  return `${d}, via ${r.via}`;
}
