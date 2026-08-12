/**
 * JSON-LD structured data.
 *
 * Search engines and AI answer engines read this to extract facts (address,
 * phone, hours, prices, menu) without having to interpret page copy. Every
 * value here must match what is visible on the page and the business's Google
 * Business Profile.
 */

import {
  BUSINESS,
  SITE_URL,
  SOCIAL_PROFILES,
  PAGE_META,
  ADDRESS_ONE_LINE,
} from "./siteConfig";

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.streetAddress,
  addressLocality: BUSINESS.city,
  addressRegion: BUSINESS.state,
  postalCode: BUSINESS.zip,
  addressCountry: BUSINESS.country,
};

/** Buffet and combo pricing, per the August 2026 printed menu. */
const BUFFET_OFFERS = [
  { name: "Buffet Option One", price: "16", description: "1 meat, 1 pasta, 1 side, salad and rolls" },
  { name: "Buffet Option Two", price: "18", description: "2 meats, 1 pasta, 1 side, salad and rolls" },
  { name: "Buffet Option Three", price: "20", description: "2 meats, 2 pastas, 1 side, salad and rolls" },
  { name: "BBQ Special", price: "19", description: "2 meats, 2 sides, cornbread or rolls" },
  {
    name: "Wedding Combination",
    price: "22",
    description:
      "2 meats, 3 sides or pasta selections, salad and rolls, includes rack setup and Sternos",
  },
];

/**
 * The primary business entity. Caterer is a subtype of FoodEstablishment and
 * LocalBusiness, so this single node satisfies all three.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Caterer",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "Family-owned family-style catering in Rochester, New York with over 10 years of experience, serving weddings, corporate events, graduations, banquets, holidays, and bereavements.",
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    image: `${SITE_URL}/images/catering-in-rochester-ny.jpg`,
    logo: `${SITE_URL}/images/logo-outline.png`,
    address: POSTAL_ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    servesCuisine: ["Italian", "American", "Barbecue"],
    sameAs: [...SOCIAL_PROFILES],
    hasMenu: `${SITE_URL}/menu`,
    makesOffer: BUFFET_OFFERS.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      description: offer.description,
      price: offer.price,
      priceCurrency: "USD",
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        unitText: "per person",
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}

/** Menu sections, mirroring the printed menu exactly. */
const MENU_SECTIONS: Array<{
  name: string;
  full: string;
  half: string;
  items: string[];
}> = [
  {
    name: "Appetizers",
    full: "100",
    half: "60",
    items: [
      "Arancini Beef or Spinach",
      "Mini Buffalo Chicken Arancini",
      "Artichoke Dip with crackers",
      "Buffalo Wing Dip with chips",
      "Boneless or Traditional Wings",
      "Chicken Finger Platter",
      "Fried Shrimp with boom boom sauce",
      "Sampler",
      "Sushi Burritos",
    ],
  },
  {
    name: "Platters",
    full: "100",
    half: "65",
    items: [
      "Antipasto",
      "Fruit Tray",
      "Veggie Tray",
      "Cheese & Crackers Tray",
      "Caprese Salad",
      "Wrap Tray",
    ],
  },
  {
    name: "Pasta",
    full: "100",
    half: "60",
    items: [
      "Homemade Red Sauce",
      "Homemade Vodka Sauce",
      "Homemade Alfredo Sauce",
      "Penne with broccoli & mozzarella",
      "Eggplant Parmesan",
      "Artichoke French",
      "Mac and Cheese",
    ],
  },
  {
    name: "Baked Pasta & Lasagna",
    full: "120",
    half: "60",
    items: [
      "Homemade Meat Sauce",
      "Baked Ziti",
      "Lasagna or Lasagna Roll Ups",
      "Stuffed Shells",
    ],
  },
  {
    name: "Meats",
    full: "120",
    half: "60",
    items: [
      "Chicken French",
      "Chicken Parmesan or Cutlets",
      "Homemade Meatballs",
      "Baked Italian Chicken",
      "Sausage, Peppers, and Onions",
      "Sicilian Style Pulled Pork",
      "Sicilian Style Beef",
    ],
  },
  {
    name: "Combos",
    full: "180",
    half: "90",
    items: [
      "Chicken Parm with Fettuccine Alfredo",
      "Chicken French and Linguine",
      "Spaghetti with Meatballs & Sausage",
      "BBQ Chicken and Mac & Cheese",
    ],
  },
  {
    name: "Sides",
    full: "85",
    half: "50",
    items: [
      "Roasted Mixed Vegetables",
      "Salt Potatoes",
      "Oven Roasted Potatoes",
      "Pasta Salad",
      "Macaroni Salad",
      "Potato Salad",
    ],
  },
  {
    name: "Specialty Salads",
    full: "65",
    half: "40",
    items: [
      "House Salad",
      "Caesar Salad",
      "Spring Mix with Balsamic, Truffle Marinated Apples, and Goat Cheese",
      "Cucumber & Tomato Salad",
    ],
  },
  {
    name: "BBQ Options",
    full: "120",
    half: "60",
    items: [
      "BBQ Chicken",
      "BBQ Pulled Pork",
      "BBQ Pork Ribs",
      "Sausage, Peppers, and Onions",
    ],
  },
  {
    name: "BBQ Side Options",
    full: "85",
    half: "50",
    items: [
      "Coleslaw",
      "Baked Beans",
      "Mac & Cheese",
      "Salt Potatoes",
      "Potato Salad",
      "Cornbread",
      "Mac Salad",
      "Corn on the cob",
      "Pasta Salad",
    ],
  },
];

