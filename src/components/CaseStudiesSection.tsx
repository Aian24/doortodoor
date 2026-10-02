"use client";

import { useState } from "react";
import Image from "next/image";
import { caseStudiesData, clientLogos, CaseStudy } from "@/data/caseStudies";
import { useContactModal } from "@/context/ContactModalContext";
import MotionWrapper from "./MotionWrapper";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  ExternalLink,
  TrendingUp,
} from "lucide-react";

const categories = ["All Work", "Websites & Platforms", "Custom Software", "Brand & Ads"];

export default function CaseStudiesSection() {
  const { openContactModal } = useContactModal();
  const [activeCategory, setActiveCategory] = useState("All Work");

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

  const handleCaseStudyClick = (study: CaseStudy) => {
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
            From luxury resort platforms and high-volume publishing portals to enterprise data pipelines — browse our recent builds across Phoenix and nationwide.
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
                onClick={() => handleCaseStudyClick(study)}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/85 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Floating Metric Callout Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-lg bg-[#090D16]/90 backdrop-blur-md text-white font-mono text-[11px] font-bold border border-slate-700/80 shadow-md">
                      {study.industry}
                    </span>

                    <span className="px-2.5 py-1 rounded-lg bg-[#C0622A] text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{study.metricValue} {study.metricLabel}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="font-heading font-black text-lg sm:text-xl text-[#090D16] group-hover:text-[#C0622A] transition-colors mb-2">
                      {study.title}
                    </h3>

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
                          className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Trigger */}
                    <div className="w-full flex items-center justify-between pt-2 text-xs font-heading font-bold uppercase tracking-wider text-[#090D16] group-hover:text-[#C0622A] transition-colors">
                      <span>Start Similar Build</span>
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
    </section>
  );
}
