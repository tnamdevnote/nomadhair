import React, { ComponentPropsWithoutRef } from "react";
import Container, { ContainerProps } from "./container";

export interface SplitContainerProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: React.ReactNode[];
}
/**
 * @description
 * A flex container that renders a split screen. You can
 * adjust to proportion of each panel by applying basis-[x] classNames
 */
function SplitContainer({
  className,
  children,
  ...props
}: SplitContainerProps) {
  const [left, right] = children;
  return (
    <Container
      className={[
        "flex flex-col items-center gap-8 md:flex-row",
        `${className}`,
      ].join(" ")}
      {...props}
    >
      {left}
      {right}
    </Container>
  );
}

function Left({ className, children, ...props }: ContainerProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

function Right({ className, children, ...props }: ContainerProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

SplitContainer.Left = Left;
SplitContainer.Right = Right;

export default SplitContainer;
