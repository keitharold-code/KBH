import { Chapter, PageHero } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { Seal } from "@/components/Logo";
import { site, isPlaceholder } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact", "Make an investment, partnership, media or careers enquiry to Kingdom Business Holdings.", "/contact");

export default function Contact() {
  const { addressLines, email, phone } = site.contact;
  return (
    <>
      <PageHero folio="Nº 06 · Enquiries" title="Write to us." seed="contact">
        <p>Enquiries are read by the office of the founder and answered in due course.</p>
      </PageHero>
      <Chapter tone="ivory" mark="§ I" label="Correspondence">
        <div className="grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-7"><ContactForm /></div>
          <aside className="lg:col-span-5 lg:pl-10" aria-label="Office details">
            <div className="border border-ink/25 p-8 md:p-10">
              <Seal size={64} className="text-gold-ink" />
              <address className="mt-8 space-y-1 not-italic leading-relaxed">
                <p className="font-display text-3xl leading-tight">{site.name}</p>
                {addressLines.map((l) => <p key={l} className="text-stone-dark">{l}</p>)}
                <p className="pt-5 text-stone-dark">{isPlaceholder(email) ? email : <a className="underline underline-offset-4 hover:text-ink" href={`mailto:${email}`}>{email}</a>}</p>
                <p className="text-stone-dark">{isPlaceholder(phone) ? phone : <a className="hover:text-ink" href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>}</p>
              </address>
            </div>
          </aside>
        </div>
      </Chapter>
    </>
  );
}
