"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Greeting
      tl.fromTo('.hero-greeting', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      );

      // Name — character by character
      if (nameRef.current) {
        const text = nameRef.current.innerText;
        nameRef.current.innerHTML = '';
        const chars = text.split('');
        chars.forEach((char, i) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.className = 'hero-char inline-block';
          span.style.opacity = '0';
          nameRef.current!.appendChild(span);
        });

        tl.fromTo('.hero-char',
          { opacity: 0, y: 80, rotateX: -90 },
          { 
            opacity: 1, y: 0, rotateX: 0,
            duration: 0.8, stagger: 0.04,
            ease: 'back.out(1.7)'
          },
          '-=0.4'
        );
      }

      // Subtitle
      tl.fromTo('.hero-subtitle',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.5'
      );

      // Description
      tl.fromTo('.hero-desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      );

      // CTA buttons
      tl.fromTo('.hero-cta',
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15 },
        '-=0.4'
      );

      // Floating orbs continuous animation
      gsap.to('.orb-1', {
        x: 60, y: -80, scale: 1.1,
        duration: 8, repeat: -1, yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.orb-2', {
        x: -40, y: 60, scale: 0.9,
        duration: 10, repeat: -1, yoyo: true,
        ease: 'sine.inOut',
        delay: 2
      });
      gsap.to('.orb-3', {
        x: 30, y: -50, scale: 1.05,
        duration: 12, repeat: -1, yoyo: true,
        ease: 'sine.inOut',
        delay: 4
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 dot-grid opacity-40"></div>

      {/* Gradient Orbs */}
      <div className="orb orb-cyan orb-1 w-[500px] h-[500px] absolute top-1/4 -left-20 opacity-30"></div>
      <div className="orb orb-violet orb-2 w-[400px] h-[400px] absolute bottom-1/4 right-0 opacity-25"></div>
      <div className="orb orb-pink orb-3 w-[300px] h-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15"></div>

      {/* Radial fadeout at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-dark-bg)_80%)]"></div>

      <div className="container-custom z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="hero-greeting text-[var(--color-primary)] font-mono mb-4 text-lg tracking-wider opacity-0">
            &lt;Hello, I&apos;m /&gt;
          </p>

          <h1
            ref={nameRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Nathan John.
          </h1>

          <h2 className="hero-subtitle text-3xl md:text-5xl lg:text-6xl font-bold mb-8 opacity-0" style={{ fontFamily: 'var(--font-display)' }}>
            I build{' '}
            <span className="text-gradient">digital experiences</span>
            <span className="text-[var(--color-primary)]">.</span>
          </h2>

          <p className="hero-desc text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0">
            Full-Stack Developer focused on creating accessible, pixel-perfect, and performant web & mobile applications.
          </p>

          <div className="flex flex-wrap gap-5 justify-center items-center">
            <a
              href="#projects"
              className="hero-cta magnetic-btn rounded-lg opacity-0"
            >
              View My Work
              <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a
              href="/ORLANES_Resume.pdf"
              download="Nathan_John_Orlanes_Resume.pdf"
              className="hero-cta magnetic-btn rounded-lg opacity-0 !border-gray-700 !text-gray-400 hover:!text-[var(--color-dark-bg)] hover:!border-transparent"
            >
              <i className="fa-solid fa-download"></i>
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-dark-bg)] to-transparent"></div>
    </section>
  );
};

export default Hero;