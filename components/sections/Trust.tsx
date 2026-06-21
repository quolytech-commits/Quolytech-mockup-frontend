"use client";

import styles from "./Sections.module.css";
import { FadeIn } from "../animations/FadeIn";

export function Trust() {
  const metrics = [
    { value: "50+", label: "Projects Delivered" },
    { value: "20+", label: "Industries Served" },
    { value: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section className={`${styles.trustSection} section-padding`}>
      <div className="container">
        <div className={styles.trustGrid}>
          {metrics.map((metric, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div>
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
