"use client";

import React from "react";

interface TechItem {
  name: string;
  icon: string;
}

interface SubCategory {
  label: string;
  items: TechItem[];
}

interface Category {
  title: string;
  subcategories?: SubCategory[];
  items?: TechItem[];
}

const categories: Category[] = [
  {
    title: "Frontend",
    subcategories: [
      {
        label: "Frameworks & Libraries",
        items: [
          { name: "React 19", icon: "fa-brands fa-react" },
          { name: "Next.js 16", icon: "fa-solid fa-n" },
          { name: "Three.js", icon: "fa-solid fa-cube" },
          { name: "GSAP", icon: "fa-solid fa-wand-magic-sparkles" },
          { name: "Framer Motion", icon: "fa-solid fa-film" },
          { name: "Tailwind", icon: "fa-brands fa-css3-alt" },
          { name: "DaisyUI", icon: "fa-solid fa-palette" },
          { name: "Vite", icon: "fa-solid fa-bolt" },
        ],
      },
      {
        label: "Languages",
        items: [
          { name: "JavaScript", icon: "fa-brands fa-js" },
          { name: "TypeScript", icon: "fa-brands fa-js" },
          { name: "HTML5", icon: "fa-brands fa-html5" },
          { name: "CSS3", icon: "fa-brands fa-css3-alt" },
        ],
      },
    ],
  },
  {
    title: "Backend",
    subcategories: [
      {
        label: "Frameworks",
        items: [
          { name: "Node.js", icon: "fa-brands fa-node" },
          { name: "Express", icon: "fa-solid fa-server" },
          { name: "Spring Boot", icon: "fa-solid fa-leaf" },
          { name: "FastAPI", icon: "fa-solid fa-bolt" },
        ],
      },
      {
        label: "Languages",
        items: [
          { name: "Java", icon: "fa-brands fa-java" },
          { name: "Python", icon: "fa-brands fa-python" },
          { name: "PHP", icon: "fa-brands fa-php" },
          { name: "C", icon: "fa-solid fa-c" },
        ],
      },
    ],
  },
  {
    title: "Database & Storage",
    items: [
      { name: "PostgreSQL", icon: "fa-solid fa-database" },
      { name: "MySQL", icon: "fa-solid fa-database" },
      { name: "MongoDB", icon: "fa-solid fa-leaf" },
      { name: "SQLite", icon: "fa-solid fa-database" },
      { name: "Firebase", icon: "fa-solid fa-fire" },
      { name: "SQL", icon: "fa-solid fa-database" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Kotlin", icon: "fa-brands fa-android" },
      { name: "Jetpack Compose", icon: "fa-solid fa-mobile-screen" },
      { name: "Android", icon: "fa-brands fa-android" },
      { name: "Flutter", icon: "fa-solid fa-wind" },
      { name: "Dart", icon: "fa-solid fa-code" },
      { name: "Swift", icon: "fa-brands fa-swift" },
    ],
  },
  {
    title: "Tools & Cloud",
    subcategories: [
      {
        label: "DevOps & Cloud",
        items: [
          { name: "AWS", icon: "fa-brands fa-aws" },
          { name: "Docker", icon: "fa-brands fa-docker" },
          { name: "Gemini API", icon: "fa-solid fa-microchip" },
          { name: "Vercel", icon: "fa-solid fa-cloud-arrow-up" },
          { name: "Netlify", icon: "fa-solid fa-diamond" },
        ],
      },
      {
        label: "Development",
        items: [
          { name: "Git", icon: "fa-brands fa-git-alt" },
          { name: "GitHub", icon: "fa-brands fa-github" },
          { name: "Postman", icon: "fa-solid fa-paper-plane" },
          { name: "Maven", icon: "fa-solid fa-scroll" },
          { name: "Gradle", icon: "fa-solid fa-scroll" },
          { name: "ESLint", icon: "fa-solid fa-check-double" },
          { name: "VS Code", icon: "fa-solid fa-code" },
          { name: "Playwright", icon: "fa-solid fa-robot" },
          { name: "Leaflet", icon: "fa-solid fa-map-location-dot" },
        ],
      },
    ],
  },
];

function TechCardGrid({ items }: { items: TechItem[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, i) => (
        <div key={i} className="tech-card">
          <i className={item.icon} />
          <span className="tech-card-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--color-surface-elevated)" }}
    >
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="relative mb-20 gs-reveal opacity-0">
          <span className="section-number">02</span>
          <div className="relative z-10">
            <div className="section-label mb-3"></div>
            <h2 className="gs-scramble font-display font-bold text-3xl md:text-4xl tracking-tight">
              Skills &amp; Technologies
            </h2>
          </div>
          <div className="accent-line w-32 mt-4" />
        </div>

        {/* Tech stack grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gs-reveal opacity-0">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className={category.title === "Tools & Cloud" ? "md:col-span-2 lg:col-span-1" : ""}>
              {/* Category header */}
              <div className="category-header">
                <div className="category-bar" />
                <span className="category-label">{category.title}</span>
              </div>

              {/* Direct items (no subcategories) */}
              {category.items && (
                <TechCardGrid items={category.items} />
              )}

              {/* Subcategories */}
              {category.subcategories?.map((sub, subIdx) => (
                <div key={subIdx}>
                  <div className="subcategory-divider">
                    <span>{sub.label}</span>
                  </div>
                  <TechCardGrid items={sub.items} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
