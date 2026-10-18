"use client";

import React, { useState, useEffect } from "react";
import { BUSINESS_CONFIG, NAV_LINKS } from "@/config/business";
import { Logo } from "./Logo";
import { Phone, MessageCircle, Menu, X, MapPin } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Compact Top Info Bar */}
      <div className="bg-[#10172A] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {BUSINESS_CONFIG.tagline}
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#FFD900]" />
              {BUSINESS_CONFIG.address.landmark}, Mulki
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#FFD900]" />
              <span className="text-slate-400">Call Us:</span>
              <a
                href={`tel:${BUSINESS_CONFIG.phones[0].number}`}
                className="font-bold text-white hover:text-[#FFD900] transition-colors"
              >
                {BUSINESS_CONFIG.phones[0].display}
              </a>
              <span className="text-slate-500">/</span>
              <a
                href={`tel:${BUSINESS_CONFIG.phones[1].number}`}
                className="font-bold text-white hover:text-[#FFD900] transition-colors"
              >
                {BUSINESS_CONFIG.phones[1].display}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white shadow-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="focus:outline-none">
            <Logo variant="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-nowrap shrink-0">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#0878C9] transition-colors tracking-wide py-1 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                "Hello Shree Bhagavanthi Travels, I would like to enquire about taxi and travel services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#booking-form"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-900 bg-[#FFD900] hover:bg-[#e6c300] active:scale-95 rounded-lg shadow-sm hover:shadow transition-all uppercase tracking-wider"
            >
              Book Your Trip
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#booking-form"
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-slate-900 bg-[#FFD900] rounded-lg"
            >
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-2 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#0878C9] hover:bg-slate-50 px-3 py-2 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                "Hello Shree Bhagavanthi Travels, I would like to enquire about taxi booking."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-sm shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS_CONFIG.phones[0].number}`}
              className="flex items-center justify-center gap-2 py-3 bg-[#10172A] hover:bg-slate-800 text-white font-bold rounded-lg text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#FFD900]" />
              Call {BUSINESS_CONFIG.phones[0].display}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
