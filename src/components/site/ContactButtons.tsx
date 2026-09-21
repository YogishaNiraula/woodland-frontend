import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/siteConfig";

type Tone = "onCream" | "onForest";

const base =
  "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-colors transition-transform duration-200 active:translate-y-px rounded-xs";

export function CallButton({
  tone = "onCream",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  if (!siteConfig.phoneHref) return null;
  const styles =
    tone === "onForest"
      ? "bg-cream text-forest-deep hover:bg-cream-deep"
      : "bg-forest text-cream hover:bg-forest-deep";
  return (
    <a
      href={siteConfig.phoneHref}
      className={`${base} ${styles} ${className}`}
      data-analytics="click_call"
    >
      <Phone aria-hidden="true" className="size-4" />
      Call Woodland
    </a>
  );
}

export function WhatsAppButton({
  tone = "onCream",
  message,
  label = "Chat on WhatsApp",
  className = "",
}: {
  tone?: Tone;
  message?: string;
  label?: string;
  className?: string;
}) {
  const href = whatsappLink(message);
  if (!href) return null;
  const styles =
    tone === "onForest"
      ? "border border-cream/50 text-cream hover:bg-cream/10"
      : "border border-forest text-forest hover:bg-forest/8";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
      data-analytics="click_whatsapp"
    >
      <MessageCircle aria-hidden="true" className="size-4" />
      {label}
    </a>
  );
}

export function ContactActions({
  tone = "onCream",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  if (!siteConfig.phoneHref && !siteConfig.whatsappNumber) return null;
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <CallButton tone={tone} />
      <WhatsAppButton tone={tone} />
    </div>
  );
}
