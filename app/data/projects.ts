export interface Project {
  number: string;
  title: string;
  description: string;
  image: string;
  badges: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "AudioScholar",
    description:
      "A full-stack AI-powered learning assistant that processes audio lectures and generates summaries, flashcards, and quizzes. Built with a React frontend, Spring Boot backend, Firebase auth, and Google's Gemini API for document and audio intelligence.",
    image: "/AudioScholar.png",
    badges: ["React", "Spring Boot", "Firebase", "Gemini API", "Tailwind"],
    githubUrl: "https://github.com/MasuRii/AudioScholar",
    liveUrl: "https://audioscholar.vercel.app/",
  },
  {
    number: "02",
    title: "Brisa Solei Resort",
    description:
      "A full-stack resort booking platform with room browsing, reservation management, and secure authentication. Features a Next.js frontend, PostgreSQL database via Drizzle ORM, and a polished UI built with Ant Design and Tailwind.",
    image: "/BrisaSolei.png",
    badges: ["Next.js", "PostgreSQL", "Drizzle ORM", "Ant Design", "Tailwind"],
    githubUrl: "https://github.com/themarneilx/resort-booking",
    liveUrl: "https://brisasolei.netlify.app/",
  },
  {
    number: "03",
    title: "Cain & Abel",
    description:
      "A 2D cooperative puzzle platformer built for the ProWeaver Hackathon PromptQuest 2025. Players control two brothers with unique abilities — Cain's earth manipulation and Abel's agility — to solve puzzles across story-driven levels. Built entirely with vanilla JavaScript and the HTML5 Canvas API.",
    image: "/CainAndAbel.png",
    badges: ["Vanilla JS", "HTML5 Canvas", "CSS3", "Hackathon"],
    githubUrl: "https://github.com/Fury3K/Cain-and-Abel",
  },
  {
    number: "04",
    title: "WishPay",
    description:
      "A full-stack wishlist payment platform where users can create wishlists and receive contributions from others. Features Google OAuth, JWT-based auth, email notifications via Nodemailer, and a PostgreSQL backend powered by Drizzle ORM.",
    image: "/Wishpay.png",
    badges: ["Next.js", "PostgreSQL", "Drizzle ORM", "Google OAuth", "Tailwind"],
    githubUrl: "https://github.com/Fury3K/wishpayments",
    liveUrl: "https://wishpay.marneilx.org/",
  },
  {
    number: "05",
    title: "Game of the Generals",
    description:
      "A 3D web-based adaptation of the classic Filipino strategy board game, featuring real-time multiplayer.",
    image: "/Game of the Generals.png",
    badges: ["Three.js", "React", "Next.js", "Socket.io"],
    githubUrl: "https://github.com/Fury3K/3D-Game-of-the-Generals",
  },
  {
    number: "06",
    title: "InventorySys",
    description:
      "A SaaS inventory management platform with analytics, authentication, and a PostgreSQL backend.",
    image: "/inventorySys.png",
    badges: ["Next.js", "PostgreSQL", "Drizzle ORM", "Tailwind"],
    githubUrl: "https://github.com/Fury3K/inventorySys",
  },
  {
    number: "07",
    title: "JeepMe",
    description:
      "An interactive jeepney route finder for Metro Cebu, Philippines. Drop pins on a map to instantly find matching routes, estimate fares based on LTFRB guidelines, and see paths snapped to real streets via OSRM. Covers 55+ Metro Cebu jeepney lines.",
    image: "/JeepMe.png",
    badges: ["Next.js", "Leaflet", "GSAP", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/RecursiveDev/JeepMe",
  },
];
