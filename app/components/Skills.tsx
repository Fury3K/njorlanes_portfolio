"use client";
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
        title: "Frontend",
        skills: ["React 19", "Next.js 16", "Tailwind CSS", "DaisyUI", "GSAP", "HTML5/CSS3", "JavaScript/TypeScript"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "Spring Boot (Java)", "Rest APIs", "PostgreSQL", "MongoDB"]
    },
    {
        title: "Tools & Platforms",
        skills: ["Git/GitHub", "AWS", "Vercel", "Netlify", "Postman", "IntelliJ IDEA", "VS Code"]
    },
    {
        title: "Mobile",
        skills: ["Kotlin", "Jetpack Compose", "Android Development"]
    }
  ];

  return (
    <section id="skills" className="py-32">
        <div className="container-custom">
            <h2 className="text-3xl font-bold mb-16 flex items-center gap-4 gs-reveal">
                <span className="text-[var(--color-primary)] font-mono text-xl">02.</span>
                <span className="text-gray-200">Technical Skills</span>
                <span className="h-px bg-gray-800 flex-grow max-w-xs ml-4"></span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((category, index) => (
                    <div key={index} className="gs-reveal">
                        <h3 className="text-xl font-bold text-white mb-6 border-l-2 border-[var(--color-primary)] pl-4">{category.title}</h3>
                        <ul className="space-y-3">
                            {category.skills.map((skill, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-400 hover:text-[var(--color-primary)] transition-colors cursor-default">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]"></span>
                                    <span className="text-sm font-mono">{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Skills;