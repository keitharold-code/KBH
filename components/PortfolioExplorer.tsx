"use client";

import { useMemo, useState } from "react";
import type { Company, Status } from "@/content/portfolio";
import { STATUSES } from "@/content/portfolio";
import { SECTORS, type Sector } from "@/content/sectors";
import { RegisterRow } from "./CompanyCard";

function Filter<T extends string>({ legend, options, value, onChange }: { legend: string; options: readonly T[]; value: T | "All"; onChange: (v: T | "All") => void }) {
  return (
    <fieldset className="grid gap-3 md:grid-cols-[7rem_1fr] md:items-baseline">
      <legend className="label float-left mb-2 w-28 text-gold-ink md:mb-0">{legend}</legend>
      <div className="flex flex-wrap gap-x-6 gap-y-2 md:col-start-2">
        {(["All", ...options] as (T | "All")[]).map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className={`label border-b pb-1 transition-colors duration-500 ${value === o ? "border-ink text-ink" : "border-transparent text-stone-dark hover:text-ink"}`}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function PortfolioExplorer({ companies }: { companies: Company[] }) {
  const [sector, setSector] = useState<Sector | "All">("All");
  const [status, setStatus] = useState<Status | "All">("All");

  const shown = useMemo(
    () => companies.filter((c) => (sector === "All" || c.sector === sector || c.alsoIn?.includes(sector)) && (status === "All" || c.status === status)),
    [companies, sector, status],
  );
  const activeSectors = SECTORS.filter((s) => companies.some((c) => c.sector === s || c.alsoIn?.includes(s)));

  return (
    <div>
      <div className="space-y-5 pb-10">
        <Filter legend="Sector" options={activeSectors} value={sector} onChange={setSector} />
        <Filter legend="Status" options={STATUSES} value={status} onChange={setStatus} />
      </div>
      <p className="label pb-4 text-stone-dark" aria-live="polite">
        Register: {shown.length} {shown.length === 1 ? "entry" : "entries"}
      </p>
      <ul className="border-b border-ink/20">
        {shown.map((c, i) => (
          <li key={c.slug}><RegisterRow company={c} index={i} /></li>
        ))}
      </ul>
      {shown.length === 0 && <p className="mt-10 text-stone-dark">No companies match this selection.</p>}
    </div>
  );
}
