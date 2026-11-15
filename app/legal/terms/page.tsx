import { PageHero, Chapter, Prose } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Terms of Use", "Terms governing use of the Kingdom Business Holdings website.", "/legal/terms");

// [[CONFIRM]] Placeholder text. Must be reviewed by counsel before launch.
export default function Terms() {
  return (
    <>
      <PageHero folio="Legal" title="Terms of Use" seed="legal-ter" />
      <Chapter tone="ivory" mark="§" label="Terms of the page">
        <Prose>
          <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>
          <h2 className="pt-4 font-display text-3xl leading-tight text-ink">No offer or advice</h2>
          <p>Content on this website is provided for general information only. It is not an offer to sell, or a solicitation of an offer to buy, any security or financial product, and it is not investment, legal or tax advice.</p>
          <h2 className="pt-4 font-display text-3xl leading-tight text-ink">Accuracy</h2>
          <p>We take care to keep information current but make no warranty that it is complete or up to date. Descriptions of companies in which KBH holds an interest are summaries only.</p>
          <h2 className="pt-4 font-display text-3xl leading-tight text-ink">Intellectual property and trademarks</h2>
          <p>All content is the property of KBH unless stated otherwise. Third-party names and trademarks belong to their respective owners, and their appearance here does not imply endorsement.</p>
          <h2 className="pt-4 font-display text-3xl leading-tight text-ink">Governing law</h2>
          <p>These terms are governed by the laws of the Republic of Uganda.</p>
        </Prose>
      </Chapter>
    </>
  );
}
