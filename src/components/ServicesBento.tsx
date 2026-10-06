"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { servicesData, ServiceItem } from "@/data/services";
import { useContactModal } from "@/context/ContactModalContext";
import { useScrollContext } from "./SmoothScrollProvider";
import MotionWrapper from "./MotionWrapper";
import SpotlightCard from "./SpotlightCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Sparkles,
  Shirt,
  Building2,
  Layers,
  Clock,
  Heart,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Check,
  X,
  Calendar,
  ExternalLink,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Truck,
  Sparkles,
  Shirt,
  Building2,
  Layers,
  Clock,
  Heart,
  MapPin,
};

type CategoryFilter = "All" | "Residential Services" | "Commercial Accounts" | "Specialty Care";

export default function ServicesBento() {
  const { openContactModal } = useContactModal();
  const { stopScroll, startScroll } = useScrollContext();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      stopScroll();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedService(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        startScroll();
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      startScroll();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [selectedService, stopScroll, startScroll]);

  // Filter services by category
  const filteredServices = useMemo(() => {
    if (activeCategory === "All") return servicesData;
    return servicesData.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const categories: { label: CategoryFilter; count: number }[] = [
    { label: "All", count: servicesData.length },
    { label: "Residential Services", count: servicesData.filter((s) => s.category === "Residential Services").length },
    { label: "Commercial Accounts", count: servicesData.filter((s) => s.category === "Commercial Accounts").length },
    { label: "Specialty Care", count: servicesData.filter((s) => s.category === "Specialty Care").length },
  ];

  return (
    <section
      id="pickup-delivery"
      className="py-20 sm:py-24 bg-[#FAF9F6] border-b border-pink-200/80 select-none scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <MotionWrapper
          direction="up"
          distance={20}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DEF2FB] border border-[#DEF2FB] text-[#0284C7] text-[10px] font-mono font-bold uppercase tracking-widest mb-4 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC1F62]" />
              <span>HUNTINGTON, NY · 8 COMPREHENSIVE LAUNDRY SERVICES</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.08]">
              Our Laundry Services <br className="hidden sm:block" />
              <span className="text-[#DC1F62]">Have You Covered.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3 max-w-md">
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal text-left lg:text-right">
              From next-day doorstep pickup to professional shirt pressing, oversized comforters, and commercial linen accounts—explore our complete service offerings.
            </p>
            <a
              href="https://doortodoorlaundry.curbsidelaundries.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#DC1F62] hover:bg-[#BE185D] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5 whitespace-nowrap hover:scale-102 shrink-0"
            >
              <span>Schedule a Pickup</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </MotionWrapper>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-2 overflow-x-auto scrollbar-none border-b border-pink-100">
          <div className="flex items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#DC1F62] text-white shadow-md shadow-pink-200/50"
                      : "bg-white text-slate-700 hover:bg-pink-50/50 border border-pink-100"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-pink-100 text-pink-700"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <span className="hidden sm:block text-xs text-slate-500 font-mono shrink-0">
            Showing {filteredServices.length} of {servicesData.length} Services
          </span>
        </div>

        {/* BENTO GRID OF 8 SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="h-full scroll-mt-28"
              >
                <SpotlightCard
                  spotlightColor="rgba(220, 31, 98, 0.08)"
                  className="bg-white border border-pink-200/80 rounded-2xl p-5 flex flex-col justify-between h-full hover:border-[#DC1F62]/60 hover:shadow-xl hover:shadow-pink-100/50 transition-all group cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div>
                    {/* Top Tag & Number */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#DC1F62] group-hover:scale-110 group-hover:bg-[#DC1F62] group-hover:text-white transition-all shadow-xs">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        {service.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#DEF2FB] text-[#0284C7] uppercase tracking-wider">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {service.num}
                      </span>
                    </div>

                    {/* Image Preview if available */}
                    {service.image && (
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 bg-slate-100 border border-pink-100/60">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Service Title */}
                    <h3 className="font-heading font-black text-lg sm:text-xl text-[#0F172A] group-hover:text-[#DC1F62] transition-colors mb-2 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 font-normal">
                      {service.shortDescription}
                    </p>

                    {/* Summary Bullet Points */}
                    <div className="space-y-1.5 mb-4">
                      {service.summaryTags.slice(0, 3).map((tag, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Price and Learn More CTA */}
                  <div className="pt-3 border-t border-pink-100 flex items-center justify-between gap-2 mt-auto">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-500">Pricing</span>
                      <span className="text-xs font-black text-[#DC1F62]">
                        {service.pricingNote}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-pink-50/60 border border-pink-200/80 text-[#0F172A] hover:bg-[#DC1F62] hover:text-white hover:border-[#DC1F62] text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 shadow-2xs cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* SERVICE DETAILS MODAL */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 select-text overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-pink-200/80 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-pink-50 via-white to-pink-50 text-[#0F172A] p-6 flex items-start justify-between gap-4 border-b border-pink-200/80">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#DC1F62] text-white uppercase tracking-wider">
                        {selectedService.category}
                      </span>
                      {selectedService.badge && (
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#0284C7] text-white uppercase tracking-wider">
                          {selectedService.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#0F172A]">
                      {selectedService.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 text-slate-700 hover:text-black transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto space-y-6 text-left">
                  {selectedService.image && (
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-pink-100">
                      <Image
                        src={selectedService.image}
                        alt={selectedService.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Overview
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {selectedService.shortDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Included In This Service
                    </h4>
                    <div className="space-y-2 bg-pink-50/40 p-4 rounded-2xl border border-pink-100">
                      {selectedService.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#DEF2FB] border border-[#DEF2FB] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-[#0284C7]">
                        Pricing Details
                      </span>
                      <span className="text-sm font-black text-[#0F172A]">
                        {selectedService.pricingNote}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#DC1F62]">
                      New Customers: Use code FIRST10 for $10 OFF!
                    </span>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 bg-slate-50 border-t border-pink-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="https://doortodoorlaundry.curbsidelaundries.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-[#DC1F62] hover:bg-[#BE185D] text-white text-xs font-bold uppercase tracking-wider shadow-md inline-flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule This Service</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
