"use client";

import { testimonialsData } from "@/data/testimonials";
import MotionWrapper from "./MotionWrapper";
import SpotlightCard from "./SpotlightCard";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-[#FAF9F6] border-b border-pink-200/80 select-none scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionWrapper direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#DC1F62] font-bold block mb-2">
            CUSTOMER STORIES &amp; REVIEWS
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.05] mb-3">
            What Our Customers <span className="text-[#DC1F62]">Are Saying.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            Read verified Google reviews from Long Island families, professionals, and business owners who rely on Door to Door Laundry.
          </p>
        </MotionWrapper>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-6 w-full mb-8">
          {testimonialsData.map((testi, idx) => (
            <MotionWrapper
              key={testi.id}
              direction="up"
              delay={idx * 0.1}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(220, 31, 98, 0.12)"
                className="bg-white p-6 rounded-2xl border border-pink-200/80 shadow-sm flex flex-col justify-between relative hover:shadow-xl hover:shadow-pink-100/60 hover:border-[#DC1F62]/50 transition-all duration-300 h-full group"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-slate-300 group-hover:text-[#DC1F62] transition-colors" />
                  </div>

                  <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic mb-5">
                    &ldquo;{testi.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-t border-pink-100 flex items-center justify-between gap-2 mt-auto">
                  <div>
                    <div className="font-heading font-bold text-sm text-[#0F172A]">
                      {testi.name}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {testi.company} · <span className="text-[#0284C7] font-semibold">Google Reviews</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold text-[#DC1F62] bg-pink-50 border border-pink-100 px-2.5 py-0.5 rounded-full">
                    {testi.serviceUsed}
                  </span>
                </div>
              </SpotlightCard>
            </MotionWrapper>
          ))}
        </div>

        {/* 5-Star Rating Verification Strip */}
        <MotionWrapper direction="up" delay={0.2} className="p-4 bg-white rounded-2xl border border-pink-200/80 shadow-xs max-w-2xl mx-auto flex items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-xs font-bold text-[#0F172A]">
            Rated 5.0 Stars by Long Island Customers on Google &amp; Yelp
          </span>
        </MotionWrapper>
      </div>
    </section>
  );
}
