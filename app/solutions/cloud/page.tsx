import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Check, Cloud } from "lucide-react";
import styles from "../solutionsPage.module.css";
import { Button } from "@/components/shared/Button";

export default function CloudSolutionsPage() {
  const capabilities = [
    {
      title: "Multi-Region Cluster Topologies",
      desc: "Architecting zero-downtime, global microservices pipelines utilizing Kubernetes and service mesh nodes."
    },
    {
      title: "Serverless Scale Architectures",
      desc: "Setting up lightweight, cost-optimized edge execution routes and serverless relational nodes."
    },
    {
      title: "Infrastructure as Code (IaC)",
      desc: "Declarative server management using Terraform templates for secure, repeatable configuration."
    },
    {
      title: "Security & SOC2 Isolation Compliances",
      desc: "Mapping audit controls, data isolation walls, and automated pipeline vulnerabilities detectors."
    }
  ];

  const technologies = ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Nginx", "GitHub Actions", "Prometheus"];

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
                <Cloud size={24} />
              </div>
              
              <h1 className={styles.heading} style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                Cloud Systems
              </h1>
              
              <p className={styles.desc}>
                We design high-availability, secure, and auto-scaling cloud foundations mapped for global performance.
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
