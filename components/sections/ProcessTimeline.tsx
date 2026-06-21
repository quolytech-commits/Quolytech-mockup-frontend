"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Process.module.css";
import { FadeIn } from "../animations/FadeIn";

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
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
    <section 
      ref={sectionRef} 
      className="section-padding" 
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="container">
        
        {/* Title Header */}
        <FadeIn>
          <div className={styles.header}>
            <h2 className="h2">Our Process</h2>
            <p className="body-text">A linear roadmap toward digital transformation.</p>
          </div>
        </FadeIn>

        {/* Timeline Path container */}
        <div className={styles.timelineContainer}>
          
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

            return (
              <div 
                key={step.number} 
                className={`${styles.stepRow} ${isLeft ? styles.rowLeft : styles.rowRight}`}
              >
                {/* Node circle on the center line */}
                <div className={styles.axisNode}>
                  {step.number}
                </div>

                {/* Content Block */}
                <div className={styles.contentBlock}>
                  <FadeIn delay={0.05} yOffset={20}>
                    <div className={styles.stepInfo}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </FadeIn>
                </div>

                {/* Empty column placeholder to balance the flex items */}
                <div className={styles.emptyBlock} />
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
