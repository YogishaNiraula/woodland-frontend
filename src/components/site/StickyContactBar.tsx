import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/siteConfig";

export function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 backdrop-blur-sm md:hidden">
      <div className="grid grid-cols-2 gap-2 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        <a
          href={siteConfig.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-xs bg-forest px-4 py-3 text-sm font-medium text-cream"
          data-analytics="click_call"
        >
          <Phone aria-hidden="true" className="size-4" /> Call
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xs border border-forest px-4 py-3 text-sm font-medium text-forest"
          data-analytics="click_whatsapp"
        >
          <MessageCircle aria-hidden="true" className="size-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}