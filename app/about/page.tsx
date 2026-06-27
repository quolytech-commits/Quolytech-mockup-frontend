"use client";

import { useEffect, useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/shared/Button";
import { ArrowRight } from "lucide-react";
import styles from "./About.module.css";

interface CounterProps {
  target: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

export function AnimatedCounter({ target, duration = 1800, decimals = 0, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      setCount(easeProgress * target);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasStarted, target, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const values = [
    {
      title: "Excellence",
      desc: "We sweat the details. Every line of code, pixel alignment, and query latency is engineered for maximum performance."
    },
    {
      title: "Innovation",
      desc: "We stay ahead of the curve. From agentic AI models to serverless orchestration, we build with tomorrow's tech stack."
    },
    {
      title: "Transparency",
      desc: "Clear specs, open communication, and predictable delivery. We view our clients as true engineering partners."
    },
    {
      title: "Impact",
      desc: "We build technology that solves real business bottlenecks, automates workflows, and drives measurable revenue."
    }
  ];

  const team = [
    {
      name: "Marcus Vance",
      role: "CEO & Founder",
      bio: "Former Principal Architect at scaling startups. Passionate about marrying clean code with high-performance business solutions.",
      initials: "MV",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Elena Rostova",
      role: "Head of AI & Research",
      bio: "PhD in Machine Learning. Directs our custom agentic workflows, LLM fine-tuning, and semantic database integrations.",
      initials: "ER",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Liam Chen",
      role: "Lead Cloud Infrastructure",
      bio: "AWS/K8s specialist. Standardizes SOC2 compliant deployment pipelines, multi-region failovers, and autoscaling grids.",
      initials: "LC",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <main>
      <Navbar />

      <section className={styles.aboutSection}>
        <div className={styles.bgGlow} />
        <div className={styles.bgGlowSecondary} />

        <div className="container">
          {/* Hero Section */}
          <div className={styles.header}>
            <FadeIn>
              <h1 className={styles.heading}>
                We Build the Tech That <span>Powers the Future</span>
              </h1>
              <p className={styles.desc}>
                Quoly Tech is a premium software agency. We partner with forward-thinking enterprises to design, build, and deploy next-generation software architecture.
              </p>
            </FadeIn>
          </div>

          {/* Mission & Vision Section */}
          <div className={styles.missionSection}>
            <div className={styles.missionGrid}>
              <FadeIn delay={0.1}>
                <div className={styles.missionContent}>
                  <div className={styles.sectionLabel}>Our Core Mission</div>
                  <h2 className="h2">Pioneering digital scalability and architectural elegance.</h2>
                  <p className={styles.missionText}>
                    At Quoly Tech, we believe that software shouldn&apos;t just run—it should inspire. We build resilient systems designed to adapt to massive traffic, high data loads, and evolving corporate strategies.
                  </p>
                  <p className={styles.missionHighlight}>
                    {"\"Our goal is to erase the gap between cutting-edge technology and actual, scalable enterprise implementation.\""}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className={styles.missionGraphic}>
                  <div>
                    <h3 className="h3" style={{ fontSize: 20 }}>Quoly Tech by the Numbers</h3>
                    <p className="body-text" style={{ fontSize: 14 }}>Engineering quality quantified</p>
                  </div>

                  <div className={styles.statRow}>
                    <div className={styles.statItem}>
                      <div className={styles.statNum}>
                        <AnimatedCounter target={99.9} decimals={1} suffix="%" />
                      </div>
                      <div className={styles.statLabel}>Uptime Target</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statNum}>
                        <AnimatedCounter target={20} suffix="M+" />
                      </div>
                      <div className={styles.statLabel}>API Requests/Day</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statNum}>
                        <AnimatedCounter target={100} suffix="%" />
                      </div>
                      <div className={styles.statLabel}>Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Core Values Section */}
          <div className={styles.valuesSection}>
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: 56 }}>
                <div className={styles.sectionLabel}>Our Values</div>
                <h2 className="h2" style={{ marginTop: 12 }}>What Guides Our Code</h2>
              </div>
            </FadeIn>

            <div className={styles.valuesGrid}>
              {values.map((val, idx) => (
                <FadeIn key={val.title} delay={idx * 0.05 + 0.1}>
                  <div className={styles.valueCard}>
                    <h3 className={styles.valueTitle}>{val.title}</h3>
                    <p className={styles.valueText}>{val.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className={styles.teamSection}>
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: 56 }}>
                <div className={styles.sectionLabel}>The Leadership</div>
                <h2 className="h2" style={{ marginTop: 12 }}>Meet the Architects</h2>
              </div>
            </FadeIn>

            <div className={styles.teamGrid}>
              {team.map((member, idx) => (
                <FadeIn key={member.name} delay={idx * 0.1 + 0.1}>
                  <div className={styles.teamCard}>
                    <div className={styles.avatarWrapper}>
                      <span style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2, opacity: 0.8 }}>
                        {member.initials}
                      </span>
                    </div>
                    <div className={styles.memberInfo}>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <div className={styles.memberRole}>{member.role}</div>
                      <p className={styles.memberBio}>{member.bio}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <FadeIn>
            <div className={styles.ctaContainer}>
              <h2 className="h2">Ready to Build Something Extraordinary?</h2>
              <p className="body-text">
                Let&apos;s discuss how our design philosophy and deep technical expertise can accelerate your company&apos;s digital potential.
              </p>
              <Button href="/contact" variant="primary">
                Start a Project <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
