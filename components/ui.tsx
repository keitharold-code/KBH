import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Guilloche } from "./Guilloche";

type Tone = "ink" | "ivory";

/** Mono ledger label. */
export function Label({ children, tone = "ink", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return <p className={`label ${tone === "ink" ? "text-gold" : "text-gold-ink"} ${className}`}>{children}</p>;
}

/**
 * Prospectus-style section: a narrow margin column carries the section mark,
 * the main column carries the content.
 */
export function Chapter({
  tone,
  mark,
  label,
  children,
  id,
  labelledBy,
  paper = true,
  className = "",
}: {
  tone: Tone;
  mark: string;
  label: string;
  children: ReactNode;
  id?: string;
  labelledBy?: string;
  paper?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tone === "ink" ? "bg-ink text-ivory" : `${paper ? "paper" : "bg-ivory"} text-ink`} ${className}`}
    >
      <div className="mx-auto grid max-w-[88rem] gap-x-10 gap-y-10 px-6 py-24 md:px-12 md:py-36 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <p className={`label lg:sticky lg:top-32 ${tone === "ink" ? "text-gold" : "text-gold-ink"}`}>
            <span className="block text-base normal-case tracking-normal" style={{ fontFamily: "var(--font-display)" }}>{mark}</span>
            <span className="mt-2 block">{label}</span>
          </p>
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}

export function Heading({
  id,
  children,
  as: Tag = "h2",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag id={id} className={`font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.005em] ${className}`}>
      {children}
    </Tag>
  );
}

export function Prose({ children, tone = "ivory", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <div className={`max-w-[38rem] space-y-6 text-[1.0625rem] leading-[1.8] ${tone === "ink" ? "text-ivory/80" : "text-stone-dark"} ${className}`}>
      {children}
    </div>
  );
}

/** Underlined mono link with a travelling arrow. */
export function LinkArrow({ href, children, tone = "ink" }: { href: string; children: ReactNode; tone?: Tone }) {
  return (
    <Link
      href={href}
      className={`group label inline-flex items-center gap-4 border-b pb-2 transition-colors duration-700 ease-quart ${
        tone === "ink" ? "border-gold text-ivory hover:text-gold" : "border-ink text-ink hover:text-gold-ink"
      }`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-700 ease-quart group-hover:translate-x-1.5">→</span>
    </Link>
  );
}

const STATUS_FILL = { Operating: "bg-current", Scaling: "bg-current/45", "In Development": "bg-transparent" } as const;
export function StatusMark({ status }: { status: keyof typeof STATUS_FILL }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span aria-hidden="true" className={`h-2 w-2 rounded-full border border-current ${STATUS_FILL[status]}`} />
      {status}
    </span>
  );
}

/** Inner-page opening: folio number, oversized title, rosette bleeding off the right edge. */
export function PageHero({ folio, title, children, seed }: { folio: string; title: string; children?: ReactNode; seed: string }) {
  return (
    <header className="relative overflow-hidden bg-ink text-ivory">
      <Guilloche seed={seed} className="pointer-events-none absolute -right-[18vw] top-1/2 h-[70vw] max-h-[56rem] w-[70vw] max-w-[56rem] -translate-y-1/2 text-gold opacity-[0.28]" />
      <div className="relative mx-auto max-w-[88rem] px-6 pb-20 pt-44 md:px-12 md:pb-28 md:pt-56">
        <Reveal>
          <p className="label text-gold">{folio}</p>
          <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.96] tracking-[-0.01em]">{title}</h1>
          {children && <div className="mt-10 max-w-xl text-lg leading-relaxed text-ivory/75">{children}</div>}
        </Reveal>
      </div>
      <div className="border-t border-ink-line" />
    </header>
  );
}
