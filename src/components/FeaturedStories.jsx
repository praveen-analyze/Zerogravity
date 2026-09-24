import React from "react";
import { LazyImage } from "./LazyImage";
import { FEATURED_STORIES } from "../data/photographyData";
import { Heart, Sparkles, MapPin, Quote, ArrowRight } from "lucide-react";

export const FeaturedStories = ({ onOpenBooking }) => {
  return (
    <section id="stories" className="py-24 sm:py-32 bg-[#090a0d] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#d4af37]/30 text-[#e4d4b1] text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Heart className="w-3.5 h-3.5 text-[#d4af37]" />
            Real Love Stories
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight uppercase">
            Best of Celebrations
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#a6acbf] font-light leading-relaxed">
            Every couple brings a distinct vibration. Here are heartfelt chapters where laughter and unscripted magic met timeless cinematography.
          </p>
        </div>

        {/* Stories Layout */}
        <div className="space-y-16 lg:space-y-24">
          {FEATURED_STORIES.map((story, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={story.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Frame */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  } relative group`}
                >
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 group-hover:border-[#d4af37]/50 transition-all duration-500 shadow-2xl">
                    <div className="aspect-[16/10] w-full">
                      <LazyImage
                        src={story.image}
                        fallback={story.fallback}
                        alt={`${story.couple} - Zero Gravity Story`}
                        className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-black/70 text-[#f7e6c4] backdrop-blur-md border border-white/10">
                        {story.ceremony}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90">
                      <span className="text-xs flex items-center gap-1 text-[#f3e3be]">
                        <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                        {story.location}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-[#a6acbe]">
                        Full Wedding Film Available
                      </span>
                    </div>
                  </div>
                </div>

                {/* Narrative Details */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  } space-y-6`}
                >
                  <div className="inline-block text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                    Featured Couple
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-wide">
                    {story.couple}
                  </h3>

                  <div className="text-lg font-serif italic text-[#e0d6c1]">
                    "{story.title}"
                  </div>

                  <p className="text-sm sm:text-base text-[#a9afc1] font-light leading-relaxed">
                    {story.snippet}
                  </p>

                  {/* Quote block */}
                  <div className="p-5 rounded-2xl glass-panel border border-[#d4af37]/20 relative">
                    <Quote className="w-6 h-6 text-[#d4af37]/40 mb-2" />
                    <p className="text-xs sm:text-sm font-serif italic text-white/90 leading-relaxed">
                      "{story.quote}"
                    </p>
                    <div className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mt-3">
                      — {story.couple}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#d4af37] hover:text-white transition-colors group"
                    >
                      <span>Inquire About A Similar Concept</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
