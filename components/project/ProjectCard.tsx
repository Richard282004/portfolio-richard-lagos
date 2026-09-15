import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/types";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ProjectScreenshot } from "./ProjectScreenshot";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { RepoLink } from "./RepoLink";
import { cn } from "@/utils/cn";

export function ProjectCard({ project }: { project: Project }) {
  const imageFirst = project.layout === "image-left";

  return (
    <Reveal>
      <article className="group rounded-3xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/40 md:p-10">
        <div
          className={cn(
            "grid items-center gap-8 md:grid-cols-2 md:gap-12",
            !imageFirst && "md:[&>*:first-child]:order-2"
          )}
        >
          <ProjectScreenshot
            src={project.screenshotSrc}
            alt={`Screenshot de ${project.name}`}
            isPlaceholder={project.isPlaceholderImage}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />

          <div>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="font-mono text-sm text-fg-muted">{project.year}</span>
              <ProjectStatusBadge status={project.status} label={project.statusLabel} />
            </div>

            <h3 className="text-2xl font-semibold text-fg md:text-3xl">{project.name}</h3>
            <p className="mt-3 text-fg-muted">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.demoUrl ? (
                <ExternalLink href={project.demoUrl} variant="primary" showIcon={false}>
                  Ver página
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ExternalLink>
              ) : project.caseStudy ? (
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
                >
                  Ver proyecto
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-fg-muted">
                  Ver detalles
                </span>
              )}
              <RepoLink repoUrl={project.repoUrl} isPrivate={project.isRepoPrivate} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
