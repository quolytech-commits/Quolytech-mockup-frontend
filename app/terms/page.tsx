"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import styles from "../legal.module.css";

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />

      <section className={styles.legalSection}>
        <div className={styles.bgGlow} />

        <div className="container">
          <div className={styles.content}>
            <FadeIn>
              <div className={styles.header}>
                <h1 className={styles.heading}>Terms of Service</h1>
                <p className={styles.meta}>Last updated: June 21, 2026</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p>
                Welcome to Quoly Tech. These terms and conditions outline the rules and regulations for the use of Quoly Tech&apos;s website, portals, and software development solutions.
              </p>

              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Quoly Tech&apos;s website if you do not agree to all of the terms and conditions stated on this page.
              </p>

              <h2>2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise agreed in a separate master services agreement (MSA), Quoly Tech and/or its licensors own the intellectual property rights for all material, blueprints, framework libraries, and design patterns created on or by Quoly Tech. All intellectual property rights are reserved.
              </p>
              <p>
                You are granted a limited license to access the site and read material for evaluation purposes. Custom software artifacts built specifically for your enterprise will transition ownership as outlined in your project specification contracts.
              </p>

              <h2>3. Scope of Work and Delivery</h2>
              <p>
                We build premium, custom-engineered software architectures. Project definitions, sprint delivery speeds, testing procedures, and cloud deployment boundaries will be specified in writing in an attached statement of work (SOW).
              </p>

              <h2>4. Limitation of Liability</h2>
              <p>
                In no event shall Quoly Tech, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website or our deployed custom builds, whether such liability is under contract or tort.
              </p>

              <h2>5. Governing Law</h2>
              <p>
                These terms will be governed by and interpreted in accordance with the local jurisdiction&apos;s laws, and you submit to the non-exclusive jurisdiction of the state and federal courts located within our corporate headquarters&apos; region for the resolution of any disputes.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
