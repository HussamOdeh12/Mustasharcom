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

interface AmbientParticle {
  nx: number;
  ny: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  twinklePhase: number;
  twinkleSpeed: number;
}

interface HeroSceneState {
  width: number;
  height: number;
  dpr: number;
  isMobile: boolean;
  nodes: VecNode[];
  edges: Edge[];
  pulses: SignalPulse[];
  particles: AmbientParticle[];
  pointer: { x: number; y: number; active: boolean };
  simTime: number;
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
  const sceneRef = useRef<HeroSceneState | null>(null);
  const drawFrameRef = useRef<((dt: number, animateMotion: boolean) => void) | null>(null);
  const rafIdRef = useRef<number>(0);

  const reducedMotion = useReducedMotion();
  const docVisible = useDocumentVisible();
  const { isInView } = useViewportObserver(containerRef, {
    rootMargin: '80px 0px',
    threshold: 0.01,
  });

  // 1. Initialize persistent scene geometry, ResizeObserver, and pointer listeners once on mount
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

    const rand = seededRandom(202607);
    const nodeCount = isMobile ? 12 : 24;
    const nodes: VecNode[] = [];

    for (let i = 0; i < nodeCount; i++) {
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
        freqX: 0.22 + rand() * 0.26,
        freqY: 0.2 + rand() * 0.24,
        phase: rand() * Math.PI * 2,
        radius: 1.5 + rand() * 1.4,
        glow: 0,
      });
    }

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

    const pulseCount = isMobile ? 4 : 9;
    const pulses: SignalPulse[] = [];
    if (edges.length > 0) {
      for (let i = 0; i < pulseCount; i++) {
        pulses.push({
          edgeIdx: Math.floor(rand() * edges.length),
          t: rand(),
          speed: 0.18 + rand() * 0.2,
          dir: rand() > 0.5 ? 1 : -1,
        });
      }
    }

    const particleCount = isMobile ? 7 : 16;
    const particles: AmbientParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        nx: rand(),
        ny: rand(),
        vx: (rand() - 0.35) * 0.012,
        vy: -(0.008 + rand() * 0.014),
        size: 1.1 + rand() * 1.3,
        alpha: 0.16 + rand() * 0.28,
        twinklePhase: rand() * Math.PI * 2,
        twinkleSpeed: 1.1 + rand() * 1.4,
      });
    }

    const scene: HeroSceneState = {
      width,
      height,
      dpr,
      isMobile,
      nodes,
      edges,
      pulses,
      particles,
      pointer: { x: -9999, y: -9999, active: false },
      simTime: 0,
    };
    sceneRef.current = scene;

    const resize = () => {
      width = container.clientWidth || 1200;
      height = container.clientHeight || 720;
      scene.width = width;
      scene.height = height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const rect = canvas.getBoundingClientRect();
      scene.pointer.x = e.clientX - rect.left;
      scene.pointer.y = e.clientY - rect.top;
      scene.pointer.active = true;
    };
    const handlePointerLeave = () => {
      scene.pointer.active = false;
    };

    if (!isMobile) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      container.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    }

    const drawFrame = (dt: number, animateMotion: boolean) => {
      if (animateMotion) {
        scene.simTime += dt;
      }
      const timeSec = scene.simTime;
      const w = scene.width;
      const h = scene.height;

      ctx.clearRect(0, 0, w, h);

      // Drifting luminous ambient particles
      for (let i = 0; i < scene.particles.length; i++) {
        const pt = scene.particles[i];
        if (animateMotion) {
          pt.nx = (pt.nx + pt.vx * dt + 1) % 1;
          pt.ny = (pt.ny + pt.vy * dt + 1) % 1;
        }
        const twinkle = animateMotion
          ? 0.65 + 0.35 * Math.sin(timeSec * pt.twinkleSpeed + pt.twinklePhase)
          : 0.8;
        ctx.fillStyle = `rgba(24, 198, 160, ${(pt.alpha * twinkle).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(pt.nx * w, pt.ny * h, pt.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update node positions with continuous harmonic drift
      for (let i = 0; i < scene.nodes.length; i++) {
        const n = scene.nodes[i];
        const driftX = animateMotion ? Math.sin(timeSec * n.freqX + n.phase) * n.ax : 0;
        const driftY = animateMotion ? Math.cos(timeSec * n.freqY + n.phase * 1.3) * n.ay : 0;
        n.x = n.bx * w + driftX;
        n.y = n.by * h + driftY;
        n.glow = Math.max(0, n.glow - dt * 1.25);
      }

      // Draw curved architectural connection lines with subtle pulse shimmer
      ctx.lineWidth = 1;
      for (let i = 0; i < scene.edges.length; i++) {
        const e = scene.edges[i];
        const na = scene.nodes[e.a];
        const nb = scene.nodes[e.b];
        const mx = (na.x + nb.x) * 0.5 + e.cx;
        const my = (na.y + nb.y) * 0.5 + e.cy;

        const breath = animateMotion ? Math.sin(timeSec * 0.7 + i * 0.6) * 0.035 : 0;
        let alpha = 0.145 + breath;
        if (scene.pointer.active) {
          const distToPointer = Math.hypot(mx - scene.pointer.x, my - scene.pointer.y);
          if (distToPointer < 210) {
            alpha += (1 - distToPointer / 210) * 0.24;
          }
        }

        ctx.strokeStyle = `rgba(24, 198, 160, ${Math.max(0.08, alpha).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.quadraticCurveTo(mx, my, nb.x, nb.y);
        ctx.stroke();
      }

      // Advance and draw continuous traveling signal pulses
      if (animateMotion && scene.edges.length > 0) {
        for (let i = 0; i < scene.pulses.length; i++) {
          const p = scene.pulses[i];
          p.t += p.speed * dt * p.dir;

          if (p.t > 1 || p.t < 0) {
            const arrivedNodeIdx = p.t > 1 ? scene.edges[p.edgeIdx].b : scene.edges[p.edgeIdx].a;
            scene.nodes[arrivedNodeIdx].glow = 1;
            p.edgeIdx = Math.floor(Math.random() * scene.edges.length);
            p.dir = Math.random() > 0.5 ? 1 : -1;
            p.t = p.dir === 1 ? 0 : 1;
          }

          const e = scene.edges[p.edgeIdx];
          const na = scene.nodes[e.a];
          const nb = scene.nodes[e.b];
          const mx = (na.x + nb.x) * 0.5 + e.cx;
          const my = (na.y + nb.y) * 0.5 + e.cy;

          const t = p.t;
          const inv = 1 - t;
          const px = inv * inv * na.x + 2 * inv * t * mx + t * t * nb.x;
          const py = inv * inv * na.y + 2 * inv * t * my + t * t * nb.y;

          const tailT = Math.max(0, Math.min(1, t - 0.075 * p.dir));
          const tailInv = 1 - tailT;
          const tx = tailInv * tailInv * na.x + 2 * tailInv * tailT * mx + tailT * tailT * nb.x;
          const ty = tailInv * tailInv * na.y + 2 * tailInv * tailT * my + tailT * tailT * nb.y;

          const grad = ctx.createLinearGradient(tx, ty, px, py);
          grad.addColorStop(0, 'rgba(24, 198, 160, 0)');
          grad.addColorStop(1, 'rgba(24, 198, 160, 0.78)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.9;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(px, py);
          ctx.stroke();

          ctx.fillStyle = 'rgba(244, 247, 245, 0.9)';
          ctx.beginPath();
          ctx.arc(px, py, 2.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw coordinate vertices and arrival illumination rings
      for (let i = 0; i < scene.nodes.length; i++) {
        const n = scene.nodes[i];
        let proxBoost = 0;
        if (scene.pointer.active) {
          const d = Math.hypot(n.x - scene.pointer.x, n.y - scene.pointer.y);
          if (d < 180) proxBoost = 1 - d / 180;
        }

        const ambientPulse = animateMotion ? 0.08 * (0.5 + 0.5 * Math.sin(timeSec * 1.4 + n.phase)) : 0;
        const totalGlow = Math.min(1, n.glow + proxBoost * 0.75 + ambientPulse);

        if (totalGlow > 0.08) {
          ctx.strokeStyle = `rgba(24, 198, 160, ${(totalGlow * 0.42).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius + 5 + (1 - totalGlow) * 6, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(24, 198, 160, ${(0.3 + totalGlow * 0.58).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + totalGlow * 0.85, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    drawFrameRef.current = drawFrame;
    // Draw immediate initial frame
    drawFrame(0, false);

    let resizeObserver: ResizeObserver | null = null;
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(() => {
        resize();
        drawFrame(0, false);
      });
      resizeObserver.observe(container);
    }

    return () => {
      if (rafIdRef.current) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = 0;
      }
      if (resizeObserver) resizeObserver.disconnect();
      if (!isMobile) {
        window.removeEventListener('pointermove', handlePointerMove);
        container.removeEventListener('pointerleave', handlePointerLeave);
      }
      drawFrameRef.current = null;
      sceneRef.current = null;
    };
  }, []);

  // 2. Pause/Resume rAF cleanly without resetting nodes, pulses, or simulation phase
  useEffect(() => {
    const shouldRun = !reducedMotion && isInView && docVisible;

    if (rafIdRef.current) {
      window.cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = 0;
    }

    if (!shouldRun) {
      if (reducedMotion && drawFrameRef.current) {
        drawFrameRef.current(0, false);
      }
      return;
    }

    const scene = sceneRef.current;
    const minFrameMs = scene?.isMobile ? 38 : 26; // ~26fps mobile, ~38fps desktop
    let lastTime = performance.now();
    let active = true;

    const tick = (now: number) => {
      if (!active) return;
      const elapsed = now - lastTime;
      if (elapsed >= minFrameMs) {
        // Clamp dt so resuming after pause/tab switch never causes a jump
        const dt = Math.min(0.05, Math.max(0.001, elapsed / 1000));
        lastTime = now;
        drawFrameRef.current?.(dt, true);
      }
      rafIdRef.current = window.requestAnimationFrame(tick);
    };

    rafIdRef.current = window.requestAnimationFrame(tick);

    return () => {
      active = false;
      if (rafIdRef.current) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = 0;
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
        className="w-full h-full block opacity-80"
      />
    </div>
  );
}
