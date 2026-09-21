import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactActions } from "@/components/site/ContactButtons";
import { ContactCta } from "@/components/site/ContactCta";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { Reveal } from "@/components/site/Reveal";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

const title = "Woodland — Custom Furniture & Woodwork in Kathmandu Valley";
const description =
  "Made-to-measure furniture and custom woodwork, thoughtfully measured, crafted, delivered and installed across Kathmandu Valley.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.domain}/` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.domain}/` }],
  }),
  component: Index,
});

const reasons = [
  {
    title: "Lasting craftsmanship",
    body: "Joinery is chosen for how the piece will be used, not for how quickly it can be assembled. Fixings, edges and finishes are detailed to survive years of daily handling.",
  },
  {
    title: "Collaborative guidance",
    body: "We work through proportions, storage layout, materials and finish with you. Practical furniture advice — not a full interior-design service.",
  },
  {
    title: "Accurate measurement",
    body: "We measure on site ourselves. Walls lean, floors slope and openings are rarely square; fitted work only looks effortless when that is accounted for.",
  },
  {
    title: "Delivery and installation",
    body: "Delivery, installation, scribing and final adjustment are handled by us, with the space left clean.",
  },
  {
    title: "Workmanship support",
    body: "If something in our workmanship needs attention after installation, we come back and put it right. Terms are agreed per project.",
  },
];

function Index() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-14 pt-12 md:grid-cols-[1fr_1.15fr] md:items-end md:gap-14 md:px-10 md:pb-20 md:pt-16">
          <div>
            <h1 className="text-balance-tight">
              Made for your home. Built to last.
            </h1>
            <p className="mt-6 max-w-[58ch] text-muted-foreground">
              Custom furniture and woodwork, thoughtfully measured, crafted,
              delivered, and installed across Kathmandu Valley.
            </p>
            <ContactActions className="mt-8" />
            <p className="mt-6 text-sm tracking-wide text-timber">
              Serving {siteConfig.serviceArea}
            </p>
          </div>
          <ResponsiveImage
            src={images.heroBedroom.src}
            srcSmall={images.heroBedroom.srcSmall}
            alt="Made-to-measure timber wardrobe wall and panelled bed surround in a calm bedroom"
            width={images.heroBedroom.width}
            height={images.heroBedroom.height}
            ratio="4 / 3"
            priority
          />
        </div>
      </section>

      {/* Service introduction */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeading
          title="Everything is made to measure, for one home at a time."
          intro="We build individual pieces and fitted woodwork to your dimensions — from a single bed or dining table to storage that runs the length of a wall. Nothing is ready-made, and nothing is ordered from a catalogue."
        />
        <ul className="mt-12 border-t border-line">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              delay={i * 50}
              className="grid gap-2 border-b border-line py-6 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-10"
            >
              <h3 className="font-display text-2xl">{service.title}</h3>
              <p className="max-w-[62ch] text-muted-foreground">
                {service.summary}
              </p>
            </Reveal>
          ))}
        </ul>
        <Link
          to="/services"
          className="mt-8 inline-block border-b border-forest pb-1 text-sm text-forest"
        >
          See what each service includes
        </Link>
      </section>

      {/* Why Woodland */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <SectionHeading
              title="Why homeowners ask us to build it instead of buying it"
              intro="Furniture that has to fit a specific wall, room or routine is rarely available off the shelf. This is how we work through it with you."
            />
            <div className="mt-10 space-y-8">
              {reasons.map((reason, i) => (
                <Reveal
                  key={reason.title}
                  delay={i * 60}
                  className="border-t border-line pt-5"
                >
                  <h3>{reason.title}</h3>
                  <p className="mt-2 max-w-[62ch] text-muted-foreground">
                    {reason.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="md:sticky md:top-28 md:self-start">
            <ResponsiveImage
              src={images.workshop.src}
              srcSmall={images.workshop.srcSmall}
              alt="Workshop bench with hand planes, chisels and freshly planed timber boards"
              width={images.workshop.width}
              height={images.workshop.height}
              ratio="3 / 4"
            />
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-forest-deep py-20 text-cream md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="max-w-[20ch] text-balance-tight">
            From first conversation to installed piece
          </h2>
          <p className="mt-4 max-w-[62ch] text-cream/75">
            Six steps, in the same order every time. Estimates come after
            measurement, not before.
          </p>
          <ProcessSteps tone="forest" />
        </div>
      </section>

      {/* Materials */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center md:gap-16">
          <Reveal>
            <ResponsiveImage
              src={images.materials.src}
              srcSmall={images.materials.srcSmall}
              alt="Samples of solid timber and veneered engineered board on a cream surface"
              width={images.materials.width}
              height={images.materials.height}
              ratio="4 / 3"
            />
          </Reveal>
          <div>
            <SectionHeading
              title="Solid wood and engineered boards, chosen honestly"
              intro="Neither material is better in every situation. Solid wood suits exposed frames, table tops, doors, stairs and edges that get handled. Engineered boards stay flatter over long spans and wide panels, which makes them well suited to wardrobe carcasses, shelving runs and kitchen units."
            />
            <p className="mt-4 max-w-[62ch] text-muted-foreground">
              We recommend materials based on function, appearance, durability
              and budget for your specific piece, and we tell you where a
              cheaper option is sensible and where it is not.
            </p>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
