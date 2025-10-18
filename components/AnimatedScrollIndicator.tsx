"use client";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { ComponentProps } from "react";

const AnimatedArrow = motion.create(ArrowDown);

type AnimatedScrollIndicatorProps = ComponentProps<typeof AnimatedArrow>;

export function AnimatedScrollIndicator(props: AnimatedScrollIndicatorProps) {
  const { className, ...rest } = props;

  const { isScrolled } = useScroll();

  return (
    <AnimatedArrow
      className={cn(
        "fixed bottom-12 left-[50%] -translate-x-[50%] p-6 backdrop-blur-3xl bg-black/50",
        className
      )}
      animate={{
        opacity: 1,
        filter: isScrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.2 }}
      {...rest}
    />
  );
}
