"use client";

import React from "react";
import { Button } from "@/components/atoms/button";
import Link from "next/link";

export interface FallbackProps {
  image: React.ReactNode;
  title: string;
  body?: string;
  buttonText: string;
  redirect: string;
}

function Fallback({ image, title, body, buttonText, redirect }: FallbackProps) {
  return (
    <section
      aria-label={title}
      className="flex h-screen w-full flex-col items-center justify-center gap-16 px-4 py-8 md:px-16 lg:px-32 lg:py-32"
    >
      {image}
      <div className="flex flex-col items-center">
        <h2 className="text-center text-base">{title}</h2>
        <p className="text-center">{body}</p>
      </div>
      <Button size="md" asChild>
        <Link href={redirect}>{buttonText}</Link>
      </Button>
    </section>
  );
}

export default Fallback;
