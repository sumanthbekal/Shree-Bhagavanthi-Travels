"use client";

import React from "react";
import { BUSINESS_CONFIG, NAV_LINKS, SERVICES_LIST } from "@/config/business";
import { Logo } from "./Logo";
import { Phone, MapPin, MessageCircle, Heart, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#10172A] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {BUSINESS_CONFIG.shortDescription}
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Shree Bhagavanthi Travels, I need travel assistance."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FFD900]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FFD900]">
              Travel Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FFD900]">
              Mulki Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFD900] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_CONFIG.address.landmark}, {BUSINESS_CONFIG.address.street}, {BUSINESS_CONFIG.address.city} - {BUSINESS_CONFIG.address.pincode}
                </span>
              </p>

              <div className="flex flex-col gap-1 pt-1">
                {BUSINESS_CONFIG.phones.map((p) => (
                  <a
                    key={p.number}
                    href={`tel:${p.number}`}
                    className="flex items-center gap-2 text-slate-200 hover:text-[#FFD900] font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0878C9]" />
                    <span>{p.display}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 {BUSINESS_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Operating with pride in Mulki & Coastal Karnataka</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
