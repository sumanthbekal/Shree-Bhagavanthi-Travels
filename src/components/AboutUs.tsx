import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { HeartHandshake, Car, Route, Phone, MapPin, CheckCircle } from "lucide-react";

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-square relative">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
                  alt="Comfortable travel sedan on coastal highway"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10172A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0878C9] text-white flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5 text-[#FFD900]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Operating from Mulki</p>
                      <p className="text-[11px] text-slate-500">Near Mallikarjuna Mata, Lingappadavakadu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Badge */}
              <div className="absolute -top-4 -right-4 bg-[#FFD900] text-slate-900 font-black text-xs uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg border border-yellow-300">
                Trusted Service
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/60 text-[#0878C9] text-xs font-bold uppercase tracking-wider mb-3">
                About Our Agency
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#10172A] tracking-tight">
                Your Trusted Travel Partner in Mulki
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At <strong>Shree Bhagavanthi Travels</strong>, we believe every journey should be comfortable, convenient, and memorable. Whether you're planning a family holiday, a pilgrimage, a business trip, or a group outing, we're here to help you travel with confidence.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Based conveniently near Mallikarjuna Mata, Lingappadavakadu in Mulki (574154), we connect local residents and visitors to key destinations across Coastal Karnataka, the Western Ghats, and outstation cities across South India.
            </p>

            {/* Three Distinct Feature Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="p-2.5 rounded-lg bg-blue-50 text-[#0878C9] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Customer-Focused Service</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    We prioritize passenger comfort, punctuality, and courteous service on every trip, whether it is a local errand or a long-distance road trip.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="p-2.5 rounded-lg bg-blue-50 text-[#0878C9] shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Comfortable Travel Options</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Air-conditioned, clean, and mechanically checked hatchbacks, sedans, SUVs, and tempo travellers ready for all road conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="p-2.5 rounded-lg bg-blue-50 text-[#0878C9] shrink-0">
                  <Route className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Personalized Travel Planning</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Custom pickup timings, flexible halts for temple darshans or scenic viewpoints, and transparent estimates tailored to your itinerary.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10172A] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFD900]" />
                <span>Contact Our Office</span>
              </a>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Direct local support & booking assistance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
