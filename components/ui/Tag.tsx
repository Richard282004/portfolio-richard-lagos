import { cn } from "@/utils/cn";

export function Tag({
  children,
  primary = false,
  className,
}: {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300 hover:scale-105",
        primary
          ? "border-accent/40 bg-accent/10 text-accent"
          : "border-border bg-surface text-fg-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
