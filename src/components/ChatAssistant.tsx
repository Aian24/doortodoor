"use client";

import { useState, useRef, useEffect } from "react";
import { useContactModal } from "@/context/ContactModalContext";
import { contactInfo } from "@/data/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  RotateCcw,
  ArrowUpRight,
  User,
  Calendar,
  Phone,
  Tag,
} from "lucide-react";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  time: string;
  action?: {
    label: string;
    href: string;
  };
}

const initialMessages: Message[] = [
  {
    id: "welcome",
    sender: "ai",
    text: "Hi! I'm the **Door to Door Laundry Virtual Assistant**. How can I help you with pickup, drop-off, or pricing today?",
    time: "Just now",
  },
];

const quickPrompts = [
  "How much does pickup cost?",
  "What is the first order promo code?",
  "What areas in Long Island do you service?",
  "How does Wash & Fold drop-off work?",
  "Tell me about the 10-shirt ironed special",
  "Where are you located & what are your hours?",
];

export default function ChatAssistant() {
  const { openContactModal } = useContactModal();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [isOpen, messages, isTyping]);

  const generateAnswer = (query: string): { text: string; action?: { label: string; href: string } } => {
    const q = query.toLowerCase();

    if (q.includes("pickup") || q.includes("deliver") || q.includes("schedule") || q.includes("order")) {
      return {
        text: "Our **Pickup & Delivery service** brings fresh, clean laundry right to your door across Long Island:\n\n• **Recurring Pickup (Weekly/Bi-weekly)**: **$1.75 / lb** ($45 min)\n• **As-Needed Pickup (On-Demand)**: **$1.80 / lb** ($45 min)\n• **Turnaround**: 24 to 48 hours\n• **New Customers**: Use code **FIRST10** for $10 OFF + Free Reusable Bag!\n\nNo need to be home—just leave your bags on your front porch.",
        action: { label: "Schedule Pickup on Portal", href: contactInfo.portalOrderUrl },
      };
    }

    if (q.includes("cost") || q.includes("price") || q.includes("pricing") || q.includes("rate") || q.includes("how much")) {
      return {
        text: "Here is our complete pricing menu:\n\n• **Drop-Off Wash & Fold (Next-Day)**: **$1.10 / lb** ($20 min)\n• **Drop-Off Wash & Fold (Same-Day)**: **$1.30 / lb** (Drop off by noon)\n• **Recurring Pickup & Delivery**: **$1.75 / lb** ($45 min)\n• **As-Needed Pickup & Delivery**: **$1.80 / lb** ($45 min)\n• **10 Ironed Shirts Special**: **$29.50** (Regular $3.50 ea)\n• **Comforters / Blankets / Quilts (Any size)**: **$19.99** (Down +$10)",
        action: { label: "Open Price Calculator", href: "#pricing" },
      };
    }

    if (q.includes("promo") || q.includes("coupon") || q.includes("code") || q.includes("special") || q.includes("discount") || q.includes("deal")) {
      return {
        text: "We currently have 3 fantastic special promotions:\n\n1. **First Order Promo**: Use code **FIRST10** for **$10 OFF + Free Reusable Laundry Bag** on your first pickup order!\n2. **10 Ironed Shirts Special**: Wash 'N Press 10 shirts for **$29.50** (regular $3.50 ea).\n3. **Comforter Promo**: Any size quilt, blanket, or comforter cleaned for **$19.99** (Down +$10).",
        action: { label: "View All Specials", href: "#specials" },
      };
    }

    if (q.includes("area") || q.includes("zip") || q.includes("location") || q.includes("where") || q.includes("huntington") || q.includes("greenlawn") || q.includes("melville")) {
      return {
        text: "We service homes and businesses throughout Long Island, including:\n\n• **Huntington (11743)**\n• **Greenlawn (11740)**\n• **Huntington Station & South Huntington (11746)**\n• **Melville (11747)**\n• **West Hills (11743)**\n• **Syosset (11791), Massapequa (11758), Commack (11725)** & surrounding towns.\n\nOur laundromat is located at **215 New York Ave, Huntington, NY 11743**.",
        action: { label: "Check Your Zip Code", href: "#pricing" },
      };
    }

    if (q.includes("hour") || q.includes("open") || q.includes("time") || q.includes("address") || q.includes("phone")) {
      return {
        text: "Our Huntington laundromat hours & contact details:\n\n📍 **Address**: 215 New York Avenue, Huntington, NY 11743\n📞 **Phone**: (631) 769-9922 / (631) 949-6300\n⏰ **MON – SAT**: 8:00 AM – 9:00 PM (Last wash @ 8:00 PM)\n⏰ **SUN**: 8:00 AM – 6:00 PM (Last wash @ 4:30 PM)\n\nPickup & delivery routes run daily with 24-48h turnaround.",
        action: { label: "Get Driving Directions", href: contactInfo.googleMapsUrl },
      };
    }

    if (q.includes("commercial") || q.includes("business") || q.includes("hotel") || q.includes("airbnb") || q.includes("gym") || q.includes("medical") || q.includes("spa") || q.includes("bid")) {
      return {
        text: "Yes! We provide full-service commercial linen and towel laundering for:\n\n• **Medical & Dental Clinics** (OSHA-compliant sanitized scrubs)\n• **Gyms & Spas** (Daily fresh towel routes)\n• **Airbnbs & Short-Term Rentals** (Crisp sheets and pillowcases)\n• **Pet Grooming & Veterinary Clinics**\n• **Restaurants & Corporate Uniforms**\n\nWe provide dedicated bins and custom volume billing.",
        action: { label: "Request a Commercial Bid", href: "https://www.doortodoorlaundry.com/commercial-laundry/request-a-bid/" },
      };
    }

    if (q.includes("shirt") || q.includes("iron") || q.includes("press")) {
      return {
        text: "Our **Ironed Shirts Service** keeps your wardrobe crisp and sharp:\n\n• **Special Deal**: **10 Shirts Wash & Press for $29.50** (Regular $3.50 ea)\n• Washed, professionally hand-pressed, and returned on hangers in protective poly garment covers.",
        action: { label: "Order Ironed Shirts", href: contactInfo.portalOrderUrl },
      };
    }

    return {
      text: "Thanks for reaching out! Whether you want to schedule a residential pickup, drop off at our 215 New York Ave laundromat, or request a commercial bid—our Huntington team is here to help.\n\nYou can call us directly at **(631) 769-9922** or schedule online anytime.",
      action: { label: "Schedule Pickup Online", href: contactInfo.portalOrderUrl },
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAnswer(text);
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: response.text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        action: response.action,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-3.5 sm:p-4 rounded-2xl bg-[#DC1F62] hover:bg-[#BE185D] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95"
          aria-label="Open Door to Door Laundry Assistant"
        >
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-sky-400"></span>
            </span>
          )}

          {isOpen ? (
            <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
          ) : (
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline font-heading font-bold text-xs uppercase tracking-wider pr-1">
                Ask Laundry AI
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-h-[580px] bg-white rounded-3xl shadow-2xl border border-pink-200/80 flex flex-col overflow-hidden select-text"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-50 via-white to-pink-50 text-[#0F172A] p-4 flex items-center justify-between border-b border-pink-200/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#DC1F62] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0F172A] leading-tight">
                    Door to Door Assistant
                  </h4>
                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online · (631) 769-9922
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setMessages(initialMessages)}
                  className="p-1.5 rounded-lg hover:bg-pink-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  title="Reset Chat"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-pink-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#FAF9F6] text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "ai" && (
                    <div className="w-6 h-6 rounded-lg bg-pink-100 text-[#DC1F62] flex items-center justify-center shrink-0 mt-0.5 border border-pink-200/60">
                      <Bot className="w-3.5 h-3.5 text-[#DC1F62]" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3.5 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-[#DC1F62] text-white rounded-tr-xs shadow-xs"
                        : "bg-white text-slate-800 border border-pink-200/80 rounded-tl-xs shadow-xs"
                    }`}
                  >
                    <div className="whitespace-pre-line leading-relaxed font-normal">
                      {msg.text}
                    </div>

                    {msg.action && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100">
                        <a
                          href={msg.action.href}
                          target={msg.action.href.startsWith("http") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          onClick={() => {
                            if (!msg.action?.href.startsWith("http")) {
                              setIsOpen(false);
                            }
                          }}
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#DC1F62] hover:underline"
                        >
                          <span>{msg.action.label}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}

                    <span
                      className={`text-[9px] block mt-1 ${
                        msg.sender === "user" ? "text-pink-100 text-right" : "text-slate-400"
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-6 h-6 rounded-lg bg-[#0F172A] text-white flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-[#38BDF8]" />
                  </div>
                  <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC1F62] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC1F62] animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC1F62] animate-bounce delay-200" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Carousel */}
            <div className="px-3 py-2 bg-white border-t border-slate-200 flex gap-1.5 overflow-x-auto scrollbar-none">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-pink-50 hover:text-[#DC1F62] text-slate-700 text-[10px] font-semibold whitespace-nowrap transition-colors border border-slate-200/80 shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder="Ask about pricing, pickup, specials..."
                className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white transition-all outline-none"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                className="p-2.5 rounded-xl bg-[#DC1F62] hover:bg-[#BE185D] text-white shadow-xs transition-transform active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
