"use client";

import { GlassCard } from "../cards/GlassCard";
import styles from "./Sections.module.css";
import { FadeIn } from "../animations/FadeIn";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Quoly Tech transformed our legacy infrastructure into a modern, scalable cloud platform. Their expertise and Apple-level design quality set them apart from any agency we've worked with.",
      author: "Sarah Jenkins",
      role: "CTO, Finova Finance"
    },
    {
      quote: "The AI agent they built for our customer support reduced our overhead by 60% within the first month. Incredible engineering and beautiful UX.",
      author: "Marcus Chen",
      role: "Director of Operations, OmniRetail"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <FadeIn>
          <div className={`${styles.header} ${styles.testimonialsHeader}`}>
            <h2 className="h2">Client Success</h2>
            <p className="body-text">Don't just take our word for it.</p>
          </div>
        </FadeIn>

        <div className={styles.testimonialGrid}>
          {testimonials.map((t, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className={styles.quoteMark}>"</div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar} />
                <div>
                  <h4 className={styles.authorName}>{t.author}</h4>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
