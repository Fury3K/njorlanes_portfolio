# Portfolio Revamp Plan — njorlanes_portfolio

## Context

Full visual redesign from scratch — swapping the cyan/purple/navy glassmorphism aesthetic for a **gold/black modern brutalism** approach inspired by the `Sample` folder. All personal content (projects, bio, education, certs) is retained. The **contact form API and SMTP config are never touched** — only the surrounding UI changes.

---

## Design System (Gold/Black)

| Token | Value | CSS Variable |
|---|---|---|
| Background | `#0A0A0A` | `--color-background` |
| Surface | `#111111` | `--color-surface` |
| Surface Elevated | `#1A1A1A` | `--color-surface-elevated` |
| Border | `#1F1F1F` | `--color-border` |
| Border Hover | `#2A2A2A` | `--color-border-hover` |
| Accent (Gold) | `#D4AF37` | `--color-accent` |
| Accent Hover | `#C4A030` | `--color-accent-hover` |
| Accent Muted | `rgba(212,175,55,0.08)` | `--color-accent-muted` |
| Accent Glow | `rgba(212,175,55,0.12)` | `--color-accent-glow` |
| Text Primary | `#FAFAFA` | `--color-text-primary` |
| Text Secondary | `#777777` | `--color-text-secondary` |
| Text Muted | `#444444` | `--color-text-muted` |
| Body Text | `#999999` | `--color-body` |

**Fonts:**
- `Cabinet Grotesk` (700, 800, 900) — Fontshare CDN — display/headings
- `Satoshi` (400, 500, 700) — Fontshare CDN — body
- `JetBrains Mono` — Google Fonts via `next/font` — mono/code

---

## Hard Constraints

1. **NEVER touch** `app/api/contact/route.ts` — Nodemailer + Gmail SMTP stays exactly as-is
2. **NEVER touch** `.env.local` — SMTP credentials untouched
3. **NEVER touch** `netlify.toml`, `next.config.ts`, `package.json`
4. Keep all 4 projects: AudioScholar, Brisa Solei, Cain & Abel, WishPay
5. In `Contact.tsx`: preserve ALL state logic, `handleChange`, `handleSubmit`, `fetch('/api/contact')`, `formRef`, and all form field `name` attributes (`name`, `email`, `message`)

---

## New Files to Create

| File | Purpose |
|---|---|
| `app/lib/gsap.ts` | Central GSAP plugin registration — all components import from here |
| `app/data/projects.ts` | Typed project data array (4 projects) |
| `app/components/BootScreen.tsx` | Retro terminal boot animation (~2s) on page load |
| `app/components/CustomCursor.tsx` | Dual-element gold cursor (dot + ring) with GSAP tracking |
| `app/components/ParticleBackground.tsx` | Canvas 60-particle system with mouse repulsion, gold colors |
| `app/components/Marquee.tsx` | Infinite scrolling tech name strip |
| `app/hooks/useAnimationController.ts` | Master GSAP orchestrator; gated on `bootState === 'complete'` |

---

## Files to Fully Rewrite (UI Only)

| File | Key Changes |
|---|---|
| `app/globals.css` | Full rewrite: gold/black design system, Fontshare import, grain overlay, new utility classes |
| `app/layout.tsx` | Keep only JetBrains Mono from next/font; update metadata; remove DaisyUI theme |
| `app/page.tsx` | Add BootScreen state machine; import all new components; remove inline GSAP blocks |
| `app/components/Navbar.tsx` | Gold accent, scroll progress bar, GSAP smooth scroll, remove DaisyUI dropdown |
| `app/components/Hero.tsx` | 12-col grid layout, SplitText title class, corner-bracket portrait, glow orbs |
| `app/components/About.tsx` | Gold card redesign, ScrambleText heading, section number ghost text |
| `app/components/Skills.tsx` | SkillGroup pattern with `.tech-badge`, same 4 categories |
| `app/components/Projects.tsx` | Sticky-scroll desktop + stacked mobile; data from `projects.ts`; grayscale-to-color |
| `app/components/Contact.tsx` | **UI redesign only** — all form logic/state preserved byte-for-byte |
| `app/components/Footer.tsx` | Gold glowing line on scroll, minimal copyright |

---

## Implementation Order (Dependency-First)

