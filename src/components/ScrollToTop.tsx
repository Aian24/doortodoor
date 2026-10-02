"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 left-6 z-40 p-3 rounded-2xl bg-[#090D16] hover:bg-[#C0622A] text-white border border-slate-700/80 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center cursor-pointer animate-in fade-in slide-in-from-bottom-4"
    >
      <ArrowUp className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
      <span className="sr-only">Scroll to top</span>
    </button>
  );
}
