"use client";

import styles from "./Sections.module.css";
import { FadeIn } from "../animations/FadeIn";
import { SectionHeading } from "../animations/SectionHeading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function AIPreview() {
  return (
    <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
      <div className={styles.bgGlow1} style={{ background: "var(--accent-primary)", opacity: 0.1 }} />
      <div className="container">
        <div className={styles.aiContainer}>
          <FadeIn>
            <div className={styles.aiContent}>
              <SectionHeading className="h2" style={{ marginBottom: 24 }}>
                Intelligence built into every layer.
              </SectionHeading>
              <p className="body-text" style={{ marginBottom: 40, maxWidth: 500 }}>
                We design and integrate custom AI agents, LLM-powered knowledge bases, and intelligent automation systems to give your business an unfair advantage.
              </p>
              <Link href="/ai">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className={styles.rainbowBtn}
                >
                  <span className={styles.rainbowBtnText}>Explore AI</span>
                  <span className={styles.rainbowBtnIcon}>
                    <ArrowRight size={17} />
                  </span>
                </motion.button>
              </Link>
            </div>
          </FadeIn>

          <div className={styles.aiVisual}>
            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
              {/* Layer 1: Outer Holographic Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  rotate: { repeat: Infinity, duration: 15, ease: "linear" },
                  scale: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg at 50% 50%, var(--accent-primary) 0deg, rgba(0, 229, 255, 0.2) 180deg, var(--accent-secondary) 360deg)",
                  filter: "blur(24px)",
                  opacity: 0.6,
                }}
              />

              {/* Layer 2: Counter-Rotating Middle Ring */}
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1.02, 0.92, 1.02],
                }}
                transition={{
                  rotate: { repeat: Infinity, duration: 10, ease: "linear" },
                  scale: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                }}
                className="absolute w-[80%] h-[80%] rounded-full"
                style={{
                  background: "conic-gradient(from 180deg at 50% 50%, var(--accent-secondary) 0deg, rgba(138, 43, 226, 0.2) 180deg, var(--accent-primary) 360deg)",
                  filter: "blur(16px)",
                  opacity: 0.8,
                }}
              />

              {/* Layer 3: Central High-Intensity Breathing Core */}
              <motion.div
                animate={{
                  scale: [0.85, 1.15, 0.85],
                  boxShadow: [
                    "0 0 50px 10px rgba(0, 229, 255, 0.5)",
                    "0 0 80px 25px rgba(138, 43, 226, 0.7)",
                    "0 0 50px 10px rgba(0, 229, 255, 0.5)"
                  ]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-[50%] h-[50%] rounded-full bg-white"
                style={{
                  filter: "blur(8px)",
                  background: "radial-gradient(circle, #FFFFFF 30%, var(--accent-primary) 70%)",
                }}
              />

              {/* Decorative Orbiting Node Particle */}
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-full h-full pointer-events-none"
              >
                <motion.span 
                  animate={{
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 left-[50%] -translate-x-[50%] w-4.5 h-4.5 rounded-full bg-[#FFFFFF] shadow-[0_0_15px_#00E5FF] border border-[var(--accent-primary)] block"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
