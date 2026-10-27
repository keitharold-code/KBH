import { PageHero, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RelationshipName } from "@/components/RelationshipName";
import { visibleRelationships, describeRelationship } from "@/content/partners";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Relationships", "Commercial relationships held by Kingdom Business Holdings and its portfolio companies.", "/relationships");

export default function Relationships() {
  const rels = visibleRelationships();
  return (
    <>
      <PageHero eyebrow="Relationships" title="Relationships.">
        <p>Commercial relationships held by our portfolio companies, described as precisely as we are able.</p>
      </PageHero>
      <Section tone="ivory">
        <ul className="grid gap-x-12 gap-y-4 md:grid-cols-2">
          {rels.map((r, i) => (
            <Reveal as="li" key={r.name} delay={(i % 2) * 0.1} className="border-t border-gold py-8">
              <RelationshipName r={r} className="text-4xl" />
              <p className="mt-2 text-[0.7rem] uppercase tracking-eyebrow text-gold-ink">{r.relationshipType === "Unconfirmed" ? "Details to be confirmed" : r.relationshipType}</p>
              <p className="mt-4 leading-relaxed text-stone-dark">{r.name} &mdash; {describeRelationship(r)}</p>
            </Reveal>
          ))}
        </ul>
        <p className="mt-16 text-xs text-stone-dark">Trademarks belong to their respective owners.</p>
      </Section>
    </>
  );
}
