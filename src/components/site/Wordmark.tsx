import { Link } from "@tanstack/react-router";

export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-cream" : "text-charcoal";
  return (
    <Link to="/" className={`group inline-flex items-baseline gap-2 ${color}`} aria-label="Woodland — home">
      <span
        aria-hidden="true"
        className="font-display text-[1.35rem] leading-none border border-current px-[0.32em] py-[0.18em]"
      >
        W
      </span>
      <span className="font-display text-[1.15rem] tracking-[0.14em] uppercase leading-none">Woodland</span>
    </Link>
  );
}