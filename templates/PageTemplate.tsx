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
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default PageTemplate;
