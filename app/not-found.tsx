import { PageHero, LinkArrow, Chapter } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHero folio="Error 404" title="Page not found." seed="404">
        <p>The page you requested does not exist or has moved.</p>
      </PageHero>
      <Chapter tone="ivory" mark="§" label="Return">
        <LinkArrow href="/" tone="ivory">Return home</LinkArrow>
      </Chapter>
    </>
  );
}
