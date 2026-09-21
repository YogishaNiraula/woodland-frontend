import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { siteConfig, whatsappLink } from "@/data/siteConfig";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    firstMobileLinkRef.current?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  const whatsappHref = whatsappLink();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4 md:px-10">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex min-h-11 items-center text-sm tracking-wide text-charcoal/80 transition-colors hover:text-forest data-[status=active]:text-forest"
              activeProps={{ className: "text-forest" }}
            >
              {item.label}
            </Link>
          ))}
          {siteConfig.phoneHref || whatsappHref ? (
            <span aria-hidden="true" className="h-5 w-px bg-line" />
          ) : null}
          {siteConfig.phoneHref ? (
            <a
              href={siteConfig.phoneHref}
              className="inline-flex min-h-11 items-center gap-2 text-sm text-charcoal transition-colors hover:text-forest"
              data-analytics="click_call"
            >
              <Phone aria-hidden="true" className="size-4" /> Call
            </a>
          ) : null}
          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xs bg-forest px-4 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-forest-deep"
              data-analytics="click_whatsapp"
            >
              <MessageCircle aria-hidden="true" className="size-4" /> WhatsApp
            </a>
          ) : null}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex min-h-11 items-center gap-2 border border-line px-3 py-2 text-sm md:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="size-4" />
          ) : (
            <Menu aria-hidden="true" className="size-4" />
          )}
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-cream px-5 pb-8 pt-4 md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {nav.map((item, index) => (
            <Link
              ref={index === 0 ? firstMobileLinkRef : undefined}
              key={item.to}
              to={item.to}
              className="border-b border-line py-4 font-display text-2xl text-charcoal"
              activeProps={{ className: "text-forest" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 text-sm text-muted-foreground">
          Serving {siteConfig.serviceArea}
        </p>
      </div>
    </header>
  );
}
