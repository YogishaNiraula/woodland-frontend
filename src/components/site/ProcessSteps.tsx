import { Reveal } from "./Reveal";

export const processSteps = [
  {
    title: "Initial conversation",
    body: "Tell us what you want made, where it will live and roughly how big it should be. Photos of the room help.",
  },
  {
    title: "Site measurement",
    body: "We measure the space ourselves — walls, floors and openings are rarely square, and the fit depends on it.",
  },
  {
    title: "Design and material confirmation",
    body: "We agree the layout, materials, hardware and finish together, balancing function, appearance and budget.",
  },
  {
    title: "Estimate",
    body: "Once the details are settled you receive a written estimate. We do not quote final prices before measuring.",
  },
  { title: "Fabrication", body: "The piece is built in the workshop, with checks against the survey dimensions." },
  {
    title: "Delivery and installation",
    body: "We deliver, install and adjust on site, then leave the space clean and the piece ready to use.",
  },
];

export function ProcessSteps({ tone = "cream" }: { tone?: "cream" | "forest" }) {
  const line = tone === "forest" ? "border-cream/25" : "border-line";
  const num = tone === "forest" ? "text-cream/55" : "text-timber";
  const body = tone === "forest" ? "text-cream/75" : "text-muted-foreground";
  return (
    <ol className="mt-10 grid gap-px md:grid-cols-2">
      {processSteps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={(i % 2) * 80} className={`border-t ${line} py-6 md:pr-10`}>
          <div className="flex gap-5">
            <span className={`font-display text-sm tabular-nums ${num}`}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-display text-xl">{step.title}</h3>
              <p className={`mt-2 max-w-[58ch] text-sm ${body}`}>{step.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}