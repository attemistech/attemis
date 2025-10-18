"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <motion.textarea
      data-slot="textarea"
      className={cn(
        "border-[#ccc] border focus-visible:border placeholder:text-muted-foreground focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-3 py-2 text-base shadow-xs transition-[border,border-color,color,box-shadow] outline disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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
      {...props}
    />
  );
}

export { Textarea };
