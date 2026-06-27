"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Framer motion delay in seconds */
  delay?: number;
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** If true, wraps each word in a reveal animation */
  animated?: boolean;
}

/**
 * Drop-in replacement for section h2 headlines.
 * Splits text into words, each word clips upward into view on scroll.
 */
export function SectionHeading({
  children,
  className = "h2",
  style,
  delay = 0,
  align = "left",
  animated = true,
}: SectionHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (!animated || typeof children !== "string") {
    return (
      <h2 ref={ref} className={className} style={{ textAlign: align, ...style }}>
        {children}
      </h2>
    );
  }

  const words = children.split(" ");

  const justifyMap = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  } as const;

  return (
    <h2
      ref={ref}
      className={className}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: justifyMap[align],
        gap: "0.28em",
        overflow: "visible",
        ...style,
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", lineHeight: "1.15" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            animate={visible ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.12,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}
