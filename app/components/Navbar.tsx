"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";

const navLinks = [
  { label: "Home", href: "#home", num: "01" },
  { label: "About", href: "#about", num: "02" },
  { label: "Skills", href: "#skills", num: "03" },
  { label: "Projects", href: "#projects", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    gsap.to(window, { scrollTo: href, duration: 1.2, ease: "power3.inOut" });
    setMenuOpen(false);
  };

  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ transform: "scaleX(0)" }} />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--color-background)]/90 backdrop-blur-2xl border-b border-[var(--color-border)]/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center">
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="font-display font-bold text-xl group">
            <span className="text-[var(--color-text-primary)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">NJ</span>
            <span className="text-[var(--color-text-muted)]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.num}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link-underline px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider transition-all duration-300 rounded-md ${
                  activeSection === link.href
                    ? "text-[var(--color-text-primary)] is-active"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                <span className="text-[var(--color-text-muted)] mr-1.5 opacity-50">{link.num}</span>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="ml-4 px-5 py-2 text-[11px] font-mono uppercase tracking-wider rounded-lg bg-white text-[var(--color-background)] font-semibold hover:bg-gray-200 hover:shadow-[0_4px_16px_rgba(255,255,255,0.15)] transition-all duration-300 shimmer-gold"
            >
              Hire Me
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2 text-[var(--color-text-primary)]" aria-label="Toggle menu">
            <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-full right-4 left-4 mt-2 bg-[var(--color-surface)]/95 backdrop-blur-xl border border-[var(--color-border)] rounded-xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            {navLinks.map((link, i) => (
              <a
                key={link.num}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-3 font-mono text-sm rounded-lg transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-[var(--color-text-primary)] bg-[var(--color-accent-muted)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:translate-x-1"
                }`}
                style={{ animationDelay: `${i * 75}ms` }}
              >
                <span className="text-[var(--color-text-muted)] mr-2 opacity-50">{link.num}</span>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
