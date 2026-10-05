"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  TrendingUp,
  Bot,
  Zap,
  Layers,
  Palette,
  Code2,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const TOTAL_FRAMES = 240;
const FRAME_PATH = (idx: number) =>
  `/hero_frames/frame_${String(idx).padStart(3, "0")}.webp`;

interface StoryPill {
  id: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  icon: "zap" | "trending" | "bot" | "layers" | "palette" | "code" | "cpu" | "shield";
  title: string;
  badge?: string;
}

interface StoryBeat {
  id: string;
  pills: StoryPill[];
  showCtas?: boolean;
}

const STORY_BEATS: StoryBeat[] = [
  {
    id: "agency-core",
    pills: [
      {
        id: "pill-1",
        position: "top-left",
        icon: "trending",
        title: "Full-Service Production Studio",
        badge: "Phoenix, AZ · Est. 2004",
      },
      {
        id: "pill-2",
        position: "bottom-right",
        icon: "shield",
        title: "Marketing & Advertising",
        badge: "Paid Ads & SEO",
      },
    ],
    showCtas: true,
  },
  {
    id: "brand-creative",
    pills: [
      {
        id: "pill-3",
        position: "top-right",
        icon: "palette",
        title: "Brand & Design",
        badge: "StoryBrand SB7",
      },
      {
        id: "pill-4",
        position: "bottom-left",
        icon: "layers",
        title: "Video & Content",
        badge: "Reels & Media",
      },
    ],
    showCtas: false,
  },
  {
    id: "web-software",
    pills: [
      {
        id: "pill-5",
        position: "top-left",
        icon: "zap",
        title: "Web & App Development",
        badge: "Next.js & Apps",
      },
      {
        id: "pill-6",
        position: "bottom-right",
        icon: "code",
        title: "Custom Software & Client Portals",
        badge: "Bespoke Portals",
      },
    ],
    showCtas: false,
  },
  {
    id: "ai-retention",
    pills: [
      {
        id: "pill-7",
        position: "top-right",
        icon: "bot",
        title: "AI Services & 24/7 Automations",
        badge: "Chatbots & Workflows",
      },
      {
        id: "pill-8",
        position: "bottom-left",
        icon: "cpu",
        title: "Email & SMS Marketing",
        badge: "Retention Flows",
      },
    ],
    showCtas: false,
  },
  {
    id: "subscription-audit",
    pills: [
      {
        id: "pill-9",
        position: "top-left",
        icon: "shield",
        title: "NIS Sales Audit & Advisory",
        badge: "4-Layer Diagnostic",
      },
      {
        id: "pill-10",
        position: "bottom-right",
        icon: "layers",
        title: "All 8 Services in 1 Subscription",
        badge: "Cancel Anytime",
      },
    ],
    showCtas: true,
  },
];

