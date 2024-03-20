import Button from "@/components/atoms/button";
import { Container } from "@/components/templates/container";

const SignUp = () => {
  return (
    <Container className="max-w-screen-xs flex min-h-dvh flex-col items-center justify-center">
      <h1 className="w-full text-left text-xl text-primary-100 lg:text-2xl">
        Sign Up
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
      </section>
    </Container>
  );
};

export default SignUp;
