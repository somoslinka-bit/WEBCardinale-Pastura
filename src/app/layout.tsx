import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cardinale Pastura — Desarrollos Inmobiliarios en Tandil",
  description: "Diseño, naturaleza y compromiso. Conocé Sierra Viva, nuestro nuevo desarrollo en Tandil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${nunitoSans.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
