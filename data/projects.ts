import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "ecommerce",
    name: "MilaLoop",
    year: 2026,
    featured: true,
    layout: "image-left",
    description:
      "Tienda e-commerce de llaveros y peluches tejidos a mano, con catálogo, favoritos, seguimiento de pedidos y pago seguro.",
    problem:
      "Un negocio artesanal de crochet necesitaba un canal de venta online propio para mostrar su catálogo y vender sin depender de redes sociales o marketplaces de terceros.",
    solution:
      "Tienda construida con React y shadcn/ui sobre Tailwind CSS, con Supabase como backend (base de datos y autenticación) y desplegada como Cloudflare Worker, incluyendo catálogo con filtros por categoría, favoritos, seguimiento de pedidos y pago con Visa, Amex y Mercado Pago.",
    features: [
      "Autenticación de usuarios",
      "Catálogo con filtros por categoría",
      "Favoritos / lista de deseos",
      "Seguimiento de pedidos",
      "Pago seguro (Visa, Amex, Mercado Pago)",
      "Envíos a todo Chile",
      "Responsive (desktop y mobile)",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Cloudflare Workers"],
    architecture:
      "SPA en React consumiendo Supabase (Postgres + auth) directamente desde el cliente, desplegada como Cloudflare Worker con Wrangler.",
    status: "production",
    statusLabel: "Proyecto desplegado en producción",
    screenshotSrc: "/images/projects/ecommerce-desktop.jpg",
    screenshotMobileSrc: null,
    isPlaceholderImage: false,
    demoUrl: "https://tienda-react-demo.richardlagos2.workers.dev/#inicio",
    repoUrl: null,
    isRepoPrivate: true,
    caseStudy: null,
  },
  {
    slug: "erp",
    name: "ERP/POS de Gestión de Ventas",
    year: 2026,
    featured: true,
    layout: "image-right",
    description:
      "Sistema de gestión de ventas, pedidos, productos, inventario y usuarios, con base de datos PostgreSQL y entorno de desarrollo en Docker.",
    problem:
      "Negocios pequeños que gestionan ventas, pedidos, productos e inventario de forma manual, sin visibilidad centralizada ni trazabilidad de las operaciones.",
    solution:
      "Sistema con frontend en React y lógica de backend propia, modelando productos, pedidos, inventario y usuarios en PostgreSQL con relaciones y restricciones de integridad, incluyendo control de pagos y operaciones. Entorno de desarrollo containerizado con Docker.",
    features: [
      "Gestión de ventas y pedidos",
      "Gestión de productos e inventario",
      "Gestión de usuarios",
      "Control de pagos y operaciones",
    ],
    stack: ["React", "JavaScript", "Python", "PostgreSQL", "SQL", "Docker", "Git/GitHub"],
    architecture: "Frontend en React → lógica de backend → PostgreSQL, en entorno Docker.",
    status: "development",
    statusLabel: "En desarrollo",
    screenshotSrc: "/images/projects/Pos-Login.png", // /Users/nskss07/Developer/PaginaRichardPF/public/images/projects/Pos-Login.png
    screenshotMobileSrc: "/images/projects/Pos-Login.png",
    isPlaceholderImage: false,
    demoUrl: null,
    repoUrl: null,
    isRepoPrivate: true,
    caseStudy: {
      problem:
        "Negocios pequeños que gestionan ventas, pedidos, productos e inventario de forma manual, sin visibilidad centralizada ni trazabilidad de las operaciones.",
      solution:
        "Frontend en React y lógica de backend propia, modelando productos, pedidos, inventario y usuarios en PostgreSQL con relaciones y restricciones de integridad en SQL, incluyendo control de pagos y operaciones. Entorno de desarrollo containerizado con Docker.",
      architectureFlow: ["Usuario", "Frontend (React)", "Lógica de backend", "PostgreSQL"],
      modules: [
        {
          title: "Gestión de ventas y pedidos",
          description: "Registro y control de ventas y pedidos con datos relacionados en PostgreSQL.",
          isPlaceholderImage: true,
          imageSrc: "/images/projects/erp-ventas.png",
        },
        {
          title: "Gestión de productos e inventario",
          description: "Catálogo de productos con control de stock e inventario.",
          isPlaceholderImage: true,
          imageSrc: "/images/projects/erp-productos.png",
        },
        {
          title: "Gestión de usuarios",
          description: "Administración de usuarios del sistema.",
          isPlaceholderImage: true,
          imageSrc: "/images/projects/erp-usuarios.png",
        },
      ],
      challenges: [
        "Modelado de base de datos",
        "Relaciones y restricciones de integridad en SQL",
        "Control de pagos y operaciones",
        "Entorno de desarrollo con Docker",
      ],
      result:
        "Sistema en desarrollo activo que centraliza ventas, pedidos, productos, inventario y usuarios de un negocio pequeño, con datos modelados en PostgreSQL siguiendo relaciones e integridad referencial.",
    },
  },
  {
    slug: "generador-rutinas",
    name: "Generador de Rutinas de Entrenamiento",
    year: 2026,
    featured: false,
    layout: "image-left",
    description:
      "Aplicación de escritorio en Java Swing para modelar clientes, ejercicios y generar rutinas de entrenamiento.",
    problem:
      "Proyecto académico para practicar modelamiento de datos y programación orientada a objetos con una aplicación de escritorio real.",
    solution:
      "Aplicación en Java Swing con clases para clientes, ejercicios y rutinas, procesamiento de archivos CSV y lógica de generación de rutinas.",
    features: [
      "Modelamiento de clientes y ejercicios",
      "Generación de rutinas de entrenamiento",
      "Procesamiento de archivos CSV",
    ],
    stack: ["Java", "Java Swing", "POO"],
    architecture: "Aplicación de escritorio en Java Swing con lectura/escritura de archivos CSV.",
    status: "functional",
    statusLabel: "Proyecto funcional",
    screenshotSrc: "/images/projects/rutinas-desktop.png",
    screenshotMobileSrc: null,
    isPlaceholderImage: true,
    demoUrl: null,
    repoUrl: null,
    isRepoPrivate: false,
    caseStudy: null,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}
