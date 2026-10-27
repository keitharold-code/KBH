import { PageHero, Section, Prose } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Privacy Policy", "How Kingdom Business Holdings handles personal data.", "/legal/privacy");

// [[CONFIRM]] Placeholder text. Must be reviewed by Ugandan counsel and registered with the Personal Data Protection Office where required.
export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section tone="ivory">
        <Prose>
          <p>This policy explains how Kingdom Business Holdings (&ldquo;KBH&rdquo;) collects and uses personal data through this website. We process personal data in accordance with the Data Protection and Privacy Act, 2019 of Uganda.</p>
          <h2 className="pt-4 font-display text-3xl text-ink">Information we collect</h2>
          <p>When you submit an enquiry we collect your name, email address, organisation (if given), the type of enquiry and the content of your message. We do not use advertising cookies or third-party trackers on this website. [[CONFIRM]] analytics, if added.</p>
          <h2 className="pt-4 font-display text-3xl text-ink">How we use it</h2>
          <p>We use this information only to respond to your enquiry and to keep a record of our correspondence. We do not sell personal data.</p>
          <h2 className="pt-4 font-display text-3xl text-ink">Service providers</h2>
          <p>Enquiries are delivered by an email service provider acting on our behalf. Data may therefore be processed outside Uganda. [[CONFIRM]] provider and transfer safeguards.</p>
          <h2 className="pt-4 font-display text-3xl text-ink">Retention</h2>
          <p>We retain enquiries for as long as necessary to respond and to meet legal obligations. [[CONFIRM]] retention period.</p>
          <h2 className="pt-4 font-display text-3xl text-ink">Your rights</h2>
          <p>Under the Act you may request access to, correction of, or deletion of your personal data, and may withdraw consent at any time. Write to us using the details on the contact page.</p>
          <h2 className="pt-4 font-display text-3xl text-ink">Changes</h2>
          <p>We may update this policy from time to time. The current version is always published on this page.</p>
        </Prose>
      </Section>
    </>
  );
}
