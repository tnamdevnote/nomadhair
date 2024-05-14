import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";

const badgeVariants = cva(
  "flex items-center px-3 py-2 rounded-full text-neutral-90 ring ring-1 ring-neutral-15",
  {
    variants: {
      size: {
        sm: "px-2.5 py-2 text-sm/[100%]",
        md: "px-4 py-3 text-sm/[100%]",
        lg: "px-6 py-4 text-base/[100%]",
      },
      _clickable: {
        true: undefined,
      },
      selected: {
        true: undefined,
      },
    },
    compoundVariants: [
      {
        _clickable: true,
        selected: true,
        className:
          "bg-primary-100 text-white cursor-pointer hover:bg-primary-90 transition-colors",
      },
      {
        _clickable: true,
        selected: false,
        className: "cursor-pointer hover:bg-primary-10 transition-colors",
      },
    ],
    defaultVariants: {
      size: "sm",
    },
  },
);

interface BadgeProps
  extends ComponentPropsWithoutRef<"div">,
    Omit<VariantProps<typeof badgeVariants>, "_clickable"> {
  label: string;
  icon?: React.ReactElement<SVGSVGElement>;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    { className, label, selected, size, icon, children, onClick, ...props },
    ref,
  ) => {
    // a private boolean type used to enable click event.
    const _clickable = !!onClick && true;
    return (
      <div
        className={cn(badgeVariants({ size, selected, _clickable, className }))}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {icon}
        {label}
      </div>
    );
  },
);

Badge.displayName = "Badge";

export { Badge };
