import React from "react";
import Container from "./container";

export interface SplitContainerProps {
  className?: string;
  children: React.ReactNode[];
}
/**
 * @description
 * A flex container that renders a split screen. You can
 * adjust to proportion of each panel by applying basis-[x] classNames
 */
function SplitContainer({ className, children }: SplitContainerProps) {
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
