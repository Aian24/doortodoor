"use client";

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
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
import ReLaunchSocialSection from "@/components/ReLaunchSocialSection";
import NisGraderSection from "@/components/NisGraderSection";

export default function Home() {
  return (
    <ContactModalProvider>
      <SmoothScrollProvider>
        <main className="min-h-screen flex flex-col bg-[#FAF9F6]">
          {/* 1. Fast Video Preloader */}
          <Preloader />

          {/* 2. Fixed Navigation Header */}
          <Navbar />

          {/* 3. Global Interactive Scroll Progress & Section Radar */}
          <GlobalScrollHUD />

          {/* 4. Hero Section (Headline, Value Prop, Live Counters) */}
          <Hero />

        {/* 4. Strategic Persona Matcher ("Which Door Fits You?") */}
        <TwoHeroesSection />

        {/* 5. Core Services Bento Grid (8 Service Lines) */}
        <ServicesBento />

        {/* 6. Dedicated AI Capabilities Section (8 AI Pillars) */}
        <AiSection />

        {/* 7. The ReLaunch Method (4-Layer Selling Framework & Process) */}
        <SellingMethodSection />

        {/* 8. Interactive Bundle Builder & Live Savings Calculator */}
        <BundleCalculator />

        {/* 9. ReLaunch Social Autopilot Platform */}
        <ReLaunchSocialSection />

        {/* 10. Case Studies & Proof Bento */}
        <CaseStudiesSection />

        {/* 11. Free NIS Marketing Grader Diagnostic Tool */}
        <NisGraderSection />

        {/* 12. Client Testimonials & Ratings */}
        <TestimonialsSection />

        {/* 13. Frequently Asked Questions */}
        <FaqSection />

        {/* 14. High-Converting Bottom CTA Banner */}
        <CtaBanner />

        {/* 15. Static Footer with Direct Contact */}
        <Footer />

        {/* 16. Smooth Scroll-To-Top Button */}
        <ScrollToTop />

        {/* 17. ReLaunch AI Assistant (Beta Preview) */}
        <ChatAssistant />

        {/* 18. Global Contact & Strategy Session Modal */}
        <ContactModal />
      </main>
    </SmoothScrollProvider>
  </ContactModalProvider>
);
}

