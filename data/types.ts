export type ProjectStatus = "production" | "development" | "functional" | "private";

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  architectureFlow: string[];
  modules: { title: string; description: string; isPlaceholderImage: boolean; imageSrc: string }[];
  challenges: string[];
  result: string;
}

export interface Project {
  slug: string;
  name: string;
  year: number;
  featured: boolean;
  layout: "image-left" | "image-right";
  description: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  architecture: string;
  status: ProjectStatus;
  statusLabel: string;
  screenshotSrc: string;
  screenshotMobileSrc: string | null;
  isPlaceholderImage: boolean;
  demoUrl: string | null;
  repoUrl: string | null;
  isRepoPrivate: boolean;
  caseStudy: ProjectCaseStudy | null;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  responsibilities: string[];
  stack: string[];
}

export interface SkillCategory {
  category: "Frontend" | "Backend" | "Bases de datos" | "Herramientas" | "Actualmente aprendiendo";
  items: { name: string; primary: boolean }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
  competencies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}
