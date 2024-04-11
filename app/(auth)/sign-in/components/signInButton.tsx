"use client";

import { useAuthContext } from "@/app/authProvider";
import { Button } from "@/components/atoms/button";
import { redirect } from "next/navigation";
import React from "react";

function SignInButton({ provider }: { provider: "Google" | "Facebook" }) {
  const { user, signIn } = useAuthContext();

  if (user) redirect("/");

  return (
    <Button
      className="w-full"
      size={"lg"}
      intent={provider === "Google" ? "primary" : "secondary"}
      onClick={() => signIn(`${provider}`)}
    >{`Continue with ${provider}`}</Button>
  );
}

export default SignInButton;
