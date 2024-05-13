import React from "react";
import Image from "next/image";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { barber } from "@/public/illustrations";
import { SplitContainer } from "@/components/templates/container";
import { Button } from "@/components/atoms/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import DividerWave from "./dividerWave";

async function HeroSection() {
  const { isAuthenticated } = getKindeServerSession();
  const isSignedIn = await isAuthenticated();

  return (
    <section
      aria-label="Hero"
      className="relative flex justify-center bg-secondary-15"
    >
      <SplitContainer className="h-[70dvh] py-12 md:h-auto md:flex-row-reverse md:justify-between md:py-44">
        <SplitContainer.Left className="flex basis-1/2 justify-center">
          <Image src={barber} width={300} alt="barber image" priority />
        </SplitContainer.Left>
        <SplitContainer.Right className="group flex basis-1/2 flex-col gap-4">
          <h1
            className="animate-fade-in text-left text-lg font-semibold text-primary-100 motion-reduce:animate-none md:text-xl"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            Bringing style to your place
          </h1>
          <p
            className="w-80 animate-fade-in"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            Enjoy a quality haircut without leaving the comfort of your own
            home.
          </p>
          <div
            className="mt-8 animate-fade-in"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            <Button size="md" className="shadow-md shadow-primary-100" asChild>
              {isSignedIn ? (
                <Link href="/my-appointments">Book appointment</Link>
              ) : (
                <RegisterLink
                  authUrlParams={{
                    connection_id:
                      process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
                  }}
                >
                  Get started!
                </RegisterLink>
              )}
            </Button>
          </div>
        </SplitContainer.Right>
      </SplitContainer>
      <DividerWave className="absolute bottom-0 left-0 w-full overflow-hidden md:h-auto" />
    </section>
  );
}

export default HeroSection;
