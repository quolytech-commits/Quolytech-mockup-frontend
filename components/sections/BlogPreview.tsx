"use client";

import { NeoCard } from "../cards/NeoCard";
import styles from "./Sections.module.css";
import { FadeIn } from "../animations/FadeIn";
import { Button } from "../shared/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BlogPreview() {
  const posts = [
    {
      title: "The Future of AI Agents in Enterprise Software",
      date: "Oct 15, 2026",
      category: "AI",
      readTime: "5 min read"
    },
    {
      title: "How to Build Scalable Microservices with Next.js",
      date: "Oct 12, 2026",
      category: "Software Development",
      readTime: "8 min read"
    },
    {
      title: "Glassmorphism & Neomorphism in Modern UI",
      date: "Oct 05, 2026",
      category: "Web Design",
      readTime: "4 min read"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <FadeIn>
          <div className={styles.flexHeader}>
            <div>
              <h2 className="h2">Insights & Ideas</h2>
              <p className="body-text">Thoughts on engineering, design, and innovation.</p>
            </div>
            <Button href="/blog" variant="outline">
              Read the Blog <ArrowRight size={16} style={{ marginLeft: 8 }} />
            </Button>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {posts.map((post, index) => (
            <NeoCard key={index} delay={index * 0.1} interactive className={styles.blogCard}>
              <Link href="/blog" className={styles.blogLink}>
                <div className={styles.blogMeta}>
                  <span className={styles.projectCategory}>{post.category}</span>
                  <span className="text-muted" style={{ fontSize: 14 }}>{post.readTime}</span>
                </div>
                <h3 className="h3" style={{ fontSize: 24, marginBottom: 16 }}>{post.title}</h3>
                <p className="text-muted" style={{ fontSize: 14 }}>{post.date}</p>
              </Link>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
