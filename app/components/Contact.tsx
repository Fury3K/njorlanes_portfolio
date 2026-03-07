"use client";

import React, { useState, FormEvent, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Button push animation on submit
    if (formRef.current) {
        gsap.fromTo(formRef.current.querySelector('button'), 
            { scale: 0.95 }, 
            { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" }
        );
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-primary)] to-transparent rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
           <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--color-secondary)] to-transparent rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom max-w-6xl relative z-10">
             <h2 className="text-3xl md:text-4xl font-bold mb-20 flex justify-center items-center gap-4 gs-heading" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-[var(--color-primary)] font-mono text-xl">04.</span>
                <span className="text-white">What&apos;s Next?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-start">
                
                {/* Left Column: Info */}
                <div className="space-y-10 gs-slide-left">
                     <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Get In Touch</h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Although I&apos;m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>
                    </div>

                    <div className="space-y-6 pt-4">
                        {[
                            { icon: 'fa-envelope', label: 'Email', value: 'n8thanjohn@gmail.com' },
                            { icon: 'fa-phone', label: 'Phone', value: '0969 534 3645' },
                            { icon: 'fa-location-dot', label: 'Location', value: 'Guizo, Mandaue City, Philippines 6014' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-5 group">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-dark-card)] border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                                    <i className={`fa-solid ${item.icon} text-xl group-hover:scale-110 transition-transform duration-300`}></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-mono mb-1">{item.label}</p>
                                    <p className="font-medium text-gray-200 group-hover:text-white transition-colors">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-6">
                        {[
                            { icon: 'fa-facebook-f', url: 'https://www.facebook.com/n8thanjohn', title: 'Facebook' },
                            { icon: 'fa-instagram', url: 'https://www.instagram.com/nj.orlanes/', title: 'Instagram' },
                            { icon: 'fa-github', url: 'https://github.com/Fury3K', title: 'GitHub' },
                            { icon: 'fa-file-arrow-down', url: '/ORLANES_Resume.pdf', title: 'Download CV', download: "Nathan_John_Orlanes_Resume.pdf" },
                        ].map((social, i) => (
                            <a 
                                key={i}
                                href={social.url} 
                                target={social.download ? "_self" : "_blank"} 
                                rel="noopener noreferrer" 
                                download={social.download}
                                className="w-12 h-12 rounded-full border border-gray-700 bg-[var(--color-dark-card)] flex items-center justify-center text-gray-400 hover:text-[var(--color-dark-bg)] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300 transform hover:-translate-y-2 relative group gs-pop"
                                style={{ transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                                title={social.title}
                            >
                                <i className={`fa-brands ${social.icon} text-lg ${social.icon === 'fa-file-arrow-down' ? 'fa-solid' : ''}`}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="glass-card p-8 md:p-10 rounded-2xl gs-slide-right relative">
                    {/* Glowing Accent Ring */}
                    <div className="absolute -inset-px rounded-2xl border border-[var(--color-primary)]/30 opacity-0 px-transition hover:opacity-100 transition-opacity duration-500"></div>

                    <h3 className="text-2xl font-bold text-white mb-8 font-mono flex items-center gap-3">
                        Send me a message
                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                    </h3>
                    
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="form-control relative group">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input peer w-full bg-[#0a0a1a] border-b-2 border-t-0 border-l-0 border-r-0 border-gray-800 rounded-t-lg rounded-b-none focus:border-[var(--color-primary)] focus:bg-[#0f0f2a] focus:outline-none text-gray-200 transition-all duration-300 pt-6 pb-2 px-4 h-14" 
                                />
                                <label className={`absolute left-4 font-mono text-sm transition-all duration-300 pointer-events-none ${formData.name ? 'top-2 text-[10px] text-[var(--color-primary)]' : 'top-4 text-gray-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[var(--color-primary)]'}`}>
                                    Your Name
                                </label>
                            </div>
                            <div className="form-control relative group">
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="input peer w-full bg-[#0a0a1a] border-b-2 border-t-0 border-l-0 border-r-0 border-gray-800 rounded-t-lg rounded-b-none focus:border-[var(--color-primary)] focus:bg-[#0f0f2a] focus:outline-none text-gray-200 transition-all duration-300 pt-6 pb-2 px-4 h-14" 
                                />
                                <label className={`absolute left-4 font-mono text-sm transition-all duration-300 pointer-events-none ${formData.email ? 'top-2 text-[10px] text-[var(--color-primary)]' : 'top-4 text-gray-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[var(--color-primary)]'}`}>
                                    Your Email
                                </label>
                            </div>
                        </div>
                        <div className="form-control relative group">
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="textarea peer w-full h-32 bg-[#0a0a1a] border-b-2 border-t-0 border-l-0 border-r-0 border-gray-800 rounded-t-lg rounded-b-none focus:border-[var(--color-primary)] focus:bg-[#0f0f2a] focus:outline-none text-gray-200 resize-none transition-all duration-300 pt-8 pb-4 px-4" 
                            ></textarea>
                            <label className={`absolute left-4 font-mono text-sm transition-all duration-300 pointer-events-none ${formData.message ? 'top-3 text-[10px] text-[var(--color-primary)]' : 'top-6 text-gray-500 peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-[var(--color-primary)]'}`}>
                                How can I help you?
                            </label>
                        </div>
                        
                        {status === 'error' && (
                            <div className="alert alert-error bg-red-900/10 border border-red-900/50 text-red-200 text-sm rounded-lg">
                                <i className="fa-solid fa-circle-exclamation"></i>
                                <span>{errorMessage}</span>
                            </div>
                        )}
                        
                        {status === 'success' && (
                            <div className="alert alert-success bg-green-900/10 border border-green-900/50 text-green-300 text-sm rounded-lg">
                                <i className="fa-solid fa-circle-check"></i>
                                <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                            </div>
                        )}

                        <div className="form-control mt-4">
                            <button 
                                type="submit" 
                                disabled={status === 'loading'}
                                className="magnetic-btn w-full flex justify-center py-4 rounded-xl normal-case font-mono text-lg overflow-hidden shimmer"
                            >
                                {status === 'loading' ? (
                                    <span className="flex items-center gap-2">
                                        <span className="loading loading-spinner loading-sm"></span>
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2 relative z-10">
                                        Send Message <i className="fa-regular fa-paper-plane ml-1"></i>
                                    </span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;