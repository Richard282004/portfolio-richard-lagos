"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { useActiveSection } from "@/hooks/useActiveSection";
import { externalLinkProps } from "@/utils/external-link";
import { cn } from "@/utils/cn";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { id: "about", label: "Sobre mí" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Proyectos" },
  { id: "experience", label: "Experiencia" },
  { id: "contact", label: "Contacto" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(navItems.map((item) => item.id));

  return (
    <header className="fixed inset-x-0 top-0 z-40 pt-[env(safe-area-inset-top,0px)]">
      <div className="border-b border-border/60 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/#hero" className="font-mono text-sm font-medium text-fg">
            {profile.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "group relative py-1 text-sm text-fg-muted transition-colors duration-300 hover:text-fg",
                  activeId === item.id && "text-fg"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100",
                    activeId === item.id && "scale-x-100"
                  )}
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a href={profile.socials.github} {...externalLinkProps} aria-label="GitHub" className="text-fg-muted transition-all duration-300 hover:scale-110 hover:text-fg">
              <GithubIcon className="size-4" />
            </a>
            <a href={profile.socials.linkedin} {...externalLinkProps} aria-label="LinkedIn" className="text-fg-muted transition-all duration-300 hover:scale-110 hover:text-fg">
              <LinkedinIcon className="size-4" />
            </a>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
              className="flex size-9 items-center justify-center rounded-full border border-border text-fg transition-all duration-300 hover:scale-110 hover:border-accent/50"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
