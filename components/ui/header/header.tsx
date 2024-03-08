"use client";

import React, { useState } from "react";
import Button from "../button";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "../logo";
import Container from "../Container";

type User = {
  name: string;
};
export interface HeaderProps {
  user?: User;
}

function Header({ user }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // setting fixed property will make header disappear on storybook
    <header className="h-navbar-height-sm lg:h-navbar-height-lg fixed top-0 w-full bg-secondary-10">
      <Container className="flex items-center py-4 lg:px-[200px] lg:py-16">
        <Link href="/" aria-label="Home">
          <Logo className="h-4 md:h-7" />
        </Link>
        <nav
          className={`${isOpen ? "visible" : "invisible"} top-navbar-height-sm fixed left-0 h-[calc(100vh-var(--navbar-height-sm))] w-full bg-secondary-10 md:visible md:relative md:top-0 md:ml-auto md:block md:h-auto md:w-auto`}
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
