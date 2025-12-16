// components/About.tsx
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image + Fun Facts */}
          <div className="space-y-8">
            <div className="relative">
              <Image
                src="/images/hiraku.png"
                alt="Iraku Harry"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl mx-auto md:mx-0"
              />
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                Available for hire
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
                <p className="text-3xl font-bold text-indigo-600">10+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects Built</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
                <p className="text-3xl font-bold text-indigo-600">2+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Hey! I&apos;m <span className="font-bold text-indigo-600 dark:text-indigo-400">Iraku Harry</span>,
              a passionate Full-Stack Developer based in Arua/Uganda. I love turning ideas into
              beautiful, high-performance web applications using modern tools like Next.js, TypeScript,
              Tailwind CSS, and Appwrite.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              When I&apos;m not coding, you can find me contributing to open source, writing technical blogs,
              exploring new frameworks, or sharing knowledge with the dev community.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Next.js", "TypeScript", "React", "Node.js", "Appwrite", "Tailwind", "Prisma", "PostgreSQL"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="https://linkedin.com/in/iraqooh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}