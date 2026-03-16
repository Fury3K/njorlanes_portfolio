"use client";

import React from "react";

const items = [
  "Next.js",
  "React 19",
  "TypeScript",
  "Node.js",
  "Kotlin",
  "Tailwind CSS",
  "GSAP",
  "Spring Boot",
  "PostgreSQL",
  "AWS",
  "Firebase",
  "Android",
  "Express.js",
  "Java",
  "Python",
];

const Marquee: React.FC = () => {
  const doubled = [...items, ...items];

  return (
    <section className="py-10 border-y border-[var(--color-border)] overflow-hidden relative gs-reveal opacity-0">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[var(--color-background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[var(--color-background)] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="mx-6 font-display font-bold text-xl md:text-2xl uppercase tracking-[0.2em] text-[var(--color-text-muted)] opacity-20 select-none">
              {item}
            </span>
            <span className="text-white/10 text-sm select-none">
              &#9670;
            </span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
