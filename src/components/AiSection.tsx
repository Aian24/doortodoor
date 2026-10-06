"use client";

import React from "react";
import { aiSectionData, aiPillarsData } from "@/data/aiServices";
import { useContactModal } from "@/context/ContactModalContext";
import {
  Smartphone,
  BellRing,
  Sliders,
  Truck,
  Droplets,
  ShieldCheck,
  Receipt,
  Store,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import MotionWrapper from "./MotionWrapper";
import SpotlightCard from "./SpotlightCard";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  BellRing,
  Sliders,
  Truck,
  Droplets,
  ShieldCheck,
  Receipt,
  Store,
};

export default function AiSection() {
  const { openContactModal } = useContactModal();

  return (
    <section
      id="smart-laundry"
      className="py-16 lg:py-24 bg-[#FAF9F6] border-b border-pink-200/80 select-none scroll-mt-20 overflow-hidden relative"
    >
      {/* Subtle Background Wash */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#DC1F62 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <MotionWrapper
          direction="up"
          distance={20}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DEF2FB] border border-[#DEF2FB] text-[#0284C7] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DC1F62]" />
              <span>{aiSectionData.badge}</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.05]">
              Modern Laundry Technology. <br />
              <span className="text-[#DC1F62]">Zero Waiting Around.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mt-2 leading-relaxed">
              {aiSectionData.subheadline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 self-start md:self-auto">
            <a
              href="https://doortodoorlaundry.curbsidelaundries.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#DC1F62] hover:bg-[#BE185D] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md whitespace-nowrap active:translate-y-0.5 hover:scale-102"
            >
              <span>Schedule a Pickup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => openContactModal({ intent: "commercial-bid" })}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm whitespace-nowrap active:translate-y-0.5 cursor-pointer hover:scale-102"
            >
              <span>Commercial Bid</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </MotionWrapper>

        {/* 8 Modern Tech Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {aiPillarsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <MotionWrapper
                key={item.id}
                direction="up"
                delay={idx * 0.05}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(220, 31, 98, 0.12)"
                  className="bg-white p-5 rounded-2xl border border-pink-200/80 shadow-sm hover:border-[#DC1F62]/50 hover:shadow-xl hover:shadow-pink-100/50 transition-all flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Icon & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#DC1F62] group-hover:scale-110 group-hover:bg-[#DC1F62] group-hover:text-white transition-all shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      {item.tag && (
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-pink-50/60 text-pink-800 border border-pink-100">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#0F172A] group-hover:text-[#DC1F62] transition-colors mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="pt-3 border-t border-pink-100 space-y-1.5 mt-auto">
                    {item.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-[11px] text-slate-600 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
