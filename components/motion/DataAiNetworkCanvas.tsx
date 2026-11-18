'use client';

import React, { useEffect, useRef } from 'react';
import { Locale } from '@/lib/company-data';
import { useReducedMotion, useViewportObserver, useDocumentVisible } from '@/lib/motion';

interface DataAiNetworkCanvasProps {
  locale: Locale;
  activeStage: number;
  onSelectStage?: (stageIdx: number) => void;
}

interface TopologyNode {
  id: string;
  labelEn: string;
  labelAr: string;
  stageIndex: number; // maps to capabilities 0..3 in DataAiSpotlight
  nx: number;
  ny: number;
  x: number;
  y: number;
  phase: number;
  radius: number;
  ringGlow: number;
  isHub?: boolean;
}

interface TopologyEdge {
  from: number;
  to: number;
  bend: number;
  highlight: number;
}

interface EnergyPacket {
  edgeIdx: number;
  t: number;
  speed: number;
  dir: 1 | -1;
}

const DOMAIN_NODES: Omit<TopologyNode, 'x' | 'y' | 'ringGlow'>[] = [
  {
    id: 'data-eng',
    labelEn: 'Data Engineering',
    labelAr: 'هندسة البيانات',
    stageIndex: 2,
    nx: 0.19,
    ny: 0.28,
    phase: 0.2,
    radius: 6.5,
  },
  {
    id: 'power-bi',
    labelEn: 'Analytics & Power BI',
    labelAr: 'التحليلات و Power BI',
    stageIndex: 1,
    nx: 0.52,
    ny: 0.18,
    phase: 1.4,
    radius: 7,
  },
  {
    id: 'ai-core',
    labelEn: 'Artificial Intelligence',
    labelAr: 'الذكاء الاصطناعي',
    stageIndex: 3,
    nx: 0.80,
    ny: 0.30,
    phase: 2.6,
    radius: 8,
    isHub: true,
  },
  {
    id: 'enterprise',
    labelEn: 'Enterprise Systems',
    labelAr: 'الأنظمة المؤسسية',
    stageIndex: 0,
    nx: 0.23,
    ny: 0.72,
    phase: 3.5,
    radius: 6.5,
  },
  {
    id: 'automation',
    labelEn: 'RPA Automation',
    labelAr: 'الأتمتة الذكية',
    stageIndex: 3,
    nx: 0.56,
    ny: 0.62,
    phase: 4.3,
    radius: 7,
  },
  {
    id: 'digital-tx',
    labelEn: 'Digital Transformation',
    labelAr: 'التحول الرقمي',
    stageIndex: 0,
    nx: 0.83,
    ny: 0.76,
    phase: 5.2,
    radius: 7.5,
    isHub: true,
  },
];

const DOMAIN_EDGES: Omit<TopologyEdge, 'highlight'>[] = [
  { from: 0, to: 1, bend: -24 },
  { from: 0, to: 3, bend: -18 },
  { from: 0, to: 4, bend: 20 },
  { from: 1, to: 2, bend: -22 },
  { from: 1, to: 4, bend: 14 },
  { from: 2, to: 4, bend: -20 },
  { from: 2, to: 5, bend: 22 },
  { from: 3, to: 4, bend: 18 },
  { from: 3, to: 1, bend: -28 },
  { from: 4, to: 5, bend: -16 },
];

