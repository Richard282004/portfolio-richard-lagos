import { Reveal } from "./Reveal";

export function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12 flex items-start gap-5 md:mb-16 md:gap-8">
      <span className="select-none text-3xl font-semibold text-accent/30 tabular-nums md:text-5xl">
        {number}
      </span>
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-fg md:text-5xl">{title}</h2>
        {subtitle && <p className="mt-3 text-fg-muted">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
