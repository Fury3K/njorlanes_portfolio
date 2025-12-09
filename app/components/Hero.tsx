"use client";
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

      const words = ["Full-Stack Developer", "Mobile Developer", "Cloud Enthusiast"];
  
    useEffect(() => {
      const handleType = () => {
        const i = loopNum % words.length;
        const fullText = words[i];
  
        setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
  
        if (isDeleting) {
          setTypingSpeed(50); // Faster deleting
        } else {
          setTypingSpeed(100); // Normal typing
        }
  
        if (!isDeleting && text === fullText) {
          setTypingSpeed(2000); // Pause at end
          setIsDeleting(true);
        } else if (isDeleting && text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(500); // Pause before next word
        }
      };
  
      const timer = setTimeout(handleType, typingSpeed);
      return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, words]);
  
    return (
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
              <div className="flex-1 space-y-6 text-center md:text-left gs-reveal">
                  <h2 className="text-4xl md:text-6xl font-bold text-base-content">
                      Hi, I&apos;m <br />                    <span className="text-gradient">Nathan John G. Orlanes</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-base-content/80">
                    <span>{text}</span><span className="cursor">&nbsp;</span>
                </h3>
                <p className="py-4 text-lg text-base-content/70 max-w-lg mx-auto md:mx-0">
                    Highly motivated Full-Stack Developer proficient in building scalable applications across web and mobile platforms. Specialized in robust backend services using Java (Spring Boot) and modern frontends with Next.js and React 19.
                </p>
                <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                    <a href="#projects" className="btn btn-primary text-white shadow-lg shadow-indigo-500/30">View Projects</a>
                    <a href="#contact" className="btn btn-outline btn-primary">Contact Me</a>
                    <a href="/ORLANES_Resume.pdf" download="Nathan_John_Orlanes_Resume.pdf" className="btn btn-secondary text-white shadow-lg">
                        Download CV <i className="fa-solid fa-download"></i>
                    </a>
                </div>
            </div>

            <div className="flex-1 flex justify-center gs-bubble">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                    <img src="/Profile.jpg" alt="Profile" className="rounded-full w-full h-full object-cover border-4 border-base-100 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;