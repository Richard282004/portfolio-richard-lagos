import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/project/ProjectCard";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="03" title="Proyectos" subtitle="Trabajo seleccionado" />

        <div className="space-y-16 md:space-y-24">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
