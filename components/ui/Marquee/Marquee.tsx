"use client";

import { cn } from "@/lib/utils";
import styles from "./Marquee.module.css";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: number;
  gap?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  reverse = false,
  duration = 40,
  gap = "1.25rem",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(styles.root, pauseOnHover && styles.hoverPause, className)}
      style={
        {
          "--marquee-duration": `${duration}s`,
          "--marquee-gap": gap,
        } as React.CSSProperties
      }
    >
      <div className={cn(styles.track, reverse && styles.reverse)}>{children}</div>
      <div className={cn(styles.track, reverse && styles.reverse)} aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

export default Marquee;
