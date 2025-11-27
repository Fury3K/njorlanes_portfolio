"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas size
    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Mouse tracking
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Star particles
    const stars: { 
      x: number; 
      y: number; 
      originX: number; 
      originY: number; 
      size: number; 
      alpha: number; 
      vx: number; 
      vy: number; 
    }[] = [];
    
    const numStars = 200; // Number of stars
    const repulsionRadius = 150; // Distance at which stars react to cursor
    const returnSpeed = 0.05; // Speed at which stars return to original position

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: Math.random() * width,
        originY: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        vx: 0,
        vy: 0,
      });
    }

    // Animation loop using GSAP ticker for smooth performance
    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw stars
      stars.forEach((star) => {
        // Calculate distance to mouse
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Repulsion logic
        if (distance < repulsionRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (repulsionRadius - distance) / repulsionRadius;
          const moveX = Math.cos(angle) * force * 5; // Push strength
          const moveY = Math.sin(angle) * force * 5;
          
          star.x -= moveX;
          star.y -= moveY;
        } else {
          // Return to original position (drift effect)
          // Add a slight drift to origin to make it dynamic
          star.originX += (Math.random() - 0.5) * 0.2;
          star.originY += (Math.random() - 0.5) * 0.2;
          
          // Wrap around screen for drifting origin
          if (star.originX < 0) star.originX = width;
          if (star.originX > width) star.originX = 0;
          if (star.originY < 0) star.originY = height;
          if (star.originY > height) star.originY = 0;

          // Smoothly move back to origin (or drifting origin)
          star.x += (star.originX - star.x) * returnSpeed;
          star.y += (star.originY - star.y) * returnSpeed;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
    };

    gsap.ticker.add(render);

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(render);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-0 transition-opacity duration-500"
      style={{
        // Only show in dark mode.
        // We can use CSS variable or data-theme check in CSS, 
        // but Tailwind's 'dark:' prefix works if 'darkMode' is configured or we use a CSS rule.
        // Since we are using daisyUI/data-theme, we can use a global CSS rule or conditional class.
        // Simplest approach: Use a CSS module or inline style that checks the data attribute context if possible,
        // OR just rely on the parent container (Layout) to control visibility via CSS.
        // Let's try using a class that we will define in globals.css or rely on the 'dark' class if Next.js is set up for it.
      }}
      id="galaxy-canvas"
    />
  );
};

export default GalaxyBackground;
