"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import styles from "../legal.module.css";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />

      <section className={styles.legalSection}>
        <div className={styles.bgGlow} />

        <div className="container">
          <div className={styles.content}>
            <FadeIn>
              <div className={styles.header}>
                <h1 className={styles.heading}>Privacy Policy</h1>
                <p className={styles.meta}>Last updated: June 21, 2026</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p>
                At Quoly Tech, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our software development and AI engineering services.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped together as follows:
              </p>
              <ul>
                <li><strong>Identity Data</strong> includes first name, last name, username, or similar identifier.</li>
                <li><strong>Contact Data</strong> includes billing address, email address, and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting, and platform details.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products, and solutions.</li>
              </ul>

              <h2>2. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul>
                <li>To configure and deliver the custom software architectures you contract from us.</li>
                <li>To manage your account, support pipeline tickets, and keep operations active.</li>
                <li>To improve our predictive machine learning workflows and agentic support solutions.</li>
              </ul>

              <h2>3. AI and Data Processing</h2>
              <p>
                For our custom AI integrations, we build LLM middleware boundaries. We ensure that any proprietary enterprise data processed via our semantic databases or agentic routines is insulated and not utilized for public foundational model training without your express compliance.
              </p>

              <h2>4. Security Standards</h2>
              <p>
                We implement robust security controls, consistent with SOC2 standards, to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your data to those employees and partners who have a direct business need.
              </p>

              <h2>5. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact our privacy compliance team via our contact form.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
