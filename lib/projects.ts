import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Pulke ENT - Movies & TV Shows User-sourced Download Links",
    description: "Pulke ENT is a modern movie and TV show discovery platform that provides free download links, powered by the TMDb API, Appwrite, and Google AdSense. It features real-time search, trending titles, SEO-optimized pages, user-submitted download suggestions, and a secure admin moderation panel.",
    image: "/images/pulke-ent.png",
    tech: ["React", "Appwrite", "Vite", "React Router", "Tailwind CSS", "Google AdSense", "Vercel", "TMDB API", "React Helmet Async", "React Hot Toast"],
    live: "https://pulke-ent.vercel.app/",
    github: "https://github.com/iraqooh/pulke_ent",
  },
  // Add more projects...
];