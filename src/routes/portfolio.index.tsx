import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ContactCta } from "@/components/site/ContactCta";
import { PortfolioFilters, type Filter } from "@/components/site/PortfolioFilters";
import { PortfolioGallery } from "@/components/site/PortfolioGallery";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

const title = "Portfolio — Custom Furniture & Woodwork Projects | Woodland";
const description =
  "Browse sample custom furniture, storage, kitchen, joinery and commercial woodwork projects by Woodland in Kathmandu Valley.";

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
  const [filter, setFilter] = useState<Filter>("All");
  const items = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <main id="main">
      <section className="mx-auto max-w-[1400px] px-5 pb-10 pt-14 md:px-10 md:pt-20">
        <h1 className="max-w-[16ch] text-balance-tight">Work</h1>
        <p className="mt-6 max-w-[62ch] text-muted-foreground">
          Sample projects showing the range of pieces we build. Images are temporary placeholders while our own
          project photography is prepared.
        </p>
        <div className="mt-8">
          <PortfolioFilters value={filter} onChange={setFilter} />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-28">
        <PortfolioGallery items={items} />
      </section>

      <ContactCta />
    </main>
  );
}