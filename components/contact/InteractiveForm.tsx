"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./InteractiveForm.module.css";

interface InteractiveFormProps {
  onSuccessClose?: () => void;
  inline?: boolean;
}

export function InteractiveForm({ onSuccessClose, inline = false }: InteractiveFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    track: "",
    scale: "",
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const tracks = [
    {
      id: "ai",
      title: "AI & Machine Learning",
      desc: "Integrate predictive intelligence, LLMs, or custom agents."
    },
    {
      id: "software",
      title: "Custom Software",
      desc: "Scale with clean, premium web applications and platforms."
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure",
      desc: "Scale and secure your cloud pipelines, DBs, and systems."
    },
    {
      id: "automation",
      title: "Workflow Automation",
      desc: "Connect APIs, automate legacy workflows, and drive efficiency."
    }
  ];

  const scales = [
    {
      id: "mvp",
      title: "Launch MVP",
      desc: "Focused, fast execution to prove product-market fit.",
      budget: "$10k - $25k"
    },
    {
      id: "scale",
      title: "Scale Platform",
      desc: "Engineered for high growth, peak traffic, and custom features.",
      budget: "$25k - $100k"
    },
    {
      id: "enterprise",
      title: "Enterprise Solution",
      desc: "Deep integrations, robust architectures, and peak security.",
      budget: "$100k+"
    }
  ];

  const handleSelectTrack = (trackId: string) => {
    setFormData(prev => ({ ...prev, track: trackId }));
    setTimeout(() => setStep(2), 300); // Smooth auto-advance
  };

  const handleSelectScale = (scaleId: string) => {
    setFormData(prev => ({ ...prev, scale: scaleId }));
    setTimeout(() => setStep(3), 300); // Smooth auto-advance
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Please tell us a little about your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setSubmitting(true);
    // Simulate premium matching sequence
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const getContactPerson = () => {
    if (formData.track === "ai" || formData.track === "cloud") {
      return {
        name: "Lucas Vance",
        role: "Head of AI & Cloud Architecture",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
      };
    }
    return {
      name: "Clara Dubois",
      role: "Head of Custom Systems Engineering",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    };
  };

  return (
    <div className={`${styles.formContainer} ${inline ? styles.inlineForm : ""}`}>
      {/* Elegant Minimalist Stepper */}
      {!submitted && (
        <div className={styles.stepperHeader}>
          <div className={`${styles.stepLabel} ${step === 1 ? styles.activeStep : ""}`}>
            <span className={styles.stepNum}>01</span>
            <span className={styles.stepText}>FOCUS</span>
          </div>
          <div className={`${styles.stepLabel} ${step === 2 ? styles.activeStep : ""}`}>
            <span className={styles.stepNum}>02</span>
            <span className={styles.stepText}>SCALE</span>
          </div>
          <div className={`${styles.stepLabel} ${step === 3 ? styles.activeStep : ""}`}>
            <span className={styles.stepNum}>03</span>
            <span className={styles.stepText}>INTAKE</span>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 && !submitted && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={styles.stepContent}
          >
            <h3 className={styles.stepTitle}>Select focus area</h3>
            <p className={styles.stepSubtitle}>Identify the architectural foundation of your project.</p>
            
            <div className={styles.grid}>
              {tracks.map(track => (
                <button
                  key={track.id}
                  type="button"
                  className={`${styles.trackCard} ${formData.track === track.id ? styles.selectedCard : ""}`}
                  onClick={() => handleSelectTrack(track.id)}
                >
                  <h4 className={styles.cardTitle}>{track.title}</h4>
                  <p className={styles.cardDesc}>{track.desc}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && !submitted && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={styles.stepContent}
          >
            <h3 className={styles.stepTitle}>Select timeline or budget scale</h3>
            <p className={styles.stepSubtitle}>Helps us configure engineering team allocation.</p>
            
            <div className={styles.scalesList}>
              {scales.map(scale => (
                <button
                  key={scale.id}
                  type="button"
                  className={`${styles.scaleCard} ${formData.scale === scale.id ? styles.selectedCard : ""}`}
                  onClick={() => handleSelectScale(scale.id)}
                >
                  <div className={styles.scaleHeader}>
                    <h4 className={styles.cardTitle}>{scale.title}</h4>
                    <span className={styles.budgetBadge}>{scale.budget}</span>
                  </div>
                  <p className={styles.cardDesc} style={{ marginTop: 8 }}>{scale.desc}</p>
                </button>
              ))}
            </div>

            <div className={styles.footerActions}>
              <button 
                type="button" 
                className={styles.backBtn}
                onClick={() => setStep(1)}
              >
                Back
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && !submitted && !submitting && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={styles.stepContent}
          >
            <h3 className={styles.stepTitle}>Project intake</h3>
            <p className={styles.stepSubtitle}>Provide contact details and a brief outline of the parameters.</p>

            <form onSubmit={handleSubmit} className={styles.formGroup}>
              <div className={styles.inputRow}>
                <div className={styles.fieldWrapper}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    placeholder="e.g. Alexander Wright"
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className={errors.name ? styles.inputError : ""}
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.fieldWrapper}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    placeholder="e.g. Acme Labs"
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  />
                </div>
              </div>

              <div className={styles.fieldWrapper}>
                <label htmlFor="email">Business Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  placeholder="e.g. alex@acmelabs.com"
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className={errors.email ? styles.inputError : ""}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.fieldWrapper}>
                <label htmlFor="message">Description of constraints or goals</label>
                <textarea
                  id="message"
                  value={formData.message}
                  rows={4}
                  placeholder="e.g. We need to build a custom AI integration for our SaaS app..."
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className={errors.message ? styles.inputError : ""}
                />
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
              </div>

              <div className={styles.footerActions} style={{ marginTop: 24 }}>
                <button 
                  type="button" 
                  className={styles.backBtn}
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
                <button type="submit" className={styles.submitBtn}>
                  Submit Request
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {submitting && (
          <motion.div
            key="submitting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.loadingState}
          >
            <div className={styles.spinner}>
              <div className={styles.spinnerBar}></div>
            </div>
            <h4>Verifying Intake Parameters</h4>
            <p>Routing to the dedicated systems architect...</p>
          </motion.div>
        )}

        {submitted && (
          <motion.div
            key="submitted"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.successState}
          >
            <h3 className={styles.successHeading}>Thank You.</h3>
            <p className={styles.successMessage}>
              Your project configuration has been securely received by our engineering leads.
            </p>

            <div className={styles.curatedMatchCard}>
              <span className={styles.matchBadge}>Assigned Architect</span>
              <div className={styles.expertRow}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={getContactPerson().img} 
                  alt={getContactPerson().name} 
                  className={styles.expertImg} 
                />
                <div className={styles.expertMeta}>
                  <h5>{getContactPerson().name}</h5>
                  <p>{getContactPerson().role}</p>
                </div>
              </div>
              
              <div className={styles.guaranteeRow}>
                <span>Response expected: <strong>Under 4 Hours</strong></span>
              </div>
            </div>

            <div className={styles.successFooter}>
              <button 
                type="button" 
                className={styles.doneBtn}
                onClick={() => {
                  if (onSuccessClose) {
                    onSuccessClose();
                  } else {
                    setStep(1);
                    setFormData({
                      track: "",
                      scale: "",
                      name: "",
                      email: "",
                      company: "",
                      message: ""
                    });
                    setSubmitted(false);
                  }
                }}
              >
                Reset Configuration
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
