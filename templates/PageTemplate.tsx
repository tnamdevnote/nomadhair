import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import React from "react";

export interface PageTemplateProps {
  children: React.ReactNode;
}

function PageTemplate({ children }: PageTemplateProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-2xl">{children}</main>
      <Footer />
    </>
  );
}

export default PageTemplate;
