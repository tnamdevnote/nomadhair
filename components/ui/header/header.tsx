"use client";

import React, { useEffect, useState } from "react";
import Button from "../button";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "../logo";
import Container from "../container";

type User = {
  name: string;
};
export interface HeaderProps {
  user?: User;
}

function Header({ user }: HeaderProps) {
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

    console.log("hello");
    return () => {
      window.removeEventListener("orientationchange", closeNaveMenu);
      window.removeEventListener("resize", closeNaveMenu);
    };
  }, []);

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
              <Button variant="link" size="sm" asChild className="w-full">
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" size="sm" asChild className="w-full">
                <Link href="/">About</Link>
              </Button>
            </li>
            {user ? (
              <li>
                <Button variant="link" size="sm" asChild className="w-full">
                  <Link href="/">My Appointment</Link>
                </Button>
              </li>
            ) : null}
          </ul>
        </nav>
        <div className="ml-auto flex items-center md:ml-0 md:gap-4">
          {user ? (
            <>
              <Button variant="ghost" size="sm" className="font-bold">
                Hi, {user.name}!
              </Button>
              <Button size="sm">Log out</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button variant="contained" size="sm">
                Sign up
              </Button>
            </>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <span className="sr-only">Toggle Menu Button</span>
          <HamburgerMenuIcon />
        </Button>
      </Container>
    </header>
  );
}

export { Header };
