"use client";

import { Copy, MapPin, Check } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { externalLinkProps } from "@/utils/external-link";
import { useClipboard } from "@/hooks/useClipboard";

export function Contact() {
  const { copied, copy } = useClipboard();

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading number="06" title="Conversemos" subtitle="" />

        <Reveal>
          <p className="mx-auto max-w-xl text-lg text-fg-muted">
            ¿Tienes una oportunidad, proyecto o idea en mente? Conversemos.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => copy(profile.socials.email, "Correo copiado")}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              Copiar correo
            </button>

            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-fg transition-all duration-300 hover:scale-105 hover:border-accent/50 active:scale-95"
              >
                Descargar CV
              </a>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-fg-muted">
            <a href={profile.socials.github} {...externalLinkProps} className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-fg">
              <GithubIcon className="size-4" /> GitHub
            </a>
            <a href={profile.socials.linkedin} {...externalLinkProps} className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-fg">
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" /> {profile.location}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
