"use client";

import { type MouseEvent, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/utils/cn";

export function StackChip({
  primary = false,
  dimmed = false,
  onHoverChange,
  children,
}: {
  primary?: boolean;
  dimmed?: boolean;
  onHoverChange?: (hovered: boolean) => void;
  children: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion();
  const [canHover, setCanHover] = useState(true);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  function handleMouseMove(event: MouseEvent<HTMLSpanElement>) {
    if (reducedMotion || !canHover) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set((relX / (rect.width / 2)) * 3);
    y.set((relY / (rect.height / 2)) * 3);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    onHoverChange?.(false);
  }

  return (
    <motion.span
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
        onHoverChange?.(true);
      }}
      onMouseLeave={handleMouseLeave}
      whileHover={reducedMotion ? undefined : { y: -2, scale: 1.045 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      animate={{ opacity: dimmed ? 0.7 : 1 }}
      className={cn(
        "inline-flex cursor-default items-center rounded-full border px-3 py-1 text-xs font-medium transition-[border-color,background-color,box-shadow] duration-300",
        primary
          ? "border-accent/40 bg-accent/10 text-accent hover:border-accent hover:bg-accent/15 hover:shadow-[0_0_16px_-4px_var(--color-accent)]"
          : "border-border bg-surface text-fg-muted hover:border-accent/60 hover:bg-accent/5 hover:text-fg hover:shadow-[0_0_14px_-6px_var(--color-accent)]"
      )}
    >
      <motion.span style={{ x: springX, y: springY }} className="inline-block">
        {children}
      </motion.span>
    </motion.span>
  );
}
