"use client";

import React, { useState, useEffect } from "react";
import { useContactModal } from "@/context/ContactModalContext";
import { useScrollContext } from "./SmoothScrollProvider";
import { showSuccessSwal } from "@/utils/alerts";
import CustomSelect from "./CustomSelect";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles,
  Tag,
} from "lucide-react";
import { contactInfo } from "@/data/navigation";

const serviceOptions = [
  "Laundry Pickup & Delivery (Residential)",
  "Wash, Dry & Fold (Drop-Off)",
  "10 Ironed Shirts Special ($29.50)",
  "Comforters & Bedding Cleaning ($19.99)",
  "Commercial Laundry (Medical / Dental)",
  "Commercial Laundry (Gyms & Spas)",
  "Commercial Laundry (Airbnbs / Vacation Rentals)",
  "Commercial Laundry (Pet Grooming / Veterinarians)",
  "Commercial Laundry (Restaurants / Uniforms)",
  "Franchise Opportunity Inquiry",
  "Other / General Question",
];

export default function ContactModal() {
  const { isOpen, options, closeContactModal } = useContactModal();
  const { stopScroll, startScroll } = useScrollContext();

  const [activeTab, setActiveTab] = useState<"pickup" | "commercial-bid" | "general">("pickup");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    businessName: "",
    serviceInterest: "Laundry Pickup & Delivery (Residential)",
    specialInstructions: "",
    couponCode: "FIRST10",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync options when modal opens
  useEffect(() => {
    if (isOpen) {
      if (options.intent === "commercial-bid") {
        setActiveTab("commercial-bid");
        setFormData((prev) => ({
          ...prev,
          serviceInterest: "Commercial Laundry (Gyms & Spas)",
          specialInstructions: options.notes || "I'd like to request a commercial laundry bid for our business.",
        }));
      } else {
        setActiveTab("pickup");
        if (options.serviceInterest) {
          setFormData((prev) => ({
            ...prev,
            serviceInterest: options.serviceInterest || "Laundry Pickup & Delivery (Residential)",
          }));
        }
        if (options.notes) {
          setFormData((prev) => ({ ...prev, specialInstructions: options.notes || "" }));
        }
      }
    }
  }, [isOpen, options]);

  // Handle ESC key and body/html scroll lock
  useEffect(() => {
    if (isOpen) {
      stopScroll();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeContactModal();
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
  }, [isOpen, closeContactModal, stopScroll, startScroll]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast dispatch
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);

    showSuccessSwal(
      activeTab === "commercial-bid"
        ? "Commercial Bid Request Received!"
        : "Order Inquiry Received!",
      activeTab === "commercial-bid"
        ? "Thank you! Our commercial accounts manager will review your details and contact you within 24 hours with volume pricing."
        : "Thank you! Our team has received your details and will confirm your pickup schedule shortly. You can also complete your order instantly on our portal."
    );

    closeContactModal();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={closeContactModal}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl border border-pink-200/80 w-full max-w-4xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-pink-50 via-white to-pink-50 text-[#0F172A] p-5 sm:p-6 flex items-center justify-between gap-4 border-b border-pink-200/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#DC1F62] flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#0284C7]">
                DOOR TO DOOR LAUNDRY · HUNTINGTON, NY
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-[#0F172A]">
                {activeTab === "commercial-bid"
                  ? "Request a Commercial Bid"
                  : "Schedule Pickup & Inquiry"}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={closeContactModal}
            className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 text-slate-700 hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 pt-3 gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("pickup")}
            className={`px-4 py-2.5 text-xs font-heading font-bold uppercase tracking-wider rounded-t-xl transition-all border-b-2 flex items-center gap-2 ${
              activeTab === "pickup"
                ? "bg-white border-[#DC1F62] text-[#DC1F62] shadow-xs"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Pickup &amp; Delivery</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("commercial-bid")}
            className={`px-4 py-2.5 text-xs font-heading font-bold uppercase tracking-wider rounded-t-xl transition-all border-b-2 flex items-center gap-2 ${
              activeTab === "commercial-bid"
                ? "bg-white border-[#0284C7] text-[#0284C7] shadow-xs"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Commercial Bid</span>
          </button>
        </div>

        {/* Modal Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
          
          {/* Left: Form Area (7 cols) */}
          <div className="lg:col-span-7 p-5 sm:p-6 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-[#0F172A] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(631) 555-0199"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-[#0F172A] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-[#0F172A] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    {activeTab === "commercial-bid" ? "Business Name *" : "Zip Code (Long Island) *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={activeTab === "commercial-bid" ? formData.businessName : formData.zipCode}
                    onChange={(e) =>
                      activeTab === "commercial-bid"
                        ? setFormData({ ...formData, businessName: e.target.value })
                        : setFormData({ ...formData, zipCode: e.target.value })
                    }
                    placeholder={activeTab === "commercial-bid" ? "Clinic / Spa / Airbnb" : "11743"}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-[#0F172A] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Service of Interest
                </label>
                <CustomSelect
                  options={serviceOptions}
                  value={formData.serviceInterest}
                  onChange={(val) => setFormData({ ...formData, serviceInterest: val })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Special Instructions / Details
                </label>
                <textarea
                  rows={3}
                  value={formData.specialInstructions}
                  onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                  placeholder="e.g. Porch pickup on Tuesday, hypoallergenic detergent preferred, estimated weekly lbs..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-[#0F172A] focus:bg-white transition-all"
                />
              </div>

              {/* Promo Code Note */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between text-xs text-emerald-900 font-semibold">
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Promo Code applied: <strong>FIRST10</strong></span>
                </div>
                <span className="font-bold text-emerald-700">$10 OFF First Order</span>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-6 bg-[#DC1F62] hover:bg-[#BE185D] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
                </button>

                <a
                  href={contactInfo.portalOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-center"
                >
                  <span>Open Online Portal ↗</span>
                </a>
              </div>
            </form>
          </div>

          {/* Right: Direct Business & Operating Details (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 p-5 sm:p-6 border-t lg:border-t-0 lg:border-l border-slate-200 space-y-5 text-xs text-slate-700">
            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">
                Direct Contact
              </h4>
              <div className="space-y-2 font-medium">
                <a
                  href={contactInfo.phoneTel}
                  className="flex items-center gap-2 text-sm font-black text-[#DC1F62] hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.phoneFormatted}</span>
                </a>
                <a
                  href={contactInfo.emailMailto}
                  className="flex items-center gap-2 text-slate-600 hover:text-[#0F172A]"
                >
                  <Mail className="w-4 h-4 text-[#0284C7]" />
                  <span>{contactInfo.email}</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">
                Physical Laundromat
              </h4>
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[#0F172A] font-semibold hover:underline"
              >
                <MapPin className="w-4 h-4 text-[#DC1F62] shrink-0 mt-0.5" />
                <span>
                  215 New York Avenue<br />
                  Huntington, NY 11743
                </span>
              </a>
            </div>

            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">
                Hours of Operation
              </h4>
              <div className="space-y-1 text-slate-600">
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <strong>MON – SAT:</strong> 8:00 AM – 9:00 PM<br />
                    <span className="text-[11px] text-slate-400">Last wash @ 8:00 PM</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <strong>SUN:</strong> 8:00 AM – 6:00 PM<br />
                    <span className="text-[11px] text-slate-400">Last wash @ 4:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-white rounded-2xl border border-slate-200 text-[11px] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#0F172A]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Over 30 Years Serving Huntington</span>
              </div>
              <p className="text-slate-500 font-normal">
                Family-owned, fully insured, with 100% satisfaction guarantee on every single load.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
