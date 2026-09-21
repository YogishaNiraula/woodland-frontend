import { createFileRoute } from "@tanstack/react-router";
import { CallButton, WhatsAppButton } from "@/components/site/ContactButtons";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

const title = "Contact Woodland — Custom Furniture in Kathmandu Valley";
const description =
  "Call or message Woodland on WhatsApp about custom furniture and woodwork. Serving Kathmandu Valley; workshop visits by appointment.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.domain}/contact` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.domain}/contact` }],
  }),
  component: ContactPage,
});

const checklist = [
  "What you'd like made (for example a bed, wardrobe, dining table or kitchen)",
  "Your location within Kathmandu Valley",
  "Approximate dimensions of the piece or the wall it must fit",
  "Photos of the room, and any inspiration images you have",
  "When you'd like it installed",
];

function ContactPage() {
  const hasContactMethod = Boolean(
    siteConfig.phoneHref || siteConfig.whatsappNumber,
  );

  return (
    <main id="main">
      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-16 pt-14 md:grid-cols-[1.1fr_1fr] md:gap-20 md:px-10 md:pt-20">
        <div>
          <h1 className="max-w-[18ch] text-balance-tight">
            Talk to us about your piece.
          </h1>
          <p className="mt-6 max-w-[62ch] text-muted-foreground">
            Contact details are being confirmed. In the meantime, the checklist
            here will help you prepare the information needed for an accurate
            first conversation.
          </p>
          {hasContactMethod ? (
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton />
              <WhatsAppButton />
            </div>
          ) : null}
          {hasContactMethod ||
          siteConfig.address ||
          siteConfig.responseHours ? (
            <dl className="mt-12 grid gap-6 sm:grid-cols-2">
              {siteConfig.phoneHref && siteConfig.phoneDisplay ? (
                <div className="border-t border-line pt-4">
                  <dt className="text-xs uppercase tracking-[0.14em] text-timber">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={siteConfig.phoneHref}
                      className="hover:text-forest"
                      data-analytics="click_call"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </dd>
                </div>
              ) : null}
              <div className="border-t border-line pt-4">
                <dt className="text-xs uppercase tracking-[0.14em] text-timber">
                  Service area
                </dt>
                <dd className="mt-1">{siteConfig.serviceArea}</dd>
              </div>
              {siteConfig.address ? (
                <div className="border-t border-line pt-4">
                  <dt className="text-xs uppercase tracking-[0.14em] text-timber">
                    Workshop
                  </dt>
                  <dd className="mt-1">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                    <br />
                    <span className="text-muted-foreground">
                      {siteConfig.visitNote}
                    </span>
                  </dd>
                </div>
              ) : null}
              {siteConfig.responseHours ? (
                <div className="border-t border-line pt-4">
                  <dt className="text-xs uppercase tracking-[0.14em] text-timber">
                    Response hours
                  </dt>
                  <dd className="mt-1">{siteConfig.responseHours}</dd>
                </div>
              ) : null}
            </dl>
          ) : null}
        </div>

        <Reveal>
          <div className="border border-line bg-card p-6 md:p-8">
            <h2 className="font-display text-2xl">
              What to send in your first message
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="border-b border-line pb-3 text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
            {siteConfig.whatsappNumber ? (
              <p className="mt-6 text-sm text-muted-foreground">
                Prefilled WhatsApp message: “{siteConfig.whatsappMessage}”
              </p>
            ) : null}
            {siteConfig.whatsappNumber ? (
              <WhatsAppButton className="mt-6 w-full" />
            ) : null}
          </div>
        </Reveal>
      </section>

      {siteConfig.mapUrl ? (
        <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-28">
          <SectionHeading
            title="Find the workshop"
            intro="Visits are by appointment so someone is there to meet you."
          />
          <a
            className="mt-8 inline-block border-b border-forest pb-1 text-forest"
            href={siteConfig.mapUrl}
          >
            Open workshop map
          </a>
        </section>
      ) : null}
    </main>
  );
}
