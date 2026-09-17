"use client";

import type { ReactNode } from "react";
import { externalLinkProps } from "@/utils/external-link";

export function ContactRowLink({
  label,
  value,
  href,
  icon,
  external = true,
  download = false,
}: {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  download?: boolean;
}) {
  const linkProps = external ? externalLinkProps : {};

  return (
    <a
      href={href}
      {...linkProps}
      download={download || undefined}
      className="group/row grid grid-cols-[6rem_1fr_1.5rem] items-baseline gap-4 border-t border-border py-5 transition-colors duration-300 last:border-b hover:bg-surface/40 md:grid-cols-[8rem_1fr_1.5rem]"
    >
      <span className="text-xs font-medium text-fg-muted">{label}</span>
      <span className="truncate text-fg transition-transform duration-300 group-hover/row:translate-x-1.5">
        {value}
      </span>
      <span className="justify-self-end self-center text-fg-muted transition-all duration-300 group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5 group-hover/row:text-accent">
        {icon}
      </span>
    </a>
  );
}

export function ContactRowButton({
  label,
  value,
  icon,
  onClick,
}: {
  label: string;
  value: string;
  icon: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group/row grid w-full grid-cols-[6rem_1fr_1.5rem] items-baseline gap-4 border-t border-border py-5 text-left transition-colors duration-300 last:border-b hover:bg-surface/40 md:grid-cols-[8rem_1fr_1.5rem]"
    >
      <span className="text-xs font-medium text-fg-muted">{label}</span>
      <span className="truncate text-fg transition-transform duration-300 group-hover/row:translate-x-1.5">
        {value}
      </span>
      <span className="justify-self-end self-center text-fg-muted transition-all duration-300 group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5 group-hover/row:text-accent">
        {icon}
      </span>
    </button>
  );
}
