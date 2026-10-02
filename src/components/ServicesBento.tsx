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
  ShieldCheck,
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

  // 6 Canonical Services from relaunch.us/services.html + Specialized Add-ons
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
    <section id="services" className="bg-[#FFFFFF] border-b border-slate-200 select-none scroll-mt-20">
      {/* ---------------------------------------------------- */}
      {/* PART 1: Top Overview & Interactive Service Rows      */}
      {/* ---------------------------------------------------- */}
      <div className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
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

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
            Six core service lines. Mix any of them — the more you bundle, the more you save. One-time projects are quoted separately.
          </p>
        </MotionWrapper>

        {/* Interactive Service Rows (01 to 06) */}
        <div className="border-t-2 border-[#090D16] divide-y divide-slate-200">
          {coreServices.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Code2;

            return (
              <MotionWrapper
                key={service.id}
                direction="up"
                delay={idx * 0.04}
                distance={12}
              >
                <div
                  onClick={() => setSelectedService(service)}
                  className="group relative flex flex-col xl:flex-row xl:items-center justify-between py-4 sm:py-5 px-3 hover:bg-slate-50 cursor-pointer transition-all duration-200 gap-3 xl:gap-6"
                >
                  {/* Left Highlight Accent Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1.5 bg-[#C0622A] transition-all duration-200" />

                  {/* Left: Number + Lucide Icon + Title (No wrapping) */}
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-400 group-hover:text-[#C0622A] transition-colors w-7 shrink-0">
                      {service.num}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#090D16] text-[#090D16] group-hover:text-[#C0622A] flex items-center justify-center transition-colors shrink-0 border border-slate-200/60">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3 className="font-heading font-black text-lg sm:text-2xl text-[#090D16] group-hover:text-[#C0622A] transition-colors tracking-tight whitespace-nowrap">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Summary Tags + Arrow Trigger */}
                  <div className="flex items-center justify-between xl:justify-end gap-3 w-full xl:w-auto pl-10 xl:pl-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {service.summaryTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10.5px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 group-hover:bg-white text-slate-700 border border-slate-200/80 transition-colors whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow Button */}
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#C0622A] text-slate-600 group-hover:text-white flex items-center justify-center transition-all shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>

        {/* Additional Specialized Services */}
        {additionalServices.length > 0 && (
          <div className="mt-4 pt-4 border-t border-dashed border-slate-200">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 px-3">
              Specialized Enterprise &amp; Strategic Add-Ons:
            </div>
            <div className="divide-y divide-slate-100">
              {additionalServices.map((service) => {
                const AddonIcon = iconMap[service.iconName] || Layers;

                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-3 px-3 hover:bg-orange-50/40 rounded-xl cursor-pointer transition-all gap-2"
                  >
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#C0622A] w-7 shrink-0">
                        {service.num}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-[#090D16] text-[#090D16] group-hover:text-[#C0622A] flex items-center justify-center transition-colors shrink-0">
                        <AddonIcon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-slate-800 group-hover:text-[#C0622A] transition-colors whitespace-nowrap">
                        {service.title}
                      </h4>
                      {service.badge && (
                        <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider rounded-md bg-slate-100 text-slate-600 border border-slate-200 whitespace-nowrap hidden sm:inline-block">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 pl-10 sm:pl-0 text-xs font-semibold text-[#C0622A] shrink-0">
                      <span className="whitespace-nowrap">View Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ---------------------------------------------------- */}
      {/* PART 2: "What's Included — A closer look at every service" */}
      {/* Exact dark section from relaunch.us/services.html     */}
      {/* ---------------------------------------------------- */}
      <div className="py-16 sm:py-20 bg-[#0D1629] text-white relative overflow-hidden">
        {/* Ambient Glowing Orbs */}
        <div
          className="absolute -top-32 right-0 w-96 h-96 rounded-full pointer-events-none opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #2E8B7A 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 left-0 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #C0622A 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <MotionWrapper
            direction="up"
            distance={20}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14 border-b border-slate-800 pb-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#2E8B7A] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2E8B7A]" />
                <span>WHAT&apos;S INCLUDED</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.05]">
                A closer look at <br />
                <span className="italic text-[#2E8B7A]">every service.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="#bundle-builder"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2E8B7A] hover:text-[#5ecfbc] transition-colors py-2.5 px-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#2E8B7A]/50 whitespace-nowrap"
              >
                <span>See Bundle Pricing →</span>
              </Link>
            </div>
          </MotionWrapper>

          {/* 6 What's Included Dark Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {coreServices.map((service, idx) => {
              const CardIcon = iconMap[service.iconName] || Code2;

              return (
                <MotionWrapper
                  key={service.id}
                  direction="up"
                  delay={idx * 0.05}
                  distance={16}
                >
                  <div
                    onClick={() => setSelectedService(service)}
                    className="group p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-[#2E8B7A]/60 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer hover:-translate-y-1 shadow-lg backdrop-blur-sm"
                  >
                    <div>
                      {/* Top Row: Icon & Number */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-800/90 group-hover:bg-[#2E8B7A]/20 text-[#2E8B7A] flex items-center justify-center border border-slate-700/60 transition-colors">
                          <CardIcon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-[#2E8B7A] transition-colors">
                          {service.num}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-black text-xl text-white group-hover:text-[#5ecfbc] transition-colors mb-4 tracking-tight">
                        {service.title}
                      </h3>

                      {/* Checkbox List of Deliverables (Exact 5 items per service) */}
                      <ul className="space-y-2.5 mb-6">
                        {service.deliverables.map((item, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-snug"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B7A] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Trigger */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-slate-400 group-hover:text-white transition-colors">
                      <span className="whitespace-nowrap">${service.basePriceMonthly}/mo base</span>
                      <span className="inline-flex items-center gap-1 text-[#2E8B7A] group-hover:translate-x-1 transition-transform whitespace-nowrap">
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>

          {/* Bottom Action Ribbon */}
          <MotionWrapper
            direction="up"
            delay={0.25}
            className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
          >
            <div>
              <h4 className="font-heading font-black text-xl text-white mb-1">
                Ready to mix, match, and save?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-normal">
                Bundle 2 or more services for automatic discounts up to 20%. No contracts, cancel anytime.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="#bundle-builder"
                className="px-6 py-3 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5 whitespace-nowrap"
              >
                Build My Bundle →
              </Link>
              <button
                type="button"
                onClick={() =>
                  openContactModal({
                    intent: "strategy-session",
                    serviceInterest: "Full Marketing & Tech Bundle",
                    notes: "Requesting a free strategy consultation on services bundle options.",
                  })
                }
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-700 cursor-pointer whitespace-nowrap"
              >
                Book a Call →
              </button>
            </div>
          </MotionWrapper>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* SERVICE DETAILS MODAL (Zero-blink animated popup)    */}
      {/* ---------------------------------------------------- */}
      <AnimatePresence>
        {selectedService && (
          <div
            key="service-detail-modal"
            className="fixed inset-0 z-[998] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedService(null)}
              style={{ willChange: "opacity", transform: "translateZ(0)" }}
              className="fixed inset-0 bg-[#090D16]/85"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
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
                      <span>Get Started with This Service →</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
