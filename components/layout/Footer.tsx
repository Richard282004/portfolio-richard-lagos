"use client";

import { Mail, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { externalLinkProps } from "@/utils/external-link";
import { useScrollTop } from "@/hooks/useScrollTop";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Footer() {
  const showScrollTop = useScrollTop();

  return (
    <footer className="border-t border-border pb-[calc(env(safe-area-inset-bottom,0px)+2rem)] pt-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <p className="text-sm text-fg-muted">
          © {new Date().getFullYear()} {profile.name} — {profile.location}
        </p>
        <p className="font-mono text-xs text-fg-muted">
          Construido con Next.js · TypeScript · Tailwind CSS
        </p>

        <div className="flex items-center gap-5">
          <a href={profile.socials.github} {...externalLinkProps} aria-label="GitHub" className="text-fg-muted hover:text-fg">
            <GithubIcon className="size-4" />
          </a>
          <a href={profile.socials.linkedin} {...externalLinkProps} aria-label="LinkedIn" className="text-fg-muted hover:text-fg">
            <LinkedinIcon className="size-4" />
          </a>
          <a href={`mailto:${profile.socials.email}`} aria-label="Correo" className="text-fg-muted hover:text-fg">
            <Mail className="size-4" />
          </a>
        </div>

        <a
          href="#hero"
          className={`inline-flex items-center gap-1.5 text-sm text-fg-muted transition-opacity hover:text-fg ${
            showScrollTop ? "opacity-100" : "opacity-60"
          }`}
        >
          Volver arriba
          <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
