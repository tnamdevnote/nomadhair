import Image from "next/image";
import { SplitContainer } from "@/components/templates/container";
import { departing } from "@/public/illustrations";
import React from "react";
import { Button } from "@/components/atoms/button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      className="flex justify-center bg-secondary-15"
      aria-labelledby="about"
    >
      <SplitContainer className="py-12 md:py-32">
        <SplitContainer.Left className="flex basis-1/2 justify-center">
          <Image src={departing} width={300} alt="departing image" priority />
        </SplitContainer.Left>
        <SplitContainer.Right
          className="flex basis-1/2 animate-fade-in flex-col items-center gap-10"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <h2
            className="text-center text-lg font-medium text-primary-100 md:text-left"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <strong
              id="about"
              className="mb-4 flex items-center justify-center gap-2 text-sm font-normal md:justify-start"
            >
              <span className="inline-block h-[0.5px] w-8 bg-primary-100"></span>
              ABOUT NOMADHAIR
              <span className="inline-block h-[0.5px] w-8 bg-primary-100"></span>
            </strong>
            Your friendly neighborhood hair designer
          </h2>
          <p className="animate-fade-in text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            tellus leo, vestibulum a ipsum sed, suscipit sodales ex. Vestibulum
            id varius risus. Fusce tempus tellus sed erat scelerisque venenatis.
            Donec consequat ultrices quam, vitae dignissim mi sodales non.
          </p>
        </SplitContainer.Right>
      </SplitContainer>
    </section>
  );
};

export default AboutSection;
