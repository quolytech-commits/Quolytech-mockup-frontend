"use client";

import { ReactNode, CSSProperties } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Speed of gradient animation in seconds */
  speed?: number;
  /** Custom gradient colors (CSS gradient string) */
  gradient?: string;
}

/**
 * Renders text with an animated rotating gradient — inspired by MagicUI's AnimatedGradientText.
 * The gradient sweeps continuously across the text.
 */
export function AnimatedGradientText({
  children,
  className = "",
  style,
  speed = 4,
  gradient = "linear-gradient(90deg, #0A66FF 0%, #5A8DFF 20%, #a78bfa 40%, #f472b6 55%, #fb923c 70%, #0A66FF 100%)",
}: AnimatedGradientTextProps) {
  return (
    <span
      className={`animated-gradient-text ${className}`}
      style={{
        backgroundImage: gradient,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        display: "inline-block",
        animation: `agTextSweep ${speed}s linear infinite`,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
