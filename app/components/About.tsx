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
            
            {/* Bio & Image Section */}
            <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
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
                </div>

                <div className="relative group gs-reveal mx-auto md:mx-0 max-w-sm">
                    {/* Image Frame/Effect */}
                    <div className="absolute inset-0 border-2 border-[var(--color-primary)] rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <div className="relative rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 bg-[#121212]">
                         <img src="/Profile.jpg" alt="Profile" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-300" />
                    </div>
                </div>
            </div>

            {/* Education & Certs Section */}
            <div className="grid md:grid-cols-2 gap-16 items-start gs-reveal">
                {/* Education */}
                <div>
                     <h3 className="text-white font-bold mb-8 text-xl flex items-center gap-2">
                        <i className="fa-solid fa-graduation-cap text-[var(--color-primary)]"></i> Education
                     </h3>
                     <div className="space-y-8 border-l border-gray-800 ml-3 pl-8 relative">
                        {/* Item 1 */}
                        <div className="relative">
                            <span className="absolute -left-[39px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-primary)] ring-4 ring-[#0a0a0a]"></span>
                            <h4 className="text-white font-bold text-lg">BS Information Technology</h4>
                            <p className="text-gray-400 mt-1">Cebu Institute of Technology - University</p>
                            <p className="text-sm text-gray-600 font-mono mt-2">2022 - Present</p>
                        </div>
                        {/* Item 2 */}
                        <div className="relative">
                            <span className="absolute -left-[39px] top-1.5 w-3 h-3 rounded-full bg-gray-700 ring-4 ring-[#0a0a0a] group-hover:bg-[var(--color-primary)] transition-colors"></span>
                            <h4 className="text-gray-300 font-bold text-lg">BS Computer Engineering</h4>
                            <p className="text-gray-400 mt-1">University of San Carlos</p>
                            <p className="text-sm text-gray-600 font-mono mt-2">2021 - 2022</p>
                        </div>
                        {/* Item 3 */}
                        <div className="relative">
                            <span className="absolute -left-[39px] top-1.5 w-3 h-3 rounded-full bg-gray-700 ring-4 ring-[#0a0a0a]"></span>
                            <h4 className="text-gray-300 font-bold text-lg">Senior High School</h4>
                            <p className="text-gray-400 mt-1">Saint Louis College Cebu</p>
                            <p className="text-sm text-gray-600 font-mono mt-2">2019 - 2021</p>
                        </div>
                     </div>
                </div>

                {/* Certs */}
                <div>
                    <h3 className="text-white font-bold mb-8 text-xl flex items-center gap-2">
                        <i className="fa-solid fa-award text-[var(--color-primary)]"></i> Certifications
                    </h3>
                    <div className="flex flex-col gap-4">
                        <a href="https://drive.google.com/file/d/1cU-frAdqfDmDhpwRfEqBH7W_KNexFwsy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-[#121212] p-4 rounded-lg border border-gray-800 hover:border-[var(--color-primary)] transition-all duration-300 hover:translate-x-2">
                            <div className="text-gray-300 group-hover:text-white transition-colors text-2xl w-12 text-center">
                                <i className="fa-solid fa-trophy"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-200 group-hover:text-[var(--color-primary)] transition-colors">Proweaver Hackathon PromptQuest</h4>
                                <p className="text-sm text-gray-500">Certificate of Participation (2025)</p>
                            </div>
                        </a>

                        <a href="https://www.credly.com/badges/2163b9d2-be43-4313-83f1-c2e11972d829/public_url" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-[#121212] p-4 rounded-lg border border-gray-800 hover:border-[var(--color-primary)] transition-all duration-300 hover:translate-x-2">
                            <div className="text-gray-300 group-hover:text-white transition-colors text-2xl w-12 text-center">
                                <i className="fa-brands fa-aws"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-200 group-hover:text-[var(--color-primary)] transition-colors">AWS Cloud Architecture</h4>
                                <p className="text-sm text-gray-500">Amazon Web Services (2025)</p>
                            </div>
                        </a>
                        
                         <a href="https://www.credly.com/badges/a57bd9de-4b29-4fa9-8bd1-c799e93da891" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-[#121212] p-4 rounded-lg border border-gray-800 hover:border-[var(--color-primary)] transition-all duration-300 hover:translate-x-2">
                            <div className="text-gray-300 group-hover:text-white transition-colors text-2xl w-12 text-center">
                                <i className="fa-brands fa-aws"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-200 group-hover:text-[var(--color-primary)] transition-colors">AWS Cloud Foundations</h4>
                                <p className="text-sm text-gray-500">Amazon Web Services (2025)</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;