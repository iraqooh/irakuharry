"use client";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiDjango,
  SiPostgresql,
  SiAppwrite,
  SiDocker,
  SiGit,
  SiFigma,
  SiPython
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Django", icon: SiDjango, color: "text-indigo-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "Appwrite", icon: SiAppwrite, color: "text-pink-600" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "Figma", icon: SiFigma, color: "text-purple-600" },
  { name: "Python", icon: SiPython, color: "text-black dark:text-white" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life with performance, scalability, and beautiful design.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.15, 
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <skill.icon 
                  size={48} 
                  className={`${skill.color} group-hover:scale-110 transition-transform duration-300`} 
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>

              {/* Optional: Tooltip on hover */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                  {skill.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus: Soft skills or proficiency levels */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 italic">
            Clean Code • Performance Optimization • Responsive Design • Team Collaboration • Problem Solving
          </p>
        </motion.div>
      </div>
    </section>
  );
}