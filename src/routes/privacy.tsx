import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/data/siteConfig";

const title = "Privacy — Woodland Custom Furniture & Woodwork";
const description =
  "How Woodland Home Service Pvt. Ltd. handles the information you share when enquiring about custom furniture and woodwork.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.domain}/privacy` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.domain}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main id="main" className="mx-auto max-w-[75ch] px-5 py-16 md:px-10 md:py-24">
      <h1>Privacy</h1>
      <p className="mt-6 text-muted-foreground">
        This page is maintained by {siteConfig.legalName} to explain, in plain terms, what happens to the information
        you share with us. It is a working draft — [LEGAL REVIEW PENDING].
      </p>

      <h2 className="mt-12">What we collect</h2>
      <p className="mt-3 text-muted-foreground">
        This website has no enquiry form, accounts or online ordering. We only receive information you choose to send
        us directly by phone or WhatsApp: your name, contact number, location, the details and dimensions of the piece
        you want, and any photos you send.
      </p>

      <h2 className="mt-10">How we use it</h2>
      <p className="mt-3 text-muted-foreground">
        We use it to answer your enquiry, measure, prepare an estimate, and — if you go ahead — fabricate, deliver and
        install your project. We do not sell it.
      </p>

      <h2 className="mt-10">Project photos</h2>
      <p className="mt-3 text-muted-foreground">
        We ask for your permission before publishing photographs of completed work or any customer feedback.
      </p>

      <h2 className="mt-10">Third parties</h2>
      <p className="mt-3 text-muted-foreground">
        Messages sent on WhatsApp are handled under WhatsApp's own terms. [ANALYTICS AND HOSTING PROVIDERS TO BE
        CONFIRMED.]
      </p>

      <h2 className="mt-10">Contact</h2>
      <p className="mt-3 text-muted-foreground">
        To ask what we hold about you, or to have it removed, contact us on {siteConfig.phoneDisplay}.
      </p>
    </main>
  );
}