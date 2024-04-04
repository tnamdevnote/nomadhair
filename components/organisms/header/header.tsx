"use client";

import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Button } from "@/components/atoms/button";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "@/components/atoms/logo";
import { Container } from "@/components/templates/container";
import { LogOutIcon, ChevronRightIcon, LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookies, removeCookies] = useCookies([
    "displayName",
    "email",
    "id",
  ]);
  const [displayName, setDisplayName] = useState();
  const router = useRouter();
  const handleRefresh = () => {
    router.refresh();
  };

  // scroll lock when navMenu is open
  useEffect(() => {
    const doc = document.querySelector("html");
    if (doc) {
      doc.classList.toggle("overflow-hidden", isOpen);
    }
  }, [isOpen]);

  // close the navMenu when screen resizes
  useEffect(() => {
    handleRefresh();
    const closeNaveMenu = () => setIsOpen(false);
    window.addEventListener("orientationchange", closeNaveMenu);
    window.addEventListener("resize", closeNaveMenu);

    return () => {
      window.removeEventListener("orientationchange", closeNaveMenu);
      window.removeEventListener("resize", closeNaveMenu);
    };
  }, []);

  useEffect(() => {
    setDisplayName(cookies.displayName);
    handleRefresh();
  }, [cookies.displayName]);

  const signOut = () => {
    removeCookies("displayName");
    removeCookies("email");
    removeCookies("id");
    setDisplayName(cookies.displayName);
    router.push("/");
    handleRefresh();
  };

  return (
    <header className="fixed top-0 z-10 h-navbar-height-sm w-full bg-secondary-10 md:bg-opacity-95 lg:h-navbar-height-lg">
      <Container className="flex items-center py-4 lg:py-8">
        <Link href="/" aria-label="Home">
          <Logo className="h-4 md:h-7" />
        </Link>
        <nav
          className={`${isOpen ? "visible" : "invisible"} fixed left-0 top-navbar-height-sm h-[calc(100vh-var(--navbar-height-sm))] w-full bg-secondary-10 md:visible md:relative md:top-0 md:ml-auto md:block md:h-auto md:w-auto`}
        >
          <ul className="flex w-full flex-col gap-4 px-4 md:flex-row md:px-0">
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
            {displayName ? (
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
        <div className="ml-auto mr-2 flex items-center gap-1 md:ml-0 md:gap-2">
          {displayName ? (
            <>
              <p className="text-sm font-bold">Hi, {cookies.displayName}!</p>
              <Button
                aria-label="Sign out"
                variant="ghost"
                icon={<LogOutIcon />}
                iconPosition="after"
                size="sm"
                className="font-bold"
                onClick={() => signOut()}
              >
                <span className="hidden md:inline-flex">Sign out</span>
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
