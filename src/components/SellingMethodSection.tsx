"use client";

import { sellingFrameworkLayers, threeStepPlan } from "@/data/sellingFramework";
import MotionWrapper from "./MotionWrapper";
import { CheckCircle2 } from "lucide-react";

export default function SellingMethodSection() {
  return (
    <section id="method" className="py-24 bg-white border-b border-slate-200 select-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionWrapper direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C0622A] font-bold block mb-3">
            THE RELAUNCH METHOD
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#090D16] tracking-tight leading-[1.05] mb-4">
            Marketing That Sells. <br />
            <span className="text-[#C0622A]">Nothing Else Ships.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Every deliverable is engineered on our four-layer selling framework. Clients buy results, not methods—our framework ensures every piece moves customers toward buying.
          </p>
        </MotionWrapper>

        {/* 4 Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sellingFrameworkLayers.map((layer, idx) => (
            <MotionWrapper
              key={layer.layer}
              direction="up"
              delay={idx * 0.08}
              distance={24}
              className="bg-slate-50 p-7 rounded-3xl border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-heading font-black text-xl px-3 py-1 rounded-full text-white shadow-sm"
                    style={{ backgroundColor: layer.color }}
                  >
                    {layer.weightPercent}
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    Layer 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#090D16] mb-2">
                  {layer.layer}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {layer.role}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                  Where It Applies:
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  {layer.whereItApplies}
                </span>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Ironclad Standard Box */}
        <MotionWrapper direction="up" delay={0.15} className="max-w-4xl mx-auto mb-20">
          <div className="p-8 sm:p-10 bg-[#090D16] text-white rounded-3xl text-center shadow-xl border border-slate-800">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C0622A] font-bold mb-3 block">
              OUR IRONCLAD PRODUCTION STANDARD
            </span>
            <blockquote className="font-heading font-black text-2xl sm:text-3xl text-white leading-snug mb-4">
              &ldquo;Standard for every deliverable: it must name the customer&apos;s problem, present the client as the answer, and ask for an action. Anything that doesn&apos;t sell doesn&apos;t ship.&rdquo;
            </blockquote>
            <p className="text-xs text-slate-400 font-medium">
              — ReLaunch Operating Principle since 2004 · Phoenix, Arizona
            </p>
          </div>
        </MotionWrapper>

        {/* 3-Step Execution Plan */}
        <div className="max-w-5xl mx-auto">
          <MotionWrapper direction="up" className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-heading font-black text-3xl text-[#090D16] mb-2">
              The 3-Step Plan
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear, transparent, and built for rapid turnaround.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {threeStepPlan.map((step, index) => (
              <MotionWrapper
                key={step.stepNumber}
                direction="up"
                delay={index * 0.1}
                className="bg-slate-50 p-7 rounded-3xl border border-slate-200 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#090D16] text-white flex items-center justify-center font-heading font-black text-sm mb-4 shadow">
                    {step.stepNumber}
                  </div>

                  <h4 className="font-heading font-bold text-lg text-[#090D16] mb-2">
                    {step.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="text-[11px] text-[#C0622A] font-semibold bg-white p-3 rounded-2xl border border-slate-200">
                  {step.detail}
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


