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
    <section id="faq" className="py-24 bg-white border-b border-slate-200 select-none scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionWrapper direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C0622A] font-bold block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#090D16] tracking-tight leading-[1.05] mb-4">
            Everything You <span className="text-[#C0622A]">Need to Know.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Clear answers on our subscription model, bundle savings, contracts, and delivery.
          </p>
        </MotionWrapper>

        {/* Accordion */}
        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <MotionWrapper
                key={item.question}
                direction="up"
                delay={idx * 0.05}
                distance={16}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base text-[#090D16]">
                    {item.question}
                  </span>

                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? "bg-[#C0622A] text-white"
                        : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50">
                    <p className="mt-3">{item.answer}</p>
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


