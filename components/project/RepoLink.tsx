import { Lock } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { GithubIcon } from "@/components/icons/GithubIcon";

export function RepoLink({
  repoUrl,
  isPrivate,
}: {
  repoUrl: string | null;
  isPrivate: boolean;
}) {
  if (repoUrl) {
    return (
      <ExternalLink href={repoUrl} variant="secondary" showIcon={false}>
        <GithubIcon className="size-4" />
        Ver repositorio
      </ExternalLink>
    );
  }

  if (isPrivate) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-fg-muted">
        <Lock className="size-4" aria-hidden="true" />
        Repositorio privado
      </span>
    );
  }

  return null;
}
