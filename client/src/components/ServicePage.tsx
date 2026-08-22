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

interface Price {
  /** Headline figure, e.g. "$22" */
  amount: string;
  /** Unit shown next to the figure, e.g. "per person" */
  unit: string;
  /** What the price covers, one line per bullet */
  includes: string[];
  /** Optional qualifier shown under the bullets */
  note?: string;
}

interface Step {
  title: string;
  desc: string;
}

interface Photo {
  src: string;
  alt: string;
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
  /** Optional headline price surfaced in the sidebar. */
  price?: Price;
  /** Optional 3-step "how it works" band, unique per service. */
  steps?: Step[];
  /** Photos for the strip that replaced the Instagram embed. */
  photos?: Photo[];
  /** Short trust line rendered under the hero subtitle. */
  heroNote?: string;
}

/**
 * A compact strip of real Battatini's photography that links out to the
 * Instagram profile.
 *
 * This replaces the Elfsight embed that previously sat on every service page.
 * Measured on the live site, that widget rendered a 1,546px tall section --
 * 28.6% of the entire page height -- while displaying mostly empty space, and
 * injected ~121KB of third-party HTML per page load. The live feed is still
 * embedded on the homepage, Tray Day and the order page; the service pages now
 * show curated photos instead, which are crawlable for image search and cost
 * no third-party request.
 */
function PhotoStrip({ photos }: { photos: { src: string; alt: string }[] }) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-serif font-bold text-[#444444]">
              Straight From Our Kitchen
            </h2>
            <p className="text-[#444444]/70 mt-2">
              Real trays from real Battatini's events — see more on{" "}
              <a
                href="https://www.instagram.com/battatiniscatering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#850100] font-semibold underline underline-offset-2 hover:text-[#660000]"
              >
                Instagram
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
        {/*
          One ScrollReveal around the whole grid rather than one per tile.
          Wrapping each tile individually meant every image sat at opacity 0
          behind its own IntersectionObserver; combined with loading="lazy",
          any tile the observer failed to mark visible never requested its
          image at all, leaving a silently blank square.
        */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="relative overflow-hidden rounded-xl aspect-square group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
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
  price,
  steps,
  photos,
  heroNote,
}: ServicePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <FaqSchema faqs={faqs} />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#850100] to-[#660000] text-white relative overflow-hidden flex items-center min-h-[420px] md:min-h-[62vh] py-20 md:py-24">
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
            {/*
              Overlay lightened from 75/60/80 so the photograph reads as the
              subject rather than a texture. Contrast for the headline is held
              by the drop shadow and the darker foot of the gradient.
            */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#850100]/60 via-[#850100]/45 to-[#660000]/75" />
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
          {/* Breadcrumb: orients the visitor and adds an internal link back up
              the hierarchy, which also helps Google understand site structure. */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center justify-center gap-2 text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                /
              </li>
              <li className="text-white/90 font-medium">{title}</li>
            </ol>
          </nav>
          <h1 className="font-bold font-serif mb-4 drop-shadow-lg">{title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">{subtitle}</p>
          {heroNote && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-white backdrop-blur-sm ring-1 ring-white/25">
              <Star className="h-4 w-4 shrink-0 fill-current" aria-hidden="true" />
              {heroNote}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        {/*
          Widened from max-w-4xl to max-w-6xl and the split changed from 3+2 to
          8+4. Previously the body column measured just 480px on a 1280px
          viewport -- 37.5% of the screen -- which read as a narrow ribbon of
          text with large dead margins. It now sits near 700px, a comfortable
          measure of roughly 75 characters.
        */}
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-serif font-bold text-[#444444]">{seoHeader}</h2>
              <p className="text-[#444444] leading-relaxed">{description}</p>
              {extraDescription && (
                <p className="text-[#444444] leading-relaxed">{extraDescription}</p>
              )}

              <h3 className="font-serif font-bold text-[#444444] pt-2">What We Offer</h3>
              {/* Two-column card grid rather than a single-column check list:
                  same content, about half the vertical space, far more presence. */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-lg border border-gray-100 bg-[#faf8f6] p-4 text-[#444444]"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#850100]/10">
                      <Check className="h-4 w-4 text-[#850100]" aria-hidden="true" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {popularItems && popularItems.length > 0 && (
                <>
                  <h3 className="font-serif font-bold text-[#444444] pt-4">
                    Popular Menu Items for This Event
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {popularItems.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-[#850100]/20 bg-white px-4 py-2 text-[#444444]"
                      >
                        <Utensils className="h-4 w-4 text-[#850100] shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-4">
                {/* Price card: the headline figure was previously buried in a
                    paragraph, despite being a primary decision factor. */}
                {price && (
                  <div className="rounded-xl bg-gradient-to-br from-[#850100] to-[#660000] p-6 text-white shadow-md">
                    <p className="text-white/75 uppercase tracking-widest text-sm font-semibold">
                      Starting at
                    </p>
                    <p className="mt-1 flex items-baseline gap-2">
                      <span className="font-serif font-bold text-4xl leading-none">
                        {price.amount}
                      </span>
                      <span className="text-white/85">{price.unit}</span>
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-white/20 pt-4">
                      {price.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2 text-white/90">
                          <Check className="h-4 w-4 shrink-0 mt-1" aria-hidden="true" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                    {price.note && (
                      <p className="mt-3 text-sm text-white/70">{price.note}</p>
                    )}
                  </div>
                )}

                <div className="bg-[#faf8f6] rounded-xl p-6 space-y-5 border border-gray-100">
                  <h3 className="font-serif font-bold text-[#444444] text-center">
                    Ready to Get Started?
                  </h3>
                  <p className="text-[#444444]/70 text-center">
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
                    <p className="text-[#444444]/60 mb-2">Or call us directly</p>
                    <a
                      href="tel:5855443663"
                      className="inline-flex items-center gap-2 text-[#850100] font-bold hover:text-[#660000] transition-colors"
                    >
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      585-544-FOOD (3663)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works: a short, service-specific band that breaks up the
          repetition between the seven otherwise identical service pages. */}
      {steps && steps.length > 0 && (
        <section className="py-14 md:py-16 bg-[#850100] text-white">
          <div className="container max-w-6xl">
            <ScrollReveal>
              <h2 className="font-serif font-bold text-center mb-10">How It Works</h2>
            </ScrollReveal>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 90}>
                  <li className="relative rounded-xl bg-white/10 p-6 ring-1 ring-white/15 h-full">
                    <span
                      className="font-serif font-bold text-3xl text-white/35 leading-none"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif font-bold mt-2 mb-1">{step.title}</h3>
                    <p className="text-white/85 leading-relaxed">{step.desc}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Why Choose Battatini's --- left-aligned with a rule and inline icon,
          deliberately different from the centred circle-icon cards used on the
          About page, so the site's card vocabulary is not identical everywhere. */}
      <section className="py-16 md:py-20 bg-[#faf8f6]">
        <div className="container max-w-6xl">
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
                <div className="bg-white rounded-xl border-t-4 border-[#850100] p-6 shadow-sm h-full">
                  <item.icon className="h-7 w-7 text-[#850100] mb-3" aria-hidden="true" />
                  <h3 className="font-serif font-bold text-[#444444] mb-2">{item.title}</h3>
                  <p className="text-[#444444]/70 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip (replaced the Elfsight Instagram embed) */}
      {photos && photos.length > 0 && <PhotoStrip photos={photos} />}

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
