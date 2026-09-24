import React from "react";
import { WHY_CHOOSE_US } from "../data/photographyData";
import { Sparkles, Shield, Camera, Heart, Film, Users, Award } from "lucide-react";

export const WhyChooseUs = ({ onOpenBooking }) => {
  const icons = [
    <Film className="w-6 h-6 text-[#d4af37]" />,
    <Heart className="w-6 h-6 text-[#d4af37]" />,
    <Camera className="w-6 h-6 text-[#d4af37]" />,
    <Users className="w-6 h-6 text-[#d4af37]" />,
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#0e1015] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#d4af37]/30 text-[#e4d4b1] text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            The Zero Gravity Promise
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight uppercase">
            Why Couples Trust Us
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#a6acbf] font-light leading-relaxed">
            Your wedding is more than a single day; it’s an emotional milestone that echoes across generations.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((pillar, i) => (
            <div
              key={pillar.number}
              className="group relative p-8 rounded-3xl bg-[#14161f]/80 border border-white/10 hover:border-[#d4af37]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-[#d4af37]/15 flex items-center justify-center transition-colors border border-white/5">
                    {icons[i]}
                  </div>
                  <span className="font-serif text-3xl text-white/20 group-hover:text-[#d4af37]/40 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#f5e6c6] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9aa0b3] font-light leading-relaxed">
                  {pillar.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#d4af37]">
                <Sparkles className="w-3 h-3" />
                <span>Excellence Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence Assurance Strip */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl glass-panel border border-[#d4af37]/20 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif text-white">
                Redundant Hardware &amp; Multi-Cloud Archiving
              </h4>
              <p className="text-xs sm:text-sm text-[#a6acbf] font-light">
                Every camera records duplicate copies in real-time. Your once-in-a-lifetime moments are impossible to lose.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold text-black bg-[#d4af37] hover:bg-[#ebd28b] transition-all"
          >
            Inquire About Coverage
          </button>
        </div>
      </div>
    </section>
  );
};
