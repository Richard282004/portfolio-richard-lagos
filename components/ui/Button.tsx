import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:opacity-90",
  secondary: "border border-border bg-surface text-fg hover:border-accent/50",
  ghost: "text-fg-muted hover:text-fg",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
