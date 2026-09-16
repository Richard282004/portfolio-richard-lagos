"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { profile } from "@/data/profile";
import { externalLinkProps } from "@/utils/external-link";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { fadeUp, stagger } from "@/utils/motion-variants";

const navItems = [
  { id: "about", label: "Sobre mí" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Proyectos" },
  { id: "experience", label: "Experiencia" },
  { id: "contact", label: "Contacto" },
];

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-bg md:hidden"
        >
          <div className="flex items-center justify-end px-6 pt-[calc(env(safe-area-inset-top,0px)+1rem)]">
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="flex size-9 items-center justify-center rounded-full border border-border text-fg transition-all duration-300 hover:scale-110 hover:border-accent/50"
            >
              <X className="size-4" />
            </button>
          </div>
          <motion.nav
            className="flex flex-col items-center gap-8 px-6 pt-16"
            initial="hidden"
            animate="visible"
            variants={stagger(0.06, 0.1)}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={onClose}
                variants={fadeUp}
                className="text-2xl font-medium text-fg transition-transform duration-300 active:scale-95"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
          <div className="mt-12 flex items-center justify-center gap-6">
            <a href={profile.socials.github} {...externalLinkProps} aria-label="GitHub" className="text-fg-muted transition-all duration-300 hover:scale-110 hover:text-fg">
              <GithubIcon className="size-5" />
            </a>
            <a href={profile.socials.linkedin} {...externalLinkProps} aria-label="LinkedIn" className="text-fg-muted transition-all duration-300 hover:scale-110 hover:text-fg">
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
