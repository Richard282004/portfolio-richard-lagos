import { education, certifications } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

export function Education() {
  return (
    <section id="education" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="05" title="Educación" subtitle="Formación académica" />

        <div className="space-y-10">
          {education.map((item) => (
            <Reveal key={item.institution}>
              <p className="text-sm font-medium text-accent">{item.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-fg">{item.degree}</h3>
              <p className="text-fg-muted">{item.institution}</p>
              <p className="mt-3 max-w-2xl text-fg-muted">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.competencies.map((competency) => (
                  <Tag key={competency}>{competency}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {certifications.length > 0 && (
          <Reveal className="mt-12 border-t border-border pt-8">
            <p className="text-sm font-medium text-fg-muted">Certificaciones y cursos</p>
            <ul className="mt-3 space-y-2">
              {certifications.map((cert) => (
                <li key={cert.name} className="text-fg-muted">
                  {cert.name}, {cert.issuer}
                  {cert.year && ` (${cert.year})`}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
