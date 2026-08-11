import ServicePage from "@/components/ServicePage";

export default function GraduationHoliday() {
  return (
    <ServicePage
      title="Graduation & Holiday Catering"
      subtitle="Celebrate Life's Milestones with Battatini's"
      seoHeader="Graduation & Holiday Catering in Rochester, NY"
      description="From graduation parties to holiday feasts, Battatini's makes every milestone celebration memorable with delicious family-style catering. Let us handle the cooking so you can focus on celebrating with the people who matter most. We offer special holiday menus for Easter, Thanksgiving, Christmas, and more."
      features={[
        "Graduation party catering for any class size",
        "Holiday dinner packages (Easter, Thanksgiving, Christmas)",
        "Customizable family-style buffet options",
        "Full and half tray options for flexible group sizes",
        "Buffet combos for groups of all sizes",
        "Hot and fresh delivery throughout Rochester",
        "Authentic Italian dishes your guests will love",
        "Stress-free planning — we handle everything",
      ]}
      ctaText="Plan Your Celebration"
    />
  );
}
