import { createFileRoute } from "@tanstack/react-router";
import { ContactCta } from "@/components/site/ContactCta";
import { Reveal } from "@/components/site/Reveal";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { estimateFactors, services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

const title =
  "Services — Custom Furniture, Storage, Kitchens & Joinery | Woodland";
const description =
  "Custom furniture, storage and built-ins, kitchens, architectural woodwork, whole-home woodwork and business furniture, made to measure in Kathmandu Valley.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.domain}/services` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.domain}/services` }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main id="main">
      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-14 md:px-10 md:pb-16 md:pt-20">
        <h1 className="max-w-[16ch] text-balance-tight">What we make</h1>
        <p className="mt-6 max-w-[62ch] text-muted-foreground">
          Everything below is made to order for a specific home or premises. We
          do not sell ready-made products, and we do not publish fixed prices —
          every piece is priced from its own dimensions and specification.
        </p>
      </section>

      <div className="border-t border-line">
        {services.map((service, i) => (
          <section
            key={service.title}
            className={
              i % 2 === 1
                ? "border-b border-line bg-cream-deep"
                : "border-b border-line"
            }
          >
            <div
              className={`mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-14 md:grid-cols-2 md:gap-16 md:px-10 md:py-20`}
            >
              <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
                <ResponsiveImage
                  src={service.image.src}
                  srcSmall={service.image.srcSmall}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  ratio="4 / 3"
                />
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-balance-tight">{service.title}</h2>
                <p className="mt-4 max-w-[62ch] text-muted-foreground">
                  {service.summary}
                </p>
                <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
                  {service.examples.map((example) => (
                    <li key={example} className="border-t border-line pt-2">
                      {example}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeading
          title="What affects an estimate"
          intro="We can discuss ranges early, but a written estimate follows measurement and an agreed specification. These are the factors that move the figure."
        />
        <dl className="mt-10 grid gap-px border-t border-line md:grid-cols-2">
          {estimateFactors.map((factor, i) => (
            <Reveal
              key={factor.label}
              delay={(i % 2) * 70}
              className="border-b border-line py-5 md:pr-10"
            >
              <dt className="font-display text-xl">{factor.label}</dt>
              <dd className="mt-1 max-w-[58ch] text-sm text-muted-foreground">
                {factor.body}
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <ContactCta
        title="Not sure which of these you need?"
        body="Describe the item, your location and rough dimensions. We'll tell you how we'd approach it and what we need to measure."
      />
    </main>
  );
}
