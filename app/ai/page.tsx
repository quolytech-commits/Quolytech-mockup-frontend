"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { NeoCard } from "@/components/cards/NeoCard";
import { Button } from "@/components/shared/Button";
import { Bot, Zap, BrainCircuit, LineChart, ArrowRight } from "lucide-react";
import styles from "./Ai.module.css";

export default function AIPage() {
  const capabilities = [
    { title: "AI Agents", desc: "Autonomous customer support, sales, and internal assistants.", icon: <Bot size={32} /> },
    { title: "Automation", desc: "Intelligent workflows, OCR, and document processing.", icon: <Zap size={32} /> },
    { title: "Generative AI", desc: "Custom LLMs, knowledge bases, and RAG systems.", icon: <BrainCircuit size={32} /> },
    { title: "Machine Learning", desc: "Predictive analytics and recommendation engines.", icon: <LineChart size={32} /> }
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.aiHero}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          <FadeIn>
            <h1 className="h1" style={{ marginBottom: 24 }}>Enterprise Intelligence,<br /><span>Unleashed</span></h1>
            <p className="body-text" style={{ maxWidth: 600, margin: "0 auto 48px" }}>
              Transform your business operations with our world-class AI solutions. From autonomous agents to predictive models, we build systems that learn and adapt.
            </p>
            <Button href="/contact" variant="primary">Schedule AI Consultation</Button>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <h2 className="h2" style={{ textAlign: "center", marginBottom: 64 }}>Our AI Capabilities</h2>
          </FadeIn>
          <div className={styles.grid}>
            {capabilities.map((cap, i) => (
              <NeoCard key={i} delay={i * 0.1}>
                <div style={{ color: "var(--accent-primary)", marginBottom: 16 }}>{cap.icon}</div>
                <h3 className="h3" style={{ marginBottom: 16 }}>{cap.title}</h3>
                <p className="body-text">{cap.desc}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FadeIn>
            <h2 className="h2" style={{ marginBottom: 24 }}>Ready to integrate AI?</h2>
            <p className="body-text" style={{ marginBottom: 40 }}>{"Let's discuss how AI can automate your workflows and increase your revenue."}</p>
            <Button href="/contact" variant="primary">
              Get Started <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
