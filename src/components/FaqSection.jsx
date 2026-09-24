import React, { useState } from "react";
import { FAQS } from "../data/photographyData";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0c0d10] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#d4af37]/30 text-[#e4d4b1] text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight uppercase">
            Everything You Need To Know
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4" />
          <p className="text-sm text-[#9ea4b5] font-light leading-relaxed">
            Transparent insights into our filming process, timeline, equipment redundancy, and global travel.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-[#14161e] border-[#d4af37]/50 shadow-xl shadow-black/50"
                    : "bg-[#101217] border-white/5 hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#d4af37] text-black rotate-180"
                        : "bg-white/5 text-[#d4af37]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#a2a8ba] font-light leading-relaxed border-t border-white/5 mt-1 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
