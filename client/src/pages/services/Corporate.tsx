import ServicePage from "@/components/ServicePage";

export default function Corporate() {
  return (
    <ServicePage
      title="Corporate Catering"
      subtitle="Business Catering in Rochester, NY"
      heroImage="/images/hero-corporate.webp"
      seoHeader="Professional Corporate Catering Services in Rochester, NY"
      description="We understand the importance of impeccable service and exceptional food in creating a professional and inviting atmosphere for corporate events. Whether you're planning a small team lunch, a large conference, or an annual company gala, our corporate catering services are designed to impress. Enjoy the peace of mind that comes with knowing your catering is in expert hands."
      features={[
        "Office meetings and workshops",
        "Conferences and seminars",
        "Executive dining",
        "Holiday parties and company celebrations",
        "Company picnics and retreats",
        "Customizable menus with flexible tray options",
        "Competitive pricing for groups of all sizes",
        "Hot and fresh delivery to your office or venue",
      ]}
      ctaText="Get a Corporate Quote"
      extraDescription="From small team lunches to company-wide celebrations, our family-style trays make corporate catering simple. We handle everything — from menu planning to hot delivery — so your team can focus on what matters. Full and half trays available for any group size."
      popularItems={["Chicken French", "Baked Ziti", "Wrap Tray", "Antipasto Platter", "Chicken Parm w/ Fettuccine Alfredo", "Cookie & Brownie Trays"]}
      faqs={[
        {
          question: "What is the minimum order for corporate catering?",
          answer: "We offer flexible options for groups of all sizes. Our full trays feed 30–40 people and half trays feed 10–15 people. For smaller meetings, we can customize a package that fits your headcount and budget.",
        },
        {
          question: "How far in advance should we place a corporate order?",
          answer: "We recommend placing your order at least 48–72 hours in advance to ensure availability, especially for larger events. For last-minute needs, give us a call and we'll do our best to accommodate you.",
        },
        {
          question: "Do you deliver to offices and corporate venues in Rochester?",
          answer: "Yes! We deliver hot and fresh throughout the Rochester, NY area. Delivery is available for orders meeting our minimum, and we can set up buffet-style with racks and sternos for larger events.",
        },
        {
          question: "Can we customize the menu for dietary restrictions?",
          answer: "Absolutely. We offer a wide variety of Italian dishes, pastas, meats, salads, and sides that can be mixed and matched. Let us know about any dietary needs and we'll help you build the perfect menu.",
        },
        {
          question: "Do you provide serving equipment and utensils?",
          answer: "Yes, we provide racks and sternos for buffet-style setups. Plates, napkins, and utensils can be included upon request. Just let us know what you need when you place your order.",
        },
      ]}
    />
  );
}
