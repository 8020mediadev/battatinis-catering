import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#850100] to-[#660000] text-white py-20 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative text-center">
          <h1 className="font-bold font-serif mb-3 drop-shadow-lg">{title}</h1>
          <p className="text-white/80 drop-shadow-md">{updated}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-20 bg-white flex-1">
        <div className="container max-w-3xl">
          <div className="legal-body space-y-6 text-[#444444] leading-relaxed">
            {children}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
