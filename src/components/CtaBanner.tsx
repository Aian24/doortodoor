"use client";

import Link from "next/link";
import { contactInfo } from "@/data/navigation";
import { useContactModal } from "@/context/ContactModalContext";
import MotionWrapper from "./MotionWrapper";
import { Phone, Mail, ArrowUpRight, ArrowRight, Bot, Rocket } from "lucide-react";

export default function CtaBanner() {
  const { openContactModal } = useContactModal();

  return (
    <section id="contact" className="py-14 sm:py-16 bg-[#090D16] text-white relative overflow-hidden select-none text-center border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper direction="up" distance={20} className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#C0622A] text-[10px] font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C0622A]" />
            <span>Ready for Launch · Phoenix, AZ</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-3 leading-tight">
            Let&apos;s build <span className="text-[#C0622A]">your mission.</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto mb-6 leading-relaxed font-normal">
            Book a free strategy session, request an AI audit, or send us your project details. We&apos;ll map out exactly what your business needs — no pressure, no fluff.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <button
              type="button"
              onClick={() => openContactModal({ intent: "strategy-session" })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all active:translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <span>Book a Strategy Session</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => openContactModal({ intent: "ai-audit" })}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all active:translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <Bot className="w-3.5 h-3.5 text-[#2E8B7A]" />
              <span>Book an AI Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => openContactModal({ intent: "start-project" })}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all active:translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <Rocket className="w-3.5 h-3.5 text-[#C0622A]" />
              <span>Start Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-400 pt-4 border-t border-slate-800">
          <a
            href={contactInfo.phoneTel}
            className="inline-flex items-center gap-2 hover:text-white transition-colors font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-[#C0622A]" />
            <span>{contactInfo.phoneFormatted}</span>
          </a>

          <span className="text-slate-700">|</span>

          <a
            href={contactInfo.emailMailto}
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#C0622A]" />
            <span>{contactInfo.email}</span>
          </a>
        </div>
      </MotionWrapper>
      </div>
    </section>
  );
}


