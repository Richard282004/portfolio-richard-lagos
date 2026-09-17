"use client";

import { motion, useReducedMotion } from "framer-motion";

export function MaskedText({
  text,
  className,
  delay = 0,
  wordDelay = 0.09,
  viewTrigger = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  viewTrigger?: boolean;
}) {
  const words = text.split(" ");
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const triggerProps = viewTrigger
    ? { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } }
    : { initial: "hidden", animate: "visible" };

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-1 align-bottom"
          style={{ whiteSpace: "pre" }}
        >
          <motion.span
            className="inline-block"
            {...triggerProps}
            variants={{ hidden: { y: "110%" }, visible: { y: "0%" } }}
            transition={{ duration: 0.85, delay: delay + i * wordDelay, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
