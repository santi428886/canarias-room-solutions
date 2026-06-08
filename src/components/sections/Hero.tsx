import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="hero-pattern relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggIGQ9Ik0zNiAzNGg0djRoLTR6bTAgMGg0djRoLTR6bTAgMGg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40">
        <div className="max-w-4xl">
          <p className="animate-fade-in-up mb-6 text-xs font-semibold tracking-[0.3em] uppercase text-gold">
            Gran Canaria · Gestión Premium
          </p>

          <h1 className="animate-fade-in-up animate-delay-100 font-serif text-4xl leading-[1.15] text-cream sm:text-5xl lg:text-6xl xl:text-7xl">
            Su vivienda.{" "}
            <span className="gold-gradient-text">Nuestra gestión.</span>{" "}
            Su tranquilidad.
          </h1>

          <p className="animate-fade-in-up animate-delay-200 mt-8 max-w-2xl text-lg leading-relaxed text-cream/75 sm:text-xl">
            Reciba una renta estable mientras nosotros nos ocupamos de todo.
          </p>

          <div className="animate-fade-in-up animate-delay-300 mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#contacto" variant="primary">
              Solicitar valoración gratuita
            </Button>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 px-4 py-4 text-sm font-medium tracking-wide text-cream/70 transition-colors hover:text-gold"
            >
              Descubrir cómo funciona
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          <div className="animate-fade-in-up animate-delay-400 mt-20 grid grid-cols-3 gap-8 border-t border-cream/10 pt-10 sm:max-w-lg">
            {[
              { value: "100%", label: "Gestión integral" },
              { value: "24/7", label: "Atención incidencias" },
              { value: "12%", label: "Comisión inmobiliarias" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl text-gold sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-cream/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#propietarios" aria-label="Ir a propietarios" className="text-cream/30 hover:text-gold transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
