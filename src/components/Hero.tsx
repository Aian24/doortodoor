"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_FRAMES = 480;
const FRAME_PATH = (idx: number) =>
  `/hero_frames/frame_${String(idx).padStart(3, "0")}.webp`;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);
  const animFrameIdRef = useRef<number | null>(null);

  // 1. Crystal-Clear Canvas Engine - Zero Ghosting, Fullscreen Edge-to-Edge 1080p 60FPS Video
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const idx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(frameIndex)));

    // Smart fallback: If requested frame isn't loaded yet, pick closest loaded frame
    let img = imagesRef.current[idx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset <= 30; offset++) {
        const lower = imagesRef.current[idx - offset];
        if (lower && lower.complete && lower.naturalWidth > 0) {
          img = lower;
          break;
        }
        const higher = imagesRef.current[idx + offset];
        if (higher && higher.complete && higher.naturalWidth > 0) {
          img = higher;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    if (canvasWidth === 0 || canvasHeight === 0) return;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    // Fill clean light canvas background matching video
    ctx.fillStyle = "#FAF9F6";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    const isMobile = canvasRatio < 0.75; // Mobile portrait viewport

    if (isMobile) {
      // 1. Draw dynamic full-height ambient backdrop matching the scene colors seamlessly
      try {
        ctx.save();
        const bgHeight = canvasHeight;
        const bgWidth = Math.round(canvasHeight * imgRatio);
        const bgOffsetX = Math.round((canvasWidth - bgWidth) / 2);
        ctx.filter = "blur(32px)";
        ctx.drawImage(img, bgOffsetX, 0, bgWidth, bgHeight);
        ctx.restore();
      } catch {
        // Fallback for older canvas without ctx.filter
      }

      // Soft ambient wash to smoothly blend
      ctx.fillStyle = "rgba(250, 249, 246, 0.2)";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // 2. Draw the crisp, full-width centered frame (100% contents, text, and cards fully visible)
      const mainWidth = canvasWidth;
      const mainHeight = Math.round(canvasWidth / imgRatio);
      const mainOffsetY = Math.round((canvasHeight - mainHeight) / 2);

      ctx.drawImage(img, 0, mainOffsetY, mainWidth, mainHeight);
    } else {
      // Desktop / Landscape: 100% Fullscreen Edge-to-Edge Cover
      let drawWidth: number;
      let drawHeight: number;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawWidth = canvasWidth;
        drawHeight = Math.round(canvasWidth / imgRatio);
        offsetX = 0;
        offsetY = Math.round((canvasHeight - drawHeight) / 2);
      } else {
        drawHeight = canvasHeight;
        drawWidth = Math.round(canvasHeight * imgRatio);
        offsetX = Math.round((canvasWidth - drawWidth) / 2);
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  }, []);

  // 2. High-speed progressive preloading and asynchronous GPU image decoding
  useEffect(() => {
    let isMounted = true;
    let loaded = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const onImageDone = () => {
      if (!isMounted) return;
      loaded++;
      setLoadedCount(loaded);
      if (loaded >= 6) {
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
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
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

  // 3. Fluid 60FPS Animation Loop with Pure Locked 60FPS Refresh
  useEffect(() => {
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

      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current = current + diff * 0.22;
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
  }, [renderFrame]);

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

  // 5. Scroll position calculation (20-scroll depth)
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loadPercentage = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <div
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[2000vh] bg-[#FAF9F6]"
    >
      {/* Sticky Fullscreen Cinematic Viewport (100dvh for true full height across mobile browsers) */}
      <div className="sticky top-0 w-full h-screen h-[100dvh] min-h-[100dvh] overflow-hidden flex flex-col justify-between select-none">
        
        {/* Dynamic Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[170px] pointer-events-none z-0 bg-[#C0622A]/10 transition-all duration-700" />

        {/* Spatial 3D Tilt Video Canvas (Edge-to-Edge Fullscreen) */}
        <div
          className="absolute inset-0 w-full h-full min-h-[100dvh] z-0 bg-[#FAF9F6] transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1200px) rotateY(${mousePos.x * 1.5}deg) rotateX(${-mousePos.y * 1.5}deg) scale(1.01)`,
          }}
        >
          {/* Instant First-Paint Image (Ambient Backdrop + Crisp Center Frame) */}
          <img
            src="/hero_frames/frame_000.webp"
            alt="Hero Ambient Backdrop"
            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-70 sm:hidden z-0"
          />
          <img
            src="/hero_frames/frame_000.webp"
            alt="Hero Initial Frame"
            className="absolute inset-0 w-full h-full object-contain sm:object-cover z-0"
          />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>

        {/* Subtle Top & Bottom Cinematic Vignette Gradients */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/60 via-white/20 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/80 via-white/20 to-transparent pointer-events-none z-10" />

        {/* Minimalist Non-Blocking Loading Pill (Only if loading initial frames) */}
        <AnimatePresence>
          {!isReady && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-slate-300 flex items-center gap-2 shadow-xl pointer-events-none"
            >
              <div className="w-3 h-3 rounded-full border border-[#C0622A]/30 border-t-[#C0622A] animate-spin" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-800 uppercase">
                Loading 60FPS Stream ({loadPercentage}%)
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
