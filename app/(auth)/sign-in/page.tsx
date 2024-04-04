"use client";

import { Button } from "@/components/atoms/button";
import { Container } from "@/components/templates/container";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/server/initFirebase";
import { MouseEvent } from "react";
import { redirect } from "next/navigation";
import { setCookie } from "cookies-next";
import { useState } from "react";
import { mapUser } from "@/server/mapper/userMapper";
import { User } from "@/server/model/user";

const SignIn = () => {
  const [signedIn, setSignedIn] = useState(false);
  const userPatchFetcher = async (user: User, guid: string) => {
    fetch("/sign-in/api", {
      method: "PATCH",
      body: JSON.stringify({
        ...user,
        guid,
      }),
    });
  };

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
        setCookie("id", credential.user.uid);
        setCookie("photo", credential.user.photoURL);
        await userPatchFetcher(user, credential.user.uid);
        setSignedIn(true);
      } else {
        throw new Error("Identity provider did not provide the user email");
      }
    } catch (error: any) {
      throw error;
    }
  };

  if (signedIn) redirect("/");

  return (
    <Container className="flex min-h-dvh max-w-screen-sm flex-col items-center justify-center">
      <h1 className="w-full text-left text-xl text-primary-100 lg:text-xl">
        Sign in
      </h1>
      <section
        aria-label="sign in form"
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

export default SignIn;
