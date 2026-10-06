"use client";

import { useState } from "react";
import Link from "next/link";
import { twoHeroesData } from "@/data/sellingFramework";
import { motion, AnimatePresence } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import SpotlightCard from "./SpotlightCard";
import {
  Home,
  Building2,
  ArrowRight,
  AlertCircle,
  TrendingDown,
  CheckCircle2,
  Check,
  Sparkles,
} from "lucide-react";

export default function TwoHeroesSection() {
  const [activeTab, setActiveTab] = useState<"residential-families" | "commercial-business">(
    "residential-families"
  );

  const activeHero = twoHeroesData.find((h) => h.id === activeTab)!;

  return (
    <section id="two-doors" className="py-14 sm:py-16 bg-[#FAF9F6] border-b border-pink-200/80 select-none scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Scroll Reveal */}
        <MotionWrapper direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#DC1F62] font-bold block mb-2">
            TAILORED LAUNDRY SOLUTIONS · TWO PATHS
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.05] mb-3">
            Two Ways to Save Time. <br />
            <span className="text-[#DC1F62] italic">Which Fits Your Lifestyle?</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            Whether you are a busy parent wanting your weekends back or a Long Island business needing reliable, hygienic commercial linen service—we have the ideal solution.
          </p>
        </MotionWrapper>

        {/* Tab Switcher */}
        <MotionWrapper direction="up" delay={0.1} className="flex justify-center mb-6 w-full">
          <div className="w-full sm:w-auto grid grid-cols-2 sm:inline-flex p-1 bg-slate-200/80 rounded-xl sm:rounded-2xl border border-pink-200/60 gap-1">
            {twoHeroesData.map((hero) => {
              const isSelected = activeTab === hero.id;
              return (
                <button
                  key={hero.id}
                  onClick={() => setActiveTab(hero.id as any)}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-8 py-2.5 rounded-lg sm:rounded-xl font-heading font-bold text-[11px] sm:text-xs md:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer sm:whitespace-nowrap ${
                    isSelected
                      ? "bg-[#DC1F62] text-white shadow-md shadow-pink-200/50"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {hero.id === "residential-families" ? (
                    <Home className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isSelected ? "text-white" : "text-[#DC1F62]"}`} />
                  ) : (
                    <Building2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isSelected ? "text-white" : "text-[#0284C7]"}`} />
                  )}
                  <span className="truncate sm:overflow-visible sm:whitespace-nowrap">{hero.title}</span>
                </button>
              );
            })}
          </div>
        </MotionWrapper>

        {/* Comparison Card */}
        <MotionWrapper direction="up" delay={0.2} className="bg-white rounded-2xl sm:rounded-3xl border border-pink-200/80 shadow-xl overflow-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHero.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="bg-gradient-to-r from-pink-50/90 via-white to-pink-50/70 text-[#0F172A] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-pink-200/80">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#DC1F62] text-white shadow-xs">
                    {activeHero.badge}
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] mt-2">
                    {activeHero.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {activeHero.subtitle} · {activeHero.targetExamples}
                  </p>
                </div>

                <div className="sm:text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#0284C7] font-bold block mb-0.5">
                    Primary Benefit
                  </span>
                  <span className="font-heading font-black text-base sm:text-xl text-[#0F172A]">
                    {activeHero.primaryDesire}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-3">
                  <SpotlightCard
                    spotlightColor="rgba(220, 31, 98, 0.1)"
                    className="p-4 bg-pink-50/30 rounded-2xl border border-pink-100 hover:border-pink-300 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-xs uppercase tracking-wider mb-1">
                      <AlertCircle className="w-4 h-4 text-[#DC1F62]" />
                      <span>The Laundry Bottleneck</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {activeHero.externalProblem}
                    </p>
                  </SpotlightCard>

                  <SpotlightCard
                    spotlightColor="rgba(220, 31, 98, 0.1)"
                    className="p-4 bg-pink-50/30 rounded-2xl border border-pink-100 hover:border-pink-300 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-xs uppercase tracking-wider mb-1">
                      <AlertCircle className="w-4 h-4 text-[#DC1F62]" />
                      <span>The Daily Frustration</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {activeHero.internalProblem}
                    </p>
                  </SpotlightCard>

                  <SpotlightCard
                    spotlightColor="rgba(2, 132, 199, 0.1)"
                    className="p-4 bg-pink-50/30 rounded-2xl border border-pink-100 hover:border-pink-300 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-xs uppercase tracking-wider mb-1">
                      <TrendingDown className="w-4 h-4 text-[#0284C7]" />
                      <span>What Is At Stake</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {activeHero.whatIsAtStake}
                    </p>
                  </SpotlightCard>
                </div>

                <div className="h-full">
                  <SpotlightCard
                    spotlightColor="rgba(220, 31, 98, 0.15)"
                    className="bg-pink-50/40 p-6 sm:p-7 rounded-2xl border border-pink-200/80 shadow-sm flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-[#DC1F62] font-heading font-bold text-xs uppercase tracking-wider mb-3">
                        <CheckCircle2 className="w-5 h-5 text-[#DC1F62]" />
                        <span>The Door To Door Laundry Experience</span>
                      </div>

                      <p className="font-heading font-black text-xl sm:text-2xl text-[#0F172A] mb-5 leading-snug">
                        &ldquo;{activeHero.successLooksLike}&rdquo;
                      </p>

                      <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#0284C7] mt-0.5 shrink-0" />
                          <span>24 to 48 hour fast turnaround right to your front door</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#0284C7] mt-0.5 shrink-0" />
                          <span>Separated lights/darks, premium soaps &amp; master folding</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#0284C7] mt-0.5 shrink-0" />
                          <span>New customers get $10 OFF + Free Laundry Bag with code FIRST10</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={activeHero.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#DC1F62] hover:bg-[#BE185D] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all text-center active:translate-y-0.5 hover:scale-[1.02]"
                    >
                      <span>{activeHero.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </SpotlightCard>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </MotionWrapper>
      </div>
    </section>
  );
}
