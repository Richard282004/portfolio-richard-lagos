import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  return (
    <section id="stack" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="02" title="Stack" subtitle="Tecnologías con las que trabajo" />

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 0.05}
              className="rounded-2xl border border-border bg-surface/40 p-6"
            >
              <p className="font-mono text-xs text-fg-muted">
                {String(i + 1).padStart(2, "0")} — {group.category.toUpperCase()}
              </p>
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
