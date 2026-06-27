"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
}

interface GravityStarsProps {
  starCount?: number;
  className?: string;
}

export function GravityStars({ starCount = 120, className = "" }: GravityStarsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const COLORS = [
      "rgba(10, 102, 255,",   // accent blue
      "rgba(90, 141, 255,",   // light blue
      "rgba(160, 200, 255,",  // pale blue
      "rgba(200, 220, 255,",  // near white blue
      "rgba(255, 255, 255,",  // white
    ];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars();
    };

    const initStars = () => {
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.7 + 0.15,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    const GRAVITY_STRENGTH = 18000;
    const REPEL_RADIUS = 160;
    const MAX_SPEED = 1.2;

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const star of starsRef.current) {
        const dx = star.x - mx;
        const dy = star.y - my;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (GRAVITY_STRENGTH / distSq) * (1 - dist / REPEL_RADIUS);
          star.vx += (dx / dist) * force * 0.012;
          star.vy += (dy / dist) * force * 0.012;
        }

        // Damping
        star.vx *= 0.992;
        star.vy *= 0.992;

        // Speed cap
        const speed = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
        if (speed > MAX_SPEED) {
          star.vx = (star.vx / speed) * MAX_SPEED;
          star.vy = (star.vy / speed) * MAX_SPEED;
        }

        star.x += star.vx;
        star.y += star.vy;

        // Wrap edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw crisp star dot
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${star.opacity})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < starsRef.current.length; i++) {
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const a = starsRef.current[i];
          const b = starsRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.08;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(90, 141, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    resize();
    tick();

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    window.addEventListener("resize", resize);
    // Track on window so pointer-events:none canvas still gets mouse coords
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
