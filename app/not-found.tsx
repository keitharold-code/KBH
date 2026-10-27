import { PageHero, ButtonLink, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="Page not found">
        <p>The page you requested does not exist or has moved.</p>
      </PageHero>
      <Section tone="ivory">
        <ButtonLink href="/" tone="ivory">Return home</ButtonLink>
      </Section>
    </>
  );
}
