"use client";

import { Button } from "@/shared/atoms/button";
import { Fallback, Error as ErrorImage } from "@/shared/organisms/fallback";
import Link from "next/link";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Fallback
      image={<ErrorImage />}
      title="Oops! Something went wrong."
      body="Please try agin later."
    >
      <Button size="md" onClick={reset}>
        Try again
      </Button>
    </Fallback>
  );
}
