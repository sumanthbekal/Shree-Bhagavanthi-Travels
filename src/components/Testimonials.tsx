"use client";

import React, { useState, useEffect } from "react";
import { TESTIMONIALS_LIST } from "@/config/business";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_LIST.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_LIST.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-slate-50 border-t border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-[#0878C9] text-xs font-bold uppercase tracking-wider mb-3">
              Customer Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#10172A] tracking-tight">
              What Travelers Say
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Reviews from families, pilgrims, and frequent travelers who chose Shree Bhagavanthi Travels.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition-colors shadow-sm focus:outline-none"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition-colors shadow-sm focus:outline-none"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel: On mobile shows single active card, on lg shows 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_LIST.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 flex-col justify-between ${
                idx === currentIndex
                  ? "flex bg-white border-2 border-[#0878C9] shadow-xl"
                  : "hidden md:flex bg-white/80 border border-slate-200/90 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD900] text-[#FFD900]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-sm text-slate-900">{t.author}</h4>
                  <span className="text-xs text-slate-500 font-medium">{t.location}</span>
                </div>
                <span className="text-[10px] font-bold text-[#0878C9] bg-blue-50 px-2.5 py-1 rounded-full">
                  {t.tripType}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-slate-400 text-center mt-6">
          * Representative customer feedback based on trip experiences around Mulki and coastal Karnataka.
        </p>
      </div>
    </section>
  );
};
