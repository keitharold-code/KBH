import { PageHero, Section, Eyebrow, Rule } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { site, isPlaceholder } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact", "Make an investment, partnership, media or careers enquiry to Kingdom Business Holdings.", "/contact");

export default function Contact() {
  const { addressLines, email, phone } = site.contact;
  return (
    <>
      <PageHero eyebrow="Enquiries" title="Write to us.">
        <p>Enquiries are read by the office of the founder and answered in due course.</p>
      </PageHero>
      <Section tone="ivory">
        <div className="grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-4 lg:col-start-9" aria-label="Office details">
            <Eyebrow tone="ivory">Office</Eyebrow>
            <Rule className="my-6" />
            <address className="space-y-1 not-italic leading-relaxed">
              <p className="font-display text-2xl">{site.name}</p>
              {addressLines.map((l) => <p key={l} className="text-stone-dark">{l}</p>)}
              <p className="pt-4 text-stone-dark">
                {isPlaceholder(email) ? email : <a className="underline underline-offset-4 hover:text-ink" href={`mailto:${email}`}>{email}</a>}
              </p>
              <p className="text-stone-dark">
                {isPlaceholder(phone) ? phone : <a className="hover:text-ink" href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>}
              </p>
            </address>
          </aside>
        </div>
      </Section>
    </>
  );
}
