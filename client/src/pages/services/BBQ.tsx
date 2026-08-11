import ServicePage from "@/components/ServicePage";

export default function BBQ() {
  return (
    <ServicePage
      title="BBQ Catering"
      subtitle="Hot & Fresh BBQ Catering in Rochester, NY"
      heroImage="/images/hero-bbq.jpg"
      seoHeader="Rochester's Best BBQ Catering — Smoky, Fresh, and Delivered Hot"
      description="Fire up your next event with Battatini's BBQ Catering! Our smoky, slow-cooked meats and hearty sides bring the backyard BBQ experience to any gathering. Perfect for casual corporate events, summer parties, family reunions, and more. Our BBQ combo is just $18 per person and includes everything you need for a crowd-pleasing meal."
      features={[
        "Smoky ribs and juicy pulled pork",
        "BBQ chicken and brisket options",
        "Hearty sides like coleslaw, mac & cheese, and baked beans",
        "BBQ combo at $18/person — 2 meats, 2 sides, cornbread or salad",
        "Perfect for outdoor events and casual gatherings",
        "Full and half tray options available",
        "Hot and fresh delivery throughout Rochester",
        "Customizable menu to fit your event",
      ]}
      ctaText="Order BBQ Catering"
      extraDescription="Our BBQ Special includes 2 meats and 2 sides of your choice with cornbread or rolls. Perfect for summer cookouts, tailgates, and outdoor events. Everything is prepared fresh and delivered hot — just set up and serve."
      popularItems={["BBQ Pulled Pork", "BBQ Pork Ribs", "BBQ Chicken", "Mac & Cheese", "Coleslaw", "Corn on the Cob"]}
      faqs={[
        {
          question: "What's included in the $18/person BBQ combo?",
          answer: "Our BBQ combo includes your choice of 2 meats (like pulled pork, ribs, or BBQ chicken), 2 sides (such as mac & cheese, coleslaw, or baked beans), plus cornbread or salad. It's a complete meal that's perfect for any crowd.",
        },
        {
          question: "Is your BBQ catering good for outdoor events?",
          answer: "It's ideal for outdoor events! Our BBQ menu is designed for casual settings like backyard parties, company picnics, family reunions, and summer celebrations. Everything is delivered hot and ready to serve.",
        },
        {
          question: "Can I combine BBQ and Italian dishes in one order?",
          answer: "Yes! Many of our customers love mixing BBQ meats with Italian sides or vice versa. We're flexible — just let us know what you're thinking and we'll build a custom menu for you.",
        },
        {
          question: "How much BBQ should I order for my group?",
          answer: "A good rule of thumb is one combo per person. For larger appetites or longer events, we recommend adding an extra half tray or two. Call us and we'll help you plan the right amount based on your guest count.",
        },
        {
          question: "Do you offer BBQ catering year-round?",
          answer: "Yes, our BBQ catering is available year-round — not just in summer! Whether it's a winter holiday party or a spring graduation, our smoky meats and hearty sides are always a hit.",
        },
      ]}
    />
  );
}
