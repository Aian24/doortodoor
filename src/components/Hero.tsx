"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroData } from "@/data/hero";
import NumberCounter from "./NumberCounter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Check,
  Layers,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Code,
  Bot,
  Share2,
} from "lucide-react";

const clientSpotlights = [
  {
    id: "hospitality",
    tabLabel: "Hospitality",
    name: "Carmen Hotel & Dining",
    role: "Restaurant & Boutique Hotel",
    image: "/hero-slides/slide_1.png",
    metric: "+240%",
    metricLabel: "Inbound Direct Bookings",
    services: ["Custom Web Experience", "Local Ads Engine", "VIP Reservation Bot"],
    savings: "$11,200/yr Saved vs Agency",
  },
  {
    id: "corporate",
    tabLabel: "Professional",
    name: "QuinnLan Advisory Group",
    role: "Legal & Wealth Advisory",
    image: "/hero-slides/slide_2.png",
    metric: "3.8x",
    metricLabel: "Qualified Monthly Leads",
    services: ["SaaS Web Portal", "High-Intent Search Ads", "AI Intake Assistant"],
    savings: "$14,400/yr Saved vs Agency",
  },
  {
    id: "trades",
    tabLabel: "Contracting",
    name: "Turflife Contracting Co.",
    role: "Commercial & Residential Services",
    image: "/hero-slides/slide_3.png",
    metric: "24/7",
    metricLabel: "Instant AI Lead Capture",
    services: ["Speed-Optimized Web", "Google Local Domination", "Automated Reviews"],
    savings: "$9,800/yr Saved vs Agency",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const currentSpotlight = clientSpotlights[activeTab];

  return (
    <section className="relative bg-[#FFFFFF] pt-12 pb-20 lg:py-24 border-b border-slate-200 overflow-hidden select-none">
      {/* Crisp subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#090D16 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text-Focused Hero (STRICTLY NO LOGO HERE) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            {/* Clean Kicker Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#090D16] text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C0622A]" />
              <span>Phoenix, AZ · Est. 2004 · 1,500+ Builds</span>
            </div>

            {/* EXACT Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-6xl xl:text-7xl text-[#090D16] tracking-tight leading-[1.05] mb-6">
              Marketing, AI &amp; <br />
              <span className="text-[#C0622A]">Digital Services.</span>
            </h1>

            {/* EXACT Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              {heroData.subheadline}
            </p>

            {/* EXACT Calls to Action with Uniform Button Styling */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                href={heroData.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm active:translate-y-0.5 whitespace-nowrap"
              >
                <span>{heroData.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={heroData.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#090D16] hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm active:translate-y-0.5 whitespace-nowrap"
              >
                <span>{heroData.secondaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Live Stats Counter Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 max-w-lg">
              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#090D16]">
                  <NumberCounter value={20} suffix="+" duration={1.5} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                  Years Operating
                </div>
              </div>

              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#090D16]">
                  <NumberCounter value={1500} suffix="+" duration={1.5} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                  Delivered Builds
                </div>
              </div>

              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#090D16]">
                  <NumberCounter value={480} suffix="+" duration={1.5} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                  Active Campaigns
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Revamped Interactive Subscription Studio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-[#090D16] text-white p-6 sm:p-7 rounded-3xl shadow-xl border border-slate-800">
              {/* Top Studio Control Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C0622A] animate-pulse" />
                  <span className="font-heading font-bold text-xs uppercase tracking-widest text-white">
                    Subscription Studio
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#C0622A] text-white">
                  Save Up To 20%
                </span>
              </div>

              {/* Interactive Industry / Persona Switcher */}
              <div className="flex gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 mt-4">
                {clientSpotlights.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 py-2 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all text-center ${
                      activeTab === idx
                        ? "bg-[#C0622A] text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.tabLabel}
                  </button>
                ))}
              </div>

              {/* Dynamic Client Result & Stack Display with Prominent Visual Card Background */}
              <div className="mt-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4">
                {/* Prominent Wide Client Photo Showcase with Overlay */}
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-4 bg-slate-950 border border-slate-700/60">
                  <Image
                    src={currentSpotlight.image}
                    alt={currentSpotlight.name}
                    fill
                    priority
                    className="object-cover object-top transition-all duration-300"
                  />
                  {/* Subtle Dark Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/35 to-black/20" />

                  {/* Top Client Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#090D16]/85 backdrop-blur-md border border-slate-700/80 text-[10px] font-bold uppercase tracking-wider text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0622A]" />
                    <span>Verified Client Result</span>
                  </div>

                  {/* Bottom Info Bar Overlaid on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 bg-[#090D16]/90 backdrop-blur-md p-3 rounded-lg border border-slate-700/70">
                    <div className="min-w-0">
                      <div className="font-heading font-black text-sm text-white truncate">
                        {currentSpotlight.name}
                      </div>
                      <div className="text-[11px] text-slate-300 font-medium truncate">
                        {currentSpotlight.role}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-heading font-black text-lg text-[#C0622A] leading-tight">
                        {currentSpotlight.metric}
                      </div>
                      <div className="text-[9px] uppercase font-bold text-slate-400">
                        {currentSpotlight.metricLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Included Stack Tags */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Active Stack Delivered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentSpotlight.services.map((svc) => (
                      <span
                        key={svc}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-slate-800 text-slate-200 px-2.5 py-1 rounded-md border border-slate-700/60"
                      >
                        <Check className="w-3 h-3 text-[#C0622A] shrink-0" />
                        <span>{svc}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Savings Pill */}
                <div className="mt-3.5 py-2 px-3 bg-[#090D16] border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Annual Client Value:</span>
                  <span className="font-bold text-[#C0622A]">{currentSpotlight.savings}</span>
                </div>
              </div>

              {/* 3 Core Subscription Guarantees */}
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C0622A] shrink-0" />
                  <span>No contracts · Pause, switch, or cancel anytime</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C0622A] shrink-0" />
                  <span>Dedicated Senior US Team with 20+ years in Phoenix</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C0622A] shrink-0" />
                  <span>100% Client ownership of all source code &amp; IP</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

