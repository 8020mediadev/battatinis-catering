import ServicePage from "@/components/ServicePage";

export default function Graduation() {
  return (
    <ServicePage
      title="Graduation Catering"
      subtitle="Celebrate Their Big Achievement with Battatini's"
      heroImage="/images/hero-graduation.jpg"
      seoHeader="Graduation Party Catering in Rochester, NY"
      description="Your graduate worked hard to get here — make the celebration unforgettable with delicious family-style catering from Battatini's. Whether it's a small family gathering or a big backyard bash, we'll handle the food so you can focus on celebrating. From classic Italian favorites to crowd-pleasing BBQ, we have the perfect menu for every grad party."
      features={[
        "Graduation party catering for any class size",
        "Family-style buffet combos for groups of all sizes",
        "Full and half tray options for flexible group sizes",
        "Customizable menus — mix Italian, BBQ, and sides",
        "Hot and fresh delivery throughout Rochester",
        "Authentic homemade dishes your guests will love",
        "Platters and extras: antipasto, fruit, and desserts",
        "Stress-free planning — we handle everything",
      ]}
      ctaText="Plan Your Grad Party"
      extraDescription="Celebrate their big achievement without the stress of cooking for a crowd. Our family-style buffet combos are designed for graduation parties of any size — from intimate backyard gatherings to large venue celebrations. Order ahead and we'll have everything ready."
      popularItems={["Buffet Option Two (2 Meats + 1 Pasta + 1 Side)", "Chicken Parm w/ Fettuccine Alfredo", "BBQ Chicken & Mac and Cheese", "Fruit Tray", "Brownie Tray", "Veggie Platter"]}
      faqs={[
        {
          question: "When should I order catering for a graduation party?",
          answer: "We recommend placing your order at least 1–2 weeks before your graduation party, especially during peak graduation season (May–June). The earlier you order, the better we can accommodate your preferred menu and delivery time.",
        },
        {
          question: "What's the most popular option for graduation parties?",
          answer: "Our family-style buffet combos are by far the most popular. Most grad party hosts choose a mix of 2 meats, 2–3 sides, salad, and rolls. Adding a dessert tray is a great finishing touch!",
        },
        {
          question: "Can I order for a small graduation gathering?",
          answer: "Absolutely! Our half trays feed 10–15 people, perfect for smaller gatherings. You can mix and match half trays to create a varied spread without over-ordering.",
        },
        {
          question: "Do you deliver on weekends during graduation season?",
          answer: "Yes! We deliver throughout the Rochester area on weekends, which is when most graduation parties happen. We recommend booking your delivery time slot early during peak season to secure your preferred window.",
        },
        {
          question: "Can I add appetizer platters and desserts to my grad party order?",
          answer: "Of course! We offer antipasto platters, fruit platters, cookie trays, cannoli trays, and more. These are great additions to round out your graduation celebration spread.",
        },
      ]}
    />
  );
}
