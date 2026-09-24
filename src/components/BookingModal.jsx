import React, { useState, useEffect } from "react";
import { X, Calendar, Sparkles, CheckCircle2, Phone, Send } from "lucide-react";
import { BRAND_INFO, CATEGORIES } from "../data/photographyData";

export const BookingModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    category: "Traditional Weddings",
    notes: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg rounded-3xl glass-panel border border-[#d4af37]/40 p-6 sm:p-8 shadow-2xl shadow-black/90">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-white">Date Inquiry Recorded!</h3>
            <p className="text-xs sm:text-sm text-[#b0b6c8] leading-relaxed">
              We have received your dates request for <span className="text-[#d4af37]">{form.name}</span>. Our studio lead in Chennai will reach out via call/WhatsApp promptly.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="mt-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold text-black bg-[#d4af37]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1 mb-1">
                <Sparkles className="w-3 h-3" />
                Zero Gravity Studios
              </span>
              <h3 className="text-2xl font-serif text-white uppercase tracking-tight">
                Reserve Your Date
              </h3>
              <p className="text-xs text-[#959bad] font-light">
                Fill out the quick form below or call directly at{" "}
                <a href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`} className="text-[#d4af37] underline">
                  {BRAND_INFO.phone}
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#9ba1b3] mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs sm:text-sm focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#9ba1b3] mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs sm:text-sm focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#9ba1b3] mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs sm:text-sm focus:border-[#d4af37] focus:outline-none [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#9ba1b3] mb-1">
                  Ceremony Type
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs sm:text-sm focus:border-[#d4af37] focus:outline-none"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.name} className="bg-[#12141a]">
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#9ba1b3] mb-1">
                  Special Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Venue location, multi-day celebrations..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs sm:text-sm focus:border-[#d4af37] focus:outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-xs uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#d4af37] via-[#f7e5aa] to-[#d4af37] hover:scale-101 active:scale-98 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-[#d4af37]/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Confirm Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
