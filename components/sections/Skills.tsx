import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  return (
    <section id="stack" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="02" title="Stack" subtitle="Tecnologías con las que trabajo" />

        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05} className="group border-b border-border pb-6">
              <h3 className="text-sm font-medium text-fg-muted transition-colors duration-300 group-hover:text-fg">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item.name} primary={item.primary}>
                    {item.name}
                  </Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
