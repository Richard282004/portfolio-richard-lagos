import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import { CaseStudySections } from "@/components/project/CaseStudySections";
import { RepoLink } from "@/components/project/RepoLink";
import { ProjectStatusBadge } from "@/components/project/ProjectStatusBadge";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.name} — Case Study`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-sm text-fg-muted">{project.year}</span>
          <ProjectStatusBadge status={project.status} label={project.statusLabel} />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-fg md:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-xl text-fg-muted">{project.description}</p>
        <div className="mt-6">
          <RepoLink repoUrl={project.repoUrl} isPrivate={project.isRepoPrivate} />
        </div>

        <div className="mt-4">
          <CaseStudySections project={project} />
        </div>
      </div>
    </section>
  );
}
