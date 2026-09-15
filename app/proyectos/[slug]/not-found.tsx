import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-2 text-3xl font-semibold text-fg">Proyecto no encontrado</h1>
      <Link href="/#projects" className="mt-6 text-accent hover:underline">
        Volver a proyectos
      </Link>
    </section>
  );
}
