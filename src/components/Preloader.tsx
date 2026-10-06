"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Preloader() {
  const [isMounted, setIsMounted] = useState(true);
  const [isDismissing, setIsDismissing] = useState(false);
  const [progress, setProgress] = useState(0);
  const dismissedRef = useRef(false);

  const dismissLoader = () => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;

    setProgress(100);
    setIsDismissing(true);

    setTimeout(() => {
      setIsMounted(false);
    }, 500);
  };

  useEffect(() => {
    // Fast, responsive progress ramp-up to give a quick, polished experience
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(dismissLoader, 150);
          return 100;
        }
        // Swift smooth acceleration
        const increment = Math.floor(Math.random() * 18) + 12;
        const next = Math.min(100, prev + increment);
        if (next === 100) {
          clearInterval(interval);
          setTimeout(dismissLoader, 150);
        }
        return next;
      });
    }, 80);

    // Safety fallback
    const safetyTimer = setTimeout(() => {
      dismissLoader();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      aria-hidden={isDismissing}
      style={{
        transition:
          "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), visibility 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "opacity",
        transform: "translateZ(0)",
      }}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none ${
        isDismissing
          ? "opacity-0 pointer-events-none invisible"
          : "opacity-100 pointer-events-auto visible"
      }`}
    >
      {/* Top subtle brand accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#DC1F62] via-[#0284C7] to-[#DC1F62]" />

      <div className="flex flex-col items-center max-w-md px-6 text-center w-full">
        {/* Door To Door Brand Logo */}
        <div className="relative w-64 sm:w-72 h-24 mb-3 flex items-center justify-center animate-float-bubble">
          <Image
            src="/logos/door-to-door-horizontal.png"
            alt="Door To Door Laundry"
            width={320}
            height={96}
            priority
            className="object-contain max-h-20 w-auto"
          />
        </div>

        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DEF2FB] text-[#0284C7] text-xs font-bold tracking-wide uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#DC1F62]" />
          <span>You Leave It, We Clean It</span>
        </div>

        {/* Loading Text & Percentage Indicator */}
        <div className="flex items-center gap-2 mt-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC1F62] animate-ping" />
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#0F172A]">
            Loading Fresh Experience...
          </span>
          <span className="font-mono text-xs font-bold text-[#DC1F62] ml-1">
            {progress}%
          </span>
        </div>

        {/* Progressive Bar */}
        <div className="w-56 max-w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden border border-slate-200">
          <div
            style={{
              width: `${progress}%`,
              transition: "width 120ms linear",
            }}
            className="h-full bg-gradient-to-r from-[#DC1F62] to-[#0284C7] rounded-full"
          />
        </div>

        <p className="text-[11px] text-slate-400 mt-4 font-medium">
          Huntington, NY · Free Pickup & Delivery Across Long Island
        </p>
      </div>
    </div>
  );
}
