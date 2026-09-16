export const profile = {
  name: "Richard Lagos Godoy",
  role: "Estudiante de Ingeniería en Computación e Informática",
  pitch:
    "Desarrollo software full stack con Java, Python, JavaScript, React, PostgreSQL y Docker, combinando proyectos propios con formación en analítica de datos e inteligencia artificial.",
  availableForWork: true,
  location: "Santiago, Chile",
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio (comprensión oral y escrita, conversación funcional)" },
  ],
  bioParagraphs: [
    "Soy Richard Lagos Godoy, estudiante de 4° año de Ingeniería en Computación e Informática en la Universidad Andrés Bello.",
    "Me especializo en desarrollo full stack: trabajo con Java, Python, JavaScript, React, SQL y PostgreSQL, y uso Docker para levantar mis entornos de desarrollo. Complemento mi formación con cursos de analítica de datos e inteligencia artificial (IBM SkillsBuild, NVIDIA RAPIDS, Cisco CCNA).",
    "Me gusta resolver problemas concretos: mi proyecto actual es un sistema ERP/POS para gestión de ventas, inventario y usuarios con React, PostgreSQL y Docker.",
    "Busco una práctica profesional o primer empleo donde pueda seguir aprendiendo y aportar en desarrollo de software.",
  ],
  highlightQuote:
    "No desarrollo solamente código; construyo soluciones que deben funcionar en el mundo real.",
  cvUrl: "/cv/cv-richard-lagos-godoy.pdf" as string | null,
  photoUrl: null as string | null, // TODO: "/images/profile/foto.jpg" una vez subida a public/images/profile/
  socials: {
    github: "https://github.com/Richard282004",
    linkedin: "https://linkedin.com/in/richard-lagos-godoy",
    email: "richardlagos2@gmail.com",
  },
};
