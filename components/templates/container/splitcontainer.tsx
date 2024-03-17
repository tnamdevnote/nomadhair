import React from "react";
import Container from "./container";

export interface SplitContainerProps {
  className?: string;
  leftWeight?: number;
  rightWeight?: number;
  children: React.ReactNode[];
}

function SplitContainer({
  className,
  leftWeight = 1,
  rightWeight = 1,
  children,
}: SplitContainerProps) {
  const [left, right] = children;
  return (
    <Container
      className={[
        "flex flex-col items-center gap-8 md:flex-row",
        `${className}`,
      ].join(" ")}
    >
      {left}
      {right}
    </Container>
  );
}

function Left({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={className}>{children}</div>;
}

function Right({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={className}>{children}</div>;
}

SplitContainer.Left = Left;
SplitContainer.Right = Right;

export default SplitContainer;
