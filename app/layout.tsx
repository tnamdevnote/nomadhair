import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Quicksand } from "next/font/google";
import { Toaster } from "@/components/molecules/toast";

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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
