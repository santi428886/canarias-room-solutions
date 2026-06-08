import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Error 404
      </p>
      <h1 className="font-serif text-4xl text-navy sm:text-5xl">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md text-gray-600">
        La página que busca no existe o ha sido movida.
      </p>
      <Link href="/" className="btn-primary mt-10">
        Volver al inicio
      </Link>
    </main>
  );
}
