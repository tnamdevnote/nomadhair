import { Button } from "@/components/atoms/button";
import { Container } from "@/components/templates/container";
import Link from "next/link";

const SignUp = () => {
  return (
    <Container className="flex min-h-dvh max-w-screen-xs flex-col items-center justify-center">
      <h1 className="w-full text-left text-xl text-primary-100 lg:text-2xl">
        Sign up
      </h1>
      <section
        aria-label="sign up form"
        className="mt-8 flex w-full flex-col gap-4"
      >
        <Button className="w-full" size="lg">
          Connect with Google
        </Button>
        <Button className="w-full" intent="secondary" size="lg">
          Connect with Facebook
        </Button>
        <div className="flex items-center justify-center text-sm">
          <p>{"Don't have an account?"}</p>
          <Button variant="link" size="sm" asChild className="font-bold">
            <Link href="/login">Log in!</Link>
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default SignUp;
