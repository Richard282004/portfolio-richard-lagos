import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StackCategory } from "./StackCategory";

export function Skills() {
  return (
    <section id="stack" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="02" title="Stack" subtitle="Tecnologías con las que trabajo" />

        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {skills.map((group, i) => (
            <StackCategory key={group.category} group={group} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
