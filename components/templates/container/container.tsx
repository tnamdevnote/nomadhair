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
        "mx-auto w-full max-w-screen-xl px-4 sm:px-16 md:px-16",
        `${className}`,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
