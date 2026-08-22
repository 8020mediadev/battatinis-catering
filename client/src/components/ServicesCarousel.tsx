import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";

export type ServiceSlide = {
  title: string;
  href: string;
  desc: string;
  icon: LucideIcon;
  image: string;
  alt: string;
};

/**
 * Horizontally scrollable service cards.
 *
 * Deliberately built on native CSS scroll-snap rather than a JS carousel:
 * every slide is a real <a> that exists in the DOM (and therefore in the
 * prerendered HTML) at all times, so all seven internal links stay
 * crawlable. A virtualised carousel would hide most of them from search
 * engines and from users with JS disabled.
 */
export default function ServicesCarousel({ services }: { services: ServiceSlide[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setAtStart(scrollLeft < 8);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 8);

    // Which card is nearest the left edge of the viewport window.
    const first = el.querySelector<HTMLLIElement>("li");
    if (first) {
      const step = first.offsetWidth + 24; // card + gap
      setActive(Math.round(scrollLeft / step));
    }
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLLIElement>("li");
    const step = first ? first.offsetWidth + 24 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLLIElement>("li");
    const step = first ? first.offsetWidth + 24 : el.clientWidth;
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Arrows — desktop only; mobile users swipe */}
      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        disabled={atStart}
        aria-label="Show previous services"
        className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white text-[#850100] shadow-lg ring-1 ring-black/5 transition-all hover:bg-[#850100] hover:text-white disabled:opacity-0 disabled:pointer-events-none"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollByCards(1)}
        disabled={atEnd}
        aria-label="Show more services"
        className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white text-[#850100] shadow-lg ring-1 ring-black/5 transition-all hover:bg-[#850100] hover:text-white disabled:opacity-0 disabled:pointer-events-none"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Edge fades hint that there is more to scroll */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-[#faf8f6] to-transparent transition-opacity ${atStart ? "opacity-0" : "opacity-100"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-[#faf8f6] to-transparent transition-opacity ${atEnd ? "opacity-0" : "opacity-100"}`}
      />

      <ul
        ref={trackRef}
        className="services-track flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4 md:mx-0 md:px-0"
      >
        {services.map((s) => (
          <li
            key={s.href}
            className="snap-start shrink-0 w-[80%] sm:w-[46%] lg:w-[31.5%]"
          >
            <Link href={s.href}>
              {/* min-height rather than a fixed height: the type scale was
                  increased site-wide, and a hard 340px would clip the longer
                  descriptions at narrow widths. */}
              <article className="group relative min-h-[360px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer flex">
                <img
                  src={s.image}
                  alt={s.alt}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient sits mostly at the bottom so the food stays visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />

                <div className="relative z-10 w-full p-6 flex flex-col justify-end text-white">
                  <div className="w-11 h-11 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-1.5 drop-shadow">{s.title}</h3>
                  <p className="text-white/85 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <span className="text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((s, i) => (
          <button
            key={s.href}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.title}`}
            aria-current={i === active ? "true" : undefined}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-7 bg-[#850100]" : "w-2 bg-[#850100]/25 hover:bg-[#850100]/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
