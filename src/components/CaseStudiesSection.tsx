"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { caseStudiesData, clientLogos, CaseStudy } from "@/data/caseStudies";
import { useContactModal } from "@/context/ContactModalContext";
import { useScrollContext } from "./SmoothScrollProvider";
import MotionWrapper from "./MotionWrapper";
import SpotlightCard from "./SpotlightCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Activity,
  Hotel,
  HeartHandshake,
  Utensils,
  GraduationCap,
  Shirt,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  X,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Activity,
  Hotel,
  HeartHandshake,
  Utensils,
  GraduationCap,
  Shirt,
  Building2,
  ShieldCheck,
};

const categories = ["All Industries", "Healthcare & Medical", "Hospitality & Dining", "Fitness & Wellness", "Specialty"];

export default function CaseStudiesSection() {
  const { openContactModal } = useContactModal();
  const { stopScroll, startScroll } = useScrollContext();
  const [activeCategory, setActiveCategory] = useState("All Industries");
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  // Lock background body scroll when case study modal is open
  useEffect(() => {
    if (activeStudy) {
      stopScroll();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setActiveStudy(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        startScroll();
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      startScroll();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [activeStudy, stopScroll, startScroll]);

  const filteredStudies = caseStudiesData.filter((study) => {
    if (activeCategory === "All Industries") return true;
    if (activeCategory === "Healthcare & Medical")
      return study.industry === "Healthcare";
    if (activeCategory === "Hospitality & Dining")
      return study.industry === "Short-Term Rentals" || study.industry === "Hospitality & Dining";
    if (activeCategory === "Fitness & Wellness")
      return study.industry === "Fitness & Wellness";
    if (activeCategory === "Specialty")
      return study.industry === "Pet Care" || study.industry === "Education" || study.industry === "Corporate Services";
    return true;
  });

  return (
    <section
      id="commercial-laundry"
      className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-pink-200/80 select-none scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionWrapper
          direction="up"
          distance={20}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DEF2FB] border border-[#DEF2FB] text-[#0284C7] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#DC1F62]" />
              <span>COMMERCIAL B2B LAUNDRY SOLUTIONS</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.05]">
              Commercial Laundry. <br />
              <span className="text-[#DC1F62]">Tailored For Your Business.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3 max-w-md">
            <p className="text-slate-600 text-xs sm:text-sm font-normal text-left lg:text-right leading-relaxed">
              We handle the heavy lifting for medical clinics, gyms, spas, Airbnbs, and restaurants across Long Island. Custom pickup schedules and volume discounts.
            </p>
            <a
              href="https://www.doortodoorlaundry.com/commercial-laundry/request-a-bid/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5 hover:scale-102 shrink-0"
            >
              <span>Request a Commercial Bid</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </MotionWrapper>

        {/* Category Filters */}
        <div className="flex items-center gap-2 mb-8 pb-2 overflow-x-auto scrollbar-none border-b border-pink-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#DC1F62] text-white shadow-md shadow-pink-200/50"
                  : "bg-white text-slate-700 hover:bg-pink-50/50 border border-pink-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Commercial Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {filteredStudies.map((study, idx) => {
            const Icon = iconMap[study.icon] || Building2;

            return (
              <MotionWrapper
                key={study.id}
                direction="up"
                delay={idx * 0.06}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(220, 31, 98, 0.1)"
                  className="bg-white p-5 rounded-2xl border border-pink-200/80 hover:border-[#DC1F62]/50 hover:shadow-xl hover:shadow-pink-100/50 transition-all flex flex-col justify-between h-full group cursor-pointer"
                  onClick={() => setActiveStudy(study)}
                >
                  <div>
                    {/* Top Icon & Metric */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#DC1F62] group-hover:bg-[#DC1F62] group-hover:text-white transition-all shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <span className="block font-heading font-black text-sm text-[#DC1F62]">
                          {study.metricValue}
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase">
                          {study.metricLabel}
                        </span>
                      </div>
                    </div>

                    {/* Image Preview */}
                    {study.image && (
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-slate-100 border border-pink-100/60">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] block mb-1">
                      {study.category}
                    </span>

                    <h3 className="font-heading font-black text-base text-[#0F172A] group-hover:text-[#DC1F62] transition-colors mb-2 leading-snug">
                      {study.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3 mb-4">
                      {study.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {study.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] font-semibold px-2 py-0.5 rounded-md bg-pink-50/60 border border-pink-100 text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-3 border-t border-pink-100 flex items-center justify-between text-xs font-bold text-[#0F172A]">
                    <span className="group-hover:text-[#DC1F62] transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0284C7] group-hover:translate-x-1 transition-transform" />
                  </div>
                </SpotlightCard>
              </MotionWrapper>
            );
          })}
        </div>

        {/* Commercial Client Trust Ribbon */}
        <div className="p-6 bg-white rounded-2xl border border-pink-200/80 text-center shadow-xs">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0284C7] block mb-3">
            TRUSTED BY BUSINESSES ACROSS LONG ISLAND
          </span>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs font-bold text-slate-700">
            {clientLogos.map((client) => (
              <span key={client} className="hover:text-[#DC1F62] transition-colors">
                • {client}
              </span>
            ))}
          </div>
        </div>

        {/* DETAIL MODAL */}
        <AnimatePresence>
          {activeStudy && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 select-text">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveStudy(null)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-pink-200/80 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
              >
                <div className="bg-gradient-to-r from-pink-50 via-white to-pink-50 text-[#0F172A] p-6 flex items-start justify-between border-b border-pink-200/80">
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0284C7] text-white uppercase tracking-wider">
                      {activeStudy.category}
                    </span>
                    <h3 className="font-heading font-black text-2xl text-[#0F172A] mt-1.5">
                      {activeStudy.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveStudy(null)}
                    className="p-1.5 rounded-full bg-pink-100 hover:bg-pink-200 text-slate-700 hover:text-black cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 overflow-y-auto space-y-4 text-left">
                  {activeStudy.image && (
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-pink-100">
                      <Image
                        src={activeStudy.image}
                        alt={activeStudy.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {activeStudy.description}
                  </p>

                  {activeStudy.clientQuote && (
                    <blockquote className="p-4 bg-pink-50/50 rounded-2xl border-l-4 border-[#DC1F62] text-xs text-slate-700 italic">
                      &ldquo;{activeStudy.clientQuote}&rdquo;
                    </blockquote>
                  )}
                </div>

                <div className="p-4 bg-slate-50 border-t border-pink-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveStudy(null)}
                    className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold uppercase cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="https://www.doortodoorlaundry.com/commercial-laundry/request-a-bid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-md"
                  >
                    <span>Request a Commercial Bid</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
