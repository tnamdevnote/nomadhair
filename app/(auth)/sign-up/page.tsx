import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Container } from "@/components/templates/container";
import { Button } from "@/components/atoms/button";
import Link from "next/link";

export default function SignUp() {
  return (
    <Container className="flex min-h-dvh max-w-screen-sm flex-col items-center justify-center">
      <h1 className="w-full text-left text-xl text-primary-100 lg:text-xl">
        Sign up
      </h1>
      <section
        aria-label="sign in form"
        className="mt-8 flex w-full flex-col gap-4"
      >
        <Button className="w-full" size={"lg"} intent="primary">
          <RegisterLink
            authUrlParams={{
              connection_id:
                process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
            }}
          >{`Continue with Google`}</RegisterLink>
        </Button>
        <div className="flex w-full justify-center">
          <span className="text-sm">
            {"Already have an account? "}{" "}
            <Button className="text-sm font-bold" variant={"link"} asChild>
              <Link href={"/sign-in"}>Sign in!</Link>
            </Button>
          </span>
        </div>
      </section>
    </Container>
  );
}
