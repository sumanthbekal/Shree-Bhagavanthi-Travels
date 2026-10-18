import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { BookingForm } from "./BookingForm";
import { PhoneCall, MessageCircle, MapPin, ShieldCheck, Clock, Users } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#10172A] text-white overflow-hidden w-full max-w-full">
      {/* Desktop & Tablet Wide Banner Container */}
      <div className="relative w-full bg-[#10172A] border-b-4 border-[#FFD900]">
        <div className="max-w-[1600px] mx-auto w-full">
          {/* Responsive image handling: 
              On desktop & tablet: Show full banner.
              On mobile: Use full width, natural aspect ratio with min-h to stay sharp and not cause overflow */}
          <div className="w-full overflow-hidden bg-slate-900">
            <img
              src="/banner.png"
              alt="Shree Bhagavanthi Travels Official Banner - Mulki"
              className="w-full h-auto max-w-full block object-contain"
            />
          </div>
        </div>
      </div>

      {/* Hero Interactive Booking & Action Bar Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Info & Direct Contact */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-center lg:text-left min-w-0 w-full">
            {/* Location Ticker / Tags - Fully wrap safe and centered on mobile */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[11px] sm:text-xs font-bold text-[#FFD900]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Mulki</span>
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-medium text-slate-300">
                Mangaluru
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-medium text-slate-300">
                Udupi
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-medium text-slate-300">
                All Karnataka Outstation
              </span>
            </div>

            {/* Responsive Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white break-words">
              Comfortable, Reliable & <span className="text-[#FFD900]">Safe Travel Services</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Book clean, air-conditioned taxis for family outings, temple pilgrimages, airport pickups, and outstation trips directly from Mulki.
            </p>

            {/* Direct Call & WhatsApp Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 pt-1 w-full max-w-md mx-auto lg:mx-0">
              <a
                href={`tel:${BUSINESS_CONFIG.phones[0].number}`}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider bg-[#FFD900] hover:bg-[#e6c300] text-slate-900 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-slate-900 shrink-0" />
                <span>Call {BUSINESS_CONFIG.phones[0].display}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Shree Bhagavanthi Travels, I would like to book a taxi."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Three Mobile-Friendly Trust Badges */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-center">
              <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
                <ShieldCheck className="w-4 h-4 text-[#FFD900]" />
                <span className="text-[10px] font-bold text-slate-200">Comfortable</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
                <Clock className="w-4 h-4 text-[#FFD900]" />
                <span className="text-[10px] font-bold text-slate-200">Reliable</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
                <Users className="w-4 h-4 text-[#FFD900]" />
                <span className="text-[10px] font-bold text-slate-200">Family Safe</span>
              </div>
            </div>

            {/* Verified Address Note */}
            <div className="pt-2 text-[11px] sm:text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-1.5 flex-wrap">
              <MapPin className="w-3.5 h-3.5 text-[#FFD900] shrink-0" />
              <span>{BUSINESS_CONFIG.address.landmark}, {BUSINESS_CONFIG.address.street}, Mulki 574154</span>
            </div>
          </div>

          {/* Prominent Booking Enquiry Card */}
          <div className="lg:col-span-7 w-full min-w-0">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};
