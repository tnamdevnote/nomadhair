"use client";

import React from "react";
import { Button } from "@/components/atoms/button";

export interface FallbackProps {
  image: React.ReactNode;
  title: string;
  body?: string;
  buttonText: string;
  onButtonClick: () => void;
}

function Fallback({
  image,
  title,
  body,
  buttonText,
  onButtonClick,
}: FallbackProps) {
  return (
    <section
      aria-label={title}
      className="flex w-full flex-col items-center gap-16 px-4 py-8 md:px-16 lg:px-32 lg:py-32"
    >
      {image}
      <div className="flex flex-col items-center">
        <h2 className="text-center">{title}</h2>
        <p className="text-center">{body}</p>
      </div>
      <Button size="md" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </section>
  );
}

export default Fallback;
