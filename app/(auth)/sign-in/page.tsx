"use client";

import { Button } from "@/components/atoms/button";
import { Container } from "@/components/templates/container";
import { redirect } from "next/navigation";
import { useAuthContext } from "@/app/authProvider";

const SignIn = () => {
  const { user, signIn } = useAuthContext();

  if (user) redirect("/");

  return (
    <Container className="flex min-h-dvh max-w-screen-sm flex-col items-center justify-center">
      <h1 className="w-full text-left text-xl text-primary-100 lg:text-xl">
        Sign in
      </h1>
      <section
        aria-label="sign in form"
        className="mt-8 flex w-full flex-col gap-4"
      >
        <Button className="w-full" size="lg" onClick={() => signIn("Google")}>
          Continue with Google
        </Button>
        <Button
          className="w-full"
          intent="secondary"
          size="lg"
          onClick={() => signIn("Facebook")}
        >
          Continue with Facebook
        </Button>
      </section>
    </Container>
  );
};

export default SignIn;
