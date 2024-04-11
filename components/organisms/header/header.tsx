"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/atoms/button";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "@/components/atoms/logo";
import { Container } from "@/components/templates/container";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { onAuthStateChanged } from "@/lib/auth";
import { auth } from "@/server/initFirebase";

interface HeaderProps {
  userName?: string;
  photoURL?: string;
}

interface CurrentUser {
  userName?: string;
  photoURL?: string;
}

function useUserSession(initialUser: CurrentUser) {
  // The initialUser comes from the server via a server component
  const [user, setUser] = useState<CurrentUser | null>(initialUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser((prev) => ({
        ...prev,
        userName: authUser?.displayName ?? "",
        photoURL: authUser?.photoURL ?? "",
      }));
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user;
}

function Header({ userName, photoURL }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const user = useUserSession({ userName, photoURL });

  // scroll lock when navMenu is open
  useEffect(() => {
    const doc = document.querySelector("html");
    if (doc) {
      doc.classList.toggle("overflow-hidden", isOpen);
    }
  }, [isOpen]);

  // close the navMenu when screen resizes
  useEffect(() => {
    const closeNaveMenu = () => setIsOpen(false);
    window.addEventListener("orientationchange", closeNaveMenu);
    window.addEventListener("resize", closeNaveMenu);

    return () => {
      window.removeEventListener("orientationchange", closeNaveMenu);
      window.removeEventListener("resize", closeNaveMenu);
    };
  }, []);

  const handleSignOut = async () => {
    auth.signOut();
    const res = await fetch("/api/sign-out", {
      method: "DELETE",
    });
    if (res.ok) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <header className="fixed top-0 z-10 h-navbar-height-sm w-full bg-secondary-10 md:bg-transparent md:backdrop-blur-md lg:h-navbar-height-lg">
      <Container className="flex items-center py-4 lg:py-5">
        <Link href="/" aria-label="Home">
          <Logo className="h-5 lg:h-7" />
        </Link>
        <nav
          className={`${isOpen ? "visible" : "invisible"} fixed left-0 top-navbar-height-sm h-[calc(100vh-var(--navbar-height-sm))] w-full bg-secondary-10 md:visible md:relative md:top-0 md:ml-auto md:block md:h-auto md:w-auto md:bg-transparent`}
        >
          <ul className=" mt-16 flex w-full flex-col gap-2 px-4 md:mt-0 md:flex-row md:px-0">
            <li>
              <Button
                variant="link"
                size="sm"
                asChild
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                size="sm"
                asChild
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/about">About</Link>
              </Button>
            </li>
            {user?.userName ? (
              <li>
                <Button
                  variant="link"
                  size="sm"
                  asChild
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/my-appointments">My Appointments</Link>
                </Button>
              </li>
            ) : null}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-1 md:ml-2 md:gap-2">
          {user?.userName ? (
            <>
              <Avatar className="ring-1 ring-neutral-15">
                <AvatarImage src={user?.photoURL} alt="profile" />
                <AvatarFallback>TN</AvatarFallback>
              </Avatar>
              <Button
                aria-label="Sign out"
                variant="ghost"
                icon={<LogOutIcon />}
                iconPosition="after"
                size="sm"
                className="font-bold"
                onClick={() => handleSignOut()}
              >
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button
                aria-label="Sign in"
                iconPosition="after"
                size="sm"
                asChild
              >
                <Link href="/sign-in">Sign in</Link>
              </Button>
            </>
          )}
        </div>
        <Button
          aria-label="Toggle Menu Button"
          variant="ghost"
          icon={<HamburgerMenuIcon />}
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        />
      </Container>
    </header>
  );
}

export { Header };
