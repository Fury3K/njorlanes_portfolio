"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/app/lib/gsap";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".footer-line",
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-[var(--color-border)] overflow-hidden"
    >
      {/* Animated top line */}
      <div
        className="footer-line absolute top-0 left-0 right-0 h-px bg-white/30 opacity-40"
        style={{ transform: "scaleX(0)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-extrabold text-lg text-[var(--color-text-primary)] hover:text-[var(--color-text-secondary)] transition-colors cursor-default">
          NJ<span className="text-[var(--color-text-muted)]">.</span>
        </span>

        <span className="text-[11px] text-[var(--color-text-muted)] font-mono text-center">
          &copy; {new Date().getFullYear()} Nathan John Orlanes &middot; All
          rights reserved
        </span>

        <span className="text-[11px] text-[var(--color-text-muted)] font-mono">
          Next.js &middot; Tailwind &middot; GSAP
        </span>
      </div>
    </footer>
  );
};

export default Footer;
