"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <motion.input
      type={type}
      data-slot="input"
      className={cn(
        "border-[#ccc] border focus-visible:border outline",
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "aria-invalid:outline-destructive/20 dark:aria-invalid:outline-destructive/40 aria-invalid:border-destructive",
        className
      )}
      initial={{
        outlineColor: "#cccccc00",
        outlineOffset: "0px",
      }}
      whileFocus={{
        outlineColor: "#ccccccff",
        outlineOffset: "4px",
      }}
      transition={{ duration: 0.15 }}
      {...props}
    />
  );
}

export { Input };
