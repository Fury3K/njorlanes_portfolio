"use client";
import { useRef } from 'react';
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

  useGSAP(() => {
    // Staggered reveal for content
    ScrollTrigger.batch('.gs-reveal', {
      start: 'top 85%',
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out', overwrite: 'auto' }
        );
      },
      onLeaveBack: (elements) => {
         gsap.to(elements, { opacity: 0, y: 50, duration: 0.5, overwrite: 'auto' });
      }
    });

    // Bubble pop effect for profile image and other highlights
    ScrollTrigger.batch('.gs-bubble', {
        start: 'top 85%',
        onEnter: (elements) => {
            gsap.fromTo(elements,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: 'back.out(1.7)',
                    overwrite: 'auto'
                }
            );
        },
        onLeaveBack: (elements) => {
             gsap.to(elements, { scale: 0, opacity: 0, duration: 0.3, overwrite: 'auto' });
        }
    });
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-base-100 text-base-content font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}