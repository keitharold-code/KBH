import Image from "next/image";
import type { Relationship } from "@/content/partners";

/** Logo only when approved and supplied; otherwise the name in serif type. */
export function RelationshipName({ r, className = "" }: { r: Relationship; className?: string }) {
  if (r.logoApproved && r.logo) {
    return <Image src={r.logo} alt={r.name} width={160} height={48} className="h-10 w-auto object-contain object-left" />;
  }
  return <p className={`font-display font-normal leading-tight ${className}`}>{r.name}</p>;
}
