import type { Sector } from "./sectors";

export type Status = "Operating" | "Scaling" | "In Development";

export interface Company {
  name: string;
  slug: string;
  sector: Sector;
  /** Additional sectors in which the company is active (used by the filter). */
  alsoIn?: Sector[];
  status: Status;
  description: string;
  longDescription: string[];
  /** KBH's role. Wording only; do not state a percentage here. */
  kbhRole: string;
  /** Omit if the company has no public website yet. */
  website?: string;
  /** Path under /public, e.g. "/logos/urban-xpress.svg". Omit to render the name in serif type. */
  logo?: string;
  /** Percentage is only ever shown when showStake is true. */
  stake?: string;
  showStake?: boolean;
  featured?: boolean;
}

/*
 * Statuses, roles and websites marked [[CONFIRM]] are drafted from the brief and must be
 * verified by KBH before launch. To add a company, append an entry below.
 * [[OTHERS / CONFIRM STAKES AND STATUS]] — further holdings to be supplied.
 */
export const portfolio: Company[] = [
  {
    name: "Urban Xpress",
    slug: "urban-xpress",
    sector: "Logistics",
    status: "Operating",
    description: "Local delivery, air and sea freight, and shop-and-ship services across Uganda, Dubai and China.",
    longDescription: [
      "Urban Xpress is a logistics company serving businesses and individuals in Uganda. Its services cover local delivery, air freight, sea cargo, sourcing and shop-and-ship, with established routes to Dubai and China.",
      "The company operates under documented service levels, structured rider onboarding and daily financial reconciliation. Its priority is measurable performance on each lane it serves.",
    ],
    kbhRole: "Founding shareholder and director.", // [[CONFIRM]]
    website: undefined, // [[CONFIRM]] URL
    featured: true,
  },
  {
    name: "Terumo Cloud Limited",
    slug: "terumo-cloud",
    sector: "Technology",
    status: "Scaling", // [[CONFIRM]]
    description: "WhatsApp conversational commerce and business automation for African enterprises.",
    longDescription: [
      "Terumo Cloud is the group's technology company, incorporated in July 2022. It builds conversational commerce and automation tools on the WhatsApp Business platform, including ordering, catalogues, payments and customer management.",
      "Its aim is a dependable, ready-to-use commerce layer for businesses that already serve their customers over messaging.",
    ],
    kbhRole: "Founding shareholder and director.", // [[CONFIRM]]
    featured: true,
  },
  {
    name: "Kali Kwik Solutions",
    slug: "kali-kwik-solutions",
    sector: "Construction & Infrastructure",
    alsoIn: ["Energy"],
    status: "Operating",
    description: "Construction, engineering and energy retail, including a Vivo Energy fuel station.",
    longDescription: [
      "Kali Kwik Solutions undertakes construction and engineering work and operates a Vivo Energy fuel station, giving the group a stable, cash-generating retail operation alongside its project business.",
      "The company is being structured to work closely with the group's construction and logistics subsidiaries.",
    ],
    kbhRole: "Shareholder and director.", // [[CONFIRM]]
    featured: true,
  },
  {
    name: "Wert+",
    slug: "wert-plus",
    sector: "Construction & Infrastructure",
    status: "Operating", // [[CONFIRM]]
    description: "Construction subsidiary.",
    longDescription: [
      "Wert+ is the group's construction subsidiary. It is positioned to work alongside Kali Kwik Solutions and the group's logistics business.",
    ], // [[CONFIRM]] scope of work
    kbhRole: "Shareholder.", // [[CONFIRM]] direct or via Kali Kwik
  },
  {
    name: "Dominion Bank",
    slug: "dominion-bank",
    sector: "Financial Services",
    status: "In Development",
    description: "A fully digital bank for small and medium enterprises, beginning in Botswana.",
    longDescription: [
      "Dominion Bank is a planned digital bank offering lending, wallets, payments and subscriptions to small businesses and individuals. It will launch in Botswana through a regulatory sandbox before extending to other African markets.",
      "The company is in development. It will operate only with the approval of the relevant regulators.",
    ],
    kbhRole: "Founding sponsor.", // [[CONFIRM]]
    featured: true,
  },
  {
    name: "EveryThingCars (ETC)",
    slug: "everythingcars",
    sector: "Automotive",
    status: "In Development",
    description: "A digital platform for spare parts, vehicle care and automotive education.",
    longDescription: [
      "EveryThingCars is building an automotive knowledge and marketplace platform. It begins with content, parts listings and mechanic referrals, and will extend to conversational commerce and a mobile application.",
    ],
    kbhRole: "Founding sponsor.", // [[CONFIRM]]
    featured: true,
  },
  {
    name: "DevForge",
    slug: "devforge",
    sector: "Technology",
    status: "In Development", // [[CONFIRM]]
    description: "A developer house training engineers and building software for the group.",
    longDescription: [
      "DevForge is a developer house that trains engineers and builds technology solutions. It is funded by investors on a monthly basis and is designed to become self-sustaining over time.",
    ],
    kbhRole: "Founding sponsor.", // [[CONFIRM]]
  },
  {
    name: "FarmSystem",
    slug: "farmsystem",
    sector: "Agriculture",
    status: "In Development", // [[CONFIRM]]
    description: "Agricultural aggregation and input financing for smallholder farmers in Tanzania.",
    longDescription: [
      "FarmSystem connects smallholder farmers in Tanzania with funders, input suppliers and payment services. The model is designed to organise more than two thousand farmers around shared inputs, financing and offtake.",
    ],
    kbhRole: "Sponsor, through DSI.", // [[CONFIRM]] relationship to DSI
    featured: true,
  },
  {
    name: "VerifyAgri Uganda Limited",
    slug: "verifyagri-uganda",
    sector: "Agriculture",
    status: "Scaling", // [[CONFIRM]]
    description: "Pre-export compliance verification for Ugandan agricultural produce.",
    longDescription: [
      "VerifyAgri Uganda supports exporters with pre-export agricultural compliance, helping produce meet the documentation and quality standards of destination markets.",
    ], // [[CONFIRM]] scope
    kbhRole: "Shareholder.", // [[CONFIRM]]
  },
  {
    name: "Western Farm (“Loko”)",
    slug: "western-farm",
    sector: "Agriculture",
    status: "Operating", // [[CONFIRM]]
    description: "Premium organic eggs sold under the Loko brand.",
    longDescription: [
      "Western Farm produces premium organic eggs under the Loko name, with an emphasis on animal welfare, consistency and traceability.",
    ], // [[CONFIRM]] claims about practices
    kbhRole: "Shareholder.", // [[CONFIRM]]
  },
  {
    name: "Nsita Experiences",
    slug: "nsita-experiences",
    sector: "Hospitality & Experiences",
    status: "Scaling",
    description: "Experiential events for corporate and private clients.",
    longDescription: [
      "Nsita Experiences began as an event decor company and is moving to full experiential events, with tiered packages for corporate and premium clients.",
    ],
    kbhRole: "Shareholder and director.", // [[CONFIRM]]
  },
];

export const getCompany = (slug: string) => portfolio.find((c) => c.slug === slug);
export const featuredCompanies = () => portfolio.filter((c) => c.featured).slice(0, 6);
export const STATUSES: Status[] = ["Operating", "Scaling", "In Development"];
