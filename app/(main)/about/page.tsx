import React from "react";
import { Container, SplitContainer } from "@/components/templates/container";
import Profile from "@/public/Profile.jpeg";
import Image from "next/image";
import Button from "@/components/atoms/button";

function About() {
  return (
    <div className="flex flex-col gap-16 py-8 md:mb-64">
      <Container className="">
        <h1 className="text-lg text-primary-100 lg:text-2xl">About Me</h1>
      </Container>
      <SplitContainer className="md:flex-row-reverse md:items-start md:gap-16">
        <SplitContainer.Left className="flex justify-center px-12 md:basis-1/2 md:px-0">
          <Image
            src={Profile}
            width={450}
            alt="Profile Image"
            className="rounded-full shadow-xl md:shadow-2xl"
          />
        </SplitContainer.Left>
        <SplitContainer.Right className="flex flex-col gap-16 md:basis-2/3">
          <h2 className="text-center text-lg text-primary-100 md:text-left md:text-xl">
            Happiness is a decision, not a destination. Realize it with us!
          </h2>
          <p className="text-center text-base text-neutral-70 md:text-left lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            tellus leo, vestibulum a ipsum sed, suscipit sodales ex. Quisque
            sagittis, orci dignissim malesuada fringilla, ante massa condimentum
            magna, et rutrum nisl justo eu risus.
          </p>
          <Button size="lg" className="min-w-0 md:w-fit">
            Contact Me
          </Button>
        </SplitContainer.Right>
      </SplitContainer>
    </div>
  );
}

export default About;
