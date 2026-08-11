import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderCTA from "@/components/OrderCTA";

/* ── Buffet Combinations ── */
const BUFFET_TIERS = [
  {
    name: "Buffet Option One",
    includes: ["1 Meat of Your Choice", "1 Pasta of Your Choice", "1 Side of Your Choice", "Salad & Rolls"],
    popular: false,
  },
  {
    name: "Buffet Option Two",
    includes: ["2 Meats of Your Choice", "1 Pasta of Your Choice", "1 Side of Your Choice", "Salad & Rolls"],
    popular: true,
  },
  {
    name: "Buffet Option Three",
    includes: ["2 Meats of Your Choice", "2 Pastas of Your Choice", "1 Side of Your Choice", "Salad & Rolls"],
    popular: false,
  },
];

const SPECIALTY_COMBOS = [
  {
    name: "BBQ Special",
    includes: ["2 Meats of Your Choice", "2 Sides of Your Choice", "Cornbread or Rolls"],
  },
  {
    name: "Wedding Combination",
    includes: [
      "2 Meats of Your Choice",
      "3 Sides or Pasta Selections",
      "Salad & Rolls",
      "Includes rack set up and Sterno",
      "Stay on-site optional",
    ],
  },
];

/* ── Tray Menu Categories ── */
const APPETIZERS = {
  title: "Appetizers",
  items: [
    "Arancini Beef or Spinach",
    "Mini Buffalo Chicken Arancini",
    "Artichoke Dip w/ crackers",
    "Buffalo Wing Dip w/ chips",
    "Boneless or Traditional Wings",
    "Chicken Finger Platter",
    "Fried Shrimp w/ boom boom sauce",
    "Sampler (chicken fingers, pizza fingers, mozzarella sticks & wings)",
    "Sushi Burritos",
  ],
};

const PASTA_STANDARD = {
  title: "Pasta",
  items: [
    "Homemade Red Sauce",
    "Homemade Vodka Sauce",
    "Homemade Alfredo Sauce",
    "Penne w/ broccoli & mozzarella",
    "Eggplant Parmesan",
    "Artichoke French",
    "Mac and Cheese",
  ],
};

const PASTA_PREMIUM = {
  title: "Premium Pasta",
  items: [
    "Homemade Meat Sauce",
    "Baked Ziti",
    "Lasagna or Lasagna Roll Ups",
    "Stuffed Shells",
  ],
};

const PASTA_COMBOS = {
  title: "Pasta Combos",
  items: [
    "Chicken Parm w/ Fettuccine Alfredo",
    "Chicken French and Linguine",
    "Spaghetti w/ Meatballs & Sausage",
    "BBQ Chicken and Mac & Cheese",
  ],
};

const MEATS = {
  title: "Meats",
  items: [
    "Chicken French",
    "Chicken Parmesan or Cutlets",
    "Homemade Meatballs",
    "Baked Italian Chicken",
    "Sausage, Peppers, and Onions",
    "Sicilian Style Pulled Pork",
    "Sicilian Style Beef",
  ],
};

const SIDES = {
  title: "Sides",
  items: [
    "Roasted Mixed Vegetables",
    "Salt Potatoes",
    "Oven Roasted Potatoes",
    "Pasta Salad",
    "Macaroni Salad",
    "Potato Salad",
  ],
};

const PLATTERS = {
  title: "Platters",
  items: [
    "Antipasto",
    "Fruit Tray",
    "Veggie",
    "Cheese & Crackers Tray",
    "Caprese Salad",
    "Wrap Tray: Your choice of cold cuts and toppings",
  ],
};

const SPECIALTY_SALADS = {
  title: "Specialty Salads",
  items: [
    "House Salad",
    "Caesar Salad",
    "Spring Mix w/ Balsamic, Truffle Marinated Apples & Goat Cheese",
    "Cucumber & Tomato Salad",
  ],
};

