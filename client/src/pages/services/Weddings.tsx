import ServicePage from "@/components/ServicePage";

export default function Weddings() {
  return (
    <ServicePage
      title="Wedding Catering"
      subtitle="Exceptional Wedding Catering in Rochester, NY"
      heroImage="/images/wedding-catering-rochester-ny.webp"
      heroAlt="Spring mix salad tray with balsamic drizzle, apples, and goat cheese for a wedding reception"
      seoHeader="Family-Style Wedding Catering That Your Guests Will Love"
      description="Make your big day unforgettable with family-style feasts from Battatini's. We specialize in creating warm, memorable dining experiences for weddings of all sizes. Our wedding combo starts at just $22 per person and includes everything you need — from racks and sternos to a beautifully curated menu your guests will love."
      features={[
        "Wedding receptions and rehearsal dinners",
        "Engagement parties",
        "Wedding combo starting at $22/person",
        "2 meats, 3 sides/pastas, salad, and rolls included",
        "Racks and sternos provided",
        "Customizable menu to match your vision",
        "Delivery and setup available",
        "Authentic Italian family-style dining experience",
      ]}
      ctaText="Plan Your Wedding Menu"
      heroNote="5-star rated by Rochester couples"
      price={{
        amount: "$22",
        unit: "per person",
        includes: [
          "2 meats of your choice",
          "3 sides or pasta selections",
          "Fresh salad and dinner rolls",
          "Racks and sternos included",
        ],
        note: "Staying on-site is optional and can be arranged.",
      }}
      steps={[
        {
          title: "Tell us your date",
          desc: "Call or send your details. We confirm availability and talk through guest count, venue, and timing.",
        },
        {
          title: "Build your menu",
          desc: "Choose your meats, pastas, and sides from our full selection. We tailor everything to your reception.",
        },
        {
          title: "We handle the day",
          desc: "We deliver hot, set up racks and sternos, and can stay on-site so the buffet keeps flowing.",
        },
      ]}
      photos={[
        { src: "/images/wedding-catering-rochester-ny.webp", alt: "Spring mix salad tray with balsamic, apples, and goat cheese for a Rochester wedding" },
        { src: "/images/chicken-french.webp", alt: "Tray of homemade Chicken French prepared by Battatini's Catering" },
        { src: "/images/baked-ziti-pasta-catering.webp", alt: "Full tray of baked ziti in homemade red sauce for a wedding reception" },
        { src: "/images/catering-trays-rochester-ny.webp", alt: "Family-style catering trays set up and ready to serve" },
      ]}
      extraDescription="Your wedding day deserves food that brings people together. Our Wedding Combination includes rack setup and Sterno, and we can stay on-site to keep everything fresh and flowing. Customize your menu from our full selection of Italian classics, BBQ, and more."
      popularItems={["Wedding Combination (2 Meats + 3 Sides)", "Chicken French & Linguine", "Lasagna Roll Ups", "Caesar Salad", "Caprese Salad", "Italian Cookie Tray"]}
      faqs={[
        {
          question: "What's included in the $22/person wedding combo?",
          answer: "Our wedding combo includes your choice of 2 meats, 3 sides or pastas, a fresh salad, and dinner rolls — all served family-style. Racks and sternos are provided so everything stays hot and ready for your guests.",
        },
        {
          question: "How far in advance should we book wedding catering?",
          answer: "We recommend booking at least 2–4 weeks in advance for weddings to ensure availability, especially during peak season (May–October). The earlier you reach out, the more flexibility we have with your menu.",
        },
        {
          question: "Can you cater both the rehearsal dinner and the reception?",
          answer: "Absolutely! Many of our couples book us for both events. We can create different menus for each occasion so your guests enjoy variety across both celebrations.",
        },
        {
          question: "Do you offer tastings before the wedding?",
          answer: "We're happy to discuss tasting options with you. Give us a call and we can arrange for you to sample some of our most popular dishes before you finalize your wedding menu.",
        },
        {
          question: "Can you accommodate large wedding receptions?",
          answer: "Yes! We regularly cater weddings of 100–300+ guests. Our full tray system is designed for large-scale events, and we handle delivery, setup, and buffet equipment so you can focus on your big day.",
        },
      ]}
    />
  );
}
