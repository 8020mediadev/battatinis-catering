import ServicePage from "@/components/ServicePage";

export default function Parties() {
  return (
    <ServicePage
      title="Party Catering"
      subtitle="Catering for Every Celebration in Rochester, NY"
      heroImage="/images/hero-parties.jpg"
      seoHeader="Affordable Party Catering for Any Celebration in Rochester"
      description="Make your next celebration unforgettable with Battatini's Family Style Catering. From birthday parties and retirements to baby showers and fundraising events, we bring the food so you can focus on the fun. Our family-style combinations are designed to simplify your planning and delight your guests."
      features={[
        "Birthday parties and milestone celebrations",
        "Retirement parties",
        "Baby and bridal showers",
        "Graduation parties",
        "Fundraising events and social gatherings",
        "Bereavement and Celebration of Life events",
        "Full and half tray options for any group size",
        "Delivery or pickup available",
      ]}
      ctaText="Plan Your Party"
      extraDescription="Whether it's a milestone birthday, a retirement celebration, or a family reunion, our homemade Italian dishes and BBQ options are crowd-pleasers every time. We offer flexible tray sizes so you only order what you need — no waste, no stress."
      popularItems={["Spaghetti w/ Meatballs & Sausage", "Chicken French", "Mac and Cheese", "Fruit Tray", "Arancini", "Fried Dough"]}
      faqs={[
        {
          question: "How many people do your trays serve?",
          answer: "Our full trays feed 30–40 people and half trays feed 10–15 people. We can help you figure out the right combination based on your guest count — just give us a call.",
        },
        {
          question: "Can I mix and match different dishes for my party?",
          answer: "Of course! That's what family-style is all about. You can mix Italian favorites, BBQ options, sides, salads, and desserts to create the perfect spread for your guests.",
        },
        {
          question: "Do you cater small parties or just large events?",
          answer: "We cater events of all sizes — from intimate family gatherings to large parties of 100+. Our half trays feed 10–15 people, making it easy and affordable to order for smaller groups.",
        },
        {
          question: "What's included in your party catering combos?",
          answer: "Our buffet combos typically include your choice of meats, pastas or sides, salad, and dinner rolls. Racks and sternos are provided for buffet-style service.",
        },
        {
          question: "How do I place a catering order for my party?",
          answer: "Just give us a call at 585-544-FOOD (3663) or submit an inquiry through our website. We'll help you choose the right menu, confirm your order, and arrange delivery or pickup.",
        },
      ]}
    />
  );
}
