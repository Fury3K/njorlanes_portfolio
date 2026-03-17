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
        // ─── 1. Hero greeting text — scale entrance ───
        const greetingText = document.querySelector(".greeting-text");
        if (greetingText) {
          gsap.fromTo(
            greetingText,
            { opacity: 0, scale: 0.9, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1,
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

        // ─── 5b. Tech card staggered fade-in-up ───
        ScrollTrigger.batch(".tech-card", {
          start: "top 90%",
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { opacity: 0, y: 14, scale: 0.9 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.04,
                ease: "back.out(1.7)",
                overwrite: "auto",
              }
            );
          },
          onLeaveBack: (elements) => {
            gsap.to(elements, {
              opacity: 0,
              y: 14,
              scale: 0.9,
              duration: 0.3,
              overwrite: "auto",
            });
          },
        });

        // ─── 5c. Tool pill pop-in ───
        ScrollTrigger.batch(".tool-pill", {
          start: "top 92%",
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { opacity: 0, scale: 0.85 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                stagger: 0.03,
                ease: "back.out(1.5)",
                overwrite: "auto",
              }
            );
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

        // ─── 9. Wave divider reveal ───
        gsap.utils.toArray<HTMLElement>(".wave-divider svg").forEach((svg) => {
          gsap.fromTo(
            svg,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: svg,
                start: "top 95%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });

      return () => ctx.revert();
    }, 150);

    return () => clearTimeout(timer);
  }, [bootState]);
}
