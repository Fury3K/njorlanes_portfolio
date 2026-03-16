"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    // Hide default cursor
    document.documentElement.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0 });
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const hoverSelector =
      "a, button, .glass-card, .tech-badge, .social-btn, .project-scroll-image, [data-cursor-hover], input, textarea";

    const onMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest(hoverSelector)) {
        gsap.to(ring, { scale: 1.6, borderColor: "rgba(255,255,255,0.5)", duration: 0.3 });
        gsap.to(dot, { opacity: 0, duration: 0.2 });
      }
    };

    const onMouseOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest(hoverSelector)) {
        gsap.to(ring, { scale: 1, borderColor: "rgba(255,255,255,0.3)", duration: 0.3 });
        gsap.to(dot, { opacity: 1, duration: 0.2 });
      }
    };

    const onMouseLeaveWindow = () => {
      gsap.to(dot, { opacity: 0, duration: 0.2 });
      gsap.to(ring, { opacity: 0, duration: 0.2 });
    };

    const onMouseEnterWindow = () => {
      gsap.to(dot, { opacity: 1, duration: 0.2 });
      gsap.to(ring, { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" />
    </>
  );
};

export default CustomCursor;
