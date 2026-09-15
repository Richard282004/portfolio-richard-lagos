import { Reveal } from "./Reveal";

export function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <span className="font-mono text-sm text-accent">{number}</span>
      <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-fg">
        {title}
      </h2>
      <p className="mt-3 text-fg-muted">{subtitle}</p>
    </Reveal>
  );
}
