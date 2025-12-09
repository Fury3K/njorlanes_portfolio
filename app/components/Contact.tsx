"use client";
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 text-center">
        <div className="container-custom max-w-2xl gs-reveal">
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-4">
                <span className="text-[var(--color-primary)] font-mono text-xl">04.</span>
                <span className="text-gray-200">What&apos;s Next?</span>
            </h2>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
            
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                Although I&apos;m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <a href="mailto:n8thanjohn@gmail.com" className="btn btn-outline border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black px-8 py-4 h-auto text-lg normal-case font-mono rounded-md transition-all duration-300">
                Say Hello
            </a>

             <div className="mt-16 flex justify-center gap-8 text-2xl">
                <a href="https://github.com/Fury3K" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] hover:-translate-y-1 transition-all">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.facebook.com/n8thanjohn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] hover:-translate-y-1 transition-all">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/nj.orlanes/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] hover:-translate-y-1 transition-all">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)] hover:-translate-y-1 transition-all">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Contact;