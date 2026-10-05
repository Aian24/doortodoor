"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollParallaxProps {
  children: React.ReactNode;
  speed?: number; // negative moves opposite to scroll, positive moves with scroll
  className?: string;
  rotate?: boolean;
}

export default function ScrollParallax({
  children,
  speed = 0.2,
  className = "",
  rotate = false,
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);
  const y = useSpring(rawY, { damping: 15, stiffness: 100 });

  const rawRotate = useTransform(scrollYProgress, [0, 1], [-8 * speed, 8 * speed]);
  const rotation = useSpring(rawRotate, { damping: 15, stiffness: 100 });

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        ...(rotate ? { rotate: rotation } : {}),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
