"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Button.module.css";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Button({ children, href, variant = "primary", className = "", onClick, type = "button" }: ButtonProps) {
  const combinedClassName = `${styles.button} ${styles[variant]} ${className}`;

  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClassName}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
