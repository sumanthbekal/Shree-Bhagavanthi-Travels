import React from "react";
import { WHY_CHOOSE_US } from "@/config/business";
import {
  ShieldCheck,
  PhoneCall,
  Calendar,
  UserCheck,
  Users,
  HeartHandshake,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#0878C9]" />;
      case "PhoneCall":
        return <PhoneCall className="w-6 h-6 text-[#0878C9]" />;
      case "Calendar":
        return <Calendar className="w-6 h-6 text-[#0878C9]" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-[#0878C9]" />;
      case "Users":
        return <Users className="w-6 h-6 text-[#0878C9]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#0878C9]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#0878C9]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-[#0878C9] text-xs font-bold uppercase tracking-wider mb-3">
            The Bhagavanthi Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#10172A] tracking-tight">
            Why Choose Shree Bhagavanthi Travels?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Built on genuine service, comfortable vehicles, and local expertise to make every trip smooth and worry-free.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  {renderIcon(item.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
