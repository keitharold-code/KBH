import Link from "next/link";
import { site } from "@/content/site";

/** Placeholder wordmark. Replace the contents of <Monogram /> and <Wordmark /> to swap the identity. */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-9 w-9 items-center justify-center border border-gold font-display text-[0.95rem] tracking-[0.12em] text-gold ${className}`}
    >
      KBH
    </span>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name}, home`}
      className={`group inline-flex items-center gap-4 ${tone === "light" ? "text-ivory" : "text-ink"}`}
    >
      <Monogram />
      <span className="hidden font-display text-[0.8rem] uppercase leading-none tracking-wordmark sm:block">
        Kingdom Business Holdings
      </span>
    </Link>
  );
}
