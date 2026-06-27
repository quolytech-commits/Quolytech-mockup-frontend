"use client";

import { NeoCard } from "../cards/NeoCard";
import styles from "./Services.module.css";
import { FadeIn } from "../animations/FadeIn";
import { SectionHeading } from "../animations/SectionHeading";
import { StrokeFillText } from "../animations/StrokeFillText";
import { Code, Bot, MonitorSmartphone, Cloud, Layout, Cpu } from "lucide-react";

export function ServicesPreview() {
  const services = [
    {
      title: "Custom Software",
      description: "ERP, CRM, and Management systems tailored to your unique workflows.",
      icon: <Code size={32} className={styles.icon} />
    },
    {
      title: "AI Solutions",
      description: "Chatbots, AI agents, RAG systems, and intelligent automation.",
      icon: <Bot size={32} className={styles.icon} />
    },
    {
      title: "Web Platforms",
      description: "Corporate websites, marketplaces, and scalable booking systems.",
      icon: <Layout size={32} className={styles.icon} />
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform apps for iOS and Android.",
      icon: <MonitorSmartphone size={32} className={styles.icon} />
    },
    {
      title: "Cloud Solutions",
      description: "Secure, scalable APIs and microservices on Azure and AWS.",
      icon: <Cloud size={32} className={styles.icon} />
    },
    {
      title: "UI/UX Design",
      description: "Research, wireframes, and world-class premium design systems.",
      icon: <Cpu size={32} className={styles.icon} />
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <FadeIn>
          <div className={styles.header}>
            <SectionHeading className="h2" align="center">Our Expertise</SectionHeading>
            <p className="body-text">End-to-end digital capabilities designed to elevate your brand.</p>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <NeoCard key={index} delay={index * 0.1} interactive>
              <div className={styles.cardContent}>
                {service.icon}
                <h3 className="h3">{service.title}</h3>
                <p className="body-text">{service.description}</p>
              </div>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
