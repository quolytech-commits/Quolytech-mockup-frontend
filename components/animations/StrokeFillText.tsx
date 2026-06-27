"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface StrokeFillTextProps {
  children: ReactNode;
  className?: string;
  /** Duration of the fill animation in seconds */
  duration?: number;
  /** Stroke color (outline) */
  strokeColor?: string;
  /** Fill color (final) */
  fillColor?: string;
  /** Stroke width in px */
  strokeWidth?: number;
  /** Delay before animation starts after mount (ms) */
  delay?: number;
}

/**
 * Text that starts as an outlined stroke, then fills in with color.
 * Inspired by uilora.com stroke-fill text animation.
 */
export function StrokeFillText({
  children,
  className = "",
  duration = 1.8,
  strokeColor = "var(--text-primary)",
  fillColor = "var(--text-primary)",
  strokeWidth = 1,
  delay = 200,
}: StrokeFillTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setVisible(true);
          setTimeout(() => setAnimated(true), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated, delay]);

  return (
    <span
      ref={ref}
      className={`stroke-fill-text ${className}`}
      style={{
        display: "inline-block",
        position: "relative",
        WebkitTextStroke: `${strokeWidth}px ${strokeColor}`,
        color: "transparent",
        transition: `color ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        ...(animated ? { color: fillColor, WebkitTextStroke: `${strokeWidth}px transparent` } : {}),
      }}
    >
      {children}
    </span>
  );
}
