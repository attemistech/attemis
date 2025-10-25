import { Variants } from "framer-motion";

export const warpVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(15px) brightness(1.8)",
    transform: "scale(1.1)",
    willChange: "transform",
  },
  visible: (
    opt: { index: number; delay: number; stagger: number } = {
      index: 0,
      delay: 0,
      stagger: 0,
    }
  ) => ({
    opacity: 1,
    filter: "blur(0) brightness(1)",
    transform: "scale(1)",
    willChange: "none",
    transition: {
      duration: 1,
      delay: opt.delay + opt.index * opt.stagger,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const fadeUpFastVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.25 + i * 0.05,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const fadeInFastVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.25 + i * 0.05,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const slideInRightVariants: Variants = {
  initial: { opacity: 0, x: "100%", filter: "blur(50px)" },
  enter: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: "-100%", filter: "blur(50px)" },
};
