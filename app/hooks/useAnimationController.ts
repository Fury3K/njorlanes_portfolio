"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/app/lib/gsap";

export type BootState = "booting" | "fading" | "complete";

export function useAnimationController(bootState: BootState) {
  useEffect(() => {
    if (bootState !== "complete") return;

    // Small delay for DOM to fully render after fade-in
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // ─── 1. Hero Title — Character-by-character reveal ───
        const heroTitle = document.querySelector(".gs-hero-title");
        if (heroTitle) {
          const text = heroTitle.textContent || "";
          const spans = heroTitle.querySelectorAll("span.block");

          spans.forEach((span) => {
            const chars = span.textContent || "";
            span.innerHTML = "";
            chars.split("").forEach((char) => {
              const el = document.createElement("span");
              el.textContent = char === " " ? "\u00A0" : char;
              el.className = "inline-block hero-char";
              el.style.opacity = "0";
              span.appendChild(el);
            });
          });

          gsap.fromTo(
            ".hero-char",
            {
              opacity: 0,
              y: 80,
              rotateX: -60,
              filter: "blur(6px)",
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
              duration: 1.2,
              stagger: 0.025,
              ease: "power4.out",
            }
          );
        }

        // ─── 2. Hero stagger reveals ───
        gsap.fromTo(
          ".gs-hero-reveal",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: "power4.out",
            delay: 0.4,
          }
        );

        // ─── 3. Section heading reveals with scramble-like effect ───
        const headings = document.querySelectorAll(".gs-scramble");
        headings.forEach((heading) => {
          const el = heading as HTMLElement;
          const originalText = el.textContent || "";
          const chars = "!<>-_\\/[]{}—=+*^?#01";

          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              onStart: () => {
                let iteration = 0;
                const maxIterations = 12;
                const interval = setInterval(() => {
                  iteration++;
                  const progress = iteration / maxIterations;
                  let result = "";
                  for (let i = 0; i < originalText.length; i++) {
                    if (originalText[i] === " ") {
                      result += " ";
                    } else if (i < originalText.length * progress) {
                      result += originalText[i];
                    } else {
                      result += chars[Math.floor(Math.random() * chars.length)];
                    }
                  }
                  el.textContent = result;
                  if (iteration >= maxIterations) {
                    clearInterval(interval);
                    el.textContent = originalText;
                  }
                }, 50);
              },
            }
          );
        });

        // ─── 4. Standard scroll reveals ───
        ScrollTrigger.batch(".gs-reveal", {
          start: "top 88%",
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { opacity: 0, y: 40, scale: 0.97 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.06,
                ease: "power3.out",
                overwrite: "auto",
              }
            );
          },
          onLeaveBack: (elements) => {
            gsap.to(elements, {
              opacity: 0,
              y: 40,
              scale: 0.97,
              duration: 0.4,
              overwrite: "auto",
            });
          },
        });

        // ─── 5. Tech badge pop-in ───
        ScrollTrigger.batch(".tech-badge", {
          start: "top 90%",
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { opacity: 0, scale: 0.8, y: 10 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.04,
                ease: "back.out(1.7)",
                overwrite: "auto",
              }
            );
          },
          onLeaveBack: (elements) => {
            gsap.to(elements, {
              opacity: 0,
              scale: 0.8,
              y: 10,
              duration: 0.3,
              overwrite: "auto",
            });
          },
        });

        // ─── 6. Social button stagger ───
        ScrollTrigger.batch(".social-btn", {
          start: "top 90%",
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { opacity: 0, scale: 0.8, y: 15 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.06,
                ease: "back.out(1.7)",
                overwrite: "auto",
              }
            );
          },
        });

        // ─── 7. Glow orb parallax ───
        gsap.utils.toArray<HTMLElement>(".glow-orb").forEach((orb) => {
          gsap.to(orb, {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
              trigger: orb.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        // ─── 8. Glass card hover-lift animations ───
        ScrollTrigger.batch(".glass-card", {
          start: "top 90%",
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                overwrite: "auto",
              }
            );
          },
          onLeaveBack: (elements) => {
            gsap.to(elements, {
              opacity: 0,
              y: 30,
              duration: 0.35,
              overwrite: "auto",
            });
          },
        });
      });

      return () => ctx.revert();
    }, 150);

    return () => clearTimeout(timer);
  }, [bootState]);
}
