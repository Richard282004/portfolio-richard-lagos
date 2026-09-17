"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Project } from "@/data/types";
import { ProjectScreenshot } from "./ProjectScreenshot";
import { imageReveal } from "@/utils/motion-variants";
import { externalLinkProps } from "@/utils/external-link";
import { cn } from "@/utils/cn";

export function ProjectImageReveal({ project, className }: { project: Project; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-14, 14]);

  const href = project.demoUrl ?? (project.caseStudy ? `/proyectos/${project.slug}` : null);
  const isExternal = Boolean(project.demoUrl);
  const label = project.demoUrl ? "Ver página" : "Ver proyecto";

  const content = (
    <motion.div
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={imageReveal}
      className={cn("group/image relative", className)}
    >
      <motion.div style={{ y: parallaxY }}>
        <motion.div
          whileHover={reducedMotion ? undefined : { scale: 1.03 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-2xl transition-shadow duration-500 group-hover/image:shadow-[0_0_0_1px_var(--color-accent)]"
        >
          <ProjectScreenshot
            src={project.screenshotSrc}
            alt={`Screenshot de ${project.name}`}
            isPlaceholder={project.isPlaceholderImage}
            className="pointer-events-none border-0"
          />
        </motion.div>
      </motion.div>

      {href && (
        <span
          className="pointer-events-none absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-bg/90 px-4 py-2 text-sm font-medium text-fg opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover/image:translate-y-0 group-hover/image:opacity-100"
          aria-hidden="true"
        >
          {label}
          <ArrowUpRight className="size-4" />
        </span>
      )}
    </motion.div>
  );

  if (!href) return content;

  if (isExternal) {
    return (
      <a href={href} {...externalLinkProps} aria-label={`${label}: ${project.name}`} className="block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={`${label}: ${project.name}`} className="block">
      {content}
    </Link>
  );
}
