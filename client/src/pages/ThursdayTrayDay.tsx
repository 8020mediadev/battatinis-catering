import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Star, ChefHat, UtensilsCrossed, CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const TRAY_OPTIONS = [
  {
    name: "Chicken Parm w/ Fettuccine Alfredo",
    desc: "Crispy breaded chicken cutlets topped with marinara and melted mozzarella, paired with creamy fettuccine alfredo.",
  },
  {
    name: "Chicken French & Linguine",
    desc: "Tender egg-battered chicken in a buttery lemon-wine sauce, served alongside fresh linguine pasta.",
  },
  {
    name: "Spaghetti w/ Meatballs & Sausage",
    desc: "Classic homemade spaghetti loaded with our signature meatballs and Italian sausage in rich marinara sauce.",
  },
  {
    name: "BBQ Chicken & Mac and Cheese",
    desc: "Tender BBQ-glazed chicken paired with our rich, creamy homemade mac and cheese — a crowd favorite.",
  },
  {
    name: "Batta BING Plate Trays",
    desc: "Our famous Batta BING plates — generous portions of your favorite Italian combos, ready to serve.",
  },
];

const HOW_IT_WORKS = [
  { icon: Phone, title: "Call Ahead", desc: "Call 585-544-3663 to place your Thursday Tray Day order in advance." },
  { icon: CalendarDays, title: "Every Thursday", desc: "Trays are available every Thursday — half trays and full trays." },
  { icon: MapPin, title: "Pick Up Fresh", desc: "Stop in at 2305 Portland Ave, Rochester, NY to grab your trays." },
];

export default function ThursdayTrayDay() {
  // Load Elfsight script for IG feed
  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#850100] to-[#5a0000] text-white py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-base font-medium">
                <CalendarDays className="h-4 w-4" />
                Every Thursday
              </div>
              <h1 className=" font-bold font-serif leading-tight">
                Thursday<br />Tray Day!
              </h1>
              <p className="text-white/80 max-w-lg">
                Fresh, homemade Italian trays — half &amp; full sizes — ready for pickup every Thursday at our Portland Ave location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="tel:5855443663">
                  <Button size="lg" className="bg-white text-[#850100] hover:bg-white/90 font-bold text-base px-8 py-6 rounded-lg shadow-lg w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    Call to Order
                  </Button>
                </a>
                <Link href="/menu">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-base px-8 py-6 rounded-lg w-full sm:w-auto">
                    View Full Menu
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-1 justify-center lg:justify-start pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-white/70 text-base ml-2">Five star Google rating!</span>
              </div>
            </div>

            {/* Right: Graphic */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/thursday-tray-day.webp"
                alt="Thursday Tray Day at Battatini's Family Style Catering"
                className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Available */}
      <section className="py-14 md:py-20 bg-[#faf8f6]">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#850100]/10 rounded-full px-4 py-2 text-base font-medium text-[#850100] mb-4">
                <UtensilsCrossed className="h-4 w-4" />
                Fresh Every Thursday
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#444444]">
                What's on the Tray?
              </h2>
              <p className="text-[#444444]/60 mt-2 max-w-lg mx-auto">
                Homemade Italian combos, generous portions, ready for pickup. Half trays feed 10–15, full trays feed 30–40.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TRAY_OPTIONS.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 border border-[#e8e0d8] shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#850100]/10 flex items-center justify-center shrink-0 mt-1">
                      <ChefHat className="h-5 w-5 text-[#850100]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#444444] mb-1">{item.name}</h3>
                      <p className="text-[#444444]/60 text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <p className="text-center text-[#444444]/50 text-base mt-8 italic">
              &amp; More! Ask about our full menu of trays when you call.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[#850100] to-[#660000] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold font-serif">
                How It Works
              </h2>
              <p className="text-white/70 mt-2">
                Three simple steps to your Thursday feast.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100} className="h-full">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 h-full flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="h-6 w-6 text-white" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-white text-[#850100] rounded-full text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-white/80 text-base leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tray Sizes Info */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#444444]">
                Tray Sizes
              </h2>
              <p className="text-[#444444]/60 mt-2">
                Choose the size that fits your group.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={0}>
              <div className="bg-[#faf8f6] rounded-xl p-8 border border-[#e8e0d8] text-center h-full">
                <div className="w-16 h-16 rounded-full bg-[#850100]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#850100] font-bold">½</span>
                </div>
                <h3 className="text-xl font-bold text-[#444444] mb-2">Half Tray</h3>
                <p className="text-[#850100] font-bold mb-2">Feeds 10–15 People</p>
                <p className="text-[#444444]/60 text-base">
                  Perfect for small office lunches, family dinners, or intimate gatherings.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-[#faf8f6] rounded-xl p-8 border border-[#e8e0d8] text-center h-full">
                <div className="w-16 h-16 rounded-full bg-[#850100]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#850100] font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#444444] mb-2">Full Tray</h3>
                <p className="text-[#850100] font-bold mb-2">Feeds 30–40 People</p>
                <p className="text-[#444444]/60 text-base">
                  Great for parties, corporate events, game days, and large family gatherings.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-14 md:py-20 bg-[#faf8f6]">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#444444]">
                See What We're Cooking
              </h2>
              <p className="text-[#444444]/60 mt-2">
                Follow us on Instagram for Thursday Tray Day updates and more.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="elfsight-app-ddbfe1bb-2ff3-4f89-95a7-c916fa2576a7" data-elfsight-app-lazy />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[#850100] to-[#5a0000] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative max-w-3xl text-center space-y-6">
          <ScrollReveal>
            <h2 className=" font-bold font-serif">
              Stop In This Thursday!
            </h2>
            <p className="text-white/80 max-w-xl mx-auto">
              Fresh, generous, ready for pickup. Call ahead to reserve your trays.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:5855443663">
                <Button size="lg" className="bg-white text-[#850100] hover:bg-white/90 font-bold px-10 py-6 rounded-lg shadow-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  585-544-FOOD (3663)
                </Button>
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex items-center justify-center gap-2 text-white/70 text-base pt-4">
              <MapPin className="h-4 w-4" />
              <span>2305 Portland Ave, Rochester, NY 14617</span>
            </div>
            <div className="flex items-center gap-1 justify-center pt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white/70 text-base ml-2">Five star Google rating!</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
