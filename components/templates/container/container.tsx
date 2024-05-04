import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: React.ReactNode;
}

export default function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-lg px-4 md:px-32",
        `${className}`,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
