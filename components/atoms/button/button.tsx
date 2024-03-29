import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./../../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      intent: {
        primary: "bg-primary-100 text-white hover:bg-primary-100/90",
        secondary: "bg-secondary-100 text-neutral-90 hover:bg-secondary-100/90",
        tertiary: "bg-tertiary-100 text-neutral-90 hover:bg-tertiary-100/90",
      },
      variant: {
        contained: undefined,
        outline: "bg-transparent border border-current hover:border-current",
        ghost: "bg-transparent",
        link: "bg-transparent text-current underline-offset-4 hover:underline hover:bg-transparent",
      },
      size: {
        sm: "h-9 px-3 py-1.5 text-sm [&_svg]:w-auto [&_svg]:h-auto",
        md: "h-10 px-4 py-2 text-sm [&_svg]:w-auto [&_svg]:h-auto",
        lg: "h-11 px-6 py-3 text-base [&_svg]:w-auto [&_svg]:h-auto",
      },
      _hasChild: {
        false: undefined,
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: ["outline", "ghost"],
        className: "text-primary-100 hover:bg-primary-100/5",
      },
      {
        intent: "secondary",
        variant: ["outline", "ghost"],
        className: "text-secondary-100 hover:bg-secondary-100/5",
      },
      {
        intent: "tertiary",
        variant: ["outline", "ghost"],
        className: "text-tertiary-100 hover:bg-tertiary-100/5",
      },
      {
        intent: "primary",
        variant: "link",
        className: "text-primary-100",
      },
      {
        intent: "secondary",
        variant: "link",
        className: "text-secondary-100",
      },
      {
        intent: "tertiary",
        variant: "link",
        className: "text-tertiary-100",
      },
      {
        _hasChild: false,
        size: "sm",
        className: "h-9 w-9 p-1.5",
      },
      {
        _hasChild: false,
        size: "md",
        className: "h-10 w-10 p-2",
      },
      {
        _hasChild: false,
        size: "lg",
        className: "h-11 w-11 p-3",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, "_hasChild"> {
  icon?: React.ReactElement<SVGSVGElement>;
  iconPosition?: "before" | "after";
  asChild?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      intent = "primary",
      variant,
      size,
      icon,
      iconPosition = "before",
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    // a private variant type used for icon button type
    const _hasChild = !!children && true;
    return (
      <Comp
        className={cn(
          buttonVariants({ intent, variant, size, _hasChild, className }),
        )}
        ref={ref}
        {...props}
      >
        {iconPosition === "before" ? icon : null}
        <Slottable>{children}</Slottable>
        {iconPosition === "after" ? icon : null}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
