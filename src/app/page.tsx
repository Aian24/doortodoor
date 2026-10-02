"use client";

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TwoHeroesSection from "@/components/TwoHeroesSection";
import ServicesBento from "@/components/ServicesBento";
import AiSection from "@/components/AiSection";
import SellingMethodSection from "@/components/SellingMethodSection";
import BundleCalculator from "@/components/BundleCalculator";
import ReLaunchSocialSection from "@/components/ReLaunchSocialSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import NisGraderSection from "@/components/NisGraderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ChatAssistant from "@/components/ChatAssistant";
import { ContactModalProvider } from "@/context/ContactModalContext";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  return (
    <ContactModalProvider>
      <main className="min-h-screen flex flex-col bg-white pt-20">
        {/* 1. Video Preloader with Logo Video */}
        <Preloader />

        {/* 2. Navigation Header */}
        <Navbar />

      {/* 4. Hero Section (Strictly Text-focused, NO logo in hero) */}
      <Hero />

      {/* 5. Two Heroes, Two Doors (Strategic Persona Matcher) */}
      <TwoHeroesSection />

      {/* 6. Core Services Bento Grid (8 Service Lines) */}
      <ServicesBento />

      {/* 7. Dedicated AI Capabilities Section (8 AI Pillars) */}
      <AiSection />

      {/* 8. The ReLaunch Method (4-Layer Selling Framework & 3-Step Plan) */}
      <SellingMethodSection />

      {/* 7. Interactive Bundle Builder & Live Savings Calculator */}
      <BundleCalculator />

      {/* 8. ReLaunch Social Autopilot Showcase */}
      <ReLaunchSocialSection />

      {/* 9. Case Studies & Proof Bento */}
      <CaseStudiesSection />

      {/* 10. Free NIS Marketing Grader Diagnostic Tool */}
      <NisGraderSection />

      {/* 11. Client Testimonials & Ratings */}
      <TestimonialsSection />

      {/* 12. Frequently Asked Questions */}
      <FaqSection />

      {/* 13. High-Converting Bottom CTA Banner */}
      <CtaBanner />

      {/* 14. Static Footer with Extracted Logo Image */}
      <Footer />

      {/* 15. Smooth Scroll-To-Top Button */}
      <ScrollToTop />

      {/* 16. Interactive ReLaunch AI Chat Assistant */}
      <ChatAssistant />

      {/* 17. Global Contact & Strategy Session Modal */}
      <ContactModal />
    </main>
    </ContactModalProvider>
  );
}

