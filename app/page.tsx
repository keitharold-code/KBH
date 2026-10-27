import Link from "next/link";
import { Chapter, Heading, LinkArrow, Label } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { Photo } from "@/components/Photo";
import { Guilloche } from "@/components/Guilloche";
import { CompanyTile, RegisterRow } from "@/components/CompanyCard";
import { RelationshipName } from "@/components/RelationshipName";
import { pillars } from "@/content/philosophy";
import { SECTORS, sectorSummaries } from "@/content/sectors";
import { featuredCompanies, portfolio } from "@/content/portfolio";
import { visibleRelationships, describeRelationship } from "@/content/partners";
import { founder } from "@/content/founder";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"];
const sectorCount = (s: (typeof SECTORS)[number]) => portfolio.filter((c) => c.sector === s || c.alsoIn?.includes(s)).length;

export default function Home() {
  const rels = visibleRelationships();
  const featured = featuredCompanies();
  const [lead, second, ...rest] = featured;
  const activeSectors = SECTORS.filter((s) => sectorCount(s) > 0).length;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink text-ivory">
        <Parallax className="absolute inset-0">
          <Photo file="hero-kampala-dusk.jpg" alt="Kampala skyline at dusk" className="h-full w-full opacity-50" sizes="100vw" priority />
        </Parallax>
        <Guilloche seed="kbh-hero" strokeWidth={0.5} className="pointer-events-none absolute -right-[22vw] top-[48%] h-[95vw] max-h-[75rem] w-[95vw] max-w-[75rem] -translate-y-1/2 text-gold opacity-[0.32]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />

        <div className="relative mx-auto flex w-full max-w-[88rem] flex-1 items-center px-6 pb-10 pt-40 md:px-12">
          <div>
            <h1 className="max-w-[12ch] font-display text-[clamp(3.5rem,10.5vw,10.5rem)] leading-[0.92] tracking-[-0.015em]">
              Building enduring African enterprise.
            </h1>
            <p className="hero-fade mt-10 max-w-md text-lg leading-relaxed text-ivory/75">
              An investment holding company in Kampala. Long-term, disciplined capital in businesses built to last.
            </p>
          </div>
        </div>

        <div className="relative border-t border-ink-line">
          <dl className="label mx-auto grid max-w-[88rem] grid-cols-2 gap-y-6 px-6 py-7 md:grid-cols-4 md:px-12">
            {[
              ["Seat", "Kampala, Uganda"],
              ["Form", "Investment holding"],
              ["Holdings", String(portfolio.length).padStart(2, "0")],
              ["Sectors", String(activeSectors).padStart(2, "0")],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-stone">{k}</dt>
                <dd className="mt-1 text-ivory">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* I. Philosophy: manifesto + three articles */}
      <Chapter tone="ivory" mark="§ I" label="Philosophy" labelledBy="philosophy">
        <Reveal>
          <h2 id="philosophy" className="max-w-[24ch] font-display text-[clamp(2rem,4.4vw,4rem)] leading-[1.08]">
            We hold businesses as a steward holds land: for the long term, with the accounts in order, and with a plain view of what must be left in better condition.
          </h2>
        </Reveal>
        <ol className="mt-20 grid border-t border-ink md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.1} className="border-b border-ink/20 py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <span aria-hidden="true" className="font-display text-5xl text-gold-ink">{ROMAN[i]}</span>
              <h3 className="mt-8 font-display text-3xl leading-tight">{p.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-[1.75] text-stone-dark">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </Chapter>

      {/* II. Sectors: index with leaders */}
      <Chapter tone="ink" mark="§ II" label="Sectors" labelledBy="sectors">
        <Heading id="sectors" className="max-w-[16ch]">Eight sectors, one standard.</Heading>
        <ul className="mt-16 border-b border-ink-line">
          {SECTORS.map((s) => (
            <li key={s}>
              <Link href="/portfolio" className="group grid items-baseline gap-x-6 gap-y-2 border-t border-ink-line py-6 transition-colors duration-700 hover:bg-ink-soft md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto]">
                <span className="font-display text-3xl transition-transform duration-700 ease-quart group-hover:translate-x-2 md:text-4xl">{s}</span>
                <span className="text-sm leading-relaxed text-ivory/65">{sectorSummaries[s]}</span>
                <span className="label text-gold">{String(sectorCount(s)).padStart(2, "0")} {sectorCount(s) === 1 ? "holding" : "holdings"}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Chapter>

      {/* III. Holdings: two plates + register */}
      <Chapter tone="ivory" mark="§ III" label="Holdings" labelledBy="holdings">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Heading id="holdings" className="max-w-[14ch]">Selected holdings.</Heading>
          <LinkArrow href="/portfolio" tone="ivory">Full register</LinkArrow>
        </div>
        <div className="mt-16 grid gap-px bg-ink md:grid-cols-12">
          <CompanyTile company={lead} className="md:col-span-7" />
          <CompanyTile company={second} className="md:col-span-5" />
        </div>
        <ul className="border-b border-ink/20">
          {rest.map((c, i) => (
            <li key={c.slug}><RegisterRow company={c} index={i + 2} /></li>
          ))}
        </ul>
      </Chapter>

      {/* IV. Founder */}
      <Chapter tone="ink" mark="§ IV" label="Founder" labelledBy="founder-q">
        <div className="grid items-end gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Photo file="founder-portrait.jpg" alt="Portrait of Keith Harold Mugabi, founder" arch caption="Portrait" className="aspect-[3/4] w-full" sizes="(min-width: 768px) 28vw, 80vw" />
          </Reveal>
          <Reveal className="md:col-span-8">
            <h2 id="founder-q" className="sr-only">Founder</h2>
            <span aria-hidden="true" className="block font-display text-[9rem] leading-[0.6] text-gold">&ldquo;</span>
            <blockquote>
              <p className="font-display text-[clamp(2rem,4vw,3.75rem)] leading-[1.1]">{founder.quote}</p>
              <footer className="label mt-10 text-ivory/70">
                <span className="text-gold">{founder.name}</span>, {founder.title}
              </footer>
            </blockquote>
            <div className="mt-12"><LinkArrow href="/founder">The founder&rsquo;s letter</LinkArrow></div>
          </Reveal>
        </div>
      </Chapter>

      {/* V. Relationships: colophon */}
      <Chapter tone="ivory" mark="§ V" label="Relationships" labelledBy="rel-h">
        <Heading id="rel-h" className="max-w-[18ch]">Established commercial relationships.</Heading>
        <ul className="mt-16 grid gap-10 md:grid-cols-3">
          {rels.map((r) => (
            <li key={r.name} className="border-l border-ink/25 pl-6">
              <RelationshipName r={r} className="text-3xl" />
              <p className="mt-3 text-sm leading-relaxed text-stone-dark">{describeRelationship(r)}</p>
            </li>
          ))}
        </ul>
        <p className="label mt-14 text-stone-dark">
          Trademarks belong to their respective owners. <Link href="/relationships" className="underline underline-offset-4 hover:text-ink">All relationships</Link>
        </p>
      </Chapter>

      {/* Enquiry: oversized link */}
      <section className="relative overflow-hidden bg-ink text-ivory" aria-labelledby="cta">
        <Guilloche seed="kbh-cta" className="pointer-events-none absolute -left-[20vw] top-1/2 h-[60vw] w-[60vw] -translate-y-1/2 text-gold opacity-[0.18]" />
        <div className="relative mx-auto max-w-[88rem] px-6 py-28 md:px-12 md:py-44">
          <Label>Correspondence</Label>
          <h2 id="cta" className="sr-only">Make an enquiry</h2>
          <Link href="/contact" className="group mt-8 block font-display text-[clamp(2.75rem,9vw,9rem)] leading-[0.95] tracking-[-0.01em]">
            <span className="bg-gradient-to-r from-gold to-gold bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-2 transition-[background-size] duration-[900ms] ease-quart group-hover:bg-[length:100%_1px]">
              Make an enquiry
            </span>
            <span aria-hidden="true" className="ml-4 inline-block text-gold transition-transform duration-700 ease-quart group-hover:translate-x-3">→</span>
          </Link>
          <p className="mt-10 max-w-md text-ivory/70">Investors, institutions and operators are welcome to write to us.</p>
        </div>
      </section>
    </>
  );
}
