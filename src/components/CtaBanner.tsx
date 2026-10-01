"use client";

import Link from "next/link";
import { contactInfo } from "@/data/navigation";
import MotionWrapper from "./MotionWrapper";
import { Phone, Mail, ArrowUpRight, ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="contact" className="py-24 bg-[#090D16] text-white relative overflow-hidden select-none text-center border-b border-slate-800 scroll-mt-20">
      <MotionWrapper direction="up" distance={24} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#C0622A] text-[11px] font-bold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C0622A]" />
          <span>Ready for Launch · Phoenix, AZ</span>
        </div>

        <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight mb-6 leading-tight">
          Let&apos;s build <br />
          <span className="text-[#C0622A]">your mission.</span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Book a free strategy session. We&apos;ll map out exactly what your business needs — no pressure, no fluff. Just a clear plan.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          <a
            href={`mailto:${contactInfo.email}?subject=ReLaunch%20Strategy%20Session%20Request&body=Hi%20ReLaunch%20team,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20strategy%20session.`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all active:translate-y-0.5 whitespace-nowrap"
          >
            <span>Book a Strategy Session</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="#bundle-builder"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all active:translate-y-0.5 whitespace-nowrap"
          >
            <span>Build My Bundle</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-400 pt-6 border-t border-slate-800">
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
    </section>
  );
}


