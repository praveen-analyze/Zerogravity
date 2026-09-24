import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Share2, Sparkles } from "lucide-react";

export const LightboxModal = ({
  item,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount,
  onOpenBooking,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto py-2">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Zero Gravity Gallery
          </span>
          <span className="text-xs text-[#73798c]">|</span>
          <span className="text-xs font-mono text-[#a3a9bc]">
            {String(currentIndex + 1).padStart(2, "0")} / {String(totalCount).padStart(2, "0")}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Center Image Display with Nav Buttons */}
      <div className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-2 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#d4af37] text-white hover:text-black border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Image Frame */}
        <div className="relative max-h-[72vh] max-w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-white/10">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[72vh] w-auto object-contain mx-auto transition-transform duration-300"
            onError={(e) => {
              if (item.fallback) e.currentTarget.src = item.fallback;
            }}
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#d4af37] text-white hover:text-black border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Bottom Info Bar */}
      <div className="max-w-4xl mx-auto w-full glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 text-[#f2e2be] font-medium border border-[#d4af37]/30">
              {item.categoryName}
            </span>
            <span className="text-xs text-[#9aa0b3] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#d4af37]" />
              {item.location}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-serif text-white">
            {item.title} — <span className="text-[#d4af37] italic">{item.couple}</span>
          </h3>

          <p className="text-xs text-[#a9b0c2] font-light max-w-xl line-clamp-1 sm:line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => {
              onClose();
              if (onOpenBooking) onOpenBooking();
            }}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold text-black bg-[#d4af37] hover:bg-[#ebd28b] transition-all flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Inquire For Shoot
          </button>
        </div>
      </div>
    </div>
  );
};
