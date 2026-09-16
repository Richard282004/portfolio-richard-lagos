"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { stagger, fadeUp } from "@/utils/motion-variants";
import { externalLinkProps } from "@/utils/external-link";
import { MaskedText } from "@/components/ui/MaskedText";
import { HeroGraphic } from "./HeroGraphic";
import { HeroPhoto } from "./HeroPhoto";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <div
        className="bg-dot-grid pointer-events-none absolute inset-0"
        style={{ maskImage: "radial-gradient(ellipse 60% 55% at 50% 40%, black, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_420px]">
        <div>
        {profile.availableForWork && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-fg-muted"
          >
            <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Disponible para oportunidades laborales
          </motion.div>
        )}

        <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-6xl md:text-7xl">
          <MaskedText text={profile.name} delay={0.8} />
        </h1>

        <motion.div initial="hidden" animate="visible" variants={stagger(0.1, 1.15)}>
          <motion.p variants={fadeUp} className="mt-4 text-xl text-fg-muted md:text-2xl">
            {profile.role}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-fg-muted">
            {profile.pitch}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group/cta inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
            >
              Ver proyectos
              <ArrowDown className="size-4 transition-transform duration-300 group-hover/cta:translate-y-0.5" aria-hidden="true" />
            </a>
            {profile.cvUrl ? (
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-fg transition-all duration-300 hover:scale-105 hover:border-accent/50 active:scale-95"
              >
                Descargar CV
              </a>
            ) : null}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-5">
            <a href={profile.socials.github} {...externalLinkProps} aria-label="GitHub" className="text-fg-muted transition-all duration-300 hover:scale-110 hover:text-fg">
              <GithubIcon className="size-5" />
            </a>
            <a href={profile.socials.linkedin} {...externalLinkProps} aria-label="LinkedIn" className="text-fg-muted transition-all duration-300 hover:scale-110 hover:text-fg">
              <LinkedinIcon className="size-5" />
            </a>
          </motion.div>
        </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <HeroGraphic />
          <HeroPhoto />
        </div>
      </div>
    </section>
  );
}
