import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(fullPath);
    }
  }
  return arrayOfFiles;
}

test('Priority 1: Zero legacy burgundy/red brand tokens remain across app, components, lib, and public assets', () => {
  const dirs = ['app', 'components', 'lib', 'public'];
  const forbiddenPatterns = [
    /#6B1426/i,
    /#82182E/i,
    /#E64866/i,
    /#9E2448/i,
    /#7F1D1D/i,
    /#800020/i,
    /#991B1B/i,
    /107,\s*20,\s*38/,
    /burgundy/i,
    /maroon/i,
    /crimson/i,
    /rose-/i,
  ];

  const violations = [];

  for (const dir of dirs) {
    const files = getAllFiles(path.join(ROOT, dir));
    for (const file of files) {
      const relPath = path.relative(ROOT, file);
      if (relPath === 'public/mustasharcom-logo-original-backup.svg') continue;
      if (!/\.(tsx?|css|svg|mjs|json)$/i.test(relPath)) continue;

      const content = fs.readFileSync(file, 'utf8');
      for (const regex of forbiddenPatterns) {
        if (regex.test(content)) {
          violations.push(`${relPath} matched ${regex}`);
        }
      }

      // Check red-* classes (only allowed in ContactForm.tsx semantic error banner)
      if (/red-\d{2,3}/.test(content) && relPath !== 'components/forms/ContactForm.tsx') {
        violations.push(`${relPath} matched red-* outside semantic error state`);
      }
    }
  }

  assert.deepEqual(violations, [], `Found forbidden red/burgundy brand tokens:\n${violations.join('\n')}`);
});

test('Priority 1: Centralized green/teal palette and logo assets are configured with backup preserved', () => {
  const globalsCss = fs.readFileSync(path.join(ROOT, 'app/globals.css'), 'utf8');
  const requiredTokens = [
    '#071C17',
    '#0B2922',
    '#174B3E',
    '#18C6A0',
    '#12A989',
    '#F7F5F0',
    '#FFFFFF',
    '#17211D',
    '#697671',
  ];
  for (const token of requiredTokens) {
    assert.ok(globalsCss.includes(token), `Expected app/globals.css to define token ${token}`);
  }

  // Backup of original logo exists
  assert.ok(
    fs.existsSync(path.join(ROOT, 'public/mustasharcom-logo-original-backup.svg')),
    'Expected backup of original logo at public/mustasharcom-logo-original-backup.svg'
  );

  // Active logo assets use green/teal palette
  const logoTsx = fs.readFileSync(path.join(ROOT, 'components/ui/Logo.tsx'), 'utf8');
  assert.ok(logoTsx.includes('#18C6A0') && logoTsx.includes('#174B3E'), 'Logo.tsx must use green/teal palette');
  assert.ok(!logoTsx.includes('#6B1426'), 'Logo.tsx must not contain #6B1426');

  const logoSvg = fs.readFileSync(path.join(ROOT, 'public/mustasharcom-logo.svg'), 'utf8');
  assert.ok(logoSvg.includes('#18C6A0') && logoSvg.includes('#174B3E'), 'mustasharcom-logo.svg must use green/teal palette');
  assert.ok(!logoSvg.includes('#6B1426'), 'mustasharcom-logo.svg must not contain #6B1426');
});

test('Priority 2: ServicesCarousel implements all 6 practices, prev/next boundary states, RTL keyboard navigation, drag, and native scroll-snap without wheel hijacking', () => {
  const carouselCode = fs.readFileSync(path.join(ROOT, 'components/sections/ServicesCarousel.tsx'), 'utf8');

  // Verify Prev/Next boundary disabled state logic
  assert.ok(carouselCode.includes('setCanScrollPrev(closestIdx > 0)'), 'Expected canScrollPrev boundary check');
  assert.ok(carouselCode.includes('setCanScrollNext(closestIdx < total - 1)'), 'Expected canScrollNext boundary check');
  assert.ok(carouselCode.includes('disabled={!canScrollPrev}'), 'Prev button must be disabled at start boundary');
  assert.ok(carouselCode.includes('disabled={!canScrollNext}'), 'Next button must be disabled at end boundary');

  // Verify native CSS scroll-snap and onScroll rAF synchronization
  assert.ok(carouselCode.includes('snap-x snap-mandatory'), 'Track must use native horizontal scroll-snap');
  assert.ok(carouselCode.includes('onScroll={handleTrackScroll}'), 'Track must synchronize active index on scroll');
  assert.ok(carouselCode.includes('requestAnimationFrame'), 'Scroll handler must be throttled with requestAnimationFrame');

  // Verify keyboard navigation with RTL support
  assert.ok(carouselCode.includes("e.key === 'ArrowRight'") && carouselCode.includes("e.key === 'ArrowLeft'"), 'Must support ArrowLeft and ArrowRight');
  assert.ok(carouselCode.includes("e.key === 'Home'") && carouselCode.includes("e.key === 'End'"), 'Must support Home and End keys');
  assert.ok(carouselCode.includes('if (isRtl)') && carouselCode.includes('handlePrev()') && carouselCode.includes('handleNext()'), 'Must invert arrow direction in Arabic RTL');

  // Verify vertical scroll protection (no onWheel hijacking, touchAction pan-x pan-y)
  assert.ok(!carouselCode.includes('onWheel'), 'Carousel must not hijack vertical wheel scrolling');
  assert.ok(carouselCode.includes("touchAction: 'pan-x pan-y'"), 'Carousel must allow both horizontal and vertical touch panning');
});

