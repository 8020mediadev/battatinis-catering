import { useState, useRef, useEffect, useCallback } from "react";
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
  // Rendered as a button/dropdown below; the href is only an internal key.
  { href: "/more", label: "More" },
  { href: "/order-catering", label: "Order Now" },
];

const SERVICE_LINKS = [
  { href: "/services/corporate", label: "Corporate Events" },
  { href: "/services/parties", label: "Parties" },
  { href: "/services/weddings", label: "Weddings" },
  { href: "/services/bbq", label: "BBQ Catering" },
  { href: "/services/graduation", label: "Graduation" },
  { href: "/services/holiday", label: "Holiday" },
  { href: "/services/bereavements", label: "Bereavements" },
];

const MORE_LINKS = [
  { href: "/thursday-tray-day", label: "Thursday Tray Day", detail: "Fresh trays every Thursday" },
  { href: "/chicken-night", label: "Tuesday Chicken Night", detail: "$50 half trays · Irondequoit delivery" },
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
  { href: "/services/bereavements", label: "Bereavements" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  // Small grace period so a brief slip off the menu doesn't slam it shut.
  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
      setMoreOpen(false);
    }, 180);
  }, [cancelClose]);

  const openServices = useCallback(() => {
    cancelClose();
    setMoreOpen(false);
    setServicesOpen(true);
  }, [cancelClose]);

  const openMore = useCallback(() => {
    cancelClose();
    setServicesOpen(false);
    setMoreOpen(true);
  }, [cancelClose]);

  useEffect(() => cancelClose, [cancelClose]);

  // Close on navigation.
  useEffect(() => {
    setServicesOpen(false);
    setMoreOpen(false);
    cancelClose();
  }, [location, cancelClose]);

  // Close on Escape, and on any click or focus outside the menu.
  useEffect(() => {
    if (!servicesOpen && !moreOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMoreOpen(false);
        cancelClose();
      }
    };
    const onOutside = (e: Event) => {
      const target = e.target as Node;
      const insideServices = servicesRef.current?.contains(target);
      const insideMore = moreRef.current?.contains(target);
      if (!insideServices && !insideMore) {
        setServicesOpen(false);
        setMoreOpen(false);
        cancelClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("focusin", onOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("focusin", onOutside);
    };
  }, [servicesOpen, moreOpen, cancelClose]);

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
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => (servicesOpen ? setServicesOpen(false) : openServices())}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                          e.preventDefault();
                          openServices();
                        }
                      }}
                      className={`px-3 py-2 text-base font-medium rounded-md transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                        location.startsWith("/services") ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Services{" "}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/*
                      The panel sits in a wrapper that starts flush against the button
                      (top-full, no margin) and creates the visual gap with its own top
                      padding. That keeps the hover surface continuous, so moving the
                      cursor from the button down into the menu never crosses dead space.
                    */}
                    <div
                      className={`absolute top-full left-0 pt-2 z-[60] transition-opacity duration-150 ${
                        servicesOpen
                          ? "opacity-100 pointer-events-auto"
                          : "opacity-0 pointer-events-none"
                      }`}
                      aria-hidden={!servicesOpen}
                    >
                      <div className="bg-white rounded-lg shadow-xl py-2 min-w-[200px]">
                        {SERVICE_LINKS.map((sl) => (
                          <Link
                            key={sl.href}
                            href={sl.href}
                            tabIndex={servicesOpen ? 0 : -1}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-2 text-[#444444] hover:bg-[#850100]/5 hover:text-[#850100] focus-visible:bg-[#850100]/5 focus-visible:text-[#850100] focus-visible:outline-none transition-colors font-medium"
                          >
                            {sl.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            }
            if (link.label === "More") {
              return (
                <div
                  key="more-group"
                  ref={moreRef}
                  className="relative"
                  onMouseEnter={openMore}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-expanded={moreOpen}
                    aria-haspopup="true"
                    onClick={() => (moreOpen ? setMoreOpen(false) : openMore())}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        openMore();
                      }
                    }}
                    className={`px-3 py-2 text-base font-medium rounded-md transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                      location === "/thursday-tray-day" || location === "/chicken-night"
                        ? "bg-white/20 text-white"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    More
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {/* The wrapper is flush to the trigger so hover never crosses a dead zone. */}
                  <div
                    className={`absolute top-full left-0 pt-2 z-[60] transition-opacity duration-150 ${
                      moreOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                    aria-hidden={!moreOpen}
                  >
                    <div className="bg-white rounded-lg shadow-xl py-2 min-w-[255px]">
                      {MORE_LINKS.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          tabIndex={moreOpen ? 0 : -1}
                          onClick={() => setMoreOpen(false)}
                          className="block px-4 py-3 text-[#444444] hover:bg-[#850100]/5 hover:text-[#850100] focus-visible:bg-[#850100]/5 focus-visible:text-[#850100] focus-visible:outline-none transition-colors"
                        >
                          <span className="block font-semibold">{item.label}</span>
                          <span className="block mt-0.5 text-sm text-[#444444]/60">{item.detail}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
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
                {/* Keep Tuesday and Thursday offers near the top. The full
                    service list is intentionally scrollable on short phones,
                    rather than allowing the bottom of the menu to disappear
                    beneath the fixed contact area. */}
                <nav className="flex-1 min-h-0 overflow-y-auto flex flex-col p-4 gap-1">
                  {MOBILE_LINKS.slice(0, 3).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        location === link.href
                          ? "bg-white/20 text-white"
                          : "text-white/90 hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="px-4 pb-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/60">More</p>
                    {MORE_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-3 rounded-lg transition-colors ${
                          location === link.href ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"
                        }`}
                      >
                        <span className="block font-medium">{link.label}</span>
                        <span className="block text-sm text-white/60 mt-0.5">{link.detail}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="px-4 pb-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/60">Services</p>
                    {MOBILE_LINKS.slice(3).map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          location === link.href ? "bg-white/20 text-white" : "text-white/90 hover:bg-white/10"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/order-catering"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-lg text-base bg-white text-[#850100] hover:bg-white/90 font-bold mt-3 text-center transition-colors"
                  >
                    Order Now
                  </Link>
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