export default function Hero() {
  const { openContactModal } = useContactModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);
  const animFrameIdRef = useRef<number | null>(null);

  // 1. High-performance canvas drawing - Razor sharp, crystal clear, responsive edge-to-edge
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    if (canvasWidth === 0 || canvasHeight === 0) return;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    // Fill deep dark canvas background
    ctx.fillStyle = "#090D16";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    let drawWidth: number;
    let drawHeight: number;
    let offsetX = 0;
    let offsetY = 0;

    // Responsive framing check: portrait mobile vs landscape desktop
    if (canvasRatio < 1.15) {
      // 1. Ambient blurred background pass to saturate the full viewport height with live colors
      const bgDrawHeight = canvasHeight;
      const bgDrawWidth = canvasHeight * imgRatio;
      const bgOffsetX = (canvasWidth - bgDrawWidth) / 2;

      ctx.save();
      if ("filter" in ctx) {
        ctx.filter = "blur(40px) brightness(0.4)";
      }
      ctx.globalAlpha = 0.5;
      ctx.drawImage(img, bgOffsetX, 0, bgDrawWidth, bgDrawHeight);
      ctx.restore();

      // 2. Large, immersive central video frame (Fills ~68% of screen height for bold visual impact)
      drawHeight = Math.round(canvasHeight * 0.68);
      drawWidth = Math.round(drawHeight * imgRatio);
      offsetX = Math.round((canvasWidth - drawWidth) / 2);
      offsetY = Math.round((canvasHeight - drawHeight) / 2);

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // 3. Smooth gradient feather on top and bottom edges for seamless dark integration
      const fadeHeight = Math.max(16, Math.round(drawHeight * 0.10));

      // Top edge dissolve
      const topGrad = ctx.createLinearGradient(0, offsetY, 0, offsetY + fadeHeight);
      topGrad.addColorStop(0, "rgba(9, 13, 22, 1)");
      topGrad.addColorStop(1, "rgba(9, 13, 22, 0)");
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, offsetY - 2, canvasWidth, fadeHeight + 2);

      // Bottom edge dissolve
      const btmGrad = ctx.createLinearGradient(0, offsetY + drawHeight - fadeHeight, 0, offsetY + drawHeight);
      btmGrad.addColorStop(0, "rgba(9, 13, 22, 0)");
      btmGrad.addColorStop(1, "rgba(9, 13, 22, 1)");
      ctx.fillStyle = btmGrad;
      ctx.fillRect(0, offsetY + drawHeight - fadeHeight, canvasWidth, fadeHeight + 2);
    } else {
      // Landscape desktop: full-bleed cover
      if (canvasRatio > imgRatio) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
      }
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  }, []);

  // 2. High-speed preloading and asynchronous GPU image decoding
  useEffect(() => {
    let isMounted = true;
    let loaded = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const onImageDone = () => {
      if (!isMounted) return;
      loaded++;
      setLoadedCount(loaded);
      if (loaded >= TOTAL_FRAMES) {
        setIsReady(true);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = onImageDone;
      img.onerror = onImageDone;

      if (typeof img.decode === "function") {
        img.decode().then(onImageDone).catch(() => {});
      }
      images[i] = img;
    }

    imagesRef.current = images;

    // Draw first frame as soon as frame 0 is ready
    if (images[0]) {
      const drawFirst = () => {
        renderFrame(0);
        lastDrawnFrameRef.current = 0;
      };
      if (images[0].complete) {
        drawFirst();
      } else {
        images[0].onload = () => {
          onImageDone();
          drawFirst();
        };
      }
    }

    return () => {
      isMounted = false;
    };
  }, [renderFrame]);

  // Resize canvas to match display size with high DPI support
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const targetWidth = Math.round(rect.width * dpr);
      const targetHeight = Math.round(rect.height * dpr);

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }
      renderFrame(Math.round(currentFrameRef.current));
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame, isReady]);

  // Draw initial frame as soon as isReady triggers
  useEffect(() => {
    if (isReady) {
      const target = Math.round(currentFrameRef.current);
      renderFrame(target);
      lastDrawnFrameRef.current = target;
    }
  }, [isReady, renderFrame]);

  // 3. Silky Smooth Lerp Animation Loop with instant responsiveness
  useEffect(() => {
    if (!isReady) return;

    let isRunning = true;

    const updateLoop = () => {
      if (!isRunning) return;

      const current = currentFrameRef.current;
      const target = targetFrameRef.current;
      const diff = target - current;

      if (lastDrawnFrameRef.current === -1) {
        const initial = Math.round(current);
        renderFrame(initial);
        lastDrawnFrameRef.current = initial;
      }

      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current = current + diff * 0.10;
        const frameToDraw = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(currentFrameRef.current))
        );
        if (frameToDraw !== lastDrawnFrameRef.current) {
          renderFrame(frameToDraw);
          lastDrawnFrameRef.current = frameToDraw;
        }
      }

      animFrameIdRef.current = requestAnimationFrame(updateLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(updateLoop);

    return () => {
      isRunning = false;
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [isReady, renderFrame]);

  // 4. Interactive Mouse Gyro & Spatial Parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // 5. Scroll position calculation
  useEffect(() => {
    if (!isReady) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
      setScrollProgress(progress);
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isReady]);

  const handleSkipToContent = () => {
    const nextSection = document.getElementById("two-doors");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
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

  // Compute active story beat from 5 key progress segments
  const beatIndex = Math.min(
    STORY_BEATS.length - 1,
    Math.floor(scrollProgress * STORY_BEATS.length)
  );
  const activeBeat = STORY_BEATS[beatIndex];

  const MARKETING_PILLARS = [
    { num: "01", name: "Marketing & Advertising", badge: "Paid Ads & SEO", targetId: "services" },
    { num: "02", name: "Brand & Design", badge: "Identity & SB7", targetId: "services" },
    { num: "03", name: "AI Services", badge: "24/7 Automations", targetId: "ai-section" },
    { num: "04", name: "Web & App Development", badge: "Next.js & Apps", targetId: "services" },
    { num: "05", name: "Video & Content", badge: "Reels & Media", targetId: "services" },
    { num: "06", name: "Email & SMS Marketing", badge: "Flows & CRM", targetId: "services" },
    { num: "07", name: "Custom Software & Client Portals", badge: "Bespoke Portals", targetId: "services" },
    { num: "08", name: "NIS Sales Audit & Advisory", badge: "4-Layer Grader", targetId: "nis-grader" },
  ];

  const activePillarIndex = Math.min(
    MARKETING_PILLARS.length - 1,
    Math.floor(scrollProgress * MARKETING_PILLARS.length)
  );

  const CHAPTER_GLOWS = [
    "bg-[#C0622A]/15",
    "bg-[#7C3AED]/15",
    "bg-[#06B6D4]/15",
    "bg-[#2E8B7A]/15",
    "bg-[#E88C52]/15",
  ];

  const loadPercentage = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "zap":
        return <Zap className="w-3.5 h-3.5 text-[#C0622A]" />;
      case "trending":
        return <TrendingUp className="w-3.5 h-3.5 text-[#2E8B7A]" />;
      case "bot":
        return <Bot className="w-3.5 h-3.5 text-[#2E8B7A]" />;
      case "layers":
        return <Layers className="w-3.5 h-3.5 text-[#C0622A]" />;
      case "palette":
        return <Palette className="w-3.5 h-3.5 text-[#C0622A]" />;
      case "code":
        return <Code2 className="w-3.5 h-3.5 text-[#2E8B7A]" />;
      case "cpu":
        return <Cpu className="w-3.5 h-3.5 text-[#2E8B7A]" />;
      case "shield":
        return <ShieldCheck className="w-3.5 h-3.5 text-[#C0622A]" />;
      default:
        return <Zap className="w-3.5 h-3.5 text-[#C0622A]" />;
    }
  };

  return (
    <div
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[850vh] bg-[#090D16]"
    >
      {/* Sticky Fullscreen Cinematic Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between select-none">
        
        {/* Dynamic Morphing Ambient Halo */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[170px] pointer-events-none z-0 transition-all duration-700 ${
            CHAPTER_GLOWS[beatIndex] || "bg-[#C0622A]/15"
          }`}
        />

        {/* Spatial 3D Tilt Video Canvas (Edge-to-Edge Behind Transparent Navbar) */}
        <div
          className="absolute inset-0 w-full h-full z-0 bg-[#090D16] transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1200px) rotateY(${mousePos.x * 1.5}deg) rotateX(${-mousePos.y * 1.5}deg) scale(1.01)`,
          }}
        >
          {/* Instant First-Paint Image (Zero Black Flash on Load) */}
          <img
            src="/hero_frames/frame_000.webp"
            alt="Hero Initial Frame"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>

        {/* Subtle Top & Bottom Cinematic Vignette Gradients */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none z-10" />

        {/* Minimalist Non-Blocking Loading Pill (Only if loading frames) */}
        <AnimatePresence>
          {!isReady && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/15 flex items-center gap-2 shadow-xl pointer-events-none"
            >
              <div className="w-3 h-3 rounded-full border border-[#C0622A]/30 border-t-[#C0622A] animate-spin" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-white uppercase">
                Optimizing 1080p Stream
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* INTERACTIVE FLOATING SPATIAL HUD (TELEMETRY + FLOATING LABELS)             */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 pointer-events-none z-20 p-4 sm:p-8 md:p-10 flex flex-col justify-between">
          
          {/* Top Floating Row (Under Navbar with Live Telemetry) */}
          <div className="flex justify-between items-start pt-16 sm:pt-24 md:pt-28">
            <AnimatePresence mode="wait">
              {activeBeat.pills
                .filter((p) => p.position === "top-left" || p.position === "top-right")
                .map((pill) => (
                  <motion.div
                    key={pill.id}
                    initial={{ opacity: 0, x: -16, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{
                      transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 8}px, 0)`,
                    }}
                    className="pointer-events-auto"
                  >
                    <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-xl border border-white/15 text-white shadow-xl hover:bg-black/85 transition-colors">
                      <div className="p-0.5">{renderIcon(pill.icon)}</div>
                      <span className="text-[10px] sm:text-xs font-heading font-medium text-white/95">
                        {pill.title}
                      </span>
                      {pill.badge && (
                        <span className="text-[8px] sm:text-[9px] font-mono font-semibold uppercase px-1.5 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                          {pill.badge}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>

            {/* Live Interactive Telemetry Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 6}px, 0)`,
              }}
              className="pointer-events-auto ml-auto"
            >
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-xl border border-white/15 text-white shadow-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300">
                  Full-Service Marketing Studio · Est. 2004
                </span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Right-Side Marketing Pillars (All 8 Core Services) */}
          <div className="hidden lg:flex flex-col gap-1.5 pointer-events-auto absolute right-6 top-1/2 -translate-y-1/2 z-30 max-h-[75vh] overflow-y-auto py-2 pr-1">
            <div className="px-3 py-1 text-[9px] font-mono uppercase tracking-widest text-slate-400 border-b border-white/10 mb-1 flex items-center justify-between">
              <span>8 Core Services</span>
              <span className="text-[8px] text-[#C0622A]">Phoenix, AZ</span>
            </div>
            {MARKETING_PILLARS.map((pillar, pIdx) => {
              const isActive = activePillarIndex === pIdx;
              return (
                <button
                  key={pillar.name}
                  onClick={() => {
                    const el = document.getElementById(pillar.targetId);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`group flex items-center justify-between gap-2.5 px-3 py-1.5 rounded-xl backdrop-blur-xl border transition-all text-left cursor-pointer ${
                    isActive
                      ? "bg-[#C0622A]/90 text-white border-[#C0622A] shadow-[0_0_20px_rgba(192,98,42,0.4)] scale-102"
                      : "bg-black/50 text-slate-300 border-white/10 hover:border-[#C0622A]/60 hover:text-white hover:bg-black/75"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono text-slate-400 group-hover:text-[#E88C52]">
                      {pillar.num}
                    </span>
                    <span className="text-[11px] font-heading font-semibold whitespace-nowrap">
                      {pillar.name}
                    </span>
                  </div>
                  <span
                    className={`text-[8px] font-mono uppercase px-1.5 py-0.5 rounded border transition-colors ${
                      isActive
                        ? "bg-white/20 text-white border-white/30"
                        : "bg-white/5 text-slate-400 border-white/10 group-hover:text-[#E88C52] group-hover:border-[#C0622A]/30"
                    }`}
                  >
                    {pillar.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom Floating Row & Interactive CTAs */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-3 pb-28 sm:pb-24 lg:pb-12">
            <AnimatePresence mode="wait">
              {activeBeat.pills
                .filter((p) => p.position === "bottom-left")
                .map((pill) => (
                  <motion.div
                    key={pill.id}
                    initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{
                      transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 8}px, 0)`,
                    }}
                    className="pointer-events-auto mx-auto sm:mx-0"
                  >
                    <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-xl border border-white/15 text-white shadow-xl hover:bg-black/85 transition-colors">
                      <div className="p-0.5">{renderIcon(pill.icon)}</div>
                      <span className="text-[10px] sm:text-xs font-heading font-medium text-white/95">
                        {pill.title}
                      </span>
                      {pill.badge && (
                        <span className="text-[8px] sm:text-[9px] font-mono font-semibold uppercase px-1.5 py-0.5 rounded bg-[#C0622A]/20 text-[#E88C52] border border-[#C0622A]/30">
                          {pill.badge}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>

            {/* Interactive Strategy CTAs */}
            {activeBeat.showCtas && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl pointer-events-auto mx-auto sm:mx-0"
              >
                <Link
                  href="#bundle-builder"
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 bg-[#C0622A] hover:bg-[#a84f1d] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5 whitespace-nowrap cursor-pointer hover:scale-105"
                >
                  <span>Build Bundle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => openContactModal({ intent: "strategy-session" })}
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:translate-y-0.5 whitespace-nowrap border border-white/15 cursor-pointer hover:scale-105"
                >
                  <span>Strategy Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              {activeBeat.pills
                .filter((p) => p.position === "bottom-right")
                .map((pill) => (
                  <motion.div
                    key={pill.id}
                    initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{
                      transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 8}px, 0)`,
                    }}
                    className={`pointer-events-auto mx-auto sm:ml-auto sm:mr-36 lg:mr-0 ${
                      activeBeat.showCtas ? "hidden sm:block" : ""
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-xl border border-white/15 text-white shadow-xl hover:bg-black/85 transition-colors">
                      <div className="p-0.5">{renderIcon(pill.icon)}</div>
                      <span className="text-[10px] sm:text-xs font-heading font-medium text-white/95">
                        {pill.title}
                      </span>
                      {pill.badge && (
                        <span className="text-[8px] sm:text-[9px] font-mono font-semibold uppercase px-1.5 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                          {pill.badge}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM BAR: Marketing Explorer Prompt & Minimal Progress Line */}
        <div className="relative z-20 pb-4 sm:pb-5 px-4 sm:px-6 max-w-7xl mx-auto w-full flex flex-col items-center pointer-events-auto">
          {/* Scroll Prompt Button */}
          <button
            onClick={handleSkipToContent}
            className="flex flex-col items-center space-y-1 text-white/80 hover:text-[#C0622A] transition-colors mb-2 group cursor-pointer"
          >
            <span className="text-[10px] sm:text-[11px] font-heading font-bold tracking-widest uppercase text-white/90 group-hover:text-[#C0622A] flex items-center gap-1.5 drop-shadow-sm">
              <span>Explore All 8 Agency Services &amp; Pricing</span>
            </span>
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C0622A] animate-bounce" />
          </button>

          {/* Minimalist Glowing Progress Line */}
          <div className="w-full max-w-xs sm:max-w-md h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-md border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#C0622A] via-[#E88C52] to-[#2E8B7A] transition-all duration-75 rounded-full"
              style={{ width: `${Math.max(2, scrollProgress * 100)}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