test('Priority 3: SectionReveal defaults to visible on SSR, replays via dual-observer hysteresis, and respects prefers-reduced-motion', () => {
  const revealCode = fs.readFileSync(path.join(ROOT, 'components/ui/SectionReveal.tsx'), 'utf8');
  const globalsCss = fs.readFileSync(path.join(ROOT, 'app/globals.css'), 'utf8');

  // Default SSR state is visible ('initial' renders section-reveal-visible)
  assert.ok(
    revealCode.includes("useState<'initial' | 'hidden' | 'visible'>('initial')"),
    'SectionReveal must initialize in visible SSR state'
  );
  assert.ok(
    revealCode.includes('useReducedMotion'),
    'SectionReveal must check prefers-reduced-motion via useReducedMotion'
  );
  assert.ok(revealCode.includes('enterObserver') && revealCode.includes('exitObserver'), 'SectionReveal must use dual-observer hysteresis for repeatable reveals');
  assert.ok(!revealCode.includes('.unobserve('), 'SectionReveal must not unobserve after first reveal so animations can replay');
  assert.ok(revealCode.includes("rootMargin: '96px 0px 96px 0px'"), 'Exit observer must use a 96px buffer to prevent boundary flickering');

  // CSS staggered child classes & reduced motion media query
  assert.ok(globalsCss.includes('.section-reveal-hidden .reveal-item'), 'globals.css must define nested .reveal-item hidden state');
  assert.ok(globalsCss.includes('.section-reveal-visible .reveal-item'), 'globals.css must define nested .reveal-item visible state');
  assert.ok(globalsCss.includes('@media (prefers-reduced-motion: reduce)'), 'globals.css must include prefers-reduced-motion media query');
});

test('Priority 5 & 7: Live HTTP SSR verification across English and Arabic routes', async () => {
  const routes = [
    '/',
    '/ar',
    '/about',
    '/ar/about',
    '/services',
    '/ar/services',
    '/services/data-ai',
    '/ar/services/data-ai',
    '/projects',
    '/ar/projects',
    '/quality-compliance',
    '/ar/quality-compliance',
    '/contact',
    '/ar/contact',
    '/privacy',
    '/terms',
  ];

  for (const route of routes) {
    const res = await fetch(`http://localhost:3000${route}`);
    assert.equal(res.status, 200, `Expected HTTP 200 for ${route}, got ${res.status}`);
    const html = await res.text();
    assert.ok(!html.includes('#6B1426'), `Rendered HTML for ${route} must not contain legacy #6B1426`);
    assert.ok(!html.includes('#82182E'), `Rendered HTML for ${route} must not contain legacy #82182E`);
  }
});

test('Priority 8: Motion foundation (lib/motion.ts) provides reduced-motion, viewport, and tab visibility hooks without hydration mismatches', () => {
  const motionLib = fs.readFileSync(path.join(ROOT, 'lib/motion.ts'), 'utf8');
  assert.ok(motionLib.includes('export function useReducedMotion'), 'Must export useReducedMotion');
  assert.ok(motionLib.includes('export function useViewportObserver'), 'Must export useViewportObserver');
  assert.ok(motionLib.includes('export function useDocumentVisible'), 'Must export useDocumentVisible');
  assert.ok(motionLib.includes('useSyncExternalStore'), 'Must use useSyncExternalStore for SSR-safe subscriptions');
  assert.ok(motionLib.includes('IntersectionObserver'), 'Must use IntersectionObserver for viewport visibility');
});

