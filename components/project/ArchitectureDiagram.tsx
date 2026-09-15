import { ArrowDown } from "lucide-react";

export function ArchitectureDiagram({ flow }: { flow: string[] }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {flow.map((step, i) => (
        <div key={step} className="flex flex-col items-center gap-2">
          <div className="rounded-xl border border-border bg-surface px-6 py-3 font-mono text-sm text-fg">
            {step}
          </div>
          {i < flow.length - 1 && (
            <ArrowDown className="size-4 text-fg-muted" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}
