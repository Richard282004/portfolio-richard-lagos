"use client";

import { useState } from "react";
import { toast } from "sonner";

export function useClipboard() {
  const [copied, setCopied] = useState(false);

  async function copy(text: string, message = "Copiado") {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast(message);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("No se pudo copiar");
    }
  }

  return { copied, copy };
}
