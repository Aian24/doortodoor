"use client";

import Link from "next/link";
import { aiSectionData, aiPillarsData } from "@/data/aiServices";
import { useContactModal } from "@/context/ContactModalContext";
import {
  Brain,
  Zap,
  PenTool,
  MessageSquare,
  TrendingUp,
  BarChart3,
  Wrench,
  Building2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Bot,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Brain,
  Zap,
  PenTool,
  MessageSquare,
  TrendingUp,
  BarChart3,
  Wrench,
  Building2,
};

export default function AiSection() {
  const { openContactModal } = useContactModal();

  return (
    <section id="ai" className="py-12 lg:py-16 bg-[#FBFBFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[10px] font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C0622A]" />
              <span>{aiSectionData.badge}</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#090D16] tracking-tight leading-tight">
              The future isn&apos;t coming. <br />
              <span className="text-[#C0622A]">It&apos;s here.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mt-2 leading-relaxed">
              {aiSectionData.subheadline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => openContactModal({ intent: "ai-audit" })}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm whitespace-nowrap active:translate-y-0.5"
            >
              <span>Book an AI Audit →</span>
            </button>

            <button
              type="button"
              onClick={() => openContactModal({ intent: "start-project" })}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#090D16] hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm whitespace-nowrap active:translate-y-0.5"
            >
              <span>Start Your Project →</span>
            </button>
          </div>
        </div>

        {/* 8 AI Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {aiPillarsData.map((item) => {
            const Icon = iconMap[item.icon] || Brain;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon + Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#090D16] group-hover:bg-[#090D16] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    {item.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-base text-[#090D16] mb-1.5 leading-snug group-hover:text-[#C0622A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  {item.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-[11px] text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8B7A] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
