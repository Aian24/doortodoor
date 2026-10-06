"use client";

import { sellingFrameworkLayers, threeStepPlan } from "@/data/sellingFramework";
import MotionWrapper from "./MotionWrapper";
import SpotlightCard from "./SpotlightCard";
import { CheckCircle2, Calendar, Package, Sparkles, Truck } from "lucide-react";

const stepIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "01": Calendar,
  "02": Package,
  "03": Sparkles,
  "04": Truck,
};

export default function SellingMethodSection() {
  return (
    <section id="how-it-works" className="py-14 sm:py-20 bg-[#FAF9F6] border-b border-pink-200/80 select-none scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionWrapper direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#DC1F62] font-bold block mb-2">
            SIMPLE 4-STEP CONVENIENCE
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.05] mb-3">
            How Door to Door Works. <br />
            <span className="text-[#DC1F62]">You Leave It, We Clean It.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            Doing laundry has never been easier. No hauling heavy bags, no waiting on washer timers, no folding mountains of clothes. We handle everything from door to door.
          </p>
        </MotionWrapper>

        {/* 4-Step Execution Plan Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {threeStepPlan.map((step, index) => {
            const Icon = stepIcons[step.stepNumber] || Sparkles;

            return (
              <MotionWrapper
                key={step.stepNumber}
                direction="left"
                delay={index * 0.1}
                distance={40}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(220, 31, 98, 0.12)"
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-pink-200/80 relative flex flex-col justify-between h-full group hover:border-[#DC1F62]/60 hover:shadow-xl hover:shadow-pink-100/50 transition-all"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#DC1F62] text-white flex items-center justify-center font-heading font-black text-sm shadow-md group-hover:scale-110 transition-transform">
                        {step.stepNumber}
                      </div>
                      <Icon className="w-6 h-6 text-[#0284C7]" />
                    </div>

                    <h4 className="font-heading font-black text-lg text-[#0F172A] mb-2 leading-tight">
                      {step.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="text-[11px] text-[#DC1F62] font-semibold bg-pink-50/70 p-2.5 rounded-xl border border-pink-100 mt-auto">
                    {step.detail}
                  </div>
                </SpotlightCard>
              </MotionWrapper>
            );
          })}
        </div>

        {/* 4 Fabric Quality Layers Grid */}
        <div className="mb-10">
          <MotionWrapper direction="up" className="text-center max-w-2xl mx-auto mb-6">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#0F172A] mb-1">
              Our 4-Stage Fabric Care Standards
            </h3>
            <p className="text-xs text-slate-500">
              Every garment is sorted, sanitized, gently dried, and hand-inspected with 30+ years of expertise.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {sellingFrameworkLayers.map((layer, idx) => (
              <MotionWrapper
                key={layer.layer}
                direction="up"
                delay={idx * 0.08}
              >
                <SpotlightCard
                  spotlightColor="rgba(220, 31, 98, 0.1)"
                  className="bg-white p-5 rounded-2xl border border-pink-200/80 flex flex-col justify-between hover:border-[#DC1F62]/50 hover:shadow-lg hover:shadow-pink-100/50 transition-all h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="font-heading font-black text-sm px-2.5 py-0.5 rounded-full text-white shadow-xs"
                        style={{ backgroundColor: layer.color }}
                      >
                        Stage 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-base text-[#0F172A] mb-1.5">
                      {layer.layer}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                      {layer.role}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-pink-100">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
                      Focus:
                    </span>
                    <span className="text-xs font-semibold text-slate-800">
                      {layer.whereItApplies}
                    </span>
                  </div>
                </SpotlightCard>
              </MotionWrapper>
            ))}
          </div>
        </div>

        {/* Operating Standard Guarantee Box */}
        <MotionWrapper direction="up" distance={30} className="w-full">
          <SpotlightCard
            spotlightColor="rgba(220, 31, 98, 0.2)"
            className="p-6 sm:p-8 bg-gradient-to-br from-pink-50/90 via-white to-pink-50/60 text-[#0F172A] rounded-2xl sm:rounded-3xl text-center shadow-xl border border-pink-200/90 max-w-4xl mx-auto"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#DC1F62] font-bold mb-2 block">
              OUR 100% SATISFACTION GUARANTEE
            </span>
            <blockquote className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-[#0F172A] leading-snug mb-3">
              &ldquo;We treat your garments with the same care and attention as our own family&apos;s laundry. If you&apos;re ever not 100% satisfied, we will re-wash it immediately at no charge.&rdquo;
            </blockquote>
            <p className="text-xs text-slate-600 font-medium">
              — Door to Door Laundry &amp; Village Laundromat · Huntington, NY (Serving Long Island for 30+ Years)
            </p>
          </SpotlightCard>
        </MotionWrapper>

      </div>
    </section>
  );
}
