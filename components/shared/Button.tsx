"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Button.module.css";
import { ReactNode, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  loadingText?: string;
}

export function Button({ 
  children, 
  href, 
  variant = "primary", 
  className = "", 
  onClick, 
  type = "button",
  loadingText = "Processing..."
}: ButtonProps) {
  const [isThinking, setIsThinking] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      setIsThinking(true);
      setTimeout(() => {
        setIsThinking(false);
        onClick(e);
      }, 1500);
    }
  };

  const combinedClassName = `${styles.button} ${styles[variant]} ${isThinking ? styles.thinking : ""} ${className}`;

  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClassName}
      onClick={onClick ? handleClick : undefined}
      type={type}
      disabled={isThinking}
    >
      {isThinking && (
        <span className={styles.orbitContainer}>
          <svg className={styles.orbitSvg} viewBox="0 0 50 50">
            <motion.circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="var(--accent-primary)"
              strokeWidth="4"
              strokeDasharray="30 150"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </svg>
        </span>
      )}
      <span className={styles.btnText}>
        {isThinking ? loadingText : children}
      </span>
      <span className={styles.glowSweep} />
    </motion.button>
  );

  if (href && !onClick) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
