"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Huge light-gray word sitting behind a section heading, with a subtle
 * parallax drift as the section scrolls through the viewport.
 */
export default function GhostText({
  children,
  className = "",
  sizeClassName = "text-[15vw] leading-none md:text-[16vw]",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center overflow-hidden ${className}`}
    >
      <motion.span
        style={{ y }}
        className={`ghost-text ${sizeClassName}`}
      >
        {children}
      </motion.span>
    </div>
  );
}
