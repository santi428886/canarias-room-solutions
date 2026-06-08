import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
import { BRAND } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071B35",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BRAND.name} | Gestión Premium de Viviendas en Gran Canaria`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Reciba una renta estable mientras nosotros nos ocupamos de todo. Gestión integral de viviendas para propietarios e inmobiliarias en Gran Canaria.",
  keywords: [
    "gestión viviendas Gran Canaria",
    "alquiler habitaciones Las Palmas",
    "inmobiliaria Gran Canaria",
    "renta estable propietarios",
    "Canarias Room Solutions",
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: BRAND.name,
    description:
      "Su vivienda. Nuestra gestión. Su tranquilidad. Gestión premium en Gran Canaria.",
    url: siteUrl,
    siteName: BRAND.name,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.name,
    description: BRAND.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${lato.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
