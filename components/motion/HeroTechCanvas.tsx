'use client';

import React, { useEffect, useRef } from 'react';
import { useReducedMotion, useViewportObserver, useDocumentVisible } from '@/lib/motion';

interface VecNode {
  bx: number;
  by: number;
  x: number;
  y: number;
  ax: number;
  ay: number;
  freqX: number;
  freqY: number;
  phase: number;
  radius: number;
  glow: number;
}

interface Edge {
  a: number;
  b: number;
  cx: number;
  cy: number;
}

interface SignalPulse {
  edgeIdx: number;
  t: number;
  speed: number;
  dir: 1 | -1;
}

function seededRandom(seed: number): () => number {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export default function HeroTechCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const reducedMotion = useReducedMotion();
  const docVisible = useDocumentVisible();
  const { isInView } = useViewportObserver(containerRef, {
    rootMargin: '80px 0px',
    threshold: 0.01,
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = container.clientWidth || 1200;
    let height = container.clientHeight || 720;
    const isMobile = width < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      width = container.clientWidth || 1200;
      height = container.clientHeight || 720;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Deterministic architectural node constellation (weighted subtly toward upper-right & perimeter)
    const rand = seededRandom(202607);
    const nodeCount = isMobile ? 12 : 24;
    const nodes: VecNode[] = [];

    for (let i = 0; i < nodeCount; i++) {
      // Distribute across clean grid jitter so nodes never clump awkwardly
      const cols = isMobile ? 4 : 6;
      const rows = Math.ceil(nodeCount / cols);
      const col = i % cols;
      const row = Math.floor(i / cols);
      const cellW = 1 / cols;
      const cellH = 1 / rows;
      const nx = (col + 0.2 + rand() * 0.6) * cellW;
      const ny = (row + 0.18 + rand() * 0.64) * cellH;

      nodes.push({
        bx: nx,
        by: ny,
        x: nx * width,
        y: ny * height,
        ax: (isMobile ? 6 : 12) + rand() * 10,
        ay: (isMobile ? 5 : 10) + rand() * 8,
        freqX: 0.18 + rand() * 0.24,
        freqY: 0.16 + rand() * 0.22,
        phase: rand() * Math.PI * 2,
        radius: 1.4 + rand() * 1.3,
        glow: 0,
      });
    }

    // Build sparse architectural edges between nearby nodes
    const edges: Edge[] = [];
    const maxDistRatio = isMobile ? 0.42 : 0.31;
    for (let i = 0; i < nodes.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].bx - nodes[j].bx;
        const dy = nodes[i].by - nodes[j].by;
        const dist = Math.hypot(dx, dy);
        if (dist < maxDistRatio && connections < 3) {
          edges.push({
            a: i,
            b: j,
            cx: (rand() - 0.5) * 36,
            cy: (rand() - 0.5) * 28,
          });
          connections++;
        }
      }
    }

    // Traveling signal pulses
    const pulseCount = isMobile ? 4 : 8;
    const pulses: SignalPulse[] = [];
    if (edges.length > 0) {
      for (let i = 0; i < pulseCount; i++) {
        pulses.push({
          edgeIdx: Math.floor(rand() * edges.length),
          t: rand(),
          speed: 0.16 + rand() * 0.18,
          dir: rand() > 0.5 ? 1 : -1,
        });
      }
    }

    // Pointer proximity tracking (desktop fine pointer only)
    const pointer = { x: -9999, y: -9999, active: false };
    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const handlePointerLeave = () => {
      pointer.active = false;
    };

    if (!isMobile) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      container.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    }

    let resizeObserver: ResizeObserver | null = null;
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(() => resize());
      resizeObserver.observe(container);
    }

    const drawFrame = (timeSec: number, dt: number) => {
      ctx.clearRect(0, 0, width, height);

      // Update node coordinates with gentle harmonic drift
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const driftX = reducedMotion ? 0 : Math.sin(timeSec * n.freqX + n.phase) * n.ax;
        const driftY = reducedMotion ? 0 : Math.cos(timeSec * n.freqY + n.phase * 1.3) * n.ay;
        n.x = n.bx * width + driftX;
        n.y = n.by * height + driftY;
        n.glow = Math.max(0, n.glow - dt * 1.4);
      }

      // Draw curved architectural connection lines
      ctx.lineWidth = 1;
      for (let i = 0; i < edges.length; i++) {
        const e = edges[i];
        const na = nodes[e.a];
        const nb = nodes[e.b];
        const mx = (na.x + nb.x) * 0.5 + e.cx;
        const my = (na.y + nb.y) * 0.5 + e.cy;

        let alpha = 0.14;
        if (pointer.active) {
          const distToPointer = Math.hypot(mx - pointer.x, my - pointer.y);
          if (distToPointer < 200) {
            alpha += (1 - distToPointer / 200) * 0.22;
          }
        }

        ctx.strokeStyle = `rgba(24, 198, 160, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.quadraticCurveTo(mx, my, nb.x, nb.y);
        ctx.stroke();
      }

      // Advance and draw traveling signal pulses (skip if reduced motion)
      if (!reducedMotion && edges.length > 0) {
        for (let i = 0; i < pulses.length; i++) {
          const p = pulses[i];
          p.t += p.speed * dt * p.dir;

          if (p.t > 1 || p.t < 0) {
            const arrivedNodeIdx = p.t > 1 ? edges[p.edgeIdx].b : edges[p.edgeIdx].a;
            nodes[arrivedNodeIdx].glow = 1;
            p.edgeIdx = Math.floor(Math.random() * edges.length);
            p.dir = Math.random() > 0.5 ? 1 : -1;
            p.t = p.dir === 1 ? 0 : 1;
          }

          const e = edges[p.edgeIdx];
          const na = nodes[e.a];
          const nb = nodes[e.b];
          const mx = (na.x + nb.x) * 0.5 + e.cx;
          const my = (na.y + nb.y) * 0.5 + e.cy;

          const t = p.t;
          const inv = 1 - t;
          const px = inv * inv * na.x + 2 * inv * t * mx + t * t * nb.x;
          const py = inv * inv * na.y + 2 * inv * t * my + t * t * nb.y;

          // Subtle trailing point along curve
          const tailT = Math.max(0, Math.min(1, t - 0.06 * p.dir));
          const tailInv = 1 - tailT;
          const tx = tailInv * tailInv * na.x + 2 * tailInv * tailT * mx + tailT * tailT * nb.x;
          const ty = tailInv * tailInv * na.y + 2 * tailInv * tailT * my + tailT * tailT * nb.y;

          const grad = ctx.createLinearGradient(tx, ty, px, py);
          grad.addColorStop(0, 'rgba(24, 198, 160, 0)');
          grad.addColorStop(1, 'rgba(24, 198, 160, 0.72)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(px, py);
          ctx.stroke();

          ctx.fillStyle = 'rgba(24, 198, 160, 0.85)';
          ctx.beginPath();
          ctx.arc(px, py, 2.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw coordinate vertices and arrival illumination rings
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        let proxBoost = 0;
        if (pointer.active) {
          const d = Math.hypot(n.x - pointer.x, n.y - pointer.y);
          if (d < 180) proxBoost = 1 - d / 180;
        }

        const totalGlow = Math.min(1, n.glow + proxBoost * 0.75);
        if (totalGlow > 0.05) {
          ctx.strokeStyle = `rgba(24, 198, 160, ${(totalGlow * 0.42).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius + 5 + (1 - totalGlow) * 6, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(24, 198, 160, ${(0.28 + totalGlow * 0.55).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + totalGlow * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Draw initial crisp frame immediately
    drawFrame(0, 0);

    let rafId = 0;
    let lastTime = performance.now();
    const minFrameMs = isMobile ? 38 : 26; // ~26fps mobile, ~38fps desktop ambient budget

    const shouldRun = !reducedMotion && isInView && docVisible;

    const tick = (now: number) => {
      if (!shouldRun) return;
      const elapsed = now - lastTime;
      if (elapsed >= minFrameMs) {
        const dt = Math.min(0.05, elapsed / 1000);
        lastTime = now;
        drawFrame(now / 1000, dt);
      }
      rafId = window.requestAnimationFrame(tick);
    };

    if (shouldRun) {
      rafId = window.requestAnimationFrame(tick);
    }

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      if (resizeObserver) resizeObserver.disconnect();
      if (!isMobile) {
        window.removeEventListener('pointermove', handlePointerMove);
        container.removeEventListener('pointerleave', handlePointerLeave);
      }
    };
  }, [reducedMotion, isInView, docVisible]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75"
      />
    </div>
  );
}
