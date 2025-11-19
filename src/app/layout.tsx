import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Victória Almeida | Psicóloga",
  description: "Victória Almeida - Psicóloga Clínica especialista em terapias comportamentais contextuais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${lato.variable} ${playfair.variable} antialiased font-sans text-slate-600 bg-slate-50 selection:bg-[#a59bcf] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
