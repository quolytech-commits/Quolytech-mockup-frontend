# Website Design & Animation Blueprint

## 1. Core Identity & Vibe
* **Aesthetic:** "Stark Industries" meets minimal luxury.
* **Inspiration:** Google Antigravity (agent-first, high-tech, terminal-driven, sleek liftoff dynamics) and high-end autonomous AI interfaces.
* **Key Motifs:** Glassmorphism, 3D modeling integrations, holographic UI overlays, and a dark-mode default environment.

## 2. Tech Stack Setup
* **Framework:** React / Next.js
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion (for UI interactions) & GSAP (for complex timeline/scroll animations)
* **3D Elements:** Three.js / React Three Fiber

## 3. Typography Rules
* **Primary Font (Headings/Display):** `Poppins` 
    * *Usage:* Bold, clean, geometric titles. Always utilize tracking (letter-spacing) tight on large display sizes.
* **Secondary Font (Body/UI Elements):** `Albert Sans`
    * *Usage:* Highly legible, technical yet modern body copy and UI component labels.
* **Terminal/Code Blocks:** Sleek monospace (e.g., `JetBrains Mono`) for the Antigravity CLI/IDE simulation areas.

## 4. Color Palette
* **Background:** Deep Obsidian (`#0B0D17`) to Pure Black (`#000000`).
* **Surface / Cards:** Glassmorphic panels with varying opacity (`rgba(255, 255, 255, 0.03)`) and `backdrop-blur-md` (12px blur).
* **Primary Accent:** Electric Cyan or "Holographic Blue" (`#00E5FF`) for primary buttons, active states, and glowing node elements.
* **Secondary Accent:** Subtle Neon Purple (`#8A2BE2`) for agentic/AI processing gradients.
* **Text:** High contrast white (`#FFFFFF`) for headers, muted silver (`#A0AAB2`) for body copy.

## 5. Detailed Animation System

**AI Instructions:** Implement all animations natively using Framer Motion unless hardware acceleration demands GSAP. Do not compromise on easing curves.

### A. The "Liftoff" Hero Sequence (Load Animation)
* **Trigger:** On initial page load.
* **Action:**
    * Background fades from `#000000` to `#0B0D17` over `1.2s` with `easeOut`.
    * Central 3D hero element (or abstract data mesh) scales up from `0.85` to `1.0` and begins an infinite, slow Y-axis rotation.
    * Headline (`Poppins`) reveals using a staggered text-masking animation. Lines rise from below a hidden overflow box (`y: "100%" -> y: "0%"`), duration `0.8s`, stagger `0.15s`, using a custom cubic-bezier `(0.16, 1, 0.3, 1)`.
    * Subheadline (`Albert Sans`) fades in with a slight upward drift (`y: 20px` to `0px`) at the `1.0s` mark.

### B. Glassmorphic Card Interaction (Hover States)
* **Trigger:** `onMouseEnter` / `onMouseLeave` over feature cards.
* **Action:**
    * **Border:** A 1px glowing border sweeps around the card edge (SVG path animation or gradient background transition).
    * **Background:** Card background opacity shifts smoothly from `0.03` to `0.08` over `0.3s`.
    * **Elevation:** Card lifts (`translateY: -6px`) with a fluid spring physics easing (`type: "spring", stiffness: 400, damping: 25`).
    * **Glow:** A diffuse holographic blue drop shadow (`box-shadow: 0 10px 40px -10px rgba(0, 229, 255, 0.25)`) blooms behind the card.

### C. Agent/Terminal Typing Effect (Antigravity CLI Vibe)
* **Trigger:** Component scrolls into viewport (`whileInView`).
* **Action:**
    * Terminal window appears with a quick scale-in (`scale: 0.95 -> 1.0`, opacity `0 -> 1`, `0.4s` duration).
    * Command lines (`> init agent --parallel`) type out sequentially character-by-character at variable speeds (`30ms - 80ms` per char) to simulate human/AI execution.
    * A block cursor (`█` or `|`) follows the text and pulses infinitely at `800ms` intervals.

### D. Scroll-Triggered Parallax & Section Reveal
* **Trigger:** Vertical scrolling.
* **Action:**
    * Section backgrounds utilize a subtle parallax offset (moving `10-15%` slower than the user's scroll speed).
    * Content blocks fade in and slide up (`y: 40px`, `opacity: 0` to `opacity: 1`) as they cross the 85% viewport threshold. Use a spring transition to ensure the motion feels heavy and premium, not floaty.

### E. AI Process "Thinking" State (Micro-interactions)
* **Trigger:** User clicks actionable UI (e.g., "Deploy Agent").
* **Action:**
    * Button text morphs cleanly into a loading metric or "Processing..." state.
    * A continuous, smooth gradient sweep loops across the button background.
    * Small, glowing particle nodes orbit the button bounds or pulse alongside the text, utilizing SVG path animations to simulate data processing streams.

## 6. Implementation Notes for AI Agent
* **Architecture:** Modularize the `GlassCard` and `TerminalWindow` as reusable React components.
* **Layout:** Embrace negative space. High-end UI relies on breathing room between sections. Do not pack components tightly.
* **Performance:** Use CSS variables for the color palette to allow easy theme switching later. Ensure `will-change: transform, opacity` is applied to heavy Framer Motion elements to prevent layout thrashing during the 3D and glassmorphism renders.