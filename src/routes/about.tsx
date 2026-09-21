import { createFileRoute } from "@tanstack/react-router";
import { ContactCta } from "@/components/site/ContactCta";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { Reveal } from "@/components/site/Reveal";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images } from "@/data/images";
import { siteConfig } from "@/data/siteConfig";

const title = "About Woodland — Custom Furniture Makers in Kathmandu Valley";
const description =
  "Woodland Home Service Pvt. Ltd. designs, measures, fabricates, delivers and installs made-to-measure furniture and woodwork across Kathmandu Valley.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.domain}/about` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.domain}/about` }],
  }),
  component: AboutPage,
});

const pillars = [
  {
    title: "Understanding the idea first",
    body: "Most enquiries start with a rough idea and a room. We ask what the piece has to hold, who uses it and what it should sit next to before we talk about materials.",
  },
  {
    title: "Practical design and material guidance",
    body: "We advise on proportions, storage layout, board and timber choices, hardware and finish. This is furniture guidance, not a full interior-design service.",
  },
  {
    title: "Site measurement",
    body: "We measure the space ourselves and work from those figures, not from supplied approximations.",
  },
  {
    title: "Careful fabrication",
    body: "Pieces are built in the workshop and checked against the survey before they leave.",
  },
  {
    title: "Coordinated delivery and installation",
    body: "Delivery, access, installation and final adjustment are planned together so the fit-out day is predictable.",
  },
  {
    title: "Workmanship support",
    body: "If our workmanship needs attention after installation, we return and correct it. Exact terms are agreed per project.",
  },
];

function AboutPage() {
  return (
    <main id="main">
      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-14 pt-14 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16 md:px-10 md:pt-20">
        <div>
          <h1 className="max-w-[18ch] text-balance-tight">
            A custom-work partner, from idea to installed piece.
          </h1>
          <p className="mt-6 max-w-[62ch] text-muted-foreground">
            {siteConfig.legalName} makes furniture and woodwork to order for
            homes and businesses across {siteConfig.serviceArea}. We take
            responsibility for the whole path: understanding what you want,
            measuring it properly, building it and installing it.
          </p>
        </div>
        <ResponsiveImage
          src={images.workshop.src}
          srcSmall={images.workshop.srcSmall}
          alt="Workshop bench with hand tools and prepared timber boards"
          width={images.workshop.width}
          height={images.workshop.height}
          ratio="4 / 3"
        />
      </section>

      <section className="bg-cream-deep py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHeading title="How we work" />
          <div className="mt-10 grid gap-x-16 gap-y-8 md:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal
                key={pillar.title}
                delay={(i % 2) * 70}
                className="border-t border-line pt-5"
              >
                <h3>{pillar.title}</h3>
                <p className="mt-2 max-w-[58ch] text-muted-foreground">
                  {pillar.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeading title="Our process" />
        <ProcessSteps />
      </section>

      <ContactCta />
    </main>
  );
}
