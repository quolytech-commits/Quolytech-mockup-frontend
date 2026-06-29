"use client";

import styles from "./Sections.module.css";
import { FadeIn } from "../animations/FadeIn";
import { CountUp } from "../animations/CountUp";

export function Trust() {
  const metrics = [
    { to: 50, suffix: "+", label: "Projects Delivered" },
    { to: 20, suffix: "+", label: "Industries Served" },
    { to: 99, suffix: "%", label: "Client Satisfaction" }
  ];

  return (
    <section className={`${styles.trustSection} section-padding`}>
      <div className="container">
        <div className={styles.trustGrid}>
          {metrics.map((metric, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div>
                <div className={styles.metricValue}>
                  <CountUp to={metric.to} suffix={metric.suffix} />
                </div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
