import { ReactNode } from "react";
import styles from "./Cards.module.css";
import { FadeIn } from "../animations/FadeIn";

interface NeoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  interactive?: boolean;
}

export function NeoCard({ children, className = "", delay = 0, interactive = false }: NeoCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className={`${styles.neoCard} ${interactive ? styles.interactive : ""} ${className}`}>
        {children}
      </div>
    </FadeIn>
  );
}
