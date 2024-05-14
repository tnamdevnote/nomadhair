import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "flex min-w-56 flex-col gap-4 p-6 shadow-md rounded-2xl",
  {
    variants: {
      intent: {
        primary: "bg-primary-90 text-neutral-10",
        secondary: "bg-secondary-90 text-neutral-90",
        tertiary: "bg-tertiary-90 text-neutral-90",
        neutral: "bg-white text-neutral-90",
      },
    },
    defaultVariants: {
      intent: "neutral",
    },
  },
);

const Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ className, intent, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(cardVariants({ intent }), className)}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = "Card";

interface CardHeader extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: React.ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5;
  title: string;
  subheader: string;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeader>(
  (
    { className, avatar, headingLevel = 1, title, subheader, ...props },
    ref,
  ) => {
    const Heading = `h${headingLevel}` as React.ElementType;
    const SubHeading = `h${headingLevel + 1}` as React.ElementType;
    return (
      <div ref={ref} className={cn("flex gap-4", className)} {...props}>
        {avatar ? avatar : null}
        <div>
          <Heading className="text-base font-bold">{title}</Heading>
          <SubHeading className="text-sm">{subheader}</SubHeading>
        </div>
      </div>
    );
  },
);
CardHeader.displayName = "CardHeader";

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  );
});
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  );
});
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardFooter };
