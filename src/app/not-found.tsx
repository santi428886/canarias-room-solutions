import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center">
      <p className="mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-gold">
        Error 404
      </p>
      <h1 className="font-serif text-4xl text-cream sm:text-5xl">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md text-cream/60">
        La página que busca no existe o ha sido movida.
      </p>
      <div className="mt-10">
        <Button href="/" variant="primary">
          Volver al inicio
        </Button>
      </div>
    </main>
  );
}
