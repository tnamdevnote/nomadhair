import React from "react";

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-screen-2xl px-4 md:px-16 lg:px-32",
        `${className}`,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
