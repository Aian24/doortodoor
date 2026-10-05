"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

interface ScrollContextType {
  lenis: Lenis | null;
  scrollProgress: number;
  scrollVelocity: number;
  activeSection: string;
}

const ScrollContext = createContext<ScrollContextType>({
  lenis: null,
  scrollProgress: 0,
  scrollVelocity: 0,
  activeSection: "hero",
});

export const useScrollContext = () => useContext(ScrollContext);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const rafHandleRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize buttery smooth Lenis momentum scroll
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    setLenisInstance(lenis);

    const onScroll = (e: any) => {
      const progress = e.progress || 0;
      const velocity = e.velocity || 0;
      setScrollProgress(progress);
      setScrollVelocity(velocity);
    };

    lenis.on("scroll", onScroll);

    function raf(time: number) {
      lenis.raf(time);
      rafHandleRef.current = requestAnimationFrame(raf);
    }

    rafHandleRef.current = requestAnimationFrame(raf);

    // Section Observer for Active Section Tracking
    const sectionIds = [
      "hero",
      "two-doors",
      "services",
      "ai-section",
      "method",
      "bundle-builder",
      "relaunch-social",
      "work",
      "nis-grader",
      "testimonials",
      "faq",
    ];

    const handleScrollTracking = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollY >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollTracking, { passive: true });
    handleScrollTracking();

    return () => {
      if (rafHandleRef.current) cancelAnimationFrame(rafHandleRef.current);
      lenis.destroy();
      window.removeEventListener("scroll", handleScrollTracking);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        lenis: lenisInstance,
        scrollProgress,
        scrollVelocity,
        activeSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
