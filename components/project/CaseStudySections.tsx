import type { Project } from "@/data/types";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { ProjectScreenshot } from "./ProjectScreenshot";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

function CaseStudyBlock({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="border-t border-border py-12 first:border-t-0 first:pt-0">
      <div className="mb-6 flex items-baseline gap-3">
        <span className="text-sm font-semibold text-accent tabular-nums">{number}</span>
        <h2 className="text-2xl font-semibold text-fg md:text-3xl">{title}</h2>
      </div>
      {children}
    </Reveal>
  );
}

export function CaseStudySections({ project }: { project: Project }) {
  const caseStudy = project.caseStudy;
  if (!caseStudy) return null;

  return (
    <div>
      <CaseStudyBlock number="01" title="Problema">
        <p className="max-w-2xl text-fg-muted">{caseStudy.problem}</p>
      </CaseStudyBlock>

      <CaseStudyBlock number="02" title="Solución">
        <p className="max-w-2xl text-fg-muted">{caseStudy.solution}</p>
      </CaseStudyBlock>

      <CaseStudyBlock number="03" title="Arquitectura">
        <ArchitectureDiagram flow={caseStudy.architectureFlow} />
      </CaseStudyBlock>

      <CaseStudyBlock number="04" title="Funcionalidades">
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudy.modules.map((module) => (
            <div key={module.title}>
              <ProjectScreenshot
                src={module.imageSrc}
                alt={module.title}
                isPlaceholder={module.isPlaceholderImage}
              />
              <h3 className="mt-4 font-medium text-fg">{module.title}</h3>
              <p className="mt-1 text-sm text-fg-muted">{module.description}</p>
            </div>
          ))}
        </div>
      </CaseStudyBlock>

      <CaseStudyBlock number="05" title="Stack">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </CaseStudyBlock>

      <CaseStudyBlock number="06" title="Desafíos técnicos">
        <ul className="grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-2">
          {caseStudy.challenges.map((challenge) => (
            <li key={challenge} className="flex items-center gap-2 text-fg-muted">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {challenge}
            </li>
          ))}
        </ul>
      </CaseStudyBlock>

      <CaseStudyBlock number="07" title="Resultado">
        <p className="max-w-2xl text-fg-muted">{caseStudy.result}</p>
      </CaseStudyBlock>

      <CaseStudyBlock number="08" title="Estado">
        <ProjectStatusBadge status={project.status} label={project.statusLabel} />
      </CaseStudyBlock>
    </div>
  );
}
