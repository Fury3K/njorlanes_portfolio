"use client";
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React 19", icon: "fa-brands fa-react" },
            { name: "Next.js 16", icon: "fa-solid fa-n" }, 
            { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt" },
            { name: "DaisyUI", icon: "fa-solid fa-swatchbook" },
            { name: "GSAP", icon: "fa-solid fa-wand-magic-sparkles" },
            { name: "HTML5", icon: "fa-brands fa-html5" },
            { name: "CSS3", icon: "fa-brands fa-css3-alt" },
            { name: "JavaScript", icon: "fa-brands fa-js" },
            { name: "TypeScript", icon: "fa-brands fa-js" }
        ]
    },
    {
        title: "Backend",
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
             { name: "Firebase", icon: "fa-solid fa-fire" }
        ]
    },
    {
        title: "Tools & Platforms",
        skills: [
            { name: "Git", icon: "fa-brands fa-git-alt" },
            { name: "GitHub", icon: "fa-brands fa-github" },
            { name: "AWS", icon: "fa-brands fa-aws" },
            { name: "Vercel", icon: "fa-solid fa-cloud-arrow-up" },
            { name: "Netlify", icon: "fa-solid fa-diamond" },
            { name: "Maven/Gradle", icon: "fa-solid fa-scroll" },
            { name: "Postman", icon: "fa-solid fa-paper-plane" },
            { name: "IntelliJ/VS Code", icon: "fa-solid fa-code" }
        ]
    },
    {
        title: "Mobile",
        skills: [
            { name: "Kotlin", icon: "fa-brands fa-android" },
            { name: "Jetpack Compose", icon: "fa-solid fa-mobile-screen" },
            { name: "Android", icon: "fa-brands fa-android" }
        ]
    }
  ];

  return (
    <section id="skills" className="py-32">
        <div className="container-custom">
            <h2 className="text-3xl font-bold mb-16 flex items-center gap-4 gs-reveal">
                <span className="text-white font-mono text-xl">02.</span>
                <span className="text-gray-200">Tech Stack</span>
                <span className="h-px bg-gray-800 flex-grow max-w-xs ml-4"></span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
                {skillCategories.map((category, index) => (
                    <div key={index} className="gs-reveal">
                        <h3 className="text-xl font-bold text-white mb-6 pl-2">{category.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-2 border border-gray-700 rounded-full px-4 py-2 text-gray-400 hover:border-white hover:text-white hover:bg-white/5 transition-all cursor-default group">
                                    <i className={`${skill.icon} text-lg transition-colors`}></i>
                                    <span className="text-sm font-mono">{skill.name}</span>
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