const BBQ_OPTIONS = {
  title: "BBQ Options",
  items: [
    "BBQ Chicken",
    "BBQ Pulled Pork",
    "BBQ Pork Ribs",
    "Sausage, Peppers, and Onions",
  ],
};

const BBQ_SIDES = {
  title: "BBQ Side Options",
  items: [
    "Coleslaw",
    "Mac & Cheese",
    "Potato Salad",
    "Mac Salad",
    "Pasta Salad",
    "Baked Beans",
    "Salt Potatoes",
    "Cornbread",
    "Corn on the Cob",
  ],
};

const DESSERTS = [
  "Chocolate Chip Cookie Tray",
  "Brownie Tray",
  "Fried Dough",
  "Italian Cookie Tray",
];

/* ── Category Card Component ── */
function MenuCategory({ category }: { category: { title: string; items: string[] } }) {
  return (
    <Card className="border-0 shadow-lg bg-white h-full">
      <CardHeader className="pb-3">
        <CardTitle className="font-serif text-[#850100]">{category.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-1.5">
          {category.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-base text-[#444444]">
              <span className="text-[#850100] mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#850100] to-[#660000] text-white py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative text-center">
          <h1 className=" font-bold font-serif mb-4">Catering Menu</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our catering menu is available by the tray or try a family combo! Family-style combinations designed to simplify your planning.
          </p>
        </div>
      </section>

      {/* Intro with circular food photos */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <div className="flex-1 text-center md:text-left">
              <h2 className=" font-bold font-serif text-[#444444] mb-4">
                Our Full Catering Menu
              </h2>
              <p className="text-[#444444]/70 leading-relaxed mb-4">
                Let Battatini's handle the food so you can enjoy your event. Our catering menu offers a wide variety of homemade Italian dishes, BBQ favorites, appetizers, and more — all available by the tray or as part of our family-style buffet combos.
              </p>
              <p className="text-[#444444]/70 leading-relaxed mb-6">
                Full trays feed 30–40 people. Half trays feed 10–15 people. Every buffet combo includes salad and rolls. Customize your menu to fit your event perfectly!
              </p>
              <Link href="/order-catering">
                <Button variant="outline" className="border-[#850100] text-[#850100] hover:bg-[#850100]/5 font-semibold px-6">
                  <Phone className="h-4 w-4 mr-2" />
                  Order Now
                </Button>
              </Link>
            </div>
            <div className="shrink-0">
              <img
                src="/images/chicken-french-min.png"
                alt="Chicken French"
                className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Buffet Tiers */}
      <section className="py-16 md:py-20 bg-[#faf8f6]">
        <div className="container">
          <h2 className=" font-bold font-serif text-[#444444] text-center mb-4">
            Family-Style Buffet Combinations
          </h2>
          <p className="text-[#444444]/70 text-center max-w-2xl mx-auto mb-12">
            Choose your combination and build your catering menu. Every buffet includes salad and rolls.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {BUFFET_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={`relative overflow-hidden transition-all hover:shadow-xl ${
                  tier.popular
                    ? "border-2 border-[#850100] shadow-lg scale-[1.02]"
                    : "border border-gray-200 shadow-md"
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-[#850100] text-white text-sm font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="font-serif text-[#850100]">{tier.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2.5">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-base text-[#444444]">
                        <Check className="h-4 w-4 text-[#850100] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Combos */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className=" font-bold font-serif text-[#444444] text-center mb-12">
            Specialty Combos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {SPECIALTY_COMBOS.map((combo) => (
              <Card key={combo.name} className="border-0 shadow-lg bg-white">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="font-serif text-[#850100]">{combo.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2.5">
                    {combo.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-base text-[#444444]">
                        <Check className="h-4 w-4 text-[#850100] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Tray sizes info */}
          <div className="flex justify-center mt-8 max-w-3xl mx-auto">
            <Card className="border-0 shadow-md bg-[#faf8f6] w-full max-w-md">
              <CardContent className="py-5 text-center">
                <p className="font-serif font-bold text-[#850100]">Tray Sizes</p>
                <p className="text-[#444444] text-base mt-1">Full Tray: feeds 30–40 people</p>
                <p className="text-[#444444] text-base">Half Tray: feeds 10–15 people</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Select Menu Options — Meats & Appetizers */}
      <section className="py-16 md:py-20 bg-[#faf8f6]">
        <div className="container">
          <h2 className=" font-bold font-serif text-[#444444] text-center mb-4">
            Select Menu Options
          </h2>
          <p className="text-[#444444]/70 text-center max-w-2xl mx-auto mb-12">
            Build your perfect menu from our selection of meats, pastas, sides, and more — all available by the tray.
          </p>

          {/* Meats & Appetizers */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MenuCategory category={MEATS} />
              <MenuCategory category={APPETIZERS} />
            </div>
          </div>

          {/* Pasta & Combos */}
          <h3 className="text-2xl font-bold font-serif text-[#444444] text-center mb-8">
            Pasta & Combinations
          </h3>
          <div className="max-w-5xl mx-auto mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MenuCategory category={PASTA_STANDARD} />
              <MenuCategory category={PASTA_PREMIUM} />
              <MenuCategory category={PASTA_COMBOS} />
            </div>
          </div>

          {/* Sides, Salads, Platters */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MenuCategory category={SIDES} />
              <MenuCategory category={SPECIALTY_SALADS} />
              <MenuCategory category={PLATTERS} />
            </div>
          </div>

          {/* BBQ */}
          <h3 className="text-2xl font-bold font-serif text-[#444444] text-center mb-8">
            BBQ Catering
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MenuCategory category={BBQ_OPTIONS} />
              <MenuCategory category={BBQ_SIDES} />
            </div>
          </div>
        </div>
      </section>

      {/* Dessert Trays — Own Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container text-center">
          <h2 className=" font-bold font-serif text-[#444444] mb-4">
            Dessert Trays
          </h2>
          <p className="text-[#444444]/70 max-w-2xl mx-auto mb-10">
            Finish your event on a sweet note with our homemade dessert trays.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {DESSERTS.map((dessert) => (
              <Card key={dessert} className="border-0 shadow-lg bg-[#faf8f6]">
                <CardContent className="py-6 text-center">
                  <p className="font-serif font-bold text-[#850100]">{dessert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full Catering Menu Images — Stacked 1/1 */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#850100] to-[#660000] text-white">
        <div className="container text-center">
          <h2 className=" font-bold font-serif mb-4">Full Catering Menu</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10">
            View or download our complete catering menu.
          </p>
          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            <div className="block rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="/images/catering-in-rochester-ny.jpg"
                alt="Battatini's Family Style Buffets Menu - Front"
                className="w-full h-auto"
              />
            </div>
            <div className="block rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="/images/menu-detail.jpg"
                alt="Battatini's Full Catering Menu - Tray Options"
                className="w-full h-auto"
              />
            </div>
          </div>
          <Link href="/order-catering" className="inline-block mt-8">
            <Button size="lg" className="bg-white text-[#850100] hover:bg-white/90 font-bold px-8">
              <Phone className="h-4 w-4 mr-2" />
              Ready to Order? Contact Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Bottom CTA — Phone & Inquiry only */}
      <section className="py-12 bg-white text-center">
        <div className="container space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#444444]">Ready to Order?</h2>
          <p className="text-[#444444]/70">Give us a call or submit an inquiry to get started.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:5855443663">
              <Button size="lg" className="bg-[#850100] hover:bg-[#660000] text-white font-bold px-8">
                <Phone className="h-4 w-4 mr-2" />
                585-544-FOOD (3663)
              </Button>
            </a>
            <Link href="/order-catering">
              <Button size="lg" variant="outline" className="border-2 border-[#850100] text-[#850100] hover:bg-[#850100]/5 font-bold px-8">
                Submit Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <OrderCTA />
      <Footer />
    </div>
  );
}