/**
 * Full menu with per-tray pricing. AI answer engines quote these figures
 * directly, so they must match the printed menu.
 */
export function menuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE_URL}/menu#menu`,
    name: "Battatini's Catering Menu",
    description:
      "Family-style buffet combinations priced per person, plus half and full trays of Italian favorites, BBQ, sides, salads, and desserts. A full tray feeds 30 to 40 people and a half tray feeds 10 to 15.",
    inLanguage: "en-US",
    provider: { "@id": `${SITE_URL}/#business` },
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Family Style Buffets",
        description: "Priced per person. Every buffet includes salad and rolls.",
        hasMenuItem: BUFFET_OFFERS.map((offer) => ({
          "@type": "MenuItem",
          name: offer.name,
          description: offer.description,
          offers: {
            "@type": "Offer",
            price: offer.price,
            priceCurrency: "USD",
            eligibleQuantity: {
              "@type": "QuantitativeValue",
              unitText: "per person",
            },
          },
        })),
      },
      ...MENU_SECTIONS.map((section) => ({
        "@type": "MenuSection",
        name: section.name,
        description: `Full tray $${section.full}, half tray $${section.half}.`,
        hasMenuItem: section.items.map((item) => ({
          "@type": "MenuItem",
          name: item,
          offers: [
            {
              "@type": "Offer",
              name: "Full Tray",
              price: section.full,
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Half Tray",
              price: section.half,
              priceCurrency: "USD",
            },
          ],
        })),
      })),
    ],
  };
}

export function breadcrumbSchema(path: string) {
  const meta = PAGE_META[path];
  if (!meta || path === "/") return null;

  const segments = path.split("/").filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ];

  if (segments[0] === "services" && segments.length > 1) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    });
    items.push({
      "@type": "ListItem",
      position: 3,
      name: meta.title.split("|")[0].trim(),
      item: `${SITE_URL}${path}`,
    });
  } else {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: meta.title.split("|")[0].trim(),
      item: `${SITE_URL}${path}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function faqSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Everything the given route should emit, ready to be serialised. */
export function schemaForRoute(path: string): object[] {
  const graph: object[] = [];

  if (path === "/") {
    graph.push(localBusinessSchema(), websiteSchema());
  } else {
    graph.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}#webpage`,
      url: `${SITE_URL}${path}`,
      name: PAGE_META[path]?.title ?? BUSINESS.name,
      description: PAGE_META[path]?.description ?? "",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
    });
  }

  if (path === "/menu") {
    graph.push(menuSchema());
  }

  const crumbs = breadcrumbSchema(path);
  if (crumbs) graph.push(crumbs);

  return graph;
}

export { ADDRESS_ONE_LINE };
