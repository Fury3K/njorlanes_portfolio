"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-20 px-6 lg:px-10 max-w-7xl mx-auto relative"
    >
      {/* Background glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-white opacity-[0.02] -top-[15%] right-[5%]" />
      <div className="glow-orb w-[500px] h-[500px] bg-white opacity-[0.015] bottom-[5%] left-[0%]" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full relative z-10">
        {/* Left: Content */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="section-label mb-5 gs-hero-reveal opacity-0">
            &lt;/&gt; Full-Stack Developer
          </div>

          <h1 className="gs-hero-title font-display font-bold text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.03em] mb-6">
            <span className="text-[var(--color-text-primary)] block">
              Nathan
            </span>
            <span className="text-[var(--color-text-primary)] block">
              John
            </span>
            <span className="text-[var(--color-text-primary)] block">Orlanes.</span>
          </h1>

          <div className="accent-line w-20 mb-6 gs-hero-reveal opacity-0" />

          <p className="text-[var(--color-body)] text-[0.9375rem] leading-relaxed max-w-lg mb-8 gs-hero-reveal opacity-0">
            Full-Stack Developer focused on creating accessible, pixel-perfect,
            and performant web &amp; mobile applications.
          </p>

          <div className="flex flex-wrap gap-4 gs-hero-reveal opacity-0">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[var(--color-background)] text-sm font-semibold transition-all duration-300 uppercase tracking-widest rounded-lg shimmer-gold hover:bg-gray-200"
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

        {/* Right: Portrait */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end gs-hero-reveal opacity-0">
          <div className="relative max-w-xs w-full group">
            {/* Border glow behind image */}
            <div className="absolute -inset-[2px] rounded-xl bg-white opacity-[0.06] group-hover:opacity-[0.12] blur-sm transition-opacity duration-500" />

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[var(--color-surface)]">
              <img
                src="/Profile.jpg"
                alt="Nathan John Orlanes"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Available badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-[var(--color-background)]/80 backdrop-blur-sm rounded-full border border-[var(--color-border)]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[9px] font-mono text-[var(--color-text-secondary)] uppercase tracking-wider">
                  Available
                </span>
              </div>

              {/* Location */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-[var(--color-background)]/80 backdrop-blur-sm rounded-full border border-[var(--color-border)]">
                <span className="text-[9px] font-mono text-[var(--color-text-muted)]">
                  Mandaue City, PH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 gs-hero-reveal opacity-0">
        <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
