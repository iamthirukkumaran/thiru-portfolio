"use client";

import { useEffect, useRef } from "react";

type Dab = { x: number; y: number; t: number };

/** Soft paint that follows the cursor behind the avatar. */
const RADIUS = 56; // px of each dab
const ALPHA = 0.34; // opacity at the centre of a fresh dab
const LIFE = 10000; // ms a dab stays on the canvas
const FADE_AT = 7000; // ms before a dab starts fading out
const STEP = 8; // px between interpolated dabs along a fast cursor path

// Colour is mixed across the canvas: sage on the left, warm sand on the right.
const LEFT = { r: 203, g: 222, b: 211 };
const RIGHT = { r: 244, g: 226, b: 199 };

export default function IntroBrush() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dabs = useRef<Dab[]>([]);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    const fine = window.matchMedia("(min-width: 641px) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = host.getBoundingClientRect().height * 1.6;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const paint = (x: number, y: number, alpha: number) => {
      const mix = Math.max(0, Math.min(1, x / width));
      const r = Math.round(LEFT.r * (1 - mix) + RIGHT.r * mix);
      const g = Math.round(LEFT.g * (1 - mix) + RIGHT.g * mix);
      const b = Math.round(LEFT.b * (1 - mix) + RIGHT.b * mix);

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, RADIUS);
      gradient.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
      gradient.addColorStop(0.4, `rgba(${r},${g},${b},${alpha * 0.35})`);
      gradient.addColorStop(0.85, `rgba(${r},${g},${b},${alpha * 0.12})`);
      gradient.addColorStop(1, "rgba(255,255,255,0)");

      ctx.beginPath();
      ctx.arc(x, y, RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const draw = () => {
      const now = Date.now();
      ctx.clearRect(0, 0, width, height);
      dabs.current = dabs.current.filter((d) => now - d.t < LIFE);

      for (const dab of dabs.current) {
        const age = now - dab.t;
        const alpha = age > FADE_AT ? ALPHA * (1 - (age - FADE_AT) / (LIFE - FADE_AT)) : ALPHA;
        paint(dab.x, dab.y, alpha);
      }

      // Idle when there is nothing left to show; a move restarts the loop.
      frame.current = dabs.current.length ? requestAnimationFrame(draw) : null;
    };

    let lastX: number | null = null;
    let lastY: number | null = null;

    const onMove = (event: MouseEvent) => {
      const box = canvas.getBoundingClientRect();
      const margin = 100;
      if (
        event.clientX < box.left - margin ||
        event.clientX > box.right + margin ||
        event.clientY < box.top - margin ||
        event.clientY > box.bottom + margin
      ) {
        lastX = null;
        lastY = null;
        return;
      }

      const x = event.clientX - box.left;
      const y = event.clientY - box.top;
      const now = Date.now();

      // Fill in the gaps so a fast cursor still leaves a continuous stroke.
      if (lastX !== null && lastY !== null) {
        const dx = x - lastX;
        const dy = y - lastY;
        const distance = Math.hypot(dx, dy);
        if (distance > STEP) {
          const steps = Math.ceil(distance / STEP);
          for (let i = 1; i < steps; i += 1) {
            dabs.current.push({
              x: lastX + (dx * i) / steps,
              y: lastY + (dy * i) / steps,
              t: now,
            });
          }
        }
      }

      dabs.current.push({ x, y, t: now });
      lastX = x;
      lastY = y;

      if (frame.current === null) frame.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      frame.current = null;
      dabs.current = [];
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="intro-brush" aria-hidden="true" />;
}
