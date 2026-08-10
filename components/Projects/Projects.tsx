import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/data";

import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="mx-auto max-w-6xl px-6 py-24 md:px-10"
    >
      <SectionHeading
        className="mb-12"
        eyebrow="Selected Work"
        title="Projects"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 0.15}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
