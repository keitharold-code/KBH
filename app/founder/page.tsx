import { Chapter, PageHero, Prose, Heading } from "@/components/ui";
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
      <PageHero folio="Nº 02 · Founder" title={founder.name} seed="founder">
        <p>{founder.title}, {site.name}</p>
      </PageHero>

      <Chapter tone="ivory" mark="§ I" label="Biography" labelledBy="bio">
        <h2 id="bio" className="sr-only">Biography</h2>
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <Photo file="founder-portrait.jpg" alt="Portrait of Keith Harold Mugabi, founder" arch caption="Portrait" className="aspect-[3/4] w-full" sizes="(min-width: 768px) 30vw, 90vw" />
          </Reveal>
          <Reveal className="md:col-span-7">
            <Prose>{founder.biography.map((p) => <p key={p}>{p}</p>)}</Prose>
            <p className="label mt-16 text-gold-ink">Education</p>
            <dl className="mt-4 border-b border-ink/20">
              {founder.education.map((e) => (
                <div key={e.award} className="grid gap-2 border-t border-ink/20 py-5 md:grid-cols-2">
                  <dt className="font-display text-2xl">{e.award}</dt>
                  <dd className="text-sm text-stone-dark">{e.institution}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Chapter>

      <Chapter tone="ink" mark="§ II" label="A letter" labelledBy="letter">
        <Heading id="letter" className="max-w-[14ch]">On building to last.</Heading>
        <Reveal className="mt-14 bg-ivory p-8 text-ink md:p-16">
          <Prose className="max-w-[36rem] text-lg">
            {founder.letter.map((p, i) => (
              <p key={p} className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[4.75rem] first-letter:leading-[0.8] first-letter:text-ink" : ""}>{p}</p>
            ))}
          </Prose>
          <p className="mt-12 font-display text-4xl">{founder.signature}</p>
          <p className="label mt-2 text-stone-dark">{founder.title}</p>
        </Reveal>
      </Chapter>
    </>
  );
}
