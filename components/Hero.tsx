// components/Hero.tsx
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/images/hiraku.png"
            alt="Iraku Harry"
            width={140}
            height={140}
            className="rounded-full mx-auto border-4 border-indigo-600 dark:border-indigo-400 shadow-2xl"
            priority
            unoptimized
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          Hey, I&apos;m Harry
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full-Stack Developer | Next.js & TypeScript Enthusiast
        </p>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          I build exceptional digital experiences with modern web technologies. Currently crafting scalable apps with Next.js, Appwrite, and Tailwind.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
    </section>
  );
}