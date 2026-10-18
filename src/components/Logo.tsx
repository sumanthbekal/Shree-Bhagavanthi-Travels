import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "dark" }) => {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-2 sm:gap-3 min-w-0 ${className}`}>
      {/* BK Shield Emblem */}
      <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0878C9] to-[#044c82] shadow-md border border-[#FFD900]/30 shrink-0">
        <span className="font-extrabold text-xs sm:text-sm tracking-wider text-[#FFD900] drop-shadow-sm">
          BK
        </span>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#FFD900] rounded-full border-2 border-[#10172A] flex items-center justify-center">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#10172A] rounded-full" />
        </div>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col leading-tight min-w-0">
        <span
          className={`font-black text-sm sm:text-base md:text-xl tracking-tight uppercase truncate ${
            isLight ? "text-white" : "text-[#10172A]"
          }`}
        >
          Shree Bhagavanthi
        </span>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#0878C9] uppercase">
            Travels
          </span>
          <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium tracking-wide">
            • Mulki 574154
          </span>
        </div>
      </div>
    </div>
  );
};
