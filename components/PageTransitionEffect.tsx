"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export const variants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(15px) brightness(1.8)",
    transform: "scale(1.1)",
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
    transition: {
      duration: 1,
      delay: opt.delay + opt.index * opt.stagger,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  // The `key` is tied to the url using the `usePathname` hook.
  const key = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.25 }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
