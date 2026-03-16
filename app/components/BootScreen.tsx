"use client";

import React, { useEffect, useRef, useState } from "react";

interface BootScreenProps {
  onComplete: () => void;
}

const bootLogs = [
  { text: "BIOS Date 03/16/26 01:00:00 Ver: 2.0.0", delay: 50 },
  { text: "CPU: Intel Core i5-12500H @ 4.50GHz", delay: 120 },
  { text: "Memory Test: 16384K OK", delay: 200 },
  { text: "Detecting Primary Master ... /dev/nvme0n1", delay: 320 },
  { text: "Booting from local disk...", delay: 480 },
  { text: "Loading kernel modules for web_deployment...", delay: 560 },
  { text: "[ OK ] Loaded node_modules.", delay: 640 },
  { text: "[ OK ] Mounted root filesystem.", delay: 720 },
  { text: "[ OK ] Started Network Manager.", delay: 850 },
  { text: "[ OK ] Loaded modules: Next.js, GSAP, Nodemailer, Tailwind.", delay: 1050 },
  { text: "[ OK ] Reached target Graphical Interface.", delay: 1250 },
  { text: "Initializing NJOrlanes Portfolio v2.0...", delay: 1450 },
  { text: "Welcome, User :)", delay: 1700 },
];

function formatLog(text: string): string {
  return text.replace(
    /\[ OK \]/g,
    '<span style="color: #fff; font-weight: 700;">[ OK ]</span>'
  );
}

const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    bootLogs.forEach((log) => {
      timers.push(setTimeout(() => setVisibleLogs((prev) => [...prev, log.text]), log.delay));
    });
    timers.push(setTimeout(onComplete, bootLogs[bootLogs.length - 1].delay + 600));
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  useEffect(() => {
    if (terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [visibleLogs]);

  return (
    <div className="fixed inset-0 bg-[#06060A] z-[9999] flex items-center justify-center">
      <div className="scanline-overlay" />
      <div ref={terminalRef} className="w-full max-w-2xl max-h-[80vh] overflow-y-auto px-8 py-6 font-mono text-sm leading-relaxed">
        {visibleLogs.map((log, i) => (
          <div
            key={i}
            className="text-[var(--color-text-secondary)] mb-1 opacity-0 animate-[fadeIn_0.15s_ease-out_forwards]"
            dangerouslySetInnerHTML={{ __html: formatLog(log) }}
          />
        ))}
        {visibleLogs.length > 0 && (
          <div className="mt-4 text-[var(--color-text-secondary)]">
            <span className="text-white">root@njportfolio</span>
            <span className="text-[var(--color-text-muted)]">:</span>
            <span className="text-[var(--color-text-secondary)]">~</span>
            <span className="text-[var(--color-text-muted)]"># </span>
            <span className="cursor-block" />
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default BootScreen;
