"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { useTheme } from "next-themes";
import type { ReactNode } from "react";

function ThemedToaster() {
  const { resolvedTheme } = useTheme();
  return <Toaster theme={resolvedTheme === "dark" ? "dark" : "light"} position="bottom-center" />;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
      <ThemedToaster />
    </ThemeProvider>
  );
}
