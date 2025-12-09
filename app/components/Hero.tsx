"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".hero-text", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        });
        
        gsap.from(".hero-btn", {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--color-secondary)] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

        <div className="container-custom z-10">
            <div className="max-w-4xl">
                <p className="hero-text text-[var(--color-primary)] font-mono mb-4 text-lg">Hi, I&apos;m</p>
                <h1 className="hero-text text-6xl md:text-8xl font-bold tracking-tight mb-2 text-white">
                    Nathan John<span className="text-[var(--color-primary)]">.</span>
                </h1>
                <h2 className="hero-text text-4xl md:text-6xl font-bold text-gray-400 mb-8">
                    I build <span className="text-white">digital experiences</span>.
                </h2>
                <p className="hero-text text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
                    Full-Stack Developer focused on creating accessible, pixel-perfect, and performant web and mobile applications.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href="#projects" className="hero-btn group relative px-8 py-4 bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] font-mono hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300">
                        Check out my work
                        <span className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 transition-opacity"></span>
                    </a>
                    <a href="/ORLANES_Resume.pdf" download="Nathan_John_Orlanes_Resume.pdf" className="hero-btn px-8 py-4 text-gray-400 hover:text-white transition-colors font-mono flex items-center gap-2">
                        <i className="fa-solid fa-download"></i> Resume
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;