"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AuroraBackground } from "../animations/AuroraBackground";
import { FadeIn } from "../animations/FadeIn";
import styles from "./Sections.module.css";
import { ArrowRight, Rocket } from "lucide-react";

function HeroButton({
  href,
  variant,
  children,
  icon,
}: {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <Link href={href} className={styles.heroBtnWrapper}>
      <motion.button
        whileTap={{ scale: 0.97 }}
        className={`${styles.heroBtn} ${variant === "primary" ? styles.heroBtnPrimary : styles.heroBtnSecondary}`}
      >
        <span className={styles.heroBtnText}>{children}</span>
        {icon && (
          <span className={styles.heroBtnIcon}>
            {icon}
          </span>
        )}
      </motion.button>
    </Link>
  );
}

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Aurora background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <AuroraBackground showRadialGradient className="absolute inset-0 w-full h-full">{null}</AuroraBackground>
      </div>

      <div className={`container ${styles.heroContainer}`} style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn delay={0.1} yOffset={50}>
          <h1 className={styles.heroTitle}>
            Build Software That<br />
            <span>Moves Businesses Forward</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} yOffset={20}>
          <p className={styles.heroSubtext}>
            We craft custom software, AI solutions, and digital experiences that drive real results.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} yOffset={20}>
          <div className={styles.heroActions}>
            <HeroButton href="/solutions" variant="primary" icon={<Rocket size={17} />}>
              View Solutions
            </HeroButton>
            <HeroButton href="/portfolio" variant="secondary" icon={<ArrowRight size={17} />}>
              View Portfolio
            </HeroButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
