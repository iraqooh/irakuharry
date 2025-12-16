// components/Footer.tsx
"use client";

import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 px-6 bg-black dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-6 text-gray-500">
          <Link href="https://github.com/iraqooh" target="_blank" rel="noreferrer" className="hover:text-lime-600 transition">
            <Github size={24} />
          </Link>
          <Link href="https://twitter.com/iraqooh" target="_blank" rel="noreferrer" className="hover:text-lime-600 transition">
            <Twitter size={24} />
          </Link>
          <Link href="https://linkedin.com/in/iraqooh" target="_blank" rel="noreferrer" className="hover:text-lime-600 transition">
            <Linkedin size={24} />
          </Link>
          <Link href="mailto:iraqooh@gmail.com" className="hover:text-lime-600 transition">
            <Mail size={24} />
          </Link>
        </div>

        <p className="text-lime-600 dark:text-indigo-400">
          &copy; {year ?? "—"} Iraku Harry. Built with Next.js, Tailwind & Appwrite.
        </p>
      </div>
    </footer>
  );
}
