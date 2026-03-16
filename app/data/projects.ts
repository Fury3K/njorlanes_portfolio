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
      "An AI-powered learning assistant designed to enhance study efficiency using Gemini API.",
    image: "/AudioScholar.png",
    badges: ["React", "Gemini API", "Tailwind"],
    githubUrl: "https://github.com/MasuRii/AudioScholar",
    liveUrl: "https://audioscholar.vercel.app/",
  },
  {
    number: "02",
    title: "Brisa Solei Resort",
    description:
      "A modern, elegant resort booking web application for seamless reservations.",
    image: "/BrisaSolei.png",
    badges: ["Next.js", "Tailwind", "Full-Stack"],
    githubUrl: "https://github.com/themarneilx/resort-booking",
    liveUrl: "https://brisasolei.netlify.app/",
  },
  {
    number: "03",
    title: "Cain & Abel",
    description:
      "Entry for the Proweaver Hackathon PromptQuest competition.",
    image: "/CainAndAbel.png",
    badges: ["Hackathon", "PromptQuest"],
    githubUrl: "https://github.com/Fury3K/Cain-and-Abel",
  },
  {
    number: "04",
    title: "WishPay",
    description:
      "A comprehensive platform for managing and fulfilling wishlist payments.",
    image: "/Wishpay.png",
    badges: ["Web App", "Full-Stack"],
    githubUrl: "https://github.com/Fury3K/wishpayments",
    liveUrl: "https://wishpay.marneilx.org/",
  },
];
