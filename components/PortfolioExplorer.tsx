"use client";

import { useMemo, useState } from "react";
import type { Company, Status } from "@/content/portfolio";
import { STATUSES } from "@/content/portfolio";
import { SECTORS, type Sector } from "@/content/sectors";
import { CompanyCard } from "./CompanyCard";

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`border px-4 py-2 text-[0.7rem] uppercase tracking-eyebrow transition-colors duration-500 ${
        active ? "border-ink bg-ink text-ivory" : "border-stone/60 text-stone-dark hover:border-ink hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

export function PortfolioExplorer({ companies }: { companies: Company[] }) {
  const [sector, setSector] = useState<Sector | "All">("All");
  const [status, setStatus] = useState<Status | "All">("All");

  const shown = useMemo(
    () =>
      companies.filter(
        (c) =>
          (sector === "All" || c.sector === sector || c.alsoIn?.includes(sector)) &&
          (status === "All" || c.status === status),
      ),
    [companies, sector, status],
  );
  const activeSectors = SECTORS.filter((s) => companies.some((c) => c.sector === s || c.alsoIn?.includes(s)));

  return (
    <div>
      <div className="space-y-6 border-b border-ink/15 pb-10">
        <fieldset>
          <legend className="mb-3 text-[0.7rem] uppercase tracking-eyebrow text-gold-ink">Sector</legend>
          <div className="flex flex-wrap gap-2">
            <Chip active={sector === "All"} onClick={() => setSector("All")}>All</Chip>
            {activeSectors.map((s) => (
              <Chip key={s} active={sector === s} onClick={() => setSector(s)}>{s}</Chip>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-3 text-[0.7rem] uppercase tracking-eyebrow text-gold-ink">Status</legend>
          <div className="flex flex-wrap gap-2">
            <Chip active={status === "All"} onClick={() => setStatus("All")}>All</Chip>
            {STATUSES.map((s) => (
              <Chip key={s} active={status === s} onClick={() => setStatus(s)}>{s}</Chip>
            ))}
          </div>
        </fieldset>
      </div>
      <p className="mt-6 text-sm text-stone-dark" aria-live="polite">
        {shown.length} {shown.length === 1 ? "company" : "companies"}
      </p>
      <ul className="mt-8 grid gap-x-12 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((c) => (
          <li key={c.slug}>
            <CompanyCard company={c} />
          </li>
        ))}
      </ul>
      {shown.length === 0 && <p className="mt-10 text-stone-dark">No companies match this selection.</p>}
    </div>
  );
}
