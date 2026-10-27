import { PageHero, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { team } from "@/content/team";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Leadership & Team", "The leadership of Kingdom Business Holdings.", "/team");

export default function Team() {
  return (
    <>
      <PageHero eyebrow="Leadership" title="The people accountable for the work.">
        <p>Each portfolio company has its own management. This page lists the leadership of the holding company.</p>
      </PageHero>
      <Section tone="ivory">
        <ul className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} delay={(i % 3) * 0.08}>
              <Photo
                file={`team/${m.photo ?? "none"}`}
                alt={`Portrait of ${m.name}`}
                className="aspect-[4/5] w-full"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="border-t border-gold pt-6 mt-6">
                <h2 className="font-display text-3xl">{m.name}</h2>
                <p className="mt-1 text-[0.7rem] uppercase tracking-eyebrow text-gold-ink">{m.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-stone-dark">{m.bio}</p>
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-gold-ink">
                    LinkedIn<span className="sr-only"> profile of {m.name} (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
        {/* [[TEAM MEMBERS TO BE SUPPLIED]] */}
      </Section>
    </>
  );
}
