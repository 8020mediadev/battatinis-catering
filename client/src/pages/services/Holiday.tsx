import ServicePage from "@/components/ServicePage";

export default function Holiday() {
  return (
    <ServicePage
      title="Holiday Catering"
      subtitle="Make Every Holiday Feast One to Remember"
      heroImage="/images/holiday-catering-rochester-ny.webp"
      heroAlt="Full catering tray of homemade meatballs in marinara sauce for a holiday gathering"
      seoHeader="Holiday Catering in Rochester — Homemade Italian Feasts for Every Season"
      description="From Easter brunch to Thanksgiving dinner and Christmas celebrations, Battatini's brings the warmth of family-style Italian cooking to your holiday table. Let us take the stress out of holiday meal prep so you can enjoy quality time with your loved ones. We offer special holiday menus and packages tailored to the season."
      features={[
        "Holiday dinner packages (Easter, Thanksgiving, Christmas)",
        "Special seasonal menus and festive options",
        "Customizable family-style buffet combos",
        "Full and half tray options for any gathering size",
        "Buffet combos for groups of all sizes",
        "Hot and fresh delivery throughout Rochester",
        "Authentic Italian dishes made from family recipes",
        "Advance ordering available for stress-free holidays",
      ]}
      ctaText="Plan Your Holiday Feast"
      heroNote="Office parties and family gatherings"
      price={{
        amount: "$18",
        unit: "per person",
        includes: [
          "2 meats of your choice",
          "1 pasta and 1 side",
          "Salad and dinner rolls",
          "Dessert trays from $60",
        ],
        note: "Buffet Option Two. December books early.",
      }}
      steps={[
        {
          title: "Call with your date",
          desc: "Holiday dates go fast, particularly December weekends.",
        },
        {
          title: "Build the menu",
          desc: "Italian classics, carved meats, sides, and dessert trays for the table.",
        },
        {
          title: "We handle the rest",
          desc: "Delivered hot and set up, so the host gets to sit down too.",
        },
      ]}
      photos={[
        { src: "/images/holiday-catering-rochester-ny.webp", alt: "Holiday catering spread from Battatini's Family Style Catering" },
        { src: "/images/baked-ziti-pasta-catering.webp", alt: "Full tray of baked ziti for a holiday gathering" },
        { src: "/images/homemade-sauce-battatinis-catering.webp", alt: "Homemade red sauce simmering in the Battatini's kitchen" },
        { src: "/images/chicken-french.webp", alt: "Tray of Chicken French prepared for a holiday party" },
      ]}
      extraDescription="From Thanksgiving feasts to Christmas Eve dinners and Easter celebrations, our homemade Italian dishes bring warmth and tradition to your holiday table. Order full or half trays and let us handle the cooking while you enjoy time with family."
      popularItems={["Baked Italian Chicken", "Lasagna or Lasagna Roll Ups", "Stuffed Shells", "Roasted Mixed Vegetables", "Eggplant Parmesan", "Italian Cookie Tray"]}
      faqs={[
        {
          question: "How early should I order for holiday catering?",
          answer: "For major holidays like Thanksgiving, Christmas, and Easter, we strongly recommend ordering at least 2–3 weeks in advance. Holiday slots fill up fast, so the earlier you reach out, the better we can accommodate your needs.",
        },
        {
          question: "Do you offer special holiday menus?",
          answer: "Yes! We create special seasonal menus for major holidays that include traditional favorites alongside our signature Italian dishes. Contact us to learn about our current holiday offerings and packages.",
        },
        {
          question: "Can I order holiday catering for a small family dinner?",
          answer: "Absolutely. Our half trays feed 10–15 people, perfect for smaller family gatherings. You can put together a complete holiday meal with a meat, a couple of sides, salad, and a dessert tray without over-ordering.",
        },
        {
          question: "Do you deliver on holidays?",
          answer: "We offer delivery for most major holidays, but delivery times may be limited. We recommend scheduling your delivery time when you place your order. Pickup is also available from our 2305 Portland Ave location.",
        },
        {
          question: "What are your most popular holiday dishes?",
          answer: "Our customers love our chicken french, eggplant parmigiana, baked ziti, and Italian sausage with peppers for holiday gatherings. Paired with our homemade salads and a cannoli or cookie tray for dessert, it's a complete holiday feast.",
        },
      ]}
    />
  );
}
