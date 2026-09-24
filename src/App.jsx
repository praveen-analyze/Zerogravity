import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./Hero";
import { AboutPhilosophy } from "./components/AboutPhilosophy";
import { Categories } from "./Categories";
import { Gallery } from "./components/Gallery";
import { FeaturedStories } from "./components/FeaturedStories";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export const App = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    // Smooth scroll to gallery
    const galleryEl = document.querySelector("#gallery");
    if (galleryEl) {
      const yOffset = -70;
      const y = galleryEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleExploreGallery = () => {
    const galleryEl = document.querySelector("#gallery");
    if (galleryEl) {
      const yOffset = -70;
      const y = galleryEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#ede9e3] selection:bg-[#d4af37] selection:text-black">
      {/* Top Fixed Glass Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Cinematic Hero */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExploreGallery={handleExploreGallery}
        />

        {/* Brand Philosophy Narrative */}
        <AboutPhilosophy onOpenBooking={handleOpenBooking} />

        {/* Signature Categories */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* Flagship Lazy-Loaded Gallery */}
        <Gallery
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onOpenBooking={handleOpenBooking}
        />

        {/* Best of Celebrations / Love Stories */}
        <FeaturedStories onOpenBooking={handleOpenBooking} />

        {/* The 4 Pillars / Why Couples Trust Us */}
        <WhyChooseUs onOpenBooking={handleOpenBooking} />

        {/* Couple Testimonials & Accolades */}
        <Testimonials />

        {/* Real FAQs */}
        <FaqSection />

        {/* Reservation & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant Inquiry / WhatsApp */}
      <FloatingWhatsApp />

      {/* Reservation & Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
};

export default App;
