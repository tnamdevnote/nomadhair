import type { Metadata } from "next";
import { poppins, inter } from "../lib/font";
import "./globals.css";
import PageTemplate from "@/components/templates";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "NomadHair",
  description: "Welcome to NomadHair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} ${inter.className}`}>
      <body className="bg-secondary-10">
        <Header />
        <main className="min-h-screen pt-[var(--navbar-height-sm)] lg:pt-[var(--navbar-height-lg)]">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
