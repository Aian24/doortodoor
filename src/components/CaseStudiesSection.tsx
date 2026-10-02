"use client";

import { useState } from "react";
import Image from "next/image";
import { caseStudiesData, clientLogos, CaseStudy } from "@/data/caseStudies";
import { useContactModal } from "@/context/ContactModalContext";
import MotionWrapper from "./MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  ExternalLink,
  TrendingUp,
  X,
  Globe,
  Quote,
  ShieldCheck,
} from "lucide-react";

const categories = ["All Work", "Websites & Platforms", "Custom Software", "Brand & Ads"];

export default function CaseStudiesSection() {
  const { openContactModal } = useContactModal();
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = caseStudiesData.filter((study) => {
    if (activeCategory === "All Work") return true;
    if (activeCategory === "Websites & Platforms")
      return (
        study.category.includes("Web") ||
        study.category.includes("Publishing") ||
        study.category.includes("Lodging") ||
        study.category.includes("Public")
      );
    if (activeCategory === "Custom Software")
      return (
        study.category.includes("Software") ||
        study.category.includes("FinTech")
      );
    if (activeCategory === "Brand & Ads")
      return (
        study.category.includes("Food") ||
        study.category.includes("Contracting") ||
        study.category.includes("Travel")
      );
    return true;
  });

  const handleStartSimilarProject = (study: CaseStudy) => {
    setActiveStudy(null);
    openContactModal({
      intent: "start-project",
      serviceInterest: study.title,
      notes: `Interested in achieving results similar to case study: ${study.title} (${study.metricValue} ${study.metricLabel} in ${study.industry}).`,
    });
  };

  return (
    <section
      id="work"
      className="py-16 sm:py-20 bg-white border-b border-slate-200 select-none scroll-mt-20 relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(#090D16 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <MotionWrapper
          direction="up"
          distance={20}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#C0622A] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3 text-[#C0622A]" />
              <span>FEATURED WORK &amp; CLIENT PROOF</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#090D16] tracking-tight leading-[1.05]">
              Real builds. <span className="text-[#C0622A]">Proven growth.</span>
            </h2>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
            Click any case study below to open the complete project showcase, verified impact metrics, and client deliverables.
          </p>
        </MotionWrapper>

        {/* Category Filter Pills */}
        <MotionWrapper direction="up" delay={0.1} className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#090D16] text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </MotionWrapper>

        {/* Showcase Grid of Browser Mockup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStudies.map((study, idx) => (
            <MotionWrapper
              key={study.id}
              direction="up"
              delay={idx * 0.05}
              distance={16}
            >
              <div
                onClick={() => setActiveStudy(study)}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#C0622A]/60 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col h-full overflow-hidden"
              >
                {/* Browser Mockup Window Header */}
                <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300 truncate max-w-[200px]">
                    <span className="text-[#2E8B7A]">https://</span>
                    <span>{study.displayUrl}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#C0622A] transition-colors" />
                </div>

                {/* Visual Image Preview with Zoom Effect */}
                <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                  {/* Top-Left Clean Industry Tag */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[#090D16]/85 backdrop-blur-md text-white text-[11px] font-medium border border-slate-700/60 shadow-sm">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Title */}
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#090D16] group-hover:text-[#C0622A] transition-colors mb-2">
                      {study.title}
                    </h3>

                    {/* Dedicated Spacious Metric Box */}
                    <div className="my-3 p-3 rounded-xl bg-orange-50/70 border border-[#C0622A]/20 flex items-center justify-between gap-3">
                      <div>
                        <span className="font-heading font-black text-2xl text-[#C0622A] block leading-tight">
                          {study.metricValue}
                        </span>
                        <span className="text-xs font-semibold text-slate-700 block leading-tight mt-0.5">
                          {study.metricLabel}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-[#C0622A]/10 text-[#C0622A] flex items-center justify-center shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed mb-3">
                      {study.description}
                    </p>

                    {/* Client Quote Chip */}
                    {study.clientQuote && (
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-600 italic leading-relaxed mb-3">
                        &ldquo;{study.clientQuote}&rdquo;
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 mb-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-slate-50 text-slate-600 border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Trigger */}
                    <div className="w-full flex items-center justify-between pt-2 text-xs font-heading font-bold text-[#090D16] group-hover:text-[#C0622A] transition-colors">
                      <span>Explore Case Showcase</span>
                      <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#C0622A] group-hover:text-white flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Client Logos Ribbon */}
        <MotionWrapper
          direction="up"
          delay={0.2}
          className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-200 text-center"
        >
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-4">
            Trusted by 1,500+ Businesses Nationwide Since 2004
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="px-3.5 py-1.5 bg-white rounded-full border border-slate-200 text-slate-700 text-xs font-semibold hover:border-[#C0622A] hover:text-[#C0622A] transition-colors shadow-xs"
              >
                {logo}
              </span>
            ))}
          </div>
        </MotionWrapper>

        {/* Bottom Call to Action */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() =>
              openContactModal({
                intent: "start-project",
                serviceInterest: "Web & App Development",
                notes: "Interested in starting a new build with ReLaunch.",
              })
            }
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5 cursor-pointer"
          >
            <span>Start Your Project With ReLaunch →</span>
          </button>
        </div>
      </div>

      {/* Dedicated Full Case Study Showcase Modal */}
      <AnimatePresence>
        {activeStudy && (
          <div
            key="case-study-showcase-modal"
            className="fixed inset-0 z-[998] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveStudy(null)}
              style={{ willChange: "opacity", transform: "translateZ(0)" }}
              className="fixed inset-0 bg-[#090D16]/85"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
              className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
            >
              {/* Header */}
              <div className="bg-[#090D16] text-white p-5 sm:p-6 flex items-start justify-between border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#C0622A] text-[10px] font-mono font-bold uppercase tracking-widest mb-2">
                    <Sparkles className="w-3 h-3 text-[#C0622A]" />
                    <span>Case Study Showcase</span>
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                    {activeStudy.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-slate-300">
                    <span className="font-semibold text-[#2E8B7A]">
                      {activeStudy.category}
                    </span>
                    <span>·</span>
                    <span className="font-mono text-slate-400">
                      https://{activeStudy.displayUrl}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveStudy(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
                {/* Full-Width Browser Mockup Image */}
                <div className="rounded-2xl border border-slate-200 shadow-md overflow-hidden bg-slate-900">
                  {/* Browser top chrome */}
                  <div className="px-4 py-2 bg-slate-900 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="px-4 py-1 rounded-md bg-slate-950 text-slate-300 text-xs font-mono">
                      https://{activeStudy.displayUrl}
                    </div>
                    <div className="w-10" />
                  </div>

                  {/* UI Screenshot */}
                  <div className="relative aspect-[16/9] w-full bg-slate-100">
                    <Image
                      src={activeStudy.image}
                      alt={activeStudy.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 900px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Key Metric & Quote Highlight Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-orange-50 border border-[#C0622A]/20 flex flex-col justify-center">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      {activeStudy.metricLabel}
                    </span>
                    <span className="font-heading font-black text-3xl sm:text-4xl text-[#C0622A]">
                      {activeStudy.metricValue}
                    </span>
                  </div>

                  <div className="sm:col-span-2 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1.5">
                      <Quote className="w-4 h-4 text-[#C0622A]" />
                      <span>Verified Client Outcome</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                      &ldquo;{activeStudy.clientQuote || activeStudy.description}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Project Scope & Deliverables */}
                <div>
                  <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-slate-800 mb-2.5">
                    What ReLaunch Engineered:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStudy.tags.map((tag, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2E8B7A] shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  {activeStudy.liveUrl ? (
                    <a
                      href={activeStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#090D16] hover:text-[#C0622A] transition-colors"
                    >
                      <Globe className="w-4 h-4 text-[#2E8B7A]" />
                      <span>Visit Live Website ({activeStudy.displayUrl})</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  ) : (
                    <div className="text-xs text-slate-500">
                      Phoenix, AZ · Enterprise Delivery
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => handleStartSimilarProject(activeStudy)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5 cursor-pointer"
                  >
                    <span>Start Similar Project →</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
