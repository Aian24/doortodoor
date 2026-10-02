"use client";

import { useState } from "react";
import { servicesData, ServiceItem } from "@/data/services";
import { useContactModal } from "@/context/ContactModalContext";
import MotionWrapper from "./MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import {
  Megaphone,
  Palette,
  Cpu,
  Code2,
  Video,
  Mail,
  Layers,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Megaphone,
  Palette,
  Cpu,
  Code2,
  Video,
  Mail,
  Layers,
  BarChart3,
};

export default function ServicesBento() {
  const { openContactModal } = useContactModal();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // 6 Canonical Services + Specialized Add-ons
  const coreServices = servicesData.slice(0, 6);
  const additionalServices = servicesData.slice(6);

  const handleBookService = (service: ServiceItem) => {
    setSelectedService(null);
    openContactModal({
      intent: "strategy-session",
      serviceInterest: service.title,
      notes: `Interested in ReLaunch service: ${service.title} ($${service.basePriceMonthly}/mo bundle rate).`,
    });
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#FBFBFA] border-b border-slate-200 select-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionWrapper
          direction="up"
          distance={20}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#C0622A] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3 text-[#C0622A]" />
              <span>EVERYTHING UNDER ONE ROOF</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#090D16] tracking-tight leading-[1.05]">
              Choose what you need. <br className="hidden sm:block" />
              <span className="text-[#C0622A]">Bundle &amp; save.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3.5 max-w-md">
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal text-left lg:text-right">
              Six core service lines. Mix any of them — the more you bundle, the more you save up to 20%. Pause or cancel anytime.
            </p>
            <Link
              href="#bundle-builder"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm active:translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <span>Build My Bundle</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </MotionWrapper>

        {/* Clean, Sleek 6-Card Master Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Code2;

            return (
              <MotionWrapper
                key={service.id}
                direction="up"
                delay={idx * 0.05}
                distance={16}
              >
                <div
                  onClick={() => setSelectedService(service)}
                  className="group bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#C0622A]/50 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Subtle top accent highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#C0622A] transition-colors" />

                  <div>
                    {/* Top Row: Icon, Category Badge & Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-[#090D16] text-[#090D16] group-hover:text-[#C0622A] flex items-center justify-center transition-colors border border-slate-200/60">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600">
                          {service.category}
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#C0622A] transition-colors">
                          {service.num}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-[#090D16] group-hover:text-[#C0622A] transition-colors mb-2.5 tracking-tight">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Summary Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {service.summaryTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200/80 group-hover:bg-orange-50/50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Rate & Action Button */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">
                        Bundle Rate
                      </span>
                      <span className="font-heading font-black text-lg text-[#090D16]">
                        ${service.basePriceMonthly}
                        <span className="text-xs font-normal text-slate-500">/mo</span>
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#090D16] group-hover:text-[#C0622A] transition-colors">
                      <span>View Scope</span>
                      <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#C0622A] group-hover:text-white flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>

        {/* Specialized Enterprise Add-Ons Strip */}
        {additionalServices.length > 0 && (
          <MotionWrapper
            direction="up"
            delay={0.2}
            className="mt-8 p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Enterprise &amp; Specialized Add-Ons
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  {additionalServices.map((service) => {
                    const AddonIcon = iconMap[service.iconName] || Layers;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-[#C0622A]/40 transition-colors text-xs font-bold text-slate-800 hover:text-[#C0622A] cursor-pointer"
                      >
                        <AddonIcon className="w-3.5 h-3.5 text-[#C0622A]" />
                        <span>{service.title}</span>
                        <span className="text-[10px] font-mono text-slate-400">(${service.basePriceMonthly}/mo)</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <Link
                href="#bundle-builder"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm whitespace-nowrap self-start sm:self-auto cursor-pointer"
              >
                <span>Calculate Bundle Savings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </MotionWrapper>
        )}
      </div>

      {/* ---------------------------------------------------- */}
      {/* SERVICE DETAILS MODAL                                */}
      {/* ---------------------------------------------------- */}
      {selectedService && (
        <div
          key="service-detail-modal"
          className="fixed inset-0 z-[998] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden animate-in fade-in duration-150"
        >
          {/* Backdrop */}
          <div
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-[#090D16]/85 transition-opacity"
          />

          {/* Modal Dialog */}
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto flex flex-col max-h-[90vh] animate-in zoom-in-95 fade-in duration-150"
          >
            {/* Modal Top Header */}
            <div className="bg-[#090D16] text-white p-6 sm:p-7 flex items-start justify-between border-b border-slate-800 gap-4">
              <div className="flex items-start gap-4">
                {(() => {
                  const ModalIcon = iconMap[selectedService.iconName] || Code2;
                  return (
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-[#C0622A] flex items-center justify-center shrink-0">
                      <ModalIcon className="w-6 h-6" />
                    </div>
                  );
                })()}
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[#2E8B7A] text-[10px] font-mono font-bold uppercase tracking-wider whitespace-nowrap">
                      {selectedService.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-400 whitespace-nowrap">
                      Service {selectedService.num}
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
              <p className="text-slate-700 text-sm leading-relaxed">
                {selectedService.shortDescription}
              </p>

              {/* Deliverables Breakdown */}
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C0622A]" />
                  <span>Deliverables &amp; Scope Included:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2E8B7A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Sells / Strategy Pitch */}
              <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/70 border border-[#C0622A]/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C0622A] uppercase tracking-wider mb-1.5">
                  <Zap className="w-4 h-4" />
                  <span>How This Sells For Your Business:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {selectedService.howItSells}
                </p>
              </div>

              {/* Bottom Pricing & Action */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block whitespace-nowrap">
                    Individual Bundle Rate
                  </span>
                  <span className="font-heading font-black text-2xl text-[#090D16] whitespace-nowrap">
                    ${selectedService.basePriceMonthly}
                    <span className="text-xs font-normal text-slate-500">/mo</span>
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    {selectedService.pricingNote}
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => handleBookService(selectedService)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5 cursor-pointer whitespace-nowrap"
                  >
                    <span>Get Started with This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
