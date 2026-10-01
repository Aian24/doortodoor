"use client";

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TwoHeroesSection from "@/components/TwoHeroesSection";
import SellingMethodSection from "@/components/SellingMethodSection";
import ServicesBento from "@/components/ServicesBento";
import BundleCalculator from "@/components/BundleCalculator";
import ReLaunchSocialSection from "@/components/ReLaunchSocialSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import NisGraderSection from "@/components/NisGraderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Video Preloader with Logo Video */}
      <Preloader />

      {/* 2. Navigation Header */}
      <Navbar />

      {/* 3. Hero Section (Strictly Text-focused, NO logo in hero) */}
      <Hero />

      {/* 4. Two Heroes, Two Doors (Strategic Persona Matcher) */}
      <TwoHeroesSection />

      {/* 5. Core Services Bento Grid (8 Service Lines) */}
      <ServicesBento />

      {/* 6. The ReLaunch Method (4-Layer Selling Framework & 3-Step Plan) */}
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
    </main>
  );
}
