"use client";

import React, { useState, FormEvent, useRef } from "react";
import { gsap } from "@/app/lib/gsap";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Button push animation on submit
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.querySelector("button"),
        { scale: 0.95 },
        { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" }
      );
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message"
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 lg:px-10 max-w-7xl mx-auto relative"
    >
      {/* Section header */}
      <div className="relative mb-20 gs-reveal opacity-0">
        <span className="section-number">04</span>
        <div className="relative z-10">
          <div className="section-label mb-3">// Get in Touch</div>
          <h2 className="gs-scramble font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            What&apos;s Next?
          </h2>
        </div>
        <div className="accent-line w-32 mt-4" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left: Contact info + socials */}
        <div className="gs-reveal opacity-0 flex flex-col justify-center">
          <h3 className="font-display font-extrabold text-5xl sm:text-6xl tracking-[-0.04em] leading-[0.88] mb-8">
            <span className="text-[var(--color-text-primary)] block">
              Get In
            </span>
            <span className="text-[var(--color-text-primary)] block">Touch.</span>
          </h3>

          <p className="text-[var(--color-body)] leading-relaxed mb-10 max-w-md">
            Although I&apos;m currently looking for new opportunities, my inbox
            is always open. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>

          {/* Contact info rows */}
          <div className="space-y-4 mb-10">
            {[
              {
                icon: "fa-envelope",
                label: "Email",
                value: "n8thanjohn@gmail.com",
              },
              {
                icon: "fa-phone",
                label: "Phone",
                value: "0969 534 3645",
              },
              {
                icon: "fa-location-dot",
                label: "Location",
                value: "Guizo, Mandaue City, Philippines 6014",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] group-hover:text-white group-hover:border-white/20 transition-all duration-300 shrink-0">
                  <i className={`fa-solid ${item.icon} text-sm`} />
                </div>
                <div>
                  <p className="text-[10px] text-[var(--color-text-muted)] font-mono uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social buttons */}
          <div className="flex gap-3">
            {[
              {
                icon: "fa-brands fa-facebook-f",
                url: "https://www.facebook.com/n8thanjohn",
                title: "Facebook",
              },
              {
                icon: "fa-brands fa-instagram",
                url: "https://www.instagram.com/nj.orlanes/",
                title: "Instagram",
              },
              {
                icon: "fa-brands fa-github",
                url: "https://github.com/Fury3K",
                title: "GitHub",
              },
              {
                icon: "fa-solid fa-file-arrow-down",
                url: "/ORLANES_Resume.pdf",
                title: "Download CV",
                download: "Nathan_John_Orlanes_Resume.pdf",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target={social.download ? "_self" : "_blank"}
                rel="noopener noreferrer"
                download={social.download}
                className="social-btn"
                title={social.title}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="gs-reveal opacity-0 glass-card p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

          <h3 className="text-[var(--color-text-primary)] font-display font-bold text-xl mb-8 flex items-center gap-3 relative z-10">
            Send me a message
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 relative z-10"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="How can I help you?"
                className="form-input resize-none"
              />
            </div>

            {/* Error alert */}
            {status === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-red-900/10 border border-red-900/30 text-red-400 text-sm">
                <i className="fa-solid fa-circle-exclamation" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success alert */}
            {status === "success" && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/20 text-white text-sm">
                <i className="fa-solid fa-circle-check" />
                <span>
                  Message sent successfully! I&apos;ll get back to you soon.
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 bg-white text-[var(--color-background)] font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shimmer-gold mt-2"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-[var(--color-background)]/40 border-t-[var(--color-background)] rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <i className="fa-regular fa-paper-plane text-xs" />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
