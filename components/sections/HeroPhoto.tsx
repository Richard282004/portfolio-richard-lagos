"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function HeroPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="relative h-64 w-64">
        <div
          className="absolute inset-0 scale-125 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-deco-coral) 0%, var(--color-deco-sky) 45%, transparent 70%)",
            opacity: 0.3,
          }}
        />

        {profile.photoUrl ? (
          <div
            className="relative h-full w-full overflow-hidden rounded-[2.5rem] ring-1 ring-border"
            style={{
              maskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
            }}
          >
            <Image src={profile.photoUrl} alt={profile.name} fill className="object-cover" priority />
          </div>
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-[2.5rem] border border-dashed border-border bg-surface/60">
            <User className="size-14 text-fg-muted" aria-hidden="true" />
            <span className="font-mono text-xs text-fg-muted">TODO: foto</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
