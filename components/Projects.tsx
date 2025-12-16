// components/Projects.tsx
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import { Project } from "@/lib/types";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className={projects.length === 1 ? "w-full" : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"}>
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}