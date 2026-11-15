import Image from "next/image";
import type { Relationship } from "@/content/partners";

/** Logo only when approved and supplied; otherwise the name in serif type. */
export function RelationshipName({ r, className = "", center = false }: { r: Relationship; className?: string; center?: boolean }) {
  if (r.logoApproved && r.logo) {
    return <Image src={r.logo} alt={r.name} width={160} height={48} className={`h-10 w-auto object-contain ${center ? "" : "object-left"}`} />;
  }
  return <p className={`font-display leading-tight ${className}`}>{r.name}</p>;
}
