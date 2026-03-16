"use client";

import React from "react";

interface Skill {
  name: string;
  icon: string;
}

function SkillGroup({ number, label, skills }: { number: string; label: string; skills: Skill[] }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[10px] font-mono px-2 py-0.5 border border-white/10 rounded text-[var(--color-text-secondary)] font-bold">{number}</span>
        <span className="text-[var(--color-text-secondary)] font-semibold uppercase tracking-widest text-xs">{label}</span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((s, i) => (
          <span key={i} className="tech-badge"><i className={s.icon} /> {s.name}</span>
        ))}
      </div>
    </div>
  );
}

const skillCategories = [
  { number: "01", label: "Frontend", skills: [
    { name: "React 19", icon: "fa-brands fa-react" }, { name: "Next.js 16", icon: "fa-solid fa-n" },
    { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt" }, { name: "DaisyUI", icon: "fa-solid fa-palette" },
    { name: "GSAP", icon: "fa-solid fa-wand-magic-sparkles" }, { name: "Three.js", icon: "fa-solid fa-cube" },
    { name: "HTML5", icon: "fa-brands fa-html5" }, { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" }, { name: "TypeScript", icon: "fa-brands fa-js" },
  ]},
  { number: "02", label: "Backend", skills: [
    { name: "Java", icon: "fa-brands fa-java" }, { name: "Python", icon: "fa-brands fa-python" },
    { name: "Node.js", icon: "fa-brands fa-node" }, { name: "Express", icon: "fa-solid fa-server" },
    { name: "Spring Boot", icon: "fa-solid fa-leaf" }, { name: "PHP", icon: "fa-brands fa-php" },
    { name: "C", icon: "fa-solid fa-c" }, { name: "SQL", icon: "fa-solid fa-database" },
    { name: "PostgreSQL", icon: "fa-solid fa-database" }, { name: "MongoDB", icon: "fa-solid fa-leaf" },
    { name: "Firebase", icon: "fa-solid fa-fire" },
  ]},
  { number: "03", label: "Tools & Platforms", skills: [
    { name: "Git", icon: "fa-brands fa-git-alt" }, { name: "GitHub", icon: "fa-brands fa-github" },
    { name: "AWS", icon: "fa-brands fa-aws" }, { name: "Vercel", icon: "fa-solid fa-cloud-arrow-up" },
    { name: "Netlify", icon: "fa-solid fa-diamond" }, { name: "Maven/Gradle", icon: "fa-solid fa-scroll" },
    { name: "Docker", icon: "fa-brands fa-docker" }, { name: "Leaflet", icon: "fa-solid fa-map-location-dot" },
    { name: "ESLint", icon: "fa-solid fa-check-double" }, { name: "Postman", icon: "fa-solid fa-paper-plane" },
    { name: "IntelliJ/VS Code", icon: "fa-solid fa-code" },
  ]},
  { number: "04", label: "Mobile", skills: [
    { name: "Kotlin", icon: "fa-brands fa-android" }, { name: "Jetpack Compose", icon: "fa-solid fa-mobile-screen" },
    { name: "Android", icon: "fa-brands fa-android" }, { name: "Flutter", icon: "fa-solid fa-wind" },
    { name: "Dart", icon: "fa-solid fa-code" }, { name: "Swift", icon: "fa-brands fa-swift" },
  ]},
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto relative">
      <div className="relative mb-20 gs-reveal opacity-0">
        <span className="section-number">02</span>
        <div className="relative z-10">
          <div className="section-label mb-3">// Tech Stack</div>
          <h2 className="gs-scramble font-display font-bold text-3xl md:text-4xl tracking-tight">Skills</h2>
        </div>
        <div className="accent-line w-32 mt-4" />
      </div>

      <div className="glass-card p-8 md:p-10 gs-reveal opacity-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((cat, i) => (
            <SkillGroup key={i} number={cat.number} label={cat.label} skills={cat.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
