/**
 * Global site facts. Edit here; no component changes needed.
 * Any value still wrapped in [[double brackets]] is a placeholder awaiting real content.
 */
export const site = {
  name: "Kingdom Business Holdings",
  shortName: "KBH",
  // [[CONFIRM]] production domain; set NEXT_PUBLIC_SITE_URL in Vercel.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  tagline: "Building enduring African enterprise.",
  description:
    "Kingdom Business Holdings is a Ugandan investment holding company with long-term interests in logistics, technology, financial services, energy, construction, agriculture, automotive and hospitality.",
  contact: {
    addressLines: ["[[ADDRESS]]", "Kampala, Uganda"],
    email: "[[EMAIL]]",
    phone: "[[PHONE]]",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Founder", href: "/founder" },
    { label: "Leadership", href: "/team" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Relationships", href: "/relationships" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    // [[CONFIRM]] company LinkedIn URL, leave empty to omit
    linkedin: "",
  },
} as const;

export const isPlaceholder = (value: string) => value.includes("[[");
