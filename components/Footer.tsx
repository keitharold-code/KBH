import Link from "next/link";
import { site, isPlaceholder } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const { email, phone, addressLines } = site.contact;
  return (
    <footer className="border-t border-ink-line bg-ink text-ivory">
      <div className="mx-auto grid max-w-page gap-14 px-6 py-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="text-[0.7rem] font-medium uppercase tracking-eyebrow text-gold">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ivory/75 transition-colors duration-700 hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <h2 className="text-[0.7rem] font-medium uppercase tracking-eyebrow text-gold">Kampala</h2>
          <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-ivory/75">
            {addressLines.map((l) => (
              <div key={l}>{l}</div>
            ))}
            <div className="pt-3">
              {isPlaceholder(email) ? email : <a href={`mailto:${email}`} className="hover:text-gold">{email}</a>}
            </div>
            <div>{isPlaceholder(phone) ? phone : <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-gold">{phone}</a>}</div>
          </address>
        </div>
      </div>
      <div className="border-t border-ink-line">
        <div className="mx-auto flex max-w-page flex-col gap-3 px-6 py-6 text-xs text-ivory/60 md:flex-row md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-gold">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-gold">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
