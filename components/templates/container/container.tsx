import { cn } from "@/lib/utils";
import React from "react";

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-4 md:px-32",
        `${className}`,
      )}
    >
      {children}
    </div>
  );
}
