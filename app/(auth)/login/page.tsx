import Button from "@/components/atoms/button";
import { Container } from "@/components/templates/container";
import Link from "next/link";

const Login = () => {
  return (
    <Container className="max-w-screen-xs flex min-h-dvh flex-col items-center justify-center">
      <h1 className="w-full text-left text-xl text-primary-100 lg:text-2xl">
        Login
      </h1>
      <section
        aria-label="login form"
        className="mt-8 flex w-full flex-col gap-4"
      >
        <Button className="w-full" size="lg">
          Continue with Google
        </Button>
        <Button className="w-full" intent="secondary" size="lg">
          Continue with Facebook
        </Button>
        <div className="flex items-center justify-center text-sm">
          <p>{"Don't have an account?"}</p>
          <Button variant="link" size="sm" asChild className="font-bold">
            <Link href="#">Join Now!</Link>
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default Login;
