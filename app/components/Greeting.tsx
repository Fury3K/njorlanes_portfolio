"use client";

import React, { useState, useEffect } from "react";

const greetings = [
  "Hello!",
  "Kumusta!",
  "Mabuhay!",
  "Hola!",
  "Bonjour!",
  "Hallo!",
  "Ciao!",
  "こんにちは!",
  "안녕하세요!",
  "Привет!",
  "Olá!",
  "नमस्ते!",
];

const Greeting: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [greetingIdx, setGreetingIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = greetings[greetingIdx];

    let delay: number;
    if (!isDeleting && charIdx < current.length) {
      delay = 150 + Math.random() * 80;
    } else if (!isDeleting && charIdx === current.length) {
      delay = 2000;
    } else if (isDeleting && charIdx > 0) {
      delay = 60;
    } else {
      delay = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIdx < current.length) {
        setCharIdx((prev) => prev + 1);
        setDisplayText(current.slice(0, charIdx + 1));
      } else if (!isDeleting && charIdx === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIdx > 0) {
        setCharIdx((prev) => prev - 1);
        setDisplayText(current.slice(0, charIdx - 1));
      } else {
        setIsDeleting(false);
        setGreetingIdx((prev) => (prev + 1) % greetings.length);
        setCharIdx(0);
        setDisplayText("");
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, greetingIdx]);

  return (
    <>
      {displayText}
      <span className="typing-cursor" style={{ height: "0.85em", width: "3px" }} />
    </>
  );
};

export default Greeting;
