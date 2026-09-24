import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { LazyImage } from "./LazyImage";
import { LightboxModal } from "./LightboxModal";
import { GALLERY_ITEMS } from "../data/photographyData";
import { Eye, MapPin, Sparkles, Filter, Grid } from "lucide-react";

export const Gallery = ({ activeCategory = "all", onCategoryChange, onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState(activeCategory);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const galleryGridRef = useRef(null);

  // Sync external category change from Categories section
  useEffect(() => {
    if (activeCategory) {
      setSelectedFilter(activeCategory);
    }
  }, [activeCategory]);

  const filterTabs = [
    { id: "all", label: "All Works" },
    { id: "traditional-weddings", label: "Traditional" },
    { id: "pre-wedding", label: "Pre-Wedding" },
    { id: "haldi-sangeet", label: "Haldi & Sangeet" },
    { id: "bridal-portraits", label: "Bridal Portraits" },
    { id: "destination-weddings", label: "Destination" },
    { id: "baby-maternity", label: "Baby & Maternity" },
  ];

  const filteredItems =
    selectedFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  // GSAP Animation on filter change
  useEffect(() => {
    if (galleryGridRef.current) {
      const items = galleryGridRef.current.children;
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 40,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    }
  }, [selectedFilter]);

  const handleFilterClick = (filterId) => {
    setSelectedFilter(filterId);
    if (onCategoryChange) {
      onCategoryChange(filterId);
    }
  };

  const handleOpenLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNextLightbox = () => {
    setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrevLightbox = () => {
    setActiveLightboxIndex(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0c0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#d4af37]/30 text-[#e4d4b1] text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Fine-Art Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight uppercase">
            Curated Visual Gallery
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#a6acbf] font-light leading-relaxed">
            Every photograph is a testament to raw, unposed emotions and eternal romance. Tap any frame to experience in high-definition.
          </p>
        </div>

        {/* Filter Pills with gold accents */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            const count =
              tab.id === "all"
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => handleFilterClick(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#d4af37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105 font-semibold"
                    : "bg-[#14161f] text-[#c0c5d6] hover:text-white hover:bg-[#1b1f2b] border border-white/5"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? "bg-black/20 text-black font-bold" : "bg-white/10 text-[#8d93a6]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid (Masonry-feel dynamic layout) */}
        <div
          ref={galleryGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden bg-[#12141a] border border-[#1e212c] hover:border-[#d4af37]/60 transition-all duration-500 shadow-xl cursor-pointer transform-gpu [backface-visibility:hidden] ${
                item.colSpan === "md:col-span-2" ? "md:col-span-2" : "col-span-1"
              }`}
              onClick={() => handleOpenLightbox(index)}
            >
              {/* Lazy Loaded Image Container */}
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-[#12141a] isolate`}>
                <LazyImage
                  src={item.image}
                  fallback={item.fallback}
                  alt={`${item.title} - ${item.couple}`}
                  className="w-full h-full"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-106"
                />

                {/* Ambient Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                {/* Top Badge: Category */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-black/75 text-[#f2e6cb] backdrop-blur-md border border-[#252836]">
                    {item.categoryName}
                  </span>
                </div>

                {/* Top Right: Lightbox Quick Preview Icon */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full bg-black/50 hover:bg-[#d4af37] text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-colors shadow-lg border border-[#252836]">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Frame (reveals smoothly on hover or ambient) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 transform transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-xs text-[#d4af37] mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-white font-medium group-hover:text-[#f7e6c4] transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#1e212c]">
                    <span className="text-xs text-[#aeb4c6] italic font-serif">
                      {item.couple}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Hi-Res</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Action */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-[#858b9d] mb-4">
            Viewing {filteredItems.length} curated photographs • Over 50,000+ archived in our studio
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold text-white bg-white/5 hover:bg-white/10 border border-[#d4af37]/40 hover:border-[#d4af37] transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(212,175,55,0.15)]"
          >
            Inquire For Your Wedding Dates
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <LightboxModal
          item={filteredItems[activeLightboxIndex]}
          currentIndex={activeLightboxIndex}
          totalCount={filteredItems.length}
          onClose={handleCloseLightbox}
          onNext={handleNextLightbox}
          onPrev={handlePrevLightbox}
          onOpenBooking={onOpenBooking}
        />
      )}
    </section>
  );
};
