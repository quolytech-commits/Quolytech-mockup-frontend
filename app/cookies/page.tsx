"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import styles from "../legal.module.css";

export default function CookiesPage() {
  return (
    <main>
      <Navbar />

      <section className={styles.legalSection}>
        <div className={styles.bgGlow} />

        <div className="container">
          <div className={styles.content}>
            <FadeIn>
              <div className={styles.header}>
                <h1 className={styles.heading}>Cookie Policy</h1>
                <p className={styles.meta}>Last updated: June 21, 2026</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p>
                This Cookie Policy explains how Quoly Tech uses cookies and similar tracking technologies when you interact with our website and digital services.
              </p>

              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, enhance user experience, and provide reporting information.
              </p>

              <h2>2. How We Use Cookies</h2>
              <p>
                We use cookies to understand site performance, remember user settings, and optimize page load speeds. The categories of cookies we use are:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> Critical for core website navigation, secure access, and system configurator states. Without these, our portal features cannot be loaded.</li>
                <li><strong>Performance and Analytics:</strong> Help us analyze traffic flows, identify bottlenecks, and measure scroll heights to improve UI aesthetics.</li>
                <li><strong>Preference Cookies:</strong> Remember custom theme inputs, language options, and user configurations between visits.</li>
              </ul>

              <h2>3. Managing Cookie Preferences</h2>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. You can configure your browser to block cookies or alert you when they are being sent. Note that blocking essential cookies may disrupt parts of our site’s functionality.
              </p>

              <h2>4. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our tech stack, tracking methods, or legal updates. Please review this page periodically to stay informed.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
