import ServicePage from "@/components/ServicePage";

export default function Weddings() {
  return (
    <ServicePage
      title="Wedding Catering"
      subtitle="Exceptional Wedding Catering in Rochester, NY"
      heroImage="/images/hero-weddings.jpg"
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
