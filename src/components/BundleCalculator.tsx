"use client";

import { useState, useMemo } from "react";
import { bundleTiers, selectableServices, SelectableAddon } from "@/data/bundlePricing";
import { contactInfo } from "@/data/navigation";
import { useContactModal } from "@/context/ContactModalContext";
import NumberCounter from "./NumberCounter";
import MotionWrapper from "./MotionWrapper";
import {
  Check,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Calendar,
  Tag,
  Clock,
  Shirt,
  Layers,
  Scale,
  Percent,
} from "lucide-react";

export default function BundleCalculator() {
  const { openContactModal } = useContactModal();

  // Selected Service Type
  const [selectedTierId, setSelectedTierId] = useState<string>("pickup-recurring");

  // Laundry Weight in lbs
  const [weightLbs, setWeightLbs] = useState<number>(30);

  // Selected Add-ons
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([
    "hypoallergenic-soap",
  ]);

  // First Order Coupon applied
  const [applyCoupon, setApplyCoupon] = useState<boolean>(true);

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedTier = useMemo(() => {
    return bundleTiers.find((t) => t.id === selectedTierId) || bundleTiers[2];
  }, [selectedTierId]);

  // Calculations
  const rawWashFoldPrice = Math.round(weightLbs * selectedTier.pricePerLb * 100) / 100;
  const washFoldPrice = Math.max(selectedTier.minOrder, rawWashFoldPrice);

  const addonsTotal = useMemo(() => {
    return selectedAddonIds.reduce((sum, id) => {
      const addon = selectableServices.find((s) => s.id === id);
      return sum + (addon ? addon.basePrice : 0);
    }, 0);
  }, [selectedAddonIds]);

  const subtotal = Math.round((washFoldPrice + addonsTotal) * 100) / 100;
  const discount = applyCoupon ? 10.0 : 0.0;
  const finalPrice = Math.max(0, Math.round((subtotal - discount) * 100) / 100);

  // Time saved estimation: ~1 hour per 8 lbs of laundry washed, dried, sorted, folded
  const estimatedHoursSaved = Math.max(2, Math.round((weightLbs / 7) * 10) / 10);

  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-pink-200/80 select-none scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <MotionWrapper
          direction="up"
          distance={20}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF2FB] border border-[#DEF2FB] text-[#0284C7] text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DC1F62]" />
              <span>TRANSPARENT PER-POUND PRICING &amp; SPECIALS</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.05]">
              Estimate Your Order. <br />
              <span className="text-[#DC1F62]">Reclaim Your Time.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
              No hidden fees or surprise markups. See your exact estimated cost based on your laundry weight and desired service style.
            </p>
          </div>

          {/* Quick Schedule Callout */}
          <div className="bg-gradient-to-br from-pink-50/90 via-white to-pink-50/60 text-[#0F172A] p-5 sm:p-6 rounded-2xl shadow-lg max-w-sm w-full shrink-0 border border-pink-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-[#DC1F62] uppercase tracking-wider mb-1">
              <Tag className="w-4 h-4 text-[#DC1F62]" />
              <span>First Order Promo</span>
            </div>
            <h3 className="font-heading font-black text-lg text-[#0F172A] mb-1">
              $10 OFF + Free Laundry Bag
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Use code <strong className="text-[#DC1F62] font-bold">FIRST10</strong> at checkout for any pickup and delivery order.
            </p>
            <a
              href={contactInfo.portalOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full py-3 bg-[#DC1F62] hover:bg-[#BE185D] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Pickup Now</span>
            </a>
          </div>
        </MotionWrapper>

        {/* 4 Pricing Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
          {bundleTiers.map((tier, idx) => {
            const isActive = selectedTierId === tier.id;

            return (
              <MotionWrapper
                key={tier.id}
                direction="up"
                delay={idx * 0.08}
                className="h-full"
              >
                <button
                  type="button"
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all flex flex-col justify-between h-full cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-b from-pink-50 via-white to-pink-50/40 text-[#0F172A] shadow-xl scale-[1.02] border-2 border-[#DC1F62]"
                      : "bg-white text-[#0F172A] shadow-sm border border-pink-200/80 hover:border-[#DC1F62]/50 hover:shadow-md hover:shadow-pink-100/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        {tier.countLabel}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#DC1F62] animate-ping" />
                      )}
                    </div>

                    <h3 className="font-heading font-black text-xl mb-1 text-[#0F172A]">
                      {tier.name}
                    </h3>

                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-2xl sm:text-3xl font-black text-[#DC1F62]">
                        ${tier.pricePerLb.toFixed(2)}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">/ lb</span>
                    </div>

                    <div
                      className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-3 ${
                        isActive ? "bg-[#DC1F62] text-white" : "bg-[#DEF2FB] text-[#0284C7]"
                      }`}
                    >
                      {tier.discountBadge}
                    </div>

                    <p className="text-xs leading-relaxed font-normal text-slate-600">
                      {tier.description}
                    </p>
                  </div>

                  <div className={`mt-4 pt-3 border-t text-[11px] font-bold ${isActive ? "border-pink-200 text-[#DC1F62]" : "border-slate-100 text-slate-500"}`}>
                    Min. Order: ${tier.minOrder} · {tier.turnaround}
                  </div>
                </button>
              </MotionWrapper>
            );
          })}
        </div>

        {/* Interactive Estimator Engine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls: Weight Slider & Add-ons (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Weight Slider Box */}
            <div className="bg-white p-6 rounded-2xl border border-pink-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#DC1F62]" />
                  <span className="font-heading font-bold text-sm uppercase tracking-wider text-[#0F172A]">
                    Estimated Laundry Weight
                  </span>
                </div>
                <div className="flex items-baseline gap-1 bg-[#DEF2FB] px-3.5 py-1 rounded-xl">
                  <span className="text-xl font-black text-[#0284C7]">{weightLbs}</span>
                  <span className="text-xs font-bold text-[#0284C7]">lbs</span>
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={weightLbs}
                onChange={(e) => setWeightLbs(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#DC1F62]"
              />

              {/* Quick Weight Presets */}
              <div className="grid grid-cols-4 gap-2 mt-4 text-center">
                {[
                  { lbs: 15, label: "1-2 Loads", desc: "Single Person" },
                  { lbs: 25, label: "3-4 Loads", desc: "Couple" },
                  { lbs: 45, label: "5-6 Loads", desc: "Family of 3-4" },
                  { lbs: 75, label: "8+ Loads", desc: "Large Household" },
                ].map((preset) => (
                  <button
                    key={preset.lbs}
                    type="button"
                    onClick={() => setWeightLbs(preset.lbs)}
                    className={`p-2 rounded-xl text-xs transition-all cursor-pointer ${
                      weightLbs === preset.lbs
                        ? "bg-[#DC1F62] text-white font-bold shadow-md shadow-pink-200/50"
                        : "bg-pink-50/40 hover:bg-pink-50 text-slate-700 border border-pink-100"
                    }`}
                  >
                    <span className="block font-black">{preset.lbs} lbs</span>
                    <span className={`text-[10px] block truncate ${weightLbs === preset.lbs ? "text-pink-100" : "text-slate-500"}`}>{preset.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Specials & Add-Ons */}
            <div className="bg-white p-6 rounded-2xl border border-pink-200/80 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-pink-100">
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-slate-700">
                  Optional Specials &amp; Add-Ons
                </span>
                <span className="text-[11px] text-slate-400">Select to add to order</span>
              </div>

              <div className="space-y-2">
                {selectableServices.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        isChecked
                          ? "bg-pink-50/70 border-[#DC1F62]/60 shadow-xs"
                          : "bg-slate-50/70 hover:bg-pink-50/30 border-slate-200 hover:border-pink-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? "bg-[#DC1F62] border-[#DC1F62] text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#0F172A]">
                              {addon.name}
                            </span>
                            {addon.popular && (
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-[#DEF2FB] text-[#0284C7] uppercase">
                                Popular
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-500 font-normal">
                            {addon.description}
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-black text-[#DC1F62]">
                          {addon.basePrice === 0 ? "FREE" : `+$${addon.basePrice.toFixed(2)}`}
                        </span>
                        <span className="block text-[10px] text-slate-400 font-medium">
                          {addon.unitLabel}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-pink-200/80 shadow-xl sticky top-28">
              <h3 className="font-heading font-black text-xl text-[#0F172A] mb-4 pb-3 border-b border-pink-100">
                Order Cost Breakdown
              </h3>

              {/* Line items */}
              <div className="space-y-3 text-xs mb-5">
                <div className="flex items-center justify-between text-slate-700">
                  <span>
                    {selectedTier.name} ({weightLbs} lbs @ ${selectedTier.pricePerLb.toFixed(2)}/lb)
                  </span>
                  <span className="font-bold font-mono text-[#0F172A]">
                    ${washFoldPrice.toFixed(2)}
                  </span>
                </div>

                {selectedAddonIds.map((id) => {
                  const addon = selectableServices.find((s) => s.id === id);
                  if (!addon) return null;
                  return (
                    <div key={id} className="flex items-center justify-between text-slate-600">
                      <span className="truncate pr-2">+ {addon.name}</span>
                      <span className="font-bold font-mono text-[#0F172A] shrink-0">
                        {addon.basePrice === 0 ? "FREE" : `$${addon.basePrice.toFixed(2)}`}
                      </span>
                    </div>
                  );
                })}

                {/* Subtotal */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between font-bold text-slate-800">
                  <span>Subtotal</span>
                  <span className="font-mono">${subtotal.toFixed(2)}</span>
                </div>

                {/* Coupon Discount Switch */}
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="first10-coupon"
                      checked={applyCoupon}
                      onChange={(e) => setApplyCoupon(e.target.checked)}
                      className="w-4 h-4 accent-[#DC1F62] cursor-pointer rounded"
                    />
                    <label htmlFor="first10-coupon" className="cursor-pointer text-xs font-bold text-emerald-900">
                      Code FIRST10 (-$10.00)
                    </label>
                  </div>
                  <span className="text-xs font-black text-emerald-700">
                    -$10.00 OFF
                  </span>
                </div>
              </div>

              {/* Big Estimated Total Price */}
              <div className="p-4 bg-gradient-to-r from-pink-50 via-white to-pink-50 border border-pink-200 rounded-2xl mb-4 text-center shadow-xs">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#0284C7] block mb-1">
                  Estimated Total
                </span>
                <div className="text-3xl sm:text-4xl font-black text-[#DC1F62]">
                  ${finalPrice.toFixed(2)}
                </div>
                <span className="text-[11px] text-slate-500 block mt-1">
                  Includes free weather-protective bag packaging
                </span>
              </div>

              {/* Time Saved Benefit Callout */}
              <div className="p-3 bg-[#DEF2FB] rounded-xl border border-[#DEF2FB] text-center text-xs font-semibold text-[#0284C7] mb-4 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-[#DC1F62]" />
                <span>
                  You save approximately <strong className="font-black text-[#0F172A]">{estimatedHoursSaved} hours</strong> of chore time!
                </span>
              </div>

              {/* Final CTA Button */}
              <a
                href={contactInfo.portalOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#DC1F62] hover:bg-[#BE185D] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all text-center active:translate-y-0.5 hover:scale-102"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule This Order</span>
              </a>

              <p className="text-[10px] text-slate-400 text-center mt-3">
                Orders are weighed upon arrival at our Huntington facility for exact scale billing.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
