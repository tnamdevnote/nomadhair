import Image from "next/image";
import { SplitContainer } from "@/components/templates/container";
import { barber } from "@/public/illustrations";
import React from "react";
import Button from "@/components/atoms/button";

const Hero = () => {
  return (
    <section aria-label="Hero">
      <SplitContainer
        leftWeight={1}
        rightWeight={1}
        className="py-12 md:flex-row-reverse md:py-44"
      >
        <SplitContainer.Left className="flex justify-center">
          <Image src={barber} width={425} alt="barber image" />
        </SplitContainer.Left>
        <SplitContainer.Right className="flex flex-col items-center gap-10">
          <h1 className="text-center text-xl font-medium text-primary-100 md:text-left lg:text-2xl">
            Bringing style to your place
          </h1>
          <p className="text-center md:text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="w-full">
            <Button className="w-full md:w-auto">Book Appointment</Button>
          </div>
        </SplitContainer.Right>
      </SplitContainer>
    </section>
  );
};

export default Hero;
