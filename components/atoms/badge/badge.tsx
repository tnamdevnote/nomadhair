import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";

const badgeVariants = cva(
  "flex items-center px-3 py-2 rounded-full text-sm text-neutral-90 ring ring-1 ring-neutral-15",
  {
    variants: {
      size: {
        sm: "h-6",
        md: "h-7",
        lg: "h-8",
      },
      clickable: {
        true: undefined,
      },
      selected: {
        true: undefined,
      },
    },
    compoundVariants: [
      {
        clickable: true,
        selected: true,
        className:
          "bg-primary-100 text-white cursor-pointer hover:bg-primary-90 transition-colors",
      },
      {
        clickable: true,
        selected: false,
        className: "cursor-pointer hover:bg-primary-10 transition-colors",
      },
    ],
    defaultVariants: {
      size: "md",
    },
  },
);

interface BadgeProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof badgeVariants> {
  label: string;
  icon?: React.ReactElement<SVGSVGElement>;
  asChild?: boolean;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      label,
      selected,
      size,
      icon,
      asChild,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div";
    const clickable = !!onClick && true;
    return (
      <Comp
        className={cn(badgeVariants({ size, selected, clickable, className }))}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {icon}
        {label}
      </Comp>
    );
  },
);

Badge.displayName = "Badge";

export { Badge };
