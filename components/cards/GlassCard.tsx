"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "./Cards.module.css";
import { FadeIn } from "../animations/FadeIn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Motion values for x/y coordinates relative to center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map coordinates to degrees of rotation
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  // Spring settings for ultra-smooth responsiveness
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  // Dynamic light source/glow tracking mouse positions
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  
  const bgGlow = useTransform([glowX, glowY], ([gx, gy]) => {
    return `radial-gradient(circle 220px at ${gx} ${gy}, rgba(0, 229, 255, 0.15), transparent 70%)`;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <FadeIn delay={delay}>
      <div
        className={styles.perspectiveWrapper}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={cardRef}
          style={{
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "var(--shadow-neo-hover)"
          }}
          className={`${styles.glassCard} ${className}`}
        >
          {/* Holographic glowing sweep border overlay */}
          <motion.div 
            className={styles.glowOverlay}
            style={{ background: bgGlow }}
          />
          <div style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
            {children}
          </div>
        </motion.div>
      </div>
    </FadeIn>
  );
}
