"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useContact } from "./ContactContext";
import { InteractiveForm } from "./InteractiveForm";
import styles from "./ContactDrawer.module.css";
import { useEffect } from "react";

export function ContactDrawer() {
  const { isOpen, closeDrawer } = useContact();

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
          />

          {/* Drawer Sheet */}
          <motion.div
            className={styles.drawerSheet}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className={styles.drawerHeader}>
              <div className={styles.brandTitle}>
                Quoly <span>Configurator</span>
              </div>
              <button 
                type="button" 
                className={styles.closeBtn} 
                onClick={closeDrawer}
                aria-label="Close sheet"
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.drawerBody}>
              <InteractiveForm onSuccessClose={closeDrawer} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
