"use client";

import MotionWrapper from "./MotionWrapper";
import SpotlightCard from "./SpotlightCard";
import { contactInfo } from "@/data/navigation";
import { useContactModal } from "@/context/ContactModalContext";
import {
  Sparkles,
  Heart,
  Clock,
  MapPin,
  Phone,
  Calendar,
  ShieldCheck,
  Building2,
  Users,
  Award,
} from "lucide-react";

export default function AboutSection() {
  const { openContactModal } = useContactModal();

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-pink-200/80 select-none scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionWrapper
          direction="up"
          distance={20}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DEF2FB] border border-[#DEF2FB] text-[#0284C7] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5 text-[#DC1F62]" />
            <span>ABOUT US · HUNTINGTON, NY</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.05] mb-4">
            About Door to Door Laundry. <br />
            <span className="text-[#DC1F62]">You Leave It, We Clean It.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Discover our origin story, our family mission, and how we brought Huntington’s long-standing, 30+ year laundromat into the 21st century.
          </p>
        </MotionWrapper>

        {/* Main Content Grid: Story & Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16">
          
          {/* Left Column: Comprehensive Story & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Story Card 1: The Founders' Mission */}
            <MotionWrapper direction="up" delay={0.1}>
              <SpotlightCard
                spotlightColor="rgba(220, 31, 98, 0.1)"
                className="bg-white p-6 sm:p-8 rounded-3xl border border-pink-200/80 shadow-md space-y-4"
              >
                <div className="flex items-center gap-2.5 text-[#DC1F62] font-heading font-bold text-xs uppercase tracking-wider">
                  <Users className="w-4 h-4 text-[#DC1F62]" />
                  <span>Family-Owned &amp; Community-Focused</span>
                </div>

                <h3 className="font-heading font-black text-xl sm:text-2xl text-[#0F172A] leading-tight">
                  Helping Long Island Families Reclaim Their Precious Time
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Door to Door Laundry in Huntington, NY is a family-owned business serving residents and businesses in the surrounding community. The founders understand that time is precious and upon entering the laundry services market wanted to offer their customers a top-notch service that saves time.
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Knowing from experience how long doing laundry for an entire household can take, they wanted to help folks reclaim their time for more important matters.
                </p>
              </SpotlightCard>
            </MotionWrapper>

            {/* Story Card 2: The Village Laundromat Heritage */}
            <MotionWrapper direction="up" delay={0.15}>
              <SpotlightCard
                spotlightColor="rgba(2, 132, 199, 0.1)"
                className="bg-white p-6 sm:p-8 rounded-3xl border border-pink-200/80 shadow-md space-y-4"
              >
                <div className="flex items-center gap-2.5 text-[#0284C7] font-heading font-bold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#0284C7]" />
                  <span>30+ Years of Local Heritage · Elevated</span>
                </div>

                <h3 className="font-heading font-black text-xl sm:text-2xl text-[#0F172A] leading-tight">
                  From Neighborhood Laundromat to 21st-Century Pickup &amp; Delivery
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  When their oldest child went off to college, the founders decided it was time to open a laundry service. They were given an amazing opportunity to take ownership of Village Laundromat that already offered drop-in and drop-off fluff and fold services.
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  But as consumers of products and services themselves, the founders of Door to Door Laundry wanted to elevate the offerings of Village Laundromat and bring this long-standing, reputable laundromat into the <strong>21st Century</strong> by adding pickup and delivery with easy online ordering.
                </p>

                <div className="p-4 bg-pink-50/60 rounded-2xl border border-pink-100 flex items-start gap-3 mt-4">
                  <Sparkles className="w-5 h-5 text-[#DC1F62] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-800 font-medium leading-relaxed">
                    &ldquo;Leave your laundry on your doorstep, or leave it with us at our store. Either way, you leave it, we clean it!&rdquo;
                  </p>
                </div>
              </SpotlightCard>
            </MotionWrapper>

            {/* Quick Action CTA inside narrative */}
            <MotionWrapper direction="up" delay={0.2} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={contactInfo.portalOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#DC1F62] hover:bg-[#BE185D] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all active:translate-y-0.5 hover:scale-102"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Pickup Today</span>
              </a>

              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-pink-50/50 text-slate-800 font-heading font-bold text-xs uppercase tracking-wider rounded-xl border border-pink-200/80 shadow-xs hover:border-[#DC1F62]/50 transition-all"
              >
                <MapPin className="w-4 h-4 text-[#0284C7]" />
                <span>Visit Store: 215 New York Ave</span>
              </a>
            </MotionWrapper>

          </div>

          {/* Right Column: YouTube Video Showcase & Quick Info Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* YouTube Video Showcase Card */}
            <MotionWrapper direction="up" delay={0.2}>
              <div className="bg-white p-3 rounded-3xl border border-pink-200/80 shadow-xl overflow-hidden group">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                  <iframe
                    src="https://www.youtube.com/embed/nf3xIAvtGcI?si=qYJdIc0wjLupEBSf"
                    title="Door to Door Laundry Huntington NY Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full object-cover border-0"
                  />
                </div>

                <div className="p-4 text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-pink-50 text-[#DC1F62] border border-pink-100 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Featured Video
                  </span>
                  <h4 className="font-heading font-bold text-sm text-[#0F172A]">
                    See How Door to Door Laundry Works
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Fast online ordering, doorstep pickup, and commercial-grade sanitization.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* Storefront & Operation Details Card */}
            <MotionWrapper direction="up" delay={0.25}>
              <SpotlightCard
                spotlightColor="rgba(220, 31, 98, 0.08)"
                className="bg-white p-6 rounded-3xl border border-pink-200/80 shadow-md space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-pink-100">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#DC1F62]" />
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#0F172A]">
                      Huntington Storefront Hub
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#DEF2FB] text-[#0284C7] uppercase">
                    Open 7 Days
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-700">
                  <a
                    href={contactInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 hover:text-[#DC1F62] transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#DC1F62] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F172A] block">Physical Laundromat:</strong>
                      <span>215 New York Avenue, Huntington, NY 11743</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F172A] block">Hours of Operation:</strong>
                      <span>MON–SAT: 8:00 AM – 9:00 PM (Last wash 8:00 PM)</span><br />
                      <span>SUN: 8:00 AM – 6:00 PM (Last wash 4:30 PM)</span>
                    </div>
                  </div>

                  <a
                    href={contactInfo.phoneTel}
                    className="flex items-center gap-2 text-[#DC1F62] font-black text-sm hover:underline pt-1"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(631) 769-9922</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-pink-100 flex items-center justify-between text-[11px] text-slate-600">
                  <span>First Order Promo Code:</span>
                  <span className="font-mono font-bold text-[#DC1F62] bg-pink-50 px-2 py-0.5 rounded-md border border-pink-100">
                    FIRST10 ($10 OFF)
                  </span>
                </div>
              </SpotlightCard>
            </MotionWrapper>

          </div>

        </div>

        {/* 4 Core Company Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            {
              icon: Heart,
              title: "Family First",
              desc: "Founded by parents to give Long Island families their weekends and free time back.",
            },
            {
              icon: ShieldCheck,
              title: "30+ Years Trust",
              desc: "Built upon the solid foundation of Huntington's reputable Village Laundromat.",
            },
            {
              icon: Sparkles,
              title: "21st Century Tech",
              desc: "Seamless 60-second online ordering, route optimization, and live driver updates.",
            },
            {
              icon: Award,
              title: "100% Quality Promise",
              desc: "If you're ever not completely satisfied, we re-wash your order immediately at no charge.",
            },
          ].map((pillar, pIdx) => {
            const Icon = pillar.icon;
            return (
              <MotionWrapper
                key={pillar.title}
                direction="up"
                delay={pIdx * 0.08}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(220, 31, 98, 0.1)"
                  className="bg-white p-5 rounded-2xl border border-pink-200/80 shadow-xs hover:border-[#DC1F62]/50 hover:shadow-md hover:shadow-pink-100/50 transition-all flex flex-col justify-between h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#DC1F62] mb-3 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-black text-base text-[#0F172A] mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </SpotlightCard>
              </MotionWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
