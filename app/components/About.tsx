"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animated gradient border rotation for profile image
    const ctx = gsap.context(() => {
      gsap.to('.profile-border-glow', {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: 'linear'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark-bg)] via-[var(--color-dark-surface)]/30 to-[var(--color-dark-bg)]"></div>

      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4 gs-heading" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="text-[var(--color-primary)] font-mono text-xl">01.</span>
          <span className="text-white">About Me</span>
          <span className="h-px flex-grow max-w-xs ml-4 bg-gradient-to-r from-gray-800 to-transparent"></span>
        </h2>

        {/* Bio & Image Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p className="gs-slide-left">
              Hello! My name is Nathan John and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom Tumblr themes — turns out hacking together HTML &amp; CSS is pretty fun!
            </p>
            <p className="gs-slide-left">
              Fast-forward to today, and I&apos;ve had the privilege of building software for university projects and hackathons. My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            <p className="gs-slide-left">
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-3 font-mono text-sm mt-4">
              {['JavaScript (ES6+)', 'TypeScript', 'React 19', 'Next.js 16', 'Node.js', 'Spring Boot'].map((tech, i) => (
                <li key={i} className="gs-pop flex items-center gap-2 group cursor-default">
                  <i className="fa-solid fa-caret-right text-[var(--color-primary)] group-hover:translate-x-1 transition-transform duration-200"></i>
                  <span className="group-hover:text-[var(--color-primary)] transition-colors duration-200">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile Image with animated gradient border */}
          <div ref={imageRef} className="relative mx-auto md:mx-0 max-w-sm gs-slide-right">
            <div className="relative group">
              {/* Glowing border */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-500"></div>
              {/* Image container */}
              <div className="relative rounded-xl overflow-hidden bg-[var(--color-dark-card)]">
                <img
                  src="/Profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-bg)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certs Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Education */}
          <div className="gs-reveal">
            <h3 className="text-white font-bold mb-8 text-xl flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
              <i className="fa-solid fa-graduation-cap text-[var(--color-primary)]"></i> Education
            </h3>
            <div className="space-y-8 border-l border-gray-800/50 ml-3 pl-8 relative">
              {/* Timeline glow line */}
              <div className="absolute top-0 bottom-0 -left-px w-px bg-gradient-to-b from-[var(--color-primary)]/50 via-[var(--color-secondary)]/30 to-transparent"></div>
              
              {[
                { title: 'BS Information Technology', school: 'Cebu Institute of Technology - University', year: '2022 - Present', active: true },
                { title: 'BS Computer Engineering', school: 'University of San Carlos', year: '2021 - 2022', active: false },
                { title: 'Senior High School', school: 'Saint Louis College Cebu', year: '2019 - 2021', active: false },
              ].map((edu, i) => (
                <div key={i} className="relative gs-pop group">
                  <span className={`absolute -left-[39px] top-1.5 w-3 h-3 rounded-full ring-4 ring-[var(--color-dark-bg)] transition-all duration-300 ${
                    edu.active 
                      ? 'bg-[var(--color-primary)] shadow-[0_0_12px_rgba(0,240,255,0.5)]' 
                      : 'bg-gray-700 group-hover:bg-[var(--color-secondary)]'
                  }`}></span>
                  <h4 className={`font-bold text-lg ${edu.active ? 'text-white' : 'text-gray-300'}`}>{edu.title}</h4>
                  <p className="text-gray-400 mt-1">{edu.school}</p>
                  <p className="text-sm text-gray-600 font-mono mt-2">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certs */}
          <div className="gs-reveal">
            <h3 className="text-white font-bold mb-8 text-xl flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
              <i className="fa-solid fa-award text-[var(--color-primary)]"></i> Certifications
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { title: 'Proweaver Hackathon PromptQuest', org: 'Certificate of Participation (2025)', icon: 'fa-solid fa-trophy', url: 'https://drive.google.com/file/d/1cU-frAdqfDmDhpwRfEqBH7W_KNexFwsy/view?usp=sharing' },
                { title: 'AWS Cloud Architecture', org: 'Amazon Web Services (2025)', icon: 'fa-brands fa-aws', url: 'https://www.credly.com/badges/2163b9d2-be43-4313-83f1-c2e11972d829/public_url' },
                { title: 'AWS Cloud Foundations', org: 'Amazon Web Services (2025)', icon: 'fa-brands fa-aws', url: 'https://www.credly.com/badges/a57bd9de-4b29-4fa9-8bd1-c799e93da891' },
              ].map((cert, i) => (
                <a
                  key={i}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gs-card group flex items-center gap-4 p-4 rounded-xl shimmer glow-border bg-[var(--color-dark-card)] hover:translate-x-2 transition-all duration-300"
                >
                  <div className="text-gray-400 group-hover:text-[var(--color-primary)] transition-all duration-300 text-2xl w-12 text-center group-hover:scale-110">
                    <i className={cert.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200 group-hover:text-[var(--color-primary)] transition-colors duration-300">{cert.title}</h4>
                    <p className="text-sm text-gray-500">{cert.org}</p>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-gray-700 group-hover:text-[var(--color-primary)] ml-auto transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;