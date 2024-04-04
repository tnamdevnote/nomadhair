import Image from "next/image";
import { SplitContainer } from "@/components/templates/container";
import { barber } from "@/public/illustrations";
import React from "react";
import { Button } from "@/components/atoms/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section aria-label="Hero">
      <SplitContainer className="py-12 md:flex-row-reverse md:justify-between md:py-44">
        <SplitContainer.Left className="flex basis-1/2 justify-center">
          <Image src={barber} width={300} alt="barber image" priority />
        </SplitContainer.Left>
        <SplitContainer.Right className="flex basis-1/2 flex-col gap-10">
          <h1 className="text-center text-xl font-medium text-primary-100 md:text-left">
            Bringing style to your place
          </h1>
          <p className="text-center md:text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="w-full">
            <Button size="lg" className="w-full md:w-auto" asChild>
              <Link href={"/sign-in"}>Get started!</Link>
            </Button>
          </div>
        </SplitContainer.Right>
      </SplitContainer>
    </section>
  );
};

export default HeroSection;
