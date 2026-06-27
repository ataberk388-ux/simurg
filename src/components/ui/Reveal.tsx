"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

const upVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
  },
};

const maskVariants: Variants = {
  hidden: { opacity: 0, y: 24, clipPath: "inset(0 100% 0 0)" },
  show: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
  variant?: "up" | "mask";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={variant === "mask" ? maskVariants : upVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
