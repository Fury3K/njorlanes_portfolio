"use client";

import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto relative">
      <div className="mesh-gradient" />

      <div className="relative mb-20 gs-reveal opacity-0">
        <span className="section-number">01</span>
        <div className="relative z-10">
          <div className="section-label mb-3"></div>
          <h2 className="gs-scramble font-display font-bold text-3xl md:text-4xl tracking-tight">
            About Me
          </h2>
        </div>
        <div className="accent-line w-32 mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Bio Card */}
        <div className="glass-card p-8 md:p-10 md:col-span-2 gs-reveal opacity-0">
          <div className="space-y-5 text-[var(--color-body)] leading-relaxed text-[0.9375rem]">
            <p>
              Hello! My name is Nathan John and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2019 when I decided to try editing custom Tumblr themes — turns out
              hacking together HTML &amp; CSS is pretty fun!
            </p>
            <p>
              Fast-forward to today, and I&apos;ve had the privilege of building
              software for university projects and hackathons. My main focus
              these days is building accessible, inclusive products and digital
              experiences.
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Here are a few technologies I&apos;ve been working with recently:
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 mt-6">
            {["JavaScript (ES6+)", "TypeScript", "React 19", "Next.js 16", "Node.js", "Spring Boot"].map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div className="glass-card p-8 md:p-10 gs-reveal opacity-0">
          <h3 className="text-[var(--color-text-primary)] font-display font-semibold text-lg mb-6 flex items-center gap-2">
            <i className="fa-solid fa-graduation-cap text-[var(--color-text-secondary)] text-base" />
            Education
          </h3>
          <div className="space-y-6 border-l border-[var(--color-border)] ml-2 pl-6 relative">
            <div className="absolute top-0 bottom-0 -left-px w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
            {[
              { title: "BS Information Technology", school: "Cebu Institute of Technology - University", year: "2022 - Present", active: true },
              { title: "BS Computer Engineering", school: "University of San Carlos", year: "2021 - 2022", active: false },
              { title: "Senior High School", school: "Saint Louis College Cebu", year: "2019 - 2021", active: false },
            ].map((edu, i) => (
              <div key={i} className="relative group">
                <span className={`absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-[var(--color-background)] transition-all duration-300 ${
                  edu.active
                    ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                    : "bg-[var(--color-border)] group-hover:bg-[var(--color-text-secondary)]"
                }`} />
                <h4 className={`font-semibold text-sm ${edu.active ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]"}`}>{edu.title}</h4>
                <p className="text-[var(--color-body)] text-sm mt-1">{edu.school}</p>
                <p className="text-xs text-[var(--color-text-muted)] font-mono mt-1.5 flex items-center gap-2">
                  {edu.year}
                  {edu.active && (
                    <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase bg-white/5 text-[var(--color-text-secondary)] rounded border border-white/10 shimmer-badge">
                      Current
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Card */}
        <div className="glass-card p-8 md:p-10 md:col-span-3 gs-reveal opacity-0">
          <h3 className="text-[var(--color-text-primary)] font-display font-semibold text-lg mb-6 flex items-center gap-2">
            <i className="fa-solid fa-award text-[var(--color-text-secondary)] text-base" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { title: "Accenture Technology Academy", org: "Certificate of Completion (2026)", icon: "fa-solid fa-trophy", url: "https://drive.google.com/file/d/1RVGTylVo3ESJTQt0qtFd5avjqu_AVd-W/view?usp=sharing" },
              { title: "Foundations of Prompt Engineering", org: "Amazon Web Services (2025)", icon: "fa-brands fa-aws", url: "https://drive.google.com/file/d/1OzDXR47cX6yLwAtWAXoxpvOIW-vse4zq/view?usp=sharing" },
              { title: "Introduction to Generative AI - Art of the Possible", org: "Amazon Web Services (2025)", icon: "fa-brands fa-aws", url: "https://drive.google.com/file/d/1sJ67RMliJZTzeqVogAClZTHl-7b9rVNd/view?usp=sharing" },
              { title: "Planning a Generative AI Project", org: "Amazon Web Services (2025)", icon: "fa-brands fa-aws", url: "https://drive.google.com/file/d/14hwR65ZoSQvTw_a8lPJj_lTtaTl9jhdG/view?usp=sharing" },
              { title: "Building a Generative AI-Ready Organization", org: "Amazon Web Services (2025)", icon: "fa-brands fa-aws", url: "https://drive.google.com/file/d/1Nnv3Un6JeeuebiLN_IquzncEVXhru9pb/view?usp=sharing" },
              { title: "Amazon Q Introduction", org: "Amazon Web Services (2025)", icon: "fa-brands fa-aws", url: "https://drive.google.com/file/d/1AiqpePpMZK8ZBKh3zS8xD1sqay8rkprV/view?usp=sharing" },
              { title: "Generative AI Learning Plan for Decision Makers", org: "Amazon Web Services (2025)", icon: "fa-brands fa-aws", url: "https://drive.google.com/file/d/14yZvzt_wPZ8cqEwHlOmnrLJtuhDFV1UF/view?usp=sharing" },
              
              


              { title: "Proweaver Hackathon PromptQuest", org: "Certificate of Participation (2025)", icon: "fa-solid fa-trophy", url: "https://drive.google.com/file/d/1cU-frAdqfDmDhpwRfEqBH7W_KNexFwsy/view?usp=sharing" },
              { title: "AWS Cloud Architecture", org: "Amazon Web Services (2025)", icon: "fa-brands fa-aws", url: "https://www.credly.com/badges/2163b9d2-be43-4313-83f1-c2e11972d829/public_url" },
              { title: "AWS Cloud Foundations", org: "Amazon Web Services (2025)", icon: "fa-brands fa-aws", url: "https://www.credly.com/badges/a57bd9de-4b29-4fa9-8bd1-c799e93da891" },
            ].map((cert, i) => (
              <a key={i} href={cert.url} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-xl border border-[var(--color-border)] hover:border-white/10 bg-[var(--color-surface)] hover:bg-[var(--color-accent-muted)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(255,255,255,0.03)]">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)] group-hover:text-white group-hover:scale-110 group-hover:border-white/15 transition-all duration-300 text-lg shrink-0 shadow-sm">
                  <i className={cert.icon} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300 truncate">{cert.title}</h4>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{cert.org}</p>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square text-[var(--color-text-muted)] group-hover:text-white ml-auto transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
