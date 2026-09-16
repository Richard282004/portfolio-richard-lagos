"use client";

import { motion, useReducedMotion } from "framer-motion";

const squares = [
  { size: 168, top: "6%", left: "18%", rotate: -12, color: "var(--color-deco-coral)", fill: true, opacity: 0.3, float: 6, duration: 7 },
  { size: 120, top: "40%", left: "0%", rotate: 10, color: "var(--color-deco-sky)", fill: false, opacity: 0.65, float: 8, duration: 8.5 },
  { size: 96, top: "56%", left: "46%", rotate: -8, color: "var(--color-deco-sage)", fill: true, opacity: 0.3, float: 5, duration: 6.5 },
  { size: 64, top: "8%", left: "58%", rotate: 18, color: "var(--color-deco-amber)", fill: false, opacity: 0.65, float: 7, duration: 9 },
];

export function HeroGraphic() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none relative hidden aspect-square w-full max-w-[420px] lg:block"
      aria-hidden="true"
    >
      {squares.map((square, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8, rotate: square.rotate - 10 }}
          animate={
            reducedMotion
              ? { opacity: square.opacity, scale: 1, rotate: square.rotate }
              : {
                  opacity: square.opacity,
                  scale: 1,
                  rotate: square.rotate,
                  y: [0, -square.float, 0],
                }
          }
          transition={{
            opacity: { duration: 0.7, delay: 1.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 0.7, delay: 1.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 0.7, delay: 1.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
            y: reducedMotion
              ? undefined
              : { duration: square.duration, repeat: Infinity, ease: "easeInOut", delay: 1.8 + i * 0.12 },
          }}
          className="absolute rounded-3xl"
          style={{
            width: square.size,
            height: square.size,
            top: square.top,
            left: square.left,
            backgroundColor: square.fill ? square.color : "transparent",
            border: square.fill ? "none" : `2px solid ${square.color}`,
          }}
        />
      ))}
    </div>
  );
}
