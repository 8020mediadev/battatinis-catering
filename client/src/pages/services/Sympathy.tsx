import ServicePage from "@/components/ServicePage";

export default function Sympathy() {
  return (
    <ServicePage
      title="Bereavement & Sympathy Catering"
      subtitle="Comforting Meals for Difficult Times"
      seoHeader="Sympathy & Funeral Catering in Rochester — Comfort Food Delivered with Care"
      description="A thoughtful meal can provide comfort and support in life's toughest moments. During times of loss, even the simplest tasks can feel overwhelming. Sending a meal is a meaningful way to offer comfort to a grieving friend or family. We prepare fresh, homemade meals ready to serve for individuals or family gatherings, delivered with care so loved ones can focus on healing while the food is taken care of."
      features={[
        "Thoughtful, ready-to-serve meals delivered with care",
        "Family-style trays and platters for gatherings",
        "Individual meal options for ease and convenience",
        "Customizable menus based on dietary preferences",
        "Full trays feed 30–40 people, half trays feed 10–15",
        "Hot and fresh delivery throughout Rochester and surrounding areas",
        "Gift a meal on behalf of your family, business, or church group",
        "Short-notice orders accommodated whenever possible",
      ]}
      ctaText="Arrange a Meal"
      extraDescription="Whether you are organizing a gathering after a service or sending a meal to someone in mourning, Battatini's makes it simple. Choose from family-style trays or individually packaged meals, all prepared with care and ready to serve. Let us handle the food so you can focus on what matters most."
      popularItems={[
        "Baked Italian Chicken",
        "Pasta with Meat Sauce",
        "Chicken French",
        "Greens and Beans",
        "Tossed Garden Salad",
        "Italian Cookie Tray",
      ]}
      faqs={[
        {
          question: "How quickly can you deliver a sympathy meal?",
          answer:
            "We understand these requests often come on short notice. Call us at 585-544-FOOD (3663) and we will do everything we can to accommodate your timing, often same-day or next-day depending on the size of the order and our schedule.",
        },
        {
          question: "Can I send a meal to a family on someone else's behalf?",
          answer:
            "Yes. Many of our sympathy orders are gifts sent by friends, extended family, coworkers, or church groups. Just give us the delivery address and timing, and we will handle the rest with discretion and care.",
        },
        {
          question: "How much food should I order for a gathering after a service?",
          answer:
            "A full tray feeds 30–40 people and a half tray feeds 10–15. If you are unsure of the headcount, give us a call and we will help you plan the right amount so nothing goes to waste.",
        },
        {
          question: "Do you offer individually packaged meals?",
          answer:
            "Yes. In addition to family-style trays, we can prepare individually packaged meals, which many families prefer for immediate family members or for sending home with guests.",
        },
        {
          question: "Can you accommodate dietary restrictions?",
          answer:
            "We can customize menus to work around common dietary needs and preferences. Let us know when you place your order and we will put together options that work for everyone.",
        },
      ]}
    />
  );
}
