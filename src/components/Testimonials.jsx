import React, { useState } from "react";
import { TESTIMONIALS } from "../data/photographyData";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeReview = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#0a0b0e] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#d4af37]/30 text-[#e4d4b1] text-xs uppercase tracking-[0.2em] font-medium mb-4">
          <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
          Love &amp; Accolades
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight uppercase mb-12">
          From Our Beloved Couples
        </h2>

        {/* Testimonial Card */}
        <div className="relative glass-panel p-8 sm:p-14 rounded-3xl border border-white/10 shadow-2xl">
          <Quote className="w-12 h-12 text-[#d4af37]/20 mx-auto mb-6" />

          {/* Stars */}
          <div className="flex items-center justify-center gap-1.5 mb-6">
            {[...Array(activeReview.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-base sm:text-2xl font-serif italic text-white/95 leading-relaxed max-w-3xl mx-auto min-h-[90px]">
            "{activeReview.quote}"
          </p>

          {/* Couple Info */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center">
            <h4 className="text-lg font-serif text-[#f2e2be] font-medium flex items-center gap-1.5">
              {activeReview.name}
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            </h4>
            <span className="text-xs uppercase tracking-widest text-[#8a90a2] mt-0.5">
              {activeReview.wedding}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-[#d4af37] text-white hover:text-black border border-white/10 transition-all hover:scale-110 active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === i ? "w-8 bg-[#d4af37]" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 hover:bg-[#d4af37] text-white hover:text-black border border-white/10 transition-all hover:scale-110 active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
