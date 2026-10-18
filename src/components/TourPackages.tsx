import React from "react";
import { TOUR_PACKAGES, buildWhatsAppUrl } from "@/config/business";
import { Clock, CheckCircle2, MessageCircle, MapPin } from "lucide-react";

export const TourPackages: React.FC = () => {
  return (
    <section id="packages" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0878C9] text-xs font-bold uppercase tracking-wider mb-3">
            Popular Destinations
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#10172A] tracking-tight">
            Tour Packages & Sightseeing Circuits
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Explore Karnataka's top temples, golden beaches, and mist-clad hills starting comfortably from Mulki and Mangaluru.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Destination Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#10172A] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-[#0878C9]" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-bold text-[#FFD900] uppercase tracking-wider">
                      {pkg.tagline}
                    </span>
                    <h3 className="text-lg font-black text-white leading-tight">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                {/* Package Highlights */}
                <div className="p-5">
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    Key Attractions & Stops:
                  </p>
                  <ul className="space-y-2">
                    {pkg.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href={buildWhatsAppUrl(
                    `Hello Shree Bhagavanthi Travels, I would like to enquire about the *${pkg.name}* tour package.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-50 hover:bg-[#FFD900] text-slate-900 hover:text-slate-950 border border-slate-200 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Enquire About This Trip</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Itinerary Call-To-Action Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-[#10172A] to-[#1e293b] text-white p-8 sm:p-10 relative overflow-hidden border border-slate-700 shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left space-y-2">
              <span className="text-xs font-black text-[#FFD900] uppercase tracking-widest flex items-center justify-center md:justify-start gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Have A Specific Destination In Mind?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Tell us where you want to go, and we'll help you plan your journey.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Custom pickup locations anywhere in Mulki, Surathkal, Mangaluru, or Udupi. Flexible timings, vehicle options, and halts tailored to your schedule.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href="#booking-form"
                className="px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-[#FFD900] hover:bg-[#e6c300] text-slate-900 shadow-md transition-all text-center"
              >
                Plan My Trip
              </a>
              <a
                href={buildWhatsAppUrl(
                  "Hello Shree Bhagavanthi Travels, I have a customized destination itinerary to plan."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Planner</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
