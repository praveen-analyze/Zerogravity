import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles, ArrowDown, ChevronRight, Award, MapPin } from "lucide-react";
import { BRAND_INFO } from "./data/photographyData";

export const Hero = ({ onOpenBooking, onExploreGallery }) => {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const floatingBadgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 30, letterSpacing: "0.4em" },
        { opacity: 1, y: 0, letterSpacing: "0.25em", duration: 1 }
      )
        .fromTo(
          headlineRef.current?.children || [],
          { opacity: 0, y: 50, rotateX: 20 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.2 },
          "-=0.6"
        )
        .fromTo(
          subheadRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15 },
          "-=0.5"
        )
        .fromTo(
          statsRef.current?.children || [],
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          floatingBadgeRef.current,
          { opacity: 0, scale: 0.8, rotate: -6 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "back.out(1.7)" },
          "-=0.8"
        );

      // Subtle floating badge animation
      gsap.to(floatingBadgeRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-black"
    >
      {/* Background with subtle zoom overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn-jniij.nitrocdn.com/vZQLwBKPwxrIPZwERjsJYVoWaIoLwdrU/assets/images/optimized/rev-a9f76fc/zerogravity.photography/wp-content/uploads/2025/05/JOSH7381-copy-1536x1024.webp"
          alt="Zero Gravity Luxury Candid Wedding Photography Chennai"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite] filter brightness-[0.42] contrast-[1.08]"
          onError={(e) => {
            e.currentTarget.src = "/background.jpg";
          }}
        />

        {/* Cinematic Vignette and Gold Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-[#0b0c0e]/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#d4af37]/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Floating Heritage Badge */}
      <div
        ref={floatingBadgeRef}
        className="hidden md:flex absolute top-32 right-12 z-20 glass-panel px-4 py-3 rounded-2xl items-center gap-3 border border-[#d4af37]/30 shadow-2xl shadow-black/80"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#8d712e] flex items-center justify-center text-black shadow-md">
          <Award className="w-5 h-5" />
        </div>
        <div className="text-left">
          <div className="text-xs font-semibold text-white tracking-wider flex items-center gap-1">
            Top Candid Studio
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
          </div>
          <div className="text-[10px] text-[#b6bac9] tracking-widest uppercase">
            15+ Years of Excellence
          </div>
        </div>
      </div>

      {/* Central Hero Typography */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Pre-headline Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#d4af37]/30 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#e7d8b8] font-medium">
            Transforming Genuine Happiness Into Eternal Imagery
          </span>
        </div>

        {/* Grand Headline */}
        <div ref={headlineRef} className="space-y-2 sm:space-y-3 mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-white uppercase leading-[1.08]">
            We Capture Your Day
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#f7e8c6] via-[#d4af37] to-[#aa8443] leading-[1.12]">
            &amp; Make Unforgettable Memories
          </h2>
        </div>

        {/* Subtitle */}
        <p
          ref={subheadRef}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#c8cddc] font-light leading-relaxed mb-8"
        >
          Chennai’s trusted candid wedding photography studio since 2012. Specializing in sacred Hindu, Christian, Muslim, and destination wedding films across India, the US, and Europe. Trusted by 20,000+ happy couples.
        </p>

        {/* Interactive CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#d4af37] via-[#f7e5aa] to-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Book Your Date</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreGallery}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-medium text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#d4af37]/60 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Explore Portfolio</span>
            <ArrowDown className="w-4 h-4 text-[#d4af37]" />
          </button>
        </div>
      </div>

      {/* Hero Bottom Stats Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 px-6 rounded-2xl glass-panel border border-white/10"
        >
          {BRAND_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center py-2 ${
                i !== BRAND_INFO.stats.length - 1 ? "md:border-r border-white/10" : ""
              }`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#f2e6cb] font-semibold tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-white font-medium mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-[#9ca1b5] tracking-widest mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
