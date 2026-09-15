import { cn } from "@/utils/cn";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
        variant === "accent" && "border-accent/40 bg-accent/10 text-accent",
        variant === "muted" && "border-border bg-surface text-fg-muted",
        variant === "default" && "border-border bg-surface text-fg",
        className
      )}
    >
      {children}
    </span>
  );
}
