import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "ecommerce",
    name: "TODO: Nombre de la tienda",
    year: 2026, // TODO: año real de desarrollo
    featured: true,
    layout: "image-left",
    description:
      "Plataforma e-commerce desarrollada para gestionar catálogo de productos, navegación, carrito de compras y experiencia de compra online.",
    problem:
      "TODO: qué problema de negocio o de usuario resuelve esta tienda (ej. vender productos online sin depender de una plataforma de terceros).",
    solution:
      "TODO: cómo se diseñó la plataforma para resolver ese problema (catálogo dinámico, carrito propio, checkout, panel de administración, etc).",
    features: [
      "Responsive (desktop y mobile)",
      "Conexión con base de datos",
      "Catálogo dinámico de productos",
      "Carrito de compras",
      "Filtros y búsqueda",
      "Autenticación de usuarios",
      "Panel de administración",
      // TODO: agregar/quitar funcionalidades reales
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Cloudflare",
      // TODO: agregar otras tecnologías reales usadas
    ],
    architecture:
      "TODO: descripción breve de la arquitectura (ej. SPA en React consumiendo Supabase directamente, hosting estático en Cloudflare Pages).",
    status: "production",
    statusLabel: "Proyecto desplegado en producción",
    screenshotSrc: "/images/projects/ecommerce-desktop.png", // TODO: subir screenshot real
    screenshotMobileSrc: "/images/projects/ecommerce-mobile.png", // TODO: subir screenshot real, o null si no existe
    isPlaceholderImage: true,
    demoUrl: null, // TODO: "https://tu-tienda.com" — al completarlo se activa el botón "Visitar tienda"
    repoUrl: null, // TODO: "https://github.com/tu-usuario/tu-tienda"
    isRepoPrivate: false,
    caseStudy: null,
  },
  {
    slug: "erp",
    name: "TODO: Nombre del ERP",
    year: 2026, // TODO: año real de desarrollo
    featured: true,
    layout: "image-right",
    description:
      "Sistema de gestión tipo Mini ERP / POS desarrollado para centralizar operaciones de negocio, administrar información y facilitar procesos internos desde una plataforma web.",
    problem:
      "TODO: qué problema operativo resuelve el sistema (ej. un negocio que gestionaba ventas e inventario manualmente).",
    solution:
      "TODO: cómo fue diseñada la aplicación para resolverlo (dashboard centralizado, control de inventario y ventas en tiempo real, etc).",
    features: [
      "Autenticación de usuarios",
      "Dashboard",
      "Gestión de productos",
      "Gestión de ventas",
      "Inventario",
      "Clientes",
      "Reportes",
      "Administración",
      // TODO: agregar/quitar funcionalidades reales
    ],
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Render",
      "Cloudflare",
      "API / Backend",
      // TODO: agregar otras tecnologías reales usadas
    ],
    architecture:
      "Frontend → Cloudflare → Backend / API → Render → Supabase → PostgreSQL", // TODO: ajustar al flujo real
    status: "private",
    statusLabel: "Acceso privado",
    screenshotSrc: "/images/projects/erp-dashboard.png", // TODO: subir screenshot real del dashboard
    screenshotMobileSrc: "/images/projects/erp-login.png", // TODO: subir screenshot real del login
    isPlaceholderImage: true,
    demoUrl: null,
    repoUrl: null, // TODO: "https://github.com/tu-usuario/tu-erp" si el repo es público; si es privado, dejar null
    isRepoPrivate: true,
    caseStudy: {
      problem:
        "TODO: describir en detalle el problema que motivó construir este sistema.",
      solution:
        "TODO: describir el enfoque de solución: qué decisiones de diseño se tomaron y por qué.",
      architectureFlow: [
        "Usuario",
        "Frontend",
        "Cloudflare",
        "Backend / API",
        "Render",
        "Supabase",
        "PostgreSQL",
      ], // TODO: ajustar al flujo real de arquitectura del proyecto
      modules: [
        {
          title: "Dashboard",
          description: "TODO: qué muestra el dashboard principal.",
          isPlaceholderImage: true,
          imageSrc: "/images/projects/erp-dashboard.png",
        },
        {
          title: "Gestión de productos",
          description: "TODO: cómo funciona el módulo de productos.",
          isPlaceholderImage: true,
          imageSrc: "/images/projects/erp-productos.png",
        },
        {
          title: "Gestión de ventas",
          description: "TODO: cómo funciona el módulo de ventas.",
          isPlaceholderImage: true,
          imageSrc: "/images/projects/erp-ventas.png",
        },
        {
          title: "Inventario",
          description: "TODO: cómo funciona el módulo de inventario.",
          isPlaceholderImage: true,
          imageSrc: "/images/projects/erp-inventario.png",
        },
      ], // TODO: agregar/quitar módulos reales del sistema
      challenges: [
        "Autenticación",
        "Conexión frontend/backend",
        "Conexión con base de datos",
        "Manejo de sesiones",
        "Despliegue",
        "Seguridad",
        "Consumo de API",
        "Modelado de base de datos",
      ], // TODO: dejar solo los desafíos técnicos reales que enfrentaste
      result:
        "TODO: qué se logró construir y qué procesos de negocio puede resolver el sistema hoy.",
    },
  },
  // TODO: agregar más proyectos aquí siguiendo la misma estructura.
  // featured: false para que aparezcan en la grilla general en vez de como card destacada.
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}
