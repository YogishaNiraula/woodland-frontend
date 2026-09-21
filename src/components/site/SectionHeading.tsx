import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  title,
  intro,
  level = 2,
  align = "left",
  className = "",
}: {
  title: ReactNode;
  intro?: ReactNode;
  level?: 2 | 3;
  align?: "left" | "center";
  className?: string;
}) {
  const Tag = level === 2 ? "h2" : "h3";
  return (
    <Reveal className={`${align === "center" ? "text-center mx-auto" : ""} max-w-[62ch] ${className}`}>
      <Tag className="text-balance-tight">{title}</Tag>
      {intro ? <p className="mt-4 max-w-[68ch] text-muted-foreground">{intro}</p> : null}
    </Reveal>
  );
}