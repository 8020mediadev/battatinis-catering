import { useState } from "react";
import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";

const LOGO_URL = "/images/logo-outline.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/thursday-tray-day", label: "Tray Day" },
  { href: "/order-catering", label: "Order Now" },
];

const SERVICE_LINKS = [
  { href: "/services/corporate", label: "Corporate Events" },
  { href: "/services/parties", label: "Parties" },
  { href: "/services/weddings", label: "Weddings" },
  { href: "/services/bbq", label: "BBQ Catering" },
  { href: "/services/graduation", label: "Graduation" },
  { href: "/services/holiday", label: "Holiday" },
  { href: "/services/sympathy", label: "Sympathy" },
];

const MOBILE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { href: "/services/corporate", label: "Corporate Events" },
  { href: "/services/parties", label: "Parties" },
  { href: "/services/weddings", label: "Weddings" },
  { href: "/services/bbq", label: "BBQ Catering" },
  { href: "/services/graduation", label: "Graduation" },
  { href: "/services/holiday", label: "Holiday" },
  { href: "/services/sympathy", label: "Sympathy" },
  { href: "/thursday-tray-day", label: "Thursday Tray Day" },
  { href: "/order-catering", label: "Order Now" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#850100] to-[#660000] shadow-lg">
      <div className="container flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src={LOGO_URL}
            alt="Battatini's Family Style Catering"
            className="h-16 md:h-20 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isOrderNow = link.label === "Order Now";
            const isActive = location === link.href;
            if (link.label === "About") {
              return (
                <React.Fragment key="services-group">
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {/* Services dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`px-3 py-2 text-base font-medium rounded-md transition-colors flex items-center gap-1 ${
                        location.startsWith("/services") ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Services <ChevronDown className="h-4 w-4" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl py-2 min-w-[200px] z-50">
                        {SERVICE_LINKS.map((sl) => (
                          <Link
                            key={sl.href}
                            href={sl.href}
                            className="block px-4 py-2 text-[#444444] hover:bg-[#850100]/5 hover:text-[#850100] transition-colors font-medium"
                          >
                            {sl.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </React.Fragment>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isOrderNow
                    ? "!bg-white !text-[#850100] hover:!bg-white/90 font-bold ml-2 px-4"
                    : isActive
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Phone + Mobile menu */}
        <div className="flex items-center gap-3">
          <a
            href="tel:5855443663"
            className="hidden sm:flex items-center gap-1.5 text-white text-base font-medium hover:text-white/80 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>585-544-FOOD</span>
          </a>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-gradient-to-b from-[#850100] to-[#660000] border-none p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <img src={LOGO_URL} alt="Battatini's" className="h-14 w-auto" />
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col p-4 gap-1">
                  {MOBILE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        location === link.href
                          ? "bg-white/20 text-white"
                          : "text-white/90 hover:bg-white/10"
                      } ${link.label === "Order Now" ? "bg-white text-[#850100] hover:bg-white/90 font-bold mt-2 text-center" : ""}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t border-white/10">
                  <a
                    href="tel:5855443663"
                    className="flex items-center justify-center gap-2 text-white font-semibold py-3"
                  >
                    <Phone className="h-5 w-5" />
                    585-544-FOOD (3663)
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
