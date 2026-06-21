import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Check, Code } from "lucide-react";
import styles from "../solutionsPage.module.css";
import { Button } from "@/components/shared/Button";

export default function SoftwareDevelopmentPage() {
  const capabilities = [
    {
      title: "Enterprise Full-Stack Applications",
      desc: "Architecting modular, type-safe frontend dashboards and API engines built with React, Next.js, and Node."
    },
    {
      title: "High-Performance API Pipelines",
      desc: "Designing lightweight REST and GraphQL interfaces in Go and TypeScript to handle extreme request loads."
    },
    {
      title: "Relational & Document Database Engineering",
      desc: "Configuring robust database topologies with PostgreSQL, Redis caching, and automated connection pooling."
    },
    {
      title: "Legacy Codebase Modernization",
      desc: "Deconstructing monolithic architectures into modern serverless dynamic nodes with zero service downtime."
    }
  ];

  const technologies = ["React", "Next.js", "Node.js", "Go", "TypeScript", "PostgreSQL", "Redis", "GraphQL"];

  return (
    <main>
      <Navbar />

      <section className={styles.solutionsSection}>
        <div className={styles.bgGlow} />

        <div className="container">
          <div className={styles.detailGrid}>
            
            {/* Left Column */}
            <div className={styles.leftCol}>
              <Link href="/solutions" className={styles.backLink}>
                <ArrowLeft size={16} /> All Solutions
              </Link>
              
              <div className={styles.cardIcon}>
                <Code size={24} />
              </div>
              
              <h1 className={styles.heading} style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                Software Engineering
              </h1>
              
              <p className={styles.desc}>
                We build scalable, type-safe codebase structures tailored for high-concurrency enterprise applications.
              </p>

              <div className={styles.ctaBox}>
                <Button href="/contact" variant="primary">Configure Project</Button>
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.rightCol}>
              
              {/* Capabilities Block */}
              <div className={styles.detailsBlock}>
                <h3 className={styles.blockTitle}>Core Capabilities</h3>
                <div className={styles.capabilityList}>
                  {capabilities.map((item, idx) => (
                    <div key={idx} className={styles.capabilityItem}>
                      <Check size={18} className={styles.checkIcon} />
                      <div className={styles.capabilityText}>
                        <strong>{item.title}</strong>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Block */}
              <div className={styles.detailsBlock}>
                <h3 className={styles.blockTitle}>Core Stack</h3>
                <div className={styles.techList}>
                  {technologies.map(tech => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
