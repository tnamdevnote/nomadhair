import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from './../../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      intent: {
        primary: 'bg-primary-100 text-white hover:bg-primary-100/90',
        secondary: 'bg-secondary-100 text-white hover:bg-secondary-100/90',
        tertiary: 'bg-tertiary-100 text-white hover:bg-tertiary-100/90',
      },
      variant: {
        contained: undefined,
        outline: 'bg-transparent border border-current hover:border-current ',
        text: 'bg-transparent',
        link: 'bg-transparent text-current underline-offset-4 hover:underline hover:bg-transparent',
      },
      size: {
        default: 'h-10 px-8 py-4.5',
        sm: 'h-9 rounded-md px-4 py-3.5',
        md: 'h-10 px-8 py-4.5',
        lg: 'h-11 rounded-md px-12 py-6',
      },
    },
    compoundVariants: [
      {
        intent: 'primary',
        variant: ['outline', 'text'],
        className: 'text-primary-100 hover:bg-primary-100/5',
      },
      {
        intent: 'secondary',
        variant: ['outline', 'text'],
        className: 'text-secondary-100 hover:bg-secondary-100/5',
      },
      {
        intent: 'tertiary',
        variant: ['outline', 'text'],
        className: 'text-tertiary-100 hover:bg-tertiary-100/5',
      },
      {
        intent: 'primary',
        variant: 'link',
        className: 'text-primary-100',
      },
      {
        intent: 'secondary',
        variant: 'link',
        className: 'text-secondary-100',
      },
      {
        intent: 'tertiary',
        variant: 'link',
        className: 'text-tertiary-100',
      },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, intent = 'primary', variant, size, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ intent, variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
