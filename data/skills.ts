import type { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", primary: true },
      { name: "JavaScript", primary: true },
      { name: "TypeScript", primary: true },
      { name: "Tailwind CSS", primary: true },
      { name: "HTML", primary: false },
      { name: "CSS", primary: false },
      { name: "shadcn/ui", primary: false },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java", primary: true },
      { name: "Python", primary: true },
      { name: "Java Swing", primary: false },
      { name: "C", primary: false },
      { name: "C++", primary: false },
    ],
  },
  {
    category: "Bases de datos",
    items: [
      { name: "PostgreSQL", primary: true },
      { name: "SQL", primary: true },
      { name: "Supabase", primary: false },
      { name: "DBeaver", primary: false },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", primary: true },
      { name: "GitHub", primary: true },
      { name: "Docker", primary: true },
      { name: "Cloudflare", primary: false },
      { name: "Linux", primary: false },
      { name: "Windows", primary: false },
      { name: "macOS", primary: false },
      { name: "Excel", primary: false },
    ],
  },
  {
    category: "Actualmente aprendiendo",
    items: [
      { name: "Inteligencia Artificial", primary: false },
      { name: "Data Analytics", primary: false },
      { name: "NVIDIA RAPIDS", primary: false },
    ],
  },
];
