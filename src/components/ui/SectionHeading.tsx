interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-16 ${alignClass}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold tracking-[0.25em] uppercase text-gold">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 ${
          light ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-cream/80" : "text-navy/70"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-8 h-px w-24 bg-gold ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
