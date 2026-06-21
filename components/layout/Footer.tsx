"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { Button } from "../shared/Button";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        <div className={styles.ctaSection}>
          <h2 className="h2">Ready to transform your business?</h2>
          <Button href="/contact" variant="primary">
            Let's Talk <ArrowRight size={18} style={{ marginLeft: 8 }} />
          </Button>
        </div>

        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Quoly <span>Tech</span>
            </Link>
            <p className="body-text" style={{ marginTop: 16, fontSize: 16 }}>
              Building software that moves businesses forward. Premium digital experiences engineered for growth.
            </p>
          </div>

          <div className={styles.navGroup}>
            <h4 className={styles.groupTitle}>Solutions</h4>
            <Link href="/solutions/software-development">Software Development</Link>
            <Link href="/solutions/ai-solutions">AI Solutions</Link>
            <Link href="/solutions/cloud">Cloud Solutions</Link>
            <Link href="/solutions/automation">Automation</Link>
          </div>

          <div className={styles.navGroup}>
            <h4 className={styles.groupTitle}>Industries</h4>
            <Link href="/industries#healthcare">Healthcare</Link>
            <Link href="/industries#hospitality">Hospitality</Link>
            <Link href="/industries#retail">Retail</Link>
            <Link href="/industries#finance">Finance</Link>
          </div>

          <div className={styles.navGroup}>
            <h4 className={styles.groupTitle}>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Quoly Tech. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
