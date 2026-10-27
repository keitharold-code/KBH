import { ButtonLink, Eyebrow, Heading, Rule, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { Photo } from "@/components/Photo";
import { CompanyCard } from "@/components/CompanyCard";
import { pillars } from "@/content/philosophy";
import { SECTORS, sectorSummaries } from "@/content/sectors";
import { featuredCompanies, portfolio } from "@/content/portfolio";
import { visibleRelationships, describeRelationship } from "@/content/partners";
import { founder } from "@/content/founder";
import { RelationshipName } from "@/components/RelationshipName";
import Link from "next/link";

const sectorCount = (s: (typeof SECTORS)[number]) =>
  portfolio.filter((c) => c.sector === s || c.alsoIn?.includes(s)).length;

export default function Home() {
  const rels = visibleRelationships();
  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-ivory">
        <Parallax className="absolute inset-0">
          <Photo file="hero-kampala-dusk.jpg" alt="Kampala skyline at dusk" className="h-full w-full opacity-60" sizes="100vw" priority />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="relative mx-auto w-full max-w-page px-6 pb-24 pt-40 md:px-10 md:pb-32">
          <div>
            <Eyebrow>Kingdom Business Holdings</Eyebrow>
            <Rule className="my-6" />
            <h1 className="max-w-4xl font-display text-5xl font-light leading-[1.02] tracking-[0.01em] sm:text-6xl md:text-8xl">
              Building enduring African enterprise.
            </h1>
            <p className="hero-fade mt-8 max-w-xl text-lg leading-relaxed text-ivory/75">
              A Ugandan investment holding company. We commit long-term, disciplined capital to businesses built to last.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Philosophy */}
      <Section tone="ivory" labelledBy="philosophy">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow tone="ivory">Investment philosophy</Eyebrow>
            <Rule className="my-6" />
            <Heading id="philosophy" tone="ivory">Three principles, applied without exception.</Heading>
          </Reveal>
          <ol className="lg:col-span-7">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.1} className="grid gap-4 border-t border-gold py-10 md:grid-cols-[5rem_1fr]">
                <span aria-hidden="true" className="font-display text-5xl font-light text-gold-ink">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-3xl font-normal">{p.title}</h3>
                  <p className="mt-3 max-w-lg leading-[1.85] text-stone-dark">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* 3. Sectors */}
      <Section tone="ink" labelledBy="sectors">
        <Reveal>
          <Eyebrow>Sectors</Eyebrow>
          <Rule className="my-6" />
          <Heading id="sectors">Eight sectors. One standard.</Heading>
        </Reveal>
        <ul className="mt-16 grid border-l border-t border-ink-line sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((s, i) => (
            <Reveal as="li" key={s} delay={(i % 4) * 0.08} className="border-b border-r border-ink-line p-8">
              <p className="font-display text-5xl font-light text-gold">{String(sectorCount(s)).padStart(2, "0")}</p>
              <h3 className="mt-6 font-display text-2xl font-normal">{s}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">{sectorSummaries[s]}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 4. Portfolio teaser */}
      <Section tone="ivory" labelledBy="portfolio-h">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow tone="ivory">Portfolio</Eyebrow>
            <Rule className="my-6" />
            <Heading id="portfolio-h" tone="ivory">Selected holdings.</Heading>
          </Reveal>
          <ButtonLink href="/portfolio" tone="ivory">View the portfolio</ButtonLink>
        </div>
        <ul className="mt-16 grid gap-x-12 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredCompanies().map((c, i) => (
            <Reveal as="li" key={c.slug} delay={(i % 3) * 0.08}>
              <CompanyCard company={c} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 5. Founder quote */}
      <Section tone="ink" labelledBy="founder-q">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Photo file="founder-portrait.jpg" alt="Portrait of Keith Harold Mugabi, founder" className="aspect-[4/5] w-full" sizes="(min-width: 1024px) 33vw, 100vw" />
          </Reveal>
          <Reveal className="lg:col-span-8">
            <h2 id="founder-q" className="sr-only">Founder</h2>
            <Rule className="mb-8" />
            <blockquote>
              <p className="font-display text-3xl font-light leading-snug md:text-5xl">
                &ldquo;{founder.quote}&rdquo;
              </p>
              <footer className="mt-8 text-sm text-ivory/70">
                <span className="uppercase tracking-eyebrow text-gold">{founder.name}</span>
                <span className="mx-3 text-ivory/40">·</span>
                {founder.title}
              </footer>
            </blockquote>
            <div className="mt-10">
              <ButtonLink href="/founder">Read the founder&rsquo;s letter</ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 6. Relationships */}
      <Section tone="ivory" labelledBy="rel-h">
        <Reveal>
          <Eyebrow tone="ivory">Relationships</Eyebrow>
          <Rule className="my-6" />
          <Heading id="rel-h" tone="ivory">Established commercial relationships.</Heading>
        </Reveal>
        <ul className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {rels.map((r) => (
            <li key={r.name} className="border-t border-gold pt-6">
              <RelationshipName r={r} className="text-3xl" />
              <p className="mt-3 text-sm leading-relaxed text-stone-dark">{describeRelationship(r)}</p>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-xs text-stone-dark">
          Trademarks belong to their respective owners.{" "}
          <Link href="/relationships" className="underline underline-offset-4 hover:text-ink">All relationships</Link>
        </p>
      </Section>

      {/* 7. Enquiry CTA */}
      <Section tone="ink" labelledBy="cta">
        <Reveal className="max-w-3xl">
          <Eyebrow>Enquiries</Eyebrow>
          <Rule className="my-6" />
          <Heading id="cta">Investors, institutions and operators are welcome to write to us.</Heading>
          <div className="mt-10">
            <ButtonLink href="/contact">Make an enquiry</ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