test('Priority 9: Hero & Data-AI Canvas visualizations are original, lazy-loaded, offscreen-suspended, cleaned up, and free of fake telemetry', () => {
  const heroSection = fs.readFileSync(path.join(ROOT, 'components/sections/HeroSection.tsx'), 'utf8');
  const heroLayer = fs.readFileSync(path.join(ROOT, 'components/motion/HeroTechLayer.tsx'), 'utf8');
  const heroCanvas = fs.readFileSync(path.join(ROOT, 'components/motion/HeroTechCanvas.tsx'), 'utf8');
  const spotlight = fs.readFileSync(path.join(ROOT, 'components/sections/DataAiSpotlight.tsx'), 'utf8');
  const networkCanvas = fs.readFileSync(path.join(ROOT, 'components/motion/DataAiNetworkCanvas.tsx'), 'utf8');

  // HeroSection must remain a Server Component (no 'use client') and render static SVG + HeroTechLayer
  assert.ok(!heroSection.includes("'use client'"), 'HeroSection.tsx must remain a Server Component');
  assert.ok(heroSection.includes('<HeroTechLayer'), 'HeroSection must include idle-deferred HeroTechLayer');

  // HeroTechLayer defers mounting and lazy loads HeroTechCanvas client-only
  assert.ok(heroLayer.includes('dynamic(() => import('), 'HeroTechLayer must dynamically import HeroTechCanvas');
  assert.ok(heroLayer.includes('ssr: false'), 'HeroTechCanvas must use ssr: false');
  assert.ok(heroLayer.includes('requestIdleCallback'), 'HeroTechLayer must defer initialization with requestIdleCallback');

  // DataAiSpotlight lazy loads DataAiNetworkCanvas only when approaching viewport, with StaticNetworkFallback
  assert.ok(spotlight.includes('dynamic(() => import('), 'DataAiSpotlight must dynamically import DataAiNetworkCanvas');
  assert.ok(spotlight.includes('hasEntered'), 'DataAiSpotlight must gate DataAiNetworkCanvas on viewport hasEntered');
  assert.ok(spotlight.includes('<StaticNetworkFallback />'), 'DataAiSpotlight must render static fallback prior to entry');

  // Both canvases check reducedMotion, isInView, docVisible and perform full cleanup
  for (const [name, code] of [
    ['HeroTechCanvas', heroCanvas],
    ['DataAiNetworkCanvas', networkCanvas],
  ]) {
    assert.ok(code.includes('useReducedMotion'), `${name} must use useReducedMotion`);
    assert.ok(code.includes('useViewportObserver'), `${name} must use useViewportObserver`);
    assert.ok(code.includes('useDocumentVisible'), `${name} must use useDocumentVisible`);
    assert.ok(code.includes('!reducedMotion && isInView && docVisible'), `${name} must suspend loop when reduced-motion/offscreen/hidden`);
    assert.ok(code.includes('cancelAnimationFrame'), `${name} must cancel rAF on cleanup`);
    assert.ok(code.includes('resizeObserver.disconnect'), `${name} must disconnect ResizeObserver on cleanup`);
    assert.ok(code.includes('removeEventListener'), `${name} must remove event listeners on cleanup`);
    assert.ok(!/#6B1426|#82182E/i.test(code), `${name} must not contain legacy red/burgundy colors`);
    assert.ok(!/THREE|WebGLRenderer/i.test(code), `${name} must use lightweight Canvas 2D without Three.js dependency bloat`);
  }

  // Ensure Data & AI Network Canvas uses domain-authentic labels and zero fabricated telemetry strings
  const domainLabels = [
    'Data Engineering',
    'Analytics & Power BI',
    'Artificial Intelligence',
    'RPA Automation',
    'Enterprise Systems',
    'Digital Transformation',
  ];
  for (const label of domainLabels) {
    assert.ok(networkCanvas.includes(label), `DataAiNetworkCanvas must include domain node: ${label}`);
  }
  const strippedUi = (networkCanvas + spotlight).replace(/\/\/.*$/gm, '');
  assert.ok(!/\b(FPS|LATENCY|UPTIME|LIVE TELEMETRY)\b|99\.9%/i.test(strippedUi), 'Must not include fabricated operational telemetry');
});

test('Priority 10: Continuous canvas persistence (pause/resume without reset) and CSS scroll-driven effects with reduced-motion disables', () => {
  const heroCanvas = fs.readFileSync(path.join(ROOT, 'components/motion/HeroTechCanvas.tsx'), 'utf8');
  const networkCanvas = fs.readFileSync(path.join(ROOT, 'components/motion/DataAiNetworkCanvas.tsx'), 'utf8');
  const globalsCss = fs.readFileSync(path.join(ROOT, 'app/globals.css'), 'utf8');

  // Persistent scene state + clamped dt + rafIdRef guard across pause/resume
  for (const [name, code] of [
    ['HeroTechCanvas', heroCanvas],
    ['DataAiNetworkCanvas', networkCanvas],
  ]) {
    assert.ok(code.includes('sceneRef'), `${name} must hold persistent scene state in sceneRef`);
    assert.ok(code.includes('rafIdRef'), `${name} must guard rAF handle via rafIdRef`);
    assert.ok(code.includes('Math.min(0.05'), `${name} must clamp delta-time on resume`);
    assert.ok(code.includes('}, [reducedMotion, isInView, docVisible]);'), `${name} must separate pause/resume loop effect from scene setup`);
  }

  // HeroTechCanvas includes drifting ambient particles
  assert.ok(heroCanvas.includes('ambientParticles') || heroCanvas.includes('AmbientParticle'), 'HeroTechCanvas must render continuous ambient particles');

  // CSS scroll-driven compositor effects and reduced-motion override
  assert.ok(globalsCss.includes('@supports (animation-timeline: view())'), 'globals.css must feature-detect CSS scroll-driven animations');
  assert.ok(globalsCss.includes('.scroll-parallax-media'), 'globals.css must define .scroll-parallax-media');
  assert.ok(globalsCss.includes('.scroll-contour-depth'), 'globals.css must define .scroll-contour-depth');
  assert.ok(globalsCss.includes('.scroll-accent-progress'), 'globals.css must define .scroll-accent-progress');
});

test('Priority 11: ScrollToNextButton, ScrollJourneyLine, HeadingH3, and BlurLetterReveal are properly implemented and integrated', () => {
  const scrollBtn = fs.readFileSync(path.join(ROOT, 'components/ui/ScrollToNextButton.tsx'), 'utf8');
  const journeyLine = fs.readFileSync(path.join(ROOT, 'components/motion/ScrollJourneyLine.tsx'), 'utf8');
  const headingH3 = fs.readFileSync(path.join(ROOT, 'components/ui/HeadingH3.tsx'), 'utf8');
  const blurReveal = fs.readFileSync(path.join(ROOT, 'components/motion/BlurLetterReveal.tsx'), 'utf8');
  const homeView = fs.readFileSync(path.join(ROOT, 'components/pages/HomePageView.tsx'), 'utf8');
  const heroSection = fs.readFileSync(path.join(ROOT, 'components/sections/HeroSection.tsx'), 'utf8');
  const globalsCss = fs.readFileSync(path.join(ROOT, 'app/globals.css'), 'utf8');

  // ScrollToNextButton checks
  assert.ok(scrollBtn.includes('IntersectionObserver'), 'ScrollToNextButton must reveal via IntersectionObserver');
  assert.ok(scrollBtn.includes('scrollIntoView'), 'ScrollToNextButton must smoothly scroll to target section');
  assert.ok(scrollBtn.includes('useReducedMotion'), 'ScrollToNextButton must respect reduced motion');

  // ScrollJourneyLine checks
  assert.ok(journeyLine.includes('getTotalLength'), 'ScrollJourneyLine must compute SVG path length');
  assert.ok(journeyLine.includes('strokeDashoffset'), 'ScrollJourneyLine must animate SVG strokeDashoffset on scroll');
  assert.ok(journeyLine.includes('getPointAtLength'), 'ScrollJourneyLine must position tracer along SVG path');
  assert.ok(journeyLine.includes('requestAnimationFrame'), 'ScrollJourneyLine must throttle scroll updates with rAF');
  assert.ok(homeView.includes('<ScrollJourneyLine'), 'HomePageView must render ScrollJourneyLine');

  // HeadingH3 checks
  assert.ok(headingH3.includes('<h3'), 'HeadingH3 must render semantic <h3> element');
  assert.ok(headingH3.includes('tracking-[-0.0'), 'HeadingH3 must define tight letter tracking');
  assert.ok(headingH3.includes('transition-colors'), 'HeadingH3 must include smooth color transitions');

  // BlurLetterReveal checks
  assert.ok(blurReveal.includes('ARABIC_SCRIPT_REGEX'), 'BlurLetterReveal must preserve Arabic cursive script joining');
  assert.ok(blurReveal.includes('sr-only'), 'BlurLetterReveal must expose clean screen-reader text');
  assert.ok(blurReveal.includes('useReducedMotion'), 'BlurLetterReveal must honor prefers-reduced-motion');
  assert.ok(globalsCss.includes('@keyframes blurLetterIn'), 'globals.css must define blurLetterIn keyframes');
  assert.ok(globalsCss.includes('filter: blur('), 'globals.css must animate blur reduction');
  assert.ok(heroSection.includes('<BlurLetterReveal'), 'HeroSection must integrate BlurLetterReveal');
  assert.ok(heroSection.includes('<ScrollToNextButton'), 'HeroSection must integrate ScrollToNextButton');
  assert.ok(heroSection.includes('<HeadingH3'), 'HeroSection must integrate HeadingH3');
});


