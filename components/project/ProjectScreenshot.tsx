import Image from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/utils/cn";

export function ProjectScreenshot({
  src,
  alt,
  isPlaceholder,
  className,
}: {
  src: string;
  alt: string;
  isPlaceholder: boolean;
  className?: string;
}) {
  if (isPlaceholder) {
    return (
      <div
        className={cn(
          "flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-gradient-to-br from-surface to-bg text-fg-muted",
          className
        )}
      >
        <ImageOff className="size-6" aria-hidden="true" />
        <span className="font-mono text-xs">TODO: screenshot pendiente</span>
      </div>
    );
  }

  return (
    <div className={cn("relative aspect-video w-full overflow-hidden rounded-2xl border border-border", className)}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
