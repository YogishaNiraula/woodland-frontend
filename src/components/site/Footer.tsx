import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";
import { siteConfig, whatsappLink } from "@/data/siteConfig";

export function Footer() {
  const whatsappHref = whatsappLink();
  const hasContactDetails = Boolean(
    siteConfig.phoneHref || whatsappHref || siteConfig.address,
  );
  return (
    <footer className="border-t border-line bg-cream-deep py-16">
      <div
        className={`mx-auto grid max-w-[1400px] gap-10 px-5 md:px-10 ${hasContactDetails ? "md:grid-cols-[1.2fr_1fr_1fr]" : "md:grid-cols-[1.2fr_1fr]"}`}
      >
        <div>
          <Wordmark />
          <p className="mt-4 max-w-[42ch] text-sm text-muted-foreground">
            {siteConfig.legalName}. Made-to-measure furniture and custom
            woodwork across {siteConfig.serviceArea}.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
          <Link to="/services" className="hover:text-forest">
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-forest">
            Portfolio
          </Link>
          <Link to="/about" className="hover:text-forest">
            About
          </Link>
          <Link to="/contact" className="hover:text-forest">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-forest">
            Privacy
          </Link>
        </nav>

        {hasContactDetails ? (
          <div className="flex flex-col gap-3 text-sm">
            {siteConfig.phoneHref && siteConfig.phoneDisplay ? (
              <a
                href={siteConfig.phoneHref}
                className="hover:text-forest"
                data-analytics="click_call"
              >
                {siteConfig.phoneDisplay}
              </a>
            ) : null}
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-forest"
                data-analytics="click_whatsapp"
              >
                WhatsApp
              </a>
            ) : null}
            {siteConfig.address ? (
              <address className="not-italic text-muted-foreground">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </address>
            ) : null}
            {siteConfig.address ? (
              <p className="text-muted-foreground">{siteConfig.visitNote}</p>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="mx-auto mt-12 max-w-[1400px] border-t border-line px-5 pt-6 text-xs text-muted-foreground md:px-10">
        © {new Date().getFullYear()} {siteConfig.legalName}. All rights
        reserved.
      </div>
    </footer>
  );
}
