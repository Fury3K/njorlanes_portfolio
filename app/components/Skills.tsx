"use client";
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fa-solid fa-palette",
      skills: [
        { name: "React 19", icon: "fa-brands fa-react" },
        { name: "Next.js 16", icon: "fa-solid fa-n" },
        { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt" },
        { name: "DaisyUI", icon: "fa-solid fa-swatchbook" },
        { name: "GSAP", icon: "fa-solid fa-wand-magic-sparkles" },
        { name: "HTML5", icon: "fa-brands fa-html5" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "TypeScript", icon: "fa-brands fa-js" },
      ],
    },
    {
      title: "Backend",
      icon: "fa-solid fa-server",
      skills: [
        { name: "Java", icon: "fa-brands fa-java" },
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "Node.js", icon: "fa-brands fa-node" },
        { name: "Express", icon: "fa-solid fa-server" },
        { name: "Spring Boot", icon: "fa-solid fa-leaf" },
        { name: "PHP", icon: "fa-brands fa-php" },
        { name: "C", icon: "fa-solid fa-c" },
        { name: "SQL", icon: "fa-solid fa-database" },
        { name: "PostgreSQL", icon: "fa-solid fa-database" },
        { name: "MongoDB", icon: "fa-solid fa-leaf" },
        { name: "Firebase", icon: "fa-solid fa-fire" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: "fa-solid fa-toolbox",
      skills: [
        { name: "Git", icon: "fa-brands fa-git-alt" },
        { name: "GitHub", icon: "fa-brands fa-github" },
        { name: "AWS", icon: "fa-brands fa-aws" },
        { name: "Vercel", icon: "fa-solid fa-cloud-arrow-up" },
        { name: "Netlify", icon: "fa-solid fa-diamond" },
        { name: "Maven/Gradle", icon: "fa-solid fa-scroll" },
        { name: "Postman", icon: "fa-solid fa-paper-plane" },
        { name: "IntelliJ/VS Code", icon: "fa-solid fa-code" },
      ],
    },
    {
      title: "Mobile",
      icon: "fa-solid fa-mobile-screen-button",
      skills: [
        { name: "Kotlin", icon: "fa-brands fa-android" },
        { name: "Jetpack Compose", icon: "fa-solid fa-mobile-screen" },
        { name: "Android", icon: "fa-brands fa-android" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark-bg)] via-[var(--color-dark-surface)]/20 to-[var(--color-dark-bg)]"></div>
      
      {/* Subtle decorative orb */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[var(--color-secondary)] rounded-full blur-[150px] opacity-[0.04] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4 gs-heading" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="text-[var(--color-primary)] font-mono text-xl">02.</span>
          <span className="text-white">Tech Stack</span>
          <span className="h-px flex-grow max-w-xs ml-4 bg-gradient-to-r from-gray-800 to-transparent"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="gs-reveal">
              <h3 className="text-xl font-bold text-white mb-6 pl-2 flex items-center gap-3 underline-draw" style={{ fontFamily: 'var(--font-display)' }}>
                <i className={`${category.icon} text-[var(--color-primary)] text-lg`}></i>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="gs-pop group relative flex items-center gap-2 rounded-xl px-4 py-2.5 cursor-default glow-border bg-[var(--color-dark-card)] hover:bg-[var(--color-primary)]/5 transition-all duration-300"
                  >
                    <i className={`${skill.icon} text-lg text-gray-500 group-hover:text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110`}></i>
                    <span className="text-sm font-mono text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;