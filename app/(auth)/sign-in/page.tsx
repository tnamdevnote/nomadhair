import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Container } from "@/components/templates/container";
import { Button } from "@/components/atoms/button";
import Link from "next/link";

export default function SignIn() {
  return (
    <Container className="flex min-h-dvh max-w-screen-sm flex-col items-center justify-center">
      <h1 className="w-full text-left text-xl text-primary-100 lg:text-xl">
        Sign in
      </h1>
      <section
        aria-label="sign in form"
        className="mt-8 flex w-full flex-col gap-4"
      >
        <Button className="w-full" intent="primary" size={"lg"}>
          <LoginLink
            authUrlParams={{
              connection_id:
                process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
            }}
            postLoginRedirectURL={`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/success`}
          >{`Continue with Google`}</LoginLink>
        </Button>
        <div className="flex w-full justify-center">
          <span className="text-sm">
            {"Don't have an account? "}{" "}
            <Button className="text-sm font-bold" variant={"link"} asChild>
              <Link href={"/sign-up"}>Sign up!</Link>
            </Button>
          </span>
        </div>
      </section>
    </Container>
  );
}
