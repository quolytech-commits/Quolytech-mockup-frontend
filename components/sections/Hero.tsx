"use client";

import { motion, Easing } from "framer-motion";
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

const titleVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const lineVariants = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1] as unknown as Easing // Custom cubic bezier curve matching blueprint
    }
  }
};

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Official animate-ui gravity stars background */}


      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          {/* Staggered masked reveal of text */}
          <motion.h1
            className={styles.heroTitle}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="block overflow-hidden relative pb-1.5">
              <motion.span variants={lineVariants} className="block">
                Build Software That
              </motion.span>
            </span>
            <span className="block overflow-hidden relative">
              <motion.span variants={lineVariants} className="block">
                <span>Moves Businesses Forward</span>
              </motion.span>
            </span>
          </motion.h1>

          <FadeIn delay={0.4} yOffset={15}>
            <p className={styles.heroSubtext}>
              We craft custom software, AI solutions, and digital experiences that drive real results.
            </p>
          </FadeIn>

          <FadeIn delay={0.55} yOffset={15}>
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


      </div>
    </section>
  );
}
