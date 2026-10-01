"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Set video playback rate to 2.2x to make it fast
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.2;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay check:", err);
      });
    }

    // Safety timeout: dismiss preloader after 3.2s max if video ends or hangs
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnded = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none pointer-events-none"
        >
          {/* Top subtle brand accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#C0622A]" />

          <div className="flex flex-col items-center max-w-md px-6 text-center">
            {/* Logo Video (Plays fast at 2.5x speed) */}
            <div className="w-64 sm:w-80 h-36 sm:h-44 rounded-2xl bg-white flex items-center justify-center p-2 overflow-hidden">
              <video
                ref={videoRef}
                src="/relaunch-intro.mp4"
                playsInline
                muted
                autoPlay
                onEnded={handleVideoEnded}
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    videoRef.current.playbackRate = 2.5;
                  }
                }}
                className="w-full h-full object-contain"
              />
            </div>

            {/* "Loading, please wait..." indicator */}
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C0622A] animate-ping" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#090D16]">
                Loading, please wait...
              </span>
            </div>

            {/* Fast loading pulse bar */}
            <div className="w-40 h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden border border-slate-200">
              <div className="h-full bg-[#C0622A] rounded-full animate-pulse w-full" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
