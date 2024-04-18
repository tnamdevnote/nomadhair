import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
import React from "react";

export interface PageTemplateProps {
  type?: "default" | "header";
  children: React.ReactNode;
}

function PageTemplate({ type = "default", children }: PageTemplateProps) {
  if (type === "header") {
    return (
      <>
        <Header isAuthenticated={false} />
        <main className="bg-secondary-10">{children}</main>
      </>
    );
  }
  return (
    <>
      <Header isAuthenticated={false} />
      <main className="bg-secondary-10 pt-[var(--navbar-height-sm)] lg:pt-[var(--navbar-height-lg)]">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default PageTemplate;
