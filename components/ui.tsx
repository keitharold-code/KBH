import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Tone = "ink" | "ivory";

export function Eyebrow({ children, tone = "ink" }: { children: ReactNode; tone?: Tone }) {
  return (
    <p
      className={`text-[0.7rem] font-medium uppercase tracking-eyebrow ${
        tone === "ink" ? "text-gold" : "text-gold-ink"
      }`}
    >
      {children}
    </p>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`h-px w-16 border-0 bg-gold ${className}`} />;
}

export function Section({
  tone,
  children,
  id,
  className = "",
  labelledBy,
}: {
  tone: Tone;
  children: ReactNode;
  id?: string;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tone === "ink" ? "bg-ink text-ivory" : "bg-ivory text-ink"} ${className}`}
    >
      <div className="mx-auto max-w-page px-6 py-24 md:px-10 md:py-32">{children}</div>
    </section>
  );
}

export function Heading({
  id,
  children,
  tone = "ink",
  as: Tag = "h2",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: Tone;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      id={id}
      className={`font-display text-4xl font-light leading-[1.1] tracking-[0.01em] md:text-6xl ${
        tone === "ink" ? "text-ivory" : "text-ink"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Prose({ children, tone = "ivory" }: { children: ReactNode; tone?: Tone }) {
  return (
    <div
      className={`max-w-prose space-y-6 text-base leading-[1.85] ${
        tone === "ink" ? "text-ivory/80" : "text-stone-dark"
      }`}
    >
      {children}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  tone = "ink",
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 border px-7 py-4 text-[0.72rem] font-medium uppercase tracking-eyebrow transition-colors duration-700 ease-quart ${
        tone === "ink"
          ? "border-gold text-ivory hover:bg-gold hover:text-ink"
          : "border-ink text-ink hover:bg-ink hover:text-ivory"
      }`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

/** Inner-page opening band: ink, eyebrow, large serif title, short standfirst. */
export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="bg-ink pt-40 text-ivory md:pt-52">
      <div className="mx-auto max-w-page px-6 pb-20 md:px-10 md:pb-28">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Rule className="my-6" />
          <h1 className="max-w-4xl font-display text-5xl font-light leading-[1.05] tracking-[0.01em] md:text-7xl">
            {title}
          </h1>
          {children && <div className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/75">{children}</div>}
        </Reveal>
      </div>
    </header>
  );
}
