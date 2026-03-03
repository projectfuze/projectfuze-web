import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { NavbarDe } from "@/components/layout/de/Navbar";
import { FooterDe } from "@/components/layout/de/Footer";
import { Suspense } from "react";
import { FathomProvider } from "@/components/FathomProvider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Project Fuze — Mach dein Team AI-native",
  description: "Wir installieren das Backbone, das Product, Design und Engineering in einen AI-nativen Workflow verbindet. Wir bauen es, übergeben es, und das System bleibt.",
};

export default function DeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${plusJakarta.variable} font-sans antialiased text-[#3D3D3D] bg-white min-h-screen flex flex-col selection:bg-[#D4A84B] selection:text-white`}>
        <Suspense fallback={null}>
          <FathomProvider />
        </Suspense>
        <NavbarDe />
        <main className="flex-grow">
          {children}
        </main>
        <FooterDe />
      </body>
    </html>
  );
}
