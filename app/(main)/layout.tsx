import Footer from "@/components/organisms/footer";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className=" pt-[var(--navbar-height-sm)] lg:pt-[var(--navbar-height-lg)]">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
