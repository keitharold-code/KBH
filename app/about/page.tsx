import { Chapter, Heading, PageHero, Prose } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { about } from "@/content/about";
import { values } from "@/content/philosophy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About", "The history, mission, governance and values of Kingdom Business Holdings.", "/about");

export default function About() {
  return (
    <>
      <PageHero folio="Nº 01 · About" title="A holding company, built for the long term." seed="about">
        <p>One owner, one standard, and a horizon measured in decades.</p>
      </PageHero>

      <Chapter tone="ivory" mark="§ I" label="History" labelledBy="history">
        <Heading id="history" className="sr-only">History</Heading>
        <Reveal>
          <Prose className="max-w-[40rem] text-xl leading-[1.7] first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:font-display first-letter:text-[5.5rem] first-letter:leading-[0.8] first-letter:text-ink">
            {about.history.map((p) => <p key={p}>{p}</p>)}
          </Prose>
        </Reveal>
      </Chapter>

      <Chapter tone="ink" mark="§ II" label="Mission & vision" labelledBy="mission">
        <Reveal>
          <h2 id="mission" className="font-display text-[clamp(2rem,4.2vw,3.75rem)] leading-[1.1]">{about.mission}</h2>
          <p className="mt-14 max-w-2xl border-t border-ink-line pt-8 font-display text-2xl leading-snug text-ivory/80">
            <span className="label mb-3 block text-gold">Vision</span>
            {about.vision}
          </p>
        </Reveal>
      </Chapter>

      <Chapter tone="ivory" mark="§ III" label="Governance" labelledBy="governance">
        <Heading id="governance" className="max-w-[14ch]">Structure before capital.</Heading>
        <dl className="mt-16 border-b border-ink/20">
          {about.governance.map((g, i) => (
            <Reveal key={g.title} className="grid gap-x-8 gap-y-3 border-t border-ink/20 py-8 md:grid-cols-[1fr_1.3fr]">
              <dt className="font-display text-3xl leading-tight">
                <span className="label mb-2 block text-gold-ink">Art. {i + 1}</span>
                {g.title}
              </dt>
              <dd className="leading-[1.75] text-stone-dark">{g.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Chapter>

      <Chapter tone="ink" mark="§ IV" label="Values" labelledBy="values">
        <h2 id="values" className="sr-only">Values</h2>
        <ul className="grid gap-px bg-ink-line sm:grid-cols-2">
          {values.map((v) => (
            <li key={v.title} className="bg-ink p-8 pl-0 sm:odd:pr-10 sm:even:pl-10">
              <h3 className="font-display text-4xl">{v.title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">{v.body}</p>
            </li>
          ))}
        </ul>
      </Chapter>
    </>
  );
}
