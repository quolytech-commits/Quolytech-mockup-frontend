"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
  text: string;
  type: "command" | "system" | "success" | "warning";
  isTyped?: boolean;
}

const TERMINAL_DATA: TerminalLine[] = [
  { text: "init quolytech --agent=parallel", type: "command" },
  { text: "Establishing quantum telemetry pipeline...", type: "system" },
  { text: "Connecting neural nodes to GPU clusters...", type: "system" },
  { text: "Successfully linked active agency cores [3/3]", type: "success" },
  { text: "applying theme: stark-obsidian --glow=cyan", type: "command" },
  { text: "Theme files processed. CSS variables matching visual specs.", type: "success" },
  { text: "antigravity status", type: "command" },
  { text: "Quoly Tech Client Agent: ONLINE & OPTIMIZED", type: "success" }
];

export function AntigravityTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (currentLineIndex >= TERMINAL_DATA.length) return;

    const line = TERMINAL_DATA[currentLineIndex];

    if (line.type === "command") {
      let charIndex = 0;
      
      const setupTimer = setTimeout(() => {
        setIsTyping(true);
        setCurrentText("");
      }, 0);
      
      const interval = setInterval(() => {
        if (charIndex < line.text.length) {
          const char = line.text[charIndex];
          setCurrentText((prev) => prev + char);
          charIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setDisplayedLines((prev) => [...prev, `> ${line.text}`]);
          setCurrentText("");
          setCurrentLineIndex((prev) => prev + 1);
        }
      }, 50 + Math.random() * 30); // Variable typing speed

      return () => {
        clearTimeout(setupTimer);
        clearInterval(interval);
      };
    } else {
      // System output - prints instantly after a short processing delay
      const timer = setTimeout(() => {
        let prefix = "";
        if (line.type === "success") prefix = "✓ ";
        if (line.type === "warning") prefix = "⚠ ";
        
        setDisplayedLines((prev) => [...prev, `${prefix}${line.text}`]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 600 + Math.random() * 400);

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  // Scroll to bottom of terminal container only
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [displayedLines, currentText]);

  const getLineColorClass = (line: string) => {
    if (line.startsWith(">")) return "text-[var(--accent-primary)] font-semibold";
    if (line.startsWith("✓")) return "text-emerald-400";
    if (line.startsWith("⚠")) return "text-amber-400";
    return "text-slate-400";
  };

  return (
    <div className="w-full max-w-lg mx-auto rounded-xl border border-[var(--glass-border)] bg-[rgba(5,6,10,0.8)] backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-sm leading-relaxed text-left flex flex-col h-[280px]">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
        </div>
        <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold select-none">
          antigravity-cli
        </span>
        <div className="w-12" /> {/* Balancing spacer */}
      </div>

      {/* Terminal Screen */}
      <div 
        ref={scrollContainerRef}
        className="p-5 flex-1 overflow-y-auto flex flex-col gap-1.5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
      >
        {displayedLines.map((line, idx) => (
          <div key={idx} className={getLineColorClass(line)}>
            {line}
          </div>
        ))}
        {isTyping && (
          <div className="text-[var(--accent-primary)] font-semibold">
            &gt; {currentText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2.5 h-4 ml-1 bg-[var(--accent-primary)]"
            />
          </div>
        )}
        {!isTyping && currentLineIndex < TERMINAL_DATA.length && (
          <div className="text-slate-500 flex items-center">
            <span className="mr-1">&gt;</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-3.5 bg-slate-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}
