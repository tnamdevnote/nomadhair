import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

const Skeleton = ({ className, ...props }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn("md animate-pulse rounded bg-primary-15", className)}
      {...props}
    />
  );
};

export { Skeleton };
