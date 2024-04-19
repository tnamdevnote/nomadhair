import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const userState = await Promise.all([getUser(), isAuthenticated()]);
  return (
    <>
      <Header photo={userState[0]?.picture} isAuthenticated={userState[1]} />
      <main className="flex-grow pt-[var(--navbar-height-sm)] lg:pt-[var(--navbar-height-lg)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
