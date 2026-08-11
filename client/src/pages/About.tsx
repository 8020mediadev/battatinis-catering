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

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#850100] to-[#660000] text-white py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative text-center">
          <h1 className="font-bold font-serif mb-4 drop-shadow-lg">About Battatini's</h1>
          <p className="text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Family-owned catering in Rochester, NY — bringing homemade Italian flavor to every event since 2014.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <ScrollReveal>
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
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-[#faf8f6]">
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
