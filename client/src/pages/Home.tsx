import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Phone,
  MapPin,
  ChefHat,
  Users,
  Truck,
  DollarSign,
  CalendarDays,
  Utensils,
  Briefcase,
  PartyPopper,
  Heart,
  Flame,
  GraduationCap,
  Sparkles,
  Star,
  Award,
  Clock,
  X,
  Sun,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderCTA from "@/components/OrderCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { useIsMobile } from "@/hooks/useMobile";

/* ─── Data ─── */

const BENEFITS = [
  {
    icon: ChefHat,
    title: "Handmade & Authentic",
    description:
      "Every dish is prepared fresh with authentic Italian family recipes passed down through generations.",
  },
  {
    icon: Users,
    title: "Any Size Event",
    description:
      "From intimate gatherings to large corporate events, we cater to groups of all sizes with ease.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Family-style buffet combos at unbeatable prices. Premium quality without the premium price.",
  },
  {
    icon: Truck,
    title: "Hot & Fresh Delivery",
    description:
      "We handle the prepping, cooking, and delivering — everything arrives hot and ready to serve.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Options",
    description:
      "Customizable menus with full and half tray options, plus additional platters and desserts.",
  },
  {
    icon: Utensils,
    title: "10+ Years Experience",
    description:
      "A decade of trusted family-owned catering experience serving the Rochester community.",
  },
];

const SERVICES: { title: string; href: string; desc: string; icon: LucideIcon; image?: string }[] = [
  { title: "Corporate Events", href: "/services/corporate", desc: "Office meetings, conferences, and company events.", icon: Briefcase, image: "/images/corporate-catering-rochester-ny.webp" },
  { title: "Parties", href: "/services/parties", desc: "Birthdays, retirements, graduations, and celebrations.", icon: PartyPopper, image: "/images/party-catering-rochester-ny.webp" },
  { title: "Weddings", href: "/services/weddings", desc: "Make your big day unforgettable with family-style feasts.", icon: Heart, image: "/images/wedding-catering-rochester-ny.webp" },
  { title: "BBQ Catering", href: "/services/bbq", desc: "Smoky ribs, pulled pork, and hearty BBQ sides.", icon: Flame, image: "/images/bbq-catering-rochester-ny.webp" },
  { title: "Graduation Catering", href: "/services/graduation", desc: "Celebrate their big achievement with a family-style feast.", icon: GraduationCap, image: "/images/graduation-party-catering-rochester-ny.webp" },
  { title: "Any Event, We Cater It", href: "/order-catering", desc: "Have something special in mind? Tell us about your event and we'll make it happen.", icon: Sparkles },
];

const TRUST_STATS = [
  { value: "500+", label: "Events Catered", icon: Award },
  { value: "10+", label: "Years Experience", icon: Clock },
  { value: "5.0", label: "Google Rating", icon: Star },
  { value: "Rochester", label: "NY Proud", icon: MapPin },
];

const FAQS = [
  {
    q: "How far in advance should I place my order?",
    a: "We recommend placing your order at least 48 hours in advance for standard catering. For larger events (50+ guests) or weddings, we suggest booking 1-2 weeks ahead to ensure availability.",
  },
  {
    q: "Do you deliver the food?",
    a: "Yes! We deliver hot and fresh to your location throughout the greater Rochester, NY area. Delivery is included for most orders — just give us a call to confirm your area.",
  },
  {
    q: "What is the minimum order size?",
    a: "Our full trays feed 30–40 people and half trays feed 10–15 people. We can accommodate events of any size, from small family gatherings to large corporate functions of 200+.",
  },
  {
    q: "Can I customize the menu for my event?",
    a: "Absolutely! We offer flexible menu options with full and half tray choices across Italian, BBQ, and specialty platters. Just let us know your preferences and dietary needs, and we'll create a custom menu for you.",
  },
  {
    q: "Do you provide serving equipment and utensils?",
    a: "Yes, we provide chafing dishes (Sterno setups) to keep your food warm, along with serving utensils. Plates, napkins, and cutlery can be arranged upon request.",
  },
  {
    q: "What are your most popular dishes?",
    a: "Our Chicken French, Baked Italian Chicken, and Pasta with Meat Sauce are customer favorites. For BBQ events, our ribs and pulled pork are always a hit. Check out our full menu for all options!",
  },
];

const YOUTUBE_VIDEO_ID = "sCd5LHn-jx0";

const SVG_PATTERN = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

/* ─── Component ─── */

