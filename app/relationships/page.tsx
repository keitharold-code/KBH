import { Chapter, PageHero } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RelationshipName } from "@/components/RelationshipName";
import { visibleRelationships, describeRelationship } from "@/content/partners";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Relationships", "Commercial relationships held by Kingdom Business Holdings and its portfolio companies.", "/relationships");

export default function Relationships() {
  const rels = visibleRelationships();
  return (
    <>
      <PageHero folio="Nº 05 · Relationships" title="Relationships." seed="relationships">
        <p>Commercial relationships held by our portfolio companies, described as precisely as we are able.</p>
      </PageHero>
      <Chapter tone="ivory" mark="§ I" label="Schedule">
        <ul className="border-b border-ink/20">
          {rels.map((r) => (
            <Reveal as="li" key={r.name} className="grid gap-x-8 gap-y-3 border-t border-ink/20 py-9 md:grid-cols-[1.2fr_1fr_1.4fr]">
              <RelationshipName r={r} className="text-4xl" />
              <p className="label text-gold-ink">{r.relationshipType === "Unconfirmed" ? "Details to be confirmed" : r.relationshipType}</p>
              <p className="leading-relaxed text-stone-dark">{r.name} &mdash; {describeRelationship(r)}</p>
            </Reveal>
          ))}
        </ul>
        <p className="label mt-14 text-stone-dark">Trademarks belong to their respective owners.</p>
      </Chapter>
    </>
  );
}