### Step 1 — `app/lib/gsap.ts` (NEW)
Central registration file. Every component imports `gsap` and `ScrollTrigger` from here — never directly from `'gsap'`.

```typescript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, ScrollToPlugin);

export { gsap, ScrollTrigger };
```

---

### Step 2 — `app/data/projects.ts` (NEW)

```typescript
export interface Project {
  number: string;
  title: string;
  description: string;
  image: string;
  badges: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "AudioScholar",
    description: "An AI-powered learning assistant designed to enhance study efficiency using Gemini API.",
    image: "/AudioScholar.png",
    badges: ["React", "Gemini API", "Tailwind"],
    githubUrl: "https://github.com/MasuRii/AudioScholar",
    liveUrl: "https://audioscholar.vercel.app/",
  },
  {
    number: "02",
    title: "Brisa Solei Resort",
    description: "A modern, elegant resort booking web application for seamless reservations.",
    image: "/BrisaSolei.png",
    badges: ["Next.js", "Tailwind", "Full-Stack"],
    githubUrl: "https://github.com/themarneilx/resort-booking",
    liveUrl: "https://brisasolei.netlify.app/",
  },
  {
    number: "03",
    title: "Cain & Abel",
    description: "Entry for the Proweaver Hackathon PromptQuest competition.",
    image: "/CainAndAbel.png",
    badges: ["Hackathon", "PromptQuest"],
    githubUrl: "https://github.com/Fury3K/Cain-and-Abel",
  },
  {
    number: "04",
    title: "WishPay",
    description: "A comprehensive platform for managing and fulfilling wishlist payments.",
    image: "/Wishpay.png",
    badges: ["Web App", "Full-Stack"],
    githubUrl: "https://github.com/Fury3K/wishpayments",
    liveUrl: "https://wishpay.marneilx.org/",
  },
];
```

---

### Step 3 — `app/globals.css` (FULL REWRITE)

Structure:
```css
/* 1. Fontshare CDN imports */
@import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800,900&f[]=satoshi@400,500,700&display=swap');

/* 2. Tailwind base */
@import "tailwindcss";

/* 3. @theme block — all CSS variables */
@theme {
  --font-sans: 'Satoshi', system-ui, sans-serif;
  --font-display: 'Cabinet Grotesk', system-ui, sans-serif;
  --font-mono: var(--font-jetbrains-mono), ui-monospace, monospace;
  /* ... all color tokens from design system table above */
}

/* 4. Base styles — body, ::selection, h1/h2/h3 font-family */
/* 5. Noise grain — body::before with SVG fractal noise at opacity: 0.018 */
/* 6. Custom scrollbar — 4px, gold on hover */
/* 7. Utility classes (see below) */
/* 8. Keyframe animations */
```

**CSS utility classes to define:**

| Class | Description |
|---|---|
| `.scroll-progress` | `position: fixed; top:0; left:0; height:2px; z-index:9998; background: linear-gradient(90deg, #D4AF37, #F0D060)` |
| `.glass-card` | `background: linear-gradient(135deg, rgba(17,17,17,0.9), rgba(26,26,26,0.7)); backdrop-filter: blur(12px); border: 1px solid var(--color-border); border-radius: 0.75rem; transition: 0.4s ease` — hover: border lightens |
| `.section-number` | Large ghost outlined number — `position: absolute; font-display; font-extrabold; font-size: clamp(6rem,15vw,12rem); color: transparent; -webkit-text-stroke: 1px rgba(212,175,55,0.04); user-select: none; pointer-events: none` |
| `.section-label` | `font-mono; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-accent); font-weight: 700` |
| `.accent-line` | `height: 1px; background: linear-gradient(90deg, var(--color-accent), transparent)` |
| `.tech-badge` | `display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border: 1px solid var(--color-border); border-radius: 6px; font-size: 12px; color: var(--color-text-secondary); transition: 0.2s` — hover: `border-[var(--color-accent)]/30; color: var(--color-accent); background: var(--color-accent-muted); translateY(-3px)` |
| `.project-scroll-image` | `filter: grayscale(100%); transition: filter 0.5s, box-shadow 0.5s` — `.is-active`: `filter: grayscale(0%); box-shadow: 0 0 0 2px var(--color-accent), 0 20px 60px rgba(212,175,55,0.15)` |
| `.progress-dot` | `width: 6px; height: 6px; border-radius: 3px; background: var(--color-border); transition: all 0.4s` — `.is-active`: `height: 28px; background: var(--color-accent); box-shadow: 0 0 12px var(--color-accent-glow)` |
| `.form-input` | `width: 100%; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; padding: 12px 16px; color: var(--color-text-primary); outline: none; transition: 0.2s` — focus: `border-color: rgba(212,175,55,0.5); box-shadow: 0 0 0 3px var(--color-accent-muted)` |
| `.social-btn` | `width: 44px; height: 44px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text-secondary); transition: 0.3s` — hover: gold border, gold color, gold shadow, translateY(-3px) |
| `.cursor-dot` | `width: 6px; height: 6px; background: var(--color-accent); border-radius: 50%; position: fixed; pointer-events: none; z-index: 10000; transform: translate(-50%,-50%)` |
| `.cursor-ring` | `width: 36px; height: 36px; border: 1.5px solid rgba(212,175,55,0.6); border-radius: 50%; position: fixed; pointer-events: none; z-index: 9999; transform: translate(-50%,-50%)` |
| `.cursor-block` | `display: inline-block; width: 8px; height: 16px; background: var(--color-accent); animation: blink 1s step-end infinite` |
| `.grid-bg` | `background-image: linear-gradient(rgba(212,175,55,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.015) 1px, transparent 1px); background-size: 80px 80px` |
| `.glow-orb` | `position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none` |
| `.no-scroll` | `overflow: hidden !important; height: 100vh` |

