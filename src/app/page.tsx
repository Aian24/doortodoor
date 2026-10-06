"use client";

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import TickerBar from "@/components/TickerBar";
import VideoScrollHero from "@/components/VideoScrollHero";
import Hero from "@/components/Hero";
import TwoHeroesSection from "@/components/TwoHeroesSection";
import ServicesBento from "@/components/ServicesBento";
import AiSection from "@/components/AiSection";
import SellingMethodSection from "@/components/SellingMethodSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ChatAssistant from "@/components/ChatAssistant";
import { ContactModalProvider } from "@/context/ContactModalContext";
import ContactModal from "@/components/ContactModal";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import GlobalScrollHUD from "@/components/GlobalScrollHUD";
import BundleCalculator from "@/components/BundleCalculator";
import SpecialsSection from "@/components/SpecialsSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <ContactModalProvider>
      <SmoothScrollProvider>
        <main className="min-h-screen flex flex-col bg-[#FAF9F6]">
          {/* 1. Fast Modern Preloader */}
          <Preloader />

          {/* 2. Fixed Navigation Header with Utility Bar */}
          <Navbar />

          {/* 3. Global Scroll Progress HUD */}
          <GlobalScrollHUD />

          {/* 4. Scroll-Scrubbed Video Hero (hero-doortodoor.mp4 across 15 scrolls) */}
          <VideoScrollHero />

          {/* 5. Interactive Zip Code Checker & Storefront Overview Hub */}
          <Hero />

          {/* 6. Live Info Ticker Bar */}
          <TickerBar />

          {/* 6. Strategic Persona Matcher: Residential vs Commercial */}
          <TwoHeroesSection />

          {/* 7. Core Services Bento Grid (8 Service Lines) */}
          <ServicesBento />

          {/* 8. Modern 21st Century Smart Laundry Technology Platform */}
          <AiSection />

          {/* 9. The 4-Step Door to Door Process & Quality Fabric Standards */}
          <SellingMethodSection />

          {/* 10. Interactive Pricing & Laundry Savings Calculator */}
          <BundleCalculator />

          {/* 11. Specials, Deals & Franchise Opportunities */}
          <SpecialsSection />

          {/* 12. Commercial Laundry Industries & Client Solutions */}
          <CaseStudiesSection />

          {/* 13. Comprehensive About Us & Founders' Origin Story */}
          <AboutSection />

          {/* 14. Customer Testimonials & 5-Star Reviews */}
          <TestimonialsSection />

          {/* 15. Frequently Asked Questions */}
          <FaqSection />

          {/* 16. Bottom High-Converting CTA Banner with Promo Code */}
          <CtaBanner />

          {/* 17. Comprehensive Footer */}
          <Footer />

          {/* 18. Smooth Scroll-To-Top Button */}
          <ScrollToTop />

          {/* 19. Door to Door Laundry Smart Virtual Assistant */}
          <ChatAssistant />

          {/* 20. Global Pickup & Commercial Bid Booking Modal */}
          <ContactModal />
        </main>
      </SmoothScrollProvider>
    </ContactModalProvider>
  );
}
