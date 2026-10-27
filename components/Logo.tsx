import Link from "next/link";
import { site } from "@/content/site";

/**
 * Placeholder identity: a seal (double ring, KBH) and a spaced Caslon wordmark.
 * Swap <Seal /> and the wordmark text to change the brand; nothing else depends on them.
 */
export function Seal({ size = 40, ring = false, className = "" }: { size?: number; ring?: boolean; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="KBH seal"
      className={className}
      fill="none"
      stroke="currentColor"
    >
      <circle cx="60" cy="60" r="58" strokeWidth="1.6" />
      <circle cx="60" cy="60" r="54" strokeWidth="0.6" />
      {ring ? (
        <>
          <defs>
            <path id="seal-ring" d="M60,60 m-41,0 a41,41 0 1,1 82,0 a41,41 0 1,1 -82,0" />
          </defs>
          <text fill="currentColor" stroke="none" fontSize="9.5" letterSpacing="3.1" style={{ fontFamily: "var(--font-mono)" }}>
            <textPath href="#seal-ring">KINGDOM BUSINESS HOLDINGS · KAMPALA · </textPath>
          </text>
          <circle cx="60" cy="60" r="31" strokeWidth="0.6" />
        </>
      ) : (
        <circle cx="60" cy="60" r="46" strokeWidth="0.6" />
      )}
      <text x="60" y="71" textAnchor="middle" fill="currentColor" stroke="none" fontSize={ring ? 28 : 40} style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}>
        KBH
      </text>
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link href="/" aria-label={`${site.name}, home`} className={`group inline-flex items-center gap-4 ${tone === "light" ? "text-ivory" : "text-ink"}`}>
      <Seal size={42} className="text-gold" />
      <span className="hidden font-display text-[0.95rem] uppercase leading-[1.15] tracking-[0.2em] sm:block">
        Kingdom <br />Business Holdings
      </span>
    </Link>
  );
}
