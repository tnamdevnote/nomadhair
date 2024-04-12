import { Container } from "@/components/templates/container";
import SignInButton from "./components/signInButton";

const SignIn = () => {
  return (
    <Container className="flex min-h-dvh max-w-screen-sm flex-col items-center justify-center">
      <h1 className="w-full text-left text-xl text-primary-100 lg:text-xl">
        Sign in
      </h1>
      <section
        aria-label="sign in form"
        className="mt-8 flex w-full flex-col gap-4"
      >
        <SignInButton provider="Google" />
        <SignInButton provider="Facebook" />
      </section>
    </Container>
  );
};

export default SignIn;
