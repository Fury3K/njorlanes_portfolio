"use client";
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a]">
        <div className="container-custom">
            <h2 className="text-3xl font-bold mb-16 flex items-center gap-4 gs-reveal">
                <span className="text-[var(--color-primary)] font-mono text-xl">01.</span>
                <span className="text-gray-200">About Me</span>
                <span className="h-px bg-gray-800 flex-grow max-w-xs ml-4"></span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="space-y-6 text-gray-400 leading-relaxed text-lg gs-reveal">
                    <p>
                        Hello! My name is Nathan John and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                    </p>
                    <p>
                        Fast-forward to today, and I&apos;ve had the privilege of building software for university projects and hackathons. My main focus these days is building accessible, inclusive products and digital experiences.
                    </p>
                    <p>
                        Here are a few technologies I&apos;ve been working with recently:
                    </p>
                    
                    <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4">
                        <li className="flex items-center gap-2"><i className="fa-solid fa-caret-right text-[var(--color-primary)]"></i> JavaScript (ES6+)</li>
                        <li className="flex items-center gap-2"><i className="fa-solid fa-caret-right text-[var(--color-primary)]"></i> TypeScript</li>
                        <li className="flex items-center gap-2"><i className="fa-solid fa-caret-right text-[var(--color-primary)]"></i> React 19</li>
                        <li className="flex items-center gap-2"><i className="fa-solid fa-caret-right text-[var(--color-primary)]"></i> Next.js 16</li>
                        <li className="flex items-center gap-2"><i className="fa-solid fa-caret-right text-[var(--color-primary)]"></i> Node.js</li>
                        <li className="flex items-center gap-2"><i className="fa-solid fa-caret-right text-[var(--color-primary)]"></i> Spring Boot</li>
                    </ul>

                    {/* Education/Certs Condensed */}
                    <div className="pt-8">
                        <h3 className="text-white font-bold mb-4">Certifications</h3>
                        <div className="flex gap-4">
                            <a href="https://www.credly.com/badges/a57bd9de-4b29-4fa9-8bd1-c799e93da891" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm flex items-center gap-2">
                                <i className="fa-brands fa-aws"></i> AWS Cloud Foundations
                            </a>
                            <a href="https://www.credly.com/badges/2163b9d2-be43-4313-83f1-c2e11972d829/public_url" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm flex items-center gap-2">
                                <i className="fa-brands fa-aws"></i> AWS Cloud Architecture
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative group gs-reveal mx-auto md:mx-0 max-w-sm">
                    {/* Image Frame/Effect */}
                    <div className="absolute inset-0 border-2 border-[var(--color-primary)] rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <div className="relative rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 bg-[var(--color-secondary)]">
                         <img src="/Profile.jpg" alt="Profile" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-300" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;