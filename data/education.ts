import type { Certification, EducationItem } from "./types";

export const education: EducationItem[] = [
  {
    institution: "Universidad Andrés Bello",
    degree: "Ingeniería en Computación e Informática",
    period: "2023 — Actualidad (cursando 4° año)",
    description:
      "Formación en desarrollo de software, bases de datos y soporte TI, complementada con analítica de datos e inteligencia artificial.",
    competencies: [
      "Desarrollo full stack (Java, Python, JavaScript, React)",
      "Bases de datos SQL y PostgreSQL",
      "Programación orientada a objetos",
    ],
  },
];

export const certifications: Certification[] = [
  { name: "Ruta en Inteligencia Artificial", issuer: "IBM SkillsBuild — UNAB", year: "2026" },
  { name: "Data Analytics Certificate, Nivel Advanced", issuer: "IBM SkillsBuild", year: "2026" },
  { name: "Introducción a las Redes", issuer: "Cisco CCNA", year: "" },
  {
    name: "Aceleración de Data Science con NVIDIA RAPIDS · Agentic AI con NemoClaw",
    issuer: "LTC 2026 — Digevo",
    year: "2026",
  },
];
