import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
import React from "react";
import { AuthProvider } from "@/app/authProvider";

export interface PageTemplateProps {
  type?: "default" | "header";
  children: React.ReactNode;
}

function PageTemplate({ type = "default", children }: PageTemplateProps) {
  if (type === "header") {
    return (
      <>
        <Header />
        <main className="bg-secondary-10">{children}</main>
      </>
    );
  }
  return (
    <AuthProvider>
      <Header />
      <main className="bg-secondary-10 pt-[var(--navbar-height-sm)] lg:pt-[var(--navbar-height-lg)]">
        {children}
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default PageTemplate;
