import React from "react";
import { BRAND_INFO, CATEGORIES } from "../data/photographyData";
import { Heart, Phone, Mail, MapPin, Sparkles, ArrowUp } from "lucide-react";

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#07080a] text-[#8e94a6] border-t border-white/5 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/5">
          {/* Brand Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif tracking-[0.2em] uppercase text-white font-medium">
                Zero Gravity
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            </div>

            <p className="text-xs uppercase tracking-[0.3em] text-[#c5a880] font-medium">
              Photography &amp; Films • Established 2012
            </p>

            <p className="text-xs sm:text-sm text-[#959bad] font-light leading-relaxed max-w-md">
              Chennai's premier candid wedding photography studio. Celebrating love stories, authentic laughter, and sacred ceremonies across India and world-class global destinations.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4af37] text-white hover:text-black flex items-center justify-center transition-colors border border-white/5"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4af37] text-white hover:text-black flex items-center justify-center transition-colors border border-white/5"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4af37] text-white hover:text-black flex items-center justify-center transition-colors border border-white/5"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Categories Navigation */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Signature Collections
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#categories"
                    className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]/40" />
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Global Presence
            </h4>
            <div className="text-xs space-y-1.5 text-[#9aa0b3] font-light">
              <p className="text-white font-medium">Headquarters:</p>
              <p>T. Nagar, Chennai, Tamil Nadu</p>
              <p className="text-white font-medium pt-2">Domestic &amp; Overseas:</p>
              <p>Bangalore • Hyderabad • Mumbai • Coimbatore • Madurai • London • Paris</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#717686]">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Zero Gravity Photography. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/70 hover:text-[#d4af37] transition-colors uppercase tracking-widest text-[11px]"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
