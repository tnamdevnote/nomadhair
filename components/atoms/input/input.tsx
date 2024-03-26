import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";

const inputVariants = cva(
  "flex h-10 w-full gap-4 items-center [&_.inputDecorators>*]:text-muted-foreground rounded-md border border-neutral-15 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground has-[:focus-visible]:outline-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary-100 has-[:focus-visible]:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        lg: "h-12 [&_.inputDecorators>*]:w-5 [&_.inputDecorators>*]:h-5",
        md: "h-10 [&_.inputDecorators>*]:w-4 [&_.inputDecorators>*]:h-4",
        sm: "h-8 text-[0.75rem] [&_.inputDecorators>*]:w-4 [&_.inputDecorators>*]:h-4",
      },
      error: {
        true: "border-danger-100",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size">,
    VariantProps<typeof inputVariants> {
  before?: React.ReactNode;
  after?: React.ReactNode;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, before, after, size, error, type, ...props }, ref) => {
    return (
      <div className={cn(inputVariants({ size, error, className }))}>
        {before ? (
          <div className="inputDecorators flex items-center">{before}</div>
        ) : null}
        <input
          className="w-full focus-visible:outline-none"
          type={type}
          ref={ref}
          {...props}
        />
        {after ? (
          <div className="inputDecorators flex items-center">{after}</div>
        ) : null}
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
