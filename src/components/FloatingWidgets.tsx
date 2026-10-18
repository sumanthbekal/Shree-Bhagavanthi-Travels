"use client";

import React, { useState, useEffect } from "react";
import { BUSINESS_CONFIG, buildWhatsAppUrl } from "@/config/business";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export const FloatingWidgets: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-white text-slate-700 hover:text-[#0878C9] border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button on Mobile */}
      <a
        href={`tel:${BUSINESS_CONFIG.phones[0].number}`}
        className="pointer-events-auto sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[#10172A] text-white shadow-lg border border-slate-700 active:scale-95 transition-all"
        aria-label="Call Shree Bhagavanthi Travels"
      >
        <Phone className="w-5 h-5 text-[#FFD900]" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={buildWhatsAppUrl(
          "Hello Shree Bhagavanthi Travels, I would like to enquire about taxi booking from Mulki."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 active:scale-95"
        aria-label="Chat on WhatsApp with Shree Bhagavanthi Travels"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-black text-xs uppercase tracking-wider pr-1">
          Chat With Us
        </span>
      </a>
    </div>
  );
};
