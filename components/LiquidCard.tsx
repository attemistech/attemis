"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowLeft, Play, Pause } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const liquidCardVariants = cva(
  `flex transition-colors gap-2 whitespace-nowrap rounded-md text-sm font-medium
  transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50
  [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0
  [&_svg]:shrink-0 outline-none`
);

interface LiquidCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof liquidCardVariants> {
  asChild?: boolean;
}

export const LiquidEffectBackground = (props: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 h-full w-full rounded-4xl shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.6),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.65),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.5),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all _dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]",
        props.className
      )}
      {...props}
    />
  );
};

export const LiquidEffectFilter = () => {
  const filterId = React.useId();
  return (
    <>
      <div
        className="absolute inset-0 isolate -z-10 h-full w-full overflow-hidden rounded-md"
        style={{ backdropFilter: `url("#${filterId}")` }}
      />
      <svg className="hidden">
        <defs>
          <filter
            id={filterId}
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05 0.05"
              numOctaves="1"
              seed="1"
              result="turbulence"
            />
            <feGaussianBlur
              in="turbulence"
              stdDeviation="2"
              result="blurredNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurredNoise"
              scale="70"
              xChannelSelector="R"
              yChannelSelector="B"
              result="displaced"
            />
            <feGaussianBlur
              in="displaced"
              stdDeviation="4"
              result="finalBlur"
            />
            <feComposite in="finalBlur" in2="finalBlur" operator="over" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

const LiquidCard = React.forwardRef<HTMLDivElement, LiquidCardProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : motion.div;

    return (
      <>
        <Comp
          data-slot="div"
          className={cn("relative", liquidCardVariants({ className }))}
          ref={ref}
          {...props}
        >
          <LiquidEffectBackground />
          <LiquidEffectFilter />

          {children}
        </Comp>
      </>
    );
  }
);

export default LiquidCard;
