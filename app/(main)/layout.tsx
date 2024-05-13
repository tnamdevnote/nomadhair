import Footer from "@/components/organisms/footer";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
