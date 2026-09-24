import React, { useState } from "react";
import { BRAND_INFO, CATEGORIES } from "../data/photographyData";
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Sparkles, Clock } from "lucide-react";

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    category: "Traditional Weddings",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Zero Gravity Photography! I would like to inquire about wedding photography dates.`
  );

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#090a0d] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Studio Information & Global Locations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#d4af37]/30 text-[#e4d4b1] text-xs uppercase tracking-[0.2em] font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                Reservations &amp; Inquiries
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight uppercase leading-tight">
                Let's Frame <br />
                <span className="italic text-[#d4af37]">Your Legacy</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a2a8ba] font-light mt-4 leading-relaxed">
                Dates for upcoming wedding seasons fill up rapidly. Drop us a note or call us directly to check availability for your auspicious day.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/5 hover:border-[#d4af37]/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#888e9f]">
                    Direct Studio Hotline
                  </div>
                  <div className="text-sm sm:text-base font-serif text-white font-medium">
                    {BRAND_INFO.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/5 hover:border-[#d4af37]/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#888e9f]">
                    Electronic Mail
                  </div>
                  <div className="text-sm sm:text-base font-serif text-white font-medium">
                    {BRAND_INFO.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#888e9f]">
                    Headquarters
                  </div>
                  <div className="text-sm font-serif text-white">
                    {BRAND_INFO.headquarters}
                  </div>
                </div>
              </div>
            </div>

            {/* Global Studio Hubs */}
            <div>
              <div className="text-xs uppercase tracking-widest text-[#8d93a6] mb-3 font-medium">
                Studio Hubs &amp; Global Availability
              </div>
              <div className="flex flex-wrap gap-2">
                {BRAND_INFO.locations.map((loc) => (
                  <span
                    key={loc}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-[#dcdfe8]"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="pt-2">
              <a
                href={`https://wa.me/919840767566?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold text-black bg-[#25D366] hover:bg-[#20ba5a] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Instant WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-[#d4af37]/30 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-[#a2a8ba] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#d4af37] font-medium">{formState.name}</span>. Our lead creative producer will contact you within 4 business hours to discuss your dates and vision.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        date: "",
                        category: "Traditional Weddings",
                        location: "",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest text-[#d4af37] border border-[#d4af37]/40 hover:bg-[#d4af37]/10"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="text-2xl font-serif text-white">
                      Check Date Availability
                    </h3>
                    <p className="text-xs text-[#8d93a6] mt-1 font-light">
                      Please share your tentative wedding details below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#9aa0b3] mb-1.5 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sundaram"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#9aa0b3] mb-1.5 font-medium">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 XXXXX"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#9aa0b3] mb-1.5 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="priya@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#9aa0b3] mb-1.5 font-medium">
                        Event Date
                      </label>
                      <input
                        type="date"
                        value={formState.date}
                        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#9aa0b3] mb-1.5 font-medium">
                        Service Category
                      </label>
                      <select
                        value={formState.category}
                        onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none transition-colors"
                      >
                        {CATEGORIES.map((c) => (
                          <option key={c.id} value={c.name} className="bg-[#12141a] text-white">
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#9aa0b3] mb-1.5 font-medium">
                        Event City / Destination
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chennai / Mahabalipuram"
                        value={formState.location}
                        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#9aa0b3] mb-1.5 font-medium">
                      Tell Us About Your Vision &amp; Ceremonies
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details like multiple ceremonies (Sangeet, Haldi, Muhurtham), expected guest count, or special traditions..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#d4af37] via-[#f7e5aa] to-[#d4af37] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry To Creative Team</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
