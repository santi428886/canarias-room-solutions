import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
import { BRAND } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1628",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Canarias Room Solutions | Gestión de viviendas por habitaciones en Gran Canaria",
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Gestión profesional de viviendas destinadas al alquiler por habitaciones en Gran Canaria. Soluciones para propietarios e inmobiliarias.",
  keywords: [
    "alquiler por habitaciones Gran Canaria",
    "gestión viviendas Las Palmas",
    "rentabilidad propietarios",
    "inmobiliaria Gran Canaria",
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
      "Gestión profesional de viviendas destinadas al alquiler por habitaciones en Gran Canaria. Soluciones para propietarios e inmobiliarias.",
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
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
