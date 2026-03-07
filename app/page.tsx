"use client";
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      
      if (progressBar.current) {
        progressBar.current.style.transform = `scaleX(${progress})`;
      }

      setShowScrollTop(scrollTop > 500);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useGSAP(() => {
    // Section heading reveals — character split style
    const sectionHeadings = document.querySelectorAll('.gs-heading');
    sectionHeadings.forEach((heading) => {
      gsap.fromTo(heading,
        { opacity: 0, y: 40, skewY: 2 },
        {
          opacity: 1, y: 0, skewY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Card reveals — smooth scale + fade up
    ScrollTrigger.batch('.gs-card', {
      start: 'top 90%',
      onEnter: (elements) => {
        gsap.fromTo(elements,
          { opacity: 0, y: 40, scale: 0.92 },
          { 
            opacity: 1, y: 0, scale: 1,
            duration: 0.7, stagger: 0.1,
            ease: 'power3.out', overwrite: 'auto'
          }
        );
      },
      onLeaveBack: (elements) => {
        gsap.to(elements, { 
          opacity: 0, y: 40, scale: 0.92,
          duration: 0.35, overwrite: 'auto'
        });
      }
    });

    // General reveal (fade up)
    ScrollTrigger.batch('.gs-reveal', {
      start: 'top 88%',
      onEnter: (elements) => {
        gsap.fromTo(elements,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power2.out', overwrite: 'auto' }
        );
      },
      onLeaveBack: (elements) => {
        gsap.to(elements, { opacity: 0, y: 50, duration: 0.4, overwrite: 'auto' });
      }
    });

    // Pop-in effect (for badges, pills, icons)
    ScrollTrigger.batch('.gs-pop', {
      start: 'top 90%',
      onEnter: (elements) => {
        gsap.fromTo(elements,
          { scale: 0.7, opacity: 0, y: 15 },
          {
            scale: 1, opacity: 1, y: 0,
            duration: 0.6, stagger: 0.035,
            ease: 'power3.out', overwrite: 'auto'
          }
        );
      },
      onLeaveBack: (elements) => {
        gsap.to(elements, { scale: 0.7, opacity: 0, y: 15, duration: 0.35, overwrite: 'auto' });
      }
    });

    // Slide from left
    ScrollTrigger.batch('.gs-slide-left', {
      start: 'top 88%',
      onEnter: (elements) => {
        gsap.fromTo(elements,
          { opacity: 0, x: -60 },
          { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', overwrite: 'auto' }
        );
      },
      onLeaveBack: (elements) => {
        gsap.to(elements, { opacity: 0, x: -60, duration: 0.4, overwrite: 'auto' });
      }
    });

    // Slide from right — smooth and gentle
    ScrollTrigger.batch('.gs-slide-right', {
      start: 'top 90%',
      onEnter: (elements) => {
        gsap.fromTo(elements,
          { opacity: 0, x: 30, scale: 0.97 },
          { opacity: 1, x: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', overwrite: 'auto' }
        );
      },
      onLeaveBack: (elements) => {
        gsap.to(elements, { opacity: 0, x: 30, scale: 0.97, duration: 0.35, overwrite: 'auto' });
      }
    });

  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-[var(--color-dark-bg)] text-gray-200 font-sans relative">
      {/* Scroll Progress Bar */}
      <div ref={progressBar} className="scroll-progress" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up text-lg"></i>
      </button>
    </main>
  );
}