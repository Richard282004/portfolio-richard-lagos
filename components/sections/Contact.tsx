"use client";

import { useState } from "react";
import { Check, Copy, Download, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactRowLink, ContactRowButton } from "@/components/ui/ContactRow";
import { useClipboard } from "@/hooks/useClipboard";

export function Contact() {
  const { copied, copy } = useClipboard();
  const [justCopied, setJustCopied] = useState(false);

  function handleCopy() {
    copy(profile.socials.email, "Correo copiado");
    setJustCopied(true);
    setTimeout(() => setJustCopied(false), 1800);
  }

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="06" title="Conversemos" subtitle="" />

        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal className="flex flex-col justify-between">
            <p className="text-lg text-fg-muted">
              ¿Tienes una oportunidad, proyecto o idea en mente? Conversemos.
            </p>

            <div className="mt-8 space-y-6">
              <p className="inline-flex items-center gap-2 text-fg-muted">
                <MapPin className="size-4" />
                {profile.location}
              </p>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
              >
                {justCopied || copied ? (
                  <>
                    <Check className="size-4" /> Copiado
                  </>
                ) : (
                  <>
                    <Copy className="size-4" /> Copiar mi correo
                  </>
                )}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactRowButton
              label="Correo"
              value={profile.socials.email}
              icon={justCopied || copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              onClick={handleCopy}
            />
            <ContactRowLink
              label="LinkedIn"
              value="linkedin.com/in/richard-lagos-godoy"
              href={profile.socials.linkedin}
              icon={<ArrowUpRight className="size-4" />}
            />
            <ContactRowLink
              label="GitHub"
              value="github.com/Richard282004"
              href={profile.socials.github}
              icon={<GithubIcon className="size-4" />}
            />
            {profile.cvUrl && (
              <ContactRowLink
                label="CV"
                value="Descargar CV"
                href={profile.cvUrl}
                icon={<Download className="size-4" />}
                external={false}
                download
              />
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
