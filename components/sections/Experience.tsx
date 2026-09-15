import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="04" title="Experiencia" subtitle="Mi recorrido profesional" />

        <div className="relative space-y-12 border-l border-border pl-8">
          {experience.map((item) => (
            <Reveal key={`${item.company}-${item.startDate}`} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 size-2.5 rounded-full bg-accent" aria-hidden="true" />
              <p className="font-mono text-sm text-accent">
                {item.startDate} — {item.endDate ?? "Actualidad"}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-fg">{item.company}</h3>
              <p className="text-fg-muted">
                {item.role} · {item.location}
              </p>
              <p className="mt-3 max-w-2xl text-fg-muted">{item.description}</p>
              <ul className="mt-3 space-y-1">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex items-start gap-2 text-sm text-fg-muted">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-fg-muted" aria-hidden="true" />
                    {responsibility}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
