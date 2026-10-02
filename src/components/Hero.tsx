"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroData } from "@/data/hero";
import NumberCounter from "./NumberCounter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Check,
  TrendingUp,
  Bot,
  Lock,
} from "lucide-react";

interface SpotlightItem {
  id: string;
  tabLabel: string;
  name: string;
  role: string;
  image: string;
  displayUrl: string;
  metric: string;
  metricLabel: string;
  aiAssistantSnippet: string;
  services: string[];
  annualValue: string;
}

const clientSpotlights: SpotlightItem[] = [
  {
    id: "hospitality",
    tabLabel: "Hospitality",
    name: "Carmen Hotel & Dining",
    role: "Boutique Hotel & Restaurant",
    image: "/showcase/carmen_hotel.jpg",
    displayUrl: "carmenhotel.com",
    metric: "+240%",
    metricLabel: "Direct Bookings",
    aiAssistantSnippet: "Table for 4 confirmed · VIP guest profile synced",
    services: ["Next.js Web Experience", "Local Ads Engine", "24/7 VIP Booking Bot"],
    annualValue: "$11,200/yr Saved vs Agency",
  },
  {
    id: "contracting",
    tabLabel: "Contracting",
    name: "Turflife Contracting Co.",
    role: "Commercial & Residential Services",
    image: "/showcase/turflife.jpg",
    displayUrl: "turflife.com",
    metric: "3.8x",
    metricLabel: "Monthly Inbound Leads",
    aiAssistantSnippet: "Quote request scored · Estimator dispatched",
    services: ["Speed-Optimized Web", "Google Local Domination", "Instant AI Lead Intake"],
    annualValue: "$9,800/yr Saved vs Agency",
  },
  {
    id: "fintech",
    tabLabel: "FinTech",
    name: "Aspiration Bank",
    role: "Digital Banking & Wealth Platform",
    image: "/showcase/aspiration_bank.jpg",
    displayUrl: "aspiration.com",
    metric: "+44%",
    metricLabel: "Funnel Conversion Rate",
    aiAssistantSnippet: "KYC onboarding verified · Instant intake",
    services: ["React/Base44 Web App", "High-Intent Search Ads", "Automated Onboarding"],
    annualValue: "$18,600/yr Saved vs Agency",
  },
  {
    id: "food-bev",
    tabLabel: "Food & Bev",
    name: "Chicago Dog 42",
    role: "Omnichannel Food & Brand",
    image: "/showcase/chicago_dog.jpg",
    displayUrl: "chicagodog42.com",
    metric: "+180%",
    metricLabel: "Opening Foot Traffic",
    aiAssistantSnippet: "Online order #1049 routed to kitchen POS",
    services: ["Online Ordering System", "Geo-Targeted Video Ads", "SMS Retention Flows"],
    annualValue: "$12,400/yr Saved vs Agency",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const currentSpotlight = clientSpotlights[activeTab];

  return (
    <section className="relative bg-[#FFFFFF] pt-8 pb-12 lg:py-14 border-b border-slate-200 overflow-hidden select-none">
      {/* Crisp subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#090D16 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Text-Focused Hero (The Two Doors Pitch) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6"
          >
            {/* Clean Kicker Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#090D16] text-[10px] font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C0622A]" />
              <span>Phoenix, AZ · Est. 2004 · 1,500+ Builds</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl xl:text-6xl text-[#090D16] tracking-tight leading-[1.05] mb-4">
              Marketing, AI &amp; <br />
              <span className="text-[#C0622A]">Digital Services.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mb-6">
              {heroData.subheadline}
            </p>

            {/* Calls to Action */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link
                href={heroData.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5 whitespace-nowrap"
              >
                <span>{heroData.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#090D16] hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5 whitespace-nowrap"
              >
                <span>See Our Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Live Stats Counter Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 max-w-lg">
              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#090D16]">
                  <NumberCounter value={20} suffix="+" duration={1.5} />
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-0.5 whitespace-nowrap">
                  Years Operating
                </div>
              </div>

              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#090D16]">
                  <NumberCounter value={1500} suffix="+" duration={1.5} />
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-0.5 whitespace-nowrap">
                  Delivered Builds
                </div>
              </div>

              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#090D16]">
                  <NumberCounter value={480} suffix="+" duration={1.5} />
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-0.5 whitespace-nowrap">
                  Active Campaigns
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Multi-Layer Floating Showcase & Social Proof Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6"
          >
            <div className="bg-[#090D16] text-white p-4 sm:p-6 rounded-3xl shadow-2xl border border-slate-800 relative">
              {/* Top Control Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C0622A]" />
                  <span className="font-heading font-bold text-xs uppercase tracking-widest text-white">
                    Live Client Showcase &amp; Stack
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#C0622A] text-white">
                  Save Up To 20%
                </span>
              </div>

              {/* 4 Interactive Industry Tabs */}
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 my-3">
                {clientSpotlights.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`py-1.5 px-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all text-center truncate cursor-pointer ${
                      activeTab === idx
                        ? "bg-[#C0622A] text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.tabLabel}
                  </button>
                ))}
              </div>

              {/* Multi-Layer Browser Mockup with Floating UI Badges */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
                {/* macOS Browser Chrome Bar */}
                <div className="px-3.5 py-2 bg-slate-900 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-slate-950 text-slate-300 text-[10px] font-mono border border-slate-800 truncate max-w-[200px]">
                    <Lock className="w-2.5 h-2.5 text-[#2E8B7A]" />
                    <span className="text-[#2E8B7A]">https://</span>
                    <span>{currentSpotlight.displayUrl}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 font-bold uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Live Build</span>
                  </div>
                </div>

                {/* Screenshot Frame with Smooth Transition */}
                <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSpotlight.id}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={currentSpotlight.image}
                        alt={currentSpotlight.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 550px"
                        priority
                        className="object-cover object-top"
                      />
                      {/* Dark Vignette Overlay for Sharp Floating Badges */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/90 via-[#090D16]/20 to-black/30" />
                    </motion.div>
                  </AnimatePresence>

                  {/* ────────────────────────────────────────────── */}
                  {/* FLOATING LAYER 1: Top-Right AI Intake Bot Pill  */}
                  {/* ────────────────────────────────────────────── */}
                  <div className="absolute top-2.5 right-2.5 max-w-[240px] z-10 pointer-events-none">
                    <div className="p-2 rounded-xl bg-[#090D16]/90 backdrop-blur-md border border-slate-700/80 shadow-xl">
                      <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-[#2E8B7A] mb-0.5">
                        <Bot className="w-3 h-3 text-[#2E8B7A]" />
                        <span>24/7 AI Lead Bot</span>
                      </div>
                      <p className="text-[10px] text-slate-200 font-medium truncate">
                        &ldquo;{currentSpotlight.aiAssistantSnippet}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* ────────────────────────────────────────────── */}
                  {/* FLOATING LAYER 2: Bottom Verified Metric Banner */}
                  {/* ────────────────────────────────────────────── */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#090D16]/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between gap-3 shadow-xl">
                      <div className="min-w-0">
                        <div className="font-heading font-bold text-xs sm:text-sm text-white truncate">
                          {currentSpotlight.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium truncate">
                          {currentSpotlight.role}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="font-heading font-black text-base sm:text-lg text-[#C0622A] leading-tight flex items-center justify-end gap-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{currentSpotlight.metric}</span>
                        </div>
                        <div className="text-[9px] uppercase font-bold text-slate-400 whitespace-nowrap">
                          {currentSpotlight.metricLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Stack Delivered Chips */}
              <div className="mt-3.5 space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Active Stack Delivered:</span>
                  <span className="text-[#C0622A] font-semibold">{currentSpotlight.annualValue}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentSpotlight.services.map((svc) => (
                    <span
                      key={svc}
                      className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold bg-slate-900 text-slate-200 px-2.5 py-1 rounded-lg border border-slate-800"
                    >
                      <Check className="w-3 h-3 text-[#C0622A] shrink-0" />
                      <span className="whitespace-nowrap">{svc}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* 3 Core Subscription Value Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3.5 mt-3.5 border-t border-slate-800/80 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C0622A] shrink-0" />
                  <span className="truncate">No contracts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C0622A] shrink-0" />
                  <span className="truncate">Senior US Team</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C0622A] shrink-0" />
                  <span className="truncate">100% IP Ownership</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
