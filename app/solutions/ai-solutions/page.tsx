import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Check, Brain } from "lucide-react";
import styles from "../solutionsPage.module.css";
import { Button } from "@/components/shared/Button";

export default function AISolutionsPage() {
  const capabilities = [
    {
      title: "Agentic Loop Architectures",
      desc: "Deploying self-healing, goal-directed autonomous agents that orchestrate processes, handle anomalies, and execute tasks."
    },
    {
      title: "Custom LLM Orchestration",
      desc: "Fine-tuning open models (Llama, Mistral) and integrating private knowledge models with secure semantic boundaries."
    },
    {
      title: "Semantic Search & Vector Storage",
      desc: "Setting up fast indexing databases (Pinecone, pgvector) to query millions of document segments real-time."
    },
    {
      title: "AI Security & Token Guardrails",
      desc: "Implementing input filters and output validators to prevent prompt injection and keep data private."
    }
  ];

  const technologies = ["Python", "LangChain", "OpenAI API", "Pinecone", "pgvector", "LlamaIndex", "Hugging Face", "PyTorch"];

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
                <Brain size={24} />
              </div>
              
              <h1 className={styles.heading} style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                AI & Intelligence
              </h1>
              
              <p className={styles.desc}>
                We design and integrate custom intelligent models that translate enterprise data into automated decisions and operations.
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
