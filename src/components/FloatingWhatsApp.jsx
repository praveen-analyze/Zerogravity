import React from "react";
import { MessageSquare, Phone } from "lucide-react";
import { BRAND_INFO } from "../data/photographyData";

export const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/919840767566?text=${encodeURIComponent(
    "Hi Zero Gravity Photography! I would like to inquire about wedding photography and date availability."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <MessageSquare className="w-6 h-6 fill-white" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-black/90 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-white/10">
          Chat With Studio Manager
        </span>
      </a>
    </div>
  );
};
