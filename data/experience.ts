import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    company: "TODO: Nombre de la empresa/institución",
    role: "TODO: Cargo (ej. Software Developer)",
    location: "TODO: Ciudad, País",
    startDate: "2026", // TODO: año/mes real de inicio
    endDate: null, // null = "Actualidad"; o "2026" para fecha de término
    description: "TODO: descripción breve del rol y el contexto del trabajo.",
    responsibilities: [
      "TODO: responsabilidad principal 1",
      "TODO: responsabilidad principal 2",
      "TODO: responsabilidad principal 3",
    ],
    stack: ["TODO: tecnología 1", "TODO: tecnología 2"],
  },
  // TODO: agregar experiencias anteriores siguiendo la misma estructura, en orden cronológico descendente.
];
