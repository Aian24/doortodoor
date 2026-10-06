"use client";

import Link from "next/link";
import { contactInfo } from "@/data/navigation";
import { useContactModal } from "@/context/ContactModalContext";
import MotionWrapper from "./MotionWrapper";
import { Phone, Mail, MapPin, Calendar, Sparkles, ArrowRight, Tag } from "lucide-react";

export default function CtaBanner() {
  const { openContactModal } = useContactModal();

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF9F6] text-[#0F172A] relative overflow-hidden select-none text-center border-b border-slate-200 scroll-mt-20">
      {/* Ambient Pink Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/40 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper direction="up" distance={20} className="max-w-4xl mx-auto bg-white/90 border border-pink-200/80 rounded-3xl p-8 sm:p-12 shadow-xl backdrop-blur-md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#DC1F62] text-[10px] font-mono font-bold uppercase tracking-widest mb-4 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC1F62] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DC1F62]"></span>
            </span>
            <span>Serving Huntington &amp; All Long Island</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight mb-3 leading-tight">
            Never Do Laundry Again. <br />
            <span className="text-[#DC1F62]">You Leave It, We Clean It.</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Reclaim your precious free time. Schedule your doorstep pickup today and get $10 OFF + a free reusable laundry bag on your first order.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href={contactInfo.portalOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#DC1F62] hover:bg-[#BE185D] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all active:translate-y-0.5 whitespace-nowrap hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Pickup</span>
            </a>

            <button
              type="button"
              onClick={() => openContactModal({ intent: "commercial-bid" })}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all active:translate-y-0.5 whitespace-nowrap cursor-pointer hover:scale-105 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Commercial Bid</span>
            </button>

            <a
              href={contactInfo.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all active:translate-y-0.5 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#DC1F62]" />
              <span>(631) 769-9922</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 font-semibold text-slate-700">
              <Tag className="w-3.5 h-3.5 text-[#DC1F62]" />
              <span>Promo Code: <strong className="text-[#0284C7]">FIRST10</strong></span>
            </div>

            <span className="text-slate-300 hidden sm:inline">|</span>

            <a
              href={contactInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#DC1F62] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>215 New York Ave, Huntington, NY 11743</span>
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
