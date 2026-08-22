import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CalendarDays, Check, ChefHat, Clock, MapPin, Phone, Star, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const CHICKEN_NIGHT_OPTIONS = [
  {
    name: "Chicken Parm w/ Penne",
    description:
      "Breaded chicken parmesan with penne pasta, homemade red sauce, and melted mozzarella.",
    image: "/images/chicken-parmesan.webp",
    alt: "Catering tray of chicken parmesan topped with melted mozzarella and fresh parsley",
  },
  {
    name: "Chicken French w/ Linguine",
    description:
      "Tender egg-battered chicken in a buttery lemon-wine sauce, served with linguine.",
    image: "/images/chicken-french.webp",
    alt: "Tray of Chicken French with lemon in a light wine sauce from Battatini's Catering",
  },
  {
    name: "Chicken Cutlets w/ Ziti",
    description:
      "Crispy breaded chicken cutlets paired with a generous half tray of baked ziti.",
    image: "/images/baked-ziti-pasta-catering.webp",
    alt: "Full catering tray of baked ziti topped with melted mozzarella and homemade red sauce",
  },
];

export default function ChickenNight() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Photo hero -- real Battatini's chicken, not generic stock imagery. */}
      <section className="relative flex items-center min-h-[430px] md:min-h-[62vh] text-white overflow-hidden">
        <img
          src="/images/chicken-parmesan.webp"
          alt="Catering tray of chicken parmesan topped with melted mozzarella and fresh parsley"
          width={1200}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a0000]/80 via-[#660000]/60 to-[#4a0000]/88" />

        <div className="container relative max-w-5xl py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-base font-medium">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Every Tuesday · 3–8 PM
              </div>
              <div>
                <p className="text-white/85 font-semibold tracking-[0.18em] uppercase text-base mb-2">
                  Tuesday Special
                </p>
                <h1 className="font-bold font-serif leading-tight drop-shadow-lg">
                  Chicken Night
                </h1>
              </div>
              <p className="text-white/90 max-w-xl">
                A homemade half tray dinner for Tuesday night. Choose your favorite chicken and pasta combination for <strong>$50</strong> — delivered in Irondequoit only.
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
            </div>

            <aside className="rounded-2xl bg-white text-[#444444] shadow-2xl overflow-hidden text-left">
              <div className="bg-gradient-to-br from-[#850100] to-[#660000] text-white px-6 py-5">
                <p className="uppercase tracking-[0.16em] text-sm text-white/75 font-semibold">Tuesday Chicken Night</p>
                <div className="mt-1 flex items-end gap-2">
                  <span className="font-serif text-5xl font-bold">$50</span>
                  <span className="pb-1 text-white/80">per half tray</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-3 items-start">
                  <Clock className="h-5 w-5 text-[#850100] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-bold">Tuesdays, 3–8 PM</p>
                    <p className="text-[#444444]/70">A ready-made dinner option for your Tuesday evening.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start border-t border-[#e8e0d8] pt-4">
                  <Truck className="h-5 w-5 text-[#850100] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-bold">Irondequoit delivery only</p>
                    <p className="text-[#444444]/70">Please call to place your Chicken Night order.</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* The three exact choices supplied for Chicken Night. */}
      <section className="py-16 md:py-20 bg-[#faf8f6]">
        <div className="container max-w-6xl">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-[#850100]/10 rounded-full px-4 py-2 text-base font-medium text-[#850100] mb-4">
                <ChefHat className="h-4 w-4" aria-hidden="true" />
                Three Tuesday Choices
              </div>
              <h2 className="font-serif font-bold text-[#444444]">What&apos;s for Dinner?</h2>
              <p className="text-[#444444]/70 mt-3">
                All Chicken Night meals are <strong className="text-[#850100]">$50 per half tray</strong>. Pick one of the three family favorites below.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHICKEN_NIGHT_OPTIONS.map((option, index) => (
              <ScrollReveal key={option.name} delay={index * 90} className="h-full">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8e0d8] h-full flex flex-col hover:shadow-lg transition-shadow">
                  <img
                    src={option.image}
                    alt={option.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-serif font-bold text-[#444444]">{option.name}</h3>
                      <span className="shrink-0 rounded-full bg-[#850100]/10 px-3 py-1 text-[#850100] font-bold text-base">
                        $50
                      </span>
                    </div>
                    <p className="text-[#444444]/70 leading-relaxed">{option.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery terms are deliberately direct and easy to spot. */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-center rounded-2xl border border-[#e8e0d8] bg-[#faf8f6] p-7 md:p-9">
              <div className="h-14 w-14 rounded-full bg-[#850100] text-white flex items-center justify-center mx-auto md:mx-0">
                <MapPin className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-serif font-bold text-[#444444]">Irondequoit Delivery Only</h2>
                <p className="text-[#444444]/70 mt-2">
                  Chicken Night is available for delivery in Irondequoit on Tuesdays from 3–8 PM. Call us directly to order your half tray.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-[#850100] to-[#660000] text-white">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-serif font-bold">Make Tuesday Dinner Easy</h2>
            <p className="text-white/80 mt-3 max-w-xl mx-auto">
              Call Battatini&apos;s to order a $50 Chicken Night half tray for Tuesday delivery in Irondequoit.
            </p>
            <a href="tel:5855443663" className="inline-flex mt-7">
              <Button size="lg" className="bg-white text-[#850100] hover:bg-white/90 font-bold px-9 py-6 rounded-lg shadow-lg">
                <Phone className="h-5 w-5 mr-2" />
                585-544-FOOD (3663)
              </Button>
            </a>
            <div className="mt-6 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
              <span className="text-white/75 ml-2">Five-star Google rating</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
