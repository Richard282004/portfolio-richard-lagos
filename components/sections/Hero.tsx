"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { stagger, fadeUp } from "@/utils/motion-variants";
import { externalLinkProps } from "@/utils/external-link";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center px-6 pt-24 pb-16"
    >
      <motion.div
        className="mx-auto w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={stagger(0.1)}
      >
        {profile.availableForWork && (
          <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-fg-muted">
            <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Disponible para oportunidades laborales
          </motion.div>
        )}

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-semibold tracking-tight text-fg sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-4 text-xl text-fg-muted md:text-2xl">
          {profile.role}
        </motion.p>

        <motion.p variants={fadeUp} className="mt-6 max-w-xl text-fg-muted">
          {profile.pitch}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            Ver proyectos
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          {profile.cvUrl ? (
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/50"
            >
              Descargar CV
            </a>
          ) : null}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex items-center gap-5">
          <a href={profile.socials.github} {...externalLinkProps} aria-label="GitHub" className="text-fg-muted transition-colors hover:text-fg">
            <GithubIcon className="size-5" />
          </a>
          <a href={profile.socials.linkedin} {...externalLinkProps} aria-label="LinkedIn" className="text-fg-muted transition-colors hover:text-fg">
            <LinkedinIcon className="size-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
