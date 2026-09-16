"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Project } from "@/data/types";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ProjectScreenshot } from "./ProjectScreenshot";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { RepoLink } from "./RepoLink";
import { cardHover } from "@/utils/motion-variants";
import { cn } from "@/utils/cn";

export function ProjectCard({ project }: { project: Project }) {
  const imageFirst = project.layout === "image-left";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${mouseX}px ${mouseY}px, var(--color-accent), transparent 70%)`;

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  return (
    <Reveal>
      <motion.article
        onMouseMove={handleMouseMove}
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardHover}
        className="group relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 md:p-10"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06]"
          style={{ background: spotlight }}
        />

        <div
          className={cn(
            "relative grid items-center gap-8 md:grid-cols-2 md:gap-12",
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
              <span className="text-sm text-fg-muted">{project.year}</span>
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
                <ExternalLink href={project.demoUrl} variant="primary">
                  Ver página
                </ExternalLink>
              ) : project.caseStudy ? (
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
                >
                  Ver proyecto
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
      </motion.article>
    </Reveal>
  );
}
