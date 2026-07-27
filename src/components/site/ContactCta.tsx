import { ContactActions } from "./ContactButtons";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/data/siteConfig";

export function ContactCta({
  title = "Have something in mind?",
  body = "Call us, or send photos of the room and rough dimensions on WhatsApp. We'll tell you what's possible, what it involves, and what we need to measure before estimating.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-20 md:grid-cols-[1.1fr_1fr] md:items-end md:px-10 md:py-28">
        <Reveal>
          <h2 className="text-balance-tight">{title}</h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="max-w-[60ch] text-cream/80">{body}</p>
          <ContactActions tone="onForest" className="mt-8" />
          <p className="mt-6 text-sm text-cream/60">Serving {siteConfig.serviceArea}</p>
        </Reveal>
      </div>
    </section>
  );
}