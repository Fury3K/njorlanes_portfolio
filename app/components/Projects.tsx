"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card) => {
      const el = card as HTMLElement;
      const img = el.querySelector('.project-img') as HTMLElement;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        gsap.to(el, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          ease: 'power3.out',
          duration: 0.5
        });

        // Slight image parallax on mouse move
        if (img) {
          gsap.to(img, {
            x: ((x - centerX) / centerX) * -10,
            y: ((y - centerY) / centerY) * -10,
            ease: 'power3.out',
            duration: 0.5
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          ease: 'power3.out',
          duration: 0.7
        });
        
        if (img) {
          gsap.to(img, {
            x: 0,
            y: 0,
            ease: 'power3.out',
            duration: 0.7
          });
        }
      };

      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative">
      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4 gs-heading" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="text-[var(--color-primary)] font-mono text-xl">03.</span>
          <span className="text-white">Selected Works</span>
          <span className="h-px flex-grow max-w-xs ml-4 bg-gradient-to-r from-gray-800 to-transparent"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {/* Project 1: AudioScholar */}
          <div className="project-card gs-card group glass-card rounded-2xl overflow-hidden relative cursor-pointer lg:col-span-2 transform-gpu">
            <div className="h-[280px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
              <img src="/AudioScholar.png" alt="AudioScholar" className="project-img w-full h-[120%] object-cover object-top -mt-4 transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="p-8 h-full flex flex-col justify-between absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[var(--color-dark-surface)] via-[var(--color-dark-surface)] to-transparent pt-20">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>AudioScholar</h3>
                    <p className="text-gray-400 text-sm max-w-lg">
                      An AI-powered learning assistant designed to enhance study efficiency using Gemini API.
                    </p>
                  </div>
                  <div className="flex gap-3 mb-2">
                    <a href="https://github.com/MasuRii/AudioScholar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-primary)] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                      <i className="fa-brands fa-github text-lg"></i>
                    </a>
                    <a href="https://audioscholar.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-primary)] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                      <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2 text-xs font-mono text-[var(--color-secondary)] mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {['React', 'Gemini API', 'Tailwind'].map((tech, i) => (
                  <li key={i} className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20">{tech}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project 2: Brisa Solei */}
          <div className="project-card gs-card group glass-card rounded-2xl overflow-hidden relative cursor-pointer transform-gpu">
            <div className="h-[240px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
              <img src="/BrisaSolei.png" alt="Brisa Solei" className="project-img w-full h-[120%] object-cover -mt-4 transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="p-6 absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[var(--color-dark-surface)] via-[var(--color-dark-surface)] to-transparent pt-20">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>Brisa Solei Resort</h3>
                <div className="flex gap-2">
                  <a href="https://github.com/themarneilx/resort-booking" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors transform hover:scale-110">
                    <i className="fa-brands fa-github text-lg"></i>
                  </a>
                  <a href="https://brisasolei.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors transform hover:scale-110">
                    <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                  </a>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                A modern, elegant resort booking web application for seamless reservations.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-[var(--color-primary)] mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {['Next.js', 'Tailwind', 'Full-Stack'].map((tech, i) => (
                  <li key={i} className="px-2 py-1 rounded-sm bg-[var(--color-primary)]/10">{tech}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project 3: CainAndAbel */}
          <div className="project-card gs-card group glass-card rounded-2xl overflow-hidden relative cursor-pointer transform-gpu">
            <div className="h-[240px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
              <img src="/CainAndAbel.png" alt="CainAndAbel" className="project-img w-full h-[120%] object-cover -mt-4 transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="p-6 absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[var(--color-dark-surface)] via-[var(--color-dark-surface)] to-transparent pt-20">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>Cain & Abel</h3>
                <div className="flex gap-2">
                  <a href="https://github.com/Fury3K/Cain-and-Abel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors transform hover:scale-110">
                    <i className="fa-brands fa-github text-lg"></i>
                  </a>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                Entry for the competition in Proweaver Hackathon PromptQuest.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-[var(--color-primary)] mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {['Hackathon', 'PromptQuest'].map((tech, i) => (
                  <li key={i} className="px-2 py-1 rounded-sm bg-[var(--color-primary)]/10">{tech}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project 4: Wishpay */}
          <div className="project-card gs-card group glass-card rounded-2xl overflow-hidden relative cursor-pointer lg:col-span-2 transform-gpu">
            <div className="h-[280px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
              <img src="/Wishpay.png" alt="Wishpay" className="project-img w-full h-[120%] object-cover object-top -mt-4 transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="p-8 h-full flex flex-col justify-between absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[var(--color-dark-surface)] via-[var(--color-dark-surface)] to-transparent pt-20">
               <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>WishPay</h3>
                    <p className="text-gray-400 text-sm max-w-lg">
                      A comprehensive platform for managing and fulfilling wishlist payments.
                    </p>
                  </div>
                  <div className="flex gap-3 mb-2">
                    <a href="https://github.com/Fury3K/wishpayments" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-primary)] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                      <i className="fa-brands fa-github text-lg"></i>
                    </a>
                    <a href="https://wishpay.marneilx.org/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-primary)] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                      <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                    </a>
                  </div>
                </div>

              <ul className="flex flex-wrap gap-2 text-xs font-mono text-[var(--color-secondary)] mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {['Web App', 'Full-Stack'].map((tech, i) => (
                  <li key={i} className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;