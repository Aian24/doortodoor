"use client";

import { testimonialsData } from "@/data/testimonials";
import MotionWrapper from "./MotionWrapper";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-b border-slate-200 select-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionWrapper direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C0622A] font-bold block mb-3">
            CLIENT STORIES
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#090D16] tracking-tight leading-[1.05] mb-4">
            Real businesses. <br />
            <span className="text-[#C0622A]">Real results.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Hear directly from business owners and founders who rely on ReLaunch.
          </p>
        </MotionWrapper>

        {/* Testimonials Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonialsData.map((testi, idx) => (
            <MotionWrapper
              key={testi.id}
              direction="up"
              delay={idx * 0.1}
              distance={24}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between relative hover:shadow-xl transition-all duration-200"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#C0622A] mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C0622A] stroke-[#C0622A]" />
                  ))}
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic mb-6">
                  &ldquo;{testi.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-sm text-[#090D16]">
                    {testi.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {testi.company}
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-[#C0622A] bg-orange-50 px-2.5 py-1 rounded-full border border-[#C0622A]/20">
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


