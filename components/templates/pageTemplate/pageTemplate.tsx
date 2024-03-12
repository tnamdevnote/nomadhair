import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
import React from "react";

export interface PageTemplateProps {
  children: React.ReactNode;
}

function PageTemplate({ children }: PageTemplateProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[var(--navbar-height-sm)] lg:pt-[var(--navbar-height-lg)]">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default PageTemplate;
