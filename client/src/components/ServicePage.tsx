import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Check, ChefHat, Users, Truck, Star, Utensils } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderCTA from "@/components/OrderCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { faqSchema } from "@/lib/schema";

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  seoHeader: string;
  description: string;
  features: string[];
  ctaText?: string;
  heroImage?: string;
  heroAlt?: string;
  faqs?: FAQ[];
  popularItems?: string[];
  extraDescription?: string;
}

function InstagramFeed() {
  useEffect(() => {
    // Load Elfsight platform script if not already loaded
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-serif font-bold text-[#444444]">
              Follow Us on Instagram
            </h2>
            <p className="text-[#444444]/70 mt-2">
              See what we've been cooking up lately
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div
            className="elfsight-app-ddbfe1bb-2ff3-4f89-95a7-c916fa2576a7"
            data-elfsight-app-lazy
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

/**
 * Publishes the page's FAQs as FAQPage structured data. Google and AI answer
 * engines lift these question/answer pairs directly, so they stay in sync with
 * the accordion rendered below.
 */
function FaqSchema({ faqs }: { faqs?: FAQ[] }) {
  useEffect(() => {
    if (!faqs || faqs.length === 0) return;

    const graph = faqSchema(faqs);
    if (!graph) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "battatinis-faq");
    script.textContent = JSON.stringify(graph);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [faqs]);

  return null;
}

export default function ServicePage({
  title,
  subtitle,
  seoHeader,
  description,
  features,
  ctaText = "Start Your Order",
  heroImage,
  heroAlt,
  faqs,
  popularItems,
  extraDescription,
}: ServicePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <FaqSchema faqs={faqs} />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#850100] to-[#660000] text-white py-24 md:py-32 relative overflow-hidden">
        {/* Background image with dark overlay */}
        {heroImage && (
          <>
            {/*
              Rendered as a real <img> rather than a CSS background so the
              photo carries alt text for screen readers and is discoverable
              by image search. aria-hidden is deliberately NOT set.
            */}
            <img
              src={heroImage}
              alt={heroAlt ?? ""}
              width={1800}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#850100]/75 via-[#850100]/60 to-[#660000]/80" />
          </>
        )}
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative text-center">
          <h1 className=" font-bold font-serif mb-4 drop-shadow-lg">{title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="font-serif font-bold text-[#444444]">{seoHeader}</h2>
              <p className="text-[#444444] leading-relaxed">{description}</p>
              {extraDescription && (
                <p className="text-[#444444] leading-relaxed">{extraDescription}</p>
              )}
              <h3 className="font-serif font-bold text-[#444444]">What We Offer</h3>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[#444444]">
                    <Check className="h-5 w-5 text-[#850100] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {popularItems && popularItems.length > 0 && (
                <>
                  <h3 className="font-serif font-bold text-[#444444] mt-8">Popular Menu Items for This Event</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {popularItems.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[#444444]">
                        <Utensils className="h-4 w-4 text-[#850100] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[#faf8f6] rounded-xl p-6 sticky top-24 space-y-6">
                <h3 className="font-serif font-bold text-[#444444] text-center">
                  Ready to Get Started?
                </h3>
                <p className="text-[#444444]/70 text-base text-center">
                  Contact us today to discuss your event and customize your perfect menu.
                </p>
                <Link href="/order-catering" className="block">
                  <Button className="w-full bg-[#850100] hover:bg-[#660000] text-white font-bold py-5">
                    {ctaText}
                  </Button>
                </Link>
                <Link href="/menu" className="block">
                  <Button variant="outline" className="w-full border-[#850100] text-[#850100] hover:bg-[#850100]/5 font-semibold">
                    View Full Menu
                  </Button>
                </Link>
                <div className="border-t border-gray-200 pt-4 text-center">
                  <p className="text-[#444444]/60 text-base mb-2">Or call us directly</p>
                  <a
                    href="tel:5855443663"
                    className="inline-flex items-center gap-2 text-[#850100] font-bold hover:text-[#660000] transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    585-544-FOOD (3663)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Battatini's */}
      <section className="py-16 md:py-20 bg-[#faf8f6]">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-serif font-bold text-[#444444]">
                Why Choose Battatini's?
              </h2>
              <p className="text-[#444444]/70 mt-2">
                Rochester families and businesses have trusted us for over a decade.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ChefHat, title: "Homemade Quality", desc: "Every dish made from scratch with authentic Italian family recipes." },
              { icon: Users, title: "Any Group Size", desc: "From intimate gatherings of 10 to large events of 300+ guests." },
              { icon: Truck, title: "Full-Service Delivery", desc: "We deliver, set up, and can stay on-site for your event." },
              { icon: Star, title: "5-Star Rated", desc: "Consistently rated 5 stars on Google by Rochester families." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm h-full flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#850100]/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-[#850100]" />
                  </div>
                  <h3 className="font-bold text-[#444444] mb-2">{item.title}</h3>
                  <p className="text-[#444444]/70 text-base leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 md:py-20 bg-[#faf8f6]">
          <div className="container max-w-3xl">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="font-serif font-bold text-[#444444]">
                  Frequently Asked Questions
                </h2>
                <p className="text-[#444444]/70 mt-2">
                  Common questions about our {title.toLowerCase()} services
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-white rounded-lg border border-gray-200 px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold text-[#444444] hover:text-[#850100] py-5 text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#444444]/80 leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>
      )}

      <OrderCTA />
      <Footer />
    </div>
  );
}
