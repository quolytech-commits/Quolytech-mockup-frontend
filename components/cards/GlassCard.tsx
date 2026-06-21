import { ReactNode } from "react";
import styles from "./Cards.module.css";
import { FadeIn } from "../animations/FadeIn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className={`${styles.glassCard} ${className}`}>
        {children}
      </div>
    </FadeIn>
  );
}
