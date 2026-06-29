"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import styles from "./Process.module.css";
import { FadeIn } from "../animations/FadeIn";
import { SectionHeading } from "../animations/SectionHeading";

function ProcessStep({ step, isLeft, scrollYProgress }: { step: any; isLeft: boolean; scrollYProgress: MotionValue<number> }) {
  const stepRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [threshold, setThreshold] = useState(1);

  useEffect(() => {
    const measure = () => {
      if (stepRef.current && nodeRef.current && stepRef.current.parentElement) {
        const parent = stepRef.current.parentElement;
        const parentHeight = parent.offsetHeight || 1;
        const stepTop = stepRef.current.offsetTop;
        const nodeCenter = nodeRef.current.offsetTop + (nodeRef.current.offsetHeight / 2);
        
        // The point where the vertical line reaches the center of this node
        setThreshold((stepTop + nodeCenter) / parentHeight);
      }
    };
    
    // Initial measurement
    measure();
    
    // Remeasure on resize to keep thresholds accurate
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Fade in node exactly when the line reaches its center
  const activeOpacity = useTransform(scrollYProgress, [threshold - 0.02, threshold], [0, 1]);
  
  // Content block animation tied to the same scroll progress
  const contentOpacity = useTransform(scrollYProgress, [threshold - 0.05, threshold], [0, 1]);
  const contentX = useTransform(scrollYProgress, [threshold - 0.05, threshold], [isLeft ? -50 : 50, 0]);

  return (
    <div ref={stepRef} className={`${styles.stepRow} ${isLeft ? styles.rowLeft : styles.rowRight}`}>
      {/* Base Inactive Node */}
      <div ref={nodeRef} className={styles.axisNode}>
        {step.number}
      </div>

      {/* Active Glowing Node overlay tied to scroll progress */}
      <motion.div
        className={`${styles.axisNode} ${styles.axisNodeActive}`}
        style={{ opacity: activeOpacity }}
      >
        {step.number}
      </motion.div>

      {/* Content Block */}
      <div className={styles.contentBlock}>
        <motion.div style={{ opacity: contentOpacity, x: contentX }}>
          <div className={styles.stepInfo}>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        </motion.div>
      </div>

      {/* Empty column placeholder to balance the flex items */}
      <div className={styles.emptyBlock} />
    </div>
  );
}

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Derive progress specifically from the timeline container bounds
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Grow progress line height based on scroll progress
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    {
      number: "01",
      title: "Discover",
      desc: "We align with stakeholders to map business goals, technical requirements, and target outcomes."
    },
    {
      number: "02",
      title: "Plan",
      desc: "Our architects map out system topologies, API specifications, and cloud databases."
    },
    {
      number: "03",
      title: "Design",
      desc: "We craft interactive user interfaces, transition systems, and visual design assets."
    },
    {
      number: "04",
      title: "Develop",
      desc: "Our engineers write type-safe clean code, implementing automated test coverage."
    },
    {
      number: "05",
      title: "Deploy",
      desc: "Seamless launch, managing DNS migrations, SSL layers, error tracking, and performance logs."
    },
    {
      number: "06",
      title: "Support",
      desc: "Ongoing security patches, continuous speed audits, library updates, and scaling."
    }
  ];

  return (
    <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container">

        {/* Title Header */}
        <FadeIn>
          <div className={styles.header}>
            <SectionHeading className="h2" align="center">Our Process</SectionHeading>
            <p className="body-text">A linear roadmap toward digital transformation.</p>
          </div>
        </FadeIn>

        {/* Timeline Path container */}
        <div ref={containerRef} className={styles.timelineContainer}>

          {/* Background Grey Axis Line */}
          <div className={styles.axisLine} />

          {/* Foreground Scroll-Linked Glowing Indicator Line */}
          <motion.div
            className={styles.progressLine}
            style={{ scaleY, originY: 0 }}
          />

          {/* Steps */}
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return <ProcessStep key={step.number} step={step} isLeft={isLeft} scrollYProgress={scrollYProgress} />;
          })}

        </div>

      </div>
    </section>
  );
}
