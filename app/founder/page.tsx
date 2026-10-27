import { Eyebrow, Heading, PageHero, Prose, Rule, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { founder } from "@/content/founder";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

export const metadata = pageMetadata("Founder", "Keith Harold Mugabi, founder of Kingdom Business Holdings.", "/founder");

export default function Founder() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Person", name: founder.name, jobTitle: founder.title, worksFor: { "@type": "Organization", name: site.name } }} />
      <PageHero eyebrow="Founder" title={founder.name}>
        <p>{founder.title}, {site.name}</p>
      </PageHero>

      <Section tone="ivory" labelledBy="bio">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Photo file="founder-portrait.jpg" alt="Portrait of Keith Harold Mugabi, founder" className="aspect-[4/5] w-full" sizes="(min-width: 1024px) 33vw, 100vw" />
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <Eyebrow tone="ivory">Biography</Eyebrow>
            <Rule className="my-6" />
            <h2 id="bio" className="sr-only">Biography</h2>
            <Prose>{founder.biography.map((p) => <p key={p}>{p}</p>)}</Prose>
            <div className="mt-14">
              <Eyebrow tone="ivory">Education</Eyebrow>
              <dl className="mt-6">
                {founder.education.map((e) => (
                  <div key={e.award} className="border-t border-gold py-5">
                    <dt className="font-display text-2xl">{e.award}</dt>
                    <dd className="mt-1 text-sm text-stone-dark">{e.institution}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink" labelledBy="letter">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>A letter</Eyebrow>
            <Rule className="my-6" />
            <Heading id="letter" className="md:text-5xl">On building to last.</Heading>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <Prose tone="ink">
              {founder.letter.map((p) => <p key={p} className="text-lg">{p}</p>)}
              <p className="pt-6 font-display text-3xl font-light text-ivory">{founder.signature}</p>
            </Prose>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
