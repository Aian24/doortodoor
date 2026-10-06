"use client";

import Image from "next/image";
import { specialsData } from "@/data/specials";
import { contactInfo } from "@/data/navigation";
import { useContactModal } from "@/context/ContactModalContext";
import MotionWrapper from "./MotionWrapper";
import {
  Tag,
  Sparkles,
  ExternalLink,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Gift,
  Shirt,
  Layers,
  Store,
} from "lucide-react";

export default function SpecialsSection() {
  const { openContactModal } = useContactModal();

  return (
    <section
      id="specials"
      className="py-16 sm:py-24 bg-[#FAF9F6] text-[#0F172A] border-b border-pink-200/80 select-none scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <MotionWrapper
          direction="up"
          distance={20}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF2FB] border border-[#DEF2FB] text-[#0284C7] text-[10px] font-bold uppercase tracking-widest mb-3">
            <Gift className="w-3.5 h-3.5 text-[#DC1F62]" />
            <span>{specialsData.badge}</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.05] mb-3">
            Specials &amp; Promotions. <br />
            <span className="text-[#DC1F62]">Unbeatable Value.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            {specialsData.tagline}
          </p>
        </MotionWrapper>

        {/* 4 Coupon / Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specialsData.tiers.map((deal, idx) => (
            <MotionWrapper
              key={deal.id}
              direction="up"
              delay={idx * 0.1}
              className="h-full"
            >
              <div className="bg-white border border-pink-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between h-full shadow-lg hover:border-[#DC1F62]/60 hover:shadow-xl hover:shadow-pink-100/60 transition-all group relative overflow-hidden">
                
                {/* Top Accent Stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#DC1F62] via-[#F43F5E] to-[#0284C7]" />

                <div>
                  {/* Top Badge & Price */}
                  <div className="flex items-center justify-between mb-3 pt-1">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#DEF2FB] text-[#0284C7] uppercase tracking-wider">
                      {deal.badge}
                    </span>
                    <span className="font-heading font-black text-xl text-[#DC1F62]">
                      {deal.priceDisplay}
                    </span>
                  </div>

                  {/* Image Graphic */}
                  {deal.image && (
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-100 border border-pink-100">
                      <Image
                        src={deal.image}
                        alt={deal.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Title & Tagline */}
                  <h3 className="font-heading font-black text-lg text-[#0F172A] mb-1.5 group-hover:text-[#DC1F62] transition-colors leading-tight">
                    {deal.name}
                  </h3>
                  <p className="text-xs text-slate-700 font-medium mb-3 leading-snug">
                    {deal.tagline}
                  </p>

                  <p className="text-[11px] text-slate-600 font-normal leading-relaxed mb-4">
                    {deal.description}
                  </p>

                  {/* Coupon Code Callout if available */}
                  {deal.couponCode && (
                    <div className="p-2.5 bg-pink-50/70 rounded-xl border border-dashed border-[#DC1F62] text-center mb-4">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">
                        Use Coupon Code
                      </span>
                      <span className="font-mono text-base font-black text-[#DC1F62] tracking-wider">
                        {deal.couponCode}
                      </span>
                    </div>
                  )}

                  {/* Feature Bullets */}
                  <div className="space-y-1.5 mb-5">
                    {deal.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-3 border-t border-slate-100 mt-auto">
                  <a
                    href={deal.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#DC1F62] hover:bg-[#BE185D] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:translate-y-0.5 hover:scale-102"
                  >
                    <span>{deal.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Long Island Service Areas Strip */}
        <MotionWrapper direction="up" delay={0.2} className="p-6 bg-white rounded-2xl border border-pink-200/80 text-center shadow-sm">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0284C7] block mb-2">
            SERVING ALL OF LONG ISLAND
          </span>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-700">
            {[
              "Huntington (11743)",
              "Greenlawn (11740)",
              "Huntington Station (11746)",
              "South Huntington (11746)",
              "Melville (11747)",
              "West Hills (11743)",
              "Syosset (11791)",
              "Massapequa (11758)",
            ].map((town) => (
              <span key={town} className="px-3 py-1 bg-pink-50/60 rounded-lg border border-pink-100 text-slate-800">
                {town}
              </span>
            ))}
          </div>
        </MotionWrapper>

      </div>
    </section>
  );
}
