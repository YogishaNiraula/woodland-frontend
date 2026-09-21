export const siteConfig = {
  name: "Woodland",
  tagline: "Custom Furniture & Woodwork",
  legalName: "Woodland Home Service Pvt. Ltd.",
  domain: "https://woodland.com.np",
  serviceArea: "Kathmandu Valley, Nepal",

  phoneDisplay: null as string | null,
  phoneHref: null as string | null,
  whatsappNumber: null as string | null,
  whatsappMessage:
    "Hello Woodland, I'm interested in custom furniture. I would like to discuss [item]. My location is [location], and the approximate size is [size].",

  address: null as { line1: string; line2: string } | null,
  mapUrl: null as string | null,
  responseHours: null as string | null,
  visitNote: "Workshop visits by appointment.",
} as const;

export function whatsappLink(message: string = siteConfig.whatsappMessage) {
  return siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
    : null;
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  description:
    "Made-to-measure furniture and custom woodwork, measured, crafted, delivered and installed across Kathmandu Valley.",
  url: siteConfig.domain,
  areaServed: siteConfig.serviceArea,
};
