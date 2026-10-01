"use client";

import { useState } from "react";
import Link from "next/link";
import { twoHeroesData } from "@/data/sellingFramework";
import { motion, AnimatePresence } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import {
  Store,
  Layers,
  ArrowRight,
  AlertCircle,
  TrendingDown,
  CheckCircle2,
  Check,
} from "lucide-react";

export default function TwoHeroesSection() {
  const [activeTab, setActiveTab] = useState<"local-business" | "enterprise-tech">(
    "local-business"
  );

  const activeHero = twoHeroesData.find((h) => h.id === activeTab)!;

  return (
    <section id="two-doors" className="py-24 bg-[#F8F9FA] border-b border-slate-200 select-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Scroll Reveal */}
        <MotionWrapper direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C0622A] font-bold block mb-3">
            STRATEGIC POSITIONING · TWO DOORS
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#090D16] tracking-tight leading-[1.05] mb-4">
            Two Paths to Growth. <br />
            <span className="text-[#C0622A] italic">Which Door Fits You?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Whether you need more inbound customer calls for your local service business or custom software that actually ships on time—we have a dedicated path designed for you.
          </p>
        </MotionWrapper>

        {/* Tab Switcher with Scroll Animation */}
        <MotionWrapper direction="up" delay={0.1} className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-200 rounded-xl border border-slate-300">
            {twoHeroesData.map((hero) => {
              const isSelected = activeTab === hero.id;
              return (
                <button
                  key={hero.id}
                  onClick={() => setActiveTab(hero.id as any)}
                  className={`flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-lg font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 ${
                    isSelected
                      ? "bg-[#090D16] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {hero.id === "local-business" ? (
                    <Store className="w-4 h-4" />
                  ) : (
                    <Layers className="w-4 h-4" />
                  )}
                  <span>{hero.title}</span>
                </button>
              );
            })}
          </div>
        </MotionWrapper>

        {/* Comparison Card with Scroll Reveal */}
        <MotionWrapper direction="up" delay={0.2} className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="bg-[#090D16] text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#C0622A] text-white">
                {activeHero.badge}
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-4xl text-white mt-3">
                {activeHero.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {activeHero.subtitle} · {activeHero.targetExamples}
              </p>
            </div>

            <div className="sm:text-right">
              <span className="text-[10px] uppercase tracking-widest text-[#C0622A] font-bold block mb-1">
                Primary Goal
              </span>
              <span className="font-heading font-black text-lg sm:text-xl text-white">
                {activeHero.primaryDesire}
              </span>
            </div>
          </div>

          <div className="p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-[#C0622A]" />
                  <span>The External Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeHero.externalProblem}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-[#C0622A]" />
                  <span>The Internal Frustration</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeHero.internalProblem}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-xs uppercase tracking-wider mb-1">
                  <TrendingDown className="w-4 h-4 text-[#C0622A]" />
                  <span>What Is At Stake</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeHero.whatIsAtStake}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#C0622A] font-heading font-bold text-xs uppercase tracking-wider mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C0622A]" />
                  <span>What Success Looks Like</span>
                </div>

                <p className="font-heading font-black text-xl sm:text-2xl text-[#090D16] mb-5 leading-snug">
                  &ldquo;{activeHero.successLooksLike}&rdquo;
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C0622A] mt-0.5 shrink-0" />
                    <span>Engineered on the 4-layer selling framework (SB7, Hero&apos;s Journey, Draper)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C0622A] mt-0.5 shrink-0" />
                    <span>Single flexible monthly subscription — pause or cancel anytime</span>
                  </div>
                </div>
              </div>

              <Link
                href={activeHero.ctaHref}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all text-center active:translate-y-0.5"
              >
                <span>{activeHero.ctaText} →</span>
              </Link>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
