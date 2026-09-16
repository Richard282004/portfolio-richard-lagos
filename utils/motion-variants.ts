import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const cardHover: Variants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.015, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

export const softHover: Variants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

export const slideHover: Variants = {
  rest: { x: 0 },
  hover: { x: 6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

export const crossfade: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } },
};
