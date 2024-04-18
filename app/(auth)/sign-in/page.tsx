import {
  LoginLink,
  RegisterLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Container } from "@/components/templates/container";
import { Button } from "@/components/atoms/button";

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
        <Button className="w-full" size={"lg"} intent="primary">
          <LoginLink
            authUrlParams={{
              connection_id:
                process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
            }}
          >{`Continue with Google`}</LoginLink>
        </Button>
      </section>
    </Container>
  );
};

export default SignIn;
