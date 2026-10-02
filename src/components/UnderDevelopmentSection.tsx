"use client";

import React from "react";
import MotionWrapper from "./MotionWrapper";
import { Construction, Sparkles, Clock, ArrowRight } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

interface UnderDevelopmentProps {
  id: string;
  title: string;
  subtitle?: string;
}

export default function UnderDevelopmentSection({
  id,
  title,
  subtitle = "This interactive module is currently under active development and scheduled for our Sprint 2 release.",
}: UnderDevelopmentProps) {
  const { openContactModal } = useContactModal();

  return (
    <section
      id={id}
      className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200 scroll-mt-20 select-none relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper direction="up" distance={16}>
          {/* Construction Blueprint Card with Dashed Border */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-dashed border-[#C0622A]/40 shadow-sm p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Top Amber Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#C0622A]" />

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-[#C0622A]/20 text-[#C0622A] flex items-center justify-center mx-auto mb-5 shadow-xs">
              <Construction className="w-8 h-8 animate-bounce [animation-duration:2s]" />
            </div>

            {/* Obvious Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-[#C0622A]/30 text-[#C0622A] text-xs font-mono font-black uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C0622A] animate-ping" />
              <span>UNDER DEVELOPMENT · SPRINT 2</span>
            </div>

            {/* Feature Title */}
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#090D16] tracking-tight mb-3">
              {title}
            </h2>

            {/* Clear Explanation */}
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-6 font-normal">
              {subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Phase 2 Release · In Progress</span>
              </span>

              <button
                type="button"
                onClick={() =>
                  openContactModal({
                    intent: "strategy-session",
                    notes: `Inquiry regarding ${title} (Sprint 2 rollout).`,
                  })
                }
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#090D16] hover:bg-[#C0622A] text-white text-xs font-bold font-heading uppercase tracking-wider rounded-xl transition-all shadow-sm active:translate-y-0.5"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
