"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InteractiveForm } from "@/components/contact/InteractiveForm";
import { FadeIn } from "@/components/animations/FadeIn";
import styles from "./contactPage.module.css";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      <section className={styles.contactSection}>
        <div className={styles.bgGlow} />
        
        <div className="container">
          <div className={styles.header}>
            <FadeIn>
              <h1 className={styles.heading}>Configure Your Solution</h1>
              <p className={styles.desc}>
                Outlining project parameters to align technical resource allocations.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div className={styles.formWrapper}>
              <InteractiveForm inline={true} />
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
