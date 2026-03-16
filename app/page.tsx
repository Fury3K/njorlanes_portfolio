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
        <Skills />
        <Marquee />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
