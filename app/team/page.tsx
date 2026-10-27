import { Chapter, PageHero } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { team } from "@/content/team";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Leadership & Team", "The leadership of Kingdom Business Holdings.", "/team");

export default function Team() {
  return (
    <>
      <PageHero folio="Nº 03 · Leadership" title="The people accountable for the work." seed="team">
        <p>Each portfolio company has its own management. This page lists the leadership of the holding company.</p>
      </PageHero>
      <Chapter tone="ivory" mark="§ I" label="Leadership">
        <ul className="grid gap-x-10 gap-y-20 sm:grid-cols-2 xl:grid-cols-3">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} delay={(i % 3) * 0.08}>
              <Photo file={`team/${m.photo ?? "none"}`} alt={`Portrait of ${m.name}`} arch caption="Portrait" className="aspect-[3/4] w-full" sizes="(min-width: 1280px) 25vw, (min-width: 640px) 40vw, 90vw" />
              <h2 className="mt-8 font-display text-3xl leading-tight">{m.name}</h2>
              <p className="label mt-2 text-gold-ink">{m.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-dark">{m.bio}</p>
              {m.linkedin && (
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="label mt-4 inline-block border-b border-ink pb-1 hover:text-gold-ink">
                  LinkedIn<span className="sr-only"> profile of {m.name} (opens in a new tab)</span>
                </a>
              )}
            </Reveal>
          ))}
        </ul>
        {/* [[TEAM MEMBERS TO BE SUPPLIED]] */}
      </Chapter>
    </>
  );
}