export default function DataAiNetworkCanvas({
  locale,
  activeStage,
  onSelectStage,
}: DataAiNetworkCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeStageRef = useRef(activeStage);
  const onSelectRef = useRef(onSelectStage);

  activeStageRef.current = activeStage;
  onSelectRef.current = onSelectStage;

  const reducedMotion = useReducedMotion();
  const docVisible = useDocumentVisible();
  const { isInView } = useViewportObserver(containerRef, {
    rootMargin: '80px 0px',
    threshold: 0.05,
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = container.clientWidth || 560;
    let height = container.clientHeight || 360;
    const isMobile = width < 640;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);

    const resize = () => {
      width = container.clientWidth || 560;
      height = container.clientHeight || 360;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const nodes: TopologyNode[] = DOMAIN_NODES.map((n) => ({
      ...n,
      x: n.nx * width,
      y: n.ny * height,
      ringGlow: 0,
    }));

    const edges: TopologyEdge[] = DOMAIN_EDGES.map((e) => ({
      ...e,
      highlight: 0,
    }));

    // Subtle secondary relay vertices for visual depth (unlabeled micro-nodes)
    const relayPoints = [
      { nx: 0.37, ny: 0.44, phase: 0.9 },
      { nx: 0.67, ny: 0.43, phase: 2.1 },
      { nx: 0.41, ny: 0.82, phase: 3.8 },
    ];

    const packets: EnergyPacket[] = [];
    const packetCount = isMobile ? 5 : 9;
    for (let i = 0; i < packetCount; i++) {
      packets.push({
        edgeIdx: i % edges.length,
        t: (i / packetCount) % 1,
        speed: 0.24 + (i % 4) * 0.05,
        dir: i % 3 === 0 ? -1 : 1,
      });
    }

    let hoveredIdx = -1;
    let activation = reducedMotion ? 1 : 0;
    let highlightCooldown = 1.6;

    const updateHover = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const px = clientX - rect.left;
      const py = clientY - rect.top;
      let nearest = -1;
      let minDist = 44;
      for (let i = 0; i < nodes.length; i++) {
        const d = Math.hypot(nodes[i].x - px, nodes[i].y - py);
        if (d < minDist) {
          minDist = d;
          nearest = i;
        }
      }
      hoveredIdx = nearest;
      canvas.style.cursor = nearest >= 0 ? 'pointer' : 'default';
    };

    const handlePointerMove = (e: PointerEvent) => {
      updateHover(e.clientX, e.clientY);
    };

    const handlePointerLeave = () => {
      hoveredIdx = -1;
      canvas.style.cursor = 'default';
    };

    const handleClick = (e: MouseEvent) => {
      updateHover(e.clientX, e.clientY);
      if (hoveredIdx >= 0 && onSelectRef.current) {
        onSelectRef.current(nodes[hoveredIdx].stageIndex);
      }
    };

    canvas.addEventListener('pointermove', handlePointerMove, { passive: true });
    canvas.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    canvas.addEventListener('click', handleClick);

    let resizeObserver: ResizeObserver | null = null;
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(() => resize());
      resizeObserver.observe(container);
    }

    const computeCurveControl = (e: TopologyEdge) => {
      const na = nodes[e.from];
      const nb = nodes[e.to];
      const mx = (na.x + nb.x) * 0.5;
      const my = (na.y + nb.y) * 0.5;
      const dx = nb.x - na.x;
      const dy = nb.y - na.y;
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;
      return {
        cx: mx + nx * e.bend,
        cy: my + ny * e.bend,
      };
    };

    const drawFrame = (timeSec: number, dt: number) => {
      ctx.clearRect(0, 0, width, height);

      if (activation < 1) {
        activation = Math.min(1, activation + dt * 1.15);
      }

      const currentStage = activeStageRef.current;

      // Update node positions with subtle breathing motion
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const amp = isMobile ? 3.5 : 6;
        const bx = reducedMotion ? 0 : Math.sin(timeSec * 0.55 + n.phase) * amp;
        const by = reducedMotion ? 0 : Math.cos(timeSec * 0.48 + n.phase * 1.2) * (amp * 0.8);
        n.x = n.nx * width + bx;
        n.y = n.ny * height + by;
        n.ringGlow = Math.max(0, n.ringGlow - dt * 1.35);
      }

      // Occasional connection pulse highlighting
      if (!reducedMotion) {
        highlightCooldown -= dt;
        if (highlightCooldown <= 0) {
          const randomEdge = edges[Math.floor(Math.random() * edges.length)];
          randomEdge.highlight = 1;
          highlightCooldown = 1.4 + Math.random() * 1.4;
        }
      }

      // Subtle background architectural grid arcs
      ctx.save();
      ctx.strokeStyle = 'rgba(24, 198, 160, 0.06)';
      ctx.lineWidth = 1;
      for (let r = 1; r <= 3; r++) {
        ctx.beginPath();
        ctx.arc(width * 0.52, height * 0.5, Math.min(width, height) * (0.24 * r), 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // Secondary micro-relay links
      for (let i = 0; i < relayPoints.length; i++) {
        const rp = relayPoints[i];
        const rx = rp.nx * width + (reducedMotion ? 0 : Math.sin(timeSec * 0.4 + rp.phase) * 4);
        const ry = rp.ny * height + (reducedMotion ? 0 : Math.cos(timeSec * 0.45 + rp.phase) * 4);
        const target = nodes[(i * 2) % nodes.length];
        ctx.strokeStyle = `rgba(23, 75, 62, ${(0.35 * activation).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();

        ctx.fillStyle = `rgba(24, 198, 160, ${(0.25 * activation).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(rx, ry, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw curved primary topology edges
      for (let i = 0; i < edges.length; i++) {
        const e = edges[i];
        e.highlight = Math.max(0, e.highlight - dt * 0.85);
        const na = nodes[e.from];
        const nb = nodes[e.to];
        const { cx, cy } = computeCurveControl(e);

        const stageMatch = na.stageIndex === currentStage || nb.stageIndex === currentStage;
        const hoverMatch = hoveredIdx === e.from || hoveredIdx === e.to;

        const baseAlpha = stageMatch ? 0.42 : 0.19;
        const totalAlpha = Math.min(0.88, (baseAlpha + e.highlight * 0.36 + (hoverMatch ? 0.35 : 0)) * activation);

        ctx.strokeStyle = `rgba(24, 198, 160, ${totalAlpha.toFixed(3)})`;
        ctx.lineWidth = stageMatch || hoverMatch ? 1.65 : 1.05;
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.quadraticCurveTo(cx, cy, nb.x, nb.y);
        ctx.stroke();
      }

      // Advance & draw traveling light packets (ION-inspired)
      if (!reducedMotion && activation > 0.25) {
        for (let i = 0; i < packets.length; i++) {
          const p = packets[i];
          const e = edges[p.edgeIdx];
          const na = nodes[e.from];
          const nb = nodes[e.to];
          const stageBoost = na.stageIndex === currentStage || nb.stageIndex === currentStage ? 1.35 : 1;

          p.t += p.speed * stageBoost * dt * p.dir;

          if (p.t > 1 || p.t < 0) {
            const targetIdx = p.t > 1 ? e.to : e.from;
            nodes[targetIdx].ringGlow = 1;
            // Pick an edge connected to targetIdx for smooth signal continuity
            const candidates: number[] = [];
            for (let k = 0; k < edges.length; k++) {
              if (edges[k].from === targetIdx || edges[k].to === targetIdx) {
                candidates.push(k);
              }
            }
            const nextEdgeIdx = candidates.length > 0
              ? candidates[Math.floor(Math.random() * candidates.length)]
              : Math.floor(Math.random() * edges.length);
            p.edgeIdx = nextEdgeIdx;
            if (edges[nextEdgeIdx].from === targetIdx) {
              p.dir = 1;
              p.t = 0;
            } else {
              p.dir = -1;
              p.t = 1;
            }
          }

          const activeEdge = edges[p.edgeIdx];
          const pA = nodes[activeEdge.from];
          const pB = nodes[activeEdge.to];
          const { cx, cy } = computeCurveControl(activeEdge);

          const t = p.t;
          const inv = 1 - t;
          const px = inv * inv * pA.x + 2 * inv * t * cx + t * t * pB.x;
          const py = inv * inv * pA.y + 2 * inv * t * cy + t * t * pB.y;

          const tailT = Math.max(0, Math.min(1, t - 0.1 * p.dir));
          const tInv = 1 - tailT;
          const tx = tInv * tInv * pA.x + 2 * tInv * tailT * cx + tailT * tailT * pB.x;
          const ty = tInv * tInv * pA.y + 2 * tInv * tailT * cy + tailT * tailT * pB.y;

          const grad = ctx.createLinearGradient(tx, ty, px, py);
          grad.addColorStop(0, 'rgba(24, 198, 160, 0)');
          grad.addColorStop(1, 'rgba(24, 198, 160, 0.92)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2.4;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(px, py);
          ctx.stroke();

          ctx.fillStyle = '#F4F7F5';
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw domain nodes & bilingual labels
      const isAr = locale === 'ar';
      ctx.font = isAr
        ? '600 11px system-ui, -apple-system, sans-serif'
        : '600 10.5px ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const isStageActive = n.stageIndex === currentStage;
        const isHovered = hoveredIdx === i;
        const emphasis = isHovered ? 1 : isStageActive ? 0.85 : 0.45;

        // Outer activation / arrival pulse ring
        const pulseRadius = n.radius + 7 + (1 - n.ringGlow) * 7;
        if (n.ringGlow > 0.04 || isStageActive || isHovered) {
          const ringAlpha = Math.max(
            n.ringGlow * 0.55,
            isHovered ? 0.65 : isStageActive ? 0.34 : 0
          ) * activation;
          ctx.strokeStyle = `rgba(24, 198, 160, ${ringAlpha.toFixed(3)})`;
          ctx.lineWidth = 1.25;
          ctx.beginPath();
          ctx.arc(n.x, n.y, isStageActive ? n.radius + 6 : pulseRadius, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Core dark backing disc for crisp contrast over background lines
        ctx.fillStyle = '#071C17';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 2, 0, Math.PI * 2);
        ctx.fill();

        // Node fill
        ctx.fillStyle = isStageActive || isHovered
          ? `rgba(24, 198, 160, ${activation.toFixed(3)})`
          : `rgba(18, 169, 137, ${(0.55 * activation).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();

        // Crisp node label pill
        const label = isAr ? n.labelAr : n.labelEn;
        const metrics = ctx.measureText(label);
        const padX = 8;
        const pillW = metrics.width + padX * 2;
        const pillH = 20;
        const placeAbove = n.ny > 0.55;
        const ly = placeAbove ? n.y - n.radius - 18 : n.y + n.radius + 18;
        const lx = Math.max(pillW * 0.5 + 8, Math.min(width - pillW * 0.5 - 8, n.x));

        ctx.fillStyle = `rgba(7, 28, 23, ${(0.88 * activation).toFixed(3)})`;
        ctx.strokeStyle = isStageActive || isHovered
          ? `rgba(24, 198, 160, ${(0.7 * activation).toFixed(3)})`
          : `rgba(23, 75, 62, ${(0.85 * activation).toFixed(3)})`;
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.roundRect(lx - pillW * 0.5, ly - pillH * 0.5, pillW, pillH, 5);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isStageActive || isHovered
          ? `rgba(244, 247, 245, ${activation.toFixed(3)})`
          : `rgba(184, 199, 194, ${(0.85 * emphasis + 0.15).toFixed(3)})`;
        ctx.textAlign = 'center';
        ctx.fillText(label, lx, ly + 0.5);
      }
    };

    drawFrame(0, 0.02);

    let rafId = 0;
    let lastTime = performance.now();
    const minFrameMs = isMobile ? 34 : 22; // ~30fps mobile, ~45fps desktop

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
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, [locale, reducedMotion, isInView, docVisible]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[260px] sm:h-[310px] rounded-lg border border-white/10 bg-[#071C17]/75 backdrop-blur-sm overflow-hidden"
      aria-label={
        locale === 'ar'
          ? 'مخطط تفاعلي يوضح ترابط هندسة البيانات والذكاء الاصطناعي والأتمتة والتحول الرقمي'
          : 'Interactive architectural network showing connections across Data Engineering, Analytics, AI, Automation, Enterprise Systems, and Digital Transformation'
      }
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
