"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Code, Brain, Cloud, Zap, ArrowRight } from "lucide-react";
import styles from "./solutionsPage.module.css";
import { Button } from "@/components/shared/Button";

export default function SolutionsPage() {
  const directory = [
    {
      href: "/solutions/software-development",
      title: "Software Development",
      icon: <Code size={24} />,
      desc: "Full-stack web applications, dynamic portals, database engineering, and modular systems built to autoscale."
    },
    {
      href: "/solutions/ai-solutions",
      title: "AI Solutions",
      icon: <Brain size={24} />,
      desc: "Agentic workflow systems, LLM middleware configurations, semantic vector integrations, and custom model training."
    },
    {
      href: "/solutions/cloud",
      title: "Cloud Solutions",
      icon: <Cloud size={24} />,
      desc: "Multi-region cloud infrastructure maps, container orchestration pipelines, and automated SOC2 security compliances."
    },
    {
      href: "/solutions/automation",
      title: "Automation",
      icon: <Zap size={24} />,
      desc: "API integration loops, legacy system pipeline script bridges, and alert monitors that keep operations moving."
    }
  ];

  return (
    <main>
      <Navbar />

      <section className={styles.solutionsSection}>
        <div className={styles.bgGlow} />
        
        <div className="container">
          <FadeIn>
            <div className={styles.header}>
              <h1 className={styles.heading}>Our Solutions</h1>
              <p className={styles.desc}>
                We build premium, custom-engineered software architectures that empower enterprises to automate processes, leverage AI, and scale infinitely.
              </p>
            </div>
          </FadeIn>

          <div className={styles.directoryGrid}>
            {directory.map((item, idx) => (
              <FadeIn key={item.href} delay={idx * 0.05 + 0.1}>
                <div className={styles.solutionCard}>
                  <div className={styles.cardIcon}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardText} style={{ marginTop: 12 }}>
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ marginTop: "auto" }}>
                    <Button href={item.href} variant="glass" className={styles.cardBtn}>
                      Read Specs <ArrowRight size={16} style={{ marginLeft: 8 }} />
                    </Button>
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
