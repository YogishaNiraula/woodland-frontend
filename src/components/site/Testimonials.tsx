import { Reveal } from "./Reveal";

/**
 * [PLACEHOLDER] Replace each slot with a genuine, approved customer testimonial.
 * Do not publish invented names or quotes.
 */
const slots = [
  { context: "Bedroom storage — [area]" },
  { context: "Kitchen cabinetry — [area]" },
  { context: "Dining furniture — [area]" },
];

export function Testimonials() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {slots.map((slot, i) => (
        <Reveal key={slot.context} delay={i * 90} className="border border-line bg-card p-6">
          <p className="font-display text-lg leading-snug text-charcoal/70">[Approved customer testimonial]</p>
          <p className="mt-6 border-t border-line pt-4 text-sm text-muted-foreground">
            [Customer name pending approval] · {slot.context}
          </p>
        </Reveal>
      ))}
    </div>
  );
}