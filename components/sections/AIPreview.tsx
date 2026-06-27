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
              <SectionHeading className="h2" style={{ marginBottom: 24 }}>Intelligence built into every layer.</SectionHeading>
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

          <FadeIn delay={0.2}>
            <div className={styles.aiVisual}>
              <div className={styles.aiOrb} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
