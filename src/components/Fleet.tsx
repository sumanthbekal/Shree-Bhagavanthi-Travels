import React from "react";
import { FLEET_LIST, buildWhatsAppUrl } from "@/config/business";
import { Users, Briefcase, Snowflake, Check, MessageCircle } from "lucide-react";

export const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-[#0878C9] text-xs font-bold uppercase tracking-wider mb-3">
            Travel In Comfort
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#10172A] tracking-tight">
            Our Fleet Showcase
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Inspired by the versatile vehicles in our fleet — maintained to the highest standards of cleanliness, safety, and mechanical reliability.
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET_LIST.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Image Container */}
                <div className="relative h-48 bg-slate-900 overflow-hidden group">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.category} - Shree Bhagavanthi Travels`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md">
                      {vehicle.modelExample}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-[#FFD900] bg-black/60 px-2 py-0.5 rounded">
                      <Snowflake className="w-3 h-3" /> AC
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    {vehicle.category}
                  </h3>

                  {/* Specs Pill Bar */}
                  <div className="flex items-center gap-3 my-3 text-xs text-slate-600 font-medium pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#0878C9]" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#0878C9]" />
                      <span>{vehicle.luggage}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    <strong>Ideal For:</strong> {vehicle.suitableFor}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-1.5 mb-2">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href={buildWhatsAppUrl(
                    `Hello Shree Bhagavanthi Travels, I would like to book or enquire about the *${vehicle.category} (${vehicle.modelExample})*.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#10172A] hover:bg-[#0878C9] text-white transition-all shadow-sm group/btn"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#FFD900]" />
                  <span>Book This Vehicle</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Clarification Note per prompt instruction */}
        <p className="text-[11px] text-slate-500 text-center mt-6">
          * Vehicle models and exact variants subject to availability during booking confirmation. All vehicles are commercially licensed with experienced drivers.
        </p>
      </div>
    </section>
  );
};
