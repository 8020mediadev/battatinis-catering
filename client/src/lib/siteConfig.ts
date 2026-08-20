/**
 * Single source of truth for business facts (NAP), SEO metadata, and structured data.
 *
 * NAP values must match Google Business Profile, Facebook, and Yelp exactly,
 * character for character. The numeric phone is authoritative for `tel:` links
 * and schema; the vanity form is display-only.
 */

export const SITE_URL = "https://battatiniscatering.com";

export const BUSINESS = {
  name: "Battatini's Family Style Catering",
  legalName: "Battatini's Family Style Catering",
  /** Authoritative numeric phone. Use for tel: links and schema. */
  phone: "585-544-3663",
  phoneHref: "tel:5855443663",
  phoneE164: "+1-585-544-3663",
  /** Display-only vanity form. Never use in schema or tel: links. */
  phoneVanity: "585-544-FOOD",
  email: "battatiniscatering@yahoo.com",
  streetAddress: "2305 Portland Ave",
  city: "Rochester",
  state: "NY",
  zip: "14617",
  country: "US",
  /** Approximate coordinates for 2305 Portland Ave, Rochester NY 14617. */
  latitude: 43.2128,
  longitude: -77.5817,
  priceRange: "$$",
  areaServed: [
    "Rochester",
    "Irondequoit",
    "Webster",
    "Greece",
    "Penfield",
    "Brighton",
    "Pittsford",
    "Fairport",
    "Monroe County",
  ],
} as const;

export const ADDRESS_ONE_LINE =
  `${BUSINESS.streetAddress}, ${BUSINESS.city}, ${BUSINESS.state} ${BUSINESS.zip}`;

export const SOCIAL_PROFILES = [
  "https://www.facebook.com/battatiniscatering",
  "https://www.instagram.com/battatiniscatering",
] as const;

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  /** Optional Open Graph image path, relative to the site root. */
  image?: string;
}

/**
 * Per-route metadata. Every marketing page needs a unique, keyword-targeted
 * title and description; duplicates prevent search engines from telling the
 * pages apart. Titles stay under roughly 60 characters and descriptions under
 * roughly 160 so they are not truncated in results.
 */
export const PAGE_META: Record<string, PageMeta> = {
  "/": {
    path: "/",
    title: "Catering in Rochester, NY | Battatini's Family Style Catering",
    description:
      "Family-owned catering in Rochester, NY for weddings, corporate events, graduations, banquets, and bereavements. Family-style buffets from $16 per person. Call 585-544-3663.",
    image: "/images/battatinis-catering-og.jpg",
  },
  "/menu": {
    path: "/menu",
    title: "Catering Menu & Prices | Battatini's Catering Rochester NY",
    description:
      "View our full catering menu and pricing. Family-style buffets from $16 per person, half and full trays of Italian favorites, BBQ, salads, and desserts. Download the PDF menu.",
    image: "/images/battatinis-catering-og.jpg",
  },
  "/about": {
    path: "/about",
    title: "About Us | Battatini's Family Style Catering Rochester NY",
    description:
      "Battatini's is a family-owned Rochester caterer with over 10 years of experience serving homemade Italian favorites family-style at 2305 Portland Ave.",
  },
  "/order-catering": {
    path: "/order-catering",
    title: "Order Catering in Rochester, NY | Battatini's Catering",
    description:
      "Start your catering order with Battatini's. Tell us your date, headcount, and menu preferences, or call 585-544-3663 to plan your event in Rochester, NY.",
  },
  "/thursday-tray-day": {
    path: "/thursday-tray-day",
    title: "Thursday Tray Day | Battatini's Catering Rochester NY",
    description:
      "Every Thursday, stop by 2305 Portland Ave in Rochester for Tray Day. Fresh homemade trays ready to take home, no catering order required.",
  },
  "/services/corporate": {
    path: "/services/corporate",
    title: "Corporate & Office Lunch Catering | Rochester, NY",
    description:
      "Reliable corporate catering and office lunch delivery in Rochester, NY. Family-style trays for meetings, training days, and staff appreciation events.",
  },
  "/services/parties": {
    path: "/services/parties",
    title: "Party & Banquet Catering in Rochester, NY | Battatini's",
    description:
      "Party and banquet catering in Rochester, NY for birthdays, retirements, showers, fundraisers, and hall events of 100 to 300 or more guests.",
  },
  "/services/weddings": {
    path: "/services/weddings",
    title: "Wedding Catering in Rochester, NY | Battatini's Catering",
    description:
      "Family-style wedding catering in Rochester, NY from $22 per person. Includes 2 meats, 3 sides or pastas, salad, rolls, rack setup, and Sternos.",
  },
  "/services/bbq": {
    path: "/services/bbq",
    title: "BBQ Catering in Rochester, NY | Battatini's Catering",
    description:
      "BBQ catering in Rochester, NY from $19 per person. Smoky pulled pork, ribs, and BBQ chicken with hearty sides, delivered hot for any outdoor event.",
  },
  "/services/graduation": {
    path: "/services/graduation",
    title: "Graduation Party Catering in Rochester, NY | Battatini's",
    description:
      "Graduation party catering in Rochester, NY. Family-style trays and buffets that feed a crowd, with delivery or pickup to fit your open house schedule.",
  },
  "/services/holiday": {
    path: "/services/holiday",
    title: "Holiday Party Catering in Rochester, NY | Battatini's",
    description:
      "Holiday catering in Rochester, NY for office parties and family gatherings. Homemade Italian trays and buffets delivered hot and ready to serve.",
  },
  "/services/bereavements": {
    path: "/services/bereavements",
    title: "Bereavement & Funeral Catering in Rochester, NY | Battatini's",
    description:
      "Bereavement and funeral catering in Rochester, NY. Comforting homemade meals delivered with care for gatherings after a service. Short notice accommodated.",
  },
  "/privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | Battatini's Family Style Catering",
    description:
      "How Battatini's Family Style Catering collects, uses, and protects the information you share with us through our website and catering inquiries.",
  },
  "/accessibility": {
    path: "/accessibility",
    title: "Website Accessibility Policy | Battatini's Catering",
    description:
      "Battatini's Family Style Catering is committed to keeping our website usable for everyone. Read our accessibility commitment and how to report an issue.",
  },
};

export const DEFAULT_META: PageMeta = PAGE_META["/"];

/** Routes that should appear in sitemap.xml and be prerendered at build time. */
export const ROUTES = Object.keys(PAGE_META);
