"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { StackChip } from "@/components/ui/StackChip";
import type { SkillCategory } from "@/data/types";

export function StackCategory({ group, delay = 0 }: { group: SkillCategory; delay?: number }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Reveal delay={delay} className="group border-b border-border pb-6">
      <h3 className="text-sm font-medium text-fg-muted transition-colors duration-300 group-hover:text-fg">
        {group.category}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item, i) => (
          <StackChip
            key={item.name}
            primary={item.primary}
            dimmed={hoveredIndex !== null && hoveredIndex !== i}
            onHoverChange={(hovered) => setHoveredIndex(hovered ? i : null)}
          >
            {item.name}
          </StackChip>
        ))}
      </div>
    </Reveal>
  );
}
