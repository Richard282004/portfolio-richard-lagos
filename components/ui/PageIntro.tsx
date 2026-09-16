"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function PageIntro() {
  const [done, setDone] = useState(false);
  const reducedMotion = useReducedMotion();

  if (done || reducedMotion) return null;

  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setDone(true)}
      style={{ transformOrigin: "bottom" }}
      className="pointer-events-none fixed inset-0 z-[100] bg-bg"
      aria-hidden="true"
    />
  );
}
