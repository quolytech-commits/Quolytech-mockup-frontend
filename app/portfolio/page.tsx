"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowUpRight } from "lucide-react";
import styles from "./portfolio.module.css";

interface Project {
  title: string;
  category: string;
  desc: string;
  techs: string[];
  metric: string;
  color: string;
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Custom Software", "AI Solutions", "Cloud Solutions", "Automation"];

  const projects: Project[] = [
    {
      title: "FinTech Enterprise Platform",
      category: "Custom Software",
      desc: "A comprehensive wealth management and transaction ledger engine built with multi-region database replication and SOC2 isolation protocols.",
      techs: ["Next.js", "Go", "PostgreSQL", "Redis"],
      metric: "40% increase in transaction speeds",
      color: "#0A66FF"
    },
    {
      title: "AI-Powered Customer Support",
      category: "AI Solutions",
      desc: "Autonomous chat agents integrated directly into Zendesk pipelines, utilizing self-healing schemas to handle complex refunds and tracking.",
      techs: ["Python", "LangGraph", "OpenAI API", "Pinecone"],
      metric: "85% automated query resolution",
      color: "#5A8DFF"
    },
    {
      title: "Global E-Commerce Cloud Migration",
      category: "Cloud Solutions",
      desc: "Deconstruction of an monolithic PHP store into 14 distributed Next.js services on AWS Kubernetes clusters, scaling dynamically under peak demand.",
      techs: ["AWS", "Kubernetes", "Terraform", "Docker"],
      metric: "Zero-downtime over Black Friday peak",
      color: "#10B981"
    },
    {
      title: "IoT Logistics Billing Automation",
      category: "Automation",
      desc: "Automated tracking bridges connecting IoT cargo locks to Stripe invoicing pipelines, triggering instant client notifications and receipts.",
      techs: ["Node.js", "PostgreSQL", "Stripe API", "Webhooks"],
      metric: "-70% manual data auditing hours",
      color: "#EF4444"
    }
  ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main>
      <Navbar />

      <section className={styles.portfolioSection}>
        <div className={styles.bgGlow} />

        <div className="container">
          
          {/* Header */}
          <FadeIn>
            <div className={styles.header}>
              <h1 className={styles.title}>Our Portfolio</h1>
              <p className="body-text" style={{ maxWidth: 600 }}>
                Explore how we solve complex business challenges with premium, bespoke software engineering and AI architectures.
              </p>

              {/* Category Filters */}
              <div className={styles.filterTabs}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    className={`${styles.tabBtn} ${selectedCategory === cat ? styles.activeTabBtn : ""}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Grid */}
          <div className={styles.grid}>
            {filteredProjects.map((project, idx) => (
              <FadeIn key={project.title} delay={idx * 0.05 + 0.1}>
                <div className={styles.projectCard}>
                  {/* Aspect Card Header visual wrapper */}
                  <div className={styles.imgPlaceholder}>
                    <span className={styles.noImageText}>No Image</span>
                  </div>

                  <div className={styles.cardBody}>
                    <span className={styles.categoryTag}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.desc}</p>
                    
                    <div className={styles.techRow}>
                      {project.techs.map(tech => (
                        <span key={tech} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>

                    <div className={styles.metricBadge}>
                      <ArrowUpRight size={18} style={{ color: "var(--accent-primary)" }} />
                      <span>Metric: <strong>{project.metric}</strong></span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
