import { Button } from "@/shared/atoms/button";
import { Fallback, NotFound as NotFoundImg } from "@/shared/organisms/fallback";
import Link from "next/link";

import React from "react";

function NotFound() {
  return (
    <Fallback
      image={<NotFoundImg />}
      title="Oops! Looks like you are lost."
      body="The page you are looking for doesn’t exits."
    >
      <Button size="md" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </Fallback>
  );
}

export default NotFound;
