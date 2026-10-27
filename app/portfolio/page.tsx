import { Chapter, PageHero } from "@/components/ui";
import { PortfolioExplorer } from "@/components/PortfolioExplorer";
import { portfolio } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Portfolio", "The companies in which Kingdom Business Holdings holds an interest, across eight sectors.", "/portfolio");

export default function PortfolioPage() {
  return (
    <>
      <PageHero folio="Nº 04 · Portfolio" title="The register of holdings." seed="portfolio">
        <p>Filter by sector or by stage of development.</p>
      </PageHero>
      <Chapter tone="ivory" mark="§ I" label="Register">
        <PortfolioExplorer companies={portfolio} />
      </Chapter>
    </>
  );
}
