import Link from "next/link";
import { relationships } from "@/content/partners";
import { RelationshipName } from "./RelationshipName";

/** Full-bleed banner of logo slots. Shows serif names until logos are approved in content/partners.ts. */
export function RelationshipBanner() {
  return (
    <section aria-labelledby="rel-h" className="bg-ivory-deep text-ink">
      <div className="mx-auto max-w-[88rem] px-6 py-20 md:px-12 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 id="rel-h" className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">Established commercial relationships.</h2>
          <Link href="/relationships" className="label w-fit border-b border-ink pb-2 hover:text-gold-ink">All relationships →</Link>
        </div>
        <ul className="mt-14 grid grid-cols-2 border-y border-ink/25 md:grid-cols-5">
          {relationships.map((r) => (
            <li key={r.name} className="flex min-h-36 items-center justify-center border-ink/25 px-5 py-8 text-center odd:border-r max-md:[&:nth-child(n+3)]:border-t md:border-r md:last:border-r-0 md:odd:border-r">
              <RelationshipName r={r} className="text-2xl" center />
            </li>
          ))}
        </ul>
        <p className="label mt-8 text-stone-dark">Trademarks belong to their respective owners.</p>
      </div>
    </section>
  );
}
