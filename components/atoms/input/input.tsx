import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-neutral-15 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        lg: "h-12",
        md: "h-10",
        sm: "h-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size">,
    VariantProps<typeof inputVariants> {}
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, type, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ size, className }))}
        type={type}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export default Input;
