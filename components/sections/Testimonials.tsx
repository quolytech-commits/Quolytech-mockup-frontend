"use client";

import Image from "next/image";
import { GlassCard } from "../cards/GlassCard";
import styles from "./Sections.module.css";
import { FadeIn } from "../animations/FadeIn";
import { SectionHeading } from "../animations/SectionHeading";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Quoly Tech transformed our legacy infrastructure into a modern, scalable cloud platform. Their expertise and Apple-level design quality set them apart from any agency we've worked with.",
      author: "Sarah Jenkins",
      role: "CTO, Finova Finance",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    {
      quote: "The AI agent they built for our customer support reduced our overhead by 60% within the first month. Incredible engineering and beautiful UX.",
      author: "Marcus Chen",
      role: "Director of Operations, OmniRetail",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <FadeIn>
          <div className={`${styles.header} ${styles.testimonialsHeader}`}>
            <SectionHeading className="h2">Client Success</SectionHeading>
            <p className="body-text">Don&apos;t just take our word for it.</p>
          </div>
        </FadeIn>

        <div className={styles.testimonialGrid}>
          {testimonials.map((t, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className={styles.quoteMark}>&ldquo;</div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    width={48}
                    height={48}
                    style={{ objectFit: "cover", borderRadius: "50%", width: "100%", height: "100%" }}
                  />
                </div>
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
