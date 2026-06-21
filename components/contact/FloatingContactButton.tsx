"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useContact } from "./ContactContext";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./FloatingContactButton.module.css";

export function FloatingContactButton() {
  const { openDrawer } = useContact();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // Only show the floating button after scrolling down 200px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Hide the floating button on the Contact page
  if (pathname === "/contact") {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={styles.floatingBtn}
          onClick={openDrawer}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          aria-label="Open project configurator"
        >
          <div className={styles.btnContent}>
            <span className={styles.pulseDot} />
            <MessageSquare size={18} className={styles.icon} />
            <span className={styles.btnText}>Let's Talk</span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
