"use client";

import styles from "./Sections.module.css";
import { FadeIn } from "../animations/FadeIn";
import { Button } from "../shared/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function AIPreview() {
  return (
    <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
      <div className={styles.bgGlow1} style={{ background: "var(--accent-primary)", opacity: 0.1 }} />
      <div className="container">
        <div className={styles.aiContainer}>
          <FadeIn>
            <div className={styles.aiContent}>
              <h2 className="h2" style={{ marginBottom: 24 }}>Intelligence built into every layer.</h2>
              <p className="body-text" style={{ marginBottom: 40, maxWidth: 500 }}>
                We design and integrate custom AI agents, LLM-powered knowledge bases, and intelligent automation systems to give your business an unfair advantage.
              </p>
              <Button href="/ai" variant="primary">
                Explore AI <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className={styles.aiVisual}>
              <div className={styles.aiOrb} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
