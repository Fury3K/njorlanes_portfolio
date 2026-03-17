"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/app/lib/gsap";
import { projects } from "@/app/data/projects";

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const swapContent = (index: number) => {
    setActiveIndex(index);

    const numberEl = document.querySelector(".project-number-display");
    const titleEl = document.querySelector(".project-title-display");
    const descEl = document.querySelector(".project-desc-display");
    const tagsEl = document.querySelector(".project-tags-display");
    const linksEl = document.querySelector(".project-links-display");

    const tl = gsap.timeline();
    const targets = [numberEl, titleEl, descEl, tagsEl, linksEl].filter(Boolean);

    tl.to(targets, {
      opacity: 0,
      y: -15,
      duration: 0.25,
      stagger: 0.03,
      ease: "power2.in",
      onComplete: () => {
        const project = projects[index];

        if (numberEl) numberEl.textContent = `${project.number} / 0${projects.length}`;
        if (titleEl) titleEl.textContent = project.title;
        if (descEl) descEl.textContent = project.description;

        if (tagsEl) {
          tagsEl.innerHTML = "";
          project.badges.forEach((badge) => {
            const span = document.createElement("span");
            span.className = "tool-pill";
            span.textContent = badge;
            tagsEl.appendChild(span);
          });
        }

        if (linksEl) {
          linksEl.innerHTML = "";
          if (project.githubUrl) {
            const a = document.createElement("a");
            a.href = project.githubUrl;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.className =
              "inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors font-mono group/link";
            a.innerHTML = '<i class="fa-brands fa-github"></i> GitHub <i class="fa-solid fa-arrow-right text-[8px] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all"></i>';
            linksEl.appendChild(a);
          }
          if (project.liveUrl) {
            const a = document.createElement("a");
            a.href = project.liveUrl;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.className =
              "inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors font-mono group/link";
            a.innerHTML =
              '<i class="fa-solid fa-arrow-up-right-from-square"></i> Live <i class="fa-solid fa-arrow-right text-[8px] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all"></i>';
            linksEl.appendChild(a);
          }
        }
      },
    });

    tl.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      stagger: 0.04,
      ease: "power2.out",
    });

    // Update images
    document.querySelectorAll(".project-scroll-image").forEach((img, i) => {
      if (i === index) {
        img.classList.add("is-active");
      } else {
        img.classList.remove("is-active");
      }
    });
  };

  // Desktop sticky scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      const panels = document.querySelectorAll(".project-panel");

      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top center",
          end: "bottom center",
          onEnter: () => swapContent(i),
          onEnterBack: () => swapContent(i),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 relative">
        <div className="relative gs-reveal opacity-0">
          <span className="section-number">03</span>
          <div className="relative z-10">
            <div className="section-label mb-3">{"// Selected Work"}</div>
            <h2 className="gs-scramble font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Projects
            </h2>
          </div>
          <div className="accent-line w-32 mt-4" />
        </div>
      </div>

      {/* Desktop: Sticky scroll layout */}
      <div className="hidden lg:grid lg:grid-cols-2 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Left: Sticky info panel */}
        <div className="sticky top-0 h-screen flex items-center">
          <div className="pr-16 relative">
            {/* Progress dots */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className={`progress-dot ${
                    i === activeIndex ? "is-active" : ""
                  }`}
                />
              ))}
            </div>

            <div className="project-number-display font-mono text-sm text-[var(--color-text-muted)] mb-4">
              01 / 0{projects.length}
            </div>
            <h3 className="project-title-display font-display font-extrabold text-4xl xl:text-5xl text-[var(--color-text-primary)] tracking-tight mb-4">
              {projects[0].title}
            </h3>
            <p className="project-desc-display text-[var(--color-body)] text-[0.9375rem] leading-relaxed mb-6 max-w-md">
              {projects[0].description}
            </p>
            <div className="project-tags-display flex flex-wrap gap-2 mb-8">
              {projects[0].badges.map((badge, i) => (
                <span key={i} className="tool-pill">
                  {badge}
                </span>
              ))}
            </div>
            <div className="project-links-display flex gap-6">
              {projects[0].githubUrl && (
                <a
                  href={projects[0].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors font-mono group/link"
                >
                  <i className="fa-brands fa-github" /> GitHub
                  <i className="fa-solid fa-arrow-right text-[8px] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                </a>
              )}
              {projects[0].liveUrl && (
                <a
                  href={projects[0].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors font-mono group/link"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square" /> Live
                  <i className="fa-solid fa-arrow-right text-[8px] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: Scrolling images */}
        <div>
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-panel h-screen flex items-center py-10"
            >
              <div
                className={`project-scroll-image w-full aspect-video relative rounded-xl overflow-hidden ${
                  i === 0 ? "is-active" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover object-top ${project.title === "Game of the Generals" ? "scale-110" : ""}`}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/40 via-transparent to-transparent opacity-60" />
                {/* Project number badge */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-[var(--color-background)]/80 backdrop-blur-sm rounded-full border border-[var(--color-border)] shimmer-badge">
                  <span className="text-[9px] font-mono text-[var(--color-text-muted)]">
                    {project.number} / 0{projects.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Stacked cards */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 pb-20 space-y-6">
        {projects.map((project, i) => (
          <div key={i} className="gs-reveal opacity-0">
            <div className="glass-card overflow-hidden group">
              <div className="project-scroll-image is-active aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover object-top ${project.title === "Game of the Generals" ? "scale-110" : ""}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/60 via-transparent to-transparent" />
                {/* Number badge */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-[var(--color-background)]/80 backdrop-blur-sm rounded-full border border-[var(--color-border)] shimmer-badge">
                  <span className="text-[9px] font-mono text-[var(--color-text-muted)]">
                    {project.number} / 0{projects.length}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="font-mono text-xs text-[var(--color-text-muted)] mb-2 block">
                  {project.number}
                </span>
                <h3 className="font-display font-extrabold text-xl text-[var(--color-text-primary)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--color-body)] text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.badges.map((badge, j) => (
                    <span key={j} className="tool-pill">
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] hover:text-white transition-colors font-mono"
                    >
                      <i className="fa-brands fa-github" /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] hover:text-white transition-colors font-mono"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
