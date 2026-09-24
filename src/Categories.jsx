import React, { useRef } from "react";
import { LazyImage } from "./components/LazyImage";
import { CATEGORIES } from "./data/photographyData";
import { ArrowUpRight, Layers } from "lucide-react";

export const Categories = ({ onSelectCategory }) => {
  const containerRef = useRef(null);

  return (
    <section id="categories" ref={containerRef} className="py-24 sm:py-32 bg-[#0b0c0e] relative">
      {/* Decorative Gold Header Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#d4af37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#d4af37]/30 text-[#e4d4b1] text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
            Signature Collections
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight uppercase">
            Curated Categories
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#a6acbf] font-light leading-relaxed">
            From the sacred grandeur of multi-day wedding rituals to cinematic overseas love affairs and intimate baby milestones.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-2xl overflow-hidden bg-[#12141a] border border-[#1e212c] hover:border-[#d4af37]/60 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:-translate-y-1.5 flex flex-col justify-between"
              style={{
                outline: "none",
              }}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#12141a]">
                <LazyImage
                  src={cat.image}
                  fallback={cat.fallback}
                  alt={cat.name}
                  className="w-full h-full block"
                  imgClassName="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-106"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-black/20 to-transparent pointer-events-none" />

                {/* Seam Protector: 6px solid #12141a band at the bottom of the image frame to prevent subpixel white hairline */}
                <div className="absolute inset-x-0 -bottom-1 h-4 bg-gradient-to-t from-[#12141a] to-transparent pointer-events-none z-10" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-black/80 text-[#f2e6cb] backdrop-blur-md border border-[#252836]">
                    {cat.count}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <button
                    onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-[#d4af37] text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:scale-105 border border-[#252836]"
                    aria-label={`View ${cat.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </button>
                </div>
              </div>

              {/* Content Block with negative margin to overlap any subpixel gap */}
              <div className="p-6 -mt-1 relative z-20 flex-1 flex flex-col justify-between space-y-4 bg-[#12141a]">
                <div>
                  <div className="text-[11px] font-mono tracking-widest uppercase text-[#d4af37] mb-1">
                    {cat.subtitle}
                  </div>
                  <h3 className="text-2xl font-serif text-white tracking-wide group-hover:text-[#f3dfb0] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9da3b5] font-light leading-relaxed mt-2 line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                {/* Action Footer without any border divider line */}
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-[11px] text-[#787f94] tracking-wider uppercase">
                    Vibe: {cat.accent}
                  </span>
                  <button
                    onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                    className="text-xs font-semibold tracking-wider text-[#d4af37] group-hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>View Works</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
