"use client";

import React, { useEffect, useState } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogOutIcon, MenuIcon } from "lucide-react";
import { Container } from "@/components/templates/container";
import { Button } from "@/components/atoms/button";
import Logo from "@/components/atoms/logo";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";

interface HeaderProps {
  photo?: string | null;
  isAuthenticated: boolean;
}

function Header({ photo, isAuthenticated }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <header className="fixed top-0 z-10 h-navbar-height-sm w-full border-b-[0.5px] border-primary-10/90 bg-secondary-10 md:bg-transparent md:backdrop-blur-md lg:h-navbar-height-lg">
      <Container className="flex items-center py-4 lg:py-5">
        <Link href="/" aria-label="Home">
          <Logo className="h-5 lg:h-7" />
        </Link>
        <nav
          className={`${isOpen ? "visible" : "invisible"} fixed left-0 top-navbar-height-sm h-[calc(100vh-var(--navbar-height-sm))] w-full bg-secondary-10 md:visible md:relative md:top-0 md:ml-auto md:block md:h-auto md:w-auto md:bg-transparent`}
        >
          <ul className="mt-16 flex w-full flex-col gap-2 px-4 md:mt-0 md:flex-row md:px-0">
            <li
              className={`${isOpen ? "animate-fade-in" : ""}`}
              style={{ "--index": 1 } as React.CSSProperties}
            >
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
            <li
              className={`${isOpen ? "animate-fade-in" : ""}`}
              style={{ "--index": 2 } as React.CSSProperties}
            >
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
            {isAuthenticated ? (
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
          {isAuthenticated ? (
            <>
              <Avatar className="ring-1 ring-neutral-15">
                <AvatarImage src={photo ?? ""} alt="profile" />
                <AvatarFallback>TN</AvatarFallback>
              </Avatar>
              <Button
                className="font-bold"
                aria-label="Sign out"
                variant="ghost"
                icon={<LogOutIcon size={16} />}
                iconPosition="after"
                size="sm"
                asChild
              >
                <LogoutLink>Sign out</LogoutLink>
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
          icon={<MenuIcon size={16} />}
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        />
      </Container>
    </header>
  );
}

export { Header };
