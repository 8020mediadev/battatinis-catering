import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Heart, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/*
        Photo hero, matching the seven service pages. This was previously a
        flat red band with no image, which made About the only main page
        without a photograph -- odd for the page whose whole job is to make
        the business feel like real people.
      */}
      <section className="relative flex items-center min-h-[380px] md:min-h-[52vh] text-white overflow-hidden">
        <img
          src="/images/sam-battatini-kitchen-rochester-ny.webp"
          alt="Sam plating breaded chicken cutlets into catering trays in the Battatini's kitchen on Portland Avenue in Rochester, NY"
          width={1600}
          height={1067}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a0000]/75 via-[#660000]/60 to-[#4a0000]/85" />
        <div className="container relative text-center py-16">
          <h1 className="font-bold font-serif mb-4 drop-shadow-lg">About Battatini's</h1>
          <p className="text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Family-owned catering in Rochester, NY — bringing homemade Italian flavor to every event since 2014.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-white">
            <Award className="h-4 w-4" aria-hidden="true" />
            Serving Rochester for over 10 years
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="space-y-6">
                <h2 className="font-serif font-bold text-[#444444]">Our Story</h2>
                <p className="text-[#444444] leading-relaxed">
                  Battatini's Family Style Catering was born from a simple belief: that great food brings people together. What started as a passion for cooking authentic Italian recipes for family and friends has grown into Rochester's trusted catering service for events of every size and occasion.
                </p>
                <p className="text-[#444444] leading-relaxed">
                  For over a decade, we've been serving the Rochester community with the same love and care that goes into a home-cooked family dinner. Every dish is made from scratch using recipes passed down through generations — from our signature Chicken French to our homemade pasta sauces and slow-smoked BBQ.
                </p>
                <p className="text-[#444444] leading-relaxed">
                  We believe catering should be stress-free. That's why we handle everything — from menu planning and preparation to hot delivery and setup. Whether you're feeding 10 people at an office lunch or 300 guests at a wedding reception, we bring the same dedication to quality and service every single time.
                </p>
              </div>
              <div className="space-y-6">
                <figure className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/images/sam-battatini-kitchen-rochester-ny.webp"
                    alt="Sam plating breaded chicken cutlets into catering trays in the Battatini's Catering kitchen in Rochester, NY"
                    width={1600}
                    height={1067}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="text-center text-[#444444]/70 italic text-base mt-3">
                    Every tray is prepped by hand in our Portland Ave kitchen.
                  </figcaption>
                </figure>
                <figure className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/images/homemade-sauce-battatinis-catering.webp"
                    alt="Large pot of Battatini's homemade red sauce simmering on the stove"
                    width={1400}
                    height={933}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="text-center text-[#444444]/70 italic text-base mt-3">
                    Our red sauce is made from scratch, never from a jar.
                  </figcaption>
                </figure>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Serving the community */}
      <section className="py-16 md:py-20 bg-[#faf8f6]">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <figure className="overflow-hidden rounded-2xl shadow-lg order-last lg:order-first">
                <img
                  src="/images/battatinis-catering-delivery-rochester-ny.webp"
                  alt="Stacked Battatini's Catering boxes and a fresh salad tray delivered to Eastridge in Rochester, NY"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </figure>
              <div className="space-y-6">
                <h2 className="font-serif font-bold text-[#444444]">Feeding Rochester, One Event at a Time</h2>
                <p className="text-[#444444] leading-relaxed">
                  From school lunches and office meetings to graduation parties, wedding receptions, and bereavement gatherings, we deliver hot, homemade food across Rochester and the surrounding towns — Irondequoit, Webster, Greece, Penfield, Brighton, and beyond.
                </p>
                <p className="text-[#444444] leading-relaxed">
                  Full trays feed 30 to 40 people and half trays feed 10 to 15, so whether it is a small team lunch or a hall full of guests, the food shows up ready to serve.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-serif font-bold text-[#444444]">What We Stand For</h2>
              <p className="text-[#444444]/70 mt-2">The values that guide everything we do.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Family First", desc: "We treat every customer like family. Your event is personal to us." },
              { icon: Award, title: "Quality Always", desc: "Fresh ingredients, homemade recipes, generous portions — every time." },
              { icon: Users, title: "Community Roots", desc: "Proudly serving Rochester, NY and the surrounding communities." },
              { icon: Clock, title: "Reliable Service", desc: "On time, hot, and exactly what you ordered. We don't cut corners." },
              { icon: MapPin, title: "Local & Proud", desc: "2305 Portland Ave — stop in Thursdays for our famous Tray Day." },
              { icon: Phone, title: "Always Available", desc: "Call us anytime at 585-544-FOOD. We're here to help plan your event." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm h-full">
                  <div className="w-14 h-14 rounded-full bg-[#850100]/10 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="h-6 w-6 text-[#850100]" />
                  </div>
                  <h3 className="font-bold text-[#444444] mb-2">{item.title}</h3>
                  <p className="text-[#444444]/70">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#850100] to-[#660000] text-white">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-serif font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-white/80 mb-8">
              Whether it's a corporate lunch, a wedding reception, or a Thursday Tray Day pickup — we'd love to feed your next event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/order-catering">
                <Button className="bg-white text-[#850100] hover:bg-white/90 font-bold px-8 py-5">
                  Start Your Order
                </Button>
              </Link>
              <a href="tel:5855443663">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 py-5">
                  <Phone className="h-4 w-4 mr-2" />
                  585-544-FOOD (3663)
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
