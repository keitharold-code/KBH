import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Chapter, Prose, StatusMark } from "@/components/ui";
import { Guilloche } from "@/components/Guilloche";
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
  const idx = portfolio.findIndex((x) => x.slug === c.slug);

  const facts: [string, React.ReactNode][] = [
    ["Sector", [c.sector, ...(c.alsoIn ?? [])].join(", ")],
    ["Status", <StatusMark key="s" status={c.status} />],
    ["KBH role", c.kbhRole],
    ...(c.showStake && c.stake ? ([["Interest", c.stake]] as [string, React.ReactNode][]) : []),
  ];

  return (
    <>
      <header className="relative overflow-hidden bg-ink text-ivory">
        <Guilloche seed={c.slug} strokeWidth={0.5} className="pointer-events-none absolute -right-[12vw] top-1/2 h-[62vw] max-h-[52rem] w-[62vw] max-w-[52rem] -translate-y-1/2 text-gold opacity-45" />
        <div className="relative mx-auto max-w-[88rem] px-6 pb-20 pt-44 md:px-12 md:pb-28 md:pt-56">
          <p className="label text-gold">Holding {String(idx + 1).padStart(2, "0")} / {String(portfolio.length).padStart(2, "0")} · {c.sector}</p>
          <h1 className="mt-8 max-w-[14ch] font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.96] tracking-[-0.01em]">{c.name}</h1>
          <p className="mt-10 max-w-lg text-lg leading-relaxed text-ivory/75">{c.description}</p>
        </div>
      </header>
      <Chapter tone="ivory" mark="§ I" label="Overview">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Prose className="text-lg">{c.longDescription.map((p) => <p key={p}>{p}</p>)}</Prose>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <dl className="border-b border-ink/20">
              {facts.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6rem_1fr] gap-4 border-t border-ink/20 py-5">
                  <dt className="label text-gold-ink">{k}</dt>
                  <dd className="font-display text-2xl leading-snug">{v}</dd>
                </div>
              ))}
              {c.website && (
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-t border-ink/20 py-5">
                  <dt className="label text-gold-ink">Website</dt>
                  <dd>
                    <a href={c.website} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-gold-ink">
                      {c.website.replace(/^https?:\/\//, "")}<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
        <p className="mt-24">
          <Link href="/portfolio" className="label border-b border-ink pb-2 hover:text-gold-ink">← Back to the register</Link>
        </p>
      </Chapter>
    </>
  );
}
