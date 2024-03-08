import type { Metadata } from "next";
// import { montserrat, quicksand } from "../lib/font";
import "./globals.css";
import PageTemplate from "@/templates";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Container from "@/components/ui/Container";
import { Montserrat, Quicksand } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" className={`${quicksand.className} ${montserrat.variable}`}>
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
