import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { LazyImage } from "./LazyImage";
import { Sparkles, Heart, Camera, Award, ShieldCheck } from "lucide-react";
import { BRAND_INFO } from "../data/photographyData";

export const AboutPhilosophy = ({ onOpenBooking }) => {
  const sectionRef = useRef(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 relative bg-[#0e1015] overflow-hidden"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#c5a880]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-[#d4af37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold border */}
              <div className="absolute -inset-3 rounded-3xl border border-[#d4af37]/25 pointer-events-none" />
              
              {/* Primary Visual */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/80 aspect-[4/5]">
                <LazyImage
                  src="https://cdn-jniij.nitrocdn.com/vZQLwBKPwxrIPZwERjsJYVoWaIoLwdrU/assets/images/optimized/rev-a9f76fc/zerogravity.photography/wp-content/uploads/2025/08/JUDO1150-copy_webp.webp"
                  fallback="/love gift pre wedding.jpg"
                  alt="Zero Gravity Candid Moments"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                    The Candid Ethos
                  </span>
                  <p className="text-lg font-serif italic text-white mt-1">
                    "There is no way to improve reality further than it currently is."
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Card */}
              <div className="absolute -bottom-8 -right-6 sm:-right-8 w-48 sm:w-56 glass-panel p-4 rounded-2xl border border-[#d4af37]/30 shadow-2xl hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-[#d4af37]/20 text-[#d4af37]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Redundancy First</div>
                    <div className="text-[10px] text-[#9fa5b6]">Dual-slot back-up</div>
                  </div>
                </div>
                <p className="text-[11px] text-[#b3b8c9] leading-snug">
                  Zero chance of lost memories with real-time on-site mirroring.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e4d4b1] text-xs uppercase tracking-[0.2em] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              Welcome to Zero Gravity Photography
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white uppercase tracking-tight leading-tight">
              Hello, We Are Glad <br />
              <span className="italic text-[#d4af37]">You Found Us!</span>
            </h2>

            <div className="space-y-4 text-[#c4c9d9] text-sm sm:text-base leading-relaxed font-light">
              <p>
                Our wedding photographers firmly believe that posing for pictures shouldn't take up your wedding day. <strong className="text-white font-medium">Your celebration is the star of the show.</strong> Our philosophy is participatory and quiet—giving you and your family space to be completely yourself.
              </p>
              <p>
                Founded in Chennai in 2012, we have grown into one of India’s most celebrated candid photography collectives, having documented more than 20,000 weddings spanning Chennai, Bangalore, Hyderabad, Mumbai, Paris, London, Santorini, and the United States.
              </p>
              <p className="italic text-[#d8d2c4] font-serif border-l-2 border-[#d4af37] pl-4 py-1 text-base sm:text-lg">
                "Your wedding photos should bring back fond memories along with all the raw emotions that bring goosebumps down your arms."
              </p>
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <Camera className="w-5 h-5 text-[#d4af37] mb-2" />
                <h4 className="text-sm font-semibold text-white">Unscripted Storytelling</h4>
                <p className="text-xs text-[#989eae] mt-1 leading-normal">
                  Natural laughter, tears, and private glances over rigid poses.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <Heart className="w-5 h-5 text-[#d4af37] mb-2" />
                <h4 className="text-sm font-semibold text-white">Cultural Reverence</h4>
                <p className="text-xs text-[#989eae] mt-1 leading-normal">
                  Deep mastery of Brahmin, Christian, Muslim, and Telugu rituals.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3 rounded-full text-xs uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#d4af37] via-[#f7e5aa] to-[#d4af37] hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Schedule A Studio Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
