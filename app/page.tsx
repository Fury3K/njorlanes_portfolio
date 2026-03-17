"use client";

import { useState, useEffect } from "react";
import BootScreen from "./components/BootScreen";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useAnimationController, BootState } from "./hooks/useAnimationController";

/* Wave SVG divider components */
function WaveTop() {
  return (
    <div className="wave-divider" style={{ marginBottom: "-1px" }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          d="M0,60 C240,95 480,20 720,55 C960,90 1200,25 1440,50 L1440,100 L0,100 Z"
          fill="var(--color-surface-elevated)"
        />
      </svg>
    </div>
  );
}

function WaveBottom() {
  return (
    <div className="wave-divider" style={{ marginTop: "-1px" }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          d="M0,50 C240,15 480,80 720,45 C960,10 1200,75 1440,40 L1440,0 L0,0 Z"
          fill="var(--color-surface-elevated)"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  const [bootState, setBootState] = useState<BootState>("booting");

  useAnimationController(bootState);

  // Lock scroll during boot
  useEffect(() => {
    if (bootState !== "complete") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [bootState]);

  const handleBootComplete = () => {
    setBootState("fading");
    setTimeout(() => setBootState("complete"), 500);
  };

  return (
    <>
      {/* Boot Screen */}
      {bootState !== "complete" && (
        <div
          className={`fixed inset-0 z-[9999] transition-opacity duration-500 ${
            bootState === "fading" ? "opacity-0" : "opacity-100"
          }`}
        >
          <BootScreen onComplete={handleBootComplete} />
        </div>
      )}

      {/* Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Main Interface */}
      <main
        className={`transition-opacity duration-1000 ${
          bootState === "complete"
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <WaveTop />
        <Skills />
        <WaveBottom />
        <Marquee />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
