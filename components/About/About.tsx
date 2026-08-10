import { HighlightKeywords } from "@/components/HighlightKeywords";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

const TECH_KEYWORDS = ["Django", "REST APIs"];

export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center md:px-10"
    >
      <SectionHeading
        className="mb-6"
        eyebrow="Who I am"
        title="About Me"
        highlight="Me"
      />
      <ScrollReveal delay={0.15}>
        <p className="text-lg text-muted-foreground">
          Computer Science student at Adama Science and Technology University
          with a strong interest in backend development using{" "}
          <HighlightKeywords
            text="Django, REST APIs, and building real-world web applications."
            keywords={TECH_KEYWORDS}
          />{" "}
          Currently working as a Full-Stack Developer Intern at TilaHealth,
          where I contribute to production-level projects and collaborate with
          experienced developers.
        </p>
        <p className="text-lg text-muted-foreground">
          I enjoy solving complex problems, learning new technologies quickly,
          and turning ideas into reliable software. I&apos;m passionate about
          writing clean, maintainable code and continuously improving my skills
          in backend development, modern web technologies, and software
          engineering best practices.
        </p>
      </ScrollReveal>
    </section>
  );
}
