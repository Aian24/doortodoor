"use client";

import { testimonialsData } from "@/data/testimonials";
import MotionWrapper from "./MotionWrapper";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200 select-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionWrapper direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C0622A] font-bold block mb-2">
            CLIENT STORIES
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#090D16] tracking-tight leading-[1.05] mb-3">
            Real businesses. <span className="text-[#C0622A]">Real results.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            Hear directly from business owners and founders who rely on ReLaunch.
          </p>
        </MotionWrapper>

        {/* Testimonials Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          {testimonialsData.map((testi, idx) => (
            <MotionWrapper
              key={testi.id}
              direction="up"
              delay={idx * 0.08}
              distance={16}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between relative hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#C0622A] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C0622A] stroke-[#C0622A]" />
                  ))}
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic mb-4">
                  &ldquo;{testi.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-xs sm:text-sm text-[#090D16]">
                    {testi.name}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {testi.company}
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-[#C0622A] bg-orange-50 px-2 py-0.5 rounded-full border border-[#C0622A]/20">
                  {testi.serviceUsed}
                </span>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}


