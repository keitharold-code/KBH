import { Eyebrow, Heading, PageHero, Prose, Rule, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { about } from "@/content/about";
import { values } from "@/content/philosophy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About", "The history, mission, governance and values of Kingdom Business Holdings.", "/about");

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="A holding company, built for the long term.">
        <p>One owner, one standard and a horizon measured in decades.</p>
      </PageHero>

      <Section tone="ivory" labelledBy="history">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow tone="ivory">History</Eyebrow>
            <Rule className="my-6" />
            <Heading id="history" tone="ivory" className="md:text-5xl">How we came to be.</Heading>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <Prose>{about.history.map((p) => <p key={p}>{p}</p>)}</Prose>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink" labelledBy="mission">
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Mission</Eyebrow>
            <Rule className="my-6" />
            <h2 id="mission" className="font-display text-3xl font-light leading-snug md:text-4xl">{about.mission}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Vision</Eyebrow>
            <Rule className="my-6" />
            <p className="font-display text-3xl font-light leading-snug md:text-4xl">{about.vision}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="ivory" labelledBy="governance">
        <Reveal>
          <Eyebrow tone="ivory">Governance</Eyebrow>
          <Rule className="my-6" />
          <Heading id="governance" tone="ivory">Structure before capital.</Heading>
        </Reveal>
        <dl className="mt-16 grid gap-x-12 gap-y-4 md:grid-cols-2">
          {about.governance.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 0.1} className="border-t border-gold py-8">
              <dt className="font-display text-2xl">{g.title}</dt>
              <dd className="mt-3 leading-[1.85] text-stone-dark">{g.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section tone="ink" labelledBy="values">
        <Reveal>
          <Eyebrow>Values</Eyebrow>
          <Rule className="my-6" />
          <Heading id="values">What we hold to.</Heading>
        </Reveal>
        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 0.08} className="border-t border-gold pt-6">
              <h3 className="font-display text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">{v.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
