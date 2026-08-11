import { Phone } from "lucide-react";

export default function OrderCTA() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#850100] to-[#6a0000] shadow-2xl">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Decorative side illustrations (subtle fork/spoon silhouettes) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 opacity-[0.08]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='200' viewBox='0 0 80 200'%3E%3Cpath d='M40 10 C40 10 30 40 30 70 C30 85 35 90 40 90 C45 90 50 85 50 70 C50 40 40 10 40 10Z M38 90 L38 190 L42 190 L42 90Z' fill='%23ffffff' opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 opacity-[0.08]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='200' viewBox='0 0 80 200'%3E%3Cpath d='M25 10 L25 70 M40 10 L40 70 M55 10 L55 70 M20 70 Q20 95 40 95 Q60 95 60 70 M38 95 L38 190 L42 190 L42 95Z' stroke='%23ffffff' stroke-width='3' fill='none' opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }} />

        <div className="relative z-10 text-center py-10 md:py-14 px-6 md:px-12">
          <h2 className="font-serif  font-bold text-white mb-3 drop-shadow-sm">
            Order Today
          </h2>
          <p className="text-white/85 text-base md:text-lg mb-4">
            Just give us a call to start your order!
          </p>
          <p className="text-white text-xl md:text-2xl font-bold mb-6 tracking-wide">
            585-544-FOOD or 585-544-3663
          </p>
          <a
            href="tel:5855443663"
            className="inline-flex items-center gap-2 bg-white text-[#850100] font-semibold px-8 py-3.5 rounded-full text-base hover:bg-white/90 transition-colors shadow-lg"
          >
            <Phone className="h-4 w-4" />
            Click here to call now
          </a>
        </div>
      </div>
    </section>
  );
}
