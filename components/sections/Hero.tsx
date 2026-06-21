"use client";

import { motion } from "framer-motion";
import { Button } from "../shared/Button";
import styles from "./Sections.module.css";
import { FadeIn } from "../animations/FadeIn";

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Subtle floating background elements */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      
      <div className={`container ${styles.heroContainer}`}>
        <FadeIn delay={0.1} yOffset={50}>
          <h1 className={styles.heroTitle}>
            Build Software That<br/>
            <span>Moves Businesses Forward</span>
          </h1>
        </FadeIn>
        

        
        <FadeIn delay={0.2} yOffset={20}>
          <div className={styles.heroActions}>
            <Button href="/solutions" variant="primary">Explore Solutions</Button>
            <Button href="/portfolio" variant="secondary">View Portfolio</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
