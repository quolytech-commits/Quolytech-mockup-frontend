"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code, Brain, Cloud, Zap } from "lucide-react";
import styles from "./Sections.module.css";
import { FadeIn } from "../animations/FadeIn";
import { Button } from "../shared/Button";

export function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const projects = [
    {
      title: "FinTech Enterprise Platform",
      category: "Custom Software",
      metric: "40% increase in processing speed",
      date: "June 18, 2026",
      color: "#0A66FF",
      icon: <Code size={40} />
    },
    {
      title: "AI-Powered Customer Support",
      category: "AI Solutions",
      metric: "85% automated query resolution",
      date: "June 12, 2026",
      color: "#5A8DFF",
      icon: <Brain size={40} />
    },
    {
      title: "Global E-Commerce Cloud Migration",
      category: "Cloud Solutions",
      metric: "Zero-downtime over Black Friday peak",
      date: "June 05, 2026",
      color: "#10B981",
      icon: <Cloud size={40} />
    },
    {
      title: "IoT Logistics Billing Automation",
      category: "Automation",
      metric: "-70% manual data auditing hours",
      date: "May 28, 2026",
      color: "#EF4444",
      icon: <Zap size={40} />
    }
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 424; // Card width (400) + gap (24)
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className={styles.featuredSection}>
      <div className="container">
        
        {/* Header Row: Title & Top-Right View All Button */}
        <div className={styles.featuredHeader}>
          <FadeIn>
            <div>
              <h2 className={styles.sectionTitle}>Featured Work</h2>
              <p className={styles.sectionSubtitle}>Transformative solutions for global brands.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Button href="/portfolio" variant="glass">
              View All Projects
            </Button>
          </FadeIn>
        </div>

        {/* Horizontal Track Carousel */}
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack} ref={scrollRef}>
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                className={styles.carouselCard}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                {/* Visual Image Block (Square, Blank White, Text) */}
                <div className={styles.projectImageWrapper}>
                  <span className={styles.noImageText}>No Image</span>
                </div>

                {/* Info Text Block underneath (cardless text) */}
                <div className={styles.projectInfoArea}>
                  <div className={styles.projectMetaRow}>
                    <span>{project.date}</span>
                    <span className={styles.metaDivider}>·</span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className={styles.projectTitleText}>{project.title}</h3>
                  <div className={styles.projectMetricLink} style={{ color: "var(--accent-primary)" }}>
                    <span>{project.metric}</span>
                    <span style={{ marginLeft: 4 }}>›</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Left Scroll Navigation Arrows */}
        <FadeIn delay={0.2}>
          <div className={styles.carouselNav}>
            <button 
              type="button" 
              className={styles.navArrow} 
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
            >
              <ArrowLeft size={16} />
            </button>
            <button 
              type="button" 
              className={styles.navArrow} 
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
