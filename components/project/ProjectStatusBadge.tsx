import { Lock } from "lucide-react";
import type { ProjectStatus } from "@/data/types";
import { Badge } from "@/components/ui/Badge";

const dotColor: Record<ProjectStatus, string> = {
  production: "bg-emerald-500",
  functional: "bg-emerald-500",
  development: "bg-amber-500",
  private: "bg-fg-muted",
};

export function ProjectStatusBadge({
  status,
  label,
}: {
  status: ProjectStatus;
  label: string;
}) {
  return (
    <Badge variant="muted">
      {status === "private" ? (
        <Lock className="size-3.5" aria-hidden="true" />
      ) : (
        <span className={`size-2 rounded-full ${dotColor[status]}`} aria-hidden="true" />
      )}
      {label}
    </Badge>
  );
}
