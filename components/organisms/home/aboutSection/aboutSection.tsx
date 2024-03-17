import Image from "next/image";
import { SplitContainer } from "@/components/templates/container";
import { departing } from "@/public/illustrations";
import React from "react";
import Button from "@/components/atoms/button";

const AboutSection = () => {
  return (
    <section className="bg-secondary-15" aria-labelledby="about">
      <SplitContainer className="py-12 md:py-44">
        <SplitContainer.Left className="flex basis-1/2 justify-center">
          <Image src={departing} width={425} alt="departing image" />
        </SplitContainer.Left>
        <SplitContainer.Right className="flex basis-1/2 flex-col items-center gap-10">
          <h2 className="text-center text-lg text-primary-100 md:text-left lg:text-xl">
            <strong
              id="about"
              className="mb-4 flex items-center justify-center gap-2 text-base font-normal md:justify-start"
            >
              <span className="inline-block h-0.5 w-8 bg-primary-100"></span>
              ABOUT NOMADHAIR
              <span className="inline-block h-0.5 w-8 bg-primary-100"></span>
            </strong>
            Your friendly neighborhood hair designer
          </h2>
          <p className="text-center md:text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="w-full">
            <Button className="w-full md:w-auto">Learn More</Button>
          </div>
        </SplitContainer.Right>
      </SplitContainer>
    </section>
  );
};

export default AboutSection;
