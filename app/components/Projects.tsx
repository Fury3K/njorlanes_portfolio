"use client";
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-32">
        <div className="container-custom">
            <h2 className="text-3xl font-bold mb-16 flex items-center gap-4 gs-reveal">
                <span className="text-[var(--color-primary)] font-mono text-xl">03.</span>
                <span className="text-gray-200">Some Things I&apos;ve Built</span>
                <span className="h-px bg-gray-800 flex-grow max-w-xs ml-4"></span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project 1: AudioScholar */}
                <div className="group glass-card rounded-lg overflow-hidden gs-reveal relative hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-48 overflow-hidden relative">
                         {/* Overlay */}
                        <div className="absolute inset-0 bg-[#0a0a0a]/30 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                        <img src="/AudioScholar.png" alt="AudioScholar" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    
                    <div className="p-6 bg-[#121212] h-full flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <i className="fa-regular fa-folder text-[var(--color-primary)] text-4xl"></i>
                                <div className="flex gap-4">
                                    <a href="https://github.com/MasuRii/AudioScholar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                                        <i className="fa-brands fa-github text-xl"></i>
                                    </a>
                                    <a href="https://audioscholar.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                                        <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i>
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">AudioScholar</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                An AI-powered learning assistant designed to enhance study efficiency using Gemini API.
                            </p>
                        </div>

                        <ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 mt-4">
                            <li>React</li>
                            <li>Gemini API</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                </div>

                {/* Project 2: Brisa Solei */}
                <div className="group glass-card rounded-lg overflow-hidden gs-reveal relative hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-[#0a0a0a]/30 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                        <img src="/BrisaSolei.png" alt="Brisa Solei" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    
                    <div className="p-6 bg-[#121212] h-full flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <i className="fa-regular fa-folder text-[var(--color-primary)] text-4xl"></i>
                                <div className="flex gap-4">
                                    <a href="https://github.com/themarneilx/resort-booking" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                                        <i className="fa-brands fa-github text-xl"></i>
                                    </a>
                                    <a href="https://brisasolei.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                                        <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i>
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">Brisa Solei Resort</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                A modern, elegant resort booking web application for seamless reservations.
                            </p>
                        </div>

                        <ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 mt-4">
                            <li>Next.js</li>
                            <li>Tailwind</li>
                            <li>Full-Stack</li>
                        </ul>
                    </div>
                </div>

                {/* Project 3: CainAndAbel */}
                <div className="group glass-card rounded-lg overflow-hidden gs-reveal relative hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-[#0a0a0a]/30 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                        <img src="/CainAndAbel.png" alt="CainAndAbel" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    
                    <div className="p-6 bg-[#121212] h-full flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <i className="fa-regular fa-folder text-[var(--color-primary)] text-4xl"></i>
                                <div className="flex gap-4">
                                    <a href="https://github.com/Fury3K/Cain-and-Abel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                                        <i className="fa-brands fa-github text-xl"></i>
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">CainAndAbel</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                Entry for the competition in Proweaver Hackathon PromptQuest.
                            </p>
                        </div>

                        <ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 mt-4">
                            <li>Hackathon</li>
                            <li>PromptQuest</li>
                        </ul>
                    </div>
                </div>

                {/* Project 4: Wishpay */}
                <div className="group glass-card rounded-lg overflow-hidden gs-reveal relative hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-[#0a0a0a]/30 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                        <img src="/Wishpay.png" alt="Wishpay" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    
                    <div className="p-6 bg-[#121212] h-full flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <i className="fa-regular fa-folder text-[var(--color-primary)] text-4xl"></i>
                                <div className="flex gap-4">
                                    <a href="https://github.com/Fury3K/wishpayments" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                                        <i className="fa-brands fa-github text-xl"></i>
                                    </a>
                                    <a href="https://wishpay.marneilx.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                                        <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i>
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">Wishpay</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                A comprehensive platform for managing and fulfilling wishlist payments.
                            </p>
                        </div>

                        <ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 mt-4">
                            <li>Web App</li>
                            <li>Full-Stack</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Projects;