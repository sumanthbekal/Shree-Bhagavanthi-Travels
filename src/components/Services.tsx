import React from "react";
import { SERVICES_LIST, buildWhatsAppUrl } from "@/config/business";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0878C9] text-xs font-bold uppercase tracking-wider mb-3">
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#10172A] tracking-tight">
            Our Travel Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Reliable, timely, and convenient passenger travel solutions tailored to individual, family, and group needs across Mulki and beyond.
          </p>
        </div>

        {/* Responsive Grid of Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10172A]/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#10172A]/90 backdrop-blur-sm text-[#FFD900] text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-[#0878C9] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Action Link: Pre-filled WhatsApp enquiry */}
              <div className="p-5 pt-0">
                <a
                  href={buildWhatsAppUrl(
                    `Hello Shree Bhagavanthi Travels, I would like to enquire about your *${service.title}* service.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-[#0878C9] text-slate-800 hover:text-white font-bold text-xs transition-all group/btn border border-slate-200 hover:border-[#0878C9]"
                >
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover/btn:text-white transition-colors" />
                    Enquire Now
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
