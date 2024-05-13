import { Container } from "@/components/templates/container";
import React from "react";

const AboutSection = () => {
  return (
    <section aria-labelledby="about">
      <Container className="flex flex-col gap-4 py-16 md:py-32">
        <h2 className="text-lg font-bold text-primary-100">About</h2>
        <p className="max-w-screen-md text-lg leading-snug text-primary-90 md:text-xl md:font-medium">
          {
            "NomadHair offers a convenient, quality men's haircut service right at\
          your doorstep."
          }
        </p>
      </Container>
    </section>
  );
};

export default AboutSection;
