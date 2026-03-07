"use client";
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Entrance animation — use set + fromTo to guarantee final visible state
    const ctx = gsap.context(() => {
      gsap.fromTo('.nav-item',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.3, ease: 'power3.out' }
      );
      gsap.fromTo('.nav-logo',
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }, navRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    { name: 'skills', href: '#skills' },
    { name: 'projects', href: '#projects' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="nav-logo group relative text-xl font-bold tracking-tighter transition-colors">
          <span className="relative z-10">
            <span className="text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">NJ</span>
            <span className="text-[var(--color-primary)]">.</span>
          </span>
          <span className="absolute -inset-2 rounded-lg bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/5 transition-all duration-300 blur-sm"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-item relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                activeSection === link.href
                  ? 'text-[var(--color-primary)]'
                  : 'text-gray-500 hover:text-gray-200'
              }`}
            >
              <span className="relative z-10 font-mono">
                <span className="text-gray-600 mr-1">//</span>{link.name}
              </span>
              {activeSection === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-[var(--color-primary)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl rounded-xl w-56 bg-[var(--color-dark-surface)] border border-[var(--color-primary)]/10 backdrop-blur-xl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`font-mono text-sm py-2.5 ${
                    activeSection === link.href
                      ? 'text-[var(--color-primary)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="text-gray-600">//</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;