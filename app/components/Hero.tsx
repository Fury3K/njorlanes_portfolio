"use client";

import React from "react";
import Greeting from "./Greeting";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-start pt-[15vh] md:pt-[18vh] overflow-hidden"
    >
      {/* Background effects */}
      <div className="glow-orb w-[700px] h-[700px] bg-white opacity-[0.025] -top-[10%] left-[50%] -translate-x-1/2" />
      <div className="glow-orb w-[400px] h-[400px] bg-white opacity-[0.015] bottom-[20%] left-[10%]" />
      <div className="glow-orb w-[400px] h-[400px] bg-white opacity-[0.015] bottom-[20%] right-[10%]" />

      {/* Centered text content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Large typing greeting */}
        <div className="mb-6 gs-hero-reveal opacity-0">
          <span className="greeting-text font-display font-extrabold text-[clamp(3rem,10vw,7rem)] leading-[1] tracking-[-0.03em] text-[var(--color-text-primary)]">
            <Greeting />
          </span>
        </div>

        {/* Subtitle with name highlight */}
        <p className="gs-hero-reveal opacity-0 font-display font-bold text-[clamp(1.1rem,3vw,2rem)] leading-[1.3] tracking-[-0.02em] text-[var(--color-text-primary)] max-w-3xl mx-auto">
          I&apos;m{" "}
          <span className="name-highlight">
            <span>Nathan</span>
          </span>
          . Full-stack developer creating accessible, pixel-perfect web &amp; mobile experiences.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 gs-hero-reveal opacity-0">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[var(--color-background)] text-sm font-semibold transition-all duration-300 uppercase tracking-widest rounded-lg shimmer-gold hover:bg-gray-200 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            View My Work
            <span className="text-xs">&#8594;</span>
          </a>
          <a
            href="/ORLANES_Resume.pdf"
            download="Nathan_John_Orlanes_Resume.pdf"
            className="inline-flex items-center gap-2 px-7 py-3 border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm font-semibold hover:border-white/20 hover:text-[var(--color-text-primary)] transition-all duration-300 uppercase tracking-widest rounded-lg"
          >
            Download CV
            <span className="text-xs">&#8599;</span>
          </a>
        </div>
      </div>

      {/* Centered portrait at bottom */}
      <div className="relative z-10 mt-auto flex justify-center items-end w-full gs-hero-reveal opacity-0">
        <img
          src="/NEW profile image.png"
          alt="Nathan John Orlanes"
          className="relative max-h-[55vh] md:max-h-[60vh] w-auto object-contain object-bottom"
          style={{
            filter: "drop-shadow(0 0 40px rgba(255,255,255,0.06)) drop-shadow(0 0 80px rgba(255,255,255,0.03))",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 45%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 45%, transparent 100%)",
          }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-30 gs-hero-reveal opacity-0">
        <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
