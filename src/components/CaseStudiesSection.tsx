"use client";

import { caseStudiesData, clientLogos } from "@/data/caseStudies";
import MotionWrapper from "./MotionWrapper";
import {
  ArrowUpRight,
  Hotel,
  Trophy,
  Database,
  Trees,
  Utensils,
  Landmark,
  Compass,
  Building2,
} from "lucide-react";

const caseStudyIconMap: Record<string, any> = {
  Hotel,
  Trophy,
  Database,
  Trees,
  Utensils,
  Landmark,
  Compass,
  Building2,
};

export default function CaseStudiesSection() {
  return (
    <section id="work" className="py-24 bg-white border-b border-slate-200 select-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <MotionWrapper direction="up" distance={20} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C0622A] font-bold block mb-3">
              OUR WORK &amp; CLIENT PROOF
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#090D16] tracking-tight leading-[1.05]">
              Results you <br />
              <span className="text-[#C0622A]">can see.</span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Over 20 years of building high-converting websites, software engines, and profitable growth campaigns across Phoenix and nationwide.
          </p>
        </MotionWrapper>

        {/* Logos Ribbon */}
        <MotionWrapper direction="up" delay={0.1} className="mb-14 p-8 bg-slate-50 rounded-3xl border border-slate-200 text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-5">
            Businesses We&apos;ve Helped Launch &amp; Scale
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 text-xs font-semibold hover:border-[#C0622A] hover:text-[#C0622A] transition-colors shadow-sm"
              >
                {logo}
              </span>
            ))}
          </div>
        </MotionWrapper>

        {/* Bento Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudiesData.map((study, idx) => {
            const isWide = idx === 0 || idx === 1;
            const IconComponent = caseStudyIconMap[study.icon] || Building2;

            return (
              <MotionWrapper
                key={study.id}
                direction="up"
                delay={idx * 0.06}
                distance={20}
                className={`p-7 rounded-3xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                  isWide
                    ? "md:col-span-2 lg:col-span-2 bg-[#090D16] text-white border-slate-800"
                    : "bg-slate-50 text-slate-900 border-slate-200"
                } flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                        isWide
                          ? "bg-[#C0622A]/20 text-[#C0622A] border border-[#C0622A]/30"
                          : "bg-white text-[#C0622A] border border-slate-200 shadow-sm"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isWide
                          ? "bg-white/10 text-[#C0622A]"
                          : "bg-white text-slate-600 border border-slate-200"
                      }`}
                    >
                      {study.industry}
                    </span>
                  </div>

                  <h3
                    className={`font-heading font-black text-2xl sm:text-3xl mb-2 ${
                      isWide ? "text-white" : "text-[#090D16]"
                    }`}
                  >
                    {study.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                      isWide ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                          isWide
                            ? "bg-slate-800 text-slate-300"
                            : "bg-white text-slate-600 border border-slate-200"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`p-4 rounded-2xl flex items-center justify-between ${
                    isWide
                      ? "bg-slate-950 border border-slate-800"
                      : "bg-white border border-slate-200"
                  }`}
                >
                  <div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider block ${
                        isWide ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {study.metricLabel}
                    </span>
                    <span className="font-heading font-black text-2xl text-[#C0622A]">
                      {study.metricValue}
                    </span>
                  </div>

                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      isWide
                        ? "bg-slate-800 text-white"
                        : "bg-[#C0622A] text-white"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

