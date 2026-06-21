"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Button } from "../shared/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "AI", href: "/ai" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Quoly <span>Tech</span>
        </Link>

        <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${styles.navLink} ${pathname.startsWith(link.href) ? styles.active : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className={styles.mobileActions}>
            <Button href="/contact" variant="glass">Let's Talk</Button>
          </div>
        </div>

        <div className={styles.desktopActions}>
          <Button href="/contact" variant="glass">Let's Talk</Button>
        </div>

        <button 
          className={styles.mobileMenuToggle} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
