import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="01" title="Sobre mí" subtitle="Quién soy" />

        <div className="grid gap-12 md:grid-cols-3">
          <Reveal className="md:col-span-2 space-y-5 text-lg">
            {profile.bioParagraphs.map((paragraph, i) => (
              <p key={i} className="text-fg-muted transition-colors duration-300 hover:text-fg">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="space-y-8">
            <blockquote className="border-l-2 border-accent pl-4 text-lg text-fg">
              &ldquo;{profile.highlightQuote}&rdquo;
            </blockquote>

            <div>
              <p className="text-sm font-medium text-fg-muted">Ubicación</p>
              <p className="mt-1 text-fg">{profile.location}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-fg-muted">Idiomas</p>
              <ul className="mt-1 space-y-1">
                {profile.languages.map((lang) => (
                  <li key={lang.name} className="text-fg">
                    {lang.name}: {lang.level}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
