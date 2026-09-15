import type { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "TypeScript", primary: true },
      { name: "React", primary: true },
      { name: "Next.js", primary: true },
      { name: "Tailwind CSS", primary: true },
      { name: "JavaScript", primary: false },
      { name: "HTML", primary: false },
      { name: "CSS", primary: false },
      { name: "Responsive Design", primary: false },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", primary: true },
      { name: "APIs REST", primary: true },
      { name: "Express", primary: false },
      // TODO: agregar/quitar tecnologías backend reales
    ],
  },
  {
    category: "Bases de datos",
    items: [
      { name: "PostgreSQL", primary: true },
      { name: "Supabase", primary: true },
      { name: "MySQL", primary: false },
      { name: "SQL Server", primary: false },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", primary: true },
      { name: "GitHub", primary: true },
      { name: "Vercel", primary: false },
      { name: "Cloudflare", primary: false },
      { name: "Render", primary: false },
      { name: "Docker", primary: false },
      { name: "VS Code", primary: false },
    ],
  },
  {
    category: "Actualmente aprendiendo",
    items: [
      // TODO: reemplazar con lo que realmente estás aprendiendo ahora
      { name: "TODO: tecnología en aprendizaje", primary: false },
    ],
  },
];
