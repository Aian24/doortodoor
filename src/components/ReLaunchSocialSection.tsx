"use client";

import { useState } from "react";
import { socialData } from "@/data/socialSubBrand";
import MotionWrapper from "./MotionWrapper";
import { CheckCircle2, ExternalLink, Rocket, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function ReLaunchSocialSection() {
  const [activeTrack, setActiveTrack] = useState<"Track B" | "Track A">("Track B");

  const filteredTiers = socialData.tiers.filter((tier) =>
    tier.track.startsWith(activeTrack)
  );

  return (
    <section id="social-autopilot" className="py-24 bg-[#090D16] text-white border-b border-slate-800 select-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <MotionWrapper direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[#C0622A] text-[11px] font-bold uppercase tracking-widest mb-4">
            <Rocket className="w-3.5 h-3.5 text-[#C0622A]" />
            <span>Autopilot Sub-Brand</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] mb-4">
            Your Social Media, <br />
            <span className="text-[#C0622A]">Running Itself.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {socialData.tagline} We create the content, schedule it, and publish it automatically every month across all 5 major platforms. You spend 30 minutes a month approving.
          </p>
        </MotionWrapper>

        {/* 2-Column Overview & Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Card: Brand Overview & Stats */}
          <MotionWrapper
            direction="up"
            delay={0.1}
            distance={20}
            className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C0622A] font-bold block mb-2">
                HANDS-OFF AUTOMATION
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-4">
                Full-Service Content Engine
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                Never worry about what to post again. Our design and copy team builds a complete monthly calendar tailored to your brand archetype, ensuring high-authority positioning and non-stop audience engagement.
              </p>

              {/* Supported Platforms */}
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Published Across All 5 Platforms:
                </span>
                <div className="flex flex-wrap gap-2">
                  {socialData.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href={socialData.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all active:translate-y-0.5 whitespace-nowrap"
                >
                  <span>Login to Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="#bundle-builder"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all whitespace-nowrap"
                >
                  <span>Bundle &amp; Save</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Stats Counter Strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                <div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-[#C0622A]">
                    30<span className="text-sm font-semibold">min</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                    Your time / mo
                  </div>
                </div>
                <div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-[#C0622A]">
                    6
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                    Plan Tiers
                  </div>
                </div>
                <div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-[#C0622A]">
                    5
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                    Platforms
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Right Card: 4-Step Process */}
          <MotionWrapper
            direction="up"
            delay={0.15}
            distance={20}
            className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C0622A] font-bold block mb-2">
                THE 4-STEP PROCESS
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-6">
                How It Works
              </h3>

              <ul className="space-y-4">
                {socialData.steps.map((step, i) => (
                  <li
                    key={step.num}
                    className="flex items-start gap-4 pb-4 border-b border-slate-800/80 last:border-none last:pb-0"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#C0622A] text-white font-heading font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-white mb-0.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#C0622A] shrink-0" />
              <span>Setup takes under 5 minutes. Portal credentials sent immediately upon checkout.</span>
            </div>
          </MotionWrapper>
        </div>

        {/* Social Plan Tiers Selector */}
        <div className="pt-8 border-t border-slate-800">
          <MotionWrapper direction="up" className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                ReLaunch Social Plan Options
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Select between done-for-you production or raw client content scheduling.
              </p>
            </div>

            <div className="inline-flex p-1 bg-slate-900 rounded-xl border border-slate-800 self-start sm:self-auto">
              <button
                onClick={() => setActiveTrack("Track B")}
                className={`px-5 py-2 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-all ${
                  activeTrack === "Track B"
                    ? "bg-[#C0622A] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Track B (100% Done-For-You)
              </button>
              <button
                onClick={() => setActiveTrack("Track A")}
                className={`px-5 py-2 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-all ${
                  activeTrack === "Track A"
                    ? "bg-[#C0622A] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Track A (You Supply Photos)
              </button>
            </div>
          </MotionWrapper>

          {/* Tiers Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTiers.map((tier, idx) => (
              <MotionWrapper
                key={tier.id}
                direction="up"
                delay={idx * 0.08}
                className={`p-7 rounded-3xl border transition-all ${
                  tier.popular
                    ? "bg-slate-900 border-[#C0622A] shadow-xl"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                } flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-bold text-lg text-white">
                      {tier.name}
                    </span>
                    {tier.popular && (
                      <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#C0622A] text-white">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="font-heading font-black text-3xl sm:text-4xl text-white">
                      ${tier.price}
                      <span className="text-xs text-slate-400 font-normal"> /month</span>
                    </div>
                    <span className="text-xs font-semibold text-[#C0622A] block mt-1">
                      {tier.postsPerMonth}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {tier.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C0622A] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <a
                    href={socialData.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center ${
                      tier.popular
                        ? "bg-[#C0622A] hover:bg-[#a84f1d] text-white shadow-sm active:translate-y-0.5"
                        : "bg-slate-800 text-slate-200 hover:bg-slate-700 active:translate-y-0.5"
                    }`}
                  >
                    <span>Select Plan &amp; Launch</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

