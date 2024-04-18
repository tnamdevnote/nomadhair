// import { useAuthContext } from "@/app/authProvider";
import { Button } from "@/components/atoms/button";
import { redirect } from "next/navigation";
import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

function SignInButton({ provider }: { provider: "Google" | "Facebook" }) {
  // const { user, signIn } = useAuthContext();

  // if (user) redirect("/");

  return (
    <Button
      className="w-full"
      size={"lg"}
      intent={provider === "Google" ? "primary" : "secondary"}
      // onClick={() => signIn(`${provider}`)}
    >
      <LoginLink
        authUrlParams={{
          connection_id: process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
        }}
      >{`Continue with ${provider}`}</LoginLink>
    </Button>
  );
}

export default SignInButton;