export default function Home() {
  const playerRef = useRef<HTMLDivElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [promoDismissed, setPromoDismissed] = useState(false);
  const isMobile = useIsMobile();

  // Load Elfsight platform script
  useEffect(() => {
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Load YouTube IFrame API and create background player
  useEffect(() => {
    const createPlayer = () => {
      if (!playerRef.current) return;
      new (window as any).YT.Player(playerRef.current, {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          modestbranding: 1,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            const YT = (window as any).YT;
            if (event.data === YT.PlayerState.PLAYING) {
              setVideoPlaying(true);
            } else if (event.data === YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          },
          onError: () => {
            setVideoPlaying(false);
          },
        },
      });
    };

    if ((window as any).YT && (window as any).YT.Player) {
      createPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = createPlayer;
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ═══ Seasonal Promo Banner ═══ */}
      {!promoDismissed && (
        <div className="bg-gradient-to-r from-[#850100] via-[#9a0000] to-[#850100] text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: SVG_PATTERN }}
          />
          <div className="container relative flex items-center justify-center gap-3 py-3 text-base md:text-base">
            <Sun className="h-5 w-5 shrink-0 hidden sm:block" />
            <p className="font-medium text-center">
              <span className="font-bold">Summer Catering Season!</span>{" "}
              BBQ parties, backyard cookouts, and family gatherings — we cater it all.{" "}
              <Link href="/services/bbq" className="underline underline-offset-2 hover:text-white/80 font-bold">
                Learn More →
              </Link>
            </p>
            <button
              onClick={() => setPromoDismissed(true)}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Dismiss promotion"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* ═══ Hero Section with YouTube Video Background ═══ */}
      <section className="relative text-white overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[80vh] flex items-center">
        {/* Fallback gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#850100] via-[#750000] to-[#660000] transition-opacity duration-1000 ${
            videoPlaying ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Subtle pattern overlay on fallback */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            videoPlaying ? "opacity-0" : "opacity-[0.04]"
          }`}
          style={{ backgroundImage: SVG_PATTERN }}
        />
        {/* YouTube Video Background */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div
            className={`absolute top-1/2 left-1/2 transition-opacity duration-1000 ${
              videoPlaying ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: "max(177.78vh, 100vw)",
              height: "max(56.25vw, 100vh)",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div ref={playerRef} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />

        {/* Hero Content */}
        <div className="container relative z-[2] py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-white/70 uppercase tracking-widest text-base font-medium">
              Rochester, NY's Trusted Family Caterer
            </p>
            <h1 className=" font-bold font-serif leading-tight drop-shadow-lg">
              Bringing Family, Flavor, and Affordability to Every Event.
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto drop-shadow-md">
              Delicious homemade Italian cuisine, BBQ, and more — delivered hot and fresh for your next event. Family-style combos for groups of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/menu">
                <Button
                  size="lg"
                  className="bg-white text-[#850100] hover:bg-white/90 font-bold text-base px-8 py-6 rounded-lg shadow-lg"
                >
                  View Catering Menu
                </Button>
              </Link>
              <Link href="/order-catering">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-bold text-base px-8 py-6 rounded-lg"
                >
                  Start Your Order
                </Button>
              </Link>
            </div>
            <a
              href="tel:5855443663"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors pt-2"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">Or call us: 585-544-FOOD (3663)</span>
            </a>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-[1px] z-[3]">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
            <path d="M0 80V40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ═══ Trust Stats Bar ═══ */}
      <section className="bg-white -mt-[1px] relative z-10">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 py-8 md:py-0">
              {TRUST_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center justify-center gap-3 py-4 md:py-6 ${
                    i < TRUST_STATS.length - 1 ? "md:border-r md:border-[#850100]/10" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#850100]/10 flex items-center justify-center shrink-0">
                    <stat.icon className="h-5 w-5 text-[#850100]" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-[#850100] font-serif leading-none">
                      {stat.value}
                    </p>
                    <p className="text-sm md:text-base text-[#444444]/60 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Benefits Section — Redesigned with dark red background ═══ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#850100] via-[#750000] to-[#660000] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: SVG_PATTERN }}
        />
        <div className="container relative">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className=" font-bold font-serif mb-4 drop-shadow-sm">
                Why Rochester Chooses Battatini's
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We handle the heavy lifting so you can sit back, relax, and enjoy your event.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <ScrollReveal key={b.title} direction="up" delay={i * 100}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group h-full">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                      <b.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-white mb-1">
                        {b.title}
                      </h3>
                      <p className="text-white/70 text-base leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
            <path d="M0 60V30C360 0 720 60 1080 30C1260 15 1380 10 1440 10V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      <OrderCTA />

      {/* ═══ Services Section ═══ */}
      <section className="py-16 md:py-24 bg-[#faf8f6]">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className=" font-bold text-[#444444] mb-4">
                Catering Services For Any Event
              </h2>
              <p className="text-[#444444]/70 max-w-2xl mx-auto">
                From corporate lunches to dream weddings, we have you covered.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.href} direction="up" delay={i * 80}>
                <Link href={s.href}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer group overflow-hidden relative">
                    <CardContent className="p-6 flex flex-col h-full relative z-10">
                      {s.image && (
                        <>
                          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${s.image}")` }} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/85 group-hover:via-black/55 transition-all" />
                        </>
                      )}
                      <div className={`relative z-10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${s.image ? "bg-white/20" : "bg-[#850100]/10 group-hover:bg-[#850100]/20"} transition-colors`}>
                        <s.icon className={`h-6 w-6 ${s.image ? "text-white" : "text-[#850100]"}`} />
                      </div>
                      <h3 className={`relative z-10 font-serif font-bold mb-2 transition-colors ${s.image ? "text-white" : "text-[#850100] group-hover:text-[#660000]"}`}>
                        {s.title}
                      </h3>
                      <p className={`relative z-10 text-base flex-1 ${s.image ? "text-white/80" : "text-[#444444]/70"}`}>{s.desc}</p>
                      <span className={`relative z-10 text-base font-semibold mt-4 group-hover:underline ${s.image ? "text-white" : "text-[#850100]"}`}>
                        Learn More →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Food Gallery Section ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className=" font-bold text-[#444444] mb-4">
                A Taste of What We Offer
              </h2>
              <p className="text-[#444444]/70 max-w-2xl mx-auto">
                Homemade dishes prepared fresh for every event — from classic Italian favorites to seasonal platters.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                src: "/images/chicken-french.webp",
                label: "Chicken French",
                alt: "Tray of Chicken French with lemon in a light wine sauce from Battatini's Catering in Rochester, NY",
              },
              {
                src: "/images/baked-ziti-pasta-catering.webp",
                label: "Baked Ziti",
                alt: "Full catering tray of baked ziti topped with melted mozzarella and homemade red sauce",
              },
              {
                src: "/images/greens-and-beans.webp",
                label: "Greens and Beans",
                alt: "Tray of Rochester-style greens and beans made with escarole and white beans",
              },
              {
                src: "/images/chicken-parmesan.webp",
                label: "Chicken Parmesan",
                alt: "Catering tray of chicken parmesan topped with melted mozzarella and fresh parsley",
              },
              {
                src: "/images/baked-italian-chicken.webp",
                label: "Baked Italian Chicken",
                alt: "Tray of baked Italian chicken seasoned and roasted golden brown",
              },
              {
                src: "/images/homemade-meatballs.webp",
                label: "Homemade Meatballs",
                alt: "Full tray of homemade meatballs simmered in Battatini's marinara sauce",
              },
              {
                src: "/images/sicilian-pulled-pork.webp",
                label: "Sicilian Style Pulled Pork",
                alt: "Sicilian style pulled pork being served with tongs from a catering tray",
              },
              {
                src: "/images/wrap-tray-catering.webp",
                label: "Wrap Tray",
                alt: "Wrap tray with assorted turkey, ham, and veggie pinwheel wraps on a black platter",
              },
              {
                src: "/images/fruit-tray.webp",
                label: "Fruit Tray",
                alt: "Fresh fruit tray with watermelon, cantaloupe, strawberries, and grapes",
              },
            ].map((dish, i) => (
              <ScrollReveal key={dish.label} direction="up" delay={i * 80}>
                <div className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow">
                    <img
                      src={dish.src}
                      alt={dish.alt}
                      width={1200}
                      height={676}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="text-center text-[#444444]/80 italic mt-3 text-base md:text-base">
                    {dish.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ Section ═══ */}
      <section className="py-16 md:py-24 bg-[#faf8f6]">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className=" font-bold text-[#444444] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#444444]/70 max-w-2xl mx-auto">
                Everything you need to know about ordering from Battatini's.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {FAQS.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-white rounded-xl border border-[#850100]/10 px-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-base md:text-lg font-semibold text-[#444444] hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#444444]/70 text-base leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Reviews Section — Elfsight Google Reviews Widget ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className=" font-bold text-[#444444] mb-4">
                What Our Customers Say
              </h2>
              <p className="text-[#444444]/70 max-w-2xl mx-auto">
                Over 10 years of 5-star reviews from happy customers across Rochester.
              </p>
            </div>
          </ScrollReveal>
          <div className="elfsight-app-edb6ca26-9211-4f5a-b788-ce54f63fa749" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* ═══ Location Callout ═══ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#850100] to-[#660000] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: SVG_PATTERN }}
        />
        <div className="container relative text-center space-y-3">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-base font-medium mb-1">
              <MapPin className="h-4 w-4" />
              New Location
            </div>
            <h2 className=" font-bold font-serif mt-2">
              Visit Us at Our New Location
            </h2>
            <p className="text-xl text-white/90 font-medium">
              2305 Portland Ave, Rochester, NY 14617
            </p>
            <a
              href="tel:5855443663"
              className="inline-flex items-center gap-3 font-bold hover:text-white/80 transition-colors"
            >
              <Phone className="h-7 w-7" />
              585-544-FOOD (3663)
            </a>
            <div className="pt-2">
              <Link href="/order-catering">
                <Button
                  size="lg"
                  className="bg-white text-[#850100] hover:bg-white/90 font-bold text-base px-8 py-6 rounded-lg shadow-lg"
                >
                  Start Your Catering Order
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      {/* ═══ Sticky Mobile CTA ═══ */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#850100] to-[#660000] shadow-[0_-4px_20px_rgba(0,0,0,0.3)] safe-area-bottom">
          <div className="flex items-center gap-2 px-4 py-3">
            <a
              href="tel:5855443663"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-[#850100] font-bold py-3 rounded-lg text-base shadow-md active:scale-[0.98] transition-transform"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <Link href="/order-catering" className="flex-1">
              <button className="w-full flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-bold py-3 rounded-lg text-base active:scale-[0.98] transition-transform">
                <CalendarDays className="h-4 w-4" />
                Order Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
