"use client";

import { motion } from "motion/react";
import VerticalCutReveal from "./fancy/text/vertical-cut-reveal";

type ListItemIndexProps = {
  index: number;
  total: number;
};

export default function ListItemIndex(props: ListItemIndexProps) {
  return (
    <div className="h-fit w-full md:max-w-xs flex flex-row items-center gap-2">
      <h3 className="font-geist-mono text-[#aaa] tracking-wide text-base max-w-xl">
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="first"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
            delay: 0.5,
          }}
        >
          {String(props.index + 1).padStart(
            Math.max(String(props.total).length, 2),
            "0"
          )}
        </VerticalCutReveal>
      </h3>
      <motion.div
        className="h-px bg-[#ddd]"
        initial={{ width: "0px" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 1.5,
          ease: [0.85, 0, 0.15, 1],
          delay: props.index * 0.2,
        }}
      />
    </div>
  );
}
