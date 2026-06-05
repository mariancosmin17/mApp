"use client";

import { motion } from "motion/react";

interface ShimmerTextProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export function ShimmerText({ children, duration = 1.5, delay = 1.5 }: ShimmerTextProps) {
  return (
    <span style={{ overflow: "hidden", display: "inline-block" }}>
      <motion.span
        style={{
          display: "inline-block",
          WebkitTextFillColor: "transparent",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to right, white 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.45) 60%, white 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 200%",
        } as React.CSSProperties}
        initial={{ backgroundPositionX: "250%" }}
        animate={{ backgroundPositionX: ["-100%", "250%"] }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "linear",
        }}
      >
        <span>{children}</span>
      </motion.span>
    </span>
  );
}

export default ShimmerText;
