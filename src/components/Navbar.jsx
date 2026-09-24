import React, { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, Sparkles } from "lucide-react";
import { BRAND_INFO } from "../data/photographyData";

export const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Categories", href: "#categories" },
    { label: "Portfolio", href: "#gallery" },
    { label: "Love Stories", href: "#stories" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-none outline-none select-none ${
          isScrolled
            ? "glass-nav py-3.5"
            : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-5"
        }`}
        style={{
          border: "none",
          borderBottom: "none",
          outline: "none",
          boxShadow: isScrolled ? "0 12px 35px -10px rgba(0, 0, 0, 0.95)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="group flex flex-col transition-transform duration-300 hover:scale-[1.02] focus:outline-none"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-serif tracking-[0.2em] uppercase text-white font-medium group-hover:text-[#c5a880] transition-colors">
                  Zero Gravity
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
              </div>
              <span className="text-[9px] tracking-[0.35em] uppercase text-[#a2a7b8] font-light">
                Photography &amp; Films • Est. 2012
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-sm tracking-wider uppercase text-[#c0c5d6] hover:text-[#f3f4f6] transition-colors py-1 group focus:outline-none focus:ring-0"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full pointer-events-none" />
                </a>
              ))}
            </nav>

            {/* Action Buttons: Phone & Book CTA */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`}
                className="hidden xl:flex items-center text-xs tracking-wider text-[#dcdfe8] hover:text-[#d4af37] transition-colors focus:outline-none"
                title="Call Studio"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#d4af37]" />
                <span>{BRAND_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium text-black bg-gradient-to-r from-[#d4af37] via-[#f3de9a] to-[#d4af37] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95 focus:outline-none"
              >
                <span className="relative z-10 flex items-center gap-1.5 font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  Book Your Date
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center sm:hidden space-x-2">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded-full text-[11px] tracking-wider uppercase font-semibold text-black bg-[#d4af37] focus:outline-none"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#d4af37] transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/95 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-300">
          <div className="flex flex-col space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Menu Navigation
            </span>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-serif tracking-wider text-[#e6e8ee] hover:text-[#d4af37] transition-colors border-b border-[#1c1f2a] pb-2 focus:outline-none"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#1c1f2a] space-y-4">
            <a
              href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center text-sm text-[#d4af37] focus:outline-none"
            >
              <Phone className="w-4 h-4 mr-2" />
              {BRAND_INFO.phone}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl text-center text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3de9a] to-[#d4af37] focus:outline-none"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </>
  );
};
