import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, Section, Prose, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { getCompany, portfolio } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";

type Params = { slug: string };

export const dynamicParams = false;
export const generateStaticParams = () => portfolio.map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const c = getCompany((await params).slug);
  if (!c) return {};
  return pageMetadata(c.name, c.description, `/portfolio/${c.slug}`);
}

export default async function CompanyPage({ params }: { params: Promise<Params> }) {
  const c = getCompany((await params).slug);
  if (!c) notFound();

  const facts: [string, string][] = [
    ["Sector", [c.sector, ...(c.alsoIn ?? [])].join(", ")],
    ["Status", c.status],
    ["KBH role", c.kbhRole],
    ...(c.showStake && c.stake ? ([["Interest", c.stake]] as [string, string][]) : []),
  ];

  return (
    <>
      <PageHero eyebrow={c.sector} title={c.name}>
        <p>{c.description}</p>
      </PageHero>
      <Section tone="ivory">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Eyebrow tone="ivory">Overview</Eyebrow>
            <div className="mt-6">
              <Prose>{c.longDescription.map((p) => <p key={p}>{p}</p>)}</Prose>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9">
            <dl>
              {facts.map(([k, v]) => (
                <div key={k} className="border-t border-gold py-5">
                  <dt className="text-[0.7rem] uppercase tracking-eyebrow text-gold-ink">{k}</dt>
                  <dd className="mt-2 font-display text-2xl">{v}</dd>
                </div>
              ))}
              {c.website && (
                <div className="border-t border-gold py-5">
                  <dt className="text-[0.7rem] uppercase tracking-eyebrow text-gold-ink">Website</dt>
                  <dd className="mt-2">
                    <a href={c.website} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-gold-ink">
                      {c.website.replace(/^https?:\/\//, "")}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
        <p className="mt-20">
          <Link href="/portfolio" className="text-[0.72rem] uppercase tracking-eyebrow underline underline-offset-8 hover:text-gold-ink">
            ← Back to portfolio
          </Link>
        </p>
      </Section>
    </>
  );
}
