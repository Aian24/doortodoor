"use client";

import React, { useState, useEffect } from "react";
import { useContactModal } from "@/context/ContactModalContext";
import { showSuccessSwal } from "@/utils/alerts";
import CustomSelect from "./CustomSelect";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Send,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Bot,
  Rocket,
} from "lucide-react";

const serviceOptions = [
  "Marketing & Advertising",
  "Brand & Design",
  "AI Services (AEO/GEO)",
  "Web & App Development",
  "Video & Content",
  "Email & SMS",
  "A full bundle",
  "Not sure yet",
];

export default function ContactModal() {
  const { isOpen, options, closeContactModal } = useContactModal();

  const [activeTab, setActiveTab] = useState<"form" | "calendar" | "ai-audit">(
    "form"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    interest: "A full bundle",
    message: "",
    preferredDate: "",
    preferredTime: "10:00 AM",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync options when modal opens
  useEffect(() => {
    if (isOpen) {
      if (options.intent === "ai-audit") {
        setActiveTab("ai-audit");
        setFormData((prev) => ({
          ...prev,
          interest: "AI Services (AEO/GEO)",
          message: options.notes || "I'd like to book an AI readiness audit for our business workflows.",
        }));
      } else if (options.intent === "strategy-session") {
        setActiveTab("calendar");
        setFormData((prev) => ({
          ...prev,
          interest: options.serviceInterest || "A full bundle",
          message: options.notes || "Booking a free strategy session to discuss marketing growth.",
        }));
      } else if (options.intent === "start-project") {
        setActiveTab("form");
        setFormData((prev) => ({
          ...prev,
          interest: options.serviceInterest || "Web & App Development",
          message: options.notes || "Ready to start a new project with ReLaunch.",
        }));
      } else {
        setActiveTab("form");
        if (options.serviceInterest) {
          setFormData((prev) => ({
            ...prev,
            interest: options.serviceInterest || "A full bundle",
          }));
        }
        if (options.notes) {
          setFormData((prev) => ({ ...prev, message: options.notes || "" }));
        }
      }
    }
  }, [isOpen, options]);

  // Handle ESC key and body scroll lock
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeContactModal();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, closeContactModal]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate quick submission
    setTimeout(async () => {
      setIsSubmitting(false);
      closeContactModal();

      if (activeTab === "calendar") {
        await showSuccessSwal(
          "Strategy Session Reserved!",
          `Thanks, ${formData.name || "friend"}! Your session is locked in for ${formData.preferredDate || "your chosen date"} at ${formData.preferredTime}. You'll receive a Google Calendar invite at ${formData.email}.`,
          `<strong>Service Focus:</strong> ${formData.interest} · <strong>Phone:</strong> ${formData.phone || "On file"}`
        );
      } else if (activeTab === "ai-audit") {
        await showSuccessSwal(
          "AI Audit Request Received!",
          `Thanks, ${formData.name || "friend"}! Our AI architecture team is reviewing ${formData.business || "your company"}'s profile. We will email your diagnostic roadmap to ${formData.email} within 1 business day.`,
          `<strong>Priority Track:</strong> AI & Automation Readiness · Phoenix, AZ`
        );
      } else {
        await showSuccessSwal(
          "Message Received!",
          `Thanks, ${formData.name || "friend"}! Your message is on its way. Our Phoenix team will reply to ${formData.email} within one business day.`,
          `<strong>Target Interest:</strong> ${formData.interest}`
        );
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        interest: "A full bundle",
        message: "",
        preferredDate: "",
        preferredTime: "10:00 AM",
      });
    }, 450);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          key="contact-modal-portal"
          className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
        >
          {/* Hardware-accelerated Smooth Backdrop */}
          <motion.div
            key="contact-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={closeContactModal}
            style={{ willChange: "opacity", transform: "translateZ(0)" }}
            className="fixed inset-0 bg-[#090D16]/80"
          />

          {/* Modal Container */}
          <motion.div
            key="contact-modal-dialog"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            className="relative w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
          >
            {/* Modal Header */}
            <div className="bg-[#090D16] text-white p-5 sm:p-6 flex items-start justify-between border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#C0622A] text-[10px] font-bold uppercase tracking-widest mb-2">
                  <Sparkles className="w-3 h-3 text-[#C0622A]" />
                  <span>Let&apos;s Build Your Mission</span>
                </div>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">
                  {activeTab === "calendar"
                    ? "Book a Free Strategy Session"
                    : activeTab === "ai-audit"
                    ? "Request Your AI Readiness Audit"
                    : "Tell Us About Your Business"}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-lg">
                  No pressure, no fluff. Just a clear roadmap tailored to your growth goals.
                </p>
              </div>

              <button
                onClick={closeContactModal}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="bg-slate-100 p-2 border-b border-slate-200 flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("form")}
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "form"
                    ? "bg-white text-[#090D16] shadow-sm"
                    : "text-slate-600 hover:text-[#090D16] hover:bg-slate-200/60"
                }`}
              >
                <Send className="w-3.5 h-3.5 text-[#C0622A]" />
                <span className="truncate">Send a Message / Start Project</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("ai-audit")}
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "ai-audit"
                    ? "bg-white text-[#090D16] shadow-sm"
                    : "text-slate-600 hover:text-[#090D16] hover:bg-slate-200/60"
                }`}
              >
                <Bot className="w-3.5 h-3.5 text-[#2E8B7A]" />
                <span className="truncate">Book an AI Audit</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("calendar")}
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "calendar"
                    ? "bg-white text-[#090D16] shadow-sm"
                    : "text-slate-600 hover:text-[#090D16] hover:bg-slate-200/60"
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-[#C0622A]" />
                <span className="truncate">Live Calendar Slot</span>
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 2-Column Row: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name <span className="text-[#C0622A]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#C0622A] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Work Email <span className="text-[#C0622A]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@business.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#C0622A] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 2-Column Row: Phone & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="480-779-9875"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#C0622A] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Business / Company Name
                    </label>
                    <input
                      type="text"
                      name="business"
                      placeholder="Your Company LLC"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#C0622A] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Service Interest Selector */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    What do you need help with?
                  </label>
                  <CustomSelect
                    name="interest"
                    value={formData.interest}
                    onChange={(val) =>
                      setFormData((prev) => ({ ...prev, interest: val }))
                    }
                    options={serviceOptions}
                  />
                </div>

                {/* Calendar-Specific Slot Pickers */}
                {activeTab === "calendar" && (
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <Clock className="w-4 h-4 text-[#C0622A]" />
                      <span>Select Preferred Strategy Session Slot (30 Min)</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:border-[#C0622A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
                          Time (Mountain Standard Time)
                        </label>
                        <CustomSelect
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={(val) =>
                            setFormData((prev) => ({
                              ...prev,
                              preferredTime: val,
                            }))
                          }
                          options={[
                            "09:00 AM MST",
                            "10:00 AM MST",
                            "11:30 AM MST",
                            "01:00 PM MST",
                            "02:30 PM MST",
                            "04:00 PM MST",
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Message / Goals */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {activeTab === "ai-audit"
                      ? "Tell us about your current tools or bottlenecks"
                      : "Message / Goals"}
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="A few sentences about your business goals, timeline, or current challenges..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#C0622A] focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Bottom Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C0622A] hover:bg-[#a84f1d] disabled:opacity-60 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm active:translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>
                          {activeTab === "calendar"
                            ? "Confirm Strategy Session Booking →"
                            : activeTab === "ai-audit"
                            ? "Submit AI Audit Request →"
                            : "Send Message / Start Project →"}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Direct Quick Contact Bar */}
              <div className="mt-5 pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
                <a
                  href="tel:4807799875"
                  className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-slate-700 hover:text-[#C0622A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C0622A] shrink-0" />
                  <span>(480) 779-9875</span>
                </a>

                <a
                  href="mailto:care@relaunch.us"
                  className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-slate-700 hover:text-[#C0622A] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#2E8B7A] shrink-0" />
                  <span>care@relaunch.us</span>
                </a>

                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Phoenix, AZ · Est. 2004</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
