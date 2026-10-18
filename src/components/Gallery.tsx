"use client";

import React, { useState } from "react";
import { GALLERY_ITEMS } from "@/config/business";
import { X, ZoomIn, Eye } from "lucide-react";

export const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0878C9] text-xs font-bold uppercase tracking-wider mb-3">
            Moments on the Road
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#10172A] tracking-tight">
            Photo Gallery
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A glimpse into our comfortable fleet, coastal roads, serene temple destinations, and memorable journey backdrops.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveImage(item.image);
                setActiveTitle(item.title);
              }}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10172A]/85 via-[#10172A]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-extrabold text-[#FFD900] uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-1.5 flex items-center justify-between">
                  <span>{item.title}</span>
                  <Eye className="w-4 h-4 text-slate-300" />
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 focus:outline-none transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={activeImage}
                alt={activeTitle}
                className="w-full max-h-[80vh] object-contain bg-black"
              />
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <p className="font-bold text-sm">{activeTitle}</p>
                <span className="text-xs text-slate-400">Shree Bhagavanthi Travels • Mulki</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
