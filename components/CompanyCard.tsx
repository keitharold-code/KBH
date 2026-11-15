import Link from "next/link";
import type { Company } from "@/content/portfolio";
import { Guilloche } from "./Guilloche";
import { StatusMark } from "./ui";

/** Large tile: the company's own guilloche is its image. */
export function CompanyTile({ company, className = "" }: { company: Company; className?: string }) {
  return (
    <Link href={`/portfolio/${company.slug}`} className={`group relative flex min-h-[26rem] flex-col justify-between overflow-hidden bg-ink p-8 text-ivory md:min-h-[34rem] md:p-10 ${className}`}>
      <Guilloche seed={company.slug} className="absolute left-1/2 top-[44%] h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 text-gold opacity-40 transition-all duration-[1400ms] ease-quart group-hover:rotate-[8deg] group-hover:opacity-60" />
      <div className="relative flex items-start justify-between">
        <span className="label text-gold">{company.sector}</span>
        <span className="label text-ivory/70"><StatusMark status={company.status} /></span>
      </div>
      <div className="relative">
        <h3 className="font-display text-4xl leading-[1.02] md:text-5xl">{company.name}</h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/75">{company.description}</p>
      </div>
    </Link>
  );
}

/** Single register row, shared by Home and Portfolio. */
export function RegisterRow({ company, index, tone = "ivory" }: { company: Company; index: number; tone?: "ivory" | "ink" }) {
  const dark = tone === "ink";
  return (
    <Link
      href={`/portfolio/${company.slug}`}
      className={`group grid grid-cols-12 items-baseline gap-x-4 gap-y-2 border-t py-7 transition-colors duration-700 ease-quart ${
        dark ? "border-ink-line hover:bg-ink-soft" : "border-ink/20 hover:bg-ivory-deep/60"
      }`}
    >
      <span className={`label col-span-2 md:col-span-1 ${dark ? "text-stone" : "text-stone-dark"}`}>{String(index + 1).padStart(2, "0")}</span>
      <span className="col-span-10 font-display text-3xl leading-tight transition-transform duration-700 ease-quart group-hover:translate-x-2 md:col-span-5 md:text-4xl">
        {company.name}
      </span>
      <span className={`label col-span-10 col-start-3 md:col-span-3 md:col-start-auto ${dark ? "text-stone" : "text-stone-dark"}`}>{company.sector}</span>
      <span className={`label col-span-10 col-start-3 md:col-span-3 md:col-start-auto md:justify-self-end ${dark ? "text-gold" : "text-gold-ink"}`}>
        <StatusMark status={company.status} />
      </span>
    </Link>
  );
}
