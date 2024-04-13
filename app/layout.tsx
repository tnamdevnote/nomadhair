import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
import { Montserrat, Quicksand } from "next/font/google";
import { Toaster } from "@/components/molecules/toast";
import { cookies } from "next/headers";
import { AuthProvider } from "./authProvider";

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
  const userName = cookies().get("displayName")?.value;

  return (
    <html lang="en" className={`${quicksand.className} ${montserrat.variable}`}>
      <body className="bg-secondary-10">
        <AuthProvider>
          <Header userName={userName} />
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
