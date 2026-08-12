import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Home as HomeIcon, UtensilsCrossed } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-br from-[#850100] to-[#660000] text-white flex-1 flex items-center py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative text-center max-w-2xl">
          <p className="font-serif font-bold text-white/40 text-6xl md:text-7xl mb-2 drop-shadow-lg">
            404
          </p>
          <h1 className="font-bold font-serif mb-4 drop-shadow-lg">
            We Couldn't Find That Page
          </h1>
          <p className="text-white/85 text-lg leading-relaxed mb-8 drop-shadow-md">
            The page you're looking for may have moved or no longer exists. But
            don't worry — the food is still here. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button className="bg-white text-[#850100] hover:bg-white/90 font-bold px-7 py-5 w-full sm:w-auto">
                <HomeIcon className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/menu">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-7 py-5 w-full sm:w-auto"
              >
                <UtensilsCrossed className="w-4 h-4 mr-2" />
                View Our Menu
              </Button>
            </Link>
          </div>
          <div className="mt-8 pt-6 border-t border-white/15">
            <p className="text-white/70 text-base mb-2">
              Ready to order? Give us a call.
            </p>
            <a
              href="tel:5855443663"
              className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-white/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              585-544-FOOD (3663)
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
