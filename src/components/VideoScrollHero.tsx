"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Calendar, Volume2, VolumeX } from "lucide-react";
import { contactInfo } from "@/data/navigation";

export default function VideoScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [duration, setDuration] = useState<number>(0);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const animFrameIdRef = useRef<number | null>(null);

  // 1. Initialize Video Metadata
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration || 1;
      setDuration(dur);
      videoRef.current.currentTime = 0.001;
      setIsVideoReady(true);
    }
  };

  // 2. Smooth Scroll Tracking across ~15 Viewport Heights (1500vh)
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
      setScrollProgress(progress);
      targetProgressRef.current = progress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. 60fps Lerp Frame Scrub Loop
  useEffect(() => {
    let isRunning = true;

    const scrubLoop = () => {
      if (!isRunning) return;

      const video = videoRef.current;
      if (video && video.duration && !video.seeking) {
        const target = targetProgressRef.current;
        const current = currentProgressRef.current;
        const diff = target - current;

        if (Math.abs(diff) > 0.001) {
          // Smooth responsive lerp for fluid 10-scroll scrub
          currentProgressRef.current = current + diff * 0.2;
          const targetTime = currentProgressRef.current * video.duration;

          // Update video currentTime
          if (Math.abs(video.currentTime - targetTime) > 0.005) {
            video.currentTime = Math.min(video.duration - 0.01, Math.max(0.001, targetTime));
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(scrubLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(scrubLoop);

    return () => {
      isRunning = false;
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSkipToOverview = () => {
    const nextSection = document.getElementById("zip-checker") || document.getElementById("storefront-overview");
    if (nextSection) {
      const headerOffset = 70;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      const container = containerRef.current;
      if (container) {
        window.scrollTo({
          top: container.offsetTop + container.offsetHeight,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div
      id="hero"
      ref={containerRef}
      className="relative w-full h-[1000vh] bg-[#FAF9F6]"
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between select-none bg-[#FAF9F6]">
        
        {/* Full-Bleed Video Element (Controlled by Scroll) */}
        <div className="absolute inset-0 w-full h-full z-0 bg-[#FAF9F6]">
          <video
            ref={videoRef}
            src="/hero-doortodoor.mp4"
            preload="auto"
            muted
            playsInline
            onLoadedMetadata={handleLoadedMetadata}
            onCanPlay={() => setIsVideoReady(true)}
            className="w-full h-full object-cover object-center z-0"
          />
        </div>

        {/* Soft Vignettes Blending with Light Theme */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/70 via-white/20 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/60 to-transparent pointer-events-none z-10" />

        {/* Audio Toggle */}
        <div className="absolute top-20 right-6 z-30">
          <button
            type="button"
            onClick={toggleMute}
            className="p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 border border-pink-200/80 backdrop-blur-md transition-all hover:scale-105 shadow-md"
            title={isMuted ? "Unmute video audio" : "Mute video audio"}
            aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-[#DC1F62]" />}
          </button>
        </div>

        {/* Minimal Bottom Controls & Progress */}
        <div className="relative z-20 mt-auto pb-6 sm:pb-8 px-4 sm:px-6 max-w-7xl mx-auto w-full flex flex-col items-center pointer-events-auto">
          {/* Action Row */}
          <div className="flex items-center gap-3 mb-3">
            <a
              href={contactInfo.portalOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#DC1F62] hover:bg-[#BE185D] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule a Pickup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={handleSkipToOverview}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/95 hover:bg-white text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border border-pink-200/80 shadow-xs hover:border-[#DC1F62]/50 backdrop-blur-md"
            >
              <span>Explore Services</span>
            </button>
          </div>

          {/* Scroll Down Prompt */}
          <button
            type="button"
            onClick={handleSkipToOverview}
            className="flex flex-col items-center space-y-1 text-slate-700 hover:text-[#DC1F62] transition-colors group cursor-pointer mb-2"
          >
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-600 group-hover:text-[#DC1F62]">
              Scroll down to play frame by frame
            </span>
            <ChevronDown className="w-4 h-4 text-[#DC1F62] animate-bounce" />
          </button>

          {/* Glowing Minimal Progress Line */}
          <div className="w-full max-w-xs sm:max-w-md h-1.5 bg-slate-200/90 rounded-full overflow-hidden backdrop-blur-md border border-pink-100">
            <div
              className="h-full bg-gradient-to-r from-[#DC1F62] via-[#0284C7] to-[#DC1F62] transition-all duration-75 rounded-full"
              style={{ width: `${Math.max(2, scrollProgress * 100)}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
