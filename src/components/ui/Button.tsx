import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  href?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold-light shadow-lg shadow-gold/20 hover:shadow-gold/30",
  secondary:
    "bg-navy text-cream hover:bg-navy-light shadow-lg shadow-navy/20",
  outline:
    "border-2 border-gold text-gold hover:bg-gold hover:text-navy",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
