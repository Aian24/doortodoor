"use client";

import { useState } from "react";
import { faqData } from "@/data/faq";
import MotionWrapper from "./MotionWrapper";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-14 sm:py-16 bg-white border-b border-slate-200 select-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionWrapper direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C0622A] font-bold block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#090D16] tracking-tight leading-[1.05] mb-3">
            Everything You <span className="text-[#C0622A]">Need to Know.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            Clear answers on our subscription model, bundle savings, contracts, and delivery.
          </p>
        </MotionWrapper>

        {/* Accordion */}
        <div className="space-y-2.5 max-w-5xl mx-auto">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <MotionWrapper
                key={item.question}
                direction="up"
                delay={idx * 0.04}
                distance={12}
                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-[#090D16]">
                    {item.question}
                  </span>

                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? "bg-[#C0622A] text-white"
                        : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50">
                    <p className="mt-2.5">{item.answer}</p>
                  </div>
                )}
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}


