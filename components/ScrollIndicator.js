"use client";

import { motion } from "framer-motion";

/**
 * Outlined mouse with a dot bouncing inside, pinned to the bottom-center of
 * the hero. Always visible — the dot loops forever.
 */
export default function ScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
    >
      <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-ink/50 p-1">
        <motion.span
          animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-full bg-ink/70"
        />
      </div>
    </div>
  );
}
