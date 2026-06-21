import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Check, Zap } from "lucide-react";
import styles from "../solutionsPage.module.css";
import { Button } from "@/components/shared/Button";

export default function AutomationSolutionsPage() {
  const capabilities = [
    {
      title: "Self-Healing Middleware Loops",
      desc: "Deploying automated validation scripts that scan JSON endpoints, catch network failures, and retry operations dynamically."
    },
    {
      title: "API Pipeline Bridging",
      desc: "Connecting disparate third-party data services (Salesforce, Stripe, HubSpot) into unified, fast-flowing pipelines."
    },
    {
      title: "Legacy Workflow Refactoring",
      desc: "Translating spreadsheet-based or manual back-office cycles into background cron scripts and active webhooks."
    },
    {
      title: "Real-Time Telemetry & Alerts",
      desc: "Configuring Slack or webhook alerts that trigger instant developer diagnostics when operational limits are hit."
    }
  ];

  const technologies = ["Node.js", "Python", "Zapier Developer", "Stripe API", "Salesforce API", "HubSpot API", "Cron Jobs", "Webhooks"];

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
                <Zap size={24} />
              </div>
              
              <h1 className={styles.heading} style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                Workflow Automation
              </h1>
              
              <p className={styles.desc}>
                We connect fragmented systems into fast, automated operational logic loops that reduce human overhead.
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
