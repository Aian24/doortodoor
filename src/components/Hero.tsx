"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroData } from "@/data/hero";
import { contactInfo } from "@/data/navigation";
import {
  Sparkles,
  MapPin,
  Truck,
  CheckCircle2,
  Calendar,
  Phone,
  ShieldCheck,
  Tag,
  ArrowRight,
  Clock,
} from "lucide-react";

const SUPPORTED_ZIPS = [
  "11743", // Huntington
  "11740", // Greenlawn
  "11746", // Huntington Station / South Huntington
  "11747", // Melville
  "11791", // Syosset
  "11758", // Massapequa
  "11725", // Commack
  "11768", // Northport
  "11735", // Farmingdale
  "11771", // Oyster Bay
  "11797", // Woodbury
  "11704", // West Babylon
  "11779", // Ronkonkoma
  "11729", // Deer Park
  "11717", // Brentwood
  "11787", // Smithtown
];

export default function Hero() {
  const [zipCode, setZipCode] = useState("");
  const [zipResult, setZipResult] = useState<{
    status: "idle" | "success" | "pending" | "invalid";
    message: string;
  }>({ status: "idle", message: "" });

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipCode.trim();

    if (!cleanZip || cleanZip.length < 5) {
      setZipResult({
        status: "invalid",
        message: "Please enter a valid 5-digit zip code.",
      });
      return;
    }

    if (SUPPORTED_ZIPS.includes(cleanZip)) {
      setZipResult({
        status: "success",
        message: `Great news! We offer scheduled pickup & delivery in ${cleanZip} (Long Island, NY)!`,
      });
    } else {
      setZipResult({
        status: "pending",
        message: `We are actively expanding route coverage around ${cleanZip}! You can also drop off anytime at 215 New York Ave, Huntington.`,
      });
    }
  };

  return (
    <section
      id="zip-checker"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF9F6] via-pink-50/20 to-[#FAF9F6] border-b border-pink-200/80 select-none scroll-mt-20 overflow-hidden"
    >
      {/* Background Subtle Ambient Circles */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#DEF2FB] blur-3xl opacity-50 pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Value Prop, Interactive Zip Code Checker */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Brand Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200/80 shadow-xs text-xs font-bold text-[#DC1F62]"
            >
              <Sparkles className="w-4 h-4 text-[#DC1F62]" />
              <span>Interactive Pickup Coverage &amp; Storefront Hub</span>
            </motion.div>

            {/* Main Punchy Hero Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] uppercase leading-[1.1]">
                Check Your Route &amp;{" "}
                <span className="text-[#DC1F62] underline decoration-[#0284C7]/40">
                  Instant Availability
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-normal pt-1">
                Whether you prefer scheduled doorstep pickup or quick drop-off at our 215 New York Ave location, we wash, fluff, dry, and fold all your laundry with care.
              </p>
            </motion.div>

            {/* Interactive Zip Code Checker Form */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-5 rounded-2xl bg-white border border-pink-200/80 shadow-lg max-w-xl"
            >
              <div className="flex items-center gap-2 mb-2 text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
                <MapPin className="w-4 h-4 text-[#DC1F62]" />
                <span>Find A Service Area Near You</span>
              </div>

              <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="text"
                  maxLength={5}
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ""))}
                  placeholder="ENTER YOUR 5-DIGIT ZIP CODE (e.g. 11743)"
                  className="flex-1 px-4 py-3 bg-[#F8FAFC] border border-pink-100 rounded-xl text-sm font-semibold text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#DC1F62] transition-all text-center sm:text-left outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all whitespace-nowrap active:scale-98 cursor-pointer"
                >
                  Check Coverage
                </button>
              </form>

              {/* Zip Check Feedback Box */}
              {zipResult.status !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className={`mt-3 p-3 rounded-xl text-xs font-medium flex items-start gap-2 ${
                    zipResult.status === "success"
                      ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                      : zipResult.status === "pending"
                      ? "bg-amber-50 text-amber-900 border border-amber-200"
                      : "bg-rose-50 text-rose-900 border border-rose-200"
                  }`}
                >
                  {zipResult.status === "success" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <span>{zipResult.message}</span>
                    {zipResult.status === "success" && (
                      <div className="mt-1.5">
                        <a
                          href={contactInfo.portalOrderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-[#DC1F62] hover:underline"
                        >
                          <span>Schedule pickup for this zip now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Promo Coupon Pill */}
              <div className="mt-3 pt-3 border-t border-pink-100 flex items-center justify-between text-xs text-slate-600 flex-wrap gap-2">
                <div className="flex items-center gap-1.5 font-semibold">
                  <Tag className="w-3.5 h-3.5 text-[#DC1F62]" />
                  <span>
                    Use code <strong className="text-[#DC1F62] font-black">FIRST10</strong> for $10 OFF + Free Bag
                  </span>
                </div>
                <a
                  href="#specials"
                  className="text-[11px] font-bold text-[#0284C7] hover:underline"
                >
                  View All Specials →
                </a>
              </div>
            </motion.div>

            {/* Direct Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <a
                href={contactInfo.portalOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#DC1F62] hover:bg-[#BE185D] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all active:translate-y-0.5 hover:scale-102"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Pickup</span>
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-pink-50/50 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border border-pink-200/80 shadow-sm transition-all hover:border-[#DC1F62]/50"
              >
                <span>Calculate My Price</span>
              </a>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-slate-700"
            >
              <div className="flex items-center gap-2 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                <span>30+ Years in Huntington</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <Clock className="w-4 h-4 text-[#DC1F62]" />
                <span>24-48h Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <Truck className="w-4 h-4 text-[#0284C7]" />
                <span>Free Delivery $45+</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Fresh Clean</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Impact Visual Card Showcase with Over 30 Years Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Featured Delivery Van Visual Card */}
            <div className="relative rounded-3xl overflow-hidden bg-white border border-pink-200/80 shadow-2xl p-2 group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/hero-delivery-van.png"
                  alt="Door To Door Laundry Delivery Van in Huntington Long Island"
                  fill
                  priority
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                />
                
                {/* Subtle Gradient Wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Over 30 Years Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-pink-200/80 flex items-center gap-2">
                  <Image
                    src="/images/over-30-years.png"
                    alt="Over 30 Years in Huntington"
                    width={48}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                  <div className="text-left pr-1">
                    <span className="block text-[10px] font-bold text-slate-500 uppercase leading-none">
                      Est. 1994
                    </span>
                    <span className="text-xs font-extrabold text-[#0F172A] leading-tight">
                      Huntington, NY
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#DC1F62] text-[10px] font-bold uppercase tracking-wider mb-1">
                    Daily Route Service
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    Professional Wash &amp; Fold Delivered To Your Doorstep
                  </h3>
                </div>
              </div>

              {/* Quick Info Strip Below Image */}
              <div className="p-3 grid grid-cols-3 gap-2 text-center bg-pink-50/40 rounded-xl mt-2 border border-pink-100">
                <div>
                  <span className="block text-base font-black text-[#DC1F62]">$1.10</span>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase">Drop-Off / lb</span>
                </div>
                <div className="border-x border-pink-200/60">
                  <span className="block text-base font-black text-[#0284C7]">$1.75</span>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase">Pickup / lb</span>
                </div>
                <div>
                  <span className="block text-base font-black text-emerald-600">$19.99</span>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase">Comforters</span>
                </div>
              </div>
            </div>

            {/* Floating Review Card Overlay */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-pink-200/80 max-w-[260px] hidden sm:block"
            >
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {"★".repeat(5)}
                <span className="text-[10px] font-bold text-slate-600 ml-1">5.0 on Google</span>
              </div>
              <p className="text-[11px] text-slate-700 italic leading-snug">
                &ldquo;Excellent folding! So neatly delivered right to my door.&rdquo;
              </p>
              <span className="text-[10px] font-bold text-slate-500 block mt-1">
                — April K. · Huntington Resident
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
