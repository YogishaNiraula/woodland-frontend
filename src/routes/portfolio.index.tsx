import { createFileRoute } from "@tanstack/react-router";
import { ContactCta } from "@/components/site/ContactCta";
import { siteConfig } from "@/data/siteConfig";

const title = "Portfolio — Custom Furniture & Woodwork Projects | Woodland";
const description =
  "Woodland's portfolio of completed custom furniture and woodwork projects in Kathmandu Valley.";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.domain}/portfolio` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.domain}/portfolio` }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main id="main">
      <section className="mx-auto max-w-[1400px] px-5 pb-10 pt-14 md:px-10 md:pt-20">
        <h1 className="max-w-[16ch] text-balance-tight">Work</h1>
        <p className="mt-6 max-w-[62ch] text-muted-foreground">
          We are preparing photographs and details of completed Woodland
          projects. Verified work will appear here once customer approval is
          confirmed.
        </p>
      </section>

      <ContactCta />
    </main>
  );
}
