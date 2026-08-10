import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="mx-auto max-w-6xl px-6 py-24 md:px-10"
    >
      <SectionHeading className="mb-12" eyebrow="Toolkit" title="Skills" />

      <div className="flex flex-col gap-12">
        {skillCategories.map(({ label, icon: CategoryIcon, skills }) => (
          <div key={label} aria-label={label}>
            <ScrollReveal className="mb-5 flex items-center gap-3">
              <CategoryIcon className="size-5 text-primary" />
              <h3 className="text-lg font-semibold tracking-tight">{label}</h3>
              <span
                aria-hidden
                className="h-px flex-1 bg-gradient-to-r from-foreground/15 to-transparent"
              />
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {skills.map(({ name, icon: Icon }, index) => (
                <ScrollReveal key={name} delay={index * 0.08}>
                  <Card className="items-center justify-center gap-3 px-4 py-8 text-center ring-foreground/10 transition-all hover:-translate-y-1 hover:ring-primary/40 hover:shadow-lg hover:shadow-primary/10">
                    <Icon className="size-8 text-primary" />
                    <span className="text-sm font-medium">{name}</span>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
