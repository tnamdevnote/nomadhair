import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Quicksand } from "next/font/google";
import { Toaster } from "@/shared/molecules/toast";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Header from "@/shared/organisms/header";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const userState = await Promise.all([getUser(), isAuthenticated()]);

  return (
    <html lang="en" className={`${quicksand.className} ${montserrat.variable}`}>
      <body>
        <Header photo={userState[0]?.picture} isAuthenticated={userState[1]} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
