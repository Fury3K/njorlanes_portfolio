"use client";

import React, { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  return (
    <section id="contact" className="py-24">
        <div className="container-custom max-w-6xl">
            <h2 className="text-3xl font-bold mb-16 flex items-center justify-center gap-4 gs-reveal">
                <span className="text-[var(--color-primary)] font-mono text-xl">04.</span>
                <span className="text-gray-200">What&apos;s Next?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                
                {/* Left Column: Info */}
                <div className="space-y-8 gs-reveal">
                     <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Although I&apos;m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>
                    </div>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-colors">
                                <i className="fa-solid fa-envelope text-xl"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-mono">Email</p>
                                <p className="font-medium text-gray-200">n8thanjohn@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-colors">
                                <i className="fa-solid fa-phone text-xl"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-mono">Phone</p>
                                <p className="font-medium text-gray-200">0969 534 3645</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-colors">
                                <i className="fa-solid fa-location-dot text-xl"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-mono">Location</p>
                                <p className="font-medium text-gray-200">Guizo, Mandaue City, Philippines 6014</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <a href="https://www.facebook.com/n8thanjohn" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline border-gray-700 text-gray-400 hover:text-white hover:border-[var(--color-primary)] hover:bg-transparent transition-all" title="Facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/nj.orlanes/" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline border-gray-700 text-gray-400 hover:text-white hover:border-[var(--color-primary)] hover:bg-transparent transition-all" title="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://github.com/Fury3K" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline border-gray-700 text-gray-400 hover:text-white hover:border-[var(--color-primary)] hover:bg-transparent transition-all" title="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="/ORLANES_Resume.pdf" download="Nathan_John_Orlanes_Resume.pdf" className="btn btn-circle btn-outline border-gray-700 text-gray-400 hover:text-white hover:border-[var(--color-primary)] hover:bg-transparent transition-all" title="Download CV">
                            <i className="fa-solid fa-file-arrow-down"></i>
                        </a>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="glass-card p-8 rounded-2xl gs-reveal">
                    <h3 className="text-2xl font-bold text-white mb-6 font-mono">Send me a message</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label pl-0">
                                    <span className="label-text font-mono text-gray-400">Name</span>
                                </label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name" 
                                    className="input input-bordered w-full bg-[var(--color-dark-surface)] border-gray-800 focus:border-[var(--color-primary)] focus:outline-none text-gray-200 placeholder:text-gray-700" 
                                />
                            </div>
                            <div className="form-control">
                                <label className="label pl-0">
                                    <span className="label-text font-mono text-gray-400">Email</span>
                                </label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Email" 
                                    className="input input-bordered w-full bg-[var(--color-dark-surface)] border-gray-800 focus:border-[var(--color-primary)] focus:outline-none text-gray-200 placeholder:text-gray-700" 
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label pl-0">
                                <span className="label-text font-mono text-gray-400">Message</span>
                            </label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="textarea textarea-bordered h-32 w-full bg-[var(--color-dark-surface)] border-gray-800 focus:border-[var(--color-primary)] focus:outline-none text-gray-200 resize-none placeholder:text-gray-700" 
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>
                        
                        {status === 'error' && (
                            <div className="alert alert-error bg-red-900/20 border-red-900 text-red-200 text-sm">
                                <i className="fa-solid fa-circle-exclamation"></i>
                                <span>{errorMessage}</span>
                            </div>
                        )}
                        
                        {status === 'success' && (
                            <div className="alert alert-success bg-green-900/20 border-green-900 text-green-200 text-sm">
                                <i className="fa-solid fa-circle-check"></i>
                                <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                            </div>
                        )}

                        <div className="form-control mt-2">
                            <button 
                                type="submit" 
                                disabled={status === 'loading'}
                                className="btn btn-outline border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black w-full normal-case font-mono text-lg transition-all"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <span className="loading loading-spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <i className="fa-solid fa-paper-plane ml-2"></i>
                                    </>
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