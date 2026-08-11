import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2, Loader2, MapPin, Clock, Star, ChefHat, Users, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Event date is required"),
  message: z.string().optional(),
});

type InquiryForm = z.infer<typeof inquirySchema>;

const EVENT_TYPES = [
  "Corporate Event",
  "Wedding",
  "Party / Celebration",
  "BBQ Event",
  "Graduation",
  "Holiday Gathering",
  "Funeral / Memorial",
  "Other",
];

const WHY_CHOOSE = [
  { icon: ChefHat, title: "Homemade Quality", desc: "Every dish made from scratch with authentic Italian family recipes." },
  { icon: Users, title: "Any Group Size", desc: "From intimate gatherings of 10 to large events of 300+ guests." },
  { icon: Truck, title: "Full-Service Delivery", desc: "We deliver, set up, and can stay on-site for your event." },
  { icon: Star, title: "5-Star Rated", desc: "Consistently rated 5 stars on Google by Rochester families." },
];

export default function Inquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryForm) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("https://formspree.io/f/xvzdyodk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed. Please try again or call us directly.");
      setSubmitted(true);
      reset();
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong. Please call us at 585-544-FOOD.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Load Elfsight script for reviews widget
  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <section className="flex-1 flex items-center justify-center py-16 bg-[#faf8f6]">
          <div className="container max-w-lg text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold font-serif text-[#444444]">
              Thank You!
            </h1>
            <p className="text-[#444444]/70">
              Your catering inquiry has been submitted successfully. We will be in touch shortly to discuss your event. You should also receive a confirmation email.
            </p>
            <div className="pt-4 space-y-3">
              <p className="text-[#444444]/60 text-base">Need to reach us sooner?</p>
              <a
                href="tel:5855443663"
                className="inline-flex items-center gap-2 text-[#850100] font-bold hover:text-[#660000] transition-colors"
              >
                <Phone className="h-5 w-5" />
                585-544-FOOD (3663)
              </a>
            </div>
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="border-[#850100] text-[#850100] hover:bg-[#850100]/5"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#850100] to-[#660000] text-white py-12 md:py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative text-center">
          <h1 className="font-bold font-serif mb-3">Let's Plan Your Perfect Event</h1>
          <p className="text-white/90 font-medium mb-2">Rochester's trusted family-style caterer for over 10 years.</p>
          <p className="text-white/70 max-w-xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours to discuss your event.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-20 bg-[#faf8f6]">
        <div className="container max-w-2xl">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#444444] font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      {...register("name")}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#444444] font-medium">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#444444] font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(585) 555-0123"
                      {...register("phone")}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="text-[#444444] font-medium">
                      Event Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="eventDate"
                      type="date"
                      {...register("eventDate")}
                      className={errors.eventDate ? "border-red-500" : ""}
                    />
                    {errors.eventDate && (
                      <p className="text-red-500 text-sm">{errors.eventDate.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-[#444444] font-medium">
                    Event Type <span className="text-red-500">*</span>
                  </Label>
                  <Select onValueChange={(val) => setValue("eventType", val)}>
                    <SelectTrigger className={errors.eventType ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {EVENT_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.eventType && (
                    <p className="text-red-500 text-sm">{errors.eventType.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#444444] font-medium">
                    Message <span className="text-[#444444]/40">(optional)</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your event — guest count, preferred dishes, special requests..."
                    rows={4}
                    {...register("message")}
                  />
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-base">
                    {submitError}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#850100] hover:bg-[#660000] text-white font-bold py-6 text-base rounded-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Catering Inquiry"
                  )}
                </Button>

                <p className="text-center text-[#444444]/50 text-sm">
                  Or call us directly at{" "}
                  <a href="tel:5855443663" className="text-[#850100] font-medium hover:underline">
                    585-544-FOOD (3663)
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Battatini's */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#444444]">
                Why Choose Battatini's?
              </h2>
              <p className="text-[#444444]/60 mt-2 max-w-lg mx-auto">
                Rochester families and businesses have trusted us for over a decade.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="text-center p-6 rounded-xl bg-[#faf8f6] border border-[#e8e0d8]">
                  <div className="w-12 h-12 rounded-full bg-[#850100]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-[#850100]" />
                  </div>
                  <h3 className="font-bold text-[#444444] mb-2">{item.title}</h3>
                  <p className="text-[#444444]/60 text-base leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info & Contact */}
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
                Visit Us or Give Us a Call
              </h2>
              <p className="text-white/70 mt-2">
                We'd love to hear about your event. Reach out anytime!
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0} className="h-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Our Location</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  2305 Portland Ave<br />
                  Rochester, NY 14617
                </p>
                <a
                  href="https://maps.google.com/?q=2305+Portland+Ave+Rochester+NY+14617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-base text-white/90 underline underline-offset-2 hover:text-white transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <a
                  href="tel:5855443663"
                  className="text-white font-bold hover:text-white/80 transition-colors"
                >
                  585-544-FOOD
                </a>
                <p className="text-white/60 text-base mt-1">(585-544-3663)</p>
                <p className="text-white/70 text-base mt-3">
                  Call to place an order or<br />ask about our menu
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Order Info</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  We recommend ordering<br />
                  <span className="font-semibold text-white">at least 48 hours</span><br />
                  in advance for best availability.
                </p>
                <p className="text-white/60 text-base mt-3">
                  Last-minute? Call us —<br />we'll do our best!
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
                Follow Us on Instagram
              </h2>
              <p className="text-[#444444]/60 mt-2">
                See what we've been cooking up for Rochester events.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="elfsight-app-ddbfe1bb-2ff3-4f89-95a7-c916fa2576a7" data-elfsight-app-lazy />
          </ScrollReveal>
        </div>
      </section>

      {/* Google Reviews Widget */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#444444]">
                What Our Customers Say
              </h2>
              <p className="text-[#444444]/60 mt-2">
                Don't just take our word for it — hear from the families and businesses we've served.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah M.",
                  text: "Battatini's catered our wedding and it was absolutely incredible. The chicken french and baked ziti were a huge hit. Everyone raved about the food!",
                  event: "Wedding Reception",
                },
                {
                  name: "Mike D.",
                  text: "We use Battatini's for all our corporate lunches. The food is always fresh, hot, and delicious. Their family-style combos make ordering so easy.",
                  event: "Corporate Events",
                },
                {
                  name: "Lisa R.",
                  text: "Ordered the BBQ combo for my son's graduation party. The pulled pork and ribs were amazing. Great portions and great value. Will definitely order again!",
                  event: "Graduation Party",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="bg-[#faf8f6] rounded-xl p-6 border border-[#e8e0d8]"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-[#444444]/80 text-base leading-relaxed mb-4 italic">
                    "{review.text}"
                  </p>
                  <div className="border-t border-[#e8e0d8] pt-3">
                    <p className="font-bold text-[#444444] text-base">{review.name}</p>
                    <p className="text-[#444444]/50 text-sm">{review.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="text-center mt-8">
              <a
                href="https://g.co/kgs/battatinis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#850100] font-semibold hover:text-[#660000] transition-colors"
              >
                <Star className="h-4 w-4 fill-[#850100]" />
                See All Reviews on Google →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
