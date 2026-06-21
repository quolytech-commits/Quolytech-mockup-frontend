"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import styles from "./industries.module.css";

export default function IndustriesPage() {
  const industries = [
    {
      id: "healthcare",
      badge: "Clinical Systems",
      title: "Healthcare Technology",
      desc: "We build secure, high-compliance digital health platforms, patient dashboards, and automated clinical queues that prioritize data isolation and lightning-fast doctor-patient synchronization.",
      caps: [
        "HIPAA-Compliant Database Topologies",
        "Patient Intake & Scheduling Pipelines",
        "Telemetry & Health Tracker Dashboards",
        "Legacy EHR Data Integration Bridges"
      ],
      caseStudy: {
        title: "Compliance Case Study",
        metricVal: "100%",
        metricLabel: "HIPAA-certified PHI data isolation audit success",
        subMetricVal: "99.99%",
        subMetricLabel: "Real-time clinical queue server uptime SLA"
      }
    },
    {
      id: "hospitality",
      badge: "Booking & Operations",
      title: "Hospitality Engines",
      desc: "We engineer reservation backbones, visual property configuration charts, and real-time check-in portals that streamline user bookings and lower legacy management systems cost.",
      caps: [
        "Dynamic Reservation Calendar APIs",
        "Multi-Property Operational Dashboards",
        "Automated Stripe Billing Integrations",
        "Guest Messaging & Telemetry Pipelines"
      ],
      caseStudy: {
        title: "Operations Case Study",
        metricVal: "-35%",
        metricLabel: "Reduction in client reservation dropout rates",
        subMetricVal: "<2.4s",
        subMetricLabel: "Average room availability query latency"
      }
    },
    {
      id: "retail",
      badge: "E-Commerce Scale",
      title: "Digital Retail & E-Commerce",
      desc: "We scale digital stores, cart checkout flows, and search clusters capable of processing peak seasonal traffic surges without server slowdowns.",
      caps: [
        "Headless Storefront Next.js Integrations",
        "Edge-Cached Search Engine Clusters",
        "Inventory Sync & Webhook Handlers",
        "Omnichannel Checkout Middleware"
      ],
      caseStudy: {
        title: "E-Commerce Case Study",
        metricVal: "+48%",
        metricLabel: "Increase in checkout processing speeds",
        subMetricVal: "<110ms",
        subMetricLabel: "Catalog search result delivery global speed"
      }
    },
    {
      id: "finance",
      badge: "Fintech Compliance",
      title: "Fintech & Wealth Management",
      desc: "We construct secure banking engines, asset ledger logs, and billing triggers engineered under strict security guidelines to guarantee transaction safety.",
      caps: [
        "SOC2-Ready Encrypted Databases",
        "Ledger Audit Trail Logging Pipelines",
        "Asset Allocation Visualization Dashboards",
        "Strict JWT Validation Security Walls"
      ],
      caseStudy: {
        title: "Security Case Study",
        metricVal: "SOC2",
        metricLabel: "Data encryption and validation readiness compliance",
        subMetricVal: "1.2M+",
        subMetricLabel: "Monthly transactions securely logged and audited"
      }
    }
  ];

  return (
    <main>
      <Navbar />

      <section className={styles.industriesPage}>
        <div className="container">
          <FadeIn>
            <div className={styles.header}>
              <h1 className={styles.heading}>Industries We Serve</h1>
              <p className={styles.desc}>
                Domain expertise combined with premium engineering. We build software tailored for the unique compliance, speed, and scaling metrics of your industry.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Industry blocks */}
        <div>
          {industries.map((ind) => (
            <div key={ind.id} id={ind.id} className={styles.industryBlock}>
              <div className="container">
                <div className={styles.blockContainer}>
                  
                  {/* Left Column: Specs details */}
                  <FadeIn delay={0.1}>
                    <div className={styles.leftCol}>
                      <h2 className={styles.blockHeading}>{ind.title}</h2>
                      <p className={styles.blockText}>{ind.desc}</p>
                      
                      <div className={styles.capabilities}>
                        {ind.caps.map((cap, i) => (
                          <div key={i} className={styles.capItem}>
                            <span className={styles.capDot} />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>

                  {/* Right Column: Case study metrics */}
                  <FadeIn delay={0.2}>
                    <div className={styles.rightCol}>
                      <div className={styles.caseCard}>
                        <span className={styles.cardTitle}>{ind.caseStudy.title}</span>
                        
                        <div className={styles.metricRow}>
                          <span className={styles.metricVal}>{ind.caseStudy.metricVal}</span>
                          <span className={styles.metricLabel}>{ind.caseStudy.metricLabel}</span>
                        </div>

                        <div className={styles.metricRow} style={{ borderTop: "1px dashed var(--gray-200)", paddingTop: 16 }}>
                          <span className={styles.metricVal} style={{ fontSize: 28 }}>{ind.caseStudy.subMetricVal}</span>
                          <span className={styles.metricLabel}>{ind.caseStudy.subMetricLabel}</span>
                        </div>
                      </div>
                    </div>
                  </FadeIn>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
