import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { BookingForm } from "./BookingForm";
import { PhoneCall, MessageCircle, MapPin } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#10172A] text-white">
      {/* Client's Official Brand Banner Container */}
      <div className="relative w-full bg-[#10172A] overflow-hidden border-b-4 border-[#FFD900]">
        <div className="max-w-[1600px] mx-auto">
          <img
            src="/banner.png"
            alt="Shree Bhagavanthi Travels Official Banner - Near Mallikarjuna Mata, Lingappayyakadu, Mulki"
            className="w-full h-auto object-contain block shadow-2xl"
          />
        </div>
      </div>

      {/* Hero Interactive Booking & Action Bar Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Quick Info & Direct Contact */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold text-[#FFD900]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Mulki • Mangaluru • Udupi • All Karnataka Outstation</span>
            </div>

            <h1 className="text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight leading-tight text-white">
              Comfortable, Reliable & <span className="text-[#FFD900]">Safe Travel Services</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Book clean, air-conditioned taxis for family outings, temple pilgrimages, airport pickups, and outstation trips directly from Mulki.
            </p>

            {/* Direct Call & WhatsApp Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_CONFIG.phones[0].number}`}
                className="px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#FFD900] hover:bg-[#e6c300] text-slate-900 transition-all shadow-md flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-slate-900" />
                <span>Call {BUSINESS_CONFIG.phones[0].display}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Shree Bhagavanthi Travels, I would like to book a taxi."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Verified Address Note */}
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <MapPin className="w-4 h-4 text-[#FFD900] shrink-0" />
              <span>{BUSINESS_CONFIG.address.landmark}, {BUSINESS_CONFIG.address.street}, Mulki 574154</span>
            </div>
          </div>

          {/* Prominent Booking Enquiry Card */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};