**Keyframes:**
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.animate-marquee { animation: marquee 40s linear infinite; }
.animate-marquee:hover { animation-play-state: paused; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
```

**Remove entirely from old CSS:** `.dot-grid`, `.orb-cyan/violet/pink`, `.text-gradient`, `.glow-text`, `.gradient-border`, `.glow-border`, `.shimmer`, `.magnetic-btn`, `.underline-draw`, `.section-line`, `.scroll-top-btn`, `.tilt-card`, `@keyframes float`, `@keyframes floatSlow`, `@keyframes glowPulse`

---

### Step 4 — `app/layout.tsx` (MODIFY)

- Remove `Outfit` import from `next/font/google` — keep only `JetBrains_Mono`
- Remove `data-theme="dark"` from `<html>` (DaisyUI theme gone)
- Update metadata title/description
- Keep Font Awesome CDN `<link>` in `<head>`
- Body className: remove `font-mono`, keep `antialiased overflow-x-hidden`

```typescript
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Nathan John Orlanes | Full-Stack Developer",
  description: "Full-Stack Developer focused on accessible, pixel-perfect web & mobile applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
```

---

### Step 5 — `app/components/BootScreen.tsx` (NEW)

Retro terminal boot animation. Accepts `onComplete: () => void` prop.

**Boot log lines (customize for Nathan):**
```
"BIOS Date 03/16/26 01:00:00 Ver: 2.0.0"                              delay: 50
"CPU: Intel Core i5-12500H @ 4.50GHz"                                  delay: 100
"Memory Test: 16384K OK"                                               delay: 150
"Detecting Primary Master ... /dev/nvme0n1"                            delay: 250
"Booting from local disk..."                                           delay: 400
"Loading kernel modules for web_deployment..."                         delay: 450
"[ OK ] Loaded node_modules."                                          delay: 475
"[ OK ] Mounted root filesystem."                                      delay: 500
"[ OK ] Started Network Manager."                                      delay: 600
"[ OK ] Loaded modules: Next.js, GSAP, Nodemailer, Tailwind."          delay: 800
"[ OK ] Reached target Graphical Interface."                           delay: 1000
"Initializing NJOrlanes Portfolio v2.0..."                             delay: 1200
"Welcome, User :)"                                                     delay: 1500
```

**Behavior:**
- Terminal prompt: `root@njportfolio:~#`
- `[ OK ]` wrapped in `<span style="color: var(--color-accent)">` via `dangerouslySetInnerHTML`
- Auto-scrolls terminal window to bottom as logs appear
- `onComplete` fires at `totalDelay + 500ms`
- Scanline overlay: `repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px)` at `opacity: 0.012` over the terminal
- Full screen black background, font-mono text in gold/gray

---

### Step 6 — `app/components/CustomCursor.tsx` (NEW)

Dual-element cursor: `.cursor-dot` (6px solid gold) + `.cursor-ring` (36px border circle).

**Logic:**
- `useEffect` adds `mousemove` listener on mount
- GSAP moves `.cursor-dot` instantly (`duration: 0`), `.cursor-ring` with lag (`duration: 0.12, ease: 'power2.out'`)
- `mouseover` on `'a, button, .glass-card, .tech-badge, .social-btn, .project-scroll-image, [data-cursor-hover]'` → ring scales to `1.6`, dot opacity `0`
- `mouseleave` restores scale/opacity
- Hidden on touch: `window.matchMedia('(pointer: coarse)')` → set `display: none`
- Render: `<div className="cursor-dot hidden lg:block" />` + `<div className="cursor-ring hidden lg:block" />`

---

### Step 7 — `app/components/ParticleBackground.tsx` (NEW)

Canvas-based particle system. Copy from Sample exactly — the logic is fully generic.

**Key specs:**
- 60 particles
- Colors: `rgba(212,175,55,opacity)`, `rgba(240,208,96,opacity)`, `rgba(255,255,255,opacity)`
- Mouse repulsion at 80px radius
- Friction-based physics
- `position: fixed; top:0; left:0; z-index: -10; opacity: 0.5`
- Window resize handler + touch support

Place `<ParticleBackground />` in `page.tsx` before `<main>`.

---

### Step 8 — `app/components/Marquee.tsx` (NEW)

Infinite scrolling strip between Skills and Projects sections.

**Tech list:**
```
"Next.js", "React 19", "TypeScript", "Node.js", "Kotlin",
"Tailwind CSS", "GSAP", "Spring Boot", "PostgreSQL", "AWS",
"Firebase", "Android", "Express.js", "Java", "Python"
```

**Structure:**
```tsx
<section className="py-10 border-y border-[var(--color-border)] overflow-hidden relative gs-reveal opacity-0">
  {/* Left fade mask */}
  <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[var(--color-background)] to-transparent z-10" />
  {/* Right fade mask */}
  <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[var(--color-background)] to-transparent z-10" />

  <div className="flex animate-marquee whitespace-nowrap">
    {[...items, ...items].map((item, i) => (
      <span key={i} className="mx-8 font-display font-bold text-xl uppercase tracking-widest text-[var(--color-text-muted)]/20">
        {item}
        <span className="mx-8 text-[var(--color-accent)]/20">♦</span>
      </span>
    ))}
  </div>
</section>
```

---

### Step 9 — `app/hooks/useAnimationController.ts` (NEW)

Master GSAP orchestrator. Only runs when `bootState === 'complete'`.

```typescript
import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/app/lib/gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

export function useAnimationController(bootState: 'booting' | 'fading' | 'complete') {
  useEffect(() => {
    if (bootState !== 'complete') return;

    const ctx = gsap.context(() => {
      // Small delay for DOM to settle
      setTimeout(() => {

        // 1. Hero title — SplitText character reveal
        // Target: .gs-hero-title
        // fromTo: { opacity:0, y:80, rotateX:-60, filter:'blur(6px)' } → { opacity:1, y:0, rotateX:0, filter:'blur(0px)' }
        // stagger: 0.025, duration: 1.2, ease: 'power4.out'

        // 2. Hero stagger reveals
        // Target: .gs-hero-reveal (each element)
        // fromTo: { opacity:0, y:50 } → { opacity:1, y:0 }
        // stagger: 0.12, duration: 1.2, ease: 'power4.out', delay: 0.3

        // 3. ScrambleText on section headings
        // Target: .gs-scramble (each)
        // ScrollTrigger start: 'top 85%'
        // gsap.to(el, { scrambleText: { text: el.textContent, chars: '!<>-_\\/[]{}—=+*^?#01', speed: 0.4 }, duration: 1.5 })

        // 4. Standard scroll reveals
        // Target: .gs-reveal
        // ScrollTrigger batch: fromTo { opacity:0, y:40, scale:0.97 } → { opacity:1, y:0, scale:1 }
        // stagger: 0.03, duration: 1, ease: 'power3.out'

        // 5. Tech badge pop-in
        // Target: .tech-badge (ScrollTrigger batch)
        // fromTo: { opacity:0, scale:0.8 } → { opacity:1, scale:1 }
        // stagger: 0.04, ease: 'back.out(1.7)'

        // 6. Social button stagger
        // Target: .social-btn
        // Same pattern as tech badges

        // 7. Glow orb parallax
        // Target: .glow-orb
        // gsap.to('.glow-orb', { yPercent: -30, ease: 'none', scrollTrigger: { scrub: true } })

      }, 100);
    });

    return () => ctx.revert();
  }, [bootState]);
}
```

---

### Step 10 — `app/components/Navbar.tsx` (FULL REWRITE)

**Design:**
- Logo: `NJ` + `.` (dot in gold) — `font-display font-extrabold text-xl`
- Nav links: `font-mono text-[11px] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]`
- Link number prefix: `text-[var(--color-accent)] mr-1.5` (e.g., `01 Home`)
- "Hire Me" button: `bg-[var(--color-accent-muted)] border border-[var(--color-accent)]/20 text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-background)]`
- Scroll progress bar: inside Navbar, `<div ref={progressRef} className="scroll-progress" style={{ width: '0%' }}>`
- Scrolled state (`scrollY > 50`): add `bg-[var(--color-background)]/80 backdrop-blur-2xl border-b border-[var(--color-border)]/50`
- Mobile: hamburger `useState` toggle — no DaisyUI dropdown

**Nav links:**
```typescript
[
  { label: 'Home',     href: '#home',     num: '01' },
  { label: 'About',    href: '#about',    num: '02' },
  { label: 'Skills',   href: '#skills',   num: '03' },
  { label: 'Projects', href: '#projects', num: '04' },
  { label: 'Contact',  href: '#contact',  num: '05' },
]
```

**Smooth scroll with GSAP ScrollToPlugin:**
```typescript
const handleNavClick = (e, href) => {
  e.preventDefault();
  gsap.to(window, { scrollTo: href, duration: 1.2, ease: 'power3.inOut' });
  setMenuOpen(false);
};
```

---

### Step 11 — `app/components/Hero.tsx` (FULL REWRITE)

**Layout:** 12-column grid — 7 left (content), 5 right (portrait).

**Left side:**
```tsx
<div className="section-label mb-5 gs-hero-reveal opacity-0">&lt;/&gt; Full-Stack Developer</div>
<h1 className="gs-hero-title font-display font-extrabold text-[clamp(3rem,8vw,6.5rem)] leading-[0.88] tracking-[-0.04em] mb-8 opacity-0">
  <span className="text-[var(--color-text-primary)] block">Nathan</span>
  <span className="text-[var(--color-text-primary)] block">John</span>
  <span className="text-[var(--color-accent)] block">Orlanes.</span>
</h1>
<div className="accent-line w-20 mb-8 gs-hero-reveal opacity-0" />
<p className="text-[var(--color-body)] text-[0.9375rem] leading-relaxed max-w-lg mb-10 gs-hero-reveal opacity-0">
  Full-Stack Developer focused on creating accessible, pixel-perfect, and performant web & mobile applications.
</p>
<div className="flex flex-wrap gap-4 gs-hero-reveal opacity-0">
  <a href="#projects" className="px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-background)] text-sm font-bold hover:bg-[var(--color-accent-hover)] transition-all uppercase tracking-widest rounded-lg">
    View My Work →
  </a>
  <a href="/ORLANES_Resume.pdf" download className="px-8 py-3.5 border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm font-bold hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition-all uppercase tracking-widest rounded-lg">
    Download CV ↗
  </a>
</div>
```

**Right side (portrait):**
- Wrapper with `relative` + corner bracket accents (4 absolute `::before`/`::after` divs with gold partial borders)
- `Profile.jpg` as `<Image fill>` with `object-cover`, grayscale → color on hover
- "Available" badge: `absolute top-4 right-4` — pulsing green dot + "Available for work"
- Location: `absolute bottom-4 left-4` — "📍 Mandaue City, PH"

**Background elements:**
- Two `.glow-orb` divs (gold, 600px, top-right and bottom-left)
- `.grid-bg` absolute overlay

---

### Step 12 — `app/components/About.tsx` (FULL REWRITE)

**Section header pattern** (reused across all sections):
```tsx
<div className="relative mb-20 gs-reveal opacity-0">
  <span className="section-number">01</span>
  <div className="relative z-10">
    <div className="section-label mb-3">// About Me</div>
    <h2 className="gs-scramble font-display font-extrabold text-3xl md:text-4xl tracking-tight text-[var(--color-text-primary)]">
      About Me
    </h2>
  </div>
  <div className="accent-line w-32 mt-4" />
</div>
```

**Card grid:** `grid grid-cols-1 md:grid-cols-3 gap-5`
- Bio card: `md:col-span-2 glass-card p-8 md:p-10 gs-reveal opacity-0`
- Education card: `glass-card p-8 md:p-10 gs-reveal opacity-0`
- Certifications card: `md:col-span-3 glass-card p-8 md:p-10 gs-reveal opacity-0`

**Certifications (keep exact links):**
- Proweaver Certificate — link to existing cert URL
- AWS Cloud Architecture — link to existing cert URL
- AWS Cloud Foundations — link to existing cert URL

Each cert row: hover `text-[var(--color-accent)]` + `border-[var(--color-accent)]/20`

**Tech list in bio:** Display as `.tech-badge` spans instead of `<li>` list.

---

### Step 13 — `app/components/Skills.tsx` (FULL REWRITE)

**Section number:** `02`

**Internal SkillGroup component:**
```typescript
function SkillGroup({ number, label, skills }: { number: string; label: string; skills: { icon: string; name: string }[] }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[10px] font-mono px-2 py-0.5 border border-[var(--color-accent)]/20 rounded text-[var(--color-accent)] font-bold">{number}</span>
        <span className="text-[var(--color-text-secondary)] font-bold uppercase tracking-widest text-xs">{label}</span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((s, i) => (
          <span key={i} className="tech-badge"><i className={s.icon} /> {s.name}</span>
        ))}
      </div>
    </div>
  );
}
```

**4 categories (same as current — data preserved):**
- `01` Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML/CSS
- `02` Backend: Node.js, Express.js, Spring Boot, Java, Python, REST APIs
- `03` Tools & Platforms: AWS, Firebase, Git, Docker, Nginx, Vercel, Netlify
- `04` Mobile: Android (Kotlin), React Native

---

### Step 14 — `app/components/Projects.tsx` (FULL REWRITE)

**Section number:** `03`

**Desktop sticky layout (`hidden lg:grid lg:grid-cols-2`):**

Left (sticky, `h-screen flex items-center`):
- Progress dots sidebar (`.progress-dot` + `.is-active`)
- Project number ref: `"01 / 04"` format
- Title ref: `font-display font-extrabold text-4xl xl:text-5xl`
- Description ref: `text-[var(--color-body)] text-[0.9375rem]`
- Tech tags ref: `.project-tag` spans
- GitHub / Live link refs with gold hover

Right (scrolling images):
- Each project: `h-screen flex items-center py-10`
- Image in `.project-scroll-image` wrapper (full bleed, `next/image fill`)
- First project starts with `.is-active` class

**Scroll logic:**
```typescript
// ScrollTrigger on each right image panel
// When image center crosses viewport center → call swapContent(index)
// swapContent fades out refs, updates content, fades back in
// Also updates progress dots (remove/add .is-active)
```

**Mobile stacked (`lg:hidden`):**
Each project as a card with: image (`.project-scroll-image.is-active`), number, title, description, badges, GitHub/live links — all with `.gs-reveal opacity-0`.

---

### Step 15 — `app/components/Contact.tsx` (UI REDESIGN — LOGIC LOCKED)

**Section number:** `04`

**Grid layout:** `grid lg:grid-cols-2 gap-16`

**Left side — contact info:**
```tsx
<h3 className="font-display font-extrabold text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.88] mb-8">
  <span className="text-[var(--color-text-primary)] block">Get In</span>
  <span className="text-[var(--color-accent)] block">Touch.</span>
</h3>
```
- Email/location/phone rows as glass-card hover items with gold icon box
- Social buttons using `.social-btn` class:
  - Facebook: `fa-brands fa-facebook-f` → `https://www.facebook.com/n8thanjohn`
  - Instagram: `fa-brands fa-instagram` → `https://www.instagram.com/nj.orlanes/`
  - GitHub: `fa-brands fa-github` → `https://github.com/Fury3K`
  - CV Download: `fa-solid fa-file-arrow-down` → `/ORLANES_Resume.pdf`

**Right side — form (CRITICAL):**
```tsx
// ALL of this state must stay exactly the same:
const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
const [errorMessage, setErrorMessage] = useState('');
const formRef = useRef<HTMLFormElement>(null);

// handleChange, handleSubmit — preserved byte-for-byte
// fetch('/api/contact') with JSON body — preserved
// name/email/message field names — preserved
// DO NOT add a subject field

// Replace DaisyUI loading spinner with:
// <span className="w-4 h-4 border-2 border-[var(--color-background)]/40 border-t-[var(--color-background)] rounded-full animate-spin" />

// Replace DaisyUI alert with:
// <div className="glass-card p-4 text-[var(--color-accent)]">success message</div>
// <div className="glass-card p-4 text-red-400 border-red-500/30">error message</div>

// Form inputs use .form-input class
// Static <label> above each input (not floating labels)
```

---

### Step 16 — `app/components/Footer.tsx` (FULL REWRITE)

```tsx
// Gold line animated from left via GSAP ScrollTrigger
// <div className="footer-line absolute top-0 left-0 right-0 h-px bg-[var(--color-accent)] opacity-40" style={{ scaleX: 0 }} />

// Content row: Logo | Copyright | Built with
// NJ. | © 2025 Nathan John Orlanes · All rights reserved | Next.js · Tailwind · GSAP
```

---

### Step 17 — `app/page.tsx` (MODIFY)

Replace existing content with:

```typescript
'use client';
import { useState, useEffect } from 'react';
import BootScreen from './components/BootScreen';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useAnimationController } from './hooks/useAnimationController';

type BootState = 'booting' | 'fading' | 'complete';

export default function Home() {
  const [bootState, setBootState] = useState<BootState>('booting');

  useAnimationController(bootState);

  useEffect(() => {
    document.body.style.overflow = bootState !== 'complete' ? 'hidden' : '';
  }, [bootState]);

  const handleBootComplete = () => {
    setBootState('fading');
    setTimeout(() => setBootState('complete'), 500);
  };

  return (
    <>
      {bootState !== 'complete' && (
        <div className={`fixed inset-0 z-[9999] transition-opacity duration-500 ${bootState === 'fading' ? 'opacity-0' : 'opacity-100'}`}>
          <BootScreen onComplete={handleBootComplete} />
        </div>
      )}

      <CustomCursor />
      <ParticleBackground />

      <main className={`transition-opacity duration-1000 ${bootState === 'complete' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Marquee />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
```

---

## Key Pitfalls

1. **GSAP imports:** Always from `@/app/lib/gsap` — never directly from `'gsap'`. Double-registration crashes ScrollTrigger.
2. **DaisyUI purge:** Search entire codebase for: `btn`, `dropdown`, `menu`, `alert`, `loading`, `badge`, `card-body`, `card-title`, `input`, `textarea` (as DaisyUI classes) and replace with custom styling.
3. **`next/image` with `fill`:** Parent must have `position: relative` + explicit height/aspect-ratio set.
4. **ScrambleTextPlugin:** Should be available in GSAP 3.12+ npm install. If import fails, check GSAP version.
5. **Contact form:** Do NOT add a `subject` field — the API in `route.ts` only reads `name`, `email`, `message`.
6. **Portrait image path:** Use `/Profile.jpg` (already in `/public/`). Do not rename it.

---

## Verification Checklist

- [ ] `npm run dev` — starts with no TypeScript errors
- [ ] Boot sequence plays (~2s), fades out, main site appears
- [ ] Custom cursor visible on desktop; hidden on mobile
- [ ] Particles visible behind all content; mouse repels them
- [ ] Navbar: gold progress bar, smooth scroll, "Hire Me" button gold style
- [ ] Hero: character blur-reveal on name, corner brackets on portrait, glow orbs
- [ ] About: ScrambleText on heading, gold `.tech-badge` hover
- [ ] Skills: 4 SkillGroups, tech badges pop in on scroll
- [ ] Marquee: infinite scroll, pauses on hover
- [ ] Projects: desktop sticky left panel swaps on scroll; mobile cards stacked
- [ ] **Contact: fill form → send → real email received at n8thanjohn@gmail.com** ✉️
- [ ] Footer: gold line animates from left on scroll
- [ ] `npm run build` — passes for Netlify deployment
