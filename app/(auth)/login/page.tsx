"use client";

import { Button } from "@/components/atoms/button";
import { Container } from "@/components/templates/container";
import Link from "next/link";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/server/initFirebase";
import { MouseEvent, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { useState } from "react";
import { createUser } from "@/server/handler/userHandler";
import { mapUser } from "@/server/mapper/userMapper";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleAuth = async (clickEvent: MouseEvent, providerName: string) => {
    try {
      let credential, provider;
      switch (providerName) {
        case "Google":
          provider = new GoogleAuthProvider();
          credential = await signInWithPopup(auth, provider);
          break;
        case "Facebook":
          provider = new FacebookAuthProvider();
          credential = await signInWithPopup(auth, provider);
          break;
      }
      const user = mapUser(credential, 1);
      if (credential?.user.email && credential?.user.uid) {
        setCookie("email", user.email);
        setCookie("displayName", user.displayName);
        await createUser(user, credential.user.uid);
        setLoggedIn(true);
      } else {
        throw new Error("Identity provider did not provide the user email");
      }
    } catch (error: any) {
      throw error;
    }
  };

  if (loggedIn) redirect("/");

  return (
    <Container className="flex min-h-dvh max-w-screen-xs flex-col items-center justify-center">
      <h1 className="w-full text-left text-xl text-primary-100 lg:text-2xl">
        Login
      </h1>
      <section
        aria-label="login form"
        className="mt-8 flex w-full flex-col gap-4"
      >
        <Button
          onClick={(e) => handleAuth(e, "Google")}
          className="w-full"
          size="lg"
        >
          Continue with Google
        </Button>
        <Button
          onClick={(e) => handleAuth(e, "Facebook")}
          className="w-full"
          intent="secondary"
          size="lg"
        >
          Continue with Facebook
        </Button>
      </section>
    </Container>
  );
};

export default Login;
