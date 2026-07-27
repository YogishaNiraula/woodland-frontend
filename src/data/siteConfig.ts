/**
 * Single source of truth for editable business information.
 * Replace every [PLACEHOLDER] value before launch.
 */
export const siteConfig = {
  name: "Woodland",
  tagline: "Custom Furniture & Woodwork",
  legalName: "Woodland Home Service Pvt. Ltd.",
  domain: "https://woodland.com.np",
  serviceArea: "Kathmandu Valley, Nepal",

  // [PLACEHOLDER] Replace with the real phone number in international format.
  phoneDisplay: "+977 [PHONE NUMBER]",
  phoneHref: "tel:+9770000000000",

  // [PLACEHOLDER] Replace with the real WhatsApp number (digits only, with country code).
  whatsappNumber: "9770000000000",
  whatsappMessage:
    "Hello Woodland, I'm interested in custom furniture. I would like to discuss [item]. My location is [location], and the approximate size is [size].",

  // [PLACEHOLDER] Replace with the real workshop address.
  address: {
    line1: "[WORKSHOP ADDRESS LINE 1]",
    line2: "[AREA], Kathmandu Valley, Nepal",
  },
  // [PLACEHOLDER] Replace with a real Google Maps embed / share URL.
  mapUrl: "[GOOGLE MAPS URL]",

  // [PLACEHOLDER] Replace with confirmed response hours.
  responseHours: "[RESPONSE HOURS — e.g. Sun–Fri, 9:00–18:00]",
  visitNote: "Workshop visits by appointment.",

  // [PLACEHOLDER] Replace or remove social links.
  social: {
    facebook: "[FACEBOOK URL]",
    instagram: "[INSTAGRAM URL]",
  },
} as const;

export function whatsappLink(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
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