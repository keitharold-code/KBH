import Link from "next/link";
import type { Company } from "@/content/portfolio";

export function CompanyCard({ company, tone = "ivory" }: { company: Company; tone?: "ivory" | "ink" }) {
  const dark = tone === "ink";
  return (
    <Link
      href={`/portfolio/${company.slug}`}
      className={`group flex h-full flex-col border-t border-gold py-8 pr-4 transition-colors duration-700 ease-quart`}
    >
      <p className={`text-[0.7rem] uppercase tracking-eyebrow ${dark ? "text-stone" : "text-stone-dark"}`}>
        {company.sector}
      </p>
      <h3
        className={`mt-4 font-display text-3xl font-light leading-tight transition-colors duration-700 ease-quart ${
          dark ? "text-ivory group-hover:text-gold" : "text-ink group-hover:text-gold-ink"
        }`}
      >
        {company.name}
      </h3>
      <p className={`mt-4 flex-1 text-sm leading-relaxed ${dark ? "text-ivory/70" : "text-stone-dark"}`}>
        {company.description}
      </p>
      <p className={`mt-6 text-[0.7rem] uppercase tracking-eyebrow ${dark ? "text-gold" : "text-gold-ink"}`}>
        {company.status}
        <span className="sr-only">. View {company.name}</span>
      </p>
    </Link>
  );
}
