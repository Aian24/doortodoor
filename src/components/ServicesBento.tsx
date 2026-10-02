"use client";

import { useState } from "react";
import { servicesData, ServiceItem } from "@/data/services";
import MotionWrapper from "./MotionWrapper";
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
  X,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
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
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-14 sm:py-16 bg-[#FFFFFF] border-b border-slate-200 select-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <MotionWrapper direction="up" distance={20} className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C0622A] font-bold block mb-2">
              WHAT WE BUILD &amp; DELIVER
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#090D16] tracking-tight leading-[1.05]">
              Everything your business needs. <br />
              <span className="text-[#C0622A] italic">One subscription.</span>
            </h2>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md lg:pt-4 font-normal">
            From marketing to AI to web — pick the services that fit, bundle them together, and save up to 20%. Pause or cancel anytime. No contracts.
          </p>
        </MotionWrapper>

        {/* Large Interactive Service Link Rows with Staggered Scroll Reveal */}
        <div className="border-t-2 border-[#090D16]">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Code2;

            return (
              <MotionWrapper
                key={service.id}
                direction="up"
                delay={idx * 0.04}
                distance={12}
                onClick={() => setSelectedService(service)}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-4 sm:py-5 px-3 border-b border-slate-200 hover:border-[#090D16] cursor-pointer transition-all duration-200 hover:bg-slate-50"
              >
                {/* Left Hover Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1.5 bg-[#C0622A] transition-all duration-200" />

                {/* Left: Number + Icon + Title */}
                <div className="flex items-center gap-3 sm:gap-5 mb-2 md:mb-0">
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#C0622A] transition-colors w-6">
                    {service.num}
                  </span>

                  <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#090D16] text-slate-700 group-hover:text-white flex items-center justify-center transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <h3 className="font-heading font-black text-lg sm:text-2xl text-[#090D16] group-hover:text-[#C0622A] transition-colors tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Right: Tag Pills & Arrow */}
                <div className="flex items-center gap-3 self-start md:self-auto pl-9 md:pl-0">
                  <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
                    {service.deliverables.slice(0, 2).map((del, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 group-hover:bg-white text-slate-600 border border-slate-200 transition-colors"
                      >
                        {del.split(" ")[0]} {del.split(" ")[1] || ""}
                      </span>
                    ))}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#C0622A] text-slate-600 group-hover:text-white flex items-center justify-center transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>

        {/* Bottom CTA to Bundle */}
        <MotionWrapper direction="up" delay={0.2} className="mt-8 text-center">
          <Link
            href="#bundle-builder"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all active:translate-y-0.5"
          >
            <span>Configure Your Custom Bundle &amp; Calculate Savings →</span>
          </Link>
        </MotionWrapper>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-[#090D16] text-xs font-bold uppercase tracking-wider">
                {selectedService.category}
              </span>
              <span className="font-mono text-xs font-bold text-slate-400">
                Service {selectedService.num}
              </span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#090D16] mb-3">
              {selectedService.title}
            </h3>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {selectedService.shortDescription}
            </p>

            <div className="mb-6">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#090D16] mb-3">
                Key Deliverables Included
              </h4>
              <div className="space-y-2">
                {selectedService.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#C0622A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-6">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#090D16] mb-1">
                How It Sells (The Pitch Framework)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedService.howItSells}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Bundle Rate
                </span>
                <span className="font-heading font-black text-xl text-[#090D16]">
                  ${selectedService.basePriceMonthly}/mo
                </span>
              </div>

              <Link
                href="#bundle-builder"
                onClick={() => setSelectedService(null)}
                className="px-7 py-3.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all"
              >
                Add to My Bundle →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
