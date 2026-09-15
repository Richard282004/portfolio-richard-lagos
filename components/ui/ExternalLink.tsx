import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { externalLinkProps } from "@/utils/external-link";

type Variant = "primary" | "secondary" | "ghost" | "inline";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:opacity-90 rounded-full px-5 py-2.5 text-sm font-medium",
  secondary:
    "border border-border bg-surface text-fg hover:border-accent/50 rounded-full px-5 py-2.5 text-sm font-medium",
  ghost: "text-fg-muted hover:text-fg text-sm",
  inline: "text-accent hover:underline underline-offset-4",
};

export function ExternalLink({
  href,
  children,
  variant = "inline",
  showIcon = true,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  showIcon?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...externalLinkProps}
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors",
        variantClasses[variant],
        className
      )}
    >
      {children}
      {showIcon && <ArrowUpRight className="size-4" aria-hidden="true" />}
    </a>
  );
}
