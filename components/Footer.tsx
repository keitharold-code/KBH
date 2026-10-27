import Link from "next/link";
import { site, isPlaceholder } from "@/content/site";
import { Seal } from "./Logo";

export function Footer() {
  const { email, phone, addressLines } = site.contact;
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <div className="mx-auto grid max-w-[88rem] gap-14 px-6 pb-16 pt-24 md:px-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Seal size={168} ring className="text-gold" />
          <p className="mt-8 max-w-xs font-display text-2xl leading-snug">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-6">
          <h2 className="label text-gold">Index</h2>
          <ul className="mt-6 space-y-3">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="font-display text-2xl transition-colors duration-700 hover:text-gold">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-3 lg:col-start-10">
          <h2 className="label text-gold">Registered office</h2>
          <address className="mt-6 space-y-1 text-sm not-italic leading-relaxed text-ivory/75">
            {addressLines.map((l) => <div key={l}>{l}</div>)}
            <div className="pt-4">{isPlaceholder(email) ? email : <a href={`mailto:${email}`} className="hover:text-gold">{email}</a>}</div>
            <div>{isPlaceholder(phone) ? phone : <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-gold">{phone}</a>}</div>
          </address>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[30vw] leading-[0.72] text-transparent [-webkit-text-stroke:1px_#2c2c31]">
        KBH
      </div>

      <div className="relative border-t border-ink-line bg-ink">
        <div className="label mx-auto flex max-w-[88rem] flex-col gap-3 px-6 py-6 text-ivory/60 md:flex-row md:justify-between md:px-12">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p className="flex gap-8">
            <Link href="/legal/privacy" className="hover:text-gold">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-gold">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
