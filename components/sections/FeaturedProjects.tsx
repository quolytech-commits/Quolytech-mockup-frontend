"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./Sections.module.css";
import { FadeIn } from "../animations/FadeIn";
import { SectionHeading } from "../animations/SectionHeading";
import { Button } from "../shared/Button";

export function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const projects = [
    {
      title: "FinTech Enterprise Platform",
      category: "Custom Software",
      metric: "40% increase in processing speed",
      date: "June 18, 2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      imageAlt: "Financial dashboard analytics",
    },
    {
      title: "AI-Powered Customer Support",
      category: "AI Solutions",
      metric: "85% automated query resolution",
      date: "June 12, 2026",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
      imageAlt: "AI chatbot interface",
    },
    {
      title: "Global E-Commerce Cloud Migration",
      category: "Cloud Solutions",
      metric: "Zero-downtime over Black Friday peak",
      date: "June 05, 2026",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      imageAlt: "E-commerce platform on laptop",
    },
    {
      title: "IoT Logistics Billing Automation",
      category: "Automation",
      metric: "-70% manual data auditing hours",
      date: "May 28, 2026",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      imageAlt: "Logistics warehouse automation",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -424 : 424,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.featuredSection}>
      <div className="container">

        <div className={styles.featuredHeader}>
          <FadeIn>
            <div>
              <SectionHeading className={styles.sectionTitle}>Featured Work</SectionHeading>
              <p className={styles.sectionSubtitle}>Transformative solutions for global brands.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Button href="/portfolio" variant="glass">
              View All Projects
            </Button>
          </FadeIn>
        </div>

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
                {/* Image Block */}
                <div className={styles.projectImageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="400px"
                    style={{ objectFit: "cover" }}
                    className={styles.projectImage}
                  />
                  {/* Category pill overlay */}
                  <span className={styles.projectCategoryPill}>{project.category}</span>
                </div>

                {/* Info */}
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

        <FadeIn delay={0.2}>
          <div className={styles.carouselNav}>
            <button type="button" className={styles.navArrow} onClick={() => handleScroll("left")} aria-label="Scroll left">
              <ArrowLeft size={16} />
            </button>
            <button type="button" className={styles.navArrow} onClick={() => handleScroll("right")} aria-label="Scroll right">
              <ArrowRight size={16} />
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